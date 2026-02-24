import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import ProjectsRow from '../components/sections/ProjectsRow';
import Metrics from '../components/sections/Metrics';
import Process from '../components/sections/Process';
import Value from '../components/sections/Value';
import CaseStudy from '../components/sections/CaseStudy';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="bg-[#0b0b0f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProjectsRow />
      <Metrics />
      <Process />
      <Value />
      <CaseStudy />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
