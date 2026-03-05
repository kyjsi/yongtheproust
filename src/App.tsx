import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Newspaper, 
  User, 
  Zap, 
  Briefcase, 
  FlaskConical, 
  Plane, 
  PenTool, 
  Music as MusicIcon, 
  Mail,
  ArrowLeft,
  Calendar,
  Globe,
  ExternalLink
} from 'lucide-react';

// --- Components ---

const Header = () => {
  const date = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="max-w-7xl mx-auto px-4 pt-8 pb-4">
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-between items-end mb-2 text-[10px] font-mono uppercase tracking-widest opacity-70">
          <span>VOL. 2026 • NO. 03</span>
          <span className="hidden md:block">SEOUL, SOUTH KOREA</span>
          <span>PRICE: FREE</span>
        </div>
        <div className="newspaper-double-border-t newspaper-double-border-b w-full py-6 flex flex-col items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <h1 className="font-serif text-5xl md:text-9xl font-bold tracking-tighter uppercase text-center leading-none">
              YONGTHEPROUST
            </h1>
          </Link>
          <div className="mt-4 text-center max-w-2xl px-4">
            <p className="font-serif italic text-sm md:text-base opacity-90 mb-1">
              Proust Effect — when a sensation brings you back to where a moment began.
            </p>
            <p className="font-serif text-xs md:text-sm uppercase tracking-widest opacity-70 italic">
              Take a sensation with you — it will bring you back to Yong.
            </p>
          </div>
          {/* Navigation moved here from Home */}
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-6 font-serif text-lg md:text-2xl font-bold uppercase tracking-tight">
            <Link to="/about" className="hover:italic hover:underline underline-offset-4">About me</Link>
            <span className="opacity-30">|</span>
            <Link to="/research" className="hover:italic hover:underline underline-offset-4">Research</Link>
            <span className="opacity-30">|</span>
            <Link to="/music" className="hover:italic hover:underline underline-offset-4">Music</Link>
            <span className="opacity-30">|</span>
            <Link to="/projects" className="hover:italic hover:underline underline-offset-4">Portfolio</Link>
            <span className="opacity-30">|</span>
            <Link to="/travel" className="hover:italic hover:underline underline-offset-4">Travel</Link>
            <span className="opacity-30">|</span>
            <Link to="/writing" className="hover:italic hover:underline underline-offset-4">Writing</Link>
          </nav>
        </div>
        <div className="w-full flex justify-between items-center py-2 newspaper-border-b text-[11px] font-mono uppercase tracking-wider">
          <span>{date}</span>
          <div className="flex gap-4">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-8 newspaper-border-b pb-4">
    <h2 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight">{title}</h2>
    {subtitle && <p className="font-mono text-xs uppercase mt-2 opacity-60 tracking-widest">{subtitle}</p>}
  </div>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="max-w-7xl mx-auto px-4 py-8"
  >
    {children}
  </motion.div>
);

// --- Pages ---

