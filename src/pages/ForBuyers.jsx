import { Check, Phone, Mail, CalendarDays, Download, Quote } from "lucide-react";

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
      <section className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-br from-green-600 to-green-800 text-white text-center w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">For Buyers</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          From the ponds of Bihar to your godown - a direct supply chain.
        </p>
      </section>

      {/* Page Content */}
      <div className="w-full px-4 md:px-12 space-y-20 py-12 md:py-20">
        {/* Hero */}
        <section className="text-center space-y-6 py-10 bg-white rounded-3xl shadow-xl border border-gray-100">
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 leading-tight">
            From the ponds of Bihar to your godown –
            <br className="hidden md:block" /> with purity, consistency & trust.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            NayaVayapar works with 500+ verified farmers to deliver authentic Makhana at scale, on time, and with full
            traceability.
          </p>
        </section>

        {/* What You Get */}
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

        {/* Product Catalog */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-center text-gray-800">Product Catalog Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>

        {/* Who Buys */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-center text-gray-800">Who Buys From Us?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-8 rounded-xl shadow-md border text-lg">
            {[
              "Retailers & Supermarkets",
              "Food Processing Units",
              "Exporters (USA, UK, Japan)",
              "D2C Brands & Online Startups",
              "Festive Gift Packers & Ayurveda Stores",
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-700">
                <Check className="h-6 w-6 text-green-600 shrink-0" /> <span>{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Let's Work Together */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-center text-gray-800">Let's Work Together</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-md border text-lg">
            {[
              "Proforma invoice on request",
              "Product samples (Paid/Free based on MOQ)",
              "Packaging design & white-labelling options",
              "B2B WhatsApp Support Line",
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-700">
                <Check className="h-6 w-6 text-green-600 shrink-0" /> <span>{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Bulk Order Helpline */}
        <section className="text-center bg-white p-8 rounded-xl shadow-md border space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Bulk Order Helpline</h2>
          <p className="font-semibold text-gray-700 text-xl">Roshan Kumar (Senior Sales Manager)</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <p className="flex items-center gap-3 text-gray-700">
              <Phone className="h-6 w-6 text-green-600" />
              <a href="tel:8116393432" className="hover:underline">8116393432</a>
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <Mail className="h-6 w-6 text-green-600" />
              <a href="mailto:support@nayavayapar.in" className="hover:underline">support@nayavayapar.in</a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-lg shadow-md">
            <Quote className="h-6 w-6" /> Request a Quote
          </button>
          <button className="flex items-center gap-3 bg-white hover:bg-gray-50 text-green-700 border border-green-700 py-3 px-6 rounded-lg shadow-md">
            <Download className="h-6 w-6" /> Download Catalog PDF
          </button>
          <button className="flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-lg shadow-md">
            <CalendarDays className="h-6 w-6" /> Schedule a Call
          </button>
        </section>

        {/* Banner */}
        <section className="relative w-full h-72 md:h-96 overflow-hidden shadow-xl">
          
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <p className="text-grey-700 text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl">
              Join hands with the roots of Bharat. Source from the soil, not from the stockroom.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
