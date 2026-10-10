"use client";

import { useState, useEffect } from "react";
import { CATEGORIES } from "@/data/products";
import type { Product } from "@/data/products";

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("/api/admin/products");
    if (!res.ok) throw new Error("API failed");
    const { products } = await res.json();
    if (!products || products.length === 0) {
      const { PRODUCTS } = await import("@/data/products");
      return PRODUCTS;
    }
    return products.map((db: any) => {
      let image = db.image || "";
      if (image.includes("pakmultilinks-final.vercel.app")) {
        image = image.replace("https://pakmultilinks-final.vercel.app", "");
      }
      return {
        name: db.name,
        slug: db.slug,
        image,
        category: db.category,
        brand: db.brand,
        moq: db.moq,
        price: db.price,
        inStock: db.in_stock,
      };
    });
  } catch {
    const { PRODUCTS } = await import("@/data/products");
    return PRODUCTS;
  }
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
  const [uploading, setUploading] = useState(false);
  const [deletedProduct, setDeletedProduct] = useState<Product | null>(null);
  const [showUndo, setShowUndo] = useState(false);

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      setForm({ ...form, image: data.url });
    } catch (e: any) {
      alert(e.message || "Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    getProducts().then(setProducts);
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

  const handleSave = async () => {
    if (!form.name.trim()) {
      alert("Product name is required");
      return;
    }
    if (!form.slug.trim()) {
      alert("Slug is required");
      return;
    }

    // Convert image to full URL for database
    const dbImage = form.image.startsWith("http") ? form.image : `https://pakmultilinks-final.vercel.app${form.image.startsWith("/") ? form.image : "/" + form.image}`;

    const dbData = {
      name: form.name,
      slug: form.slug,
      image: dbImage,
      category: form.category,
      brand: form.brand,
      moq: form.moq,
      price: form.price,
      in_stock: form.inStock,
    };

    try {
      if (isNew) {
        const res = await fetch("/api/admin/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dbData),
        });
        if (!res.ok) {
          const { error } = await res.json();
          alert("Error adding product: " + error);
          return;
        }
      } else {
        const res = await fetch("/api/admin/products", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...dbData, slug: form.slug }),
        });
        if (!res.ok) {
          const { error } = await res.json();
          alert("Error updating product: " + error);
          return;
        }
      }
    } catch (e: any) {
      alert("Error: " + e.message);
      return;
    }

    // Refresh list
    const updated = await getProducts();
    setProducts(updated);
    closeForm();
  };

  const handleDelete = async (slug: string) => {
    const product = products.find((p) => p.slug === slug);
    if (!product) return;
    if (!confirm(`Delete "${product.name}"?`)) return;
    try {
      const res = await fetch(`/api/admin/products?slug=${encodeURIComponent(slug)}`, { method: "DELETE" });
      if (!res.ok) {
        const { error } = await res.json();
        alert("Error deleting: " + error);
        return;
      }
    } catch (e: any) {
      alert("Error: " + e.message);
      return;
    }
    const updated = await getProducts();
    setProducts(updated);
    setDeleteConfirm(null);
    // Save for undo
    setDeletedProduct(product);
    setShowUndo(true);
    setTimeout(() => setShowUndo(false), 10000);
  };

  const handleUndo = async () => {
    if (!deletedProduct) return;
    try {
      const dbImage = deletedProduct.image.startsWith("http") ? deletedProduct.image : `https://pakmultilinks-final.vercel.app${deletedProduct.image.startsWith("/") ? deletedProduct.image : "/" + deletedProduct.image}`;
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...deletedProduct, image: dbImage }),
      });
      if (!res.ok) throw new Error("Restore failed");
      const updated = await getProducts();
      setProducts(updated);
      setShowUndo(false);
      setDeletedProduct(null);
    } catch (e: any) {
      alert("Undo failed: " + e.message);
    }
  };

  const resetToDefault = () => {
    alert("Reset is disabled when using database. Delete products individually.");
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
                <label className="block text-sm font-medium mb-1">Product Image</label>
                <div
                  onClick={() => document.getElementById("product-image-upload")?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const f = e.dataTransfer.files?.[0];
                    if (f) handleImageUpload(f);
                  }}
                  className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-[#114b2f] hover:bg-[#f4f9f6] transition-all"
                >
                  {uploading ? (
                    <div className="py-4">
                      <div className="animate-spin w-8 h-8 border-3 border-[#114b2f] border-t-transparent rounded-full mx-auto" />
                      <p className="mt-2 text-sm text-gray-600">Uploading...</p>
                    </div>
                  ) : form.image ? (
                    <div>
                      <img src={form.image} alt="Preview" className="mx-auto w-32 h-32 object-contain rounded bg-gray-50 border" />
                      <p className="mt-2 text-sm text-[#114b2f] font-semibold">Click or drop to change image</p>
                    </div>
                  ) : (
                    <div className="py-4">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto text-gray-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                      <p className="mt-2 text-sm font-semibold text-gray-700">Click to upload or drag & drop</p>
                      <p className="text-xs text-gray-500 mt-1">JPG, PNG, WebP or GIF (max 5MB)</p>
                    </div>
                  )}
                </div>
                <input
                  id="product-image-upload"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleImageUpload(f);
                    e.target.value = "";
                  }}
                />
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

      {/* Undo toast */}
      {showUndo && deletedProduct && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl">
          <p className="text-sm">Deleted <span className="font-bold">"{deletedProduct.name}"</span></p>
          <button
            onClick={handleUndo}
            className="px-4 py-2 bg-[#114b2f] hover:bg-[#0b3a24] text-white text-sm font-bold rounded-full transition-all"
          >
            Undo
          </button>
          <button onClick={() => setShowUndo(false)} className="text-gray-400 hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      )}
    </div>
  );
}
