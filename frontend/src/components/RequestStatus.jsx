import {useState, useEffect} from 'react'
import axios from 'axios'

function RequestStatus() {
    const [requests, setRequests] = useState([])

    const fetchRequests = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/form/get-request-status', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setRequests(response.data.request)
        } catch (error) {
            console.error('Error fetching requests:', error)
        }
    }

    useEffect(() => {
        fetchRequests();
    }, [])

  return (
    <div className='mt-20'>
        user tin update request status will show here
    </div>
  )
}

export default RequestStatus