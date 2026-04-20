"use client";

import { useEffect, useRef } from "react";
import { Home, BrainCircuit, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Main header reveal
      gsap.fromTo(".about-header",
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-header",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Staggered Cards Reveal
      gsap.fromTo(".about-card",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-cards-container",
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const cards = [
    {
      icon: <Home className="w-8 h-8 text-white" />,
      title: "Safe Residential Care",
      desc: "Full-time living support, ensuring a highly supervised, safe, and hygienic environment for all individuals.",
      color: "bg-primary",
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-white" />,
      title: "Mental Wellbeing",
      desc: "Activities specifically designed for emotional balance and retaining vital cognitive functions.",
      color: "bg-accent",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Social Inclusion",
      desc: "Organized trips, park outings, and events to foster healthy community integration.",
      color: "bg-[#39B14D]", // Custom Green matched to user prompt
    },
  ];

  return (
    <section ref={containerRef} id="about" className="py-24 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="about-header text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Core Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-text mb-6">
            A Trusted Sanctuary for Special Needs
          </h2>
          <p className="text-lg text-secondary-text leading-relaxed">
            Parmarth Trust is a heavily monitored, professional care facility functioning as a reliable safe haven for adults in Gujarat. We provide comprehensive life support and deep emotional integration.
          </p>
        </div>

        <div className="about-cards-container grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="about-card bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 duration-300"
            >
              <div className={`w-14 h-14 ${card.color} rounded-xl flex items-center justify-center mb-6 shadow-sm`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary-text mb-3">
                {card.title}
              </h3>
              <p className="text-secondary-text leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
