import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import ModulesPage from "./pages/ModulesPage";
import VendorsPage from "./pages/VendorsPage";
import CategoriesPage from "./pages/CategoriesPage";
import SubcategoriesPage from "./pages/SubcategoriesPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModulesPage />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="/modules/:moduleId/vendors" element={<VendorsPage />} />
        <Route path="/vendors/:vendorId/categories" element={<CategoriesPage />} />
        <Route path="/categories/:categoryId/subcategories" element={<SubcategoriesPage />} />
        <Route path="/subcategories/:subcategoryId/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
