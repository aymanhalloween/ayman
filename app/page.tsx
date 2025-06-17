'use client';

import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Philosophy from '@/components/Philosophy';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Philosophy />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
