import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, FileText, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const navItems = [
    { id: 'hero', label: 'Intro' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'credentials', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={() => handleScroll('hero')}
            className="cursor-pointer font-display text-lg font-bold tracking-tight text-black"
          >
            SRAVYA<span className="font-light text-zinc-400">.P</span>
          </motion.div>
          
          <div className="hidden items-center space-x-2 text-xs text-zinc-400 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono">Available for Java Fullstacks Roles</span>
          </div>
        </div>

        {/* Minimal Nav Links */}
        <nav className="hidden space-x-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="relative rounded-full px-4 py-1.5 text-xs font-medium tracking-tight transition-colors duration-200"
            >
              <span className={`relative z-10 ${activeSection === item.id ? 'text-black font-semibold' : 'text-zinc-500 hover:text-black'}`}>
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNavBackground"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-zinc-100"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Quick Contacts */}
        <div className="flex items-center space-x-3">
          <motion.a
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-all hover:border-black hover:text-black"
          >
            <Linkedin className="h-4 w-4" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${PERSONAL_INFO.email}`}
            title="Email Sravya"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-all hover:border-black hover:text-black"
          >
            <Mail className="h-4 w-4" />
          </motion.a>

          <button
            onClick={() => handleScroll('contact')}
            className="hidden items-center space-x-1.5 rounded-full bg-black px-4.5 py-1.5 text-[11px] font-medium tracking-tight text-white transition-opacity hover:opacity-90 md:flex"
          >
            <span>Let's talk</span>
          </button>
        </div>
      </div>
    </header>
  );
}
