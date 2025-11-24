export const BASE_URL = "https://super-backend-bzin.onrender.com";

export const fetchModules = async () => (await fetch(BASE_URL + "/api/modules")).json();
export const fetchVendors = async (m) => (await fetch(BASE_URL + "/api/vendors?module=" + m)).json();
export const fetchCategories = async (m, v) => (await fetch(BASE_URL + `/api/categories?module=${m}&vendor=${v}`)).json();
export const fetchProducts = async (c) => (await fetch(BASE_URL + "/api/products?category=" + c)).json();