'use client';

import { Scene3D } from '@/components/Scene3D';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <Scene3D />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
        
        <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; 2024 Portfolio. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
