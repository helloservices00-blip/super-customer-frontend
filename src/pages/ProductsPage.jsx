import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/api";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  const { moduleId, vendorId, categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchProducts(moduleId, vendorId, categoryId)
      .then(setProducts)
      .catch(e => setErr(e.message))
      .finally(() => setLoading(false));
  }, [moduleId, vendorId, categoryId]);

  if (loading) return <p>Loading products…</p>;
  if (err) return <p style={{ color: "red" }}>Error: {err}</p>;

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 && <p>No products found.</p>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12 }}>
        {products.map(p => (
          <div key={p._id} style={{ padding: 12, borderRadius: 10, background: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
            <h4 style={{ margin: 0 }}>{p.name}</h4>
            <div style={{ marginTop: 8, color: "#333" }}>₹{p.price ?? "—"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
