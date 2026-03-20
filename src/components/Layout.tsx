import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  MessageCircle
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const logo = "/logo.png";

  const whatsappLink = `https://wa.me/919714485318`;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-accent selection:text-paper flex flex-col relative overflow-x-hidden">
      {/* Mesh Background */}
      <div className="mesh-bg">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-emerald/20 rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-copper/20 rounded-full mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-accent/10 rounded-full mix-blend-screen" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl h-24 flex justify-between items-center px-8 shadow-2xl">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="h-14 w-14 bg-white/5 p-1 rounded-xl shadow-inner group-hover:bg-white/10 transition-colors duration-500 overflow-hidden border border-white/5">
                <img src={logo} alt="Nath Group Logo" className="h-full w-full object-contain brightness-[1.1] scale-[1.15] group-hover:scale-125 transition-all duration-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-medium tracking-tight leading-none premium-gradient-text uppercase">Nath Group</span>
                <span className="label-micro mt-1 opacity-60">Minerals & Mining</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-accent relative group/item",
                    location.pathname === item.path ? "text-accent" : "text-ink/60"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-500",
                    location.pathname === item.path ? "w-full" : "w-0 group-hover/item:w-full"
                  )} />
                </Link>
              ))}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] bg-accent text-paper px-6 py-3 rounded-full hover:bg-emerald transition-all duration-500 shadow-lg shadow-accent/20"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <MessageCircle size={16} />
                </div>
                <span>Inquiry</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-3 glass-card rounded-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="md:hidden absolute top-32 left-6 right-6 glass-card rounded-3xl overflow-hidden p-8 shadow-2xl"
            >
              <div className="flex flex-col gap-6 text-center">
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "text-4xl font-serif italic transition-all",
                      location.pathname === item.path ? "text-accent" : "text-ink"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <a 
                  href={whatsappLink}
                  className="mt-6 bg-accent text-paper px-8 py-5 rounded-3xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-accent/20"
                >
                  Contact on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-32 bg-paper/50 backdrop-blur-3xl border-t border-line mt-32 relative overflow-hidden">
        {/* Background blobs for footer */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-24 mb-32">
            <div className="col-span-2">
              <div className="flex items-center gap-5 mb-10">
                <div className="h-16 w-16 bg-white/5 p-1 rounded-2xl shadow-inner overflow-hidden border border-white/5">
                  <img src={logo} alt="Nath Group Logo" className="h-full w-full object-contain brightness-[1.1]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-medium tracking-tight premium-gradient-text uppercase">Nath Group</span>
                  <span className="label-micro mt-1 opacity-60">Minerals & Mining</span>
                </div>
              </div>
              <p className="text-ink/60 max-w-sm leading-relaxed font-serif italic text-xl">
                "Excellence in mineral extraction and processing, serving the global industry with integrity and precision since 2008."
              </p>
            </div>
            
            <div>
              <h4 className="label-micro mb-10 opacity-40">Information</h4>
              <ul className="space-y-6">
                {navItems.map(item => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-lg font-serif italic hover:text-accent transition-all duration-300">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="label-micro mb-10 opacity-40">Contact HQ</h4>
              <ul className="space-y-8 text-lg font-serif italic">
                <li className="flex flex-col group cursor-pointer">
                  <span className="text-accent text-[10px] uppercase tracking-widest mb-1 font-bold font-mono">Operations</span>
                  <span className="group-hover:text-emerald transition-colors">+91 97144 85318</span>
                </li>
                <li className="flex flex-col group cursor-pointer">
                  <span className="text-accent text-[10px] uppercase tracking-widest mb-1 font-bold font-mono">General</span>
                  <span className="group-hover:text-emerald transition-colors">info@nathminerals.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-line gap-12">
            <div className="text-[10px] uppercase tracking-[0.3em] text-ink/30 font-bold font-mono">
              © {new Date().getFullYear()} Nath Group of Minerals. All rights reserved.
            </div>
            
            <div className="flex gap-16">
              {['Privacy Policy', 'Terms of Service'].map(item => (
                <a key={item} href="#" className="text-[10px] uppercase tracking-[0.3em] text-ink/30 font-bold font-mono hover:text-accent transition-all">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
