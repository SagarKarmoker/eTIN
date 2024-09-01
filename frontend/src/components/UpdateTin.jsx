import { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateTin() {
    const [newData, setNewData] = useState({});

    // Fetch existing TIN data
    const fetchOldData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/form/update-tin', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setNewData(response.data); // Initialize newData with existing data
        } catch (error) {
            console.error(error);
        }
    };

    // Update form field state on change
    const handleChange = (section, field, value) => {
        setNewData(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [field]: value
            }
        }));
    };

    // Handle form submission
    const handleSubmit = async () => {
        try {
            await axios.put('http://localhost:3001/api/form/my-tin', newData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            alert('TIN details updated successfully');
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchOldData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Update TIN Details</h1>

            <div className="space-y-6 mx-24">
                {/* Registration Details */}
                <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Registration Details</h2>
                    <input 
                        type="text"
                        value={newData.registration?.taxPayerStatusA || ''}
                        onChange={(e) => handleChange('registration', 'taxPayerStatusA', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input 
                        type="text"
                        value={newData.registration?.taxPayerStatusB || ''}
                        onChange={(e) => handleChange('registration', 'taxPayerStatusB', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input 
                        type="text"
                        value={newData.registration?.registrationType || ''}
                        onChange={(e) => handleChange('registration', 'registrationType', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input 
                        type="text"
                        value={newData.registration?.purposeOfTIN || ''}
                        onChange={(e) => handleChange('registration', 'purposeOfTIN', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input 
                        type="text"
                        value={newData.registration?.mainSourceOfIncome || ''}
                        onChange={(e) => handleChange('registration', 'mainSourceOfIncome', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input 
                        type="text"
                        value={newData.registration?.location || ''}
                        onChange={(e) => handleChange('registration', 'location', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input 
                        type="text"
                        value={newData.registration?.serviceLocation || ''}
                        onChange={(e) => handleChange('registration', 'serviceLocation', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                </div>

                {/* Personal Information */}
                <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h2>
                    <input 
                        type="text"
                        value={newData.information?.taxPayersName || ''}
                        onChange={(e) => handleChange('information', 'taxPayersName', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input 
                        type="text"
                        value={newData.information?.gender || ''}
                        onChange={(e) => handleChange('information', 'gender', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    {/* Repeat for all other personal information fields... */}
                </div>

                {/* Final Preview */}
                <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Final Preview</h2>
                    <input 
                        type="text"
                        value={newData.final_Preview?.isChecked ? 'Yes' : 'No'}
                        onChange={(e) => handleChange('final_Preview', 'isChecked', e.target.value === 'Yes')}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input 
                        type="text"
                        value={newData.final_Preview?.taxesZone || ''}
                        onChange={(e) => handleChange('final_Preview', 'taxesZone', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input 
                        type="text"
                        value={newData.final_Preview?.taxesCircle || ''}
                        onChange={(e) => handleChange('final_Preview', 'taxesCircle', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                </div>

                {/* Final Submission */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Final Submission</h2>
                    <p className="font-medium">{newData.finalSubmission ? 'Submission Completed' : 'Submission Pending'}</p>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-6">
                    <button 
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md"
                    >
                        Update TIN Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UpdateTin;
