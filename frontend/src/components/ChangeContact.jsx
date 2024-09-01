import { useState } from 'react';
import axios from 'axios';

function ChangeContact() {
    const [contact, setContact] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            if (!contact) {
                alert('Contact is required');
                return;
            }
            const response = await axios.post('http://localhost:3001/api/user/change-contact', {
                contact
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )

            if (response.status === 200) {
                setContact('');
                alert('Contact changed successfully');
            } else {
                alert('Failed to change contact');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while changing the contact');
        }
    }

    return (
        <div className="flex justify-center items-center mt-10">
            <div className="w-1/2 max-w-md bg-white rounded-lg border shadow-md p-6">
                <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Change Contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="contact" className="block text-gray-600 font-medium mb-2">Contact</label>
                        <input 
                            type="text" 
                            id="contact" 
                            value={contact} 
                            onChange={(e) => setContact(e.target.value)} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Change Contact
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChangeContact;
