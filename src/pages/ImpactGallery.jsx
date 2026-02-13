import { Users, MapPin, Package, Building, Globe, PlayCircle, Quote, Upload } from "lucide-react";
import { Shield, TrendingUp, Play, Lightbulb } from "lucide-react";

export default function ImpactGalleryPage() {
  const impactMetrics = [
    { icon: Users, count: "500+", label: "Farmers Onboarded" },
    { icon: MapPin, count: "50+", label: "Villages Connected" },
    { icon: Package, count: "120+ Tonnes", label: "Makhana Sold" },
    { icon: Building, count: "30+ Cities", label: "B2B Buyers" },
    { icon: Globe, count: "3", label: "Export Ready Countries (USA, UK, Japan)" },
  ];

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=400",
      alt: "Rajesh Yadav, Farmer from Supaul",
      caption: "Rajesh Yadav, Farmer from Supaul: “Pehli baar mujhe MRP ka bhav mila”",
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      alt: "Meena Devi, Farmer from Darbhanga",
      caption: "Meena Devi, Darbhanga: “Mere ghar ki makhana ab Dubai ja rahi hai!”",
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      alt: "Intern Team at Field",
      caption: "Intern Team at Field: “Digital form bharna bhi sikha diye bhaiya!”",
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      alt: "Makhana harvesting",
      caption: "Harvesting the golden seeds with care.",
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      alt: "Community gathering",
      caption: "Building a stronger community, one farmer at a time.",
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      alt: "Makhana popping",
      caption: "The traditional art of makhana popping.",
    },
  ];

  const testimonials = [
    {
      quote: "NayaVayapar ne sirf makhana kharida nahi, hamara vishwas jeeta.",
      author: "Satyendra Mishra",
      role: "Farmer Partner, Bihar",
    },
    {
      quote: "Hum traders the, ab partners ban gaye hain.",
      author: "Shubham Traders",
      role: "Kolkata",
    },
    {
      quote: "Aise startup ki zarurat thi Bharat ke liye.",
      author: "Priya Singh",
      role: "Investor & Mentor",
    },
  ];

  return (
    <main className="flex flex-col font-serif items-center justify-center min-h-screen  bg-black/90  text-gray-900">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 
        text-white text-center">

        <div className="container mx-auto px-4 max-w-4xl">

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl 
    font-extrabold tracking-tight mb-6 leading-tight">
            <span className="text-white">Impact &</span>{" "}
            <span className="text-green-500">Gallery</span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-semibold text-green-400 mb-8">
            {"Har ek dana, ek kahani hai."}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            At NayaVayapar, we don't measure success in profits — we measure it in smiles, savings, and self-respect of
            every farmer we work with.
          </p>

        </div>
      </section>

      {/* Impact in Numbers */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-14 text-white">
            Why Choose <span className="text-green-500">NayaVyapar?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Card 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md 
      transition-all duration-300 transform 
      hover:-translate-y-3 hover:shadow-2xl hover:bg-green-500">

              <Shield className="h-12 w-12 mb-6 text-green-600 
        transition-all duration-300 group-hover:text-white group-hover:scale-110" />

              <h3 className="text-xl font-semibold tracking-tight mb-3 text-green-600 
        transition-all duration-300 group-hover:text-white">
                Technology-Driven Tracking & Visibility
              </h3>

              <p className="text-base italic leading-relaxed text-gray-600 
        transition-all duration-300 group-hover:text-green-100">
                Real-time tracking, instant updates, and smart dashboard for smooth operations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md 
      transition-all duration-300 transform 
      hover:-translate-y-3 hover:shadow-2xl hover:bg-green-500">

              <TrendingUp className="h-12 w-12 mb-6 text-green-600 
        transition-all duration-300 group-hover:text-white group-hover:scale-110" />

              <h3 className="text-xl font-semibold tracking-tight mb-3 text-green-600 
        transition-all duration-300 group-hover:text-white">
                Reliable & Trustworthy Services
              </h3>

              <p className="text-base italic leading-relaxed text-gray-600 
        transition-all duration-300 group-hover:text-green-100">
                Verified partners ensure safe handling and on-time delivery.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md 
      transition-all duration-300 transform 
      hover:-translate-y-3 hover:shadow-2xl hover:bg-green-500">

              <Play className="h-12 w-12 mb-6 text-green-600 
        transition-all duration-300 group-hover:text-white group-hover:scale-110" />

              <h3 className="text-xl font-semibold tracking-tight mb-3 text-green-600 
        transition-all duration-300 group-hover:text-white">
                Easy & Hassle-Free Logistics Management
              </h3>

              <p className="text-base italic leading-relaxed text-gray-600 
        transition-all duration-300 group-hover:text-green-100">
                Simple tools to plan, book, and manage shipments in a few clicks.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md 
      transition-all duration-300 transform 
      hover:-translate-y-3 hover:shadow-2xl hover:bg-green-500">

              <Lightbulb className="h-12 w-12 mb-6 text-green-600 
        transition-all duration-300 group-hover:text-white group-hover:scale-110" />

              <h3 className="text-xl font-semibold tracking-tight mb-3 text-green-600 
        transition-all duration-300 group-hover:text-white">
                Scalable for Every Need
              </h3>

              <p className="text-base italic leading-relaxed text-gray-600 
        transition-all duration-300 group-hover:text-green-100">
                Flexible solutions that grow with your business.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Faces of the Revolution (Photo Gallery) */}
      <section className="w-full py-16 md:py-20">
  <div className="container mx-auto px-4 max-w-7xl">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
      Faces of the <span className="text-green-600">Revolution</span>
    </h2>

    <p className="text-xl italic text-center mb-12 text-white">
      {"“Behind every seed, there is a story.”"}
    </p>

    {/* Gallery Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-2xl 
          shadow-md bg-white border border-gray-200
          transition-all duration-300 transform 
          hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-200"
        >
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className="w-full h-64 object-cover 
            transition-transform duration-500 group-hover:scale-110"
          />

          {/* Green overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t 
          from-green-600/90 to-transparent 
          flex items-end p-5 opacity-0 
          transition-all duration-300 
          group-hover:opacity-100">

            <p className="text-white text-base font-semibold tracking-wide">
              {image.caption}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-6 mt-14">

      <a
        href="#"
        className="px-8 py-3 bg-green-600 text-white font-semibold 
        rounded-xl shadow-md 
        transition-all duration-300 
        hover:-translate-y-1 hover:shadow-lg hover:shadow-green-300"
      >
        See All Stories
      </a>

      <a
        href="#"
        className="px-8 py-3 border-2 border-green-600 text-green-600 
        font-semibold rounded-xl flex items-center
        transition-all duration-300
        hover:bg-green-600 hover:text-white 
        hover:-translate-y-1 hover:shadow-lg"
      >
        <Upload className="mr-2 h-5 w-5" />
        Upload Your Story
      </a>

    </div>
  </div>
</section>

      {/* Video Snippets */}
      <section className="w-full py-16 md:py-20">
  <div className="container mx-auto px-4 max-w-7xl">

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-600">
     <span className="text-white"> Video</span> Snippets
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Video 1 */}
      <div className="aspect-video rounded-xl overflow-hidden 
      shadow-xl border-2 border-green-500 bg-green-100">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example"
          title="Field Visits"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>

      {/* Video 2 */}
      <div className="aspect-video rounded-xl overflow-hidden 
      shadow-xl border-2 border-green-500 bg-green-100">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example"
          title="Farmer Interviews"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>

      {/* Video 3 */}
      <div className="aspect-video rounded-xl overflow-hidden 
      shadow-xl border-2 border-green-500 bg-green-100">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example"
          title="Makhana Harvesting & Popping"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>

      {/* Video 4 */}
      <div className="aspect-video rounded-xl overflow-hidden 
      shadow-xl border-2 border-green-500 bg-green-100">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example"
          title="Naya Bypar App Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>

    </div>

    <div className="flex justify-center mt-12">
     <a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-green-500 
  text-white font-medium rounded-lg 
  flex items-center shadow-md
  transition-all duration-300
  hover:shadow-2xl hover:shadow-green-300"
