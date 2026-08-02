export const school = {
  name: "Lingannamani Matriculation School",
  shortName: "Lingannamani",
  founded: 1997,
  students: "900+",
  address: "Thayappa Nagar, Near Adhiparasakthi Temple, Tirupattur - 635601, Tamil Nadu",
  phone: "04179 227162",
  email: "lingannamani@yahoo.in",
  facebook: "https://www.facebook.com/profile.php?id=100065676541797",
  youtube: "https://www.youtube.com/@lingannamanischooltirupatt2946",
  mapsUrl: "https://goo.gl/maps/XQ5SWoj9XTZ9A9kS9",
};

export const trustees = [
  { name: "Mr. L. Mani", role: "Chairman" },
  { name: "Mrs. M. Saranya", role: "President" },
  { name: "Mr. M. Dineshkanna", role: "Secretary" },
  { name: "Mrs. M. Megala", role: "Treasurer" },
];

export const stats = [
  { label: "Year Founded", value: "1997" },
  { label: "Students", value: "900+" },
  { label: "Staff", value: "60+" },
  { label: "Board Results", value: "A+" },
];

export const programs = [
  {
    title: "Matriculation Curriculum",
    desc: "A structured, syllabus-first academic track from primary through matriculation level.",
    icon: "BookOpen",
  },
  {
    title: "Free Coaching Classes",
    desc: "Dedicated extra sessions for students who need more support, so no child is left behind.",
    icon: "GraduationCap",
  },
  {
    title: "Smart Classrooms",
    desc: "Visual, tech-assisted lessons that build on regular textbook teaching.",
    icon: "MonitorPlay",
  },
  {
    title: "Scholarships",
    desc: "Financial support for deserving students, so fees are never a barrier to learning.",
    icon: "Award",
  },
];

export const facilities = [
  { title: "Spacious Classrooms", desc: "Well-lit, ventilated classrooms across two campus buildings.", icon: "School" },
  { title: "Garden & Playground", desc: "Open green spaces for sports, assembly, and outdoor activity.", icon: "Trees" },
  { title: "Smart Class Labs", desc: "Digital-assisted classrooms for interactive lessons.", icon: "Laptop" },
  { title: "Library", desc: "A quiet reading space stocked with academic and general reading books.", icon: "Library" },
  { title: "Science & Computer Labs", desc: "Hands-on lab sessions to complement classroom theory.", icon: "FlaskConical" },
  { title: "Transport", desc: "Safe, supervised transport routes covering Tirupattur and nearby areas.", icon: "Bus" },
];

export const events = [
  { title: "29th Annual Day Celebration", date: "2026", tag: "Annual Day" },
  { title: "Annual Sports Meet", date: "2026", tag: "Sports Day" },
  { title: "Republic Day Celebration", date: "Jan 2026", tag: "National Day" },
  { title: "Admissions Open 2026-27", date: "2026", tag: "Admissions" },
  { title: "Independence Day Celebration", date: "Aug 2025", tag: "National Day" },
  { title: "Kamarajar Birthday Celebration", date: "2025", tag: "Commemoration" },
];

export const testimonials = [
  {
    quote: "Every subject teacher genuinely cares, and the school encourages students to chase scholarships and do their best in board exams.",
    name: "Sharmila",
    role: "Parent",
  },
  {
    quote: "My child was a slow learner. This school worked with that patiently, until studying stopped being a struggle.",
    name: "Arun Kumar",
    role: "Parent",
  },
  {
    quote: "Two years in, and every staff member in my department has been warm and encouraging.",
    name: "Rithika Sri",
    role: "Student",
  },
  {
    quote: "The coaching classes turned low marks around. Genuinely some of the best years of my life.",
    name: "Nithu",
    role: "Student",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "School Overview", to: "/about" },
      { label: "Vision & Mission", to: "/about#vm" },
      { label: "Motto", to: "/about#motto" },
      { label: "Board of Trustees", to: "/about#trustees" },
    ],
  },
  { label: "Academics", to: "/academics" },
  { label: "Facilities", to: "/facilities" },
  { label: "News & Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/#test" },
  { label: "Contact Us", to: "/contact" },
];

// Seed knowledge for the chat assistant widget.
// Swap `answer` logic in Chatbot.jsx for a real LLM call when a backend is ready.
export const chatbotFaqs = [
  {
    keywords: ["admission", "admissions", "join", "enroll", "enquiry"],
    answer:
      "Admissions for 2026-27 are open. You can call the school office at 04179 227162 or visit the campus at Thayappa Nagar, Tirupattur, to start an enquiry.",
  },
  {
    keywords: ["fee", "fees", "cost", "scholarship"],
    answer:
      "Fee structures vary by class. Scholarships are available for deserving students — please contact the office directly for the current fee schedule.",
  },
  {
    keywords: ["timing", "hours", "time", "school hours"],
    answer:
      "For exact school hours and the current academic calendar, please call the office at 04179 227162 — timings can shift slightly by term.",
  },
  {
    keywords: ["contact", "phone", "email", "address", "location", "where"],
    answer:
      "You'll find us at Thayappa Nagar, Near Adhiparasakthi Temple, Tirupattur - 635601. Phone: 04179 227162, Email: lingannamani@yahoo.in.",
  },
  {
    keywords: ["coaching", "slow learner", "weak", "extra class"],
    answer:
      "The school runs dedicated free coaching classes for students who need extra support, alongside regular classroom teaching.",
  },
  {
    keywords: ["trustee", "chairman", "president", "management"],
    answer:
      "The school is run by a board of trustees: Mr. L. Mani (Chairman), Mrs. M. Saranya (President), Mr. M. Dineshkanna (Secretary), and Mrs. M. Megala (Treasurer).",
  },
];
