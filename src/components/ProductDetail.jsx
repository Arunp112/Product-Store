import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product)
    return (
      <div className="text-center mt-10">
        <span className="loader"></span>
      </div>
    );

  return (
    <div className="min-h-screen">
      <div className=" p-4 dark:bg-gray-900 dark:text-white justify-center ">
        <div className="">
          <Link to="/" className="text-blue-500">
            <div className="flex justify-between   items-center gap-2">
              <div>

              <span className="text-2xl">←</span> <span>Back</span>
              </div>
              <div></div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center m-auto items-center">
          <div className="flex flex-col gap-6 mt-4 mx-auto">
            <img
              src={product.image}
              alt={product.title}
              className="w-80 h-80 object-contain"
            />
            <div>
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {product.category}
              </p>
              <p className="text-xl font-semibold text-blue-600">
                ${product.price}
              </p>
              <p className="mt-4">{product.description}</p>
              <div className="mt-2 text-yellow-500">
                ⭐ {product.rating?.rate} ({product.rating?.count})
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
