import first1 from "../assets/Green1.jpg";
import greenImg from "../assets/Green.jpg";
import thirdImg from "../assets/Green2.jpg";
import four from "../assets/Green3.jpg";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Shield, TrendingUp } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const images = [first1, greenImg, thirdImg,four];

export default function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const [current, setCurrent] = useState(0);

  // Auto slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500); // Thoda slow rakha hai background ke liye
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Home"
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden w-full bg-black"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }} // Opacity 0.6 taaki text readable rahe
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={images[current]}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-1" />
      </div>

      

      {/* Main Content Layer */}
      <motion.div
        className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10"
        style={{ y: heroY }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            className="space-y-8 max-w-2xl text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-6">
             <span className="inline-block bg-green-600/20 backdrop-blur-md text-green-400 border border-green-500/30 px-4 py-2 text-sm font-semibold mt-8">
  Connecting Farms & Businesses
</span>


              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Fresh Produce, <br />
                <span className="text-green-500">Direct Connection</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-lg">
                Bridge the gap between farms and businesses with our innovative platform. 
                Get quality produce directly from verified farmers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center group transition-all">
                Start Partnership
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center transition-all">
                <Play className="mr-2 w-5 h-5 fill-current" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right: Floating Stats Cards */}
         {/* Right: Single Image with Overlay Cards */}
<motion.div 
  className="relative h-[400px] w-full hidden lg:flex items-center justify-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
>
  {/* Main Right Image */}
  <img 
    src={first1} 
    alt="Farm" 
    className="rounded-3xl object-cover h-full w-full shadow-2xl"
  />

  {/* Overlay Cards */}
  <div className="absolute inset-0 flex flex-col justify-between p-6">
    {/* Card 1 */}
    <motion.div
      className="bg-green-400 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl w-64"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50">
          <Shield className="text-white" />
        </div>
        <div>
          <div className="font-bold  text-md">Quality Assured</div>
          <div className="text-sm">100% Verified Source</div>
        </div>
      </div>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      className="bg-green-600 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl w-64 self-end"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-green-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
          <TrendingUp className="text-white" />
        </div>
        <div>
          <div className="font-bold  text-md">30% Savings</div>
          <div className="text-sm">Direct Trade Price</div>
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>

        </div>
      </motion.div>

      {/* Slider Indicators (Bottom) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === i ? "w-10 bg-green-500" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}