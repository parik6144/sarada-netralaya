'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarDays, CheckCircle, Loader2 } from 'lucide-react';

interface AppointmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AppointmentModal({ open, onOpenChange }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    doctor: '',
    department: '',
    preferredDate: '',
    preferredTime: '',
    symptoms: '',
    hasInsurance: false,
    insuranceName: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onOpenChange(false);
          setFormData({
            patientName: '', phone: '', email: '', doctor: '',
            department: '', preferredDate: '', preferredTime: '',
            symptoms: '', hasInsurance: false, insuranceName: '',
          });
        }, 2500);
      } else {
        setError('Failed to book appointment. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold text-navy">
            <CalendarDays className="h-5 w-5 text-medical-red" />
            Book an Appointment
          </DialogTitle>
          <DialogDescription>
            Fill in the details below and we will confirm your appointment.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="flex flex-col items-center py-8 gap-3">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <p className="text-lg font-semibold text-green-700">Appointment Booked Successfully!</p>
            <p className="text-sm text-gray-500">We will contact you shortly to confirm.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Patient Name *</label>
                <Input
                  required
                  placeholder="Enter your full name"
                  value={formData.patientName}
                  onChange={(e) => handleChange('patientName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Phone *</label>
                <Input
                  required
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Preferred Doctor *</label>
                <Select value={formData.doctor} onValueChange={(v) => handleChange('doctor', v)}>
                  <SelectTrigger><SelectValue placeholder="Select doctor" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dr. Nitin G. Dhira">Dr. Nitin G. Dhira</SelectItem>
                    <SelectItem value="Dr. Nitish Bhardwaj">Dr. Nitish Bhardwaj</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Department *</label>
                <Select value={formData.department} onValueChange={(v) => handleChange('department', v)}>
                  <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Cataract">Cataract</SelectItem>
                    <SelectItem value="LASIK">LASIK</SelectItem>
                    <SelectItem value="Glaucoma">Glaucoma</SelectItem>
                    <SelectItem value="Retina">Retina</SelectItem>
                    <SelectItem value="Cornea">Cornea</SelectItem>
                    <SelectItem value="Dry Eye">Dry Eye</SelectItem>
                    <SelectItem value="Pediatric Eye Care">Pediatric Eye Care</SelectItem>
                    <SelectItem value="Diabetic Eye Care">Diabetic Eye Care</SelectItem>
                    <SelectItem value="General">General Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Preferred Date *</label>
                <Input
                  required
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleChange('preferredDate', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Preferred Time *</label>
                <Select value={formData.preferredTime} onValueChange={(v) => handleChange('preferredTime', v)}>
                  <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00 AM">9:00 AM</SelectItem>
                    <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                    <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                    <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                    <SelectItem value="02:00 PM">2:00 PM</SelectItem>
                    <SelectItem value="03:00 PM">3:00 PM</SelectItem>
                    <SelectItem value="04:00 PM">4:00 PM</SelectItem>
                    <SelectItem value="05:00 PM">5:00 PM</SelectItem>
                    <SelectItem value="06:00 PM">6:00 PM</SelectItem>
                    <SelectItem value="07:00 PM">7:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Symptoms / Reason for Visit</label>
              <Textarea
                placeholder="Briefly describe your symptoms or reason for visit..."
                rows={3}
                value={formData.symptoms}
                onChange={(e) => handleChange('symptoms', e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="insurance"
                checked={formData.hasInsurance}
                onChange={(e) => handleChange('hasInsurance', e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-medical-red focus:ring-medical-red"
              />
              <label htmlFor="insurance" className="text-sm font-medium text-gray-700">
                I have health insurance
              </label>
            </div>

            {formData.hasInsurance && (
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Insurance Provider Name</label>
                <Input
                  placeholder="e.g. Star Health, HDFC ERGO"
                  value={formData.insuranceName}
                  onChange={(e) => handleChange('insuranceName', e.target.value)}
                />
              </div>
            )}

            {error && <p className="text-sm text-red-600">{error}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-medical-red hover:bg-red-700 text-white rounded-full py-3 text-base font-semibold"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              {loading ? 'Booking...' : 'Book Appointment'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
