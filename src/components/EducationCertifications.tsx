import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EDUCATION, CERTIFICATIONS } from '../data';
import { GraduationCap, Award, Search, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function EducationCertifications() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCerts = CERTIFICATIONS.filter(cert => 
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="credentials" className="w-full bg-zinc-50/50 px-6 py-20 md:px-12 md:py-28 border-t border-zinc-100">
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Title */}
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Credentials</span>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-black">
            Education & Certifications
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          
          {/* Left Column: Academic Progress (takes 2 cols) */}
          <div className="space-y-6 lg:col-span-2">
            <h3 className="flex items-center space-x-2 font-display text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
              <GraduationCap className="h-4 w-4" />
              <span>Academic Foundation</span>
            </h3>

            <div className="relative border-l border-zinc-200 pl-6 space-y-8">
              {EDUCATION.map((edu, index) => (
                <div key={edu.id} className="relative">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border border-black bg-white" />
                  
                  <div>
                    <span className="font-mono text-[10px] font-bold text-zinc-400">{edu.period}</span>
                    <h4 className="mt-1 font-display text-base font-bold text-black tracking-tight leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-xs text-zinc-500 font-medium">{edu.institution}</p>
                    
                    {/* CGPA display */}
                    <div className="mt-2.5 inline-flex items-center space-x-1 rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[10px] font-bold text-black">
                      <span>Score:</span>
                      <span className="text-zinc-800">{edu.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications search & listings (takes 3 cols) */}
          <div className="space-y-6 lg:col-span-3">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center mb-6">
              <h3 className="flex items-center space-x-2 font-display text-xs font-bold uppercase tracking-widest text-zinc-400">
                <Award className="h-4 w-4" />
                <span>Professional Certifications ({CERTIFICATIONS.length})</span>
              </h3>

              {/* Minimal filter search */}
              <div className="relative w-full max-w-[200px]">
                <Search className="absolute top-2.5 left-2.5 h-3.5 w-3.5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Filter certs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-zinc-200 bg-white py-1 pl-8 pr-3 text-xs focus:border-black focus:outline-none"
                />
              </div>
            </div>

            {/* Scrollable list of verification cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredCerts.length > 0 ? (
                filteredCerts.map((cert) => (
                  <motion.div
                    key={cert.id}
                    layoutId={`cert-${cert.id}`}
                    className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-4.5 transition-all hover:border-zinc-400 hover:shadow-xs"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-display text-xs font-bold leading-tight text-black line-clamp-2">
                        {cert.title}
                      </h4>
                      <ShieldCheck className="h-4 w-4 shrink-0 text-zinc-400" />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-zinc-400">
                        {cert.issuer}
                      </span>
                      <span className="rounded-full bg-zinc-100 px-1.5 py-0.5 font-mono text-[8px] font-bold text-zinc-500">
                        VERIFIED
                      </span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-2 flex flex-col items-center justify-center py-12 text-center">
                  <span className="text-sm font-semibold text-zinc-400">No matching certifications found.</span>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-2 text-xs font-semibold underline text-black"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
