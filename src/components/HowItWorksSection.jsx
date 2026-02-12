import { motion } from "framer-motion";
import { Users, Leaf, Truck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const colorMap = {
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    border: "bg-green-500",
  },
  blue: {
    bg: "bg-green-100",
    text: "text-green-600",
    border: "bg-green-500",
  },
  purple: {
     bg: "bg-green-100",
    text: "text-green-600",
    border: "bg-green-500",
  },
};

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Register Your Business",
      description:
        "Create your profile and tell us about your produce requirements and preferences.",
      icon: <Users className="w-16 h-14" />,
      color: "green",
    },
    {
      step: "02",
      title: "Browse & Connect",
      description:
        "Explore verified farmers, review their products, and establish partnerships.",
      icon: <Leaf className="w-16 h-14" />,
      color: "blue",
    },
    {
      step: "03",
      title: "Receive Fresh Produce",
      description:
        "Get regular deliveries of quality-assured produce with full traceability.",
      icon: <Truck className="w-14 h-12" />,
      color: "purple",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-black/90 text-white">
  <div className="container mx-auto px-6">
    
    <motion.div
      className="text-center mb-16"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <span className="inline-block bg-green-600 text-white mb-4 px-4 py-2 text-sm">
        How It Works
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-green-500 tracking-tight">
        Simple 3-Step Process
      </h2>

      <p className="text-xl max-w-3xl mx-auto leading-relaxed italic text-gray-300">
        Get started with fresh produce delivery in just three easy steps
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-3 gap-8">

      {steps.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -10 }}
          className="group"
        >
          <div className="relative h-full p-8 rounded-xl 
            bg-white backdrop-blur-lg 
            border border-white/10
            shadow-[0_10px_25px_rgba(0,0,0,0.4)]
            hover:shadow-[0_20px_40px_rgba(0,255,150,0.25)]
            hover:bg-gradient-to-br hover:from-green-600 hover:to-emerald-600
            transition-all duration-500">

            {/* Step Badge */}
            <div className="absolute -top-4 -right-4 w-12 h-12 
              bg-green-500 text-white text-black font-bold 
              rounded-full flex items-center justify-center 
              shadow-lg">
              {item.step}
            </div>

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 
              flex items-center justify-center 
              text-green-500
              transition-all duration-300
              group-hover:text-white
              group-hover:scale-110">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-green-500 
              group-hover:text-white tracking-tight">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-black italic 
              group-hover:text-white/90 leading-relaxed">
              {item.description}
            </p>

          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>

  );
}
