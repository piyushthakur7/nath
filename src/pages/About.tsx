import React from 'react';

export default function About() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-32">
          <div className="lg:col-span-8">
            <div className="label-micro mb-8">Our Legacy</div>
            <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] tracking-tighter mb-12">
              Mining <br />
              <span className="italic text-accent">With</span> <br />
              Purpose.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xl font-serif italic text-ink/60 leading-relaxed">
              Since 2008, Nath Group of Minerals has been dedicated to the extraction and processing of high-purity industrial minerals.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="aspect-[16/9] overflow-hidden border border-line grayscale hover:grayscale-0 transition-all duration-1000">
            <img 
              src="https://picsum.photos/seed/mine-1/1200/800" 
              alt="Mining Site" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[16/9] overflow-hidden border border-line grayscale hover:grayscale-0 transition-all duration-1000 md:mt-24">
            <img 
              src="https://picsum.photos/seed/lab/1200/800" 
              alt="Laboratory" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-12 gap-24 mb-32">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-serif mb-8 italic">Our Philosophy</h2>
            <div className="space-y-8">
              <div className="p-8 border border-line hover:bg-ink hover:text-paper transition-all duration-500">
                <h4 className="label-micro mb-4 group-hover:text-accent">01. Integrity</h4>
                <p className="text-sm opacity-60">Honest mining practices and transparent business relationships.</p>
              </div>
              <div className="p-8 border border-line hover:bg-ink hover:text-paper transition-all duration-500">
                <h4 className="label-micro mb-4 group-hover:text-accent">02. Innovation</h4>
                <p className="text-sm opacity-60">Constantly evolving our processing techniques for higher purity.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="prose prose-2xl font-serif italic text-ink/80 leading-relaxed">
              <p className="mb-8">
                Headquartered in the mineral-rich heart of Rajasthan, Barmer, Nath Group of Minerals has grown from a local mining operation into a global supplier of industrial minerals. Our journey is defined by a relentless pursuit of quality and a deep respect for the earth we work with.
              </p>
              <p className="mb-8">
                We believe that industrial minerals are the silent foundation of modern civilization. From the glass in your windows to the paint on your walls, our minerals play a vital role in everyday life. This responsibility drives us to maintain the highest standards of purity and consistency.
              </p>
              <p>
                Today, with a presence in over 25 countries and a portfolio of 30+ active mines, we continue to pioneer new standards in the mineral industry, ensuring that our clients receive nothing but the finest materials the earth has to offer.
              </p>
            </div>
          </div>
        </div>

        {/* Team/Values */}
        <div className="border-t border-line pt-24">
          <div className="label-micro mb-12">Our Commitment</div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Sustainability', desc: 'We implement eco-friendly mining practices to minimize our environmental footprint.' },
              { title: 'Global Reach', desc: 'Our logistics network ensures timely delivery to any corner of the globe.' },
              { title: 'Expertise', desc: 'Over 15 years of deep industry knowledge in mineralogy and processing.' },
            ].map((item, i) => (
              <div key={i} className="group">
                <h3 className="text-3xl font-serif mb-4 italic group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
