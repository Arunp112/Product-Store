import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { searchTerm } = useOutletContext();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get("https://fakestoreapi.com/products"),
          axios.get("https://fakestoreapi.com/products/categories")
        ]);
        setProducts(productsRes.data);
        setFiltered(productsRes.data);
        setCategories(["all", ...categoriesRes.data]);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFiltered(result);
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="p-4">
      {/* Category Filter */}
      <div className="mb-4 ">
        <label htmlFor="category" className="text-sm mr-2">
          Filter by Category :
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-2 py-1 border rounded dark:bg-gray-800 dark:text-white"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading && <div className="flex justify-center items-center"> <p className="loader"></p></div>}
        {error && <p className="text-red-500">Error loading products.</p>}
        {!loading && !error && filtered.length > 0 ? (
          filtered.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          !loading &&
          !error && (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400 text-xl">
              🛒 No products found for your search or selected category.
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
