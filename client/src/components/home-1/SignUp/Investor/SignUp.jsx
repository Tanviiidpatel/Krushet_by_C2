import { useState } from "react";
import axios from "axios";
import { AUTH_ROUTES_REGISTRAION } from "../../../../utils/constants";
import { HOST } from "../../../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../../../store";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useAppStore();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(HOST);
    console.log(AUTH_ROUTES_REGISTRAION);
    try{
        const res = await axios.post(AUTH_ROUTES_REGISTRAION,{
            username: name,
            email: email,
            password: password
        });
        if(res.status === 201){
            setUserInfo(res.data);
            navigate("/investor");
        }
        console.log(res);
    }catch(err){
        console.log(err.message);
    }finally{
        
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
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
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;