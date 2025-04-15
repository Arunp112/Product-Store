// src/pages/Details.js
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Details = () => {
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

  if (loading) return <p className="text-center mt-10"><span className="loader"></span></p>;
  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-contain"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Category: {product.category}
          </p>
          <p className="text-2xl text-green-600 dark:text-green-400 font-bold">
            ${product.price}
          </p>
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">⭐ {product.rating.rate}</span>
            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
