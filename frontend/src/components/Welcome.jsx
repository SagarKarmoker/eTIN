import React from 'react';

function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-6 mt-10">
      <div className="max-w-2xl bg-blue-500 rounded-lg shadow-md p-8 mt-10 ">
        <h1 className="text-3xl font-bold text-white  mb-4 ">Welcome to eTin</h1>
        <p className="text-white text-lg leading-relaxed">
          A secure and easy way to get your eTin number with just a few clicks and a few minutes of your time powered by eKYC.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
