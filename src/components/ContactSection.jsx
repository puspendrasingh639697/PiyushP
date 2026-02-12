import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  PenLine,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import contactAnimation from "../assets/Contact.json";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

export default function ContactSection() {
  const enquiryTypes = ["Buyer", "Farmer", "Partnership", "Other"];

  const text = "Get In Touch";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const [selectedEnquiry, setSelectedEnquiry] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Typing Effect
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

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="Contact-Us" className="py-24 bg-black/90">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="inline-block bg-green-500 text-white mb-4 px-8 py-2 font-semibold text-sm">
            Contact Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-green-500">
            {displayText}
            <span className="ml-1">{showCursor ? "|" : " "}</span>
          </h2>

          <h2 className="text-3xl lg:text-4xl font-semibold italic tracking-wide text-white">
            Ready to start your journey?{" "}
            <span className="text-green-500 font-bold">
              Contact our team today
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* FORM */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="p-8 shadow-xl bg-white ">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-green-600 mb-2">
                  Send us a message
                </h3>
                <p className="text-black italic">
                  Fill out the form and we'll get back to you within 24 hours
                </p>
              </div>

              <form className="space-y-6">

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-4">

                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Name <span className="text-green-500">*</span>
                    </label>

                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-green-500" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border rounded-lg pl-10 pr-4 py-3 
                        focus:outline-none focus:ring-2 focus:ring-green-500 
                        hover:border-green-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Name/Email<span className="text-green-500">*</span>
                    </label>

                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-green-500" />
                      <input
                        type="text"
                        placeholder="Email or Phone Number"
                        className="w-full border rounded-lg pl-10 pr-4 py-3 
                        focus:outline-none focus:ring-2 focus:ring-green-500 
                        hover:border-green-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* CUSTOM DROPDOWN */}
                <div ref={dropdownRef}>
                  <label className="text-sm font-semibold mb-2 block">
                    Type of Enquiry <span className="text-green-500">*</span>
                  </label>


                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-green-500 pointer-events-none" />

                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full border border-gray-300 rounded-lg 
                      pl-10 pr-10 py-3 bg-white cursor-pointer
                      hover:border-green-500 transition-all
                      flex items-center justify-between"
                    >
                      <span className={selectedEnquiry ? "text-gray-800" : "text-gray-400"}>
                        {selectedEnquiry || "Select an option"}
                      </span>

                      <ChevronDown
                        className={`w-5 h-5 text-green-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </div>

                    {isOpen && (
                      <div className="absolute z-50 mt-2 w-full bg-white border rounded-lg shadow-lg overflow-hidden">
                        {enquiryTypes.map((type, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSelectedEnquiry(type);
                              setIsOpen(false);
                            }}
                            className={`px-4 py-3 cursor-pointer transition-all
                            ${selectedEnquiry === type
                                ? "bg-green-200 text-green-900 font-semibold"
                                : "hover:bg-green-100"
                              }`}
                          >
                            {type}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-semibold mb-2 block">
                    Message <span className="text-green-500">*</span>
                  </label>

                  <div className="relative">
                    <PenLine className="absolute left-3 top-4 w-5 h-5 text-green-500" />
                    <textarea
                      rows={4}
                      placeholder="Write your message here..."
                      className="w-full border rounded-lg pl-10 pr-4 py-3 
                      focus:outline-none focus:ring-2 focus:ring-green-500 
                      hover:border-green-500 resize-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 
                  text-white rounded-lg py-3 text-lg font-semibold 
                  flex justify-center items-center gap-2
                  shadow-md hover:shadow-[0_8px_25px_rgba(34,197,94,0.6)]
                  transition-all duration-300"
                >
                  Submit
                  <Send className="w-5 h-5" />
                </button>

              </form>
            </div>
          </motion.div>

          {/* LOTTIE */}
          <motion.div
            className="flex justify-center items-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md">
              <Lottie animationData={contactAnimation} loop autoplay />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
