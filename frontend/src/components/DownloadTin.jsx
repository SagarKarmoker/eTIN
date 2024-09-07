import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import certificateImage from "../assets/etin.jpg"; // Adjust the path as necessary
import axios from "axios";

const DownloadTin = () => {
    const certificateRef = useRef(null);
    const [myTin, setMyTin] = useState(null);
    const token = localStorage.getItem('token');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState();

    useEffect(() => {
        const fetchMyTinData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/form/my-tin', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                console.log(response.data)

                if (response.status === 200 && response.data) {
                    setMyTin(response.data);
                } else if (response.status === 404) {
                    // Handle the 404 status here
                    console.log("Error 404: Data not found.");
                    setError("Data not found. Please ensure the correct information is provided.");
                }

                setLoading(false);
            } catch (error) {
                console.log(error);

                if (error.response && error.response.status === 404) {
                    // Additional handling for 404 error in catch block
                    console.log("Error 404: Data not found caught in catch block.");
                    setError("404: Data not found. Please check the request.");
                } else {
                    // Handle other errors
                    setError("An error occurred while fetching the TIN data.");
                }

                setLoading(false);
            }
        };

        fetchMyTinData();
    }, [myTin]);



    const handleDownloadPdf = async () => {
        const canvas = await html2canvas(certificateRef.current, {
            scale: 2,
            useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [canvas.width, canvas.height],
        });

        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save("certificate.pdf");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="flex flex-col items-center p-4 mt-20">
            <div
                ref={certificateRef}
                className="relative w-[800px] h-[1200px] bg-cover bg-center border-2"
                style={{ backgroundImage: `url(${certificateImage})` }}
            >
                <div className="absolute inset-0 flex items-center flex-col">
                    <span className="text-2xl font-bold mt-[346px] ml-6 mb-[130px] text-black bott">{myTin.information.tin}</span>
                    <span className="font-bold mr-[450px] text-black">{myTin.information.taxPayersName}</span>
                    <span className="font-bold mr-[340px] mt-2 text-black">{myTin.information.fathersName}</span>
                    <span className="font-bold mr-[280px] mt-1 text-black">{myTin.information.mothersName}</span>
                    <span className="font-bold mr-[200px] mt-1 text-black">{myTin.information.currentAddress}</span>
                    <span className="font-bold mr-[160px] mt-1 text-black">{myTin.information.permanentAddress}</span>

                    <span className="font-bold mr-[460px] mt-[116px] text-black">{myTin.issued_date}</span>
                </div>
            </div>

            <button
                onClick={handleDownloadPdf}
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Download as PDF
            </button>
        </div>
    );
};

export default DownloadTin;
