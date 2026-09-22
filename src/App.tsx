/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import LearningJourney from './components/LearningJourney';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="portfolio-app-root" className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills Section */}
        <Skills />

        {/* 5. My Learning Journey */}
        <LearningJourney />

        {/* 6. Projects Section */}
        <Projects />

        {/* 7. Let's Connect */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

