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
    <section className="py-24 bg-green-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600" />
      <div className="container mx-auto px-6 text-center relative">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of businesses that trust us for their fresh produce needs. Start your partnership today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-green-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg px-8 py-4 text-lg font-semibold flex items-center justify-center group"
            >
              Start Partnership
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-lg px-8 py-4 text-lg font-semibold flex items-center justify-center bg-transparent transition-all"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
