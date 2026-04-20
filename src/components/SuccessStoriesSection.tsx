"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

export function SuccessStoriesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".story-card",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out",
          scrollTrigger: {
            trigger: ".stories-grid",
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const stories = [
    {
      name: "Aman's Journey",
      role: "Resident for 3 Years",
      text: "When Aman joined us, he struggled with basic social interaction. Today, through consistent therapy, he leads our morning art sessions with a smile that lights up the room.",
      image: "/images/activities_2.png"
    },
    {
      name: "Rahul's Progress",
      role: "Rehabilitation Success",
      text: "Rahul's cognitive abilities have improved by 40% since starting our structured routine. His family now sees a version of him that is confident and engaged.",
      image: "/images/therapy_session.png"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Impact in Action
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-text mb-6">
            Real Success Stories
          </h2>
          <p className="text-lg text-secondary-text leading-relaxed">
            Every breakthrough is a victory. These are the stories of courage and growth from our residents at Parmarth Trust.
          </p>
        </div>

        <div className="stories-grid grid grid-cols-1 md:grid-cols-2 gap-12">
          {stories.map((story, idx) => (
            <div key={idx} className="story-card group flex flex-col md:flex-row bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                <Image src={story.image} alt={story.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="w-full md:w-3/5 p-10 flex flex-col justify-center relative">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
                <h3 className="font-serif text-2xl font-bold text-primary-text mb-2">{story.name}</h3>
                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">{story.role}</span>
                <p className="text-secondary-text leading-relaxed italic">"{story.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Group Banner Footer */}
      <div className="mt-24 relative w-full h-[200px] md:h-[300px] lg:h-[380px] overflow-hidden">
          <Image 
          src="/images/group.png" 
          alt="Parmarth Trust Volunteers and Residents" 
          fill 
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
