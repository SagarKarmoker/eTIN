import Registration from "../components/Registration/Registration";
import BasicInformation from "../components/Basic_Information/Basic_Information";
import FinalPreview from "../components/Final_Preview/Final_Preview";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import Sidebar from "../components/Sidebar/Sidebar";

const Form = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    registration: {},
    information: {},
    final_Preview: {
      isChecked: false,
    },
    finalSubmission: false,
  });

  const generatePDF = () => {
    const { information, registration, taxesZone, taxesCircle } =
      data.final_Preview;
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("TIN Certificate", 20, 20);

    doc.setFontSize(12);
    doc.text(`Taxpayer's Name: ${information.taxPayersName}`, 20, 40);
    doc.text(`NID Number: ${information.number}`, 20, 50);
    doc.text(`Spouse's Name: ${information.spouseName}`, 20, 80);
    doc.text(`Date of Birth: ${information.dob}`, 20, 90);
    doc.text(`Mobile Number: ${information.mobileNumber}`, 20, 100);
    doc.text(`Email: ${information.email}`, 20, 110);
    doc.text(`Permanent Address: ${information.permanentAddress}`, 20, 120);
    doc.text(`Tax Zone: ${taxesZone}`, 20, 130);
    doc.text(`Tax Circle: ${taxesCircle}`, 20, 140);

    doc.save("TIN_Certificate.pdf");
  };

  const FinalSubmission = async (e) => {
    const { registration, information, final_Preview } = data;
    e.preventDefault();

    if (!final_Preview.isChecked) {
      Swal.fire(
        "Error!",
        "Please confirm the information by checking the checkbox.",
        "error"
      );
      return;
    }

    try {
      setData({ ...data, finalSubmission: true });
      const response = await axios.post(
        "http://localhost:3001/api/form/finalsubmission",
        {
          registration,
          information,
          final_Preview,
          finalSubmission: true,
        }
      );

      const tin = response.data.tin; // Get TIN from the response
      Swal.fire({
        title: "Success!",
        text: `Final Submission successful. Your TIN is: ${tin}. Do you want to download the TIN certificate?`,
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Download",
      }).then((result) => {
        if (result.isConfirmed) {
          generatePDF();
        }
      });
    } catch (error) {
      Swal.fire("Error!", "Final Submission failed", "error");
      console.log(error);
    }
  };

  const titles = ["Registration", "Basic Information", "Final Preview"];

  const ProgressBar = () => {
    const progress = (page / (titles.length - 1)) * 100;
    return (
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#BF202F] bg-[#FEE2E2]">
              Step {page + 1}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-[#BF202F]">
              {progress.toFixed(0)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#FEE2E2]">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#BF202F]"
          ></div>
        </div>
      </div>
    );
  };

  const validateFields = () => {
    const { registration, information } = data;

    if (page === 0 && Object.keys(registration).length === 0) {
      Swal.fire(
        "Error!",
        "Please fill out the Registration form first.",
        "error"
      );
      return false;
    } else if (page === 1) {
      const requiredFields = [
        "taxPayersName",
        "number",
        "dob",
        "fathersName",
        "mothersName",
        "spouseName",
        "mobileNumber",
        "fax",
        "email",
      ];

      for (let field of requiredFields) {
        if (!information[field]) {
          Swal.fire(
            "Error!",
            "Please complete all fields in the Basic Information form.",
            "error"
          );
          return false;
        }
      }
    }
    return true;
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <Registration data={data} setData={setData} />;
    } else if (page === 1) {
      return <BasicInformation data={data} setData={setData} />;
    } else {
      return <FinalPreview data={data} setData={setData} />;
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-4xl mt-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            {titles[page]}
          </h1>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-6xl flex flex-row gap-4">
          {/* Sidebar on the left */}
          {/* <div className="w-1/4 min-w-[250px]">
            <Sidebar />
          </div> */}

          {/* Form on the right */}
          <div className="w-3/4 min-w-[1000px]">
            <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
              <ProgressBar />
              <div>{PageDisplay()}</div>
              <div className="flex flex-row gap-4 pt-8">
                <button
                  disabled={page === 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                  className={`flex items-center justify-center w-1/2 rounded-xl border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-md transition duration-300 ease-in-out transform ${
                    page === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-600 hover:shadow-lg"
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  Prev
                </button>
                <button
                  onClick={(e) => {
                    if (validateFields()) {
                      if (page === titles.length - 1) {
                        FinalSubmission(e);
                        console.log(data);
                      } else {
                        setPage((currPage) => currPage + 1);
                      }
                    }
                  }}
                  className="flex items-center justify-center w-1/2 rounded-xl border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {page === titles.length - 1 ? "Submit" : "Next"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
