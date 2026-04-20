"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ParallaxReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".impact-text",
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out",
          scrollTrigger: {
            trigger: ".impact-text",
            start: "top 85%",
          }
        }
      );

      gsap.fromTo(".impact-box",
        { scale: 0.95, opacity: 0 },
        { 
          scale: 1, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.4,
          scrollTrigger: {
            trigger: ".impact-text",
            start: "top 85%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative py-32 px-4 shadow-inner"
      style={{
        backgroundImage: 'url("/images/children_eating.png")',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-primary/80 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-[55%]">
          <h2 className="impact-text font-serif text-4xl md:text-5xl lg:text-6xl font-bold !text-white mb-6 leading-tight drop-shadow-md">
            Help Us Write The Next Chapter of Hope.
          </h2>
          <p className="impact-text text-xl !text-white font-medium leading-relaxed">
            Every day, we provide medication, therapy, and most importantly, love. Your support directly influences the lives of over 50 residents currently in our care.
          </p>
        </div>
        <div className="impact-box md:w-[40%] flex flex-col items-start gap-4 bg-white/20 p-10 rounded-3xl border border-white/30 shadow-2xl backdrop-blur-md">
          <h3 className="text-3xl font-bold !text-white mb-2 font-serif">Partner With Us</h3>
          <p className="!text-white mb-8 font-medium leading-relaxed">Whether through volunteering or providing provisions, your role is crucial to their daily smiles.</p>
          <Link 
            href="/#action" 
            className="w-full text-center bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 hover:shadow-xl flex justify-center items-center gap-2 shadow-lg"
          >
            Get Involved Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
