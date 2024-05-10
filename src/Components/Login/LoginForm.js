import React, { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import personImage from "../../Images/person.jpg"; // Import the image
import Footer from "../Layout/Footer";
import Layout from "../Layout/Layout";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <div className="flex justify-center items-center flex-1">
        <div className="loginbox w-[750px] h-[440px] border-2 mt-10 border-sky-700 shadow-md shadow-sky-700 rounded-lg p-8 flex flex-col md:flex-row">
          <div className="mb-8 md:mb-0 md:mr-8 flex justify-center items-center">
            {/* Use the imported image */}
            <img
              src={personImage}
              alt="Login"
              className="w-54 h-54 mx-auto md:mx-0 "
            />
          </div>
          <div className="flex-1">
            <form className="space-y-4">
              <h1 className="text-4xl font-bold text-center mt-12 mb-10 mt-5 text-gray-600">
                Login
              </h1>
              <div className="relative">
                <input
                  className="w-full pl-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  className="w-full pl-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {showPassword ? (
                  <FaEyeSlash
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <FaEye
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>

              <div className="forgot text-right mt-2 md:mt-0">
                <a
                  href="/forgot-Password"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Forgot password?
                </a>
              </div>

              <button
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                type="submit"
              >
                Login
              </button>

              <div className="flex justify-center items-center mt-4 text-gray-600">
                <p className="mr-2">Don't have an account?</p>
                <a
                  href="/signup"
                  className=" hover:underline text-blue-400 hover:text-blue-700"
                >
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginForm;
