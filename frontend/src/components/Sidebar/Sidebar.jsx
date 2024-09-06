import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, 
  FaFileAlt, 
  FaIdCard, 
  FaPhoneAlt, 
  FaCertificate, 
  FaTicketAlt, 
  FaSearch, 
  FaSyncAlt, 
  FaInfoCircle, 
  FaEdit, 
  FaFileSignature 
} from 'react-icons/fa';
import "./Sidebar.css";

const Sidebar = ({ setActiveComponent }) => {
  const [information, setInformation] = useState({});
  
  useEffect(() => {
    const storedData = localStorage.getItem("informationData");
    if (storedData) {
      setInformation(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <div className="flex items-center space-x-4 p-2 mb-5">
        <img
          className="h-12 rounded-full"
          src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
          alt="Taxpayer"
        />
        <div>
          <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
            {information.taxPayersName}
          </h4>
          <span className="text-sm tracking-wide flex items-center space-x-1">
            <FaCertificate className="h-4 text-green-500" />
            <span className="text-gray-600">Verified</span>
          </span>
        </div>
      </div>
      <ul className="space-y-2 text-sm">
        <li onClick={() => setActiveComponent('welcome')}>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaHome className=" h-5" />
            <button>Dashboard</button>
          </Link>
        </li>
        <li onClick={() => setActiveComponent('form')}>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaFileAlt className=" h-5" />
            <button>TIN Application</button>
          </Link>
        </li>
        <li onClick={() => setActiveComponent('my-tin')}>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaIdCard className=" h-5" />
            <button>My Tin Information</button>
          </Link>
        </li>
        <li onClick={() => setActiveComponent('change-contact')}>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaPhoneAlt className=" h-5" />
            <span>Change Contact</span>
          </Link>
        </li>
        <li onClick={() => setActiveComponent('view-tin')}>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaCertificate className=" h-5" />
            <span>View TIN Certificate</span>
          </Link>
        </li>
        <li onClick={() => setActiveComponent('generate-ticket')}>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaTicketAlt className=" h-5" />
            <span>Generate Ticket</span>
          </Link>
        </li>
        <li onClick={() => setActiveComponent('ticket-status')}>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaSearch className=" h-5" />
            <span>Ticket Status</span>
          </Link>
        </li>
        <li onClick={() => setActiveComponent('reissue-status')}>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaSyncAlt className=" h-5" />
            <span>Reissue Status</span>
          </Link>
        </li>
        <li onClick={() => setActiveComponent('vat-or-business')}>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaInfoCircle className=" h-5" />
            <span>Vat/Business Info</span>
          </Link>
        </li>
        <li onClick={() => setActiveComponent('change-status')}>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaEdit className=" h-5" />
            <span>Change Status</span>
          </Link>
        </li>
        <li onClick={() => setActiveComponent('update-tin')}>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaFileSignature className=" h-5" />
            <span>Edit/Correct/Update</span>
          </Link>
        </li>
        <li onClick={() => setActiveComponent('request-status')}>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaFileAlt className=" h-5" />
            <span>View Request Status</span>
          </Link>
        </li>
        <li>
          <Link
            to="https://google.com"
            target="_blank"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 focus:shadow-outline"
          >
            <FaHome className=" h-5" />
            <span>Goto e-Return</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
