import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, GraduationCap } from "lucide-react";
import { school, navLinks } from "../data/content";

function Facebook(props) {
  return (
    <svg viewBox="0 0 24 24" width={props.size ?? 16} height={props.size ?? 16} fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/>
    </svg>
  );
}
function Youtube(props) {
  return (
    <svg viewBox="0 0 24 24" width={props.size ?? 16} height={props.size ?? 16} fill="currentColor">
      <path d="M23.5 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C17.4 3.6 12 3.6 12 3.6h0s-5.4 0-8.3.3c-.5 0-1.5.1-2.3 1-.7.7-.9 2.3-.9 2.3S0 9 0 10.8v1.3c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.4.3 7.4.3s5.4 0 8.3-.3c.5 0 1.5-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.6v-1.3c0-1.8-.2-3.6-.2-3.6ZM9.5 14.9V8.6l6.3 3.2-6.3 3.1Z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="grid place-items-center w-10 h-10 rounded-lg bg-brand-600 text-white">
                <GraduationCap size={20} />
              </span>
              <span className="font-display font-bold text-white text-[15px]">
                {school.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              A matriculation school run by a local trust since {school.founded}, educating
              {" "}{school.students} students at Thayappa Nagar, Tirupattur.
            </p>
            <div className="flex gap-3 mt-5">
              <a href={school.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-brand-600">
                <Facebook size={16} />
              </a>
              <a href={school.youtube} target="_blank" rel="noreferrer" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-brand-600">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Explore</h5>
            <ul className="space-y-2.5 text-sm">
              {navLinks.filter((l) => !l.children).map((l) => (
                <li key={l.label}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>
              ))}
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">About</h5>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about#vm" className="hover:text-white">Vision &amp; Mission</Link></li>
              <li><Link to="/about#motto" className="hover:text-white">Motto</Link></li>
              <li><Link to="/about#trustees" className="hover:text-white">Board of Trustees</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Contact</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><Phone size={15} className="mt-0.5 shrink-0" /> {school.phone}</li>
              <li className="flex items-start gap-2"><Mail size={15} className="mt-0.5 shrink-0" /> {school.email}</li>
              <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0" /> {school.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} {school.name}. All rights reserved.</span>
          <span>Built with React &amp; Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
}
