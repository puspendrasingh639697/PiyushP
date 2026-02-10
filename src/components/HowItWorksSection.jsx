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
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "bg-blue-500",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    border: "bg-purple-500",
  },
};

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Register Your Business",
      description:
        "Create your profile and tell us about your produce requirements and preferences.",
      icon: <Users className="w-8 h-8" />,
      color: "green",
    },
    {
      step: "02",
      title: "Browse & Connect",
      description:
        "Explore verified farmers, review their products, and establish partnerships.",
      icon: <Leaf className="w-8 h-8" />,
      color: "blue",
    },
    {
      step: "03",
      title: "Receive Fresh Produce",
      description:
        "Get regular deliveries of quality-assured produce with full traceability.",
      icon: <Truck className="w-8 h-8" />,
      color: "purple",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="inline-block bg-blue-100 text-blue-800 mb-4 px-4 py-2 rounded-full text-sm font-semibold">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Simple 3-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with fresh produce delivery in just three easy steps
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-green-300 to-blue-300 transform -translate-y-1/2" />
          <div className="hidden lg:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2" />

          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden rounded-xl">
                {/* Top Border */}
                <div className={`absolute top-0 left-0 w-full h-1 ${colorMap[item.color].border}`} />

                <div className="p-6 text-center relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colorMap[item.color].bg} rounded-xl flex items-center justify-center ${colorMap[item.color].text} mx-auto mb-4`}>
                    {item.icon}
                  </div>

                  {/* Step badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>

                  {/* Description */}
                  <p className="mt-3 text-base text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
