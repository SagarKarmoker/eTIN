import React, { useState, useEffect } from "react";

const Basic_Information = ({ data, setData }) => {
  const defaultInformation = {
    taxPayersName: "",
    gender: "",
    number: "",
    dob: "",
    fathersName: "",
    mothersName: "",
    spouseName: "",
    mobileNumber: "",
    fax: "",
    email: "",
    currentAddress: "",
    currentCountry: "",
    currentDistrict: "",
    currentThana: "",
    currentPostCode: "",
    permanentAddress: "",
    permanentCountry: "",
    permanentDistrict: "",
    permanentThana: "",
    permanentPostCode: "",
    otherDistrict: "",
    otherThana: "",
  };

  const information = data.information || defaultInformation;
  const [taxPayersName, setTaxPayersName] = useState(information.taxPayersName);
  const [gender, setGender] = useState(information.gender);
  const [number, setNumber] = useState(information.number);
  const [dob, setDob] = useState(information.dob);
  const [fathersName, setFathersName] = useState(information.fathersName);
  const [mothersName, setMothersName] = useState(information.mothersName);
  const [spouseName, setSpouseName] = useState(information.spouseName);
  const [mobileNumber, setMobileNumber] = useState(information.mobileNumber);
  const [fax, setFax] = useState(information.fax);
  const [email, setEmail] = useState(information.email);
  const [currentAddress, setCurrentAddress] = useState(
    information.currentAddress
  );
  const [currentCountry, setCurrentCountry] = useState(
    information.currentCountry
  );
  const [currentDistrict, setCurrentDistrict] = useState(
    information.currentDistrict
  );
  const [currentThana, setCurrentThana] = useState(information.currentThana);
  const [currentPostCode, setCurrentPostCode] = useState(
    information.currentPostCode
  );
  const [permanentAddress, setPermanentAddress] = useState(
    information.permanentAddress
  );
  const [permanentCountry, setpermanentCountry] = useState(
    information.permanentCountry
  );
  const [permanentDistrict, setPermanentDistrict] = useState(
    information.permanentDistrict
  );
  const [permanentThana, setPermanentThana] = useState(
    information.permanentThana
  );
  const [permanentPostCode, setPermanentPostCode] = useState(
    information.permanentPostCode
  );
  const [otherDistrict, setOtherDistrict] = useState(information.otherDistrict);
  const [otherThana, setOtherThana] = useState(information.otherThana);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        const response = await fetch("http://localhost:3001/api/kyc/people-data", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });

        if (response.ok) {
          const personData = await response.json();

          setTaxPayersName(personData.fullNameEnglish);
          setFathersName(personData.father);
          setMothersName(personData.mother);
          setNumber(personData.nidNumber);
          setDob(personData.dateOfBirth);
          setPermanentAddress(personData.address);
          //   setMobileNumber(personData.phoneNumber)
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updatedInformation = {
      taxPayersName,
      gender,
      number,
      dob,
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
      otherDistrict,
      otherThana,
    };

    setData((prevData) => ({
      ...prevData,
      information: updatedInformation,
    }));

    localStorage.setItem("informationData", JSON.stringify(updatedInformation));
  }, [
    taxPayersName,
    gender,
    number,
    dob,
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
    otherDistrict,
    otherThana,
    setData,
  ]);

  return (
    <>
      <div className="grid gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
        <div className="lg:col-span-2">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
              <label htmlFor="taxPayersName">
                Taxpayer's Status / করদাতার ধরণ
              </label>
              <input
                type="text"
                name="taxPayersName"
                id="taxPayersName"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={taxPayersName}
                onChange={(e) => setTaxPayersName(e.target.value)}
                readOnly
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="gender">Gender / লিঙ্গ </label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                name="gender"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="none" selected disabled hidden></option>
                <option
                  value="Male"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Male
                </option>
                <option
                  value="Female"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Female
                </option>
                <option
                  value="Other"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Other
                </option>
              </select>
            </div>
            <div className="md:col-span-5">
              <label htmlFor="number">
                Taxpayer's National ID/ SMART CARD Number/ জাতীয় পরিচিতি নম্বর
              </label>
              <input
                type="number"
                name="number"
                id="number"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                readOnly
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="dob">Date of Birth (DoB) / জন্মতারিখ</label>
              <input
                type="text"
                name="dob"
                id="dob"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                readOnly
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="fathersName">Father's Name / পিতার নাম</label>
              <input
                type="text"
                name="fathersName"
                id="fathersName"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={fathersName}
                onChange={(e) => setFathersName(e.target.value)}
                readOnly
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="mothersName">Mother's Name / মাতার নাম</label>
              <input
                type="text"
                name="mothersName"
                id="mothersName"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={mothersName}
                onChange={(e) => setMothersName(e.target.value)}
                readOnly
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="spouseName">
                Name of Spouse / স্বামী বা স্ত্রীর নাম
              </label>
              <input
                type="text"
                name="spouseName"
                id="spouseName"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={spouseName}
                onChange={(e) => setSpouseName(e.target.value)}
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="mobileNumber">Mobile Number/ মোবাইল নম্বর</label>
              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="fax">Facsimile / ফ্যাক্স</label>
              <input
                type="text"
                name="email"
                id="email"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={fax}
                onChange={(e) => setFax(e.target.value)}
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="email">Email / ইমেইল</label>
              <input
                type="email"
                name="email"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
        <br />
        <hr />
        <h2 className="text-base font-semibold mb-4">
          Current Address (For Individual "Present Residential Address")
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <div className="md:col-span-3 flex gap-4">
            <div className="flex-1">
              <label>Country</label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                id="currentCountry"
                value={currentCountry}
                onChange={(e) => setCurrentCountry(e.target.value)}
              >
                <option value="none" selected disabled hidden></option>
                <option>Bangladesh</option>
              </select>
            </div>
            <div className="flex-1">
              <label>District/State</label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                id="currentDistrict"
                value={currentDistrict}
                onChange={(e) => setCurrentDistrict(e.target.value)}
              >
                <option value="none" selected disabled hidden></option>
                <option value="Dhaka">Dhaka</option>
              </select>
            </div>
            <div className="flex-1">
              <label>Thana</label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                id="currentThana"
                value={currentThana}
                onChange={(e) => setCurrentThana(e.target.value)}
              >
                <option value="none" selected disabled hidden></option>
                <option value="Khilgaon">Khilgaon</option>
              </select>
            </div>
          </div>
          <div className="md:col-span-2 flex gap-4">
            <div className="flex-1">
              <label>Address</label>
              <input
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                placeholder="Line-1"
                name="currentAddress"
                id="currentAddress"
                value={currentAddress}
                onChange={(e) => setCurrentAddress(e.target.value)}
              />
              <input
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                placeholder="Line-2"
              />
            </div>
            <div className="flex-1">
              <label>Post Code</label>
              <input
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                name="currentPostCode"
                id="currentPostCode"
                value={currentPostCode}
                onChange={(e) => setCurrentPostCode(e.target.value)}
              />
            </div>
          </div>
        </div>
        <hr />
        <h2 className="text-md font-bold mb-4">Permanent Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <div className="md:col-span-3 flex gap-4">
            <div className="flex-1">
              <label>Country</label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                id="permanentCountry"
                value={permanentCountry}
                onChange={(e) => setpermanentCountry(e.target.value)}
              >
                <option value="none" selected disabled hidden></option>
                <option>Bangladesh</option>
              </select>
            </div>
            <div className="flex-1">
              <label>District/State</label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                id="permanentDistrict"
                value={permanentDistrict}
                onChange={(e) => setPermanentDistrict(e.target.value)}
              >
                <option value="none" selected disabled hidden></option>
                <option value="Dhaka">Dhaka</option>
              </select>
            </div>
            <div className="flex-1">
              <label>Thana</label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                id="permanentThana"
                value={permanentThana}
                onChange={(e) => setPermanentThana(e.target.value)}
              >
                <option value="none" selected disabled hidden></option>
                <option value="Khilgaon">Khilgaon</option>
              </select>
            </div>
          </div>
          <div className="md:col-span-2 flex gap-4">
            <div className="flex-1">
              <label>Address</label>
              <input
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                placeholder="Line-1"
                id="permanentAddress"
                value={permanentAddress}
                onChange={(e) => setPermanentAddress(e.target.value)}
                readOnly
              />
              <input
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                placeholder="Line-2"
              />
            </div>
            <div className="flex-1">
              <label>Post Code</label>
              <input
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                name="permanentPostCode"
                id="permanentPostCode"
                value={permanentPostCode}
                onChange={(e) => setPermanentPostCode(e.target.value)}
              />
            </div>
          </div>
        </div>
        <hr />
        <h2 className="text-md font-bold mb-4">
          Other Address (Working / Business Address)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3 flex gap-4">
            <div className="flex-1">
              <label>Country</label>
              <select className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3">
                <option value="none" selected disabled hidden></option>
                <option>Bangladesh</option>
              </select>
            </div>
            <div className="flex-1">
              <label>District/State</label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                id="otherDistrict"
                value={otherDistrict}
                onChange={(e) => setOtherDistrict(e.target.value)}
              >
                <option value="none" selected disabled hidden></option>
                <option value="Dhaka">Dhaka</option>
              </select>
            </div>
            <div className="flex-1">
              <label>Thana</label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                id="otherThana"
                value={otherThana}
                onChange={(e) => setOtherThana(e.target.value)}
              >
                <option value="none" selected disabled hidden></option>
                <option value="Khilgaon">Khilgaon</option>
              </select>
            </div>
          </div>
          <div className="md:col-span-2 flex gap-4">
            <div className="flex-1">
              <label>Address</label>
              <input
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                placeholder="Line-1"
              />
              <input
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                placeholder="Line-2"
              />
            </div>
            <div className="flex-1">
              <label>Post Code</label>
              <input className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basic_Information;
