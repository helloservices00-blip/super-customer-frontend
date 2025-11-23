// src/pages/VendorsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://super-backend-bzin.onrender.com";

const VendorsPage = () => {
  const { moduleId } = useParams();
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/vendors?module=${moduleId}`);
        setVendors(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVendors();
  }, [moduleId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Vendors</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {vendors.map((vendor) => (
          <div
            key={vendor._id}
            style={{
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              minWidth: "150px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: "#fff0f5",
            }}
            onClick={() => navigate(`/vendors/${vendor._id}/categories`)}
          >
            {vendor.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorsPage;
