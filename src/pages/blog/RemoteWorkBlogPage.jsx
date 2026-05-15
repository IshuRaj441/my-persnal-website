import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/layout/Footer';
import { 
  optimizedFadeUp,
  usePerformanceMode,
  reducedMotionVariants
} from '../../animations/optimizedVariants';

const RemoteWorkBlogPage = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const reduceMotion = usePerformanceMode();
  
  const fadeUpVariants = reduceMotion ? reducedMotionVariants : optimizedFadeUp;

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setReadingProgress(latest);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: 'The Future of Remote Work in 2024',
        text: 'How businesses and professionals are redefining the modern workplace',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const articleSections = [
    { id: 'transformation', title: 'The Transformation of Modern Work' },
    { id: 'growth', title: 'Why Remote Work Keeps Growing' },
    { id: 'hybrid', title: 'The Rise of Hybrid Work' },
    { id: 'technology', title: 'Technology Driving Collaboration' },
    { id: 'ai', title: 'AI and Workflow Automation' },
    { id: 'talent', title: 'The Global Talent Revolution' },
    { id: 'expectations', title: 'Employee Expectations Are Changing' },
    { id: 'challenges', title: 'The Hidden Challenges of Remote Work' },
    { id: 'security', title: 'Cybersecurity in Distributed Teams' },
    { id: 'future-office', title: 'The Future Office' },
    { id: 'beyond-2024', title: 'Beyond 2024' },
    { id: 'final-thoughts', title: 'Final Thoughts' }
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-red-500 z-50 origin-left"
        style={{ scaleX: readingProgress }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative pt-20">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0B1220] to-[#050816]" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div 
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-sm font-medium">
                Remote Work
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              variants={fadeUpVariants}
            >
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent block mb-2">
                The Future of
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent block mb-2">
                Remote Work in 2024:
              </span>
              <span className="text-white">How Businesses and Professionals</span>
              <br />
              <span className="text-white">Are Redefining the Modern Workplace</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeUpVariants}
              delay={0.2}
            >
              Exploring how remote work, AI-powered collaboration, hybrid models, and digital transformation are reshaping the future of global business operations.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400"
              variants={fadeUpVariants}
              delay={0.4}
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">IR</span>
                </div>
                <span>By Ishu Raj</span>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <span>February 10, 2024</span>
                <span>•</span>
                <span>12 min read</span>
                <span>•</span>
                <span>1,234 views</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              variants={fadeUpVariants}
              delay={0.5}
            >
              <motion.button 
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('transformation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Reading
              </motion.button>
              <motion.button 
                className="px-8 py-3 backdrop-blur-md text-white rounded-lg font-medium border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/blog')}
              >
                Back to Blog
              </motion.button>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="mt-12 rounded-3xl overflow-hidden"
              variants={fadeUpVariants}
              delay={0.6}
            >
              <img 
                src="/images/blog/latest-insights/5.jpeg"
                alt="Future of Remote Work"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Article Content */}
          <article className="flex-1 max-w-4xl">
            <div className="space-y-16">
              {/* Section 1: The Transformation of Modern Work */}
              <section id="transformation" className="space-y-8">
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    The Transformation of Modern Work
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-8 text-slate-300">
                      The workplace has undergone a dramatic transformation over the past few years. What was once considered a temporary response to global challenges has evolved into a fundamental shift in how we conceptualize work, collaboration, and organizational structure. This transformation isn't merely about where people work—it's about reimagining the very essence of productivity, engagement, and business success in a digitally connected world.
                    </p>
                    
                    <p className="text-lg leading-8 text-slate-300">
                      Organizations that have embraced this shift are discovering new possibilities for talent acquisition, operational efficiency, and employee satisfaction. The traditional boundaries of time zones and geographic locations are dissolving, replaced by a borderless ecosystem where skills and contributions matter more than physical presence.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Quote Block 1 */}
              <motion.div 
                className="rounded-2xl border border-blue-500/20 bg-slate-900/40 p-8"
                variants={fadeUpVariants}
              >
                <blockquote className="text-2xl md:text-3xl font-light text-white italic leading-relaxed">
                  "The future of work is not simply remote. It is flexible, digital, global, and constantly evolving."
                </blockquote>
              </motion.div>

              {/* Section 2: Why Remote Work Keeps Growing */}
              <section id="growth" className="space-y-8">
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Why Remote Work Keeps Growing
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-8 text-slate-300">
                      The sustained growth of remote work isn't driven by a single factor but by a convergence of technological advancement, employee preferences, and business imperatives. Companies are reporting increased productivity, reduced overhead costs, and access to a global talent pool that was previously unimaginable.
                    </p>
                    
                    <p className="text-lg leading-8 text-slate-300">
                      Employees, meanwhile, are experiencing improved work-life balance, reduced commute times, and the flexibility to design their work environments for optimal performance. This mutual benefit creates a powerful incentive structure that continues to drive adoption across industries and organizational sizes.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 3: The Rise of Hybrid Work */}
              <section id="hybrid" className="space-y-8">
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    The Rise of Hybrid Work
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-8 text-slate-300">
                      Hybrid work models have emerged as the dominant compromise between fully remote and traditional office-based arrangements. These models seek to capture the best of both worlds: the collaboration and culture-building benefits of in-person interaction combined with the flexibility and autonomy of remote work.
                    </p>
                    
                    <p className="text-lg leading-8 text-slate-300">
                      Successful hybrid implementations require thoughtful planning, robust technology infrastructure, and a cultural shift away from presenteeism toward outcome-based performance metrics. Organizations that master this balance are seeing significant improvements in employee retention and satisfaction.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 4: Technology Driving Collaboration */}
              <section id="technology" className="space-y-8">
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Technology Driving Collaboration
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-8 text-slate-300">
                      The remote work revolution is powered by an unprecedented wave of technological innovation. Advanced video conferencing platforms, collaborative workspaces, project management tools, and virtual reality meeting spaces are creating new paradigms for digital collaboration.
                    </p>
                    
                    <p className="text-lg leading-8 text-slate-300">
                      Cloud computing has become the backbone of distributed work, enabling seamless access to resources and applications from anywhere in the world. This technological foundation allows teams to maintain productivity and cohesion regardless of physical location.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Quote Block 2 */}
              <motion.div 
                className="rounded-2xl border border-red-500/20 bg-slate-900/40 p-8"
                variants={fadeUpVariants}
              >
                <blockquote className="text-2xl md:text-3xl font-light text-white italic leading-relaxed">
                  "Successful remote companies focus more on outcomes than physical presence."
                </blockquote>
              </motion.div>

              {/* Section 5: AI and Workflow Automation */}
              <section id="ai" className="space-y-8">
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    AI and Workflow Automation
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-8 text-slate-300">
                      Artificial intelligence is transforming how distributed teams operate. AI-powered tools are automating routine tasks, providing intelligent insights, and facilitating more efficient decision-making processes. Machine learning algorithms are optimizing everything from resource allocation to communication patterns.
                    </p>
                    
                    <p className="text-lg leading-8 text-slate-300">
                      Workflow automation platforms are creating seamless integrations between different business systems, reducing manual intervention and minimizing errors. This automation enables teams to focus on high-value activities that require human creativity and strategic thinking.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 6: The Global Talent Revolution */}
              <section id="talent" className="space-y-8">
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    The Global Talent Revolution
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-8 text-slate-300">
                      Remote work has unleashed a global talent revolution, allowing organizations to hire the best candidates regardless of geographic location. This democratization of opportunity is creating more diverse, inclusive, and skilled workforces. Companies are building teams that span continents, bringing together unique perspectives and experiences.
                    </p>
                    
                    <p className="text-lg leading-8 text-slate-300">
                      For professionals, this means access to opportunities that were previously limited by location. The ability to work for global companies while living in preferred locations is creating new lifestyle possibilities and career trajectories.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 7: Employee Expectations Are Changing */}
              <section id="expectations" className="space-y-8">
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Employee Expectations Are Changing
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-8 text-slate-300">
                      The modern workforce has fundamentally different expectations compared to previous generations. Flexibility, autonomy, and work-life integration are no longer perks—they're requirements. Employees are prioritizing mental health, personal growth, and meaningful work over traditional markers of success.
                    </p>
                    
                    <p className="text-lg leading-8 text-slate-300">
                      Organizations that fail to adapt to these changing expectations are struggling with retention and recruitment. The power dynamic has shifted, with employees having more choice and leverage in determining their work arrangements.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 8: The Hidden Challenges of Remote Work */}
              <section id="challenges" className="space-y-8">
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    The Hidden Challenges of Remote Work
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-8 text-slate-300">
                      Despite its many benefits, remote work presents significant challenges that organizations must address. Isolation, burnout, and the blurring of work-life boundaries are real concerns that require intentional solutions. Maintaining company culture and team cohesion in a distributed environment demands new approaches to communication and engagement.
                    </p>
                    
                    <p className="text-lg leading-8 text-slate-300">
                      Digital fatigue is another emerging issue, with employees spending hours in video conferences and struggling to maintain meaningful connections through screens. Organizations are experimenting with asynchronous communication, digital wellness programs, and structured social interactions to combat these challenges.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 9: Cybersecurity in Distributed Teams */}
              <section id="security" className="space-y-8">
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Cybersecurity in Distributed Teams
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-8 text-slate-300">
                      The shift to distributed work has expanded the attack surface for cyber threats, making security more critical than ever. Organizations are investing heavily in zero-trust architectures, advanced endpoint protection, and employee training programs to mitigate risks.
                    </p>
                    
                    <p className="text-lg leading-8 text-slate-300">
                      Home networks, personal devices, and public Wi-Fi connections create vulnerabilities that require comprehensive security strategies. The future of remote work security lies in a combination of technology solutions, policy frameworks, and security-conscious culture.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 10: The Future Office */}
              <section id="future-office" className="space-y-8">
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    The Future Office
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-8 text-slate-300">
                      The physical office is being reinvented as a destination for collaboration, innovation, and community building rather than daily work. Future office spaces will prioritize experiences over desks, featuring flexible meeting areas, wellness facilities, and technology-enabled collaboration zones.
                    </p>
                    
                    <p className="text-lg leading-8 text-slate-300">
                      These spaces will serve as anchors for organizational culture, providing opportunities for the spontaneous interactions and relationship-building that are difficult to replicate virtually. The office of the future will be a tool, not a requirement.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 11: Beyond 2024 */}
              <section id="beyond-2024" className="space-y-8">
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Beyond 2024
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-8 text-slate-300">
                      Looking beyond 2024, we can expect even more profound changes in how we work. Virtual and augmented reality will create immersive collaboration experiences, AI will become an integral work partner, and the concept of a traditional career path will continue to evolve.
                    </p>
                    
                    <p className="text-lg leading-8 text-slate-300">
                      The rise of digital nomadism, portfolio careers, and project-based work will create new models for employment and professional development. Organizations that remain flexible and adaptive will thrive in this rapidly changing landscape.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Quote Block 3 */}
              <motion.div 
                className="rounded-2xl border border-blue-500/20 bg-slate-900/40 p-8"
                variants={fadeUpVariants}
              >
                <blockquote className="text-2xl md:text-3xl font-light text-white italic leading-relaxed">
                  "The organizations and individuals who evolve with these changes will shape the next generation of work itself."
                </blockquote>
              </motion.div>

              {/* Section 12: Final Thoughts */}
              <section id="final-thoughts" className="space-y-8">
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Final Thoughts
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-8 text-slate-300">
                      The future of work is not a destination but a continuous evolution. As technology advances and societal values shift, our approaches to work, collaboration, and organizational structure will continue to transform. The organizations and individuals who embrace this evolution with curiosity, adaptability, and strategic thinking will be the ones who thrive.
                    </p>
                    
                    <p className="text-lg leading-8 text-slate-300">
                      Success in this new era requires a fundamental rethinking of traditional assumptions about work, productivity, and organizational success. It demands leadership that is empathetic, technology that is human-centered, and cultures that prioritize both performance and wellbeing.
                    </p>
                  </div>
                </motion.div>
              </section>
            </div>
          </article>

          {/* Desktop Sidebar */}
          <aside className="hidden xl:block sticky top-28 h-fit w-[280px]">
            <div className="space-y-6">
              <div className="border border-slate-700 rounded-2xl p-6 bg-slate-900/40">
                <h3 className="text-lg font-semibold mb-4 text-white">Table of Contents</h3>
                <nav className="space-y-3">
                  {articleSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-blue-500/20 text-blue-400 border-l-2 border-blue-400'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="border border-slate-700 rounded-2xl p-6 bg-slate-900/40">
                <h3 className="text-lg font-semibold mb-4 text-white">Article Info</h3>
                <div className="space-y-3 text-sm text-slate-400">
                  <div className="flex justify-between">
                    <span>Reading time</span>
                    <span>12 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Published</span>
                    <span>Feb 10, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Views</span>
                    <span>1,234</span>
                  </div>
                </div>
                <button 
                  onClick={shareArticle}
                  className="w-full mt-4 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 rounded-lg transition-all duration-300 text-sm text-blue-400"
                >
                  Share Article
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Author Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={fadeUpVariants}
          >
            <div className="border border-slate-700 rounded-3xl p-8 md:p-12 bg-slate-900/40">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl font-bold text-white">IR</span>
                </motion.div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Ishu Raj</h3>
                  <p className="text-slate-400 mb-4">Freelance Developer & Automation Engineer</p>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Building scalable digital systems, AI-driven platforms, automation workflows, and modern enterprise applications for the future digital economy.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {['React', 'Node.js', 'Python', 'AWS', 'Automation', 'AI/ML'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-sm text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <button 
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 font-medium"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            variants={fadeUpVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Articles</h2>
            <p className="text-slate-400 text-lg">Explore more insights on technology and work</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'From Code to Client: Freelancing Success in Tech',
                excerpt: 'Building a successful freelance career in the tech industry...',
                category: 'Freelancing',
                link: '/blog/from-code-to-client'
              },
              {
                title: 'AI Automation in Modern Business',
                excerpt: 'How artificial intelligence is transforming business operations...',
                category: 'AI Automation',
                link: '#'
              },
              {
                title: 'Digital Transformation Strategies',
                excerpt: 'Leading your organization through successful digital change...',
                category: 'Digital Transformation',
                link: '#'
              }
            ].map((post, index) => (
              <motion.article
                key={index}
                className="border border-slate-700 rounded-2xl p-6 bg-slate-900/40 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                variants={fadeUpVariants}
                whileHover={{ y: -5 }}
                onClick={() => post.link !== '#' && navigate(post.link)}
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs text-blue-400">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                <p className="text-slate-400 text-sm">{post.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={fadeUpVariants}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent block mb-2">
                Ready To Thrive
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent block mb-2">
                In The Future
              </span>
              <span className="text-white">Of Work?</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Build modern digital skills, embrace flexibility, and leverage technology to succeed in the rapidly evolving global workforce.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 font-medium text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/projects')}
              >
                Explore Projects
              </motion.button>
              <motion.button 
                className="px-8 py-4 border border-blue-500/50 hover:bg-blue-500/20 rounded-lg transition-all duration-300 font-medium text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RemoteWorkBlogPage;
