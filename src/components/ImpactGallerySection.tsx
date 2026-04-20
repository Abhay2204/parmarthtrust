"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ImpactGallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".gallery-header",
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".gallery-header",
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(".gallery-stat",
        { scale: 0.9, opacity: 0 },
        { 
          scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".gallery-stats",
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(".gallery-img",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 75%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const images = [
    "/images/care_hero.png",
    "/images/care_residential.png",
    "/images/care_activities.png",
  ];

  return (
    <section ref={containerRef} id="gallery" className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="gallery-header">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
              Smiles & Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-text mb-6">
              Gallery & Impact
            </h2>
            <p className="text-lg text-secondary-text max-w-2xl leading-relaxed">
              Every day at Parmarth Trust is filled with small victories, joyful moments, and profound connections. Glimpse into the daily lives of the amazing individuals we serve.
            </p>
          </div>
          <div className="gallery-stats flex gap-12 text-primary-text">
            <div className="gallery-stat">
              <div className="text-4xl font-bold text-primary font-serif mb-1">Hundreds</div>
              <div className="text-sm text-secondary-text uppercase tracking-widest font-bold">Of Lives Touched</div>
            </div>
            <div className="gallery-stat">
              <div className="text-4xl font-bold text-accent font-serif mb-1">24/7</div>
              <div className="text-sm text-secondary-text uppercase tracking-widest font-bold">Dedicated Care</div>
            </div>
          </div>
        </div>

        <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="gallery-img relative h-[400px] lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden shadow-sm border border-gray-200">
            <Image src={images[1]} alt="Gallery main" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
          </div>
          <div className="gallery-img relative h-[400px] lg:col-span-2 rounded-3xl overflow-hidden shadow-sm border border-gray-200">
            <Image src={images[2]} alt="Gallery side" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/gallery" className="flex items-center gap-2 bg-primary hover:bg-[#1d72a3] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-md">
            View Full Gallery
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
