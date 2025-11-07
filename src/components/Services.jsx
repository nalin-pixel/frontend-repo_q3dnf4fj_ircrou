import React from 'react';
import { Rocket, Shield, Code } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Product Strategy',
    desc: 'From vision to roadmap, we align business goals with user needs to ship meaningful outcomes.'
  },
  {
    icon: Code,
    title: 'Design & Development',
    desc: 'Clean, accessible interfaces paired with robust engineering across web and mobile.'
  },
  {
    icon: Shield,
    title: 'Quality & Security',
    desc: 'Testing, monitoring, and best practices baked in to keep your product fast and secure.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What we do</h2>
          <p className="mt-3 text-base-content/70">A focused set of capabilities to move your company forward.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="card-body">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-base-content/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
