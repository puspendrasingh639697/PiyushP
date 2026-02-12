"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/About-Us" },
    { label: "Our Products", path: "/our-products" },
    { label: "For Farmers", path: "/for-farmers" },
    { label: "For Buyers", path: "/for-buyers" },
    { label: "Impact & Gallery", path: "/impact-gallery" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-100 shadow-sm h-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* --- LOGO SECTION (Fixed Header, Large Pop-out Logo) --- */}
          <motion.div
            className="relative flex items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Image container absolute hai taaki header ki height na badhe */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 mt-3">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Nya Vayapar Logo"
                  /* h-24 mobile par aur h-32 desktop par overflow karega */
                  className="h-24 md:h-32 w-auto object-contain drop-shadow-lg  transition-transform duration-300"
                />
              </Link>
            </div>
            {/* Spacer: Ye div nav items ko logo se dur rakhta hai */}
            <div className="w-32 md:w-44 h-10"></div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="relative text-black hover:text-green-600 transition-colors  text-sm group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:block"
            >
              <button className="bg-green-700 hover:bg-green-800 text-white shadow-md hover:shadow-lg transition-all duration-300 px-6 py-2.5  text-sm">
                Get Started
              </button>
            </motion.div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-xl lg:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-lg border-b border-gray-50 pb-2"
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full bg-green-700 text-white rounded-xl py-4 text-base font-bold shadow-lg">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}