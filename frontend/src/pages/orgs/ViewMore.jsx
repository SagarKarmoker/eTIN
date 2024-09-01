import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ViewMore() {
    const { tin } = useParams();
    const [userDetails, setUserDetails] = useState({});
    const role = localStorage.getItem("etinRole");

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (role !== 'Organization') return;
            if (tin === undefined) return;
    
            try {
                const response = await axios.get(`http://localhost:3001/api/form/get-user-tin-details/${tin}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                });
                setUserDetails(response.data);
            } catch (error) {
                console.error("Error fetching records:", error);
            }
        };
    
        fetchUserDetails();
    }, [tin, role]);    

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mb-10 border-2">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                {userDetails.information ? `TIN #${userDetails.information.tin} Details` : 'Loading...'}
            </h1>
    
            {userDetails.information && userDetails.registration ? (
                <div className="space-y-6 mx-24">
                    {/* Registration Details */}
                    <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Registration Details</h2>
                        <p><span className="font-medium">Tax Payer Status A:</span> {userDetails.registration.taxPayerStatusA}</p>
                        <p><span className="font-medium">Tax Payer Status B:</span> {userDetails.registration.taxPayerStatusB}</p>
                        <p><span className="font-medium">Registration Type:</span> {userDetails.registration.registrationType}</p>
                        <p><span className="font-medium">Purpose of TIN:</span> {userDetails.registration.purposeOfTIN}</p>
                        <p><span className="font-medium">Main Source of Income:</span> {userDetails.registration.mainSourceOfIncome}</p>
                        <p><span className="font-medium">Location:</span> {userDetails.registration.location}</p>
                        <p><span className="font-medium">Service Location:</span> {userDetails.registration.serviceLocation}</p>
                    </div>
    
                    {/* Information */}
                    <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h2>
                        <p><span className="font-medium">Tax Payers Name:</span> {userDetails.information.taxPayersName}</p>
                        <p><span className="font-medium">Gender:</span> {userDetails.information.gender}</p>
                        <p><span className="font-medium">Number:</span> {userDetails.information.number}</p>
                        <p><span className="font-medium">Date of Birth:</span> {userDetails.information.dob}</p>
                        <p><span className="font-medium">Father's Name:</span> {userDetails.information.fathersName}</p>
                        <p><span className="font-medium">Mother's Name:</span> {userDetails.information.mothersName}</p>
                        <p><span className="font-medium">Spouse Name:</span> {userDetails.information.spouseName}</p>
                        <p><span className="font-medium">Mobile Number:</span> {userDetails.information.mobileNumber}</p>
                        <p><span className="font-medium">Fax:</span> {userDetails.information.fax}</p>
                        <p><span className="font-medium">Email:</span> {userDetails.information.email}</p>
                        <p><span className="font-medium">Current Country:</span> {userDetails.information.currentCountry}</p>
                        <p><span className="font-medium">Current Address:</span> {userDetails.information.currentAddress}</p>
                        <p><span className="font-medium">Current District:</span> {userDetails.information.currentDistrict}</p>
                        <p><span className="font-medium">Current Thana:</span> {userDetails.information.currentThana}</p>
                        <p><span className="font-medium">Current Post Code:</span> {userDetails.information.currentPostCode}</p>
                        <p><span className="font-medium">Permanent Address:</span> {userDetails.information.permanentAddress}</p>
                        <p><span className="font-medium">Permanent Country:</span> {userDetails.information.permanentCountry}</p>
                        <p><span className="font-medium">Permanent District:</span> {userDetails.information.permanentDistrict}</p>
                        <p><span className="font-medium">Permanent Thana:</span> {userDetails.information.permanentThana}</p>
                        <p><span className="font-medium">Permanent Post Code:</span> {userDetails.information.permanentPostCode}</p>
                        <p><span className="font-medium">Other District:</span> {userDetails.information.otherDistrict}</p>
                        <p><span className="font-medium">Other Thana:</span> {userDetails.information.otherThana}</p>
                        <p><span className="font-medium">TIN:</span> {userDetails.information.tin}</p>
                    </div>
    
                    {/* Final Preview */}
                    <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Final Preview</h2>
                        <p><span className="font-medium">Is Checked:</span> {userDetails.final_Preview.isChecked ? 'Yes' : 'No'}</p>
                        <p><span className="font-medium">Taxes Zone:</span> {userDetails.final_Preview.taxesZone}</p>
                        <p><span className="font-medium">Taxes Circle:</span> {userDetails.final_Preview.taxesCircle}</p>
                    </div>
    
                    {/* Final Submission */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Final Submission</h2>
                        <p className="font-medium">{userDetails.finalSubmission ? 'Submission Completed' : 'Submission Pending'}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
    
}

export default ViewMore;
