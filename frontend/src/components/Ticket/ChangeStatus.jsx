import { useState, useEffect } from 'react';
import axios from 'axios';

function ChangeStatus() {
    const [tickets, setTickets] = useState([]);

    const fetchTickets = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/user/get-ticket-status', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            const data = response.data.ticket.filter(ticket => ticket.status === 'Pending');

            setTickets(data);
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };

    useEffect(() => {
        fetchTickets();
    }, []);

    const markAsSolved = async (ticketNumber) => {
        try {
            console.log(ticketNumber)
            const response = await axios.put(`http://localhost:3001/api/user/change-ticket-status`, {
                ticketNumber
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.status === 200) {
                fetchTickets();
            }
        } catch (error) {
            console.error('Error updating ticket status:', error);
        }
    }


    return (
        <div className="min-h-screen mt-20">
            <div className="container border-2 mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Change Ticket Status</h1>
                {tickets.length === 0 ? (
                    <p className="text-center text-gray-500">No tickets found.</p>
                ) : (
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                            <tr className="bg-blue-500 text-white text-left">
                                <th className="px-6 py-3 border-b border-gray-300">Ticket Number</th>
                                <th className="px-6 py-3 border-b border-gray-300">Name</th>
                                <th className="px-6 py-3 border-b border-gray-300">NID</th>
                                {/* <th className="px-6 py-3 border-b border-gray-300">Phone Number</th> */}
                                {/* <th className="px-6 py-3 border-b border-gray-300">Email</th> */}
                                <th className="px-6 py-3 border-b border-gray-300">Request Type</th>
                                <th className="px-6 py-3 border-b border-gray-300">Status</th>
                                <th className="px-6 py-3 border-b border-gray-300">Created At</th>
                                <th className="px-6 py-3 border-b border-gray-300">Updated At</th>
                                <th className="px-6 py-3 border-b border-gray-300">Update Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map(ticket => (
                                <tr key={ticket._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 border-b border-gray-200">{ticket.ticketNumber}</td>
                                    <td className="px-6 py-4 border-b border-gray-200">{ticket.name}</td>
                                    <td className="px-6 py-4 border-b border-gray-200">{ticket.nid}</td>
                                    {/* <td className="px-6 py-4 border-b border-gray-200">{ticket.phoneNumber}</td> */}
                                    {/* <td className="px-6 py-4 border-b border-gray-200">{ticket.email}</td> */}
                                    <td className="px-6 py-4 border-b border-gray-200 capitalize">{ticket.requestType}</td>
                                    <td className={`px-6 py-4 border-b border-gray-200 ${ticket.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>{ticket.status}</td>
                                    <td className="px-6 py-4 border-b border-gray-200">{new Date(ticket.createdAt).toLocaleString()}</td>
                                    <td className="px-6 py-4 border-b border-gray-200">{new Date(ticket.updatedAt).toLocaleString()}</td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <button className='bg-green-600 text-white px-4 py-2 rounded-lg font-bold' onClick={() => markAsSolved(ticket.ticketNumber)}>
                                            Solved
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default ChangeStatus;
