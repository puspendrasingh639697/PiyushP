"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
}

export default function CTASection() {
  return (
  <section className="relative overflow-hidden py-24 bg-black/90 text-white">
  {/* Background overlay for subtle effect */}
  <div className="absolute inset-0  opacity-30" />

  <div className="container mx-auto px-6 text-center relative z-10">
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl lg:text-5xl font-bold italic mb-6">
  Ready to{" "}
  
  <span className="relative inline-block text-green-500">
    <span className="absolute inset-0 translate-x-1 translate-y-1 text-green-500 opacity-40">
      Transform
    </span>
    Transform
  </span>{" "}
  
  Your{" "}
  
  <span className="relative inline-block text-green-500">
    <span className="absolute inset-0 translate-x-1 translate-y-1 text-green-500 opacity-40">
      Business
    </span>
    Business
  </span>
</h2>


      <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
        Join hundreds of businesses that trust us for their fresh produce needs. Start your partnership today.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
  
  <button className="bg-green-500 text-white
  px-6 py-4 text-lg font-semibold 
  flex items-center justify-center 
  
  shadow-md
  hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]
  transition-all duration-300 group">

    Start Partnership
    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
  </button>

  <button className="border-2 border-white/30 text-white 
  px-6 py-4 text-lg font-semibold 
  flex items-center justify-center 
  
  bg-transparent
  shadow-md
  hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]
  transition-all duration-300">

    <Calendar className="mr-2 w-5 h-5" />
    Schedule Call
  </button>

</div>

    </motion.div>
  </div>
</section>

  )
}
