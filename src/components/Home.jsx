import React, { useEffect, useState } from 'react';
import { fetchModules, fetchVendors, fetchCategories } from '../api';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [modules, setModules] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [categories, setCategories] = useState([]);

  const [moduleId, setModuleId] = useState("");
  const [vendorId, setVendorId] = useState("");

  const navigate = useNavigate();

  useEffect(() => { fetchModules().then(setModules); }, []);
  useEffect(() => { moduleId && fetchVendors(moduleId).then(setVendors); }, [moduleId]);
  useEffect(() => { vendorId && fetchCategories(moduleId, vendorId).then(setCategories); }, [vendorId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Select Shop</h2>

      <select className="select-box" onChange={e=>setModuleId(e.target.value)}>
        <option>Select Module</option>
        {modules.map(m => <option value={m._id} key={m._id}>{m.name}</option>)}
      </select>

      <select className="select-box" onChange={e=>setVendorId(e.target.value)}>
        <option>Select Vendor</option>
        {vendors.map(v => <option value={v._id} key={v._id}>{v.name}</option>)}
      </select>

      <h3>Categories</h3>

      {categories.map(c => (
        <div className="card" key={c._id} onClick={()=>navigate("/products/" + c._id)}>
          {c.name}
        </div>
      ))}
    </div>
  );
}