import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Globe, ChevronRight, Truck, Award, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Large Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05] select-none overflow-hidden">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.05 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="text-[40vw] font-serif whitespace-nowrap leading-none premium-gradient-text"
          >
            NATH NATH NATH
          </motion.h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <div className="label-micro mb-10 flex items-center gap-5">
                <span className="w-12 h-[2px] bg-gradient-to-r from-emerald to-accent"></span>
                <span className="premium-gradient-text">Since 2008 • Global Mineral Excellence</span>
              </div>
              <h1 className="text-8xl md:text-[14rem] font-serif leading-[0.75] tracking-tighter mb-16 relative">
                Premium <br />
                <span className="italic text-accent drop-shadow-[0_0_50px_rgba(234,179,8,0.3)]">Minerals</span> <br />
                Refined.
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald/10 blur-[80px] -z-10" />
              </h1>
              <div className="flex flex-col md:flex-row md:items-end gap-16">
                <p className="text-2xl font-serif italic text-ink/70 max-w-lg leading-relaxed border-l-2 border-accent pl-10 py-4 bg-glass/20 backdrop-blur-sm rounded-r-3xl">
                  Nath Group: Bridging nature's raw power with high-end industrial engineering.
                </p>
                <Link 
                  to="/products"
                  className="group flex items-center gap-6 text-sm font-bold uppercase tracking-[0.3em] shrink-0"
                >
                  <div className="w-24 h-24 rounded-full border-2 border-line flex items-center justify-center group-hover:bg-accent group-hover:text-paper group-hover:border-accent group-hover:scale-110 transition-all duration-700 shadow-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <ChevronRight size={40} className="relative z-10" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] opacity-40 mb-1 font-mono">Curated</span>
                    <span className="premium-gradient-text">Catalog</span>
                  </div>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 relative group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[3rem] border border-line p-5 bg-glass relative z-10 hover-glow">
                <img 
                  src="https://picsum.photos/seed/mineral-raw-luxe/1000/1250" 
                  alt="Raw Mineral" 
                  className="w-full h-full object-cover rounded-[2rem] brightness-[1.1] transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Floating Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-emerald/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-accent/20 rounded-full animate-[spin_10s_linear_infinite]" />
              
              {/* Floating Glass Badge */}
              <motion.div 
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-16 -left-16 glass-card p-10 rounded-[2rem] hidden xl:block z-20 shadow-2xl"
              >
                <div className="label-micro text-accent mb-3">Global Export</div>
                <div className="text-4xl font-serif italic premium-gradient-text">25+ Nations</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-16 right-16 flex flex-col items-center gap-6 translate-x-1/2">
          <div className="label-micro opacity-40 rotate-90 origin-center translate-y-12">Explore</div>
          <div className="w-[2px] h-32 bg-line/20 relative overflow-hidden rounded-full">
            <motion.div 
              animate={{ y: [-128, 128] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emerald to-accent"
            />
          </div>
        </div>
      </section>

      {/* Stats Section with Glass Cards */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Global Network', value: '25+', sub: 'Countries', color: 'emerald' },
              { label: 'Mining Assets', value: '30+', sub: 'Active Mines', color: 'accent' },
              { label: 'Deep Expertise', value: '15+', sub: 'Years', color: 'copper' },
              { label: 'Volume', value: '500k', sub: 'Tons/Year', color: 'emerald' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-12 rounded-[2.5rem] flex flex-col items-center text-center group"
              >
                <span className="label-micro mb-6 group-hover:text-ink">{stat.label}</span>
                <span className={`text-6xl font-serif mb-2 bg-clip-text text-transparent bg-gradient-to-br from-${stat.color} to-paper`}>{stat.value}</span>
                <span className="text-xs uppercase tracking-widest opacity-40 font-bold font-mono">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - High Contrast Layout */}
      <section className="py-48 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald/5 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative group">
              <div className="aspect-square overflow-hidden rounded-[4rem] border border-line p-6 bg-glass relative z-10 hover-glow transition-all duration-700">
                <img 
                  src="https://picsum.photos/seed/industrial-premium/1000/1000" 
                  alt="Industrial Operations" 
                  className="w-full h-full object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-16 -right-16 w-80 h-80 glass-card rounded-[3.5rem] p-12 hidden md:block z-20 shadow-2xl border-emerald/20">
                <ShieldCheck size={56} className="text-emerald mb-8" />
                <h4 className="text-2xl font-serif mb-3 italic">Certified Purity</h4>
                <p className="text-sm text-ink/50 leading-relaxed">ISO 9001:2015 certified processes ensuring consistent world-class quality.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="label-micro mb-12">Industrial Precision</div>
              <h2 className="text-7xl md:text-8xl mb-16 leading-tight font-serif tracking-tighter">
                Defining the <br />
                <span className="italic premium-gradient-text drop-shadow-sm">Modern</span> <br />
                Infrastructure.
              </h2>
              <div className="space-y-16">
                {[
                  {
                    icon: <Truck size={28} />,
                    title: "Advanced Logistics",
                    color: "emerald",
                    desc: "Our high-precision supply chain ensures our minerals reach your global facility with zero latency and maximum throughput."
                  },
                  {
                    icon: <Award size={28} />,
                    title: "Custom Refining",
                    color: "accent",
                    desc: "We engineer bespoke mineral solutions tailored to the atomic precise requirements of your specific industrial vertical."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-10 group cursor-pointer">
                    <div className={`w-16 h-16 rounded-3xl border border-line flex items-center justify-center shrink-0 text-${item.color} group-hover:bg-${item.color} group-hover:text-paper transition-all duration-500 glass-card`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif mb-4 italic group-hover:text-accent transition-colors">{item.title}</h3>
                      <p className="text-ink/50 leading-relaxed text-lg max-w-md">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
