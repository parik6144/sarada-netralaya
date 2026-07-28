'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, Monitor, HeartPulse, PartyPopper } from 'lucide-react';

const categories = ['All', 'Hospital', 'Equipment', 'Surgery', 'Events'] as const;

const galleryItems = [
  { id: 1, category: 'Hospital', icon: Building2, label: 'Reception Area', color: 'from-brand-blue-light to-brand-blue' },
  { id: 2, category: 'Equipment', icon: Monitor, label: 'Operation Theatre', color: 'from-brand-red-light to-brand-red' },
  { id: 3, category: 'Surgery', icon: HeartPulse, label: 'Cataract Surgery', color: 'from-brand-blue to-brand-blue-dark' },
  { id: 4, category: 'Events', icon: PartyPopper, label: 'Eye Camp', color: 'from-brand-red to-brand-red-dark' },
  { id: 5, category: 'Hospital', icon: Building2, label: 'Consultation Room', color: 'from-brand-blue-dark to-brand-blue' },
  { id: 6, category: 'Equipment', icon: Monitor, label: 'Diagnostic Lab', color: 'from-brand-red to-brand-blue' },
];

export default function GallerySection() {
  const [active, setActive] = useState<string>('All');
  const filtered = active === 'All' ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-2">Our Facility</p>
          <h2 className="font-[var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
            Hospital Gallery
          </h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mb-6" />
        </div>
        <Tabs defaultValue="All" onValueChange={setActive} className="mb-8">
          <TabsList className="mx-auto flex w-fit bg-white p-1 rounded-full shadow-sm border border-gray-100">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="rounded-full px-4 py-1.5 text-sm font-medium data-[state=active]:bg-brand-red data-[state=active]:text-white"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative h-56 rounded-xl overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-300 group-hover:scale-110`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-3">
                <item.icon className="h-12 w-12 opacity-80" />
                <span className="font-[var(--font-montserrat)] font-bold text-lg">{item.label}</span>
                <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
