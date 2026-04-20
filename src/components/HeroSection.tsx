"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import gsap from "gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger text and buttons on left
      gsap.fromTo(".hero-element", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[900px] flex items-center pt-[100px] overflow-hidden">
      
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rehab_care_hero.png"
          alt="Parmarth Trust Rehab & Care"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-4 md:px-8 w-full h-full flex flex-col justify-center">
        
        {/* Left half container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center items-center">
          {/* Left Side White Translucent Mask (Clean White Card) */}
          <div className="hero-element bg-white/90 backdrop-blur-md p-8 md:p-14 lg:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-w-[620px] w-full">
            <h1 className="hero-element font-serif text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] text-primary-text font-bold leading-[1.15] md:leading-[1.1] mb-6">
              Giving Care, Dignity, and a Home to Every Special Soul
            </h1>
            
            <p className="hero-element text-[16px] md:text-[19px] text-secondary-text mb-8 md:mb-10 leading-relaxed font-medium">
              Supporting mentally challenged individuals with safe shelter, care, and meaningful life experiences in our dedicated Rajkot facility.
            </p>
            
            <div className="hero-element flex flex-col sm:flex-row gap-5 mb-12">
              <Link 
                href="/donate" 
                className="bg-primary hover:bg-[#0a3554] text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl text-center active:scale-95 whitespace-nowrap"
              >
                Donate Now
              </Link>
              <Link 
                href="/#action" 
                className="bg-white border-2 border-primary/10 hover:border-primary/30 text-primary px-10 py-4 rounded-xl font-bold transition-all text-center active:scale-95 whitespace-nowrap"
              >
                Become a Volunteer
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="hero-element flex flex-wrap gap-y-3 gap-x-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-primary-text font-bold text-[11px] tracking-wider uppercase">100+ Lives Supported</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-primary-text font-bold text-[11px] tracking-wider uppercase">Safe Residential Care</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
