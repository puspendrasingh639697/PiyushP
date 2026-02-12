// import { Facebook, Twitter, Instagram, Linkedin, MessageCircle,  } from "lucide-react";
// import Logo from "../assets/logo.png"; // Aapka logo path

// export default function Footer() {
//   const quickLinks = ["About Us", "Our Products", "For Farmers", "For Buyers", "Contact"];
//   const products = ["Premium Makhana (6 Suta)", "Standard Makhana", "Roasted Makhana", "Makhana Chivda"];
//   const legalLinks = ["Privacy Policy", "Terms of Service"];
//   const socialIcons = [Facebook, Twitter, Instagram, Linkedin];

//   return (
//     <footer className="relative text-black/90 py-16 border-t border-gray-100">
      
//       {/* --- FLOATING ICONS (FIXED) --- */}
//       <div className="fixed bottom-8 right-6 flex flex-col gap-4 z-[999]">
//         {/* WhatsApp Icon */}
//         <a 
//           href="https://wa.me/918116146987" 
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
//         >
//           <MessageCircle size={28} />
//         </a>

//         {/* Call Icon */}
        
//       </div>
//       {/* ------------------------------ */}

//       <div className="container mx-auto px-6">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           <div>
//             {/* Logo Section */}
//             <div className="flex justify-start">
//               <img 
//                 src={Logo} 
//                 alt="Naya Vayapar Logo" 
//                 className="h-24 md:h-32 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300" 
//               />
//               <div className="text-xs text-green-600 font-bold tracking-widest uppercase">
//                 Farm to Business
//               </div>
//             </div>
            
//             <p className="text-gray-800 mb-6 leading-relaxed">
//               Empowering farmers and enriching lives by bringing authentic, high-quality Makhana directly from the ponds of Bihar to the world.
//             </p>
//             <div className="flex space-x-4">
//               {socialIcons.map((Icon, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
//                 >
//                   <Icon className="w-5 h-5 text-white" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4 text-green-600">Quick Links</h4>
//             <ul className="space-y-2 text-gray-800">
//               {quickLinks.map((link) => (
//                 <li key={link}>
//                   <a href="#" className="hover:text-green-600 transition-colors">
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4 text-green-600">Our Products</h4>
//             <ul className="space-y-2 text-black">
//               {products.map((product) => (
//                 <li key={product}>
//                   <a href="#" className="hover:text-green-600 transition-colors">
//                     {product}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4 text-green-600">Contact</h4>
//             <div className="space-y-3 text-black text-sm">
//               <div className="font-medium">
//                 <span className="text-green-700 font-bold">Rahul Kumar:</span> 8116146987
//               </div>
//               <div className="font-medium">
//                 <span className="text-green-700 font-bold">Roshan Kumar:</span> 8116393432
//               </div>
//               <div className="hover:text-green-600 cursor-pointer transition-colors">
//                 support@nyavyapar.in
//               </div>
//               <div className="leading-relaxed text-gray-700">
//                 Satnarayan Bhagwan Campus,
//                 <br />
//                 Mahadev Sthan, Supaul, Bihar - 852130
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-200 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-black mb-4 md:mb-0">
//               © {new Date().getFullYear()} Naya Vayapar. All rights reserved.
//             </p>
//             <div className="flex space-x-6 text-gray-600 text-sm font-medium">
//               {legalLinks.map((link) => (
//                 <a key={link} href="#" className="hover:text-green-600 transition-colors">
//                   {link}
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div className="mt-4 text-center md:text-left text-black font-medium italic text-sm">
//             "Gaon se vyapar, vyapar se vikas — yehi hai NayaVayapar ka raasta."
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Footer() {
  const quickLinks = ["About Us", "Our Products", "For Farmers", "For Buyers", "Contact"];
  const products = ["Premium Makhana (6 Suta)", "Standard Makhana", "Roasted Makhana", "Makhana Chivda"];
  const legalLinks = ["Privacy Policy", "Terms of Service"];
  const socialIcons = [Facebook, Twitter, Instagram, Linkedin];

  return (
    <footer className="relative bg-black/90 text-white py-16 border-t border-green-800 font-light tracking-wide">

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-6 flex flex-col gap-4 z-[999]">
        <a
          href="https://wa.me/918116146987"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </a>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="Naya Vayapar Logo"
                className="h-32 md:h-36 w-auto object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold text-green-500 tracking-widest mb-3">
              Farm to Business
            </h3>

            <p className="leading-relaxed text-sm text-white/90">
              Empowering farmers and enriching lives by bringing authentic,
              high-quality Makhana directly from the ponds of Bihar to the world.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-500 hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-green-500 text-lg tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/90">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-green-500 text-lg tracking-widest">
              Our Products
            </h4>
            <ul className="space-y-3 text-sm text-white/90">
              {products.map((product) => (
                <li key={product}>
                  <a href="#" className="hover:text-green-400 transition-colors duration-300">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-green-500 text-lg tracking-widest">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-white/90">
              <div>
                <span className="text-green-400 font-semibold">Rahul Kumar:</span> 8116146987
              </div>
              <div>
                <span className="text-green-400 font-semibold">Roshan Kumar:</span> 8116393432
              </div>
              <div className="hover:text-green-400 transition-colors cursor-pointer">
                support@nyavyapar.in
              </div>
              <div className="leading-relaxed text-white/80">
                Satnarayan Bhagwan Campus,
                <br />
                Mahadev Sthan, Supaul, Bihar - 852130
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <p>
              © {new Date().getFullYear()} Naya Vayapar. All rights reserved.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-green-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center text-green-500 italic text-sm tracking-widest">
            "Gaon se vyapar, vyapar se vikas — yehi hai NayaVayapar ka raasta."
          </div>
        </div>
      </div>
    </footer>
  );
}
