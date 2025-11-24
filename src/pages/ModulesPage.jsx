import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const ModulesPage = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/modules`);
        setModules(res.data || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchModules();
  }, []);

  return (
    <div>
      <h1>Modules</h1>
      {modules && modules.length > 0 ? (
        modules.map((m) => <div key={m._id}>{m.name}</div>)
      ) : (
        <p>Loading modules...</p>
      )}
    </div>
  );
};

export default ModulesPage;
