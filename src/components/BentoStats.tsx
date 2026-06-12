import React from 'react';
import { motion } from 'motion/react';
import { METRICS } from '../data';
import { CheckCircle2, Database, Zap, RefreshCw, Layers } from 'lucide-react';

export default function BentoStats() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'm1': return <CheckCircle2 className="h-5 w-5 text-black" />;
      case 'm2': return <Database className="h-5 w-5 text-black" />;
      case 'm3': return <Zap className="h-5 w-5 text-black" />;
      case 'm4': return <RefreshCw className="h-5 w-5 text-black" />;
      case 'm5': return <Layers className="h-5 w-5 text-black" />;
      default: return <Zap className="h-5 w-5 text-black" />;
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="w-full bg-zinc-50/50 px-6 py-16 md:px-12 md:py-24 border-y border-zinc-100">
      <div className="mx-auto w-full max-w-7xl">
        {/* Apple styled header */}
        <div className="mb-12 max-w-xl md:mb-16">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Impact Indicators</span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Technical achievements validated in real codebases.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {/* Main big box (Process Velocity +25%) - spanning 2 columns */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:col-span-2 md:col-span-2 lg:col-span-2 min-h-[220px]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Precision Architecture</span>
              <div className="rounded-full bg-zinc-100 p-2">{getIcon('m5')}</div>
            </div>
            <div className="mt-8">
              <div className="font-display text-6xl font-extrabold tracking-tighter text-black">
                {METRICS[4].value}
              </div>
              <h3 className="mt-2 font-display text-base font-semibold text-black">{METRICS[4].label}</h3>
              <p className="mt-1 text-xs text-zinc-500 leading-relaxed">{METRICS[4].description}</p>
            </div>
          </motion.div>

          {/* Record validation box - Spanning 3 columns */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:col-span-2 lg:col-span-3 min-h-[220px]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Database Reconciliation</span>
              <div className="rounded-full bg-zinc-100 p-2">{getIcon('m2')}</div>
            </div>
            <div className="mt-8">
              <div className="font-display text-6xl font-extrabold tracking-tighter text-black">
                {METRICS[1].value}
              </div>
              <h3 className="mt-2 font-display text-base font-semibold text-black">{METRICS[1].label}</h3>
              <p className="mt-1 text-xs text-zinc-500 leading-relaxed">{METRICS[1].description}</p>
            </div>
          </motion.div>

          {/* Automated Checks Box */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm transition-shadow hover:shadow-md lg:col-span-2 min-h-[220px]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Workload Reduction</span>
              <div className="rounded-full bg-zinc-100 p-2">{getIcon('m1')}</div>
            </div>
            <div className="mt-8">
              <div className="font-display text-5xl font-extrabold tracking-tighter text-red-500">
                -35% <span className="text-xl font-medium tracking-tight text-zinc-400">manual effort</span>
              </div>
              <h3 className="mt-2 font-display text-base font-semibold text-black">{METRICS[0].label}</h3>
              <p className="mt-1 text-xs text-zinc-500 leading-relaxed">{METRICS[0].description}</p>
            </div>
          </motion.div>

          {/* Speed / Optimization box */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm transition-shadow hover:shadow-md lg:col-span-2 min-h-[220px]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Pipeline Performance</span>
              <div className="rounded-full bg-zinc-100 p-2">{getIcon('m3')}</div>
            </div>
            <div className="mt-8">
              <div className="font-display text-5xl font-extrabold tracking-tighter text-black">
                {METRICS[2].value}
              </div>
              <h3 className="mt-2 font-display text-base font-semibold text-black">{METRICS[2].label}</h3>
              <p className="mt-1 text-xs text-zinc-500 leading-relaxed">{METRICS[2].description}</p>
            </div>
          </motion.div>

          {/* Ingestion Runs Box */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm transition-shadow hover:shadow-md lg:col-span-1 min-h-[220px]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Reliability</span>
              <div className="rounded-full bg-zinc-100 p-2">{getIcon('m4')}</div>
            </div>
            <div className="mt-8">
              <div className="font-display text-4xl font-extrabold tracking-tighter text-emerald-600">
                100% <span className="text-xs font-normal tracking-tight text-zinc-400">intact</span>
              </div>
              <h3 className="mt-2 font-display text-xs font-bold text-zinc-800">{METRICS[3].label}</h3>
              <p className="mt-1 text-[11px] text-zinc-500 leading-relaxed">No data loss on Hadoop ingests.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
