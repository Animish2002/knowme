import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout/Layout";

const Home = () => {
  const navigate = useNavigate();

  const clickMe = () => {
    navigate("/login");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center flex-1 align-center mt-[200px]">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Home Page</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={clickMe}
        >
          Login Button
        </button>
      </div>
    </Layout>
  );
};

export default Home;
