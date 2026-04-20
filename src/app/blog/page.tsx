import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "How Specialized Care Transforms Lives",
      excerpt: "Understanding the importance of a properly structured daily routine for mentally challenged individuals and how our center implements these standards.",
      date: "Oct 12, 2026",
      author: "Trust Admin",
      image: "/images/blog_cover.png" // assuming copied or similar
    },
    {
      title: "A Day Trip to the Statue of Unity",
      excerpt: "Last month, we took our residents on an exposure trip to one of India's most iconic landmarks, fostering social inclusion and joy.",
      date: "Sep 28, 2026",
      author: "Caregiver Team",
      image: "/images/care_activities.png"
    },
    {
      title: "The Role of Diet in Cognitive Preservation",
      excerpt: "Proper nutrition plays a critical role in mental well-being. Here is an inside look at how our kitchen designs daily menus for our residents.",
      date: "Aug 15, 2026",
      author: "Dr. Sharma",
      image: "/images/care_residential.png"
    }
  ];

  return (
    <main className="relative flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-40 pb-32 px-4 max-w-7xl mx-auto w-full">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-center text-primary-text">
          News & Updates
        </h1>
        <p className="text-xl text-secondary-text text-center max-w-2xl mx-auto mb-20 leading-relaxed font-medium">
          Read stories of impact, updates on our community trips, and professional insights into providing care for mentally challenged adults.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] group flex flex-col">
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold">
                   Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
