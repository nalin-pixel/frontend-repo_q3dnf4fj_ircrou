import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] lg:min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-base-100/60 via-base-100/40 to-base-100"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">Building modern digital experiences for ambitious brands</h1>
          <p className="mt-6 text-lg md:text-xl text-base-content/70">We help companies design, build, and scale products with clean aesthetics and reliable engineering.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#about" className="btn btn-ghost">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