const Home = () => {
  const researchThumbnails = [
    'https://picsum.photos/seed/energy1/400/300',
    'https://picsum.photos/seed/blockchain1/400/300',
    'https://picsum.photos/seed/ai1/400/300',
    'https://picsum.photos/seed/grid1/400/300',
    'https://picsum.photos/seed/token1/400/300',
  ];

  const sections = [
    { id: 'about', title: 'The Architect of Energy', icon: <User size={24} />, desc: 'Meet Yongjae Kim, an electrical engineering student bridging the gap between infrastructure and decentralized networks.', grid: 'md:col-start-1 md:row-start-1 md:row-span-2', img: 'https://picsum.photos/seed/yongjae/800/1000' },
    { id: 'research', title: 'Future Markets', icon: <Zap size={24} />, desc: 'Exploring energy tokenization, electricity price signals, and the next generation of power system economics.', grid: 'md:col-start-2 md:col-span-2 md:row-start-1', img: 'https://picsum.photos/seed/energy/800/300' },
    { id: 'music', title: 'Sonic Textures', icon: <MusicIcon size={24} />, desc: 'The soundtrack to research and development.', grid: 'md:col-start-2 md:row-start-2', img: 'https://picsum.photos/seed/music/400/400' },
    { id: 'travel', title: 'Global Frontier', icon: <Plane size={24} />, desc: 'Documenting perspectives from Southeast Asia, the Middle East, and Europe.', grid: 'md:col-start-3 md:row-start-2', img: 'https://picsum.photos/seed/travel/400/400' },
    { id: 'projects', title: 'HY-Path & Beyond', icon: <Briefcase size={24} />, desc: 'Building AI voice assistants and researching renewable certificate systems in Southeast Asia.', grid: 'md:col-start-1 md:row-start-3', img: 'https://picsum.photos/seed/project/600/400' },
    { id: 'writing', title: 'Knowledge Archive', icon: <PenTool size={24} />, desc: 'A collection of reflections on emerging technologies and personal experiments.', grid: 'md:col-start-2 md:col-span-2 md:row-start-3', img: 'https://picsum.photos/seed/writing/800/300' },
  ];

  return (
    <PageTransition>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((s) => (
          <Link 
            key={s.id} 
            to={`/${s.id}`} 
            className={`${s.grid} group relative flex flex-col newspaper-border p-6 hover:bg-black hover:text-white transition-all duration-500 ease-in-out shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100">Section: {s.id}</span>
              <div className="group-hover:rotate-12 transition-transform">{s.icon}</div>
            </div>
            <div className="flex-grow">
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3 leading-none uppercase group-hover:italic">{s.title}</h3>
              <p className="text-sm opacity-80 group-hover:opacity-100 leading-relaxed mb-6">{s.desc}</p>
            </div>
            <div className={`overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 ${s.id === 'about' ? 'h-full min-h-[300px]' : 'h-40 md:h-56'}`}>
              {s.id === 'research' ? (
                <div className="flex gap-2 animate-marquee-slow h-full">
                  {[...researchThumbnails, ...researchThumbnails].map((thumb, idx) => (
                    <img key={idx} src={thumb} className="h-full w-auto object-cover border-r border-black" referrerPolicy="no-referrer" />
                  ))}
                </div>
              ) : (
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              )}
            </div>
          </Link>
        ))}
        
        {/* Unbalanced Extra Element: Experiments Ticker */}
        <Link to="/experiments" className="md:col-span-3 newspaper-border p-4 bg-white hover:bg-black hover:text-white transition-colors overflow-hidden flex items-center">
          <div className="flex gap-12 animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em]">
            <span>• Experiments: Autonomous Trading Agents • Decentralized Prediction Markets • Crypto Market Structures • AI Workflow Automation • </span>
            <span>• Experiments: Autonomous Trading Agents • Decentralized Prediction Markets • Crypto Market Structures • AI Workflow Automation • </span>
          </div>
        </Link>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 45s linear infinite;
        }
      `}} />
    </PageTransition>
  );
};

const About = () => (
  <PageTransition>
    <SectionHeader title="About Me" subtitle="The Profile of a Visionary" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-2 space-y-6">
        <p className="font-serif text-2xl leading-relaxed italic">
          "I believe the next major shift in technology will happen at the intersection of energy, computation, and decentralized networks."
        </p>
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            Hi, I'm <strong>Yongjae Kim</strong>. I study <strong>Electrical Engineering</strong> and spend most of my time exploring ideas around energy systems, blockchain infrastructure, and AI agents.
          </p>
          <p>
            My work focuses on how future energy markets, verification systems, and autonomous agents will reshape industries. Recently, I’ve been researching energy tokenization, climate verification infrastructure, and decentralized coordination systems.
          </p>
          <div className="newspaper-border p-6 bg-white/50">
            <h4 className="font-mono text-sm uppercase font-bold mb-4">Core Focus Areas</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-center gap-2"><Zap size={16} /> Energy Systems & Markets</li>
              <li className="flex items-center gap-2"><Globe size={16} /> Blockchain & Tokenized Assets</li>
              <li className="flex items-center gap-2"><FlaskConical size={16} /> AI Agents & Coordination</li>
              <li className="flex items-center gap-2"><Briefcase size={16} /> DePIN Infrastructure</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="newspaper-border p-2">
          <img src="https://picsum.photos/seed/yongjae-portrait/400/500" alt="Yongjae Kim" className="w-full grayscale" referrerPolicy="no-referrer" />
          <p className="font-mono text-[10px] mt-2 text-center uppercase">Fig 1. Yongjae Kim, Seoul 2026</p>
        </div>
        <div className="newspaper-border p-4 space-y-4">
          <h4 className="font-serif font-bold uppercase border-b border-black pb-2">Education</h4>
          <p className="text-sm">
            <strong>B.S. Electrical Engineering</strong><br />
            Hanyang University (Expected)<br />
            Focus: Energy Systems & AI
          </p>
        </div>
      </div>
    </div>
  </PageTransition>
);

const Research = () => (
  <PageTransition>
    <SectionHeader title="Research" subtitle="Inquiry into the Future" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { 
          title: "Energy Systems", 
          items: ["Power system economics", "Electricity markets and price signals", "Energy storage systems (ESS)", "Renewable integration"],
          icon: <Zap className="mb-4" />
        },
        { 
          title: "Energy + Blockchain", 
          items: ["Energy tokenization", "Renewable energy certificates (REC)", "Climate verification infrastructure", "On-chain MRV systems"],
          icon: <Globe className="mb-4" />
        },
        { 
          title: "Autonomous Systems", 
          items: ["AI agents in markets", "Autonomous coordination networks", "Decentralized compute"],
          icon: <FlaskConical className="mb-4" />
        }
      ].map((cat, i) => (
        <div key={i} className="newspaper-border p-6 flex flex-col">
          {cat.icon}
          <h3 className="font-serif text-2xl font-bold mb-4 uppercase">{cat.title}</h3>
          <ul className="space-y-3 flex-grow">
            {cat.items.map((item, j) => (
              <li key={j} className="flex gap-2 text-sm leading-tight border-b border-black/10 pb-2">
                <span className="font-mono opacity-50">0{j+1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </PageTransition>
);

const Projects = () => (
  <PageTransition>
    <SectionHeader title="Projects" subtitle="Building the Infrastructure" />
    <div className="space-y-12">
      {[
        {
          title: "HY-Path",
          tagline: "AI Voice-Based Administrative Assistant",
          desc: "Designed for universities and public institutions, this system allows users to call and receive automated responses for administrative inquiries. It reduces workload and improves accessibility.",
          features: ["Voice AI interface", "Knowledge retrieval", "Automated assistance", "Human handoff"],
          img: "https://picsum.photos/seed/hypath/800/400"
        },
        {
          title: "Global Frontier Project",
          tagline: "International Energy Research",
          desc: "Focused on energy and renewable certificate systems in Southeast Asia. Activities included interviewing institutions, analyzing REC markets, and researching verification issues in Malaysia.",
          features: ["Market analysis", "Institutional interviews", "Verification research", "Regional coordination"],
          img: "https://picsum.photos/seed/frontier/800/400"
        },
        {
          title: "Energy Tokenization Research",
          tagline: "kWh-Backed Assets",
          desc: "Exploring how electricity production can be represented as tokenized energy units. Potential structures include energy-backed stable tokens and decentralized energy markets.",
          features: ["Tokenomics design", "Stablecoin structure", "Governance models", "Market simulation"],
          img: "https://picsum.photos/seed/token/800/400"
        }
      ].map((p, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 newspaper-border p-6">
          <div className={i % 2 === 1 ? 'md:order-2' : ''}>
            <img src={p.img} alt={p.title} className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-3xl font-bold uppercase mb-1">{p.title}</h3>
            <p className="font-mono text-xs uppercase opacity-60 mb-4 tracking-widest">{p.tagline}</p>
            <p className="text-lg mb-6 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.features.map((f, j) => (
                <span key={j} className="text-[10px] font-mono uppercase px-2 py-1 border border-black">{f}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </PageTransition>
);

const Experiments = () => (
  <PageTransition>
    <SectionHeader title="Experiments" subtitle="Behavioral Systems in Real Environments" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <p className="text-xl font-serif italic">
          "I enjoy running small experiments around ideas. These help me understand how emerging systems behave in real environments."
        </p>
        <div className="grid grid-cols-1 gap-4">
          {['Autonomous trading agents', 'Decentralized prediction markets', 'Crypto market structures', 'AI-powered workflow automation'].map((exp, i) => (
            <div key={i} className="newspaper-border p-4 flex items-center justify-between hover:bg-black hover:text-white transition-colors cursor-default">
              <span className="font-serif text-lg uppercase font-bold">{exp}</span>
              <FlaskConical size={20} />
            </div>
          ))}
        </div>
      </div>
      <div className="newspaper-border p-8 bg-black text-white flex flex-col justify-center items-center text-center">
        <FlaskConical size={64} className="mb-6 animate-pulse" />
        <h3 className="font-serif text-3xl font-bold uppercase mb-4">Under Observation</h3>
        <p className="font-mono text-sm opacity-70">
          Current focus: Testing LLM-driven coordination protocols for microgrids.
        </p>
      </div>
    </div>
  </PageTransition>
);

const Travel = () => (
  <PageTransition>
    <SectionHeader title="Travel" subtitle="Perspectives on Global Infrastructure" />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { loc: 'Southeast Asia', date: '2024', img: 'https://picsum.photos/seed/sea/400/600' },
        { loc: 'Middle East', date: 'Planned', img: 'https://picsum.photos/seed/me/400/600' },
        { loc: 'Europe', date: 'Planned', img: 'https://picsum.photos/seed/eu/400/600' },
        { loc: 'South Korea', date: 'Base', img: 'https://picsum.photos/seed/kr/400/600' },
      ].map((t, i) => (
        <div key={i} className="newspaper-border p-2 group overflow-hidden">
          <div className="relative h-80 overflow-hidden">
            <img src={t.img} alt={t.loc} className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-serif text-2xl uppercase italic">{t.loc}</span>
            </div>
          </div>
          <div className="mt-2 flex justify-between items-center px-1">
            <span className="font-serif font-bold uppercase">{t.loc}</span>
            <span className="font-mono text-[10px] opacity-60">{t.date}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-12 newspaper-border p-8 text-center italic font-serif text-2xl">
      "Travel helps me gain new perspectives on technology, infrastructure, and society."
    </div>
  </PageTransition>
);

const Writing = () => (
  <PageTransition>
    <SectionHeader title="Writing" subtitle="Personal Knowledge Archive" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-8">
        {[
          { title: "The Tokenization of Energy Units", date: "Mar 2026", category: "Research" },
          { title: "AI Agents in Decentralized Markets", date: "Feb 2026", category: "AI" },
          { title: "Reflections on Southeast Asian Energy Markets", date: "Jan 2026", category: "Travel" },
          { title: "Building HY-Path: Lessons Learned", date: "Dec 2025", category: "Project" },
        ].map((post, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="flex justify-between items-end mb-2">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">{post.category}</span>
              <span className="font-mono text-[10px] opacity-50">{post.date}</span>
            </div>
            <h3 className="font-serif text-2xl font-bold uppercase group-hover:underline decoration-2 underline-offset-4">{post.title}</h3>
            <p className="mt-2 text-sm opacity-70 line-clamp-2">Exploring the intersection of {post.category.toLowerCase()} and emerging technologies in the modern landscape...</p>
          </div>
        ))}
      </div>
      <div className="newspaper-border p-6 bg-white flex flex-col">
        <h3 className="font-serif text-xl font-bold uppercase mb-4 border-b border-black pb-2">Topics of Interest</h3>
        <div className="flex flex-wrap gap-3">
          {['Energy Systems', 'Crypto', 'Blockchain', 'AI Agents', 'Emerging Tech', 'Personal Experiments', 'DePIN', 'Tokenomics'].map((tag, i) => (
            <span key={i} className="px-3 py-1 border border-black font-mono text-xs uppercase hover:bg-black hover:text-white transition-colors cursor-default">
              #{tag.replace(/\s/g, '')}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-8">
          <p className="font-serif italic text-lg">"Writing is the process by which I clarify my own thinking on complex systems."</p>
        </div>
      </div>
    </div>
  </PageTransition>
);

const Music = () => (
  <PageTransition>
    <SectionHeader title="Music" subtitle="The Sonic Backdrop" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1 space-y-6">
        <div className="newspaper-border p-4 bg-black text-white aspect-square flex flex-col justify-center items-center">
          <MusicIcon size={80} className="mb-4" />
          <h3 className="font-serif text-2xl font-bold uppercase">Now Playing</h3>
          <p className="font-mono text-xs opacity-60 mt-2">Ambient / Techno / Jazz</p>
        </div>
        <p className="font-serif italic text-lg leading-relaxed">
          "Music is the soundtrack to research and development. It defines the rhythm of my focus."
        </p>
      </div>
      <div className="md:col-span-2 newspaper-border p-6">
        <h3 className="font-serif text-2xl font-bold uppercase mb-6 border-b border-black pb-2">Curated Playlists</h3>
        <div className="space-y-4">
          {[
            { title: "Deep Focus: Energy Research", tracks: "12 Tracks", genre: "Ambient" },
            { title: "Late Night Coding", tracks: "24 Tracks", genre: "Techno" },
            { title: "Travel Reflections", tracks: "18 Tracks", genre: "Jazz / Lo-fi" },
            { title: "System Architecture", tracks: "15 Tracks", genre: "Classical Modern" },
          ].map((pl, i) => (
            <div key={i} className="flex justify-between items-center p-4 border border-black/20 hover:border-black transition-colors group cursor-pointer">
              <div>
                <h4 className="font-serif font-bold uppercase text-lg">{pl.title}</h4>
                <p className="font-mono text-[10px] opacity-50">{pl.genre} • {pl.tracks}</p>
              </div>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageTransition>
);

const Contact = () => (
  <PageTransition>
    <SectionHeader title="Contact" subtitle="Reach Out for Collaboration" />
    <div className="max-w-2xl mx-auto text-center space-y-12 py-12">
      <p className="font-serif text-3xl leading-relaxed">
        Feel free to reach out if you'd like to collaborate or discuss ideas regarding energy, blockchain, or AI.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <a href="mailto:your@email.com" className="newspaper-border p-6 flex flex-col items-center gap-4 hover:bg-black hover:text-white transition-all group">
          <Mail size={32} />
          <span className="font-mono text-sm uppercase font-bold">your@email.com</span>
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="newspaper-border p-6 flex flex-col items-center gap-4 hover:bg-black hover:text-white transition-all group">
          <Globe size={32} />
          <span className="font-mono text-sm uppercase font-bold">@yourhandle</span>
        </a>
      </div>
      <div className="pt-12 border-t border-black/10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40">© 2026 Yongjae Kim • All Rights Reserved</p>
      </div>
    </div>
  </PageTransition>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-black selection:text-white">
        <Header />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experiments" element={<Experiments />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/music" element={<Music />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        {/* Navigation Helper for subpages */}
        <ScrollToTop />
      </div>
    </Router>
  );
}

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  if (pathname === '/') return null;
  
  return (
    <Link 
      to="/" 
      className="fixed bottom-8 right-8 bg-white newspaper-border p-3 hover:bg-black hover:text-white transition-all z-50 shadow-lg flex items-center gap-2 font-mono text-xs uppercase font-bold"
    >
      <ArrowLeft size={16} /> Back to Home
    </Link>
  );
}
