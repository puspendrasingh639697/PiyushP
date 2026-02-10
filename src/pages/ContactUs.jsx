import { useState } from 'react';
import { Mail, MapPin, Phone, Globe, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    emailPhone: '',
    enquiryType: 'buyer',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 text-gray-800 font-sans">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
        <div className="text-center space-y-6 mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-green-800 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-emerald-700 font-medium">Judiye Bharat ke naye vyapar se.</p>
          <p className="text-lg md:text-xl text-emerald-600">We&apos;re just one call, message or visit away.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Details */}
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 border-b-2 border-green-300 pb-4 mb-6">
              Contact Details
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                <MapPin className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Regional Office:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Satnarayan Bhagwan Campus, Mahadev Sthan, Supaul, Bihar – 852130
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                <Phone className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Phone/WhatsApp:</h3>
                  <p className="text-gray-700">Rahul Kumar (Area Manager) – 8116146987</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                <Mail className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email:</h3>
                  <a href="mailto:support@nayavayapar.in" className="text-green-600 hover:underline">
                    support@nayavayapar.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                <Globe className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Website:</h3>
                  <a
                    href="https://www.nayavayapar.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    www.nayavayapar.in
                  </a>
                </div>
              </div>
            </div>

            {/* Support Timings */}
            <div className="space-y-4 pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 border-b-2 border-green-300 pb-4 mb-6">
                Support Timings
              </h2>
              <p className="text-lg text-gray-700">Mon–Sat | 10 AM to 6 PM</p>
              <p className="text-lg text-gray-700">WhatsApp active 24x7 for registered farmers</p>
            </div>

            {/* Follow & Connect */}
            <div className="space-y-4 pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 border-b-2 border-green-300 pb-4 mb-6">
                Follow & Connect
              </h2>
              <div className="flex gap-8">
                <a
                  href="#"
                  aria-label="Facebook Page"
                  className="text-green-500 hover:text-green-700 transition-colors duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-10 w-10" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram Handle"
                  className="text-green-500 hover:text-green-700 transition-colors duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-10 w-10" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-green-500 hover:text-green-700 transition-colors duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-10 w-10" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube Channel"
                  className="text-green-500 hover:text-green-700 transition-colors duration-300 transform hover:scale-110"
                >
                  <Youtube className="h-10 w-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full bg-white shadow-2xl rounded-xl p-6 lg:p-8 border-t-4 border-green-600">
            <div className="px-0 pt-0 pb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800">Contact Form</h2>
            </div>
            <div className="p-0">
              <form className="space-y-7" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-lg font-medium text-gray-700 block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="h-12 text-base border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg w-full px-4 border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="emailPhone" className="text-lg font-medium text-gray-700 block">
                    Email/Phone
                  </label>
                  <input
                    id="emailPhone"
                    name="emailPhone"
                    value={formData.emailPhone}
                    onChange={handleChange}
                    placeholder="Enter your email or phone number"
                    type="text"
                    className="h-12 text-base border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg w-full px-4 border"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-lg font-medium text-gray-700 block">
                    Type of Enquiry
                  </label>
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="buyer"
                        name="enquiryType"
                        value="buyer"
                        checked={formData.enquiryType === 'buyer'}
                        onChange={handleChange}
                        className="h-5 w-5 text-green-600 border-green-400 focus:ring-green-500"
                      />
                      <label htmlFor="buyer" className="text-base text-gray-700">
                        Buyer
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="farmer"
                        name="enquiryType"
                        value="farmer"
                        checked={formData.enquiryType === 'farmer'}
                        onChange={handleChange}
                        className="h-5 w-5 text-green-600 border-green-400 focus:ring-green-500"
                      />
                      <label htmlFor="farmer" className="text-base text-gray-700">
                        Farmer
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="partnership"
                        name="enquiryType"
                        value="partnership"
                        checked={formData.enquiryType === 'partnership'}
                        onChange={handleChange}
                        className="h-5 w-5 text-green-600 border-green-400 focus:ring-green-500"
                      />
                      <label htmlFor="partnership" className="text-base text-gray-700">
                        Partnership
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="other"
                        name="enquiryType"
                        value="other"
                        checked={formData.enquiryType === 'other'}
                        onChange={handleChange}
                        className="h-5 w-5 text-green-600 border-green-400 focus:ring-green-500"
                      />
                      <label htmlFor="other" className="text-base text-gray-700">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-lg font-medium text-gray-700 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="min-h-[150px] text-base border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg w-full p-4 border"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-lg font-semibold bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-20 text-center text-xl md:text-2xl text-emerald-700 italic font-serif max-w-3xl mx-auto">
          <p>&quot;Gaon se vyapar, vyapar se vikas — yehi hai NayaVayapar ka raasta.&quot;</p>
        </div>
      </div>
    </div>
  );
}