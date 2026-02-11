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
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-br from-green-600 to-emerald-800 text-white text-center shadow-lg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Impact & Gallery
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-green-100 mb-8">{"Har ek dana, ek kahani hai."}</p>
          <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto">
            At NayaVayapar, we don't measure success in profits — we measure it in smiles, savings, and self-respect of
            every farmer we work with.
          </p>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section className="w-full py-16 bg-white">
  <div className="container mx-auto px-4 max-w-7xl text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-12">
      Why Choose NayaVyapar?
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      {/* Item 1 */}
      <div className="flex flex-col items-center">
        <Shield className="h-12 w-12 mb-4 text-green-600" />
        <h3 className="font-semibold text-lg mb-2">Technology-Driven Tracking & Visibility</h3>
        <p className="text-sm">
          Real-time tracking, instant updates, and smart dashboard for smooth operations.
        </p>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-center">
        <TrendingUp className="h-12 w-12 mb-4 text-green-600" />
        <h3 className="font-semibold text-lg mb-2">Reliable & Trustworthy Services</h3>
        <p className="text-sm">
          Verified partners ensure safe handling and on-time delivery.
        </p>
      </div>

      {/* Item 3 */}
      <div className="flex flex-col items-center">
        <Play className="h-12 w-12 mb-4 text-green-600" />
        <h3 className="font-semibold text-lg mb-2">Easy & Hassle-Free Logistics Management</h3>
        <p className="text-sm">
          Simple tools to plan, book, and manage shipments in a few clicks.
        </p>
      </div>

      {/* Item 4 */}
      <div className="flex flex-col items-center">
        <Lightbulb className="h-12 w-12 mb-4 text-green-600" />
        <h3 className="font-semibold text-lg mb-2">Scalable for Every Need</h3>
        <p className="text-sm">
          Flexible solutions that grow with your business.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Faces of the Revolution (Photo Gallery) */}
      <section className="w-full py-16 md:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
            Faces of the Revolution
          </h2>
          <p className="text-xl  text-center mb-12">{"“Behind every seed, there is a story.”"}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-base font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a href="#" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors">
              See All Stories
            </a>
            <a href="#" className="px-6 py-3 border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors flex items-center">
              <Upload className="mr-2 h-5 w-5" />
              Upload Your Story
            </a>
          </div>
        </div>
      </section>

      {/* Video Snippets */}
      <section className="w-full py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Video Snippets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" // Placeholder YouTube embed
                title="Field Visits"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" // Placeholder YouTube embed
                title="Farmer Interviews"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" // Placeholder YouTube embed
                title="Makhana Harvesting & Popping"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" // Placeholder YouTube embed
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
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Full Journey on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-6 text-xl italic  dark:text-gray-300 relative">
                  <Quote className="absolute -top-4 -left-4 h-10 w-10 text-green-300 dark:text-green-700/30" />
                  <span className="relative z-10">
                    {"“"}
                    {testimonial.quote}
                    {"”"}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    {testimonial.author}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <a href="#" className="px-6 py-3 border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors">
              Submit Your Testimonial
            </a>
          </div>
        </div>
      </section>

      {/* Download Report */}
      <section className="w-full py-16 md:py-20 bg-white dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
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