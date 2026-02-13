import { Phone, MessageSquare, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NyaImage from "../assets/Nya.png";

export default function ManagerSection() {
  return (
    <section className="text-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* CENTER HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Meet Your{" "}
            <span className="text-green-500 italic">Area Manager</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - CARD */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black rounded-xl p-10 shadow-2xl relative"
          >

            {/* Verified */}
            <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-semibold shadow-md">
              <CheckCircle className="h-4 w-4" />
              Verified
            </div>

            <h3 className="text-3xl font-bold tracking-tight mb-1">
              Rahul Kumar
            </h3>

            <p className="text-green-600 font-medium mb-8">
              Area Business Manager
            </p>

            {/* Call Box */}
            <div className="bg-green-500 text-white rounded-xl p-2 mb-4 shadow-lg">
              <p className="text-xs uppercase tracking-widest mb-1 opacity-80">
                Call Directly
              </p>

              <Link
                to="tel:8116146987"
                className="text-2xl font-bold"
              >
                8116146987
              </Link>
            </div>

            <p className="italic text-gray-600 mb-8 text-lg">
              "आपको हर कदम पर साथ मिलेगा"
            </p>

            {/* Buttons */}
            <div className="flex gap-4">

              <Link
                to="tel:8116146987"
                className="flex-1 bg-green-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-800 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                Call
              </Link>

              <Link
                to="https://wa.me/918116146987"
                target="_blank"
                className="flex-1 bg-green-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-500 transition-all duration-300"
              >
                <MessageSquare className="h-5 w-5" />
                WhatsApp
              </Link>

            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-green-500/10 blur-3xl rounded-full"></div>

              <img
                src={NyaImage}
                alt="Manager"
                className="relative z-10 w-full max-w-md lg:max-w-lg object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

