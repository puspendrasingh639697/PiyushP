import {
  CheckCircle,
  Scale,
  Package,
  GraduationCap,
  MessageCircle,
  Smartphone,
  Scan,
  Leaf,
  ClipboardList,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function FarmersPage() {
  return (
    <div className="bg-gray-50 min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden w-full">
        <div className="w-full px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 drop-shadow-lg">
            For Farmers
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto opacity-90">
            Gaon ke khet se, global market tak – ek direct safar.
          </p>
        </div>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="white" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="w-full px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Join NayaVayapar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Scale className="h-12 w-12 text-green-600 mb-4" />,
                title: "Fair & Transparent Pricing",
                desc: "Ensure you get the best value for your hard work with clear and honest pricing.",
              },
              {
                icon: <Package className="h-12 w-12 text-green-600 mb-4" />,
                title: "Assured Buyback of Makhana",
                desc: "Guaranteed purchase of your Makhana produce, reducing market uncertainty.",
              },
              {
                icon: <GraduationCap className="h-12 w-12 text-green-600 mb-4" />,
                title: "Training on Sorting, Grading & Packaging",
                desc: "Enhance your product quality and market appeal with expert training.",
              },
              {
                icon: <MessageCircle className="h-12 w-12 text-green-600 mb-4" />,
                title: "Helpline with Area Manager Support",
                desc: "Direct support and guidance from your dedicated Area Manager.",
              },
              {
                icon: <Smartphone className="h-12 w-12 text-green-600 mb-4" />,
                title: "Mobile App for Listing Products",
                desc: "Easily list and manage your produce directly from your smartphone.",
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-green-600 mb-4" />,
                title: "And Many More Benefits!",
                desc: "Join our growing community and discover all the advantages of NayaVayapar.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border-t-4 border-green-500 p-6 text-center flex flex-col items-center"
              >
                {item.icon}
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Need Section */}
      <section className="py-16 md:py-24 bg-gray-100 w-full">
        <div className="w-full px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            What You Need to Start:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg border-l-4 border-yellow-500 p-6 flex items-start gap-4">
              <Scan className="h-8 w-8 text-yellow-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Aadhaar (for verification)</h3>
                <p className="text-gray-600 text-sm">Your unique identification for secure onboarding.</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg border-l-4 border-yellow-500 p-6 flex items-start gap-4">
              <Leaf className="h-8 w-8 text-yellow-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Sample of your produce (for quality tagging)</h3>
                <p className="text-gray-600 text-sm">To ensure quality standards and proper categorization.</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg border-l-4 border-yellow-500 p-6 flex items-start gap-4">
              <ClipboardList className="h-8 w-8 text-yellow-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Basic details (name, village, contact)</h3>
                <p className="text-gray-600 text-sm">Essential information to get you started quickly.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 text-base italic bg-white p-4 rounded-lg shadow-sm inline-block">
              <span className="font-semibold text-green-700">Note:</span> Bank details are not required during
              onboarding — we work on trust-first model.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Manager Section */}
      <section className="py-16 md:py-24 bg-green-700 text-white w-full">
        <div className="w-full px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Your Area Manager</h2>
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <Briefcase className="h-16 w-16 text-green-600 mb-4" />
              <p className="text-3xl font-bold mb-2">Rahul Kumar</p>
              <p className="text-2xl font-semibold text-green-700 mb-4">8116146987</p>
              <p className="text-lg text-gray-500">आपको हर कदम पर साथ मिलेगा</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-16 md:py-24 w-full">
        <div className="w-full px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Ready to Grow?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/register-farmer"
              className="flex items-center justify-center gap-2 h-14 text-lg bg-green-600 hover:bg-green-700 text-white shadow-md rounded-md px-6 transition"
            >
              Join as Farmer <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/download-app"
              className="flex items-center justify-center gap-2 h-14 text-lg border border-green-600 text-green-700 hover:bg-green-50 rounded-md px-6 transition"
            >
              Download Naya Bypar App <Smartphone className="h-5 w-5" />
            </Link>
            <Link
              to="/farmer-rights"
              className="flex items-center justify-center gap-2 h-14 text-lg text-gray-700 hover:bg-gray-100 rounded-md px-6 transition"
            >
              Know Your Rights <ClipboardList className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
