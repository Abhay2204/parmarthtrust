import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Gallery() {
  const allImages = [
    { src: "/images/care_hero.png", title: "Community Moments" },
    { src: "/images/care_residential.png", title: "Our Safe Home" },
    { src: "/images/care_activities.png", title: "Creative Time" },
    { src: "/images/parallax_bg.png", title: "Care & Support" },
    { src: "/images/activities_2.png", title: "Art & Crafts" },
    { src: "/images/social_trip.png", title: "Park Outings" },
    { src: "/images/therapy_session.png", title: "Physical Therapy" },
  ];

  return (
    <main className="relative flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-40 pb-32 px-4 max-w-7xl mx-auto w-full">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-center text-primary-text">
          Impact Gallery
        </h1>
        <p className="text-xl text-secondary-text text-center max-w-2xl mx-auto mb-20 leading-relaxed font-medium">
          Through an extensive collection of photographs, witness the dedication and joy captured within our care center walls.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((img, idx) => (
            <div key={idx} className="relative h-[350px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
              <Image src={img.src} alt={img.title} fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
