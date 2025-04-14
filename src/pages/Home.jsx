import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryFilter from "../components/CategoryFilter";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
        setCategories([...new Set(data.map(p => p.category))]);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let temp = [...products];
    if (search) {
      temp = temp.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (category) {
      temp = temp.filter(p => p.category === category);
    }
    setFiltered(temp);
  }, [search, category, products]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error fetching products.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
        <img src="https://media.licdn.com/dms/image/v2/C4D0BAQGBX4Kj6ClDQg/company-logo_100_100/company-logo_100_100/0/1676392838415?e=1750291200&v=beta&t=UdYGePIQI7kEVfoGLedqdFrpVi26pNdPBDl3f_bcsN0" alt="" />
      <h1 className="text-3xl font-bold text-center mb-6">🛍 Product Store</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <CategoryFilter
          categories={categories}
          selected={category}
          onChange={setCategory}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(product => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 mx-auto object-contain mb-4"
            />
            <h2 className="text-lg font-semibold line-clamp-2">{product.title}</h2>
            <p className="text-blue-600 font-bold">${product.price}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
