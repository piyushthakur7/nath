import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ChevronRight } from 'lucide-react';
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
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24 border-b border-line pb-12">
          <div className="max-w-2xl">
            <div className="label-micro mb-4">Our Catalog</div>
            <h1 className="text-6xl md:text-7xl mb-6">Industrial <span className="italic">Minerals</span></h1>
            <p className="text-xl font-serif italic text-ink/60">A comprehensive collection of high-purity minerals extracted and processed to the highest global standards.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-[11px] uppercase tracking-widest font-bold border transition-all",
                  activeCategory === cat ? "bg-ink text-paper border-ink" : "border-line hover:border-accent"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group border-r border-b border-line p-12 hover:bg-ink hover:text-paper transition-all duration-700 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="aspect-square mb-12 overflow-hidden border border-line p-4 bg-white group-hover:bg-white/10 transition-colors">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="label-micro mb-2 group-hover:text-accent">{product.category}</div>
                  <h3 className="text-3xl font-serif">{product.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <ChevronRight size={18} />
                </div>
              </div>
              <p className="text-sm opacity-60 leading-relaxed line-clamp-2 font-serif italic">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-ink/90 backdrop-blur-md"
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div 
              layoutId={selectedProduct.id}
              className="relative w-full max-w-5xl bg-paper overflow-hidden border border-line flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center hover:bg-accent transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                <X size={24} />
              </button>

              <div className="md:w-1/2 aspect-square md:aspect-auto bg-white p-12 flex items-center justify-center">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="max-w-full max-h-full object-contain grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:w-1/2 p-12 md:p-20 overflow-y-auto max-h-[80vh] md:max-h-none">
                <div className="label-micro mb-4">{selectedProduct.category}</div>
                <h2 className="text-5xl mb-8">{selectedProduct.name}</h2>
                <p className="text-xl font-serif italic text-ink/60 mb-12 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="space-y-8 mb-12">
                  <h4 className="label-micro border-b border-line pb-4">Technical Specifications</h4>
                  <div className="grid grid-cols-2 gap-8">
                    {selectedProduct.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-ink/40 font-bold mb-1">{spec.label}</span>
                        <span className="font-mono text-sm">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="label-micro border-b border-line pb-4">Key Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.applications.map((app, i) => (
                      <span key={i} className="px-4 py-1 border border-line text-[11px] uppercase tracking-widest font-bold">{app}</span>
                    ))}
                  </div>
                </div>

                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-16 bg-ink text-paper py-6 rounded-full font-bold uppercase tracking-[0.2em] text-center text-sm hover:bg-accent transition-colors"
                >
                  Request Quote
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
