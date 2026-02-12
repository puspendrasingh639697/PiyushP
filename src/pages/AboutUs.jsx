import React from "react";
import { Users, Play, Heart, Target, Eye, Lightbulb, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import farmerImg from "../assets/farmar1.png";


// --- 1. Sub-Components (Andar ke chhote hisse) ---

const ValueCard = ({ icon, title, text }) => (
  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border-l-4 border-orange-500 hover:shadow-md transition-all">
    <div className="mb-2 font-semibold text-orange-700 bg-orange-50 border border-orange-200 inline-block px-3 py-1 rounded-lg text-sm">
      {icon} {title}
    </div>
    <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{text}</p>
  </div>
);

const CTAButton = ({ to, icon: Icon, label, emoji }) => (
  <Link to={to} className="w-full sm:w-auto">
    <button className="w-full bg-white text-green-700 hover:bg-green-50 font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base transition-all active:scale-95 shadow-md">
      <Icon className="h-5 w-5" /> <span>{emoji} {label}</span>
    </button>
  </Link>
);

// --- 2. Main Page Component ---

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 pt-28 md:pt-32">

      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 text-center mb-16">

        <h1 className="text-4xl md:text-6xl font-black  tracking-tight mb-4">
          About <span className="text-green-600">Us</span>
        </h1>
        <p className="text-lg md:text-xl font-medium">Bihar ki mitti, modern tech, aur kishano ka vishwas.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Our Story Section */}
      <section className="relative overflow-hidden top-20 bg-white shadow-2xl shadow-green-100/50  p-8 md:p-14 border border-green-50">
  <div className="relative z-10">
    <div className="flex items-center gap-3">
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">Our Story</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-10   items-center">
      {/* Left: Text Content */}
      <div className="space-y-6 text-lg leading-relaxed">
        <h3 className="text-2xl font-bold">From Rural Struggle to Rural Startup</h3>
        <p>
          NayaVayapar was born from the soil of Bihar — co-founded by <strong>Neha Singh</strong> and <strong>Roshan Singh</strong>,
          a son of the land who believes in grassroots change.
        </p>
        <p>
          Humne dekha ki kishan mehnat toh karte hain, par unhe sahi daam nahi milta. Isliye humne
          <strong> Trust aur Technology</strong> ko milakar ek naya rasta banaya.
        </p>
      </div>

      {/* Right: Image with Contact Overlay */}
      <div className="relative h-94 flex items-center justify-center text-green-800 italic p-6 text-center shadow-inner">
        <img
          src={farmerImg}
          alt="Kishano ki pragati, desh ki unnati"
          className="h-full w-full object-contain rounded-2xl"
        />
        {/* Contact Overlay */}
        <div className="absolute top-4 right-4 bg-green-600/80 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg backdrop-blur-sm">
          Contact: +91 12345 67890
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Mission, Vision, Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="group  p-8 rounded-3xl shadow-xl  hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className=" font-medium leading-relaxed">
              Kishano ko direct market dena, sahi daam dilana aur Bihar ke Makhane ko duniya bhar mein pahuchana.
            </p>
          </div>

          {/* Vision */}
          <div className="group  p-8 rounded-3xl shadow-xl  hover:-translate-y-2 transition-transform duration-300">
            <div className=" w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className=" font-medium leading-relaxed">
              Bihar ki dharti se pehla <span className="bg-white text-purple-600 px-2 py-0.5 rounded-lg font-black">UNICORN</span> startup banana.
            </p>
          </div>

          {/* Values */}
         <div className="p-8 rounded-3xl shadow-xl border border-green-300">
  <div className="flex items-center gap-3 mb-6">
    <Lightbulb className="h-7 w-7 text-green-500" />
    <h3 className="text-2xl font-bold text-green-500">Our Values</h3>
  </div>
  <div className="space-y-4">
    <ValueCard icon="🌾" title="Farmer First" text="Kishan hamari priority hain." color="green" />
    <ValueCard icon="🤝" title="No Middlemen" text="Direct aur saaf suthra kaam." color="green" />
  </div>
</div>

        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-br from-green-700 to-emerald-800  p-10 md:p-20 text-white shadow-2xl relative overflow-hidden text-center">
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Handshake size={48} className="text-green-300" />
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Join the Movement</h2>
            </div>
            <p className="text-green-100 text-lg mb-12 max-w-2xl mx-auto">
              Hum sirf business nahi, ek revolution bana rahe hain. Is journey ka hissa baniye.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <CTAButton to="/team" icon={Users} label="Meet the Team" />
              <CTAButton to="/journey" icon={Play} label="Watch Journey" />
              <CTAButton to="/support" icon={Heart} label="Support Us" />
            </div>
          </div>
        </section>

      </div>

      <div className="py-24" />
    </div>
  );
}



