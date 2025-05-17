export const fetchProducts = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
  return res.json();
};