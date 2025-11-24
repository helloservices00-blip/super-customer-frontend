import { BASE_URL } from "./config";

export const fetchModules = async () => {
  const res = await fetch(`${BASE_URL}/api/modules`);
  return res.json();
};

export const fetchVendors = async (moduleId) => {
  const res = await fetch(`${BASE_URL}/api/vendors?module=${moduleId}`);
  return res.json();
};

export const fetchCategories = async (moduleId, vendorId) => {
  const res = await fetch(`${BASE_URL}/api/categories?module=${moduleId}&vendor=${vendorId}`);
  return res.json();
};

export const fetchSubcategories = async (categoryId) => {
  const res = await fetch(`${BASE_URL}/api/subcategories?category=${categoryId}`);
  return res.json();
};

export const fetchProducts = async (subcategoryId) => {
  const res = await fetch(`${BASE_URL}/api/products?subcategory=${subcategoryId}`);
  return res.json();
};
