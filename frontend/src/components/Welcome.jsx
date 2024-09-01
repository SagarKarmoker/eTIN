import React from 'react';

function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-6">
      <div className="max-w-2xl bg-white rounded-lg shadow-md p-8 mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to eTin</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          A secure and easy way to get your eTin number with just a few clicks and a few minutes of your time powered by eKYC.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
