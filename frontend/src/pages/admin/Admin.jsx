import React from 'react';
import backgroundImage from '../../img/BG3.png';
import rightSideImage from '../../img/S1.jpg';

function Admin() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    <div className="flex items-center mt-10 justify-center">
      <div className=" p-8 rounded-lg max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Manage all your site content, users, and settings from this central hub.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Admin;
