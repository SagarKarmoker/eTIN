import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import certificateImage from "../assets/demo_cert.png"; // Adjust the path as necessary

const DownloadTin = () => {
    const certificateRef = useRef(null);

    const handleDownloadPdf = async () => {
        const canvas = await html2canvas(certificateRef.current, {
            scale: 2,
            useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [canvas.width, canvas.height],
        });

        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save("certificate.pdf");
    };

    return (
        <div className="flex flex-col items-center p-4 mt-20">
            <div
                ref={certificateRef}
                className="relative w-[800px] h-[600px] bg-cover bg-center border-2"
                style={{ backgroundImage: `url(${certificateImage})` }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">John Doe</span>
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
