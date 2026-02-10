import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"; // Import the Footer component
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs";
import OurProducts from "./pages/OurProducts";
import ForFarmers from "./pages/ForFarmers";
import ForBuyers from "./pages/ForBuyers";
import ImpactGallery from "./pages/ImpactGallery";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <>
      <Header />
      <main> {/* Added main tag for semantic HTML and better structure */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/our-products" element={<OurProducts />} />
          <Route path="/For-Farmers" element={<ForFarmers />} />
          <Route path="/For-Buyers" element={<ForBuyers />} />
          <Route path="/Impact-Gallery" element={<ImpactGallery />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer /> {/* Footer added here will appear on all pages */}
    </>
  );
}