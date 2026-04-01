import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="py-24 md:py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero */}
        <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-end mb-24 md:mb-48">
          <div className="lg:col-span-8">
            <div className="label-micro mb-8 md:mb-10 flex items-center gap-4 md:gap-5">
              <span className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-emerald to-accent"></span>
              <span className="premium-gradient-text uppercase text-[9px] md:text-[11px]">Our Legacy</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-serif leading-[0.85] md:leading-[0.75] tracking-tighter mb-8 md:mb-12">
              Mining <br />
              <span className="italic text-accent drop-shadow-[0_0_30px_rgba(234,179,8,0.2)]">With</span> <br />
              Vision.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xl md:text-2xl font-serif italic text-body leading-relaxed glass-card p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-line/40 shadow-2xl bg-glass/60 backdrop-blur-md">
              Since 2008, Nath Enterprise has been dedicated to the extraction and processing of high-purity industrial minerals for the world's most demanding sectors.
            </p>
          </div>
        </div>

        {/* Image Grid with Premium Style */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-24 md:mb-48">
          <div className="aspect-[16/9] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-line bg-glass p-3 md:p-5 hover-glow group transition-all duration-700">
            <img 
              src="/images/enterprise/op-3.jpg" 
              alt="Aerial Site Overview" 
              className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2.5rem] group-hover:scale-105 transition-all duration-1000"
            />
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-line bg-glass p-3 md:p-5 hover-glow group transition-all duration-700 md:mt-32">
            <img 
              src="/images/enterprise/min-2.jpg" 
              alt="Mineral Processing" 
              className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2.5rem] group-hover:scale-105 transition-all duration-1000"
            />
          </div>
        </div>

        {/* Story - Editorial Style */}
        <div className="grid lg:grid-cols-12 gap-16 md:gap-32 mb-24 md:mb-48">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-serif mb-10 md:mb-12 italic premium-gradient-text">Our Philosophy</h2>
            <div className="space-y-8 md:space-y-10">
              <div className="p-8 md:p-10 glass-card rounded-[2rem] md:rounded-[2.5rem] border-line/40 hover:border-accent/40 group cursor-default transition-all duration-500 bg-glass/60">
                <h4 className="label-micro mb-4 md:mb-6 group-hover:text-accent font-bold">01. Precision</h4>
                <p className="text-base md:text-lg text-body font-serif italic leading-relaxed">Honest mining practices integrated with high-precision refining standards.</p>
              </div>
              <div className="p-8 md:p-10 glass-card rounded-[2rem] md:rounded-[2.5rem] border-line/40 hover:border-accent/40 group cursor-default transition-all duration-500 bg-glass/60">
                <h4 className="label-micro mb-4 md:mb-6 group-hover:text-accent font-bold">02. Evolution</h4>
                <p className="text-base md:text-lg text-body font-serif italic leading-relaxed">Constantly disrupting our own processing techniques to achieve absolute purity.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="text-2xl md:text-3xl font-serif italic text-body leading-relaxed border-l border-line pl-8 md:pl-16 py-4 md:py-8 lg:mt-10">
              <p className="mb-10 md:mb-12">
                Headquartered in the mineral-rich heart of Gujarat, Morbi, Nath Enterprise has evolved from a local extraction unit into a global powerhouse of industrial minerals.
              </p>
              <p className="mb-10 md:mb-12">
                We believe that minerals are the silent backbone of innovation. This responsibility drives us to maintain an uncompromising standard of consistency.
              </p>
              <p className="text-accent">
                Today, with assets in over 25 countries and 30+ active points of extraction, we continue to bridge the gap between Earth's raw resources and human ingenuity.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="glass-card rounded-[3rem] md:rounded-[4rem] p-10 md:p-32 border-line/10 relative overflow-hidden bg-gradient-to-br from-emerald/5 to-accent/5">
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-[100px] md:blur-[120px]" />
          <div className="label-micro mb-12 md:mb-16 opacity-40">Our Global Commitment</div>
          <div className="grid md:grid-cols-3 gap-16 md:gap-24 relative z-10">
            {[
              { title: 'Sustainability', desc: 'Implementing deep eco-integration mining to preserve Earth.' },
              { title: 'Logistics', desc: 'A hyper-responsive network ensuring your resources remain on the cutting edge.' },
              { title: 'Legacy', desc: 'Over 15 years of institutional knowledge driving every grain we process.' },
            ].map((item, i) => (
              <div key={i} className="group">
                <h3 className="text-3xl md:text-4xl font-serif mb-4 md:mb-6 italic group-hover:text-accent transition-all duration-500 text-ink">{item.title}</h3>
                <p className="text-lg md:text-xl text-body font-serif italic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

