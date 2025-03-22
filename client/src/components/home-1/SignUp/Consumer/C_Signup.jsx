import { useState } from "react";
import axios from "axios";
import { AUTH_ROUTES_REGISTRAION, CUSTOMER_ROUTES_REGISRATION } from "../../../../utils/constants";
import { HOST } from "../../../../utils/constants";
import { useNavigate } from "react-router-dom";


const C_Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading,setLoading] = useState(true);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try{
        const res = await axios.post(CUSTOMER_ROUTES_REGISRATION,{
            username: name,
            email: email,
            password: password
        });
        if(res.status === 201){
            navigate("/consumer");
        }
        
    }catch(err){
        console.log(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-15 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Signup as Consumer</h2>
        <form onSubmit={handleSignup} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-bold text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center mb-4">
          Already have an account?{" "}
          <a href="/consumer/login" className="text-green-600 hover:underline">
            Login
          </a>
        </p>
      <div className="flex justify-center items-center gap-5 text-center">
        <a href="/farmer/signup" className="w-[50%] px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">Signup as Farmer</a>
        <a href="/investor/signup" className="w-[50%] px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">Signup as Investor</a>
      </div>
      </div>
    </div>
  );
};

export default C_Signup;