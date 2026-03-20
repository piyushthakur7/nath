import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X } from 'lucide-react';
import { PRODUCTS, Product } from '../constants';
import { cn } from '../lib/utils';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const whatsappLink = `https://wa.me/919714485318`;

  return (
    <div className="py-48 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32 relative">
          <div className="max-w-3xl">
            <div className="label-micro mb-6 flex items-center gap-4">
              <span className="w-10 h-[1px] bg-accent opacity-50"></span>
              Inventory
            </div>
            <h1 className="text-8xl md:text-[10rem] mb-10 leading-[0.8] tracking-tighter">
              Earth's <br />
              <span className="italic text-accent premium-gradient-text">Treasures.</span>
            </h1>
            <p className="text-2xl font-serif italic text-ink/50 max-w-xl leading-relaxed">
              A meticulously curated collection of rare Industrial minerals, processed to laboratory-grade excellence.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 glass-card p-3 rounded-full shadow-xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-500",
                  activeCategory === cat 
                    ? "bg-accent text-paper shadow-lg shadow-accent/20" 
                    : "hover:bg-glass text-ink/40 hover:text-ink"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group glass-card p-8 rounded-[3rem] hover-glow cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square mb-10 overflow-hidden rounded-[2rem] border border-line bg-glass/20 relative group-hover:scale-[1.02] transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-paper/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="label-micro mb-3 text-emerald">{product.category}</div>
                    <h3 className="text-4xl font-serif italic group-hover:text-accent transition-colors">{product.name}</h3>
                  </div>
                  <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-accent group-hover:text-paper group-hover:border-accent transition-all duration-700">
                    <ChevronRight size={24} />
                  </div>
                </div>
                
                <p className="text-lg text-ink/40 leading-relaxed line-clamp-2 font-serif italic">
                  {product.description}
                </p>

                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-accent/10 transition-colors" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-paper/60 backdrop-blur-3xl"
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div 
              layoutId={selectedProduct.id}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="relative w-full max-w-6xl glass-card rounded-[4rem] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-10 right-10 z-10 w-16 h-16 rounded-3xl glass-card flex items-center justify-center hover:bg-copper hover:text-paper transition-all duration-500 shadow-2xl"
                onClick={() => setSelectedProduct(null)}
              >
                <X size={28} />
              </button>

              <div className="md:w-[45%] aspect-square md:aspect-auto bg-glass/20 p-16 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald/10 via-transparent to-accent/10" />
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="max-w-full max-h-full object-contain rounded-[2rem] shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:w-[55%] p-12 md:p-24 overflow-y-auto max-h-[70vh] md:max-h-none scrollbar-hide">
                <div className="label-micro mb-6 text-emerald">{selectedProduct.category}</div>
                <h2 className="text-6xl md:text-7xl mb-12 font-serif italic premium-gradient-text leading-tight">{selectedProduct.name}</h2>
                <p className="text-2xl font-serif italic text-ink/60 mb-16 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  <div className="space-y-8">
                    <h4 className="label-micro opacity-40 border-b border-line pb-4">Specifications</h4>
                    <div className="grid gap-6">
                      {selectedProduct.specs.map((spec, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-accent/60 font-mono mb-2">{spec.label}</span>
                          <span className="text-lg font-serif italic">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h4 className="label-micro opacity-40 border-b border-line pb-4">Applications</h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedProduct.applications.map((app, i) => (
                        <span key={i} className="px-6 py-2 glass-card rounded-full text-[11px] uppercase tracking-[0.2em] font-bold text-ink/80">{app}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-accent text-paper py-8 rounded-[2rem] font-bold uppercase tracking-[0.3em] text-center text-sm hover:bg-emerald transition-all duration-700 shadow-2xl shadow-accent/20"
                >
                  Acquire Specimen
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
