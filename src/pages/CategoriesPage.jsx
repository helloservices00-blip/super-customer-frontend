import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api/api";
import { Link, useParams } from "react-router-dom";

export default function CategoriesPage() {
  const { moduleId, vendorId } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories(moduleId, vendorId).then(setCategories);
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      {categories.map(c => (
        <Link key={c._id} to={`/dashboard/subcategories/${c._id}`}>
          <div style={{ padding: 10, margin: 10, background: "#ccc", borderRadius: 8 }}>
            {c.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
