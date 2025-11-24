// src/api/api.js
import { BASE_URL } from "./config";

/**
 * Note: backend endpoints used:
 * GET  /api/modules
 * GET  /api/vendors?module=<moduleId>
 * GET  /api/categories?module=<moduleId>&vendor=<vendorId>
 * GET  /api/products?module=<moduleId>&vendor=<vendorId>&category=<categoryId>
 */

async function handleFetch(res) {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API error ${res.status}: ${text || res.statusText}`);
  }
  return res.json();
}

export const fetchModules = async () => {
  const res = await fetch(`${BASE_URL}/api/modules`);
  return handleFetch(res);
};

export const fetchVendors = async (moduleId) => {
  const url = `${BASE_URL}/api/vendors${moduleId ? `?module=${moduleId}` : ""}`;
  const res = await fetch(url);
  return handleFetch(res);
};

export const fetchCategories = async (moduleId, vendorId) => {
  const params = new URLSearchParams();
  if (moduleId) params.append("module", moduleId);
  if (vendorId) params.append("vendor", vendorId);
  const res = await fetch(`${BASE_URL}/api/categories?${params.toString()}`);
  return handleFetch(res);
};

export const fetchProducts = async (moduleId, vendorId, categoryId) => {
  const params = new URLSearchParams();
  if (moduleId) params.append("module", moduleId);
  if (vendorId) params.append("vendor", vendorId);
  if (categoryId) params.append("category", categoryId);
  const res = await fetch(`${BASE_URL}/api/products?${params.toString()}`);
  return handleFetch(res);
};
