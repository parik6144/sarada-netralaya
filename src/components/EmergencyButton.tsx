'use client';

import { Phone } from 'lucide-react';

export default function EmergencyButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1.5">
      <a
        href="tel:+917091090014"
        className="relative w-14 h-14 bg-medical-red rounded-full flex items-center justify-center shadow-lg shadow-medical-red/40 hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-medical-red animate-pulse-ring" />
        <Phone className="h-6 w-6 text-white relative z-10" />
      </a>
      <span className="text-[10px] font-semibold text-medical-red bg-white px-2 py-0.5 rounded-full shadow-sm">Emergency Call</span>
    </div>
  );
}
