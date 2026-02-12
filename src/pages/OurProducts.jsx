"use client"

import {
  Package,
  Star,
  Truck,
  Users,
  Gift,
  ShoppingCart,
  Sparkles,
  Award,
  Leaf,
  Heart,
} from "lucide-react";

export default function OurProducts() {
  const products = [
    {
      id: 1,
      name: "Premium Makhana (6 Suta)",
      description: "Extra large size, great for roasting & gifting",
      price: "₹750–₹1350/kg",
      packaging: ["250g", "500g", "1kg"],
      bestFor: "Retailers, Ayurvedic stores",
      icon: "💎",
      gradient: "from-green-400 to-green-500",
      bgGradient: "from-green-400 to-green-100",
      features: ["Extra large size", "Premium quality", "Perfect for gifting"],
      popular: true,
    },
    {
      id: 2,
      name: "Standard Makhana (Loose)",
      description: "Medium-size grains",
      price: "₹450–₹500/kg",
      packaging: ["Bulk supply available"],
      bestFor: "B2B buyers, wholesalers",
      icon: "📏",
      gradient: "from-green-400 to-green-500",
      bgGradient: "from-green-400 to-green-100",
      features: ["Medium-size grains", "Cost-effective", "Bulk quantities"],
      popular: false,
    },
    {
      id: 3,
      name: "Roasted Makhana (Masala Mix)",
      description: "With jeera, pudina, and light salt",
      price: "₹1150/kg",
      packaging: ["Ready to eat"],
      bestFor: "Modern retail & startups",
      icon: "🌶️",
      gradient: "from-green-400 to-green-500",
      bgGradient: "from-green-400 to-green-100",
      features: ["Ready to eat", "Healthy snack", "Flavored with spices"],
      popular: false,
    },
    {
      id: 4,
      name: "Makhana Chivda with Dry Fruits",
      description: "Mixed with almonds, raisins & spices",
      price: "₹850/kg",
      packaging: ["Festive packs available"],
      bestFor: "Festive packs, gifting, online sales",
      icon: "🥜",
      gradient: "from-green-400 to-green-500",
      bgGradient: "from-green-400 to-green-100",
    
      features: ["Premium dry fruits", "Festive packaging", "Gift-ready"],
      popular: false,
    },

    {
      id: 5,
      name: "Makhana Chivda with Dry Fruits",
      description: "Mixed with almonds, raisins & spices",
      price: "₹850/kg",
      packaging: ["Festive packs available"],
      bestFor: "Festive packs, gifting, online sales",
      icon: "🥜",
      gradient: "from-green-400 to-green-500",
      bgGradient: "from-green-400 to-green-100",
    
      features: ["Premium dry fruits", "Festive packaging", "Gift-ready"],
      popular: false,
    },
    {
      id: 6,
      name: "Makhana Chivda with Dry Fruits",
      description: "Mixed with almonds, raisins & spices",
      price: "₹850/kg",
      packaging: ["Festive packs available"],
      bestFor: "Festive packs, gifting, online sales",
      icon: "🥜",
      gradient: "from-green-400 to-green-500",
      bgGradient: "from-green-400 to-green-100",
    
      features: ["Premium dry fruits", "Festive packaging", "Gift-ready"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden  mt-16 relative">
      {/* Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
         

<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
  <span className="text-black">Our </span>
  <span className="text-green-600">Products</span>
</h1>


          <h2 className="text-2xl sm:text-3xl font-bold  mb-4">
            Makhana Varieties We Offer
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 text-lg sm:text-2xl font-semibold  mb-6">
            
            <span>Handpicked. Hygienic. Honest.</span>
            
          </div>

          <p className="text-base sm:text-lg md:text-xl  max-w-3xl mx-auto font-medium leading-relaxed">
            NayaVayapar offers carefully sorted, quality-tested Makhana — straight from Bihar's pristine ponds to your premium shelves.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative p-6 bg-gradient-to-br ${product.bgGradient} rounded-xl shadow-lg hover:shadow-2xl transition-all`}
            >
              {product.popular && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center bg-gradient-to-r from-green-500 to-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                
                <div>
                  <h3 className="text-xl sm:text-2xl">{product.name}</h3>
                  <p className="text-sm sm:text-base">{product.description}</p>
                </div>
              </div>

              <div className="mb-4 space-y-4">
                {/* Price */}
                <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    ₹
                  </div>
                  <div>
                    <div className="text-sm">Average Price</div>
                    <div className="text-lg sm:text-xl font-bold text-green-600">{product.price}</div>
                  </div>
                </div>

                {/* Packaging */}
                <div>
                  <div className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                    <Package className="w-5 h-5" />
                    Packaging Options
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.packaging.map((p, i) => (
                      <span key={i} className="bg-white/90 px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best For */}
                <div className="flex flex-wrap items-center gap-2 font-semibold text-gray-700">
                  <Users className="w-5 h-5" />
                  Perfect For: <span className="ml-1 font-medium">{product.bestFor}</span>
                </div>

                {/* Features */}
                <div>
                  <div className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                    <Sparkles className="w-5 h-5" />
                    Key Features
                  </div>
                  <ul className="grid gap-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`} />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <img
                  src="/placeholder.svg"
                  alt={product.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl shadow group-hover:scale-105 transition-transform"
                />

                {/* Order Button */}
                <button
                  className={`mt-4 w-full h-11 sm:h-12 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order in Bulk
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center space-y-6 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
  Ready to Transform Your Business
</h3>
          <p className="text-sm sm:text-base md:text-lg  leading-relaxed">
            Join hundreds of retailers & wholesalers who trust NayaVayapar for premium Makhana supply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-lg font-semibold hover:scale-105 transition">
              <Star className="w-5 h-5 mr-2 inline" />
              Get Instant Price Sheet
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-lg font-semibold hover:scale-105 transition">
              <Truck className="w-5 h-5 mr-2 inline" />
              Place Bulk Order Now
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-green-700 to-emerald-600 to-indigo-600 text-white rounded-lg font-semibold hover:scale-105 transition">
              <Gift className="w-5 h-5 mr-2 inline" />
              Custom Packaging
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


