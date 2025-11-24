import React, { useEffect, useState } from "react";
import { fetchVendors } from "../api/api";
import { Link, useParams } from "react-router-dom";

export default function VendorsPage() {
  const { moduleId } = useParams();
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchVendors(moduleId).then(setVendors);
  }, [moduleId]);

  return (
    <div>
      <h2>Vendors</h2>
      {vendors.map(v => (
        <Link key={v._id} to={`/dashboard/categories/${moduleId}/${v._id}`}>
          <div style={{ padding: 10, margin: 10, background: "#ddd", borderRadius: 8 }}>
            {v.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
