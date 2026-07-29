'use client';

import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Doctors', href: '#doctors' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Diseases', href: '#diseases' },
  { label: 'Contact Us', href: '#contact' },
];

const services = ['Cataract Surgery', 'Refractive Surgery', 'Glaucoma', 'Medical Retina Services', 'Cornea', 'Dry Eye', 'Pediatric', 'Diabetic Eye'];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src="/sarada-logo.png" alt="SARADA Netralaya & Maternity" className="h-14 w-auto object-contain brightness-0 invert mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Jamshedpur&apos;s leading eye care center dedicated to providing world-class ophthalmology services with compassion and excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors">
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-montserrat)] font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}><a href={link.href} className="text-gray-400 hover:text-brand-red text-sm transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="font-[var(--font-montserrat)] font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}><span className="text-gray-400 text-sm">{s}</span></li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="font-[var(--font-montserrat)] font-bold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3"><MapPin className="h-4 w-4 text-brand-red shrink-0 mt-0.5" /><span className="text-gray-400 text-sm">33, Swastik Ambika Tower, Near BDFC Bank, New Baradwari, Jamshedpur</span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-red shrink-0" /><span className="text-gray-400 text-sm">7091090014, 7091090016</span></div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-red shrink-0" /><span className="text-gray-400 text-sm">info@saradanetralaya.com</span></div>
              <div className="flex items-start gap-3"><Clock className="h-4 w-4 text-brand-red shrink-0 mt-0.5" /><span className="text-gray-400 text-sm">Mon-Sat 9AM-8PM<br />Sun 10AM-2PM</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center">
          <p className="text-gray-500 text-sm">Copyright 2024 SARADA Netralaya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}