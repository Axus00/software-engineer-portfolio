/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Code2, 
  ArrowRight,
  Moon,
  Sun,
  Circle,
  Layers,
  Zap,
  ShieldCheck
} from 'lucide-react';

// --- Components ---

const ScrollSpine = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-12 z-40 hidden lg:flex flex-col items-center justify-center bg-transparent pointer-events-none">
      <div className="relative h-1/2 w-px bg-white/5">
        {/* Background track */}
        <div className="absolute inset-0 bg-white/5"></div>
        
        {/* Progress fill */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-linear-to-b from-primary-custom to-secondary-custom shadow-[0_0_15px_rgba(182,196,255,0.5)] origin-top"
          style={{ scaleY, height: '100%' }}
        />

        {/* Floating indicators */}
        <div className="absolute inset-0 flex flex-col justify-around py-8">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="relative flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-surface border border-white/20 z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 rounded-full transition-all duration-300 ${scrolled ? 'glass-nav shadow-2xl py-3 px-6' : 'bg-transparent py-4 px-2'}`}>
      <div className="flex justify-between items-center w-full">
        <div className="text-lg font-bold text-slate-100 font-headline tracking-tight">Architect.dev</div>
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight font-medium text-sm">
          <a href="#experience" className="text-slate-400 hover:text-primary-custom transition-colors">Experience</a>
          <a href="#projects" className="text-slate-400 hover:text-primary-custom transition-colors">Projects</a>
          <a href="#stack" className="text-slate-400 hover:text-primary-custom transition-colors">Connect</a>
          <a href="#contact" className="text-slate-400 hover:text-primary-custom transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-primary-custom transition-transform active:scale-90">
            <Moon size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/30 blur-[120px] rounded-full"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Engineering <span className="text-gradient">Digital Resilience</span> and Technical Mastery.
        </h1>
        <p className="font-sans text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Senior Software Architect specializing in distributed systems, high-performance neural engines, and clean-code architectures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all">
            Explore My Projects
          </button>
          <button className="px-8 py-4 rounded-full bg-transparent border border-white/10 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/5 transition-all">
            Get In Touch
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const LogoCarousel = () => {
  const logos = [
    "Meta", "Stripe", "Uber", "Google", "Amazon", "Netflix", "Apple", "Microsoft"
  ];

  return (
    <section className="py-24 px-8 bg-surface-container-low/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-slate-500 mb-16">Trusted by Industry Leaders</h2>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="logo-carousel-track flex gap-12 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-600 font-headline font-bold text-2xl grayscale hover:grayscale-0 transition-all cursor-pointer opacity-50 hover:opacity-100">
                <Layers size={24} className="text-primary-custom" />
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      role: "Principal Systems Engineer",
      company: "Meta",
      period: "2021 — PRESENT",
      description: "Leading the infrastructure scaling for real-time data processing engines. Architected a distributed caching layer that reduced latency by 40% across global clusters.",
      tag: "ACTUALMENTE",
      logo: <ShieldCheck className="text-primary-custom" />,
      subItems: [
        {
          label: "STAFFING PARTNER",
          content: "CloudScale Solutions — Infrastructure Support"
        }
      ]
    },
    {
      role: "Staff Software Engineer",
      company: "Stripe",
      period: "2018 — 2021",
      description: "Spearheaded the integration of multi-currency settlement systems. Optimized transaction throughput for high-frequency trading API endpoints.",
      logo: <Zap className="text-secondary-custom" />,
      subItems: [
        {
          label: "CLIENT PROJECT",
          content: "FinTech Systems — Payment Gateway Migration"
        }
      ]
    },
    {
      role: "Senior Full-Stack Developer",
      company: "Uber",
      period: "2015 — 2018",
      description: "Focused on geospatial optimization algorithms and mobile-first driver experiences using React Native and Go.",
      logo: <Globe className="text-blue-400" />,
      subItems: [
        {
          label: "INTERNAL VENTURE",
          content: "Mobility Lab — Autonomous Routing Beta"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-16 text-white">Experience Spine</h2>
        <div ref={containerRef} className="relative space-y-16 pb-8">
          {/* Static background line */}
          <div className="absolute left-6 top-2 bottom-0 w-px bg-white/5"></div>
          {/* Animated progress line */}
          <motion.div 
            className="absolute left-6 top-2 bottom-0 w-0.5 -ml-[0.5px] bg-linear-to-b from-primary-custom to-secondary-custom origin-top shadow-[0_0_10px_rgba(182,196,255,0.5)] z-0"
            style={{ scaleY }}
          />
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-16 group"
            >
              <div className="absolute left-0 top-1 w-12 h-12 bg-surface-container rounded-lg border border-white/5 flex items-center justify-center z-10 group-hover:border-primary-custom/50 transition-colors">
                {exp.logo}
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-headline text-xl font-bold text-white">{exp.role}</h3>
                <span className="font-sans text-sm text-slate-500">{exp.period}</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-medium text-primary-custom">{exp.company}</span>
                {exp.tag && (
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] uppercase tracking-wider font-bold rounded-full border border-emerald-500/20">
                    {exp.tag}
                  </span>
                )}
              </div>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                {exp.description}
              </p>

              {/* Sub-chronology (Staffing/Projects) */}
              {exp.subItems && exp.subItems.length > 0 && (
                <div className="mt-6 ml-4 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px border-l border-dashed border-white/10"></div>
                  {exp.subItems.map((sub, idx) => (
                    <div key={idx} className="relative pl-8 pb-4">
                      <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-slate-700 border border-surface"></div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{sub.label}</span>
                        <span className="text-sm text-slate-300">{sub.content}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Quantum Ledger",
      description: "A decentralized cryptographic ledger utilizing lattice-based encryption to secure transactions against quantum computational threats.",
      tags: ["Rust", "WebAssembly", "JS"],
      icon: <Terminal size={20} />,
      image: "https://picsum.photos/seed/quantum/800/600"
    },
    {
      title: "Neural Sync Engine",
      description: "Real-time synchronization layer for distributed AI agents, optimizing inference loads across edge computing nodes using predictive modeling.",
      tags: ["PyTorch", "Go", "React"],
      icon: <Cpu size={20} />,
      image: "https://picsum.photos/seed/neural/800/600"
    }
  ];

  return (
    <section id="projects" className="py-32 px-8 bg-surface-container-low/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-headline text-4xl font-extrabold mb-4">Neural Architectures</h2>
            <p className="text-slate-500">High-end implementations of complex logic.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-primary-custom font-semibold hover:gap-4 transition-all">
            View Archive <ArrowRight size={20} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative bg-surface-container-low rounded-xl overflow-hidden shadow-xl shadow-black/20 border border-white/5"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-headline text-2xl font-bold text-white">{project.title}</h3>
                  <div className="text-slate-400 group-hover:text-primary-custom transition-colors">
                    {project.icon}
                  </div>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-surface-container-high rounded-lg text-xs font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-6">
                  <button className="flex items-center gap-2 text-sm font-semibold hover:text-primary-custom transition-colors text-white">
                    <ExternalLink size={16} /> Live Demo
                  </button>
                  <a href="#" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-white transition-colors">
                    <Code2 size={16} /> Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Connect = () => {
  return (
    <section id="stack" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group relative flex flex-col items-center justify-center p-12 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-primary-custom/40 transition-all duration-500 overflow-hidden text-center shadow-2xl"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary-custom/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="mb-8 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <Github size={80} className="text-white" />
              </div>
              <h2 className="font-headline text-4xl font-extrabold mb-6 text-white">Open Source Craft</h2>
              <p className="text-xl text-slate-400 mb-10 max-w-sm mx-auto">Exploring the frontiers of engineering through shared knowledge and code.</p>
              <button className="px-10 py-5 bg-white text-surface font-bold text-lg rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl">
                Explore My Code
              </button>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group relative flex flex-col items-center justify-center p-12 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-secondary-custom/40 transition-all duration-500 overflow-hidden text-center shadow-2xl"
          >
            <div className="absolute inset-0 bg-linear-to-br from-secondary-custom/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Linkedin size={80} className="text-white" />
              </div>
              <h2 className="font-headline text-4xl font-extrabold mb-6 text-white">Professional Network</h2>
              <p className="text-xl text-slate-400 mb-10 max-w-sm mx-auto">Cultivating strategic partnerships and technical leadership globally.</p>
              <button className="px-10 py-5 bg-white text-surface font-bold text-lg rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl">
                Let's Connect
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 mt-24 bg-slate-950 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
        <div className="font-headline font-bold text-slate-300 text-lg">Architect.dev</div>
        <p className="font-sans text-sm text-slate-500">© 2026 Obsidian Engineering. Built with Precision.</p>
        <div className="flex gap-8 font-sans text-sm">
          <a href="#" className="text-slate-500 hover:text-slate-100 transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-500 hover:text-slate-100 transition-colors">GitHub</a>
          <a href="#" className="text-slate-500 hover:text-slate-100 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary-custom/30 selection:text-primary-custom">
      <ScrollSpine />

      <Navbar />
      
      <main>
        <Hero />
        <LogoCarousel />
        <Experience />
        <Projects />
        <Connect />
        
        {/* CTA Section */}
        <section id="contact" className="py-32 px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-[2rem] bg-linear-to-br from-primary-custom/10 to-secondary-custom/10 p-12 text-center border border-white/5"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-8 text-white">Ready to architect the future?</h2>
            <p className="text-xl text-slate-400 mb-10">Currently open for senior roles and consulting for high-impact projects.</p>
            <button className="px-10 py-5 bg-white text-surface font-bold text-lg rounded-full hover:scale-105 active:scale-95 transition-all">
              Initiate Connection
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
