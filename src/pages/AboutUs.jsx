




// import React from "react";
// import { Users, Play, Heart, Target, Eye, Lightbulb, Handshake } from "lucide-react";
// import { Link } from "react-router-dom";
// import farmerImg from "../assets/farmar1.png";

// const ValueCard = ({ icon, title, text }) => (
//   <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border-l-4 border-green-500 hover:shadow-lg transition-all">
//     <div className="mb-2 font-semibold text-green-400 inline-block px-3 py-1 rounded-lg text-sm italic">
//       {icon} {title}
//     </div>
//     <p className="text-sm md:text-base text-white/90 italic leading-relaxed">
//       {text}
//     </p>
//   </div>
// );

// const CTAButton = ({ to, icon: Icon, label }) => (
//   <Link to={to} className="w-full sm:w-auto">
//     <button className="w-full bg-white text-green-700 hover:bg-green-200 font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base transition-all active:scale-95 shadow-lg">
//       <Icon className="h-5 w-5" /> <span className="italic">{label}</span>
//     </button>
//   </Link>
// );

// export default function AboutUs() {
//   return (
//     <div className="min-h-screen bg-black/90 text-white pt-28 md:pt-32 font-light">

//       {/* Header */}
//       <section className="max-w-4xl mx-auto px-4 text-center mb-16">

//         <h1 className="text-4xl md:text-6xl font-black italic tracking-tight mb-6 
//         text-white drop-shadow-[3px_3px_0px_rgba(34,197,94,0.8)]">
//           About <span className="text-green-500">Us</span>
//         </h1>

//         <p className="text-lg md:text-xl italic text-white/80">
//           Bihar ki mitti, modern tech, aur kishano ka vishwas.
//         </p>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

//         {/* Our Story */}
//         <section className="p-8 md:p-14">
//           <div className="grid md:grid-cols-2 gap-10 items-center">

//             {/* Text */}
//             <div className="space-y-6 text-lg leading-relaxed italic">
//               <h2 className="text-3xl md:text-4xl font-extrabold text-green-400 
//               drop-shadow-[2px_2px_0px_rgba(255,255,255,0.2)]">
//                 Our Story
//               </h2>

//               <p>
//                 NayaVayapar was born from the soil of Bihar — co-founded by 
//                 <strong className="text-green-400"> Neha Singh</strong> and 
//                 <strong className="text-green-400"> Roshan Singh</strong>.
//               </p>

//               <p>
//                 Humne dekha ki kishan mehnat toh karte hain, par unhe sahi daam nahi milta.
//                 Isliye humne <strong className="text-green-400">Trust aur Technology</strong> ko milakar ek naya rasta banaya.
//               </p>
//             </div>

//             {/* Image */}
//             <div className="relative flex items-center justify-center">
//               <img
//                 src={farmerImg}
//                 alt="Kishano ki pragati"
//                 className="w-full h-full object-contain rounded-xl shadow-2xl"
//               />

//               <div className="absolute top-4 right-4 bg-green-600/80 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg backdrop-blur-sm italic">
//                 Contact: +91 12345 67890
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Mission Vision Values */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-8">

//   {/* Mission */}
//   <div className="group p-8 rounded-xl bg-white
//   shadow-xl
//   hover:bg-green-600
//   hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]
//   hover:-translate-y-2
//   transition-all duration-300">

//   {/* Icon */}
//   <Target className="h-8 w-8 text-green-500 mb-4
//     group-hover:text-white transition-colors duration-300" />

//   {/* Title */}
//   <h3 className="text-4xl font-semibold text-green-600 mb-4
//     group-hover:text-white transition-colors duration-300">
//     Our Mission
//   </h3>

//   {/* Paragraph */}
//   <p className=" text-4xl text-gray-700 text-base
//     group-hover:text-white transition-colors duration-300">
//     Kishano ko direct market dena, sahi daam dilana aur Bihar ke 
//     Makhane ko duniya bhar mein pahuchana.
//   </p>

// </div>


