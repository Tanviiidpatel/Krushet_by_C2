import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET_ALL_LISTING, HOST} from "../../../utils/constants";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(GET_ALL_LISTING);
        setProducts(res.data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getAllProducts(); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">All Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        {products.map((product) => (
          <Link to={`/consumer/product/${product.id}`} key={product.id}>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center cursor-pointer transition-transform hover:scale-105">
              <img src={`${HOST}${product.imageUrl}`} alt={product.productname} className="w-28 h-28 object-cover rounded-md" />
              <h3 className="mt-3 text-lg font-semibold">{product.productname}</h3>
              <p className="text-green-600 font-semibold text-xl">₹{product.productprize}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
