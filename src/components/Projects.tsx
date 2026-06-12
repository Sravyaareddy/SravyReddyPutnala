import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Maximize2, X, Check, Code, Award, Activity, Copy, ArrowRight, Zap } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedId, setCopiedId] = useState<boolean>(false);

  const handleCopyCode = (snippet: string) => {
    if (snippet) {
      navigator.clipboard.writeText(snippet);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <section id="projects" className="w-full bg-zinc-50/40 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Section Title */}
        <div className="mb-14 flex flex-col justify-between items-start gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Selected Portfolio</span>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-black">
              Featured Engineering Work
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-500 leading-relaxed md:text-right">
            Deep dive into algorithmic architectures and full-stack solutions built to scale. Click on any project card to review mathematical and architectural systems.
          </p>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-black hover:shadow-md"
            >
              <div>
                {/* Category Badge & Type */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-zinc-150 px-2.5 py-0.5 font-mono text-[9px] font-semibold text-zinc-600">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-black">
                  {project.title}
                </h3>

                {/* Short Desc */}
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed min-h-[50px]">
                  {project.description}
                </p>

                {/* Small Bullet List */}
                <ul className="mt-4 space-y-2">
                  {project.bullets.slice(0, 2).map((bullet, index) => (
                    <li key={index} className="flex items-start space-x-2 text-[11px] leading-relaxed text-zinc-600">
                      <span className="mt-1 select-none text-[6px] text-zinc-400">■</span>
                      <span className="line-clamp-2">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Micro Metric Highlight */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mt-6 flex gap-4 border-t border-zinc-100 pt-4">
                    {project.metrics.slice(0, 2).map((metric, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="font-display text-sm font-semibold text-black">{metric.value}</span>
                        <span className="text-[10px] text-zinc-400">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Expansion Indicator */}
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-black pt-2">
                  <span className="group flex items-center space-x-1 hover:underline">
                    <span>Inspect System</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                  <Maximize2 className="h-3.5 w-3.5 text-zinc-400 group-hover:text-black" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Apple Style Zooming Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />

              {/* Expansive layout document sheet */}
              <motion.div
                layoutId={`card-container-${selectedProject.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className="relative z-10 flex h-[90vh] w-full max-w-4xl flex-col overflow-y-auto rounded-3xl bg-white text-black shadow-2xl"
              >
                {/* Header Row sticking to top */}
                <div className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-100 bg-white/95 px-6 py-4.5 backdrop-blur-md sm:px-8">
                  <div className="flex items-center space-x-3">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-600">
                      {selectedProject.type}
                    </span>
                    <span className="text-zinc-300">|</span>
                    <span className="font-mono text-[10px] text-zinc-400">{selectedProject.category}</span>
                  </div>
                  
                  {/* Close button with Apple physics */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-black hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                </div>

                {/* Popover Deep Content */}
                <div className="p-6 sm:p-8 md:p-10 space-y-8 flex-1">
                  
                  {/* Large Title & Highline Description */}
                  <div>
                    <h2 className="font-display text-3xl font-extrabold tracking-tight text-black sm:text-4xl md:text-5xl">
                      {selectedProject.title}
                    </h2>
                    <p className="mt-4 font-sans text-base leading-relaxed text-zinc-600 md:text-lg">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {/* Quantitative Analytics Dashboard Section */}
                  <div className="grid grid-cols-2 gap-4 rounded-3xl border border-zinc-150 bg-zinc-50/50 p-6 sm:grid-cols-4">
                    {selectedProject.metrics.map((metric, mdIdx) => (
                      <div key={mdIdx} className="flex flex-col items-center justify-center p-3 text-center">
                        <div className="font-display text-3xl font-black text-black">
                          {metric.value}
                        </div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Core Achievements & Development Milestones */}
                  <div className="space-y-4">
                    <h4 className="flex items-center space-x-2 font-display text-sm font-semibold uppercase tracking-wider text-zinc-400">
                      <Award className="h-4 w-4" />
                      <span>Key Technical Achievements</span>
                    </h4>
                    
                    <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                      {selectedProject.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start space-x-3 rounded-2xl border border-zinc-100 bg-white p-4 text-xs leading-relaxed text-zinc-600 sm:text-sm shadow-sm hover:border-zinc-300 transition-colors">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-800" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Code Snippet / Algorithm Viewer */}
                  {selectedProject.codeSnippet && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="flex items-center space-x-2 font-display text-sm font-semibold uppercase tracking-wider text-zinc-400">
                          <Code className="h-4 w-4" />
                          <span>Algorithmic Architecture Snippet</span>
                        </h4>

                        <button
                          onClick={() => handleCopyCode(selectedProject.codeSnippet || '')}
                          className="flex items-center space-x-1 rounded-lg border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-600 hover:border-black hover:text-black transition-colors"
                        >
                          {copiedId ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-500" />
                              <span className="text-emerald-500">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Copy Code</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-5 shadow-inner">
                        {/* Fake system code terminal header */}
                        <div className="absolute top-3 left-4 flex space-x-1.5 select-none text-zinc-600">
                          <span className="h-2 w-2 rounded-full bg-zinc-800" />
                          <span className="h-2 w-2 rounded-full bg-zinc-800" />
                          <span className="h-2 w-2 rounded-full bg-zinc-800" />
                        </div>
                        <pre className="mt-4 overflow-x-auto font-mono text-[11px] leading-relaxed text-zinc-300 scrollbar-thin">
                          <code>{selectedProject.codeSnippet}</code>
                        </pre>
                      </div>
                    </div>
                  )}

                  {/* Associated Technic Stack */}
                  <div className="pt-2 border-t border-zinc-100 flex flex-wrap gap-1.5 items-center">
                    <span className="font-mono text-[10px] font-semibold text-zinc-400 mr-2 uppercase tracking-wider">Project Stack:</span>
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 border border-zinc-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
