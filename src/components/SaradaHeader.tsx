'use client';

import { useState, useEffect, useCallback } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, Phone, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Diseases', href: '#diseases' },
  { label: 'Technology', href: '#technology' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

interface SaradaHeaderProps {
  onBookAppointment: () => void;
}

export default function SaradaHeader({ onBookAppointment }: SaradaHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <header
      id="home"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      {/* Top bar - light with red accent */}
      <div className="bg-brand-red text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3" />
            <span>Emergency: </span>
            <a href="tel:7091090014" className="font-semibold hover:underline">7091090014</a>
            <span className="hidden sm:inline text-white/60 mx-2">|</span>
            <a href="tel:7091090016" className="hidden sm:inline font-semibold hover:underline">7091090016</a>
          </div>
          <Badge variant="outline" className="bg-white/20 border-white/40 text-white text-[10px] px-2 py-0 hover:bg-white/30">
            24/7 Emergency Eye Care
          </Badge>
        </div>
      </div>
      {/* Main nav bar - white */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
        <a href="#home" className="flex items-center shrink-0" onClick={() => handleNavClick('#home')}>
          {/* Actual SARADA logo image */}
          <img
            src="/sarada-logo.png"
            alt="SARADA Netralaya & Maternity"
            className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => handleNavClick(link.href)} className="px-2.5 py-1.5 text-sm font-medium text-brand-dark hover:text-brand-red transition-colors rounded-md hover:bg-brand-red-50">
              {link.label}
            </button>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Button onClick={onBookAppointment} className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-5 rounded-full text-sm">
            Book Appointment
          </Button>
        </div>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-brand-dark">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="bg-brand-red p-5 flex items-center justify-between">
              <img src="/sarada-logo.png" alt="SARADA" className="h-10 w-auto object-contain brightness-0 invert" />
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} className="text-white">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleNavClick(link.href)} className="text-left px-4 py-3 text-sm font-medium text-brand-dark hover:text-brand-red hover:bg-brand-red-50 rounded-lg transition-colors">
                  {link.label}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t">
                <Button onClick={() => { setMobileOpen(false); onBookAppointment(); }} className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-full">
                  Book Appointment
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
