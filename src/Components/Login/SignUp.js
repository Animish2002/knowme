import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEye, FaEyeSlash, FaEnvelope, FaPhone } from "react-icons/fa";

import personImage from '../../Images/person.jpg'; // Import the image

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState(''); // State for selected option
  const [isOpen, setIsOpen] = useState(false); // State for dropdown

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you can send the username and password to your server for authentication
    // Once the user is signed up, you can navigate them to another page
    navigate('/login'); // Navigate to the login page after signing up
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown when option is selected
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loginbox  w-full  border-2 border-sky-700 shadow-md shadow-sky-700 rounded-lg p-8 flex flex-col md:flex-row">
        <div className="mb-8 md:mb-0 md:mr-8">
          <img src={personImage} alt="Sig" className="w-54 h-54 mx-auto md:mx-0" />
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-4xl font-bold text-center mb-10 mt-5 text-gray-600">Sign Up</h1>
            <div className='relative'>
              <input className='w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                type="text"
                placeholder='Enter your Name'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FaUser className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400' />
            </div>
            <div className='relative'>
              <input className='w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                type="number"
                placeholder='Enter your Phone number'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
              <FaPhone className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400' />
            </div>
            <div className='relative'>
              <input className='w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                type="text"
                placeholder='Enter your Email '
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaEnvelope className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400' />
            </div>
            <div className='relative'>
              <input className='w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                type={showPassword ? 'text' : 'password'}
                placeholder='Set your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showPassword ? <FaEyeSlash className='absolute top-1/2  left-3 transform -translate-y-1/2 text-gray-400 cursor-pointer' onClick={() => setShowPassword(false)} /> : <FaEye className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 cursor-pointer' onClick={() => setShowPassword(true)} />}
            </div>
            {/* Dropdown */}
            <div className='relative'>
              <button
                id="dropdownRadioHelperButton"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                onClick={toggleDropdown}
                type="button"
              >
                {selectedOption || 'Select Usage'}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {/* Dropdown menu */}
              {isOpen && (
                <div id="dropdownRadioHelper" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-60 absolute top-full mt-1">
                  <ul className="p-3 space-y-1 text-sm text-gray-700">
                    <li>
                      <button
                        className="flex p-2 rounded hover:bg-gray-100 w-full text-left focus:outline-none"
                        onClick={() => handleOptionSelect('Individual')}
                      >
                        <span className="flex items-center h-5">
                          <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                        </span>
                        <span className="ms-2">
                          Individual
                          <p className="text-xs font-normal text-gray-500">Some helpful instruction goes here.</p>
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex p-2 rounded hover:bg-gray-100 w-full text-left focus:outline-none"
                        onClick={() => handleOptionSelect('Company')}
                      >
                        <span className="flex items-center h-5">
                          <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                        </span>
                        <span className="ms-2">
                          Company
                          <p className="text-xs font-normal text-gray-500">Some helpful instruction goes here.</p>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* End of Dropdown */}

            <button className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600' type="submit">Sign Up</button>
            <div className='flex'>
              <p>Already have an account?</p>
              <Link to='/login' className='pl-2'>Login here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
