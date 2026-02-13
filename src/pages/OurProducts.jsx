 "use client"

import {
  Package,
  Star,
  Truck,
  Users,
  Gift,
  ShoppingCart,
  Sparkles,
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
      features: [
        "Extra large size",
        "Premium quality",
        "Perfect for gifting",
      ],
      popular: true,
    },
    {
      id: 2,
      name: "Standard Makhana (Loose)",
      description: "Medium-size grains",
      price: "₹450–₹500/kg",
      packaging: ["Bulk supply available"],
      bestFor: "B2B buyers, wholesalers",
      features: [
        "Medium-size grains",
        "Cost-effective",
        "Bulk quantities available",
      ],
      popular: false,
    },
    {
      id: 3,
      name: "Roasted Makhana (Masala Mix)",
      description: "With jeera, pudina, and light salt",
      price: "₹1150/kg",
      packaging: ["Ready to eat packs"],
      bestFor: "Modern retail & startups",
      features: [
        "Ready to eat",
        "Healthy snack option",
        "Flavored with natural spices",
      ],
      popular: false,
    },
    {
      id: 4,
      name: "Makhana Chivda with Dry Fruits",
      description: "Mixed with almonds, raisins & spices",
      price: "₹850/kg",
      packaging: ["Festive packs available"],
      bestFor: "Festive gifting & online sales",
      features: [
        "Premium dry fruits mix",
        "Festive packaging",
        "Gift-ready product",
      ],
      popular: false,
    },
    {
      id: 5,
      name: "Organic Farm Fresh Makhana",
      description: "Naturally grown, chemical-free processing",
      price: "₹900–₹1200/kg",
      packaging: ["500g", "1kg"],
      bestFor: "Health stores & organic brands",
      features: [
        "100% organic",
        "No chemicals",
        "Premium farm sourcing",
      ],
      popular: false,
    },
    {
      id: 6,
      name: "Export Quality Makhana",
      description: "Carefully sorted for international markets",
      price: "₹1400/kg",
      packaging: ["Export bulk packs"],
      bestFor: "International distributors",
      features: [
        "Export grade sorting",
        "Moisture controlled",
        "High-quality packaging",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen w-full mt-16 bg-black/90 text-white">

      <div className="px-6 py-20">

        {/* HERO SECTION */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-white">Our </span>
            <span className="text-green-400 drop-shadow-[0_0_25px_rgba(34,197,94,0.9)]">
              Products
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-6 font-semibold">
            Premium Makhana Varieties We Offer
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-lg">
            NayaVayapar provides high-quality Makhana sourced directly from
            Bihar farms. Carefully sorted, hygienically packed and ready
            for retail & bulk distribution.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.id}
              className="relative p-8 rounded-2xl 
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_0_40px_rgba(0,0,0,0.6)]
              hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]
              transition duration-500 hover:-translate-y-3"
            >

              {product.popular && (
                <div className="absolute top-5 right-5">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs border border-green-400/40 shadow-[0_0_15px_rgba(34,197,94,0.6)] flex items-center gap-1">
                    <Star size={12} /> Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-3 text-white">
                {product.name}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {product.description}
              </p>

              {/* PRICE */}
              <div className="mb-6 p-4 rounded-xl bg-black/40 border border-white/10">
                <div className="text-xs text-gray-400">Average Price</div>
                <div className="text-2xl font-bold text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">
                  {product.price}
                </div>
              </div>

              {/* PACKAGING */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2 text-green-400 font-semibold">
                  <Package size={16} /> Packaging Options
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.packaging.map((p, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full 
                      bg-green-500/10 border border-green-400/30 
                      text-green-300"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* BEST FOR */}
              <div className="mb-4 text-gray-300 text-sm">
                <span className="text-green-400 font-semibold">
                  Perfect For:
                </span>{" "}
                {product.bestFor}
              </div>

              {/* FEATURES */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 text-green-400 font-semibold">
                  <Sparkles size={16} /> Key Features
                </div>
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* BUTTON */}
              <button className="w-full py-3 rounded-xl 
              bg-green-500/20 border border-green-400/40
              text-green-400 font-semibold
              hover:bg-green-500 hover:text-black
              hover:shadow-[0_0_25px_rgba(34,197,94,0.9)]
              transition duration-300 flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                Order in Bulk
              </button>

            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-28 text-center">
        <h3 className="text-4xl font-bold text-white">
  Ready to Scale Your{" "}
  <span className="
    text-green-400 
    drop-shadow-[0_5px_0_#065f46]
    drop-shadow-[0_10px_20px_rgba(34,197,94,0.6)]
    tracking-wide
  ">
    Business
  </span>
  ?
</h3>


          <p className="text-gray-400 mt-4">
            Join hundreds of retailers & distributors who trust NayaVayapar
            for premium quality Makhana supply.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="px-6 py-3 rounded-lg bg-green-500 text-black font-semibold hover:shadow-[0_0_30px_rgba(34,197,94,1)] transition flex items-center gap-2">
              <Truck size={18} />
              Get Price Sheet
            </button>

            <button className="px-6 py-3 rounded-lg border border-green-400 text-green-400 hover:bg-green-500 hover:text-black transition flex items-center gap-2">
              <Gift size={18} />
              Place Bulk Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

