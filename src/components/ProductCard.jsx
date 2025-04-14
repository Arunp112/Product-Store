// src/components/ProductCard.js
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 cursor-pointer overflow-hidden group"
    >
      <div className="bg-gray-100 dark:bg-gray-700 p-4 h-52 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-base font-semibold line-clamp-2">{product.title}</h2>
        <div className="text-sm text-gray-600 dark:text-gray-400 flex justify-between items-center">
          <span className="text-blue-600 dark:text-blue-400 font-bold">${product.price}</span>
          <span className="text-xs bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-white px-2 py-0.5 rounded">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
