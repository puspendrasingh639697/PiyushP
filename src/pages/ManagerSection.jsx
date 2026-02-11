import { Briefcase, Phone, MessageSquare, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NyaImage from "../assets/Nya.png"; // Aapka image path

export default function ManagerSection() {
  return (
    <section className="h-screen text-balck overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* LEFT SIDE: Manager Card */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight"
          >
            Meet Your <br />
            <span className="text-green-300 text-3xl md:text-4xl tracking-wide">Area Manager</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            className=" border border-white/20 p-6 md:p-8  shadow-2xl w-full max-w-md relative group"
          >
            {/* Verified Badge */}
            <div className="absolute top-5 right-5 bg-white/20 px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/30">
              <CheckCircle className="h-4 w-4 text-green-300" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Verified</span>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              {/* Icon Circle */}
             

              <h3 className="text-3xl font-bold mb-1 tracking-tight">Rahul Kumar</h3>
              <p className="font-medium mb-6">Area Business Manager</p>

              {/* Number Box */}
              <div className="w-full bg-green-400 rounded-2xl p-4 mb-8 border border-white/10  transition-colors">
                <p className="text-xs  uppercase  mb-1 tracking-widest">Call Directly</p>
                <a href="tel:8116146987" className="text-xl md:text-2xl  text-white">
                  8116146987
                </a>
              </div>

              <p className="text-xl italic  mb-8 font-medium">
                "आपको हर कदम पर साथ मिलेगा"
              </p>

              <div className="flex gap-4 w-full">
  <Link
    to="tel:8116146987"
    className="flex-1 bg-white text-green-800 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-50 transition-all active:scale-95 shadow-xl"
  >
    <Phone className="h-5 w-5" /> Call
  </Link>

  <Link
    to="https://wa.me/918116146987"
    target="_blank"
    className="flex-1 bg-green-600 border border-green-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-500 transition-all active:scale-95 shadow-xl"
  >
    <MessageSquare className="h-5 w-5" /> WhatsApp
  </Link>
</div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative group">
            {/* Decorative background glow */}
            <div className="absolute -inset-4   transition-opacity" />
            
            <img 
              src={NyaImage} 
              alt="NayaVayapar Farm Support" 
              className="relative z-10 w-full max-w-sm md:max-w-md h-auto  object-cover transform transition-transform group-hover:scale-[1.02] duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
