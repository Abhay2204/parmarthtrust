"use client";

import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ActionFormsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-header",
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-header",
            start: "top 85%",
          }
        }
      );

      gsap.fromTo(".contact-panel",
        { x: -40, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(".form-panel",
        { x: 40, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2,
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 75%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="action" className="py-24 px-4 bg-background overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="contact-header text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Take Action
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-text mb-6 leading-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-secondary-text leading-relaxed">
            Whether you want to sponsor meals, volunteer your time, or enroll a resident, our office is ready to guide you through the process securely and transparently.
          </p>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Contact Details Panel */}
          <div className="contact-panel lg:col-span-2 bg-white p-1 rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-gray-100 group transition-all duration-500 hover:shadow-primary/10">
            {/* Image Section */}
            <div className="relative w-full h-80 overflow-hidden">
               <Image 
                src="/images/children.png" 
                alt="Children at Parmarth Trust" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>
            
            <div className="p-8 pt-4">
              <div className="mb-6 flex flex-col gap-2">
                <h3 className="font-serif text-3xl font-bold text-primary-text">Reach Out Connect</h3>
                <div className="flex items-center gap-2 text-secondary-text text-[10px] bg-gray-50 px-3 py-2 rounded-full border border-gray-100 w-fit">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  <span className="font-bold uppercase tracking-tight">Govt. Registered NGO: Guj/12399/RJT</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <a href="https://maps.google.com/?q=Rajkot+Gujarat" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group/item">
                  <div className="p-3 bg-primary/5 rounded-xl shrink-0 border border-primary/10 transition-colors group-hover/item:bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-primary-text flex items-center gap-2">
                      Visit Our Campus
                      <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase">Open Map</span>
                    </h4>
                    <p className="text-secondary-text leading-relaxed text-sm">
                      123 Trust Lane, Highway Road,<br/>Rajkot, Gujarat 360001
                    </p>
                    <p className="text-primary font-bold text-[11px] mt-2 uppercase tracking-tighter">Visiting Hours: 10:00 AM - 5:00 PM</p>
                  </div>
                </a>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg active:scale-95">
                    <Phone size={16} />
                    Direct Call
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg active:scale-95">
                    <Image src="https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg" alt="WA" width={16} height={16} className="filter brightness-0 invert" />
                    WhatsApp
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 rounded-xl shrink-0 border border-primary/10 transition-colors group-hover:bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-primary-text">Email Desk</h4>
                    <p className="text-secondary-text text-sm">info@parmarthtrust.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="form-panel lg:col-span-3 bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-primary/5">
            <h3 className="font-serif text-3xl font-bold text-primary-text mb-2">Send an Enquiry</h3>
            <p className="text-secondary-text mb-8">Fill the form below and our team will get back to you within 24 hours.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary-text mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50/50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary-text mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50/50" placeholder="+91 99999 99999" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-primary-text mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50/50" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary-text mb-2">Purpose of Enquiry</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50/50 text-secondary-text appearance-none">
                  <option>General Inquiry</option>
                  <option>Admission & Care</option>
                  <option>Volunteering Opportunities</option>
                  <option>Sponsoring Provisions/Meals</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-primary-text mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50/50 resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-accent hover:bg-[#c94d25] text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-xl hover:-translate-y-1 transform active:scale-95">
                Submit Enquiry Form
              </button>
            </form>
          </div>
        </div>

        {/* Full-Width Map Integration */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl transition-all duration-700 hover:shadow-primary/5">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68202029765!2d70.73059438965612!3d22.273186153724395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac0c3bc63%3A0xe142e88a08605330!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1713600000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
          ></iframe>
          <div className="absolute top-6 left-6 pointer-events-none">
            <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/40">
              <span className="text-secondary-text font-bold text-xs uppercase tracking-widest">Institution Location</span>
              <h4 className="text-primary-text font-bold text-lg font-serif">Parmarth Trust Rajkot</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
