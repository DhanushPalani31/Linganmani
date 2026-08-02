# Image Generation Guide

The site currently references real photo file paths that don't exist yet — each
one falls back to a soft placeholder (`ImageWithFallback.jsx`) until you add
the actual file. Generate each image below and save it at the exact path
shown, and it'll appear automatically — no code changes needed.

**Recommended tool:** Google AI Studio (https://aistudio.google.com) using a
Nano Banana model (Gemini's native image generation — currently
`gemini-3.1-flash-image`, aka "Nano Banana 2"). Paste the prompt, generate,
download, and save with the exact filename below. Google's models retire and
rename often, so check https://ai.google.dev/gemini-api/docs/image-generation
for the current recommended model before you start.

**Style consistency:** every prompt below ends with the same style line —
keep that line identical across all of them so the photos feel like one
consistent shoot rather than eight unrelated images.

---

## 1. `public/images/hero-campus.jpg`
**Used in:** Home page hero (right side)
**Aspect ratio:** 4:3

> A welcoming daytime photo of an Indian matriculation school campus building, two-storey, painted blue and white, with a small garden and playground in front, a handful of schoolchildren in blue-and-white uniforms walking and chatting near the entrance, warm morning sunlight, Tamil Nadu, India. Photorealistic, natural lighting, editorial school-prospectus photography style, no text or logos, no watermark, no identifiable real people.

## 2. `public/images/about-campus.jpg`
**Used in:** About page hero banner
**Aspect ratio:** 16:9

> Wide establishing photo of a modern Indian matriculation school building facade with a garden, flagpole, and playground visible, clear blue sky, taken from the front gate looking in. Photorealistic, natural lighting, editorial school-prospectus photography style, no text or logos, no watermark, no identifiable real people.

## 3. `public/images/contact-office.jpg`
**Used in:** Contact page
**Aspect ratio:** 1:1

> A tidy, welcoming school front office / reception desk, Indian school setting, a noticeboard with notices pinned in the background, warm indoor lighting, a desk with a telephone and register books, no people in frame. Photorealistic, natural lighting, editorial school-prospectus photography style, no text or logos, no watermark.

## 4. `public/images/gallery/annual-day.jpg`
**Used in:** Gallery page
**Aspect ratio:** 1:1

> Indian school annual day cultural celebration on an outdoor stage, students in colourful traditional dance costumes performing, decorative stage backdrop, evening lights, audience of parents seated facing the stage. Photorealistic, natural lighting, editorial school-prospectus photography style, no text or logos, no watermark, no identifiable real people.

## 5. `public/images/gallery/sports-meet.jpg`
**Used in:** Gallery page
**Aspect ratio:** 1:1

> Indian school sports day on an open playground, children in white sports uniforms running a relay race, other students cheering from the side, dust and motion blur suggesting energy, bright daytime sun. Photorealistic, natural lighting, editorial school-prospectus photography style, no text or logos, no watermark, no identifiable real people.

## 6. `public/images/gallery/campus-garden.jpg`
**Used in:** Gallery page
**Aspect ratio:** 1:1

> A well-maintained school garden and playground area, green lawn, a few shade trees, simple playground equipment, part of the school building visible in the background, midday light. Photorealistic, natural lighting, editorial school-prospectus photography style, no text or logos, no watermark, no people.

## 7. `public/images/gallery/classrooms.jpg`
**Used in:** Gallery page
**Aspect ratio:** 1:1

> Inside an Indian matriculation school classroom, rows of wooden desks and benches, a green chalkboard at the front with some sums written on it, a ceiling fan, sunlight through barred windows, tidy and orderly, no people in frame. Photorealistic, natural lighting, editorial school-prospectus photography style, no text or logos, no watermark.

## 8. `public/images/gallery/republic-day.jpg`
**Used in:** Gallery page
**Aspect ratio:** 1:1

> Indian school Republic Day flag hoisting ceremony in a school courtyard, students in uniform standing in neat rows facing an Indian flag on a pole, a teacher saluting near the flag, morning light, national tricolour visible. Photorealistic, natural lighting, editorial school-prospectus photography style, no text or logos, no watermark, no identifiable real people.

## 9. `public/images/gallery/science-lab.jpg`
**Used in:** Gallery page
**Aspect ratio:** 1:1

> A simple school science laboratory, wooden lab benches with basic glassware and equipment, periodic table chart on the wall, tube lighting, tidy and well-organised, no people in frame. Photorealistic, natural lighting, editorial school-prospectus photography style, no text or logos, no watermark.

## 10. `public/images/gallery/independence-day.jpg`
**Used in:** Gallery page
**Aspect ratio:** 1:1

> Indian school Independence Day celebration, students holding small paper Indian flags, festive bunting in tricolour (saffron, white, green) strung across a school courtyard, sunny morning. Photorealistic, natural lighting, editorial school-prospectus photography style, no text or logos, no watermark, no identifiable real people.

## 11. `public/images/gallery/farewell-day.jpg`
**Used in:** Gallery page
**Aspect ratio:** 1:1

> A warm Indian school farewell-day gathering in a decorated classroom or hall, balloons and simple streamer decorations, students seated together smiling, soft indoor lighting, a bittersweet celebratory mood. Photorealistic, natural lighting, editorial school-prospectus photography style, no text or logos, no watermark, no identifiable real people.

---

## Adding the files

```
public/
  images/
    hero-campus.jpg
    about-campus.jpg
    contact-office.jpg
    gallery/
      annual-day.jpg
      sports-meet.jpg
      campus-garden.jpg
      classrooms.jpg
      republic-day.jpg
      science-lab.jpg
      independence-day.jpg
      farewell-day.jpg
```

Once a file exists at the right path, the placeholder disappears and the real
photo shows automatically — no rebuild logic to touch.

**Better than AI images:** if the school can share real event photos (from
past Annual Day, Sports Day, etc.), use those instead of generated ones for
the gallery — genuine photos of real students and campus life will always
build more trust with parents than generated stand-ins. Save the AI-generated
route for the more generic shots (office, empty classroom, campus exterior)
where a real photo isn't readily available.
