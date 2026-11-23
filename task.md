**Task: Add a Beautiful Visitor Counter to the Website Footer**

First, inspect the existing Next.js project, especially the Footer component, global layout, styling system, and existing visitor tracking implementation.

Implement the following requirements:

### 1. Footer Visitor Counter Design
- Add a modern and elegant Visitor Counter in the footer.
- Position it near the Copyright section, preferably on the right side.
- Display a suitable Lucide icon such as `Users` or `Eye`.
- Show the label: **Visitor Count**
- Display the visitor number prominently next to the label.
- Use a clean pill-shaped design with subtle background, border, and spacing.
- Maintain consistency with the existing website's colors, typography, and branding.
- Avoid making it look like an advertisement or an unrelated widget.

### 2. Responsive Design
- Desktop: Display Visitor Count alongside the copyright text.
- Tablet: Maintain proper alignment and spacing.
- Mobile: Display the copyright and visitor count neatly, either in one row when space permits or stacked centrally.
- Ensure there is no horizontal overflow.

### 3. Visitor Tracking Logic
Implement or reuse the existing visitor tracking logic.

Requirements:
- A page refresh must NOT increase the visitor count.
- Navigating between internal pages must NOT increase the visitor count.
- A new visit should be counted after 30 minutes of inactivity.
- Repeated refreshes must retain the same visit count.
- Use browser LocalStorage for browser-specific tracking if no global analytics service exists.
- Update the displayed number when a new visit is registered.
- Format numbers using thousands separators (e.g. 12,580).

### 4. Technical Requirements
- Use Next.js best practices.
- Use a separate reusable VisitorCounter component if appropriate.
- Use `"use client"` only where necessary.
- Avoid hydration errors.
- Avoid unnecessary React re-renders.
- Do not introduce any new database.
- Do not install unnecessary dependencies.
- Reuse the existing icon library if available.
- Do not duplicate visitor tracking across pages.

### 5. Important Accuracy Requirement
- Inspect whether the current tracking source provides a global visitor count or only a browser-specific count.
- Do not display a fake global visitor count.
- If using LocalStorage only, clearly treat it as a browser-specific visit count.
- If an existing global analytics source is available, use its real count.

### 6. Final Quality Check
- Test the footer on desktop, tablet, and mobile.
- Test repeated page refreshes.
- Test internal navigation.
- Test the 30-minute inactivity logic.
- Verify the visitor number updates correctly.
- Ensure existing footer links, copyright text, and other footer functionality remain unchanged.

**Important:** Do not redesign the entire footer. Integrate the visitor counter beautifully into the existing footer design while preserving the website's current visual identity.