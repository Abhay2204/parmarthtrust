"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Target, Heart, ShieldCheck, Milestone } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Title Header */}
      <section className="pt-40 pb-20 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Identity</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-text mb-6">
                About Parmarth Trust
            </h1>
            <p className="text-xl text-secondary-text max-w-3xl mx-auto leading-relaxed">
                A journey of compassion that began with a single mission: to provide every individual with the dignity and care they deserve.
            </p>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-primary/5 rounded-[2.5rem] border border-primary/10">
                <Target className="w-12 h-12 text-primary mb-6" />
                <h2 className="font-serif text-3xl font-bold text-primary-text mb-4">Our Mission</h2>
                <p className="text-secondary-text text-lg leading-relaxed">
                    To establish a world-class rehabilitation environment for mentally challenged individuals, focusing on clinical care, social integration, and holistic mental well-being.
                </p>
            </div>
            <div className="p-12 bg-accent/5 rounded-[2.5rem] border border-accent/10">
                <Heart className="w-12 h-12 text-accent mb-6" />
                <h2 className="font-serif text-3xl font-bold text-primary-text mb-4">Our Vision</h2>
                <p className="text-secondary-text text-lg leading-relaxed">
                    To become a beacon of hope in Gujarat, where no individual is left behind due to mental disabilities, fostering a society that treats every 'special soul' with profound respect.
                </p>
            </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image src="/images/therapy_session.png" alt="Founder Story" fill className="object-cover" />
            </div>
            <div className="lg:w-1/2">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Beginning</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-text mb-8">Founder's Story</h2>
                <p className="text-lg text-secondary-text mb-6 leading-relaxed">
                    Parmarth Trust was founded with the conviction that mental disability should not mean a life of isolation. Seeing the lack of specialized residential care in Rajkot, our founders took the initiative to build more than just a shelter—they built a home.
                </p>
                <p className="text-lg text-secondary-text mb-8 leading-relaxed">
                    Today, we stand as a registered charitable trust, managed by a team of dedicated doctors, therapists, and volunteers who treat every resident as their own family.
                </p>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                        <Milestone className="text-primary w-6 h-6" />
                        <span className="font-bold text-primary-text">Founded 2000s</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="text-green-600 w-6 h-6" />
                        <span className="font-bold text-primary-text">ISO Certified</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-primary-text mb-8">Transparency & Reports</h2>
            <p className="text-lg text-secondary-text mb-12">
                We believe in complete accountability. Our financial reports and impact audits are conducted annually to ensure your support is utilized with 100% efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
                <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all active:scale-95">Annual Report 2023.pdf</button>
                <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all active:scale-95">Tax Exemption Info</button>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
