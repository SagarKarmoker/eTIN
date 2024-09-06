import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyTin() {
  const [myTin, setMyTin] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchMyTinData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/form/my-tin', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.data) {
          setMyTin(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMyTinData();
  }, [token]);

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  if (!myTin) {
    return <p className="text-center text-red-500 mt-10">No data available</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-20">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">My TIN Details</h1>

      <div className="space-y-6 mx-24">
        {/* Registration Details */}
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Registration Details</h2>
          <p><span className="font-medium">Tax Payer Status A:</span> {myTin.registration.taxPayerStatusA}</p>
          <p><span className="font-medium">Tax Payer Status B:</span> {myTin.registration.taxPayerStatusB}</p>
          <p><span className="font-medium">Registration Type:</span> {myTin.registration.registrationType}</p>
          <p><span className="font-medium">Purpose of TIN:</span> {myTin.registration.purposeOfTIN}</p>
          <p><span className="font-medium">Main Source of Income:</span> {myTin.registration.mainSourceOfIncome}</p>
          <p><span className="font-medium">Location:</span> {myTin.registration.location}</p>
          <p><span className="font-medium">Service Location:</span> {myTin.registration.serviceLocation}</p>
        </div>

        {/* Information */}
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h2>
          <p><span className="font-medium">Tax Payers Name:</span> {myTin.information.taxPayersName}</p>
          <p><span className="font-medium">Gender:</span> {myTin.information.gender}</p>
          <p><span className="font-medium">Number:</span> {myTin.information.number}</p>
          <p><span className="font-medium">Date of Birth:</span> {myTin.information.dob}</p>
          <p><span className="font-medium">Father's Name:</span> {myTin.information.fathersName}</p>
          <p><span className="font-medium">Mother's Name:</span> {myTin.information.mothersName}</p>
          <p><span className="font-medium">Spouse Name:</span> {myTin.information.spouseName}</p>
          <p><span className="font-medium">Mobile Number:</span> {myTin.information.mobileNumber}</p>
          <p><span className="font-medium">Fax:</span> {myTin.information.fax}</p>
          <p><span className="font-medium">Email:</span> {myTin.information.email}</p>
          <p><span className="font-medium">Current Country:</span> {myTin.information.currentCountry}</p>
          <p><span className="font-medium">Current Address:</span> {myTin.information.currentAddress}</p>
          <p><span className="font-medium">Current District:</span> {myTin.information.currentDistrict}</p>
          <p><span className="font-medium">Current Thana:</span> {myTin.information.currentThana}</p>
          <p><span className="font-medium">Current Post Code:</span> {myTin.information.currentPostCode}</p>
          <p><span className="font-medium">Permanent Address:</span> {myTin.information.permanentAddress}</p>
          <p><span className="font-medium">Permanent Country:</span> {myTin.information.permanentCountry}</p>
          <p><span className="font-medium">Permanent District:</span> {myTin.information.permanentDistrict}</p>
          <p><span className="font-medium">Permanent Thana:</span> {myTin.information.permanentThana}</p>
          <p><span className="font-medium">Permanent Post Code:</span> {myTin.information.permanentPostCode}</p>
          <p><span className="font-medium">Other District:</span> {myTin.information.otherDistrict}</p>
          <p><span className="font-medium">Other Thana:</span> {myTin.information.otherThana}</p>
          <p><span className="font-medium">TIN:</span> {myTin.information.tin}</p>
        </div>

        {/* Final Preview */}
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Final Preview</h2>
          <p><span className="font-medium">Is Checked:</span> {myTin.final_Preview.isChecked ? 'Yes' : 'No'}</p>
          <p><span className="font-medium">Taxes Zone:</span> {myTin.final_Preview.taxesZone}</p>
          <p><span className="font-medium">Taxes Circle:</span> {myTin.final_Preview.taxesCircle}</p>
        </div>

        {/* Final Submission */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Final Submission</h2>
          <p className="font-medium">{myTin.finalSubmission ? 'Submission Completed' : 'Submission Pending'}</p>
        </div>
      </div>
    </div>
  );
}

export default MyTin;
