import React, { useState } from "react";

const OnboardConsumer = () => {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [dob, setDob] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 border-solid border-4 border-cyan-500 rounded-xl p-8">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-solid border-2 border-cyan-700 rounded-md px-2 py-1 mb-4 w-full"
              />
              <label>Phone Number:</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border-solid border-2 border-cyan-700 rounded-md px-2 py-1 mb-4 w-full"
              />
              <label>Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border-solid border-2 border-cyan-700 rounded-md px-2 py-1 mb-4 w-full"
              />
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-solid border-2 border-cyan-700 rounded-md px-2 py-1 mb-4 w-full"
              />
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
              >
                Next
              </button>
            </div>
          )}
          {step === 2 && (
            <div>
              <label>Aadhar:</label>
              <input
                type="text"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                className="border-solid border-2 border-cyan-700 rounded-md px-2 py-1 mb-4 w-full"
              />
              <label>PAN:</label>
              <input
                type="text"
                value={pan}
                onChange={(e) => setPan(e.target.value)}
                className="border-solid border-2 border-cyan-700 rounded-md px-2 py-1 mb-4 w-full"
              />
              <label>Bank Account Number:</label>
              <input
                type="text"
                value={bankAccountNumber}
                onChange={(e) => setBankAccountNumber(e.target.value)}
                className="border-solid border-2 border-cyan-700 rounded-md px-2 py-1 mb-4 w-full"
              />
              <label>Bank IFSC:</label>
              <input
                type="text"
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value)}
                className="border-solid border-2 border-cyan-700 rounded-md px-2 py-1 mb-4 w-full"
              />
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Next
              </button>
            </div>
          )}
          {step === 3 && (
            <div>
              <label>Bank Branch:</label>
              <input
                type="text"
                value={bankBranch}
                onChange={(e) => setBankBranch(e.target.value)}
                className="border-solid border-2 border-cyan-700 rounded-md px-2 py-1 mb-4 w-full"
              />
              <label>Date of Birth:</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="border-solid border-2 border-cyan-700 rounded-md px-2 py-1 mb-4 w-full"
              />
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2"
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default OnboardConsumer;