//   {/* Vision */}
//   <div className="p-8 rounded-xl bg-white  
//   shadow-xl border border-transparent
//  hover:bg-green-600 
//   hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]
//   hover:-translate-y-2
//   transition-all duration-300 italic">
    
//     <Eye className="h-8 w-8 text-green-400 mb-4" />
//     <h3 className="text-2xl font-bold text-green-400 mb-4">Our Vision</h3>
//     <p>
//       Bihar ki dharti se pehla <span className="text-green-400 font-black">UNICORN</span> startup banana.
//     </p>
//   </div>

//   {/* Values */}
//   <div className="p-8 rounded-xl bg-white  
//   shadow-xl border border-green-500/30
//  hover:bg-green-600 
//   hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]
//   hover:-translate-y-2
//   transition-all duration-300 italic">

//     <div className="flex items-center gap-3 mb-6">
//       <Lightbulb className="h-7 w-7 text-green-400" />
//       <h3 className="text-2xl font-bold text-green-400 italic">Our Values</h3>
//     </div>

//     <div className="space-y-4">
//       <ValueCard icon="🌾" title="Farmer First" text="Kishan hamari priority hain." />
//       <ValueCard icon="🤝" title="No Middlemen" text="Direct aur saaf suthra kaam." />
//     </div>
//   </div>

// </section>


//         {/* CTA */}
//         <section className="bg-gradient-to-br from-green-700 to-emerald-800 rounded-3xl p-12 text-white shadow-2xl text-center italic">

//           <div className="flex items-center justify-center gap-4 mb-8">
//             <Handshake size={48} className="text-green-300" />
//             <h2 className="text-3xl md:text-5xl font-black tracking-tight 
//             drop-shadow-[3px_3px_0px_rgba(0,0,0,0.6)]">
//               Join the Movement
//             </h2>
//           </div>

//           <p className="text-green-100 text-lg mb-12 max-w-2xl mx-auto">
//             Hum sirf business nahi, ek revolution bana rahe hain. Is journey ka hissa baniye.
//           </p>

//           <div className="flex flex-wrap justify-center gap-5">
//             <CTAButton to="/team" icon={Users} label="Meet the Team" />
//             <CTAButton to="/journey" icon={Play} label="Watch Journey" />
//             <CTAButton to="/support" icon={Heart} label="Support Us" />
//           </div>

//         </section>

//       </div>

