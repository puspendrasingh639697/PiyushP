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
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import ManagerSection from "./ManagerSection";

export default function FarmersPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black/90 text-white font-sans tracking-wide">

      {/* HERO */}
      <section className="relative py-24 mt-10 text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
          For <span className="text-green-500">Farmers</span>
        </h1>

        <p className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto font-medium">
          Gaon ke khet se, global market tak – ek direct safar.
        </p>
      </section>

      {/* WHY JOIN */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-extrabold tracking-tight text-center mb-16">
          Why Join <span className="text-green-500">NayaVayapar</span>?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            {
              icon: Scale,
              title: "Fair & Transparent Pricing",
              desc: "Ensure you get the best value for your hard work with clear and honest pricing.",
            },
            {
              icon: Package,
              title: "Assured Buyback of Makhana",
              desc: "Guaranteed purchase of your Makhana produce, reducing market uncertainty.",
            },
            {
              icon: GraduationCap,
              title: "Training on Sorting, Grading & Packaging",
              desc: "Enhance your product quality and market appeal with expert training.",
            },
            {
              icon: MessageCircle,
              title: "Helpline with Area Manager Support",
              desc: "Direct support and guidance from your dedicated Area Manager.",
            },
            {
              icon: Smartphone,
              title: "Mobile App for Listing Products",
              desc: "Easily list and manage your produce directly from your smartphone.",
            },
            {
              icon: CheckCircle,
              title: "And Many More Benefits!",
              desc: "Join our growing community and discover all the advantages of NayaVayapar.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl p-10 shadow-xl 
                hover:bg-green-500 hover:shadow-[0_20px_50px_rgba(34,197,94,0.4)] hover:-translate-y-3
                transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  <Icon className="h-10 w-10 text-green-500 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 italic leading-relaxed group-hover:text-white/90 transition-colors">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHAT YOU NEED */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-extrabold tracking-tight text-center mb-16">
          What You Need to <span className="text-green-500">Start</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">

          {[{
            icon: Scan,
            title: "Aadhaar (for verification)",
            desc: "Your unique identification for secure onboarding."
          },{
            icon: Leaf,
            title: "Sample of your produce (for quality tagging)",
            desc: "To ensure quality standards and proper categorization."
          },{
            icon: ClipboardList,
            title: "Basic details (name, village, contact)",
            desc: "Essential information to get you started quickly."
          }].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl p-10 shadow-xl 
                hover:bg-green-500 hover:shadow-[0_20px_50px_rgba(34,197,94,0.4)] hover:-translate-y-3
                transition-all duration-300"
              >
                <Icon className="h-10 w-10 text-green-500 mb-6 group-hover:text-white transition-colors" />

                <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 italic leading-relaxed group-hover:text-white/90 transition-colors">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 font-medium">
            <span className="text-green-400 font-semibold">Note:</span> Bank details are not required during onboarding — we work on trust-first model.
          </p>
        </div>
      </section>

      <ManagerSection />

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight mb-12">
          Ready to <span className="text-green-400">Grow</span>?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link
            to="/register-farmer"
            className="flex items-center justify-center gap-2 h-14 text-lg
            bg-green-500 text-black font-semibold
            rounded-xl hover:shadow-[0_0_30px_rgba(34,197,94,1)]
            transition"
          >
            Join as Farmer <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            to="/download-app"
            className="flex items-center justify-center gap-2 h-14 text-lg
            border border-green-400 text-green-400
            rounded-xl hover:bg-green-500 hover:text-black transition"
          >
            Download Naya Bypar App <Smartphone className="h-5 w-5" />
          </Link>

          <Link
            to="/farmer-rights"
            className="flex items-center justify-center gap-2 h-14 text-lg
            border border-white/20 text-gray-300
            rounded-xl hover:border-green-400 hover:text-green-400 transition"
          >
            Know Your Rights <ClipboardList className="h-5 w-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
