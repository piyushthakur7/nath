import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const contactNumber = "+91 97144 85318";
  const whatsappLink = `https://wa.me/919714485318`;

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-24">
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <div className="label-micro mb-8">Contact Us</div>
            <h1 className="text-7xl md:text-8xl font-serif leading-[0.85] tracking-tighter mb-12">
              Let's <br />
              <span className="italic text-accent">Connect.</span>
            </h1>
            <p className="text-xl font-serif italic text-ink/60 mb-16 leading-relaxed">
              Whether you have a specific mineral requirement or a general inquiry, our team is ready to provide expert guidance.
            </p>

            <div className="space-y-12">
              {[
                { label: 'Call', value: contactNumber, icon: <Phone size={20} /> },
                { label: 'Email', value: 'info@nathminerals.com', icon: <Mail size={20} /> },
                { label: 'Visit', value: 'Industrial Area, Barmer, Rajasthan, India - 344001', icon: <MapPin size={20} /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-line flex items-center justify-center shrink-0 group-hover:bg-ink group-hover:text-paper transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <div className="label-micro mb-2 opacity-40">{item.label}</div>
                    <div className="text-xl font-serif italic">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 pt-12 border-t border-line">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em]"
              >
                <div className="w-16 h-16 rounded-full border border-line flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366] transition-all duration-500">
                  <MessageCircle size={24} />
                </div>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-ink text-paper p-12 md:p-20 border border-line">
              <h2 className="text-4xl font-serif mb-12 italic">Send an Inquiry</h2>
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="label-micro opacity-40">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-paper/20 py-4 focus:outline-none focus:border-accent transition-colors font-serif italic text-xl" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="label-micro opacity-40">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-paper/20 py-4 focus:outline-none focus:border-accent transition-colors font-serif italic text-xl" 
                      placeholder="email@example.com" 
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="label-micro opacity-40">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-paper/20 py-4 focus:outline-none focus:border-accent transition-colors font-serif italic text-xl" 
                    placeholder="Product Inquiry" 
                  />
                </div>
                <div className="space-y-4">
                  <label className="label-micro opacity-40">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-transparent border-b border-paper/20 py-4 focus:outline-none focus:border-accent transition-colors font-serif italic text-xl resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="group flex items-center gap-6 text-sm font-bold uppercase tracking-[0.2em] pt-8">
                  <div className="w-20 h-20 rounded-full bg-accent text-paper flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ArrowRight size={32} />
                  </div>
                  <span>Submit Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
