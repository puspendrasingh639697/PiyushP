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
      color: "green",
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
     color: "green",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black/90">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          
         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic mb-4 sm:mb-6 text-green-500">
  Revolutionizing Farm-to-Business{" "}
  <span className="block sm:inline">
    <span className="text-white italic">Commerce</span>
  </span>
</h2>

          <p className=" text-white italic sm:text-lg md:text-xl  max-w-3xl mx-auto leading-relaxed">
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
      whileHover={{ y: -10 }}
      className="w-full cursor-pointer group"
    >
      <div className="relative h-full bg-white p-6 rounded-xl 
        shadow-[0_10px_20px_rgba(0,0,0,0.08)] 
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
        hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-500
        transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">

        {/* ICON */}
        <div
  className="
    w-14 h-14 sm:w-16 sm:h-16 
    flex items-center justify-center 
    text-green-500 
    rounded-xl
    transition-all duration-300
    group-hover:text-white
    group-hover:scale-110
  "
>
  <span className="text-2xl sm:text-3xl transition-all duration-300">
    {item.icon}
  </span>
</div>


        {/* TITLE */}
        <h3 className="mt-4 text-lg sm:text-xl font-semibold tracking-tight 
          text-green-500 group-hover:text-white 
          transition-all duration-300">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-2 text-sm sm:text-base  italic leading-relaxed 
          text-black group-hover:text-white/90 
          transition-all duration-300">
          {item.description}
        </p>

      </div>
    </motion.div>
  ))}
</div>



        
      </div>
    </section>
  )
}