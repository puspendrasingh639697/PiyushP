// import React from "react";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import mapImg from "../assets/map.png";

// function Map() {
//   return (
//     <div className="w-full bg-gray-100 flex flex-col md:flex-row items-center justify-between p-6 gap-6">
      
//       {/* Left Side - Contact / Content */}
//       <div className="md:w-1/2 w-full">
//         <h2 className="text-3xl font-bold mb-4 text-green-600">
//           Nya Vayapar Locations
//         </h2>
//         <p className="text-gray-700 mb-4">
//           All India network ke saath hum aapke business ko grow karne mein madad karte hain.
//         </p>

//         <div className="space-y-3 text-gray-800">
//           <p className="flex items-center gap-3">
//             <FaMapMarkerAlt className="text-green-600" />
//             <span><strong>Address:</strong> All India Presence</span>
//           </p>

//           <p className="flex items-center gap-3">
//             <FaPhoneAlt className="text-green-600" />
//             <span><strong>Phone:</strong> +91 98765 43210</span>
//           </p>

//           <p className="flex items-center gap-3">
//             <FaEnvelope className="text-green-600" />
//             <span><strong>Email:</strong> support@nyavyapar.com</span>
//           </p>
//         </div>
//       </div>

//       {/* Right Side - Map Image */}
//       <div className="md:w-1/2 w-full flex justify-center">
//         <img
//           src={mapImg}
//           alt="Nya Vayapar Map"
//           className="w-full max-w-md"
//         />
//       </div>

//     </div>
//   );
// }

// export default Map;


import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Lottie from "lottie-react";
import mapAnimation from "../assets/map.json";

function Map() {
  return (
    <div className="w-full bg-gray-100 flex flex-col md:flex-row items-center justify-between p-6 gap-6">
      
      {/* Left Side - Contact / Content */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-3xl font-bold mb-4 text-green-600">
          Nya Vayapar Locations
        </h2>
        <p className="text-gray-700 mb-4">
          All India network ke saath hum aapke business ko grow karne mein madad karte hain.
        </p>

        <div className="space-y-3 text-gray-800">
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-green-600" />
            <span><strong>Address:</strong> All India Presence</span>
          </p>

          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-green-600" />
            <span><strong>Phone:</strong> +91 98765 43210</span>
          </p>

          <p className="flex items-center gap-3">
            <FaEnvelope className="text-green-600" />
            <span><strong>Email:</strong> support@nyavyapar.com</span>
          </p>
        </div>
      </div>

      {/* Right Side - Lottie Animation */}
      <div className="md:w-1/2 w-full flex justify-center">
        <Lottie 
          animationData={mapAnimation}
          loop={true}
          className="w-full max-w-md"
        />
      </div>

    </div>
  );
}

export default Map;
