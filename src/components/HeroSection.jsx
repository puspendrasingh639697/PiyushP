import first1 from "../assets/first1.jpg"; 
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  Users,
  Globe,
  Award,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="Home"
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden w-full"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="w-full px-5 sm:px-6 lg:px-8 relative"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            className="space-y-8 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block bg-green-100 text-green-800 border border-green-200 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                  🌱 Connecting Farms & Businesses
                </span>
              </motion.div>

              <motion.h1
                className="mt-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Fresh Produce,
                <br />
                <span className="text-green-600">Direct Connection</span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Bridge the gap between farms and businesses with our innovative platform. Get fresh,
                quality produce directly from verified farmers.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button className="bg-green-600 hover:bg-green-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold flex items-center justify-center group">
                Start Partnership
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="border-2 border-green-300 text-green-700 hover:bg-green-50 rounded-lg px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold bg-transparent flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[ 
                { number: "500+", label: "Farmers", icon: <Users className="w-5 h-5" /> },
                { number: "200+", label: "Businesses", icon: <Globe className="w-5 h-5" /> },
                { number: "99%", label: "Satisfaction", icon: <Award className="w-5 h-5" /> },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-1 text-green-600">
                    {stat.icon}
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={first1}
                  alt="Fresh farm produce and beautiful farmland"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Card Top */}
              <motion.div
                className="absolute top-4 left-4 bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-gray-100 z-10 hidden sm:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">Quality Assured</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">100% Verified</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card Bottom */}
              <motion.div
                className="absolute bottom-4 right-4 bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-gray-100 z-10 hidden sm:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">30% Savings</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Direct Trade</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}