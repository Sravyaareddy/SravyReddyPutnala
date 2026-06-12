import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, Cpu, Brain, Database, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18
      }
    }
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex min-h-[90vh] w-full flex-col justify-center bg-white px-6 py-20 md:px-12 lg:py-32">
      {/* Background radial soft ambient lights */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-zinc-100 opacity-60 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-zinc-50 opacity-40 blur-2xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-10"
        >
          {/* Tagline / Indicator */}
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <span className="inline-flex items-center space-x-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-black">
              <Cpu className="h-3 w-3 text-black animate-pulse" />
              <span>Java Full Stack Engineering</span>
            </span>
            <span className="h-px w-10 bg-zinc-200" />
            <span className="font-mono text-xs text-zinc-400">Bengaluru, India</span>
          </motion.div>

          {/* Large Main Name Headline */}
          <div className="space-y-4">
            <motion.h1 
              variants={itemVariants}
              className="font-display text-5xl font-extrabold tracking-tight text-black sm:text-7xl md:text-8xl lg:text-9xl"
            >
              <span className="block font-light text-zinc-400">I am</span>
              PUTNALA SRAVYA
            </motion.h1>

            <motion.h2 
              variants={itemVariants}
              className="max-w-3xl font-display text-xl font-medium tracking-tight text-zinc-800 sm:text-2xl md:text-3xl"
            >
              {PERSONAL_INFO.subtitle}
            </motion.h2>
          </div>

          {/* Description Block */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl font-sans text-sm leading-relaxed text-zinc-500 sm:text-base md:text-lg"
          >
            {PERSONAL_INFO.objective}
          </motion.p>

          {/* Action Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScrollToProjects}
              className="group flex items-center space-x-2 rounded-full bg-black px-6 py-3.5 text-xs font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center space-x-2 rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-xs font-semibold tracking-tight text-black transition-colors hover:border-black hover:bg-zinc-50"
            >
              <Mail className="h-4 w-4" />
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>

          {/* Floating Features Row */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 gap-6 border-t border-zinc-100 pt-12 sm:grid-cols-3"
          >
            <div className="flex items-start space-x-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-50 text-black border border-zinc-100">
                <Brain className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-black">Java Full Stack Engineering</h4>
                <p className="mt-1 text-xs text-zinc-400">Robust Spring Boot services paired with modern client architectures.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-50 text-black border border-zinc-100">
                <Database className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-black">Big Data Validation</h4>
                <p className="mt-1 text-xs text-zinc-400">Automated structural metrics monitoring for million-row pipelines.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-50 text-black border border-zinc-100">
                <Cpu className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-black">Modern Agile Execution</h4>
                <p className="mt-1 text-xs text-zinc-400">Seamless pipelines engineered in high-performing product streams.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll down prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-[-60px] left-0 hidden items-center space-x-2 text-zinc-400 lg:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll Down to explore</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="h-3 w-3 text-black" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
