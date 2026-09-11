import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      <main>
        <Hero      onOpenResume={() => setResumeOpen(true)} />
        <About     />
        <Skills    />
        <Projects  />
        <Leadership/>
        <Certifications/>
        <Contact   />
      </main>
      <Footer />
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </>
  );
}
