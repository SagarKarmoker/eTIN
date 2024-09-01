import React, { useState, useEffect } from "react";

const Registration = ({ data, setData }) => {
  const [taxPayerStatusA, setTaxPayerStatusA] = useState(
    data.registration.taxPayerStatusA || "Individual -> Bangladeshi"
  );
  const [taxPayerStatusB, setTaxPayerStatusB] = useState(
    data.registration.taxPayerStatusB ||
      "Individual -> Bangladeshi -> Having NID"
  );
  const [registrationType, setRegistrationType] = useState(
    data.registration.registrationType || "New Registration"
  );
  const [purposeOfTIN, setPurposeOfTIN] = useState(
    data.registration.purposeOfTIN || "Declearing Taxable Income"
  );
  const [mainSourceOfIncome, setMainSourceOfIncome] = useState(
    data.registration.mainSourceOfIncome || "Service"
  );
  const [location, setLocation] = useState(
    data.registration.location || "Dhaka"
  );
  const [serviceLocation, setServiceLocation] = useState(
    data.registration.serviceLocation || "Bank"
  );

  useEffect(() => {
    const updatedRegistration = {
      taxPayerStatusA,
      taxPayerStatusB,
      registrationType,
      purposeOfTIN,
      mainSourceOfIncome,
      location,
      serviceLocation,
    };

    setData((prevData) => ({
      ...prevData,
      registration: updatedRegistration,
    }));

    localStorage.setItem("registrationData", JSON.stringify(updatedRegistration));
  }, [
    taxPayerStatusA,
    taxPayerStatusB,
    registrationType,
    purposeOfTIN,
    mainSourceOfIncome,
    location,
    serviceLocation,
    setData,
  ]);

  // Function to get options for the second dropdown based on the first dropdown
  const getTaxPayerStatusBOptions = () => {
    switch (taxPayerStatusA) {
      case "Individual -> Bangladeshi":
        return [
          "Individual -> Bangladeshi -> Having NID",
          "Individual -> Bangladeshi -> Minor/Dependent",
        ];
      case "Individual (Foreigner / NRB / without NID)":
        return [
          "Foreigner (Non Bangladeshi)",
          "Foreigner (Non Bangladeshi) Minor/Dependent",
        ];
      case "Company":
        return [
          "Private Limited Company",
          "Public Limited Company",
          "Foreign Company not registerd with RJSC",
          "Corporation",
          "Any other company",
        ];
      case "Partnership Firm":
        return [
          "Registerd with RJSC",
          "Not registerd with RJSC",
        ];
      case "Association of person":
        return [
          "Association of person",
        ];
      case "Hindu undivided family":
        return [
          "Hindu undivided family",
        ];
      case "Local Authority":
        return [
          "Local Authority",
        ];
      case "Artificial judicial person":
        return [
          "NGO",
          "Co-Operative Society",
          "Trust",
          "Foundation",
          "Political Party",
          "Cultural/Social/Sports organisation",
          "Religious / Charitable Institution",
        ];
      case "Fund":
        return [
          "Mutual Funds",
          "Gratuity Funds",
          "Pension Funds",
          "Provident Funds",
          "Welfare Funds",
          "Super Annunation Funds",
          "Trust Funds",
          "Approved Foreign Funds",
          "Load Funds",
          "Hedge Funds",
          "Special. Purpose Funds",
          "Endowment Funds",
          "Growth Funds",
          "Other Funds",
        ];
      default:
        return [];
    }
  };

  return (
    <div className="grid gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
      <div className="lg:col-span-2">
        <div className="grid gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2">
            <label htmlFor="purpose-of-tin">
              Purpose of TIN / উদ্দেশ্য :{" "}
            </label>
            <select
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              id="purpose-of-tin"
              value={purposeOfTIN}
              onChange={(e) => setPurposeOfTIN(e.target.value)}
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
              <option
                value="Others"
                className="mb-2 text-sm text-start text-grey-900 font-medium"
              >
                Others
              </option>
              <option
                value="Selling Lands"
                className="mb-2 text-sm text-start text-grey-900 font-medium"
              >
                Selling Lands
              </option>
            </select>
          </div>

          <div className="md:col-span-5">
            <label htmlFor="tin-applying-for">
              TIN Applying For / করদাতার ধরণ :
            </label>
            <select
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 mb-3"
              id="tin-applying-for"
              value={taxPayerStatusA}
              onChange={(e) => {
                setTaxPayerStatusA(e.target.value);
                // Reset the second dropdown value if the new selection does not match current options
                if (!getTaxPayerStatusBOptions().includes(taxPayerStatusB)) {
                  setTaxPayerStatusB(getTaxPayerStatusBOptions()[0] || "");
                }
              }}
            >
              <option
                value="Individual -> Bangladeshi"
                className="mb-2 text-sm text-start text-grey-900 font-medium"
              >
                Individual -{">"} Bangladeshi
              </option>
              <option
                value="Individual (Foreigner / NRB / without NID)"
                className="mb-2 text-sm text-start text-grey-900 font-medium"
              >
                Individual -{">"} Foreigner / NRB / without NID
              </option>
              <option
                value="Company"
                className="mb-2 text-sm text-start text-grey-900 font-medium"
              >
                Company
              </option>
              <option
                value="Partnership Firm"
                className="mb-2 text-sm text-start text-grey-900 font-medium"
              >
                Partnership Firm
              </option>
              <option
                value="Association of person"
                className="mb-2 text-sm text-start text-grey-900 font-medium"
              >
                Association of person
              </option>
              <option
                value="Hindu undivided family"
                className="mb-2 text-sm text-start text-grey-900 font-medium"
              >
                Hindu undivided family
              </option>
              <option
                value="Local Authority"
                className="mb-2 text-sm text-start text-grey-900 font-medium"
              >
                Local Authority
              </option>
              <option
                value="Artificial judicial person"
                className="mb-2 text-sm text-start text-grey-900 font-medium"
              >
                Artificial judicial person
              </option>
              <option
                value="Fund"
                className="mb-2 text-sm text-grey-900 font-medium"
              >
                Fund
              </option>
            </select>

            <select
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              id="taxpayer-status-b"
              value={taxPayerStatusB}
              onChange={(e) => setTaxPayerStatusB(e.target.value)}
            >
              {getTaxPayerStatusBOptions().map(option => (
                <option
                  key={option}
                  value={option}
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-5">
            <label htmlFor="registration-type">
              Registration Type / রেজিস্ট্রেশন ধরণ :{" "}
            </label>
            <select
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              id="registration-type"
              value={registrationType}
              onChange={(e) => setRegistrationType(e.target.value)}
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
              value={mainSourceOfIncome}
              onChange={(e) => setMainSourceOfIncome(e.target.value)}
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
            <label htmlFor="location">
              Location of main source of income :
            </label>
            <select
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
              value={serviceLocation}
              onChange={(e) => setServiceLocation(e.target.value)}
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
    </div>
  );
};

export default Registration;
