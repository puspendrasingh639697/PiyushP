"use client";

import { motion } from "framer-motion";
import { Gift, Box, CircleDollarSign, ShoppingBag, CheckCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function ProductsSection() {
  const products = [
    {
      category: "Premium Makhana (6 Suta)",
      icon: <Gift className="w-8 h-8" />,
      description: "Extra large size, great for roasting & gifting",
      details: [
        "Avg Price: ₹750–₹1350/kg",
        "Packaging: 250g | 500g | 1kg",
        "Best for: Retailers, Ayurvedic stores"
      ],
      color: "purple",
      image: "/images/premium-makhana.jpg",
    },
    {
      category: "Standard Makhana (Loose)",
      icon: <Box className="w-8 h-8" />,
      description: "Medium-size grains for bulk purchases",
      details: [
        "Avg Price: ₹450–₹500/kg",
        "Bulk supply available",
        "Best for: B2B buyers, wholesalers"
      ],
      color: "blue",
      image: "/images/standard-makhana.jpg",
    },
    {
      category: "Roasted Makhana",
      icon: <CircleDollarSign className="w-8 h-8" />,
      description: "With jeera, pudina, and light salt",
      details: [
        "Avg Price: ₹1150/kg",
        "Ready to eat, healthy snack",
        "Best for: Modern retail & startups"
      ],
      color: "orange",
      image: "/images/roasted-makhana.jpg",
    },
    {
      category: "Makhana Chivda",
      icon: <ShoppingBag className="w-8 h-8" />,
      description: "Mixed with almonds, raisins & spices",
      details: [
        "Avg Price: ₹850/kg",
        "Festive packs & gifting options",
        "Best for: Online sales & gift shops"
      ],
      color: "green",
      image: "/images/makhana-chivda.jpg",
    },
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="inline-block bg-orange-100 text-orange-800 mb-4 px-4 py-2 rounded-full text-sm font-semibold">
            Our Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Handpicked. Hygienic. Honest.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            NayaVayapar offers carefully sorted, quality-tested Makhana — straight from Bihar's ponds to your shelves
          </p>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden rounded-xl"
            >
              {/* Product Image and Icon */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.category}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-${product.color}-600 bg-${product.color}-100`}
                  >
                    {product.icon}
                  </div>
                </div>
              </div>

              {/* Title & Items */}
              <div className="p-5">
                <h3 className="text-xl text-gray-900 font-semibold mb-2">{product.category}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.details.map((detail, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}