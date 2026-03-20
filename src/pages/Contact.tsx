import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24 md:py-48 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-32">
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <div className="label-micro mb-8 md:mb-12 flex items-center gap-4 md:gap-5">
              <span className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-emerald to-accent"></span>
              <span className="premium-gradient-text uppercase">Inquire</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-12 md:mb-16 leading-tight tracking-tighter">
              Start The <br />
              <span className="italic text-accent drop-shadow-[0_0_30px_rgba(234,179,8,0.2)]">Dialogue.</span>
            </h1>
            
            <div className="space-y-8 md:space-y-12">
              <div className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border-emerald/10 hover-glow transition-all duration-700">
                <div className="flex items-center gap-6 md:gap-8 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-emerald/10 flex items-center justify-center text-emerald">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif italic">Headquarters</h3>
                </div>
                <p className="text-lg md:text-xl text-ink/50 leading-relaxed font-serif italic">
                  Nath Group of Minerals,<br />
                  NH-15, Barmer Road,<br />
                  Barmer, Rajasthan - 344001, India
                </p>
              </div>

              <div className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border-accent/10 hover-glow transition-all duration-700">
                <div className="flex items-center gap-6 md:gap-8 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif italic">Direct Reach</h3>
                </div>
                <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-ink/50 font-serif italic">
                  <p className="flex justify-between border-b border-line pb-3 md:pb-4">
                    <span>Operations:</span>
                    <span className="text-ink">+91 97144 85318</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Email:</span>
                    <span className="text-ink">info@nathminerals.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 lg:pt-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 sm:p-12 md:p-20 rounded-[2.5rem] md:rounded-[4rem] border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-[100px] md:blur-[120px]" />
              
              <form className="space-y-8 md:space-y-12 relative z-10">
                <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-3 md:space-y-4">
                    <label className="label-micro opacity-40">Identity</label>
                    <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-line py-4 md:py-6 text-xl md:text-2xl font-serif italic focus:outline-none focus:border-accent transition-all placeholder:text-ink/20" />
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <label className="label-micro opacity-40">Enterprise</label>
                    <input type="text" placeholder="Company Name" className="w-full bg-transparent border-b border-line py-4 md:py-6 text-xl md:text-2xl font-serif italic focus:outline-none focus:border-accent transition-all placeholder:text-ink/20" />
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <label className="label-micro opacity-40">Digital Address</label>
                  <input type="email" placeholder="email@address.com" className="w-full bg-transparent border-b border-line py-4 md:py-6 text-xl md:text-2xl font-serif italic focus:outline-none focus:border-accent transition-all placeholder:text-ink/20" />
                </div>

                <div className="space-y-3 md:space-y-4">
                  <label className="label-micro opacity-40">The Narrative</label>
                  <textarea rows={4} placeholder="Detailed Inquiry..." className="w-full bg-transparent border-b border-line py-4 md:py-6 text-xl md:text-2xl font-serif italic focus:outline-none focus:border-accent transition-all placeholder:text-ink/20 resize-none"></textarea>
                </div>

                <button className="w-full bg-ink text-paper py-6 md:py-10 rounded-2xl md:rounded-3xl font-bold uppercase tracking-[0.4em] text-sm hover:bg-accent transition-all duration-700 shadow-2xl overflow-hidden relative group">
                  <span className="relative z-10">Dispatch Inquiry</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
