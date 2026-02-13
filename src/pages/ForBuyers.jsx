import { Check, Phone, Mail, CalendarDays, Download, Quote } from "lucide-react";
import first1 from "../assets/Green1.jpg";

import logo from "../assets/logo.png";
import { motion } from "framer-motion";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function BuyersPage() {
  const products = [
    {
      imageSrc: "/placeholder.svg?height=200&width=200",
      imageAlt: "6-Suta Premium Makhana",
      name: "6-Suta Premium Makhana",
      description: "Large Makhana, crisp texture, Sorted manually",
      moq: "50 Kg",
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=200",
      imageAlt: "Standard Makhana",
      name: "Standard Makhana",
      description: "Mid-size, Roasted",
      moq: "100 Kg",
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=200",
      imageAlt: "Masala Makhana",
      name: "Masala Makhana",
      description: "Ready-to-eat healthy snack",
      moq: "200 Packets",
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=200",
      imageAlt: "Dry Fruit Makhana Mix",
      name: "Dry Fruit Makhana Mix",
      description: "Value-added combo",
      moq: "50 Kg",
    },
  ];

  const whatYouGetItems = [
    { title: "Direct-from-farm pricing", description: "No middlemen, ensuring fair prices and maximum value." },
    { title: "Custom packaging options", description: "Flexible solutions for both retail and bulk orders." },
    { title: "Lab-tested quality", description: "Certified by trusted labs for purity and safety." },
    { title: "Location-based sourcing", description: "Authentic Makhana from Mithila, Supaul, Darbhanga." },
    { title: "Logistics support", description: "Efficient PAN-India delivery and export readiness." },
  ];

  const ProductCard = ({ imageSrc, imageAlt, name, description, moq }) => (
    <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-white border border-gray-200 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <div className="relative h-40 w-full mb-4">
        <img src={imageSrc} alt={imageAlt} className="rounded-lg w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <p className="text-green-700 font-medium">MOQ: {moq}</p>
    </div>
  );

  return (
    <main className="w-full  bg-black/90 overflow-x-hidden">
      {/* Header */}
     <section className="relative py-24 md:py-36 text-center w-full overflow-hidden">
  {/* Background Glow Effect */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full  " />
  
  <div className="relative z-10 px-4">
    <h1 className="text-5xl md:text-8xl text-white  font-black leading-tight mb-6 italic uppercase tracking-tighter">
      For <span className="text-green-500">Buyers</span>
    </h1>
    
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="h-[2px] w-12 bg-green-500 md:w-20"></div>
      <p className="text-lg md:text-2xl text-zinc-400 font-bold tracking-widest uppercase">
        Direct Supply Chain
      </p>
      <div className="h-[2px] w-12 bg-green-500 md:w-20"></div>
    </div>

    <p className="text-xl md:text-3xl max-w-4xl mx-auto text-white italic font-medium leading-relaxed">
      "From the <span className="text-green-400">ponds of Bihar</span> to your <span className="text-green-400">godown</span> – seamless, pure, and direct."
    </p>
  </div>
</section>

      {/* Page Content */}
      <div className="w-full px-4 md:px-12 space-y-20 py-12 md:py-20">
        
        {/* Hero Message */}
       <section className="text-center space-y-6 py-10">
  <h1 className="text-3xl md:text-5xl leading-tight px-4 font-serif text-white">
    From the ponds of <span className="text-green-500">Bihar</span> to your godown –
    <br className="hidden md:block" /> with <span className="text-green-500">purity</span>, <span className="text-green-500">consistency</span> & <span className="text-green-500">trust</span>.
  </h1>
  <p className="text-lg md:text-xl max-w-xl mx-auto px-4 font-sans text-white">
    NayaVayapar works with <span className="text-green-500">500+ verified farmers</span> to deliver authentic Makhana at scale, on time, and with full traceability.
  </p>
</section>


        {/* What You Get - Grid Style */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-center text-white">What You <span className="text-green-500">Get</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {whatYouGetItems.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-white border border-gray-200 
                 hover:bg-green-500 hover:shadow-xl hover:scale-[1.02] transition-transform transition-shadow"
    >
      <div className="p-3 rounded-full bg-green-100 text-green-700 mb-4">
        <Check className="h-8 w-8" />
      </div>
      <h3 className="text-xl md:text-2xl font-serif text-gray-800 mb-2">{item.title}</h3>
      <p className="text-gray-600 font-sans">{item.description}</p>
    </div>
  ))}
</div>

        </section>

        {/* NEW Split UI: Who Buys From Us? */}

      <section className="overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    
    {/* Left side: Logo & Image */}
    <div className="relative flex flex-col p-8 md:p-12 pb-0 md:pb-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full" />
      
      <div className="relative z-10 w-full">
        <div className="mb-6">
          <img 
            src={logo} 
            alt="NayaVayapar Logo" 
            className="h-24 md:h-32 w-auto object-contain" 
          />
        </div>

        <div className="mb-6">
          <h3 className="text-3xl font-serif font-bold text-green-500 transform-gpu hover:scale-105 transition-transform">
            Faster, Safer
          </h3>
          <p className="text-gray-200 text-md font-sans max-w-xs mt-2">
            Direct farm sourcing using advanced quality checks.
          </p>
        </div>

        <div className="flex justify-start items-end perspective-1000">
          <img 
            src={first1} 
            alt="Delivery Partner" 
            className="w-64 md:w-80 object-contain drop-shadow-2xl translate-y-2 transform-gpu hover:rotate-3 hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>

    {/* Right side: List Content */}
    <div className="p-8 lg:p-12 flex flex-col justify-start">
      <h2 className="text-4xl font-serif font-bold text-green-500 mb-4 transform-gpu hover:scale-105 transition-transform">
        Who Buys From Us?
      </h2>
      <p className="text-gray-200 mb-8 text-lg leading-relaxed font-sans">
        We bridge the gap between rural farms and global markets with quality sourcing.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
        {[
          "Retailers & Supermarkets",
          "Food Processing Units",
          "Exporters (USA, UK, Japan)",
          "D2C Brands & Startups",
          "Festive Gift Packers",
          "Ayurveda Stores",
        ].map((text, i) => (
          <div 
            key={i} 
            className="flex items-center gap-3 group"
          >
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 
                            group-hover:bg-green-500 transition-colors transform-gpu group-hover:scale-110">
              <Check className="h-5 w-5 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <span className="text-gray-200 font-medium text-md font-sans group-hover:text-green-500 transition-colors">
              {text}
            </span>
            {/* Add a line connecting icon to text */}
            <div className="flex-1 h-px bg-green-100 group-hover:bg-green-500 ml-2"></div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

     


        {/* Product Catalog */}
       <section className="space-y-10">
  <h2 className="text-4xl font-serif font-bold text-center text-green-500 mb-8">
  Product Catalog Highlights
</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {products.map((product, index) => (
      <motion.div
        key={index}
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-md  
                   hover:shadow-xl hover:scale-105 hover:bg-green-500 transition-transform transition-colors duration-300"
      >
        <ProductCard {...product} />
      </motion.div>
    ))}
  </div>
</section>

        {/* NEW Split UI: Let's Work Together */}
       <section className="overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    {/* Left side: Content */}
    <div className="p-8 lg:p-16 flex flex-col justify-center">
      <h2 className="text-4xl text-green-500 font-bold mb-6 font-serif">
       <span className="text-white"> Let's Work</span> Together
      </h2>
      <p className="text-gray-200 text-lg mb-10 font-sans">
        We provide end-to-end B2B support to ensure your supply chain never stops.
      </p>
      
     <div className="space-y-6">
  {[
    { title: "Proforma Invoice", desc: "Instantly generated on request." },
    { title: "Product Samples", desc: "Available for quality testing before bulk." },
    { title: "White-Labelling", desc: "Custom packaging & branding options." },
    { title: "B2B WhatsApp Line", desc: "Direct communication for quick updates." },
  ].map((item, i) => (
    <div key={i} className="flex items-start gap-4 group">
      {/* Icon */}
      <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center 
                      group-hover:bg-green-600 transition-colors transform-gpu group-hover:scale-110">
        <Check className="h-6 w-6 text-white group-hover:text-white transition-colors" />
      </div>

      {/* Text */}
      <div>
        <h4 className="text-xl font-serif text-green-500 group-hover:text-green-600 transition-colors">
          {item.title}
        </h4>
        <p className="text-gray-200 text-sm font-sans">{item.desc}</p>
      </div>
    </div>
  ))}
</div>

    </div>

    {/* Right side: Modern Image Placeholder */}
    <div className="relative min-h-[400px]  flex items-center justify-center p-12">
       <div className="absolute inset-0  opacity-20" />
       <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-white text-center">
          <Quote className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="text-2xl font-medium italic font-serif">
            "Join hands with the roots of Bharat. Source from the soil."
          </p>
       </div>
    </div>
  </div>
</section>


        {/* Bulk Order Helpline */}
        <section className="text-center p-10 space-y-6">

  {/* Heading */}
  <h2 className="text-4xl font-bold text-white">
    Bulk Order <span className="text-green-500">Helpline</span>
  </h2>

  {/* Manager Name */}
  <p className="font-semibold text-green-500 text-xl">
    Roshan Kumar (Senior Sales Manager)
  </p>

  {/* Contact */}
  <div className="flex flex-col md:flex-row gap-8 justify-center items-center">

    <a
      href="tel:8116393432"
      className="flex items-center gap-3 text-white hover:text-green-400 transition duration-300"
    >
      <Phone className="h-6 w-6 text-green-500" />
      <span className="text-lg font-medium">8116393432</span>
    </a>

    <a
      href="mailto:support@nayavayapar.in"
      className="flex items-center gap-3 text-white hover:text-green-400 transition duration-300"
    >
      <Mail className="h-6 w-6 text-green-500" />
      <span className="text-lg font-medium">support@nayavayapar.in</span>
    </a>

  </div>

</section>

        {/* Action Buttons */}

        <section className="flex flex-col sm:flex-row justify-center items-center gap-6 pb-10">

  {/* Request a Quote */}
  <button className="w-full sm:w-auto flex items-center justify-center gap-3 
  bg-green-500 text-white py-4 px-8 rounded-xl 
  shadow-md hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] 
  transition-all duration-300 active:scale-95">
    <Quote className="h-6 w-6" /> Request a Quote
  </button>

  {/* Download Catalog */}
  <button className="w-full sm:w-auto flex items-center justify-center gap-3 
  bg-green-500 text-white py-4 px-8 rounded-xl 
  shadow-md hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] 
  transition-all duration-300 active:scale-95">
    <Download className="h-6 w-6" /> Download Catalog
  </button>

  {/* Schedule a Call */}
  <button className="w-full sm:w-auto flex items-center justify-center gap-3 
  bg-green-500 text-white py-4 px-8 rounded-xl 
  shadow-md hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] 
  transition-all duration-300 active:scale-95">
    <CalendarDays className="h-6 w-6" /> Schedule a Call
  </button>

</section>
      

      </div>
    </main>
  );
}




