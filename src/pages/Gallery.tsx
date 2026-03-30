import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Maximize2, X, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

const VIDEOS = [
  { id: 'D-brFC05uRQ', title: 'Operational Excellence', category: 'Operations' },
  { id: 'Rnx9f2EAqcU', title: 'Mineral Processing', category: 'Operations' },
  { id: 'fNxGh9iU35w', title: 'Industrial Solutions', category: 'Promos' },
  { id: 'ACrzd8enVr4', title: 'Global Export Insights', category: 'Operations' },
  { id: 'u0cttO6Wof8', title: 'Mining Logistics', category: 'Operations' },
  { id: 'L-M7lo7BvBk', title: 'Purity Standards', category: 'Quality' },
  { id: 'gnDPC0kzwa', title: 'Extraction Precision', category: 'Operations' },
  { id: '6NQXdcn48QE', title: 'Future of Minerals', category: 'Promos' }
];

const IMAGES = [
  { src: '/images/enterprise/op-1.jpg', title: 'Main Extraction Arena', category: 'Facilities' },
  { src: '/images/enterprise/op-2.jpg', title: 'Logistics Fleet', category: 'Operations' },
  { src: '/images/enterprise/op-3.jpg', title: 'Aerial Site Overview', category: 'Facilities' },
  { src: '/images/enterprise/min-1.jpg', title: 'Refining Unit 01', category: 'Processing' },
  { src: '/images/enterprise/min-2.jpg', title: 'Quality Assurance Lab', category: 'Quality' },
  { src: '/white_clay_real.png', title: 'Premium White Clay', category: 'Minerals' },
  { src: '/china_clay_real.png', title: 'Industrial China Clay', category: 'Minerals' },
  { src: '/kaolin_clay_real.png', title: 'Kaolin Excellence', category: 'Minerals' },
  { src: '/sbq_clay_real.png', title: 'SBQ Standard Clay', category: 'Minerals' },
  { src: '/un41_real.png', title: 'Universal Grade 41', category: 'Minerals' },
  { src: '/ball_clay_real.png', title: 'Ball Clay Raw', category: 'Minerals' }
];

const CATEGORIES = ['All', 'Videos', 'Minerals', 'Facilities', 'Operations'];

interface GalleryItem {
  type: string;
  id?: string;
  src?: string;
  title: string;
  category: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const allItems: GalleryItem[] = [
    ...VIDEOS.map(v => ({ ...v, type: 'video' })),
    ...IMAGES.map(i => ({ ...i, type: 'image' }))
  ];

  const filteredItems = allItems.filter(item => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Videos') return item.type === 'video';
    if (activeCategory === 'Minerals') return item.category === 'Minerals';
    if (activeCategory === 'Facilities') return item.category === 'Facilities';
    if (activeCategory === 'Operations') return item.category === 'Operations' || item.type === 'video';
    return true;
  });

  return (
    <div className="pt-32 pb-48 relative overflow-hidden">
      {/* Background large text */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none opacity-[0.01] select-none pt-20 overflow-hidden">
        <h1 className="text-[40vw] font-serif whitespace-nowrap premium-gradient-text">VISUALS</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="label-micro mb-8 inline-block"
          >
            Nath Group Media
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-serif leading-none tracking-tighter mb-16"
          >
            Visual <br /> 
            <span className="italic text-accent">Excellence.</span>
          </motion.h1>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-3 rounded-full text-[10px] uppercase font-bold tracking-widest border transition-all duration-500",
                  activeCategory === cat 
                    ? "bg-ink text-paper border-ink shadow-2xl" 
                    : "border-line text-ink/60 hover:border-accent hover:text-accent"
                )}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                key={item.type === 'video' ? (item as any).id : (item as any).src}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-[16/11] rounded-[2.5rem] overflow-hidden border border-line bg-glass/60 p-4 relative z-10 hover-glow transition-all duration-700">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                    {item.type === 'video' ? (
                      <>
                        <img 
                          src={`https://img.youtube.com/vi/${(item as any).id}/maxresdefault.jpg`} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-ink/20 flex items-center justify-center group-hover:bg-ink/0 transition-all">
                          <div className="w-16 h-16 rounded-full bg-paper/90 backdrop-blur-md flex items-center justify-center group-hover:bg-accent group-hover:text-paper transition-all duration-500 shadow-2xl">
                            <Play size={24} className="fill-current" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <img 
                        src={(item as any).src} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                      />
                    )}
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between items-end px-4">
                  <div>
                    <span className="label-micro mb-2 text-accent opacity-60 block">{item.category}</span>
                    <h3 className="text-2xl font-serif italic text-ink">{item.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-4 group-hover:translate-x-0">
                    <Maximize2 size={16} className="text-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-paper/95 backdrop-blur-2xl"
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-10 right-10 p-4 glass-card rounded-full hover:bg-ink hover:text-paper transition-all duration-500 z-[110]"
            >
              <X size={24} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl w-full aspect-video rounded-[3rem] overflow-hidden border border-line shadow-2xl bg-glass"
            >
              {selectedItem.type === 'video' ? (
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${(selectedItem as any).id}?autoplay=1&rel=0&modestbranding=1`} 
                  title={selectedItem.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media; fullscreen"
                />
              ) : (
                <img 
                  src={(selectedItem as any).src} 
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
