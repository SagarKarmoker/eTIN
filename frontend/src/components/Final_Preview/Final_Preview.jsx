import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Final_Preview = ({ data, setData }) => {
  const [information, setInformation] = useState({});
  const [registration, setRegistration] = useState({});
  const [taxesZone, setTaxesZone] = useState("");
  const [taxesCircle, setTaxesCircle] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const savedInformation = JSON.parse(
      localStorage.getItem("informationData")
    );
    const savedRegistration = JSON.parse(
      localStorage.getItem("registrationData")
    );

    if (savedInformation) {
      setInformation(savedInformation);
      setTaxesZone(savedInformation.permanentDistrict);
    }

    if (savedRegistration) {
      setRegistration(savedRegistration);
      setTaxesCircle(`Circle: ${Math.floor(Math.random() * 100)}`);
    }
  }, []);

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      final_Preview: {
        ...prevData.final_Preview,
        isChecked,
        information,
        registration,
        taxesZone,
        taxesCircle,
      },
    }));
  }, [isChecked, setData, information, registration, taxesZone, taxesCircle]);

  const {
    taxPayersName,
    dob,
    gender,
    number,
    fathersName,
    mothersName,
    spouseName,
    mobileNumber,
    fax,
    email,
    currentCountry,
    currentAddress,
    currentDistrict,
    currentThana,
    currentPostCode,
    permanentAddress,
    permanentCountry,
    permanentDistrict,
    permanentThana,
    permanentPostCode,
  } = information;

  const { purposeOfTIN, taxPayerStatusB } = registration;

  return (
    <>
      <form className="w-full max-w-lg px-6">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label htmlFor="taxpayer-name">Taxpayer's Name</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="taxpayer-name"
              type="text"
              value={taxPayersName}
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label htmlFor="declaring-taxable-income">
              Declaring Taxable Income
            </label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="declaring-taxable-income"
              type="text"
              value={purposeOfTIN}
              readOnly
            />
          </div>
        </div>

        {/* Updated Section: Taxes Zone and Taxes Circle in a single row */}
        <div className="flex -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="taxes-zone">Taxes Zone</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="taxes-zone"
              type="text"
              value={taxesZone}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="taxes-circle">Taxes Circle</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="taxes-circle"
              type="text"
              value={taxesCircle}
              readOnly
            />
          </div>
        </div>

        <div className="flex -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="status">Status</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="status"
              type="text"
              value={taxPayerStatusB}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="country-nationality">Country / Nationality</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="country-nationality"
              type="text"
              value={permanentCountry}
              readOnly
            />
          </div>
        </div>

        <div className="flex -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="incorporation-no">NID</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="incorporation-no"
              type="text"
              value={number}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="dob">DoB</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="dob"
              type="text"
              value={dob}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label htmlFor="gender">Gender</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="gender"
              type="text"
              value={gender}
              readOnly
            />
          </div>
        </div>

        <div className="flex -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="fathers-name">Father's Name</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="fathers-name"
              type="text"
              value={fathersName}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="mothers-name">Mother's Name</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="mothers-name"
              type="text"
              value={mothersName}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label htmlFor="spouse-name">Spouse's Name</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="spouse-name"
              type="text"
              value={spouseName}
              readOnly
            />
          </div>
        </div>

        <div className="flex -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="mobile-number">Mobile Number</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="mobile-number"
              type="text"
              value={mobileNumber}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="facsimile">Facsimile</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="facsimile"
              type="text"
              value={fax}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label htmlFor="email">Email</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="email"
              type="text"
              value={email}
              readOnly
            />
          </div>
        </div>

        <div className="flex -mx-3 mb-6">
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label htmlFor="type">Type</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="type"
              type="text"
              value="Current Address"
              readOnly
            />
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label htmlFor="address">Address</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="address"
              type="text"
              value={currentAddress}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label htmlFor="country">Country</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="country"
              type="text"
              value={currentCountry}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label htmlFor="district-state">District / State</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="district-state"
              type="text"
              value={currentDistrict}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label htmlFor="thana">Thana</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="thana"
              type="text"
              value={currentThana}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label htmlFor="zip-code">Post / Zip Code</label>
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="zip-code"
              type="text"
              value={currentPostCode}
              readOnly
            />
          </div>
        </div>

        <div className="flex -mx-3 mb-6">
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="type"
              type="text"
              value="Permanent Address"
              readOnly
            />
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="address"
              type="text"
              value={permanentAddress}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="country"
              type="text"
              value={permanentCountry}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="district-state"
              type="text"
              value={permanentDistrict}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="thana"
              type="text"
              value={permanentThana}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <input
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="zip-code"
              type="text"
              value={permanentPostCode}
              readOnly
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <label
            htmlFor="link-checkbox"
            className="text-sm font-medium text-black-700 dark:text-black-300 leading-5"
          >
            I hereby affirm that all information given above is correct &
            complete, and{" "}
            <Link
              to="/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              I have not taken any TIN.
            </Link>
          </label>
        </div>
      </form>
    </>
  );
};

export default Final_Preview;
