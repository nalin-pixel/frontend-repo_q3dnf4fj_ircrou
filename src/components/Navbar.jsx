import React from 'react';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 border-b border-base-200">
      <div className="navbar-start">
        <a href="#home" className="btn btn-ghost normal-case text-xl font-semibold tracking-tight">Acme Corp</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#contact" className="btn btn-primary">Get in touch</a>
      </div>
    </div>
  );
}
