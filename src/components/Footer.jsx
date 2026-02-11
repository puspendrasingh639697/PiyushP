import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const quickLinks = ["About Us", "Our Products", "For Farmers", "For Buyers", "Contact"];
  const products = ["Premium Makhana (6 Suta)", "Standard Makhana", "Roasted Makhana", "Makhana Chivda"];
  const legalLinks = ["Privacy Policy", "Terms of Service"];
  const socialIcons = [Facebook, Twitter, Instagram, Linkedin];

  return (
    <footer className="text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl  text-black font-bold">Naya Vayapar</span>
                <div className="text-xs text-green-600">Farm to Business</div>
              </div>
            </div>
            <p className="text-gray-800 mb-6 leading-relaxed">
              Empowering farmers and enriching lives by bringing authentic, high-quality Makhana directly from the ponds of Bihar to the world.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-green-600">Quick Links</h4>
            <ul className="space-y-2 text-gray-800">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-green-600">Our Products</h4>
            <ul className="space-y-2 text-black">
              {products.map((product) => (
                <li key={product}>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-green-600">Contact</h4>
            <div className="space-y-2 text-black text-sm">
              <div>Rahul Kumar (Area Manager): 8116146987</div>
              <div>Roshan Kumar (Sales): 8116393432</div>
              <div>support@nayavayapar.in</div>
              <div>
                Satnarayan Bhagwan Campus,
                <br />
                Mahadev Sthan, Supaul, Bihar - 852130
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black mb-4 md:mb-0">© {new Date().getFullYear()} Naya Vayapar. All rights reserved.</p>
            <div className="flex space-x-6 text-black text-sm">
              {legalLinks.map((link) => (
                <a key={link} href="#" className="hover:text-green-400 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center md:text-left text-black text-sm">
            "Gaon se vyapar, vyapar se vikas — yehi hai NayaVayapar ka raasta."
          </div>
        </div>
      </div>
    </footer>
  );
}