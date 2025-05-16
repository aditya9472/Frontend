// ProductCard component
export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p>{product.description}</p>
      <p className="text-green-600 font-semibold">${product.price}</p>
    </div>
  );
}
