import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Truck, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Full-width Macro Operational Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <iframe 
            className="w-[100vw] h-[177.77vw] min-h-[100vh] min-w-[56.25vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-[3.5] z-0"
            src="https://www.youtube.com/embed/D-brFC05uRQ?autoplay=1&mute=1&loop=1&playlist=D-brFC05uRQ&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&enablejsapi=1" 
            title="Macro Operational Background"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          />
          {/* Subtle Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-paper/40 backdrop-blur-[1px] z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 py-32">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-5xl"
            >
              <div className="label-micro mb-10 flex items-center justify-center gap-6">
                <span className="w-12 h-[1px] bg-accent/30"></span>
                <span className="premium-gradient-text tracking-[0.5em]">Global Mineral Excellence</span>
                <span className="w-12 h-[1px] bg-accent/30"></span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-serif leading-[0.9] tracking-tighter mb-16 relative">
                Premium <span className="italic text-accent block md:inline">Minerals</span> <br />
                Refined.
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/20 blur-[150px] -z-10 opacity-50" />
              </h1>
              <div className="flex flex-col items-center gap-12">
                <p className="text-xl md:text-2xl font-serif italic text-ink/70 max-w-2xl leading-relaxed">
                  "Nath Group: Bridging nature's raw power with <br className="hidden md:block"/> high-end industrial engineering."
                </p>
                <Link 
                  to="/products"
                  className="group relative"
                >
                  <div className="px-12 py-5 rounded-full border border-accent/30 bg-accent/5 hover:bg-accent text-accent hover:text-paper transition-all duration-700 backdrop-blur-xl text-xs font-bold uppercase tracking-[0.4em] shadow-2xl">
                    Explore Our Catalog
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 md:bottom-16 right-10 md:right-16 flex flex-col items-center gap-6 translate-x-1/2 hidden md:flex">
        <div className="label-micro opacity-40 rotate-90 origin-center translate-y-12">Explore</div>
        <div className="w-[2px] h-32 bg-line/20 relative overflow-hidden rounded-full">
          <motion.div 
            animate={{ y: [-128, 128] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emerald to-accent"
          />
        </div>
      </div>

      {/* Stats Section with Glass Cards */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: 'Global Network', value: '25+', sub: 'Countries' },
              { label: 'Mining Assets', value: '30+', sub: 'Active Mines' },
              { label: 'Deep Expertise', value: '15+', sub: 'Years' },
              { label: 'Volume', value: '500k', sub: 'Tons/Year' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 md:p-12 rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center text-center group"
              >
                <span className="label-micro mb-4 md:mb-6 group-hover:text-ink">{stat.label}</span>
                <span className="text-5xl md:text-6xl font-serif mb-2 bg-clip-text text-transparent bg-gradient-to-br from-emerald to-accent">{stat.value}</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-40 font-bold font-mono">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Gallery Section */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-white/2">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-12">
            <div className="max-w-2xl">
              <div className="label-micro mb-8">Nath Enterprise</div>
              <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                Our <span className="italic text-accent">Operations</span> <br />
                & Precision Supply.
              </h2>
            </div>
            <p className="text-lg md:text-xl text-body font-serif italic max-w-sm border-l border-line pl-8">
              A glimpse into the massive scale of our extraction units and refined mineral processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-2 aspect-[16/10] overflow-hidden rounded-[3rem] border border-line p-4 md:p-6 bg-glass group">
              <img 
                src="/images/enterprise/op-3.jpg" 
                alt="Main Extraction Site" 
                className="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute top-12 left-12 glass-card p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs font-mono">Aerial View • Site 03</span>
              </div>
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-[3rem] border border-line p-4 md:p-6 bg-glass group">
              <img 
                src="/images/enterprise/min-1.jpg" 
                alt="Mineral Processing" 
                className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-all duration-1000"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] border border-line p-4 md:p-6 bg-glass group">
              <img 
                src="/images/enterprise/op-1.jpg" 
                alt="Mining Operations" 
                className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-all duration-1000"
              />
            </div>
            <div className="md:col-span-2 aspect-[21/9] overflow-hidden rounded-[3rem] border border-line p-4 md:p-6 bg-glass group">
              <img 
                src="/images/enterprise/op-2.jpg" 
                alt="Logistics Fleet" 
                className="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute bottom-12 right-12 glass-card p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs font-mono tracking-widest">Global Logistics • Ready for Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - High Contrast Layout */}
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-emerald/5 rounded-full blur-[100px] md:blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <div className="relative group lg:order-1">
              <div className="aspect-square overflow-hidden rounded-[3rem] md:rounded-[4rem] border border-line p-4 md:p-6 bg-glass relative z-10 hover-glow transition-all duration-700">
                <img 
                  src="https://picsum.photos/seed/industrial-premium/1000/1000" 
                  alt="Industrial Operations" 
                  className="w-full h-full object-cover rounded-[2.5rem] md:rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 md:-bottom-16 -right-8 md:-right-16 w-64 md:w-80 h-64 md:h-80 glass-card rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 hidden md:block z-20 shadow-2xl border-emerald/20">
                <ShieldCheck size={56} className="text-emerald mb-6 md:mb-8" />
                <h4 className="text-xl md:text-2xl font-serif mb-3 italic text-ink">Certified Purity</h4>
                <p className="text-xs md:text-sm text-body leading-relaxed">ISO 9001:2015 certified processes ensuring consistent world-class quality.</p>
              </div>
            </div>
            
            <div className="relative lg:order-2">
              <div className="label-micro mb-8 md:mb-12">Industrial Precision</div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl mb-10 md:mb-16 leading-tight font-serif tracking-tighter">
                Defining the <br />
                <span className="italic premium-gradient-text drop-shadow-sm">Modern</span> <br />
                Infrastructure.
              </h2>
              <div className="space-y-12 md:space-y-16">
                {[
                  {
                    icon: <Truck size={28} />,
                    title: "Advanced Logistics",
                    desc: "Our high-precision supply chain ensures our minerals reach your global facility with zero latency."
                  },
                  {
                    icon: <Award size={28} />,
                    title: "Custom Refining",
                    desc: "We engineer bespoke mineral solutions tailored to the atomic precise requirements of your industrial vertical."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 md:gap-10 group cursor-pointer">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl border border-line flex items-center justify-center shrink-0 text-emerald group-hover:bg-emerald group-hover:text-paper transition-all duration-500 glass-card">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif mb-2 md:mb-4 italic group-hover:text-accent transition-colors text-ink">{item.title}</h3>
                      <p className="text-base md:text-lg text-body leading-relaxed max-w-md">{item.desc}</p>
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
