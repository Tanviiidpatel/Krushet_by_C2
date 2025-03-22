import React from "react";
import { Link } from "react-router-dom";
import { 
  mango, cucumber, watermelon, tomatoes, corn, strawberries 
} from "../../../assets/images"; 

const products = [
  { id: 8, name: "Mangoes", price: "₹800", image: mango },
  { id: 4, name: "Cucumbers", price: "₹1500", image: cucumber },
  { id: 9, name: "Watermelons", price: "₹600", image: watermelon },
  { id: 3, name: "Tomatoes", price: "₹300", image: tomatoes },
  { id: 20, name: "Corn", price: "₹400", image: corn },
  { id: 10, name: "Strawberries", price: "₹500", image: strawberries },
];

const NewArrivals = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-10 mt-20">
      
      <div className="w-full max-w-5xl">
        <h2 className="text-left text-2xl font-bold mb-10 mt-10">New This Week</h2>
      </div>

     
      <div className="w-full max-w-5xl flex justify-center">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {products.map((product) => (
            <Link to={`/customer-dashboard/product/${product.id}`} key={product.id}>
              <div className="text-center cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover hover:scale-105 transition-transform"
                />
                <h3 className="mt-2 text-lg">{product.name}</h3>
                <p className="text-green-600 text-base mt-1">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
