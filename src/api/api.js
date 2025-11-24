import { BASE_URL } from "./config";

// 1. Modules
export const fetchModules = async () => {
  const res = await fetch(`${BASE_URL}/api/modules`);
  return res.json();
};

// 2. Vendors by module
export const fetchVendors = async (moduleId) => {
  const res = await fetch(`${BASE_URL}/api/vendors?module=${moduleId}`);
  return res.json();
};

// 3. Categories by module + vendor
export const fetchCategories = async (moduleId, vendorId) => {
  const res = await fetch(`${BASE_URL}/api/categories?module=${moduleId}&vendor=${vendorId}`);
  return res.json();
};

// ❌ REMOVE SUBCATEGORY — you don’t have it in backend
// export const fetchSubcategories = async () => {};

// 4. Products by module + vendor + category
export const fetchProducts = async (moduleId, vendorId, categoryId) => {
  const res = await fetch(
    `${BASE_URL}/api/products?module=${moduleId}&vendor=${vendorId}&category=${categoryId}`
  );
  return res.json();
};
