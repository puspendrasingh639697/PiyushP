import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaClock,
} from "react-icons/fa";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    emailPhone: "",
    enquiryType: "buyer",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully ✅");
    console.log(formData);
  };

  return (
    <div className="min-h-screen   bg-black/90 text-gray-200">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl   italic font-extrabold text-green-500">
            Contact Us
          </h1>
          <p className="text-2xl  italic text-gray-400 mt-4">
            Judiye Bharat ke naye vyapar se.
          </p>
          <p className="text-white  italic mt-2 text-2xl ">
            We're just one call, message or visit away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT SIDE DETAILS */}
          <div className="space-y-10">

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-green-500 border-b border-green-600 pb-3 mb-6">
                Contact Details
              </h2>

              <div className="space-y-6">

                <div className="flex gap-4 p-6 rounded-xl border border-white hover:border-green-500 hover:shadow-green-500/40 hover:shadow-lg transition-all">
                  <FaMapMarkerAlt className="text-green-500 text-2xl mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-green-500">
                      Regional Office
                    </h3>
                    <p className="text-white  italic">
                      Satnarayan Bhagwan Campus, Mahadev Sthan,
                      Supaul, Bihar – 852130
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6  rounded-xl border border-white hover:border-green-500 hover:shadow-green-500/40 hover:shadow-lg transition-all">
                  <FaPhoneAlt className="text-green-500 text-2xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-green-500">
                      Phone / WhatsApp
                    </h3>
                    <p className="text-white  italic">
                      Rahul Kumar (Area Manager) – 8116146987
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6  rounded-xl border border-white hover:border-green-500 hover:shadow-green-500/40 hover:shadow-lg transition-all">
                  <FaEnvelope className="text-green-500 text-2xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-green-500">
                      Email
                    </h3>
                    <p className="text-white  italic">
                      support@nayavayapar.in
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6  rounded-xl border border-white hover:border-green-500 hover:shadow-green-500/40 hover:shadow-lg transition-all">
                  <FaGlobe className="text-green-500 text-2xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-green-500">
                      Website
                    </h3>
                    <p className="text-white  italic">
                      www.nayavayapar.in
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Support Timings */}
            <div>
              <h2 className="text-3xl font-bold text-green-500 border-b border-green-600 pb-3 mb-6">
                Support Timings
              </h2>

              <div className="flex gap-4 p-6  rounded-xl border border-white hover:border-green-500 transition-all">
                <FaClock className="text-green-500 text-2xl mt-1" />
                <div>
                  <p className="text-green-500">
                    Mon–Sat | 10 AM to 6 PM
                  </p>
                  <p className="text-white mt-2  italic">
                    WhatsApp active 24x7 for registered farmers
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-3xl font-bold text-green-500 border-b border-green-600 pb-3 mb-6">
                Follow & Connect
              </h2>

              <div className="flex gap-6">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="p-3  rounded-full border border-green-500 hover:bg-green-500 hover:text-black text-green-500 transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="text-lg" />
                    </div>
                  )
                )}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="rounded-xl p-8 border border-white">

            <h2 className="text-3xl font-bold text-green-500 mb-8">
              Contact Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl  border border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
              />

              <input
                name="emailPhone"
                placeholder="Email / Phone"
                value={formData.emailPhone}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
              />

              <div className="grid grid-cols-2 gap-4">
                {["buyer", "farmer", "partnership", "other"].map((type) => (
                  <label
                    key={type}
                    className={`p-3 rounded-xl text-center cursor-pointer border transition-all ${
                      formData.enquiryType === type
                        ? "bg-green-500 text-white border-green-500"
                        : "border-green-500 text-white-300 hover:border-green-500"
                    }`}
                  >
                    <input
                      type="radio"
                      name="enquiryType"
                      value={type}
                      checked={formData.enquiryType === type}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </label>
                ))}
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-xl  border border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-green-500 text-white font-semibold text-lg hover:bg-green-600 hover:shadow-green-500/40 hover:shadow-lg transition-all"
              >
                Submit
              </button>

            </form>
          </div>

        </div>

        {/* Footer Quote */}
        <div className="mt-20 text-center text-xl italic text-green-500">
          "Gaon se vyapar, vyapar se vikas — yehi hai NayaVayapar ka raasta."
        </div>

      </div>
    </div>
  );
}