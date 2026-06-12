import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data';
import { Award, Layers, Terminal, Sparkles } from 'lucide-react';

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.id === selectedCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'sc1': return <Terminal className="h-4 w-4" />;
      case 'sc2': return <Award className="h-4 w-4" />;
      case 'sc3': return <Sparkles className="h-4 w-4 text-black" />;
      default: return <Layers className="h-4 w-4" />;
    }
  };

  const levelColors = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-black text-white';
      case 'Intermediate': return 'bg-zinc-150 text-zinc-700 border border-zinc-250';
      default: return 'bg-zinc-100 text-zinc-500 text-zinc-400';
    }
  };

  const getMeterPercent = (level: string) => {
    switch (level) {
      case 'Expert': return 'w-[95%]';
      case 'Intermediate': return 'w-[75%]';
      default: return 'w-[45%]';
    }
  };

  return (
    <section id="skills" className="w-full bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Title */}
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Technical Capability</span>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-black">
            System & Algorithmic Skills
          </h2>
          <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
            Categorized competency indicators built on academic and commercial foundations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap gap-2 border-b border-zinc-100 pb-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-tight transition-all duration-200 ${
              selectedCategory === 'all' 
                ? 'bg-black text-white' 
                : 'bg-zinc-50 text-zinc-500 hover:bg-zinc-100 hover:text-black'
            }`}
          >
            All Competencies
          </button>
          
          {SKILL_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center space-x-1.5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-tight transition-all duration-200 ${
                selectedCategory === cat.id 
                  ? 'bg-black text-white' 
                  : 'bg-zinc-50 text-zinc-500 hover:bg-zinc-100 hover:text-black'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filterCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-zinc-200/80 bg-zinc-50/20 p-6 sm:p-8"
            >
              {/* Card Category Header */}
              <div className="flex items-center space-x-2.5 mb-6">
                <div className="rounded-xl bg-zinc-100 p-2.5 text-black">
                  {getCategoryIcon(category.id)}
                </div>
                <h3 className="font-display text-base font-bold text-black tracking-tight">{category.title}</h3>
              </div>

              {/* Skills Item List */}
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    
                    {/* Header: Name and Level Label */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-black sm:text-sm">{skill.name}</span>
                      <span className={`rounded-full px-2 py-0.5 font-mono text-[9px] font-bold tracking-tight uppercase ${levelColors(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>

                    {/* Modern Apple style level meter bar */}
                    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Expert' ? '92%' : skill.level === 'Intermediate' ? '72%' : '45%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
                        className={`h-full rounded-full ${skill.level === 'Expert' ? 'bg-black' : 'bg-zinc-600'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
