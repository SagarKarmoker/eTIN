import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../img/BG1.png';
import rightSideImage from '../img/S1.jpg';
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl px-4 md:px-8">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center text-[#343a40] p-8 bg-white bg-opacity-75 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to
          </h1>
          <h1 className="text-5xl font-bold mb-4">
            TIN Registration
          </h1>
          <p className="mb-6">
            Register or cancel your Taxpayer's Identification Number (TIN)
            easily and securely. Ensure compliance with the latest regulations
            of The Income Tax Act, 2023.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center w-40 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
          >
            Get Started
            <FaArrowRight className="ml-2" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <img src={rightSideImage} alt="Illustration" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
