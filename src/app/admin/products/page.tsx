"use client";

import { useState, useEffect } from "react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import type { Product } from "@/data/products";

const STORAGE_KEY = "admin_products_override";

function getProducts(): Product[] {
  if (typeof window === "undefined") return PRODUCTS;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return PRODUCTS;
}

function saveProducts(products: Product[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  // Also notify the store to refresh
  window.dispatchEvent(new CustomEvent("admin-products-updated"));
}

const EMPTY_PRODUCT: Product = {
  slug: "",
  name: "",
  category: CATEGORIES[0]?.name || "Tissue & Paper",
  brand: "Pak Multilinks",
  image: "/products/placeholder.jpg",
  moq: "1 carton",
  price: null,
  inStock: true,
};

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Product | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [form, setForm] = useState<Product>(EMPTY_PRODUCT);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setForm({ ...EMPTY_PRODUCT, slug: `product-${Date.now()}` });
    setIsNew(true);
    setEditing(null);
  };

  const openEdit = (p: Product) => {
    setForm({ ...p });
    setIsNew(false);
    setEditing(p);
  };

  const closeForm = () => {
    setForm(EMPTY_PRODUCT);
    setEditing(null);
    setIsNew(false);
  };

  const handleSave = () => {
    if (!form.name.trim()) {
      alert("Product name is required");
      return;
    }
    if (!form.slug.trim()) {
      alert("Slug is required");
      return;
    }

    let updated: Product[];
    if (isNew) {
      // Check for duplicate slug
      if (products.some((p) => p.slug === form.slug)) {
        alert("A product with this slug already exists");
        return;
      }
      updated = [...products, form];
    } else {
      updated = products.map((p) => (p.slug === editing?.slug ? form : p));
    }

    setProducts(updated);
    saveProducts(updated);
    closeForm();
  };

  const handleDelete = (slug: string) => {
    const updated = products.filter((p) => p.slug !== slug);
    setProducts(updated);
    saveProducts(updated);
    setDeleteConfirm(null);
  };

  const resetToDefault = () => {
    if (confirm("Reset all products to default? This will remove all your changes.")) {
      localStorage.removeItem(STORAGE_KEY);
      setProducts(PRODUCTS);
      window.dispatchEvent(new CustomEvent("admin-products-updated"));
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-gray-600">{products.length} products</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={resetToDefault}
            className="px-4 py-2.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Reset to default
          </button>
          <button
            onClick={openAdd}
            className="px-4 py-2.5 text-sm bg-[#114b2f] text-white rounded-lg hover:bg-[#0b3a24] font-medium"
          >
            + Add Product
          </button>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-4 w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]"
      />

      {/* Table */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Product</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Category</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Brand</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.slug} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt={p.name} className="w-12 h-12 object-contain rounded bg-gray-50" />
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-xs text-gray-500">{p.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{p.category}</td>
                  <td className="px-6 py-4 text-sm">{p.brand}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEdit(p)}
                        className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(p.slug)}
                        className="px-3 py-1.5 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="text-center py-12 text-gray-500">No products found</p>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {(editing || isNew) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50" onClick={closeForm} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <h2 className="text-xl font-bold">{isNew ? "Add Product" : "Edit Product"}</h2>

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Product Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]"
                  placeholder="e.g. Rose Petal Tissues"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Slug *</label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") })}
                  disabled={!isNew}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f] disabled:bg-gray-100"
                  placeholder="e.g. rose-petal-tissues"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.slug} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Brand</label>
                  <input
                    type="text"
                    value={form.brand}
                    onChange={(e) => setForm({ ...form, brand: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]"
                  placeholder="/products/image.jpg"
                />
                {form.image && (
                  <img src={form.image} alt="Preview" className="mt-2 w-24 h-24 object-contain rounded bg-gray-50 border" />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">MOQ</label>
                <input
                  type="text"
                  value={form.moq}
                  onChange={(e) => setForm({ ...form, moq: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]"
                  placeholder="1 carton"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">In Stock</label>
                <select
                  value={form.inStock ? "yes" : "no"}
                  onChange={(e) => setForm({ ...form, inStock: e.target.value === "yes" })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={closeForm}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-4 py-3 bg-[#114b2f] text-white rounded-lg hover:bg-[#0b3a24] font-medium"
              >
                {isNew ? "Add Product" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50" onClick={() => setDeleteConfirm(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
            <h3 className="text-lg font-bold">Delete product?</h3>
            <p className="text-sm text-gray-600 mt-2">
              This will remove the product from the catalog. This action cannot be undone.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
