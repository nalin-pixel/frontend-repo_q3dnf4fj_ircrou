import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s build something great</h2>
          <p className="mt-4 text-base-content/70">Tell us about your project and goals. We usually reply within one business day.</p>
          {status && <div className="alert alert-success mt-6">{status}</div>}
        </div>
        <form onSubmit={handleSubmit} className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <div className="form-control">
              <label className="label"><span className="label-text">Name</span></label>
              <input type="text" name="name" required className="input input-bordered" placeholder="Jane Doe" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" name="email" required className="input input-bordered" placeholder="jane@company.com" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Message</span></label>
              <textarea name="message" required className="textarea textarea-bordered h-28" placeholder="Share a few details..."></textarea>
            </div>
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary">Send message</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
