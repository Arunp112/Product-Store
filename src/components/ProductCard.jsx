import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col border rounded p-4 dark:bg-gray-800 hover:shadow transition h-full "
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4 rounded-md "
      />
      <div className="flex-grow">
        <h2 className="text-md font-semibold dark:text-white line-clamp-2">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
          {product.category}
        </p>
      </div>
      <p className="text-lg font-bold text-blue-600 mt-auto">
        ${product.price}
      </p>
    </Link>
  );
};

export default ProductCard;
