import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-32 items-start">
          {/* Header & Info */}
          <div className="lg:col-span-6">
            <div className="label-micro mb-10 flex items-center gap-5">
              <span className="w-12 h-[2px] bg-gradient-to-r from-emerald to-accent"></span>
              <span className="premium-gradient-text uppercase">Consultation</span>
            </div>
            <h1 className="text-8xl md:text-9xl font-serif leading-[0.8] tracking-tighter mb-12">
              Begin the <br />
              <span className="italic text-accent">Dialogue.</span>
            </h1>
            <p className="text-2xl font-serif italic text-ink/50 leading-relaxed mb-24 max-w-xl">
              Secure your industrial future with Earth's finest resources. Our specialists are ready to engineer your specific mineral solution.
            </p>

            <div className="grid gap-10">
              {[
                { label: 'Corporate HQ', value: 'B-1, Industrial Area, Barmer, Rajasthan, 344001', icon: <MapPin size={24} /> },
                { label: 'Direct Line', value: '+91 97144 85318', icon: <Phone size={24} /> },
                { label: 'Global Mail', value: 'info@nathminerals.com', icon: <Mail size={24} /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 group glass-card p-10 rounded-[2.5rem] border-emerald/5 hover:border-accent/30 transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-paper transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="label-micro mb-3 opacity-40">{item.label}</h4>
                    <p className="text-xl font-serif italic">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-12 md:p-20 rounded-[4rem] border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/5 rounded-full blur-[100px]" />
              
              <h3 className="text-4xl font-serif mb-12 italic premium-gradient-text">Inquiry Specimen</h3>
              <form className="space-y-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="label-micro opacity-40 ml-4">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="E.g. Alexander Pierce"
                      className="w-full bg-glass border border-line rounded-3xl px-8 py-5 focus:outline-none focus:border-accent transition-all font-serif italic text-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="label-micro opacity-40 ml-4">Corporate Email</label>
                    <input 
                      type="email" 
                      placeholder="puresource@industrial.com"
                      className="w-full bg-glass border border-line rounded-3xl px-8 py-5 focus:outline-none focus:border-accent transition-all font-serif italic text-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="label-micro opacity-40 ml-4">Subject</label>
                  <select className="w-full bg-glass border border-line rounded-3xl px-8 py-5 focus:outline-none focus:border-accent transition-all font-serif italic text-lg appearance-none">
                    <option>Bulk Acquisition Inquiry</option>
                    <option>Technical Specification Request</option>
                    <option>Custom Refining Consultation</option>
                    <option>Global Logistics Partnership</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="label-micro opacity-40 ml-4">Detailed Inquiry</label>
                  <textarea 
                    rows={6}
                    placeholder="Provide specific mineral grade or industrial requirements..."
                    className="w-full bg-glass border border-line rounded-3xl px-8 py-6 focus:outline-none focus:border-accent transition-all font-serif italic text-lg resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-accent text-paper py-8 rounded-[2.5rem] font-bold uppercase tracking-[0.4em] text-sm hover:bg-emerald transition-all duration-700 shadow-2xl shadow-accent/20">
                  Transmit Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
