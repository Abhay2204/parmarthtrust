"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HandHeart, Smartphone, Gift, Users, HeartHandshake, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function DonatePage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Support Our Cause</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Your contribution directly provides housing, medical care, and specialized therapy for mentally challenged individuals.
            </p>
        </div>
      </section>

      {/* Impact Mapping */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-primary-text text-center mb-16">Where Your Funds Go</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 text-center bg-gray-50 rounded-[2rem] border border-gray-100">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Smartphone className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary-text font-serif">Education & Therapy</h3>
                    <p className="text-secondary-text">Funding specialized teachers and therapists for daily cognitive and vocational training sessions.</p>
                </div>
                <div className="p-8 text-center bg-gray-50 rounded-[2rem] border border-gray-100">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Gift className="text-accent w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary-text font-serif">Provisions & Meals</h3>
                    <p className="text-secondary-text">Ensuring 100% organic, nutritious meals and clean drinking water for every resident.</p>
                </div>
                <div className="p-8 text-center bg-gray-50 rounded-[2rem] border border-gray-100">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Users className="text-green-600 w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary-text font-serif">Medical Well-being</h3>
                    <p className="text-secondary-text">24/7 nursing care, psychiatric consultation, and emergency medical support.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Donation Methods (QR Code) */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 p-12 bg-white rounded-[3rem] shadow-2xl border border-gray-100 text-center flex flex-col items-center">
                <h3 className="text-3xl font-bold text-primary-text font-serif mb-4">Scan to Support</h3>
                <p className="text-secondary-text mb-8">Quickly donate via GPay, PhonePe, or any UPI app.</p>
                <div className="relative w-64 h-64 bg-gray-100 rounded-3xl p-4 border-4 border-primary">
                    {/* Placeholder for QR Code */}
                    <Image src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=ParmarthTrust" alt="QR Code" width={250} height={250} className="w-full h-full opacity-50 grayscale" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <CheckCircle className="text-primary w-12 h-12" />
                    </div>
                    <span className="absolute -bottom-4 bg-primary text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Verified Merchant</span>
                </div>
                <div className="mt-8 flex gap-4">
                    <span className="font-bold text-primary-text">UPI ID: permath.trust@bank</span>
                </div>
            </div>
            <div className="lg:w-1/2">
                <h2 className="font-serif text-[42px] leading-tight font-bold text-primary-text mb-8">Other Ways to Help</h2>
                <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                            <HeartHandshake className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-primary-text mb-2 font-serif">Sponsor a Day</h4>
                            <p className="text-secondary-text">Sponsor the entire meal regimen for our residents for a single day in honor of a loved one.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                            <Gift className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-primary-text mb-2 font-serif">In-kind Donations</h4>
                            <p className="text-secondary-text">We accept donations of clothing, fans, medical supplies, and more. Contact us to schedule a drop-off.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
