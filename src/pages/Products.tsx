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
    <div className="py-24 md:py-48 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-20 md:mb-32 relative">
          <div className="max-w-3xl">
            <div className="label-micro mb-6 flex items-center gap-4">
              <span className="w-8 md:w-10 h-[1px] bg-accent opacity-50"></span>
              Inventory
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] mb-8 md:mb-10 leading-[0.9] md:leading-[0.8] tracking-tighter">
              Earth's <br />
              <span className="italic text-accent premium-gradient-text">Treasures.</span>
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-ink/50 max-w-xl leading-relaxed">
              A meticulously curated collection of rare industrial minerals, processed to laboratory-grade excellence.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 glass-card p-2 md:p-3 rounded-2xl md:rounded-full shadow-xl w-full lg:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 md:px-8 py-3 rounded-xl md:rounded-full text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-500 flex-grow lg:flex-grow-0",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group glass-card p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] hover-glow cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square mb-8 md:mb-10 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-line bg-glass/20 relative transition-transform duration-700">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div>
                    <div className="label-micro mb-2 md:mb-3 text-emerald">{product.category}</div>
                    <h3 className="text-3xl md:text-4xl font-serif italic group-hover:text-accent transition-colors">{product.name}</h3>
                  </div>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass-card flex items-center justify-center group-hover:bg-accent group-hover:text-paper group-hover:border-accent transition-all duration-700 shrink-0">
                    <ChevronRight size={24} />
                  </div>
                </div>
                
                <p className="text-base md:text-lg text-ink/40 leading-relaxed line-clamp-2 font-serif italic">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-paper/60 backdrop-blur-3xl"
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div 
              layoutId={selectedProduct.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-6xl max-h-[90vh] glass-card rounded-[2.5rem] md:rounded-[4rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 md:top-10 right-6 md:right-10 z-20 w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl glass-card flex items-center justify-center hover:bg-accent hover:text-paper transition-all duration-500"
                onClick={() => setSelectedProduct(null)}
              >
                <X size={28} />
              </button>

              <div className="md:w-[45%] h-[300px] md:h-auto bg-glass/20 p-8 md:p-16 flex items-center justify-center relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald/10 via-transparent to-accent/10" />
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:w-[55%] p-8 md:p-20 overflow-y-auto scrollbar-hide">
                <div className="label-micro mb-4 md:mb-6 text-emerald">{selectedProduct.category}</div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl mb-8 md:mb-12 font-serif italic premium-gradient-text leading-tight">{selectedProduct.name}</h2>
                <p className="text-lg md:text-2xl font-serif italic text-ink/60 mb-10 md:mb-16 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 mb-10 md:mb-16">
                  <div className="space-y-6 md:space-y-8">
                    <h4 className="label-micro opacity-40 border-b border-line pb-2 md:pb-4">Specifications</h4>
                    <div className="grid gap-4 md:gap-6">
                      {selectedProduct.specs.map((spec, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-accent/60 font-mono mb-1 md:mb-2">{spec.label}</span>
                          <span className="text-base md:text-lg font-serif italic">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 md:space-y-8">
                    <h4 className="label-micro opacity-40 border-b border-line pb-2 md:pb-4">Applications</h4>
                    <div className="flex flex-wrap gap-2 md:gap-4">
                      {selectedProduct.applications.map((app, i) => (
                        <span key={i} className="px-4 md:px-6 py-2 glass-card rounded-full text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-ink/80">{app}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-accent text-paper py-6 md:py-8 rounded-2xl md:rounded-[2rem] font-bold uppercase tracking-[0.3em] text-center text-[11px] md:text-sm hover:bg-emerald transition-all duration-700 shadow-2xl shadow-accent/20"
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
