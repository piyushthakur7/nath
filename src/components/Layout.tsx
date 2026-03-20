import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  MessageCircle
} from 'lucide-react';
import { generateLogo } from '../services/logoService';
import { cn } from '../lib/utils';

export default function Layout() {
  const [logo, setLogo] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const generatedLogo = await generateLogo();
        setLogo(generatedLogo);
      } catch (error) {
        console.error("Failed to generate logo:", error);
      }
    };
    fetchLogo();
  }, []);

  const whatsappLink = `https://wa.me/919714485318`;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-accent selection:text-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <Link to="/" className="flex items-center gap-4 group">
              {logo ? (
                <img src={logo} alt="Nath Group Logo" className="h-14 w-14 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              ) : (
                <div className="h-12 w-12 bg-ink flex items-center justify-center text-paper font-serif italic text-2xl">N</div>
              )}
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-medium tracking-tight leading-none">Nath Group</span>
                <span className="label-micro mt-1">Minerals & Mining</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className={cn(
                    "text-[13px] font-medium uppercase tracking-[0.1em] transition-all hover:text-accent",
                    location.pathname === item.path ? "text-accent" : "text-ink/60"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.1em] border-l border-line pl-12"
              >
                <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-all">
                  <MessageCircle size={18} />
                </div>
                <span>Inquiry</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2"
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-paper border-b border-line overflow-hidden"
            >
              <div className="px-6 py-12 flex flex-col gap-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "text-3xl font-serif italic",
                      location.pathname === item.path ? "text-accent" : "text-ink"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <a 
                  href={whatsappLink}
                  className="mt-4 bg-ink text-paper px-8 py-4 rounded-full text-center font-bold uppercase tracking-widest text-sm"
                >
                  Contact on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-24 border-t border-line bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-10 bg-ink flex items-center justify-center text-paper font-serif italic text-xl">N</div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-medium tracking-tight">Nath Group</span>
                  <span className="label-micro">Minerals & Mining</span>
                </div>
              </div>
              <p className="text-ink/60 max-w-sm leading-relaxed font-serif italic text-lg">
                "Excellence in mineral extraction and processing, serving the global industry with integrity and precision since 2008."
              </p>
            </div>
            
            <div>
              <h4 className="label-micro mb-8">Navigation</h4>
              <ul className="space-y-4">
                {navItems.map(item => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-sm hover:text-accent transition-colors">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="label-micro mb-8">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex flex-col">
                  <span className="text-ink/40 text-[10px] uppercase tracking-widest mb-1">Call</span>
                  <span>+91 97144 85318</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-ink/40 text-[10px] uppercase tracking-widest mb-1">Email</span>
                  <span>info@nathminerals.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-line gap-8">
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink/40 font-bold">
              © {new Date().getFullYear()} Nath Group of Minerals. All rights reserved.
            </div>
            
            <div className="flex gap-12">
              {['Privacy Policy', 'Terms of Service'].map(item => (
                <a key={item} href="#" className="text-[11px] uppercase tracking-[0.2em] text-ink/40 font-bold hover:text-accent transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
