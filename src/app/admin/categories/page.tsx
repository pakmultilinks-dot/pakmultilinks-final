"use client";

import { useState, useEffect } from "react";
import { CATEGORIES } from "@/data/products";

interface Category {
  name: string;
  slug: string;
  description: string;
}

const STORAGE_KEY = "admin_categories_override";

function getCategories(): Category[] {
  if (typeof window === "undefined") return CATEGORIES;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return CATEGORIES;
}

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editing, setEditing] = useState<Category | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [form, setForm] = useState<Category>({ name: "", slug: "", description: "" });
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  const save = (cats: Category[]) => {
    setCategories(cats);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cats));
  };

  const openAdd = () => {
    setForm({ name: "", slug: "", description: "" });
    setIsNew(true);
    setEditing(null);
  };

  const openEdit = (c: Category) => {
    setForm({ ...c });
    setIsNew(false);
    setEditing(c);
  };

  const handleSave = () => {
    if (!form.name.trim() || !form.slug.trim()) {
      alert("Name and slug are required");
      return;
    }
    let updated: Category[];
    if (isNew) {
      if (categories.some((c) => c.slug === form.slug)) {
        alert("Slug already exists");
        return;
      }
      updated = [...categories, form];
    } else {
      updated = categories.map((c) => (c.slug === editing?.slug ? form : c));
    }
    save(updated);
    setForm({ name: "", slug: "", description: "" });
    setEditing(null);
    setIsNew(false);
  };

  const handleDelete = (slug: string) => {
    save(categories.filter((c) => c.slug !== slug));
    setDeleteConfirm(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">{categories.length} categories</p>
        <button onClick={openAdd} className="px-4 py-2.5 text-sm bg-[#114b2f] text-white rounded-lg hover:bg-[#0b3a24] font-medium">
          + Add Category
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {categories.map((c) => (
          <div key={c.slug} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5">/{c.slug}</p>
              <p className="text-sm text-gray-600 mt-2">{c.description}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => openEdit(c)} className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">Edit</button>
              <button onClick={() => setDeleteConfirm(c.slug)} className="px-3 py-1.5 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {(editing || isNew) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50" onClick={() => { setEditing(null); setIsNew(false); }} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold">{isNew ? "Add Category" : "Edit Category"}</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name *</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug *</label>
                <input type="text" value={form.slug} disabled={!isNew}
                  onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f] disabled:bg-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]" />
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => { setEditing(null); setIsNew(false); }} className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
              <button onClick={handleSave} className="flex-1 px-4 py-3 bg-[#114b2f] text-white rounded-lg hover:bg-[#0b3a24] font-medium">{isNew ? "Add" : "Save"}</button>
            </div>
          </div>
        </div>
      )}

      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50" onClick={() => setDeleteConfirm(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
            <h3 className="text-lg font-bold">Delete category?</h3>
            <p className="text-sm text-gray-600 mt-2">This cannot be undone.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
              <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
