import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero */}
        <div className="grid lg:grid-cols-12 gap-24 items-end mb-48">
          <div className="lg:col-span-8">
            <div className="label-micro mb-10 flex items-center gap-5">
              <span className="w-12 h-[2px] bg-gradient-to-r from-emerald to-accent"></span>
              <span className="premium-gradient-text uppercase">Our Legacy</span>
            </div>
            <h1 className="text-8xl md:text-[12rem] font-serif leading-[0.75] tracking-tighter mb-12">
              Mining <br />
              <span className="italic text-accent drop-shadow-[0_0_50px_rgba(234,179,8,0.2)]">With</span> <br />
              Vision.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-2xl font-serif italic text-ink/50 leading-relaxed glass-card p-10 rounded-[2.5rem] border-emerald/10 shadow-2xl">
              Since 2008, Nath Group of Minerals has been dedicated to the extraction and processing of high-purity industrial minerals for the world's most demanding sectors.
            </p>
          </div>
        </div>

        {/* Image Grid with Premium Style */}
        <div className="grid md:grid-cols-2 gap-16 mb-48">
          <div className="aspect-[16/9] overflow-hidden rounded-[3.5rem] border border-line bg-glass p-5 hover-glow group transition-all duration-700">
            <img 
              src="https://picsum.photos/seed/mine-luxe/1200/800" 
              alt="Mining Site" 
              className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-[3.5rem] border border-line bg-glass p-5 hover-glow group transition-all duration-700 md:mt-32">
            <img 
              src="https://picsum.photos/seed/lab-luxe/1200/800" 
              alt="Laboratory" 
              className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Story - Editorial Style */}
        <div className="grid lg:grid-cols-12 gap-32 mb-48">
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-serif mb-12 italic premium-gradient-text">Our Philosophy</h2>
            <div className="space-y-10">
              <div className="p-10 glass-card rounded-[2.5rem] border-emerald/10 hover:border-accent/40 group cursor-default transition-all duration-500">
                <h4 className="label-micro mb-6 group-hover:text-accent font-bold">01. Precision</h4>
                <p className="text-lg text-ink/50 font-serif italic leading-relaxed">Honest mining practices integrated with high-precision refining standards.</p>
              </div>
              <div className="p-10 glass-card rounded-[2.5rem] border-emerald/10 hover:border-accent/40 group cursor-default transition-all duration-500">
                <h4 className="label-micro mb-6 group-hover:text-accent font-bold">02. Evolution</h4>
                <p className="text-lg text-ink/50 font-serif italic leading-relaxed">Constantly disrupting our own processing techniques to achieve absolute purity.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="text-3xl font-serif italic text-ink/70 leading-relaxed border-l border-line pl-16 py-8">
              <p className="mb-12">
                Headquartered in the mineral-rich heart of Rajasthan, Barmer, Nath Group of Minerals has evolved from a local extraction unit into a global powerhouse of industrial minerals.
              </p>
              <p className="mb-12">
                We believe that minerals are the silent backbone of innovation. This responsibility drives us to maintain an uncompromising standard of consistency, ensuring our materials empower global industries to build the future.
              </p>
              <p className="text-accent">
                Today, with assets in over 25 countries and 30+ active points of extraction, we continue to bridge the gap between Earth's raw resources and human ingenuity.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="glass-card rounded-[4rem] p-16 md:p-32 border-line/10 relative overflow-hidden bg-gradient-to-br from-emerald/5 to-accent/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
          <div className="label-micro mb-16 opacity-40">Our Global Commitment</div>
          <div className="grid md:grid-cols-3 gap-24 relative z-10">
            {[
              { title: 'Sustainability', desc: 'Implementing deep eco-integration mining to preserve Earth while we extract its core.' },
              { title: 'Logistics', desc: 'A hyper-responsive network ensuring your resources remain on the cutting edge of delivery.' },
              { title: 'Legacy', desc: 'Over 15 years of institutional knowledge driving every grain of mineral we process.' },
            ].map((item, i) => (
              <div key={i} className="group">
                <h3 className="text-4xl font-serif mb-6 italic group-hover:text-accent transition-all duration-500">{item.title}</h3>
                <p className="text-xl text-ink/40 font-serif italic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
