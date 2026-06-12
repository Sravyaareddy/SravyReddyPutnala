import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCES } from '../data';
import { Briefcase, MapPin, Calendar, Building, ChevronDown, Check } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("exp1");
  const [highlightedTag, setHighlightedTag] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Extract all unique tags
  const allTags = Array.from(new Set(EXPERIENCES.flatMap(exp => exp.tags)));

  return (
    <section id="experience" className="w-full bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Career Progress</span>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-black">
              Engineering Work Experience
            </h2>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              Engineering robust Java enterprise backends & automated validation pipelines across major financial institutions.
            </p>
          </div>

          {/* Quick interactive search/spotlight tags */}
          <div className="flex flex-wrap gap-1.5 max-w-lg md:justify-end">
            <span className="self-center font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mr-2">Spotlight:</span>
            <button
              onClick={() => setHighlightedTag(null)}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-tight transition-all duration-200 ${
                highlightedTag === null 
                  ? 'bg-black text-white' 
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              All Tech
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setHighlightedTag(tag === highlightedTag ? null : tag)}
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-tight transition-all duration-200 ${
                  tag === highlightedTag 
                    ? 'bg-primary bg-black text-white' 
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative space-y-6">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const hasHighlightedTag = highlightedTag ? exp.tags.includes(highlightedTag) : false;
            
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                  highlightedTag && !hasHighlightedTag 
                    ? 'border-zinc-100 opacity-40 scale-[0.99]' 
                    : isExpanded 
                      ? 'border-black bg-zinc-50/30 shadow-sm' 
                      : 'border-zinc-200 bg-white hover:border-zinc-400'
                }`}
              >
                {/* Accordion Trigger Header */}
                <div 
                  onClick={() => toggleExpand(exp.id)}
                  className="flex cursor-pointer flex-col justify-between p-6 sm:p-8 md:flex-row md:items-center gap-4"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition-colors duration-300 ${
                      isExpanded ? 'bg-black border-black text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-600 group-hover:bg-zinc-100'
                    }`}>
                      <Briefcase className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-black sm:text-xl">
                        {exp.role}
                      </h3>
                      
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
                        <span className="flex items-center space-x-1 font-semibold text-zinc-800">
                          <Building className="h-3 w-3" />
                          <span>{exp.company}</span>
                        </span>
                        
                        {exp.client && (
                          <>
                            <span className="text-zinc-300">•</span>
                            <span className="font-medium text-zinc-600">Client: {exp.client}</span>
                          </>
                        )}

                        <span className="text-zinc-300">•</span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 self-stretch border-t border-zinc-150 pt-3 md:self-auto md:border-0 md:pt-0">
                    <div className="flex items-center space-x-1.5 rounded-full bg-zinc-100 px-3 py-1 font-mono text-[10px] font-semibold text-zinc-600">
                      <Calendar className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="rounded-full bg-zinc-100 p-1.5 text-zinc-500 hover:bg-zinc-200 hover:text-black"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Animated Body Details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="border-t border-zinc-150 p-6 sm:p-8 bg-zinc-50/50">
                        {exp.project && (
                          <div className="mb-4 inline-flex items-center space-x-1.5 rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-black">
                            <span className="h-1.5 w-1.5 rounded-full bg-black" />
                            <span>Project: {exp.project}</span>
                          </div>
                        )}

                        {/* Bullets */}
                        <ul className="space-y-3">
                          {exp.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                              <span className="mt-1.5 select-none text-[8px] text-zinc-400">■</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Role Tags */}
                        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-zinc-200/60 pt-5">
                          {exp.tags.map((tag) => {
                            const isTagHighlighted = tag === highlightedTag;
                            return (
                              <span
                                key={tag}
                                className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-all duration-300 ${
                                  isTagHighlighted
                                    ? 'bg-black text-white ring-2 ring-zinc-300'
                                    : 'bg-white text-zinc-600 border border-zinc-200 group-hover:border-zinc-300'
                                }`}
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
