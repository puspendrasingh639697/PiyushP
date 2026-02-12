import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Lottie from "lottie-react";
import mapAnimation from "../assets/map.json";
import Logo from "../assets/logo.png";

function Map() {
  return (
    <div className="w-full bg-black/90 flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
      
      {/* Left Side */}
      <div className="md:w-1/2 w-full flex flex-col items-start text-left">

        {/* Logo — same size as you gave */}
        <div className="mb-2">
          <img
            src={Logo}
            alt="Nya Vayapar Logo"
            style={{ height: "50%", width: "40%" }}
          />
        </div>

        {/* Text — ab image ke bilkul niche */}
        <p className="text-white font-normal text-sm md:text-base mb-4 max-w-sm">
          All India network ke saath hum aapke business ko grow karne mein madad karte hain.
        </p>

        {/* Contact Info */}
        <div className="space-y-1.5 text-gray-800">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-600 text-sm" />
            <span className="text-white"><strong className="text-green-500">Address:</strong> All India Presence</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-500 text-sm" />
            <a href="tel:919876543210" className=" text-white text-sm md:text-base hover:text-green-700">
              <strong className="text-green-500" >Phone:</strong> +91 98765 43210
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-green-600 text-sm" />
            <a href="mailto:support@nyavyapar.com" className=" text-white text-sm md:text-base hover:text-green-700">
              <strong className="text-green-500">Email:</strong> support@nyavyapar.com
            </a>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
        <Lottie 
          animationData={mapAnimation}
          loop={true}
          className="w-full max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
}

export default Map;
