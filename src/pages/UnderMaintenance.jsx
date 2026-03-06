// UnderMaintenance.jsx
import { Infinity } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const UnderMaintenance = () => {
   const phoneNumber = "+15163731402"; // Removed spaces and parentheses for URL
    
    const handleWhatsAppClick = () => {
        // Remove any non-numeric characters and ensure it's in the right format
        const cleanNumber = phoneNumber.replace(/\D/g, '');
        const whatsappUrl = `https://wa.me/${cleanNumber}`;
        window.open(whatsappUrl, '_blank');
    };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Construction Icon */}
        <div className="mb-8 animate-bounce">
          <svg 
            className="w-24 h-24 mx-auto text-yellow-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-8">
          We're currently working on improving your experience. 
          Please check back soon!
        </p>

        {/* Estimated Time */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 inline-block">
          <p className="text-gray-400 mb-2">Estimated time remaining:</p>
          {/* <p className="text-2xl font-semibold text-white">2 hours</p> */}
          <div className='flex justify-center text-gray-400'>
            <Infinity />
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleWhatsAppClick}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition duration-300 cursor-pointer"
          >
            Contact
          </button>
          <Link 
            to="/" 
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Back To Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance;