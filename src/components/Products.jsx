import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import { useParams } from 'react-router-dom';

export default function Products() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => { fetchProducts(categoryId).then(setProducts); }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>

      {products.length === 0 && <p>No products found</p>}

      {products.map(p => (
        <div className="card" key={p._id}>
          <h3>{p.name}</h3>
          <p>₹ {p.price}</p>
        </div>
      ))}
    </div>
  );
}