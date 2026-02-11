// import { motion } from "framer-motion";
// import {  Send,} from "lucide-react";
// import { useEffect, useState } from "react";

// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
// };


// export default function ContactSection() {
 

//   const enquiryTypes = ["Buyer", "Farmer", "Partnership", "Other"];

  

//   // 🔥 Typing Logic (Real)
//   const text = "Get In Touch";
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [showCursor, setShowCursor] = useState(true);

//   useEffect(() => {
//     let typingSpeed = isDeleting ? 60 : 120;

//     const typingInterval = setInterval(() => {
//       setDisplayText((prev) => {
//         if (!isDeleting) {
//           if (prev.length < text.length) {
//             return text.slice(0, prev.length + 1);
//           } else {
//             setTimeout(() => setIsDeleting(true), 1000);
//             return prev;
//           }
//         } else {
//           if (prev.length > 0) {
//             return text.slice(0, prev.length - 1);
//           } else {
//             setIsDeleting(false);
//             return "";
//           }
//         }
//       });
//     }, typingSpeed);

//     const cursorInterval = setInterval(() => {
//       setShowCursor((prev) => !prev);
//     }, 500);

//     return () => {
//       clearInterval(typingInterval);
//       clearInterval(cursorInterval);
//     };
//   }, [isDeleting]);

//   return (
//     <section id="Contact-Us" className="py-24 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <motion.div
//           className="text-center mb-16"
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           <span className="inline-block bg-green-100 text-green-800 mb-4 px-4 py-2 rounded-full font-semibold text-sm">
//             Contact Us
//           </span>

//           {/* ✅ REAL Typing Effect */}
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
//             {displayText}
//             <span className="ml-1">{showCursor ? "|" : " "}</span>
//           </h2>

//           <p className="text-xl  max-w-3xl mx-auto leading-relaxed">
//             Ready to start your journey? Contact our team today
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Contact Form */}
//           <motion.div
//             variants={fadeInUp}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             <div className="p-8 border-0 shadow-lg bg-white rounded-xl">
//               <div className="mb-6">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
//                 <p className="">
//                   Fill out the form and we'll get back to you within 24 hours
//                 </p>
//               </div>
//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="text-sm font-medium  mb-2 block">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Your Name"
//                       className="w-full border  px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="text-sm font-medium  mb-2 block">
//                       Email/Phone
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Email or Phone Number"
//                       className="w-full border  px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium  mb-2 block">Type of Enquiry</label>
//                   <select
//                     className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//                     required
//                   >
//                     <option value="">Select an option</option>
//                     {enquiryTypes.map((type, index) => (
//                       <option key={index} value={type.toLowerCase()}>{type}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium  mb-2 block">Message</label>
//                   <textarea
//                     rows={4}
//                     placeholder="Write your message here..."
//                     className="w-full border border-gray-300  px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 text-lg font-semibold flex justify-center items-center group transition-all"
//                 >
//                   Submit
//                   <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </form>
//             </div>
//           </motion.div>

//           {/* Contact Info & Hours */}
//           <motion.div
//             className="space-y-8"
//             variants={fadeInUp}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <div>
              
           
//             </div>

            

//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import contactAnimation from "../assets/Contact.json";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

export default function ContactSection() {
  const enquiryTypes = ["Buyer", "Farmer", "Partnership", "Other"];

  // 🔥 Typing Logic (Real)
  const text = "Get In Touch";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let typingSpeed = isDeleting ? 60 : 120;

    const typingInterval = setInterval(() => {
      setDisplayText((prev) => {
        if (!isDeleting) {
          if (prev.length < text.length) {
            return text.slice(0, prev.length + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1000);
            return prev;
          }
        } else {
          if (prev.length > 0) {
            return text.slice(0, prev.length - 1);
          } else {
            setIsDeleting(false);
            return "";
          }
        }
      });
    }, typingSpeed);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [isDeleting]);

  return (
    <section id="Contact-Us" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="inline-block bg-green-100 text-green-800 mb-4 px-4 py-2 rounded-full font-semibold text-sm">
            Contact Us
          </span>

          {/* ✅ REAL Typing Effect */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            {displayText}
            <span className="ml-1">{showCursor ? "|" : " "}</span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey? Contact our team today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="p-8 border-0 shadow-lg bg-white">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
                <p>
                  Fill out the form and we'll get back to you within 24 hours
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email/Phone
                    </label>
                    <input
                      type="text"
                      placeholder="Email or Phone Number"
                      className="w-full border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Type of Enquiry</label>
                  <select
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Select an option</option>
                    {enquiryTypes.map((type, index) => (
                      <option key={index} value={type.toLowerCase()}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 text-lg font-semibold flex justify-center items-center group transition-all"
                >
                  Submit
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* ✅ Right Side Lottie Animation */}
          <motion.div
            className="flex justify-center items-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-full max-w-md">
              <Lottie
                animationData={contactAnimation}
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

