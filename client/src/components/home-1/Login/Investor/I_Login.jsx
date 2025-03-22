import { useState } from "react";

const I_Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login as Investor</h2>
        <form onSubmit={handleLogin} className="mt-6">
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
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-right">
            <a href="/forgot-password" className="text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-bold text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/investor/signup" className="text-green-600 hover:underline">
            Sign up
          </a>
        </p>
        <div className="flex justify-center items-center gap-5 text-center">
        <a href="/farmer/login" className="w-[50%] px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">Login as Farmer</a>
        <a href="/consumer/login" className="w-[50%] px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">Login as Consumer</a>
      </div>
      </div>
    </div>
  );
};

export default I_Login;