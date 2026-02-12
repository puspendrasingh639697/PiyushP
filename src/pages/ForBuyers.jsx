import { Check, Phone, Mail, CalendarDays, Download, Quote } from "lucide-react";
import first1 from "../assets/Green1.jpg";

import logo from "../assets/logo.png";

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
    <main className="w-full bg-gradient-to-br from-amber-50 to-white overflow-x-hidden">
      {/* Header */}
      <section className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-br from-green-400 to-green-400 text-white text-center w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">For Buyers</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          From the ponds of Bihar to your godown - a direct supply chain.
        </p>
      </section>

      {/* Page Content */}
      <div className="w-full px-4 md:px-12 space-y-20 py-12 md:py-20">
        
        {/* Hero Message */}
        <section className="text-center space-y-6 py-10">
          <h1 className="text-3xl md:text-5xl  text-black leading-tight px-4">
            From the ponds of Bihar to your godown –
            <br className="hidden md:block" /> with purity, consistency & trust.
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto  px-4">
            NayaVayapar works with 500+ verified farmers to deliver authentic Makhana at scale, on time, and with full traceability.
          </p>
        </section>

        {/* What You Get - Grid Style */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-center text-gray-800">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatYouGetItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-white border border-gray-200 hover:scale-[1.02] transition-transform"
              >
                <div className="p-3 rounded-full bg-green-100 text-green-700 mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEW Split UI: Who Buys From Us? */}
       <section className="bg-white overflow-hidden shadow-2xl border border-gray-100">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    
    {/* Left side: Logo & Image (Tight Fit) */}
    <div className="relative bg-slate-50 flex flex-col p-8 md:p-12 pb-0 md:pb-0 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50 to-transparent opacity-50" />
      
      <div className="relative z-10 w-full">
        {/* Logo */}
        <div className="mb-6">
          <img 
            src={logo} 
            alt="NayaVayapar Logo" 
            className="h-24 md:h-32 w-auto object-contain" 
          />
        </div>

        {/* Text Content */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-green-600">Faster, Safer</h3>
          <p className="text-gray-500 text-md max-w-xs mt-2">
            Direct farm sourcing using advanced quality checks.
          </p>
        </div>

        {/* Delivery Image - Attached to bottom, no gap */}
        <div className="flex justify-start items-end">
          <img 
            src={first1} 
            alt="Delivery Partner" 
            className="w-64 md:w-80 object-contain drop-shadow-2xl translate-y-2"
          />
        </div>
      </div>
    </div>

    {/* Right side: List Content (Fixed to Top) */}
    <div className="p-8 lg:p-12 flex flex-col justify-start bg-white">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Who Buys From Us?</h2>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
          <div key={i} className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
              <Check className="h-5 w-5 text-green-600 group-hover:text-white" />
            </div>
            <span className="text-gray-700 font-medium text-md">{text}</span>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

        {/* Product Catalog */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-center text-gray-800">Product Catalog Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>

        {/* NEW Split UI: Let's Work Together */}
        <section className="bg-blue-50  overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side: Content */}
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl   text-green-500 font-bold mb-6">Let's Work Together</h2>
              <p className="text-lg mb-10">We provide end-to-end B2B support to ensure your supply chain never stops.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Proforma Invoice", desc: "Instantly generated on request." },
                  { title: "Product Samples", desc: "Available for quality testing before bulk." },
                  { title: "White-Labelling", desc: "Custom packaging & branding options." },
                  { title: "B2B WhatsApp Line", desc: "Direct communication for quick updates." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center">
  <Check className="h-6 w-6 text-white" />
</div>

                    <div>
                      <h4 className="text-xl">{item.title}</h4>
                      <p className="text-black text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Modern Image Placeholder */}
            <div className="relative min-h-[400px] bg-blue-50 flex items-center justify-center p-12">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
               <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-white text-center">
                  <Quote className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-2xl font-medium italic">"Join hands with the roots of Bharat. Source from the soil."</p>
               </div>
            </div>
          </div>
        </section>

        {/* Bulk Order Helpline */}
        <section className="text-center  p-10  space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Bulk Order Helpline</h2>
          <p className="font-semibold text-gray-700 text-xl">Roshan Kumar (Senior Sales Manager)</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a href="tel:8116393432" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors">
              <Phone className="h-6 w-6 text-green-600" />
              <span className="text-lg font-medium">8116393432</span>
            </a>
            <a href="mailto:support@nayavayapar.in" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors">
              <Mail className="h-6 w-6 text-green-600" />
              <span className="text-lg font-medium">support@nayavayapar.in</span>
            </a>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="flex flex-col sm:flex-row justify-center items-center gap-6 pb-10">
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white py-4 px-8 rounded-xl shadow-lg transition-all active:scale-95">
            <Quote className="h-6 w-6" /> Request a Quote
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-green-700 border-2 border-green-700 py-4 px-8 rounded-xl shadow-lg transition-all active:scale-95">
            <Download className="h-6 w-6" /> Download Catalog
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-500 hover:bg-amber-600 text-white py-4 px-8 rounded-xl shadow-lg transition-all active:scale-95">
            <CalendarDays className="h-6 w-6" /> Schedule a Call
          </button>
        </section>

      </div>
    </main>
  );
}