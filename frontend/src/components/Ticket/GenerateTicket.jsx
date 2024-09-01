import axios from 'axios';
import React, { useState } from 'react';

function GenerateTicket() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        // name: '',
        // nid: '',
        // tin: '',
        // mobile: '',
        // email: '',
        requestType: '',
        description: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const respone = await axios.post('http://localhost:3001/api/user/generate-ticket', {
                requestType: formData.requestType,
                description: formData.description,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })

            if(respone.status === 201){
                alert('Request submitted successfully');
                setLoading(false);
            }else{
                alert('Request submission failed');
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(true);
        }
    };

    return (
        <div className="mt-10 flex items-center justify-center mb-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg border-2">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Submit a Request</h2>
                <form onSubmit={handleSubmit}>
                    {/* <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">NID</label>
                        <input
                            type="number"
                            id="nid"
                            name="nid"
                            value={formData.nid}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">TIN Number</label>
                        <input
                            type="number"
                            id="tin"
                            name="tin"
                            value={formData.tin}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Mobile</label>
                        <input
                            type="number"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div> */}
                    <div className="mb-4">
                        <label htmlFor="requestType" className="block text-gray-700 font-medium mb-2">Request Type</label>
                        <select
                            id="requestType"
                            name="requestType"
                            value={formData.requestType}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        >
                            <option value="">Select a request type</option>
                            <option value="change">Change Request</option>
                            <option value="support">Support Request</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        {
                            loading ? 'Submitting...' : 'Submit Request'
                        }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default GenerateTicket;
