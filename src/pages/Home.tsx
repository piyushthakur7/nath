import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Globe, ChevronRight, Truck, Award, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b border-line pt-20">
        {/* Background Large Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
          <motion.h1 
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="text-[40vw] font-serif whitespace-nowrap leading-none"
          >
            MINERALS MINERALS MINERALS
          </motion.h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="label-micro mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent"></span>
                Pioneering the Mineral Industry Since 2008
              </div>
              <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.8] tracking-tighter mb-12">
                Earth's <br />
                <span className="italic text-accent">Purest</span> <br />
                Essence.
              </h1>
              <div className="flex flex-col md:flex-row md:items-end gap-12">
                <p className="text-xl md:text-2xl font-serif italic text-ink/60 max-w-md leading-relaxed">
                  Nath Group of Minerals: Where traditional mining wisdom meets cutting-edge industrial precision.
                </p>
                <Link 
                  to="/products"
                  className="group flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] shrink-0"
                >
                  <div className="w-20 h-20 rounded-full border border-line flex items-center justify-center group-hover:bg-accent group-hover:text-paper group-hover:border-accent transition-all duration-700">
                    <ChevronRight size={32} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] opacity-40 mb-1">Explore Our</span>
                    <span>Product Catalog</span>
                  </div>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] overflow-hidden border border-line p-4 bg-paper relative z-10">
                <img 
                  src="https://picsum.photos/seed/mineral-raw/1000/1250" 
                  alt="Raw Mineral" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-8 -right-8 w-full h-full border border-accent/20 -z-10"></div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -left-12 bg-ink text-paper p-8 border border-line hidden xl:block z-20"
              >
                <div className="label-micro text-accent mb-2">Global Export</div>
                <div className="text-3xl font-serif italic">25+ Countries</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="label-micro opacity-40 rotate-90 origin-center translate-y-8">Scroll</div>
          <div className="w-[1px] h-24 bg-line relative overflow-hidden">
            <motion.div 
              animate={{ y: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-accent"
            />
          </div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="label-micro rotate-90 origin-right whitespace-nowrap opacity-20">
            NATURAL RESOURCES • INDUSTRIAL PRECISION • GLOBAL LOGISTICS
          </div>
        </div>
      </section>

      {/* Stats Section - Visible Grid Style */}
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 border-x border-line">
            {[
              { label: 'Global Reach', value: '25+', sub: 'Countries' },
              { label: 'Mining Assets', value: '30+', sub: 'Active Mines' },
              { label: 'Experience', value: '15+', sub: 'Years' },
              { label: 'Production', value: '500k', sub: 'Tons/Year' },
            ].map((stat, i) => (
              <div key={i} className="p-12 border-r border-line last:border-r-0 flex flex-col items-center text-center group hover:bg-ink hover:text-paper transition-colors duration-500">
                <span className="label-micro mb-4 group-hover:text-accent">{stat.label}</span>
                <span className="text-5xl font-serif mb-1">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest opacity-40">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Split Layout */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-square overflow-hidden border border-line p-4">
                <img 
                  src="https://picsum.photos/seed/industrial/1000/1000" 
                  alt="Industrial Operations" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/10 backdrop-blur-xl border border-line p-8 hidden md:block">
                <ShieldCheck size={40} className="text-accent mb-6" />
                <h4 className="text-xl font-serif mb-2">Certified Excellence</h4>
                <p className="text-sm text-ink/60 leading-relaxed">ISO 9001:2015 certified processes ensuring consistent quality.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-5xl md:text-6xl mb-12 leading-tight">
                Crafting the <br />
                <span className="italic">Foundation</span> of <br />
                Modern Industry.
              </h2>
              <div className="space-y-12">
                {[
                  {
                    icon: <Truck size={24} />,
                    title: "Seamless Logistics",
                    desc: "Our integrated supply chain ensures that our minerals reach your facility with zero compromise on schedule or quality."
                  },
                  {
                    icon: <Award size={24} />,
                    title: "Bespoke Processing",
                    desc: "We offer customized mineral processing to meet the specific chemical and physical requirements of your industry."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8">
                    <div className="w-12 h-12 rounded-full border border-line flex items-center justify-center shrink-0 text-accent">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                      <p className="text-ink/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