//       <div className="py-24" />
//     </div>
//   );
// }
import React from "react";
import { Users, Play, Heart, Target, Eye, Lightbulb, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import farmerImg from "../assets/farmar1.png";

const ValueCard = ({ icon, title, text }) => (
  <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border-l-4 border-green-500 hover:shadow-lg transition-all">
    <div className="mb-2 font-semibold text-green-400 inline-block px-3 py-1 rounded-lg text-sm">
      {icon} {title}
    </div>
    <p className="text-sm md:text-base text-white/90 leading-relaxed">
      {text}
    </p>
  </div>
);

const CTAButton = ({ to, icon: Icon, label }) => (
  <Link to={to} className="w-full sm:w-auto">
    <button className="w-full bg-white text-green-700 hover:bg-green-200 font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base transition-all active:scale-95 shadow-lg">
      <Icon className="h-5 w-5" /> {label}
    </button>
  </Link>
);

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black/90 text-white pt-28 md:pt-32 font-sans">

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          About <span className="text-green-500">Us</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80">
          Bihar ki mitti, modern tech, aur kishano ka vishwas.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Our Story */}
        <section className="p-8 md:p-14">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div className="space-y-6 text-gray-300 text-base leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold text-green-400">
                Our Story
              </h2>

              <p>
                NayaVayapar was born from the soil of Bihar — co-founded by 
                <strong className="text-green-400"> Neha Singh</strong> and 
                <strong className="text-green-400"> Roshan Singh</strong>.
              </p>

              <p>
                Humne dekha ki kishan mehnat toh karte hain, par unhe sahi daam nahi milta.
                Isliye humne <strong className="text-green-400">Trust aur Technology</strong> ko milakar ek naya rasta banaya.
              </p>
            </div>

            {/* Image */}
            <div className="relative flex items-center justify-center">
              <img
                src={farmerImg}
                alt="Kishano ki pragati"
                className="w-full h-full object-contain rounded-xl shadow-2xl"
              />

              <div className="absolute top-0 right-4 bg-green-600/90 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg backdrop-blur-sm">
                Contact: +91 12345 67890
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Mission */}
          <div className="group p-8 rounded-2xl bg-white shadow-xl hover:bg-green-600 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:-translate-y-2 transition-all duration-300">
            <Target className="h-8 w-8 text-green-500 mb-4 group-hover:text-white transition-colors duration-300" />

            <h3 className="text-2xl font-semibold text-green-700 mb-4 group-hover:text-white transition-colors duration-300">
              Our Mission
            </h3>

            <p className="text-gray-600 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
              Kishano ko seedha bazaar se jodkar unhe sahi daam dilana aur 
              Bihar ke Makhane ko global pehchaan dena.
            </p>
          </div>

          {/* Vision */}
          <div className="group p-8 rounded-2xl bg-white shadow-xl hover:bg-green-600 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:-translate-y-2 transition-all duration-300">
            <Eye className="h-8 w-8 text-green-500 mb-4 group-hover:text-white transition-colors duration-300" />

            <h3 className="text-2xl font-semibold text-green-700 mb-4 group-hover:text-white transition-colors duration-300">
              Our Vision
            </h3>

            <p className="text-gray-600 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
              Bihar ki dharti se pehla <span className="font-bold">UNICORN</span> startup banana.
            </p>
          </div>

          {/* Values */}
          <div className="group p-8 rounded-2xl bg-white shadow-xl hover:bg-green-600 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:-translate-y-2 transition-all duration-300">
            <Lightbulb className="h-8 w-8 text-green-500 mb-4 group-hover:text-white transition-colors duration-300" />

            <h3 className="text-2xl font-semibold text-green-700 mb-6 group-hover:text-white transition-colors duration-300">
              Our Values
            </h3>

            <div className="space-y-4 group-hover:text-white transition-colors duration-300">
              <p className="text-gray-600 group-hover:text-white"> Farmer First – Kishan hamari priority hain.</p>
              <p className="text-gray-600 group-hover:text-white">No Middlemen – Direct aur saaf suthra kaam.</p>
            </div>
          </div>

        </section>

        {/* CTA */}
       {/* CTA */}
<section className="p-16 text-white text-center">

  <div className="flex items-center justify-center gap-4 mb-8">
    <Handshake size={48} className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]" />

    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
      <span className="text-green-500 drop-shadow-[2px_2px_0_rgba(34,197,94,0.4)]">
        Join
      </span>{" "}
      the Movement
    </h2>
  </div>

  <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
    Hum sirf business nahi, ek revolution bana rahe hain.
    Is journey ka hissa baniye.
  </p>

  <div className="flex flex-wrap justify-center gap-6">

    <Link to="/team">
      <button className="bg-green-500 text-white font-semibold px-7 py-3  rounded-lg shadow-lg 
      hover:bg-green-600 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]
      hover:-translate-y-1 transition-all duration-300">
        <Users className="inline mr-2 h-5 w-5" />
        Meet the Team
      </button>
    </Link>

    <Link to="/journey">
      <button className="bg-green-500 text-white font-semibold px-7 py-3 rounded-lg shadow-lg 
      hover:bg-green-600 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]
      hover:-translate-y-1 transition-all duration-300">
        <Play className="inline mr-2 h-5 w-5" />
        Watch Journey
      </button>
    </Link>

    <Link to="/support">
      <button className="bg-green-500 text-white font-semibold px-7 py-3  rounded-lg shadow-lg 
      hover:bg-green-600 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]
      hover:-translate-y-1 transition-all duration-300">
        <Heart className="inline mr-2 h-5 w-5" />
        Support Us
      </button>
    </Link>

  </div>

</section>



      </div>

      <div className="py-24" />
    </div>
  );
}
