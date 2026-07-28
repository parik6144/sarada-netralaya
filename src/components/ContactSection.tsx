'use client';

import { useState, FormEvent } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const subjects = ['General Inquiry', 'Appointment', 'Billing', 'Feedback', 'Complaint'];

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '33, Swastik Ambika Tower, Near BDFC Bank, New Baradwari, Jamshedpur' },
  { icon: Phone, label: 'Phone', value: '7091090014, 7091090016' },
  { icon: Mail, label: 'Email', value: 'info@saradanetralaya.com' },
  { icon: Clock, label: 'Working Hours', value: 'Mon-Sat 9AM-8PM, Sun 10AM-2PM' },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contacts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (res.ok) { setSubmitted(true); setForm({ name: '', phone: '', email: '', subject: '', message: '' }); setTimeout(() => setSubmitted(false), 4000); }
    } catch { /* ignore */ } finally { setLoading(false); }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-2">Get in Touch</p>
          <h2 className="font-[var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-brand-black mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mb-6" />
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-brand-gray-light rounded-xl p-6 shadow-sm border border-gray-100">
            {submitted && <div className="mb-4 flex items-center gap-2 bg-green-50 text-green-700 p-3 rounded-lg text-sm font-medium"><CheckCircle className="h-4 w-4" /> Message sent successfully!</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><Label htmlFor="c-name" className="text-brand-black">Name *</Label><Input id="c-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="mt-1" /></div>
              <div><Label htmlFor="c-phone" className="text-brand-black">Phone *</Label><Input id="c-phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" className="mt-1" /></div>
              <div><Label htmlFor="c-email" className="text-brand-black">Email</Label><Input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your email address" className="mt-1" /></div>
              <div>
                <Label className="text-brand-black">Subject</Label>
                <Select value={form.subject} onValueChange={(v) => setForm({ ...form, subject: v })}>
                  <SelectTrigger className="mt-1"><SelectValue placeholder="Select a subject" /></SelectTrigger>
                  <SelectContent>{subjects.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label htmlFor="c-msg" className="text-brand-black">Message *</Label><Textarea id="c-msg" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" className="mt-1" /></div>
              <Button type="submit" disabled={loading} className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-lg">{loading ? 'Sending...' : 'Send Message'}</Button>
            </form>
          </div>
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <Card key={item.label} className="bg-brand-gray-light border border-gray-100 shadow-sm">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center shrink-0"><item.icon className="h-5 w-5 text-brand-red" /></div>
                  <div><p className="font-[var(--font-montserrat)] font-bold text-brand-black text-sm">{item.label}</p><p className="text-brand-gray text-sm mt-0.5">{item.value}</p></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}