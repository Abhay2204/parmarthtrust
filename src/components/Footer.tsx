import Link from "next/link";
import Image from "next/image";
import { HandHeart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-primary/20 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-white/20 shadow-lg">
                <Image
                  src="/images/logo.jpg"
                  alt="Parmarth Trust Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight !text-white leading-tight">
                  Parmarth Trust
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] !text-white font-bold opacity-80">
                  Care & Rehabilitation
                </span>
              </div>
            </Link>
            <p className="text-white leading-relaxed mb-6 font-medium">
              Registered NGO providing essential care, dignity, and rehabilitation to mentally challenged adults in Rajkot, Gujarat.
            </p>
            <div className="flex items-center gap-4 text-white">
              <a href="#" className="hover:text-accent transition-colors font-bold text-sm tracking-widest uppercase">FB</a>
              <a href="#" className="hover:text-accent transition-colors font-bold text-sm tracking-widest uppercase">IG</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 !text-white">Quick Links</h4>
            <ul className="space-y-4 !text-white font-medium">
              <li><Link href="/about" className="hover:text-accent transition-colors !text-white">About Us</Link></li>
              <li><Link href="/our-work" className="hover:text-accent transition-colors !text-white">Our Detailed Work</Link></li>
              <li><Link href="/donate" className="hover:text-accent transition-colors !text-white">Support & Donate</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors !text-white">Impact Gallery</Link></li>
            </ul>
          </div>

          {/* Legal/Official */}
          <div>
            <h4 className="font-bold text-lg mb-6 !text-white">Official & Legal</h4>
            <ul className="space-y-4 !text-white font-medium">
              <li className="!text-white">Govt. Registration: Guj/12399/RJT</li>
              <li><a href="#" className="hover:text-accent transition-colors !text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors !text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 !text-white">Reach Out</h4>
            <ul className="space-y-4 !text-white font-medium">
              <li className="flex items-start gap-3 !text-white">
                <MapPin className="w-5 h-5 shrink-0" />
                <span className="!text-white">123 Trust Lane, Highway Road, Rajkot, Gujarat 360001</span>
              </li>
              <li className="flex items-center gap-3 !text-white">
                <Phone className="w-5 h-5" />
                <span className="!text-white">(+91) 98765-43210</span>
              </li>
              <li className="flex items-center gap-3 !text-white">
                <Mail className="w-5 h-5" />
                <span className="!text-white">info@parmarthtrust.org</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 !text-white text-sm font-medium">
          <p className="!text-white">&copy; {new Date().getFullYear()} Parmarth Education and Charitable Trust. All rights reserved.</p>
          <p className="!text-white">Design and developed by <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-accent transition-colors font-serif !text-white">Nexaroha</a></p>
        </div>
      </div>
    </footer>
  );
}
