import React, { useEffect, useState } from "react";
import { fetchModules } from "../api/api";
import { Link } from "react-router-dom";

export default function ModulesPage() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetchModules().then(setModules);
  }, []);

  return (
    <div>
      <h2>Modules</h2>
      {modules.map(m => (
        <Link key={m._id} to={`/dashboard/vendors/${m._id}`}>
          <div style={{ padding: 10, margin: 10, background: "#eee", borderRadius: 8 }}>
            {m.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
