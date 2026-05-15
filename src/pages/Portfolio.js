import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Manufacturing Process Automation',
      description: 'Automated production line processes resulting in 40% increased efficiency and reduced human error.',
      category: 'automation',
      tags: ['Automation', 'Manufacturing'],
      image: 'https://images.unsplash.com/photo-1581093057306-c411271a0a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'E-commerce Platform Development',
      description: 'Built a custom e-commerce solution with integrated inventory and payment processing.',
      category: 'web',
      tags: ['Web Development', 'E-commerce'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      title: 'Sales Analytics Dashboard',
      description: 'Interactive Power BI dashboard providing real-time sales insights and performance metrics.',
      category: 'data',
      tags: ['Data Analytics', 'Power BI'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 4,
      title: 'AI-Powered Customer Support',
      description: 'Implemented an intelligent chatbot that reduced support tickets by 60%.',
      category: 'ai',
      tags: ['AI', 'Chatbot'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="app">
      <Navigation />
      {/* Portfolio Hero */}
      <section className="portfolio-hero">
        <div className="container">
          <h1>My Work & Case Studies</h1>
          <p>Explore my portfolio of successful projects where I've helped businesses automate processes, analyze data, and build custom solutions.</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="portfolio-categories" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <button 
              className={`category-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`category-btn ${activeFilter === 'automation' ? 'active' : ''}`}
              onClick={() => setActiveFilter('automation')}
            >
              Automation
            </button>
            <button 
              className={`category-btn ${activeFilter === 'web' ? 'active' : ''}`}
              onClick={() => setActiveFilter('web')}
            >
              Web Development
            </button>
            <button 
              className={`category-btn ${activeFilter === 'data' ? 'active' : ''}`}
              onClick={() => setActiveFilter('data')}
            >
              Data Analytics
            </button>
            <button 
              className={`category-btn ${activeFilter === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveFilter('ai')}
            >
              AI Solutions
            </button>
          </div>
          
          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="portfolio-item" data-category={project.category}>
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="portfolio-content">
                  <div className="portfolio-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="portfolio-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <button className="btn btn-text" onClick={() => console.log('View case study for:', project.title)}>
                    View Case Study <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-primary btn-lg">Start Your Project</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: '#F8FAFC', textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p className="lead" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>Let's discuss how I can help you automate processes, analyze data, and build custom solutions for your business.</p>
          <a href="/contact" className="btn btn-primary btn-lg">Get a Free Consultation</a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
