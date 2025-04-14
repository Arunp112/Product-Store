import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-96 object-contain"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">{product.category}</p>
          <p className="text-2xl text-green-600 font-bold">${product.price}</p>
          <p className="text-gray-700 dark:text-gray-200">{product.description}</p>
          <p className="text-yellow-500">⭐ {product.rating?.rate} / 5 ({product.rating?.count} reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
