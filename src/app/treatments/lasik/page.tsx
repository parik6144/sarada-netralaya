import { redirect } from 'next/navigation';

/** Old LASIK URL → Refractive Surgery */
export default function LasikRedirectPage() {
  redirect('/treatments/refractive');
}
