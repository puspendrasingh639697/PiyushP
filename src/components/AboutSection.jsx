import { motion } from "framer-motion"
import { Target, Shield, Heart } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
}

export default function AboutSection() {
  const features = [
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Direct Connection",
      description: "Connect directly with verified farmers and eliminate middlemen for better prices.",
      color: "blue",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Quality Assurance",
      description: "Every product is quality-checked and comes with our freshness guarantee.",
      color: "green",
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Fair Partnership",
      description: "Building sustainable relationships that benefit both farmers and businesses.",
      color: "purple",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="inline-block bg-green-100 text-green-800 mb-3 sm:mb-4 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Revolutionizing Farm-to-Business{" "}
            <span className="block sm:inline">
              <span className="text-green-600">Commerce</span>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We connect farmers directly with businesses, ensuring fresh produce, fair prices, and sustainable partnerships.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="w-full"
            >
              <div className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-lg sm:rounded-xl p-5 sm:p-6">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-${item.color}-100 rounded-lg sm:rounded-xl flex items-center justify-center text-${item.color}-600 mb-3 sm:mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}