>
        <PlayCircle className="mr-2 h-5 w-5" />
        Watch Full Journey on YouTube
      </a>
    </div>

  </div>
</section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-20">
  <div className="container mx-auto px-4 max-w-7xl">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-green-500">
      Testimonials
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="group p-8 flex flex-col justify-between 
          bg-white rounded-2xl shadow-md border border-green-100
          transition-all duration-300 transform
          hover:-translate-y-3 hover:bg-green-500 
          hover:shadow-2xl hover:shadow-green-400"
        >
          {/* Quote */}
          <div className="mb-6 text-lg italic text-gray-700 relative 
          transition-all duration-300 group-hover:text-white">
            
            <Quote className="absolute -top-4 -left-4 h-10 w-10 
            text-green-300 transition-all duration-300 
            group-hover:text-white" />

            <span className="relative z-10">
              {"“"}
              {testimonial.quote}
              {"”"}
            </span>
          </div>

          {/* Author */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 
            transition-all duration-300 group-hover:text-white">
              {testimonial.author}
            </h3>

            <p className="text-sm text-gray-600 
            transition-all duration-300 group-hover:text-green-100">
              {testimonial.role}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Button */}
    <div className="flex justify-center mt-14">
      <a
        href="#"
        className="px-8 py-3 border-2 border-green-500 text-green-500 
        font-semibold rounded-xl 
        transition-all duration-300
        hover:bg-green-500 hover:text-white 
        hover:shadow-lg hover:shadow-green-400"
      >
        Submit Your Testimonial
      </a>
    </div>

  </div>
</section>
      {/* Download Report */}
      <section className="w-full py-16 md:py-20  dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white dark:text-gray-100">
            Want to dive deeper into our impact?
          </h2>
          <a
            href="/impact-report.pdf"
            download
            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-lg"
          >
            Download Impact Report PDF
          </a>
        </div>
      </section>
    </main>
  );
}