import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* Sidebar */}
      {/* <div className="flex items-center space-x-4 p-2 mb-5">
        <img
          className="h-12 rounded-full"
          src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
          alt="Nur Adnan"
        />
        <div>
          <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide ">
            Nur Adnan
          </h4>
          <span className="text-sm tracking-wide flex items-center space-x-1">
            <svg
              className="h-4 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-gray-600">Verified</span>
          </span>
        </div>
      </div>
      <ul className="space-y-2 text-sm">
        <li>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"
          >
            <span className="text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span>TIN Application</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span className="text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </span>
            <span>File Transfer</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span className="text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
            </span>
            <span>Change Contact</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span className="text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span>View TIN Certificate</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span className="text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </span>
            <span>Reprint Ticket</span>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span className=" text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </span>
            <span>Revalidate</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span className="text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </span>
            <span>Ticket Status</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span className="text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <span>Regenerate Ticket</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span className="text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 8H16M8 12H12M8 16H16M4 20H20V8H4v12z"
                />
              </svg>
            </span>
            <span>Vat/Business Info</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span className="text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span>Change Status</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span className="text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 7.757l1.415 1.415m0 0L6.343 19.071H4v-2.343l10.607-10.607z"
                />
              </svg>
            </span>
            <span>Edit/Correct/Update</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span className="text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7h18M9 3v4M15 3v4M5 13h14v8H5v-8z"
                />
              </svg>
            </span>
            <span>View Request Status</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <span className="text-gray-600">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2H4m12 4h-1l-2 4H7l-2-4H4"
                />
              </svg>
            </span>
            <span>Jurisdiction Finder</span>
          </Link>
        </li>
      </ul> */}

      {/* Registration */}
      {/* <div className="grid gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
        <div className="lg:col-span-2">
          <div className="grid gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
              <label htmlFor="taxpayer-status-a">
                Taxpayer's Status / করদাতার ধরণ :
              </label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
                id="taxpayer-status-a"
              >
                <option
                  value="Individual -> Bangladesh"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Individual -{">"} Bangladesh
                </option>
                <option
                  value="Individual (Foreigner / NRB / without NID)"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Individual -{">"} Foreigner / NRB / without NID
                </option>
              </select>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                id="taxpayer-status-b"
              >
                <option
                  value="Individual -> Bangladeshi -> Having NID"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Individual -{">"} Bangladeshi -{">"} Having NID
                </option>
                <option
                  value="Individual (Foreigner / NRB / without NID)"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Individual -{">"} Foreigner / NRB / without NID
                </option>
              </select>
            </div>

            <div className="md:col-span-5">
              <label htmlFor="registration-type">
                Registration Type / রেজিস্ট্রেশন ধরণ :{" "}
              </label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                id="registration-type"
              >
                <option
                  value="New Registration"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  New Registration
                </option>
              </select>
            </div>
            <div className="md:col-span-3 mr-4">
              <label htmlFor="main-source-of-income">
                Main Source of Income / আয়ের প্রধান উৎস :{" "}
              </label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                id="main-source-of-income"
              >
                <option
                  value="Service"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Service
                </option>
                <option
                  value="Profession"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Profession
                </option>
                <option
                  value="Business ( Individual / Firm )"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Business ( Individual / Firm )
                </option>
                <option
                  value="Others"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Others
                </option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="purpose-of-tin">
                Purpose of TIN / উদ্দেশ্য :{" "}
              </label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                id="purpose-of-tin"
              >
                <option
                  value="Declearing Taxable Income"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Declearing Taxable Income
                </option>
                <option
                  value="Obtaining a credit card"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Obtaining a credit card
                </option>
              </select>
            </div>
            <div className="md:col-span-3 mr-4">
              <label htmlFor="location">
                Location of main source of income :
              </label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                id="location"
              >
                <option
                  value="Dhaka"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Dhaka
                </option>
                <option
                  value="Feni"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Feni
                </option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="service-location">
                Type of Employer/ Service Location :
              </label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                id="service-location"
              >
                <option
                  value="Bank"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Bank
                </option>
                <option
                  value="BTV"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  BTV
                </option>
              </select>
            </div>
          </div>
        </div>
      </div> */}
      {/* Basic Information */}
      {/* <div className="grid gap-y-2 text-sm grid-cols-1 lg:grid-cols-2 w-3/4 min-w-[100px]">
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
                readOnly
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="gender">Gender / লিঙ্গ </label>
              <select
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                name="gender"
                id="gender"
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
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="mobileNumber">Mobile Number/ মোবাইল নম্বর</label>
              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="fax">Facsimile / ফ্যাক্স</label>
              <input
                type="text"
                name="email"
                id="email"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="email">Email / ইমেইল</label>
              <input
                type="email"
                name="email"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
        {/* Other form elements... */}
      {/* <br />
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
      </div> */}
    </>
  );
}

export default About;
