import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserTINTable = () => {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/form/user-tin-records", {
        });
        setRecords(response.data);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };
    fetchRecords();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  const filteredRecords = records.filter((record) => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      record.tin.toLowerCase().includes(searchTermLowerCase) ||
      record.taxPayersName.toLowerCase().includes(searchTermLowerCase) ||
      record.number.toLowerCase().includes(searchTermLowerCase) ||
      record.email.toLowerCase().includes(searchTermLowerCase) ||
      record.permanentAddress.toLowerCase().includes(searchTermLowerCase)
    );
  });

  return (
    <div className="bg-white rounded-lg py-5">
      <div className="container mx-auto bg-white rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto">
          <div className="w-full lg:w-11/12 xl:w-10/12 p-4 lg:p-12">
            <div className="mb-6">
              <div className="flex justify-center items-center mb-4">
                <hr className="h-0.5 border-b border-solid border-gray-500 grow" />
                <h3 className="mx-4 text-4xl font-extrabold text-gray-900">
                  TIN Records
                </h3>
                <hr className="h-0.5 border-b border-solid border-gray-500 grow" />
              </div>
              <div className="flex justify-end items-center mb-6">
                <input
                  type="text"
                  placeholder="Search by TIN Number"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-input flex items-center w-1/2 px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl border-2 border-gray-300"
                />
                <button
                  onClick={handleClear}
                  className="px-4 h-14 flex items-center justify-center font-bold bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                >
                  Clear
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-center bg-white rounded-3xl border-collapse">
                  <thead className="text-xs text-gray-950 uppercase">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 w-10 text-left bg-gray-100"
                      >
                        SN.
                      </th>
                      <th scope="col" className="px-4 py-3 w-64 text-left">
                        TIN
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 w-48 text-left bg-gray-100"
                      >
                        Taxpayer's Name
                      </th>
                      <th scope="col" className="px-4 py-3 w-64 text-left">
                        NID Number
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 w-48 text-left bg-gray-100"
                      >
                        Email
                      </th>
                      <th scope="col" className="px-4 py-3 w-64 text-left">
                        Permanent Address
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {filteredRecords.map((record, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <th
                          scope="row"
                          className="px-4 py-3 w-10 text-left font-semibold text-gray-900 bg-gray-100"
                        >
                          {index + 1}
                        </th>
                        <td className="px-4 py-3 w-64 text-left break-words">
                          <Link to={`/details/${record.tin}`} className='hover:underline text-blue-600 font-bold'>{record.tin}</Link>
                        </td>
                        <td className="px-4 py-3 w-48 text-left bg-gray-100 break-words">
                          {record.taxPayersName}
                        </td>
                        <td className="px-4 py-3 w-64 text-left break-words">
                          {record.number}
                        </td>
                        <td className="px-4 py-3 w-48 text-left bg-gray-100 break-words">
                          {record.email}
                        </td>
                        <td className="px-4 py-3 w-64 text-left break-words">
                          {record.permanentAddress}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTINTable;
