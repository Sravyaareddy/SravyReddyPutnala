/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoStats from './components/BentoStats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsGrid from './components/SkillsGrid';
import EducationCertifications from './components/EducationCertifications';
import Inbox from './components/Inbox';
import { PERSONAL_INFO } from './data';
import { Copyright, ArrowUp, Send, Heart } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show Back-to-top bubble
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple, robust scrollspy tracker using IntersectionObserver
  useEffect(() => {
    const sections = ['hero', 'experience', 'projects', 'skills', 'credentials', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Trigger when section occupies the active view center
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  return (
    <div className="relative min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white selection:rounded-md overflow-x-hidden">
      
      {/* Sticky top Glassmorphism bar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Sections */}
      <main className="w-full">
        <Hero />
        <BentoStats />
        <Experience />
        <Projects />
        <SkillsGrid />
        <EducationCertifications />
        <Inbox />
      </main>

      {/* Clean Minimalist Apple Theme Footer */}
      <footer className="w-full border-t border-zinc-100 bg-white py-16 px-6 md:px-12 text-zinc-500">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-start lg:gap-20">
          
          {/* Copyright section */}
          <div className="max-w-md space-y-3">
            <h3 className="font-display text-lg font-bold tracking-tight text-black">
              PUTNALA SRAVYA<span className="font-light text-zinc-400">.P</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Aspiring Machine Learning Engineer crafting clean vision algorithms and high-speed data validation systems with an eye for UI precision.
            </p>
            <div className="flex items-center space-x-1.5 pt-2 text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              <Copyright className="h-3 w-3" />
              <span>{new Date().getFullYear()} Putnala Sravya. All Rights Reserved.</span>
            </div>
          </div>

          {/* Quick links & contacts list */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="font-display text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Navigations</h4>
              <ul className="space-y-2 text-xs">
                {['Intro', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((label, key) => {
                  const ids = ['hero', 'experience', 'projects', 'skills', 'credentials', 'contact'];
                  const targetId = ids[key];
                  return (
                    <li key={label}>
                      <button
                        onClick={() => {
                          const el = document.getElementById(targetId);
                          if (el) {
                            const top = el.getBoundingClientRect().top + window.scrollY - 80;
                            window.scrollTo({ top, behavior: 'smooth' });
                          }
                        }}
                        className="text-zinc-500 hover:text-black hover:underline text-left"
                      >
                        {label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Channels</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-500 hover:text-black hover:underline">
                    Mail Inbox
                  </a>
                </li>
                <li>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-black hover:underline">
                    LinkedIn Feed
                  </a>
                </li>
                <li className="text-[10px] text-zinc-400 font-medium">
                  {PERSONAL_INFO.location}
                </li>
              </ul>
            </div>
          </div>

          {/* Micro visual credit note */}
          <div className="flex flex-col md:items-end justify-between self-stretch text-[10px] text-zinc-400 font-mono">
            <span className="bg-zinc-50 border border-zinc-100 rounded-md px-2 py-1 select-none">
              v1.0.0 Stable Build
            </span>
            <span className="mt-2 flex items-center space-x-1">
              <span>Engineered with</span>
              <Heart className="h-3 w-3 text-red-500 fill-current" />
              <span>& React 19 + Motion</span>
            </span>
          </div>
        </div>
      </footer>

      {/* Floating back-to-top button with Apple spring effect */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/92 text-black shadow-lg backdrop-blur-md transition-all hover:border-black hover:bg-black hover:text-white"
          title="Back to Top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

    </div>
  );
}
