"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Sunrise, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function OurWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".work-image-1",
        { x: -50, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: ".work-images-container",
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(".work-image-2",
        { x: 50, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2,
          scrollTrigger: {
            trigger: ".work-images-container",
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(".work-text",
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: {
            trigger: ".work-content",
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="our-work" className="py-24 px-4 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Images Grid */}
          <div className="work-images-container lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="work-image-1 relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm mt-8">
              <Image 
                src="/images/activities_2.png" 
                alt="Therapy activities" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
            <div className="work-image-2 relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/images/social_trip.png" 
                alt="Social trip outside" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
          </div>

          {/* Content */}
          <div className="work-content lg:w-1/2">
            <span className="work-text text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
              Professional Care
            </span>
            <h2 className="work-text font-serif text-4xl md:text-5xl font-bold text-primary-text mb-6 leading-tight">
              Evidence-Based Activities & Structured Living
            </h2>
            <p className="work-text text-lg text-secondary-text mb-8 leading-relaxed font-medium">
              We implement professional regimes that ensure our residents aren&apos;t just housed, but actively nurtured. Through cognitive therapy, structured diets, and regular assessments, we document vast improvements in well-being.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="work-text flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <Sunrise className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary-text mb-1">Empowering Routines</h4>
                  <p className="text-secondary-text">From morning exercises to interactive art sessions, every hour is optimized.</p>
                </div>
              </div>
              
              <div className="work-text flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
                  <BedDouble className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary-text mb-1">Dignified Housing</h4>
                  <p className="text-secondary-text">Clean, temperature-regulated facilities monitored around the clock by dedicated nurses.</p>
                </div>
              </div>
            </div>

            <Link 
              href="/our-work" 
              className="work-text inline-flex items-center gap-2 font-bold text-primary hover:text-[#1d72a3] transition-colors uppercase tracking-wider group"
            >
              Learn More About Our Methodology
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
