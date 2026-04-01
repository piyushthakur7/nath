import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] bg-paper flex flex-col items-center justify-center"
        >
          <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 overflow-hidden"
            >
              <h1 className="text-4xl md:text-6xl font-serif tracking-tighter italic">
                Nath <span className="text-accent">Enterprises</span>
              </h1>
            </motion.div>

            <div className="w-full max-w-md h-[1px] bg-line relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <div className="mt-4 flex justify-between w-full max-w-md">
              <span className="label-micro opacity-40">Loading Assets</span>
              <span className="label-micro">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-12 left-12 label-micro opacity-20">EST. 2008</div>
          <div className="absolute bottom-12 right-12 label-micro opacity-20">GLOBAL OPERATIONS</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
