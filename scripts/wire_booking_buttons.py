from pathlib import Path
import re

root = Path(r"c:\xampp\htdocs\sarada-luxury-website")

files = [
    "src/components/luxury/WhyChooseSection.tsx",
    "src/components/luxury/HomeSurgeonsSection.tsx",
    "src/components/luxury/TreatmentsHubClient.tsx",
    "src/components/luxury/TechnologyPageClient.tsx",
    "src/components/luxury/TreatmentSmartStory.tsx",
    "src/components/luxury/GlaucomaShowcase.tsx",
    "src/components/luxury/DoctorShowcase.tsx",
    "src/app/doctors/page.tsx",
    "src/app/faq/page.tsx",
    "src/app/treatments/[slug]/page.tsx",
    "src/components/luxury/LuxuryFooter.tsx",
]

# Replace <Link ... href="/appointment" className="...">text</Link>
# and <a ... href="/appointment" className="...">text</a>
link_re = re.compile(
    r'<(Link|a)([^>]*?)href="/appointment"([^>]*?)>(.*?)</\1>',
    re.DOTALL,
)

for rel in files:
    f = root / rel
    if not f.exists():
        print("missing", rel)
        continue
    text = f.read_text(encoding="utf-8")
    if 'href="/appointment"' not in text:
        print("skip", rel)
        continue

    def repl(m):
        before, after, inner = m.group(2), m.group(3), m.group(4)
        attrs = (before + after).strip()
        # extract className
        cm = re.search(r'className="([^"]*)"', attrs)
        cls = cm.group(1) if cm else ""
        return f'<BookAppointmentButton className="{cls}">{inner.strip()}</BookAppointmentButton>'

    new = link_re.sub(repl, text)
    if "BookAppointmentButton" not in new and "BookAppointmentButton" in text:
        pass
    if "BookAppointmentButton" in new and "from '@/components/luxury/BookAppointmentButton'" not in new:
        if new.startswith("'use client'"):
            new = new.replace(
                "'use client';\n",
                "'use client';\n\nimport BookAppointmentButton from '@/components/luxury/BookAppointmentButton';\n",
                1,
            )
        else:
            new = "import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';\n" + new

    # footer quick link Appointment
    if "LuxuryFooter" in rel or rel.endswith("LuxuryFooter.tsx"):
        new = new.replace(
            "{ label: 'Appointment', href: '/appointment' },",
            "{ label: 'Appointment', href: '#book-appointment' },",
        )

    f.write_text(new, encoding="utf-8")
    print("ok", rel, "remaining", new.count('href="/appointment"'))
