import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-base-200/60">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A clean, modern partner for your next chapter</h2>
          <p className="mt-4 text-base-content/70">We are a multidisciplinary team blending strategy, design, and engineering. Our approach is guided by clarity and craft—delivering work that feels effortless to use and simple to maintain.</p>
          <ul className="mt-6 space-y-3 text-base-content/80">
            <li className="flex items-start gap-3"><span className="badge badge-primary"></span> Human-centered design, measurable impact</li>
            <li className="flex items-start gap-3"><span className="badge badge-primary"></span> Transparent communication, on-time delivery</li>
            <li className="flex items-start gap-3"><span className="badge badge-primary"></span> Long-term support and iteration</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-base-100 border border-base-200 shadow-sm">
            <p className="text-4xl font-extrabold">8+</p>
            <p className="text-base-content/70">Years building products</p>
          </div>
          <div className="p-6 rounded-2xl bg-base-100 border border-base-200 shadow-sm">
            <p className="text-4xl font-extrabold">50+</p>
            <p className="text-base-content/70">Projects shipped</p>
          </div>
          <div className="p-6 rounded-2xl bg-base-100 border border-base-200 shadow-sm">
            <p className="text-4xl font-extrabold">24/7</p>
            <p className="text-base-content/70">Support availability</p>
          </div>
          <div className="p-6 rounded-2xl bg-base-100 border border-base-200 shadow-sm">
            <p className="text-4xl font-extrabold">A+</p>
            <p className="text-base-content/70">Quality focus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
