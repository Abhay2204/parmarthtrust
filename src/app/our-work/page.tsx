import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HandHeart, Users, Waves } from "lucide-react";
import Image from "next/image";

export default function OurWork() {
  const details = [
    {
      title: "Round-the-clock Care",
      desc: "Our caregivers are trained to provide 24/7 assistance tailored for mentally challenged individuals.",
      icon: <HandHeart className="w-8 h-8 text-white" />
    },
    {
      title: "Physical & Cognitive Therapy",
      desc: "We focus on retaining and improving motor skills through dedicated daily exercises.",
      icon: <Waves className="w-8 h-8 text-white" />
    },
    {
      title: "Social Integration",
      desc: "Weekly events to keep our residents engaged with the wider community.",
      icon: <Users className="w-8 h-8 text-white" />
    }
  ];

  return (
    <main className="relative flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-40 pb-20 px-4 max-w-7xl mx-auto w-full">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-text mb-6 text-center">
          Our Detailed Work
        </h1>
        <p className="text-xl text-secondary-text text-center max-w-3xl mx-auto mb-20 leading-relaxed font-medium">
          Through years of dedication, we have built a multi-faceted approach to care that ensures every individual receives the attention and environment they need to thrive.
        </p>

        <div className="relative h-[400px] w-full rounded-[3rem] overflow-hidden mb-24 shadow-2xl">
          <Image src="/images/care_residential.png" alt="Care environment" fill className="object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {details.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-primary/30">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
