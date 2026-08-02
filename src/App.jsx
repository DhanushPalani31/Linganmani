import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import AdmissionModal from "./components/AdmissionModal";
import BackToTop from "./components/BackToTop";
import { AdmissionModalProvider } from "./context/AdmissionModalContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Facilities from "./pages/Facilities";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);
  return null;
}

function PageFade({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageFade><Home /></PageFade>} />
        <Route path="/about" element={<PageFade><About /></PageFade>} />
        <Route path="/academics" element={<PageFade><Academics /></PageFade>} />
        <Route path="/facilities" element={<PageFade><Facilities /></PageFade>} />
        <Route path="/events" element={<PageFade><Events /></PageFade>} />
        <Route path="/gallery" element={<PageFade><Gallery /></PageFade>} />
        <Route path="/contact" element={<PageFade><Contact /></PageFade>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <AdmissionModalProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollManager />
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <Chatbot />
        <AdmissionModal />
        <BackToTop />
      </div>
    </AdmissionModalProvider>
  );
}
