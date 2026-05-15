import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import LazySection from '../components/layout/LazySection';
import { 
  AnimatedHeading, 
  AnimatedText, 
  GradientText
} from '../components/ui/OptimizedText';
import { 
  optimizedFadeUp,
  usePerformanceMode,
  reducedMotionVariants
} from '../animations/optimizedVariants';

const Blog = () => {
  const reduceMotion = usePerformanceMode();
  
  // Use optimized variants based on device/performance
  const fadeUpVariants = reduceMotion ? reducedMotionVariants : optimizedFadeUp;
  
  const blogPosts = [
    {
      id: 1,
      title: 'From Code to Client: Freelancing Success in Tech',
      excerpt: 'Freelancing in the tech industry can be both rewarding and challenging. As a freelancer, you have the freedom to choose your projects, set your rates, and work from anywhere...',
      author: 'Ishu Raj',
      date: '2024-02-15',
      views: 987,
      likes: 36,
      image: '/images/blog/latest-insights/7.jpeg',
      category: 'Freelancing'
    },
    {
      id: 2,
      title: 'Future of Remote Work in 2024',
      excerpt: 'The landscape of remote work continues to evolve rapidly. As we navigate through 2024, companies and professionals are adapting to new technologies and work methodologies...',
      author: 'Ishu Raj',
      date: '2024-02-10',
      views: 1234,
      likes: 58,
      image: '/images/blog/latest-insights/5.jpeg',
      category: 'Remote Work'
    },
    {
      id: 3,
      title: 'Real-World Software Solutions: My Development Journey',
      excerpt: 'In this post, I share my personal journey through the world of software development, from my first lines of code to creating impactful solutions for real-world problems...',
      author: 'Ishu Raj',
      date: '2024-02-05',
      views: 1500,
      likes: 72,
      image: '/images/My_journey/image_1.png',
      category: 'Development'
    }
  ];

  return (
    <div className="app">
      <Navigation />
      {/* Blog Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1>Blog & Insights</h1>
          <p>Thoughts on technology, development, and the future of work</p>
        </div>
      </section>

      {/* Journey Section */}
      <LazySection className="cinematic-section bg-surface">
        <Container>
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* Top row images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 justify-items-center">
              {['image_1.png', '11.jpeg'].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-2xl w-full max-w-md"
                >
                  <motion.img
                    src={`/images/My_journey/${image}`}
                    alt={`Journey Image ${index + 1}`}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              ))}
            </div>

            <AnimatedHeading 
              text="My Journey"
              className="text-4xl md:text-5xl font-bold tracking-tight text-gradient text-center mb-16"
              stagger={0}
              delay={0.2}
            />
            
            <div className="max-w-4xl mx-auto space-y-16">
              <motion.div 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedText 
                  text="Every strong digital builder starts somewhere. Mine didn't begin with big clients or massive launches. It started with curiosity — understanding how things work, how systems connect, and how ideas turn into platforms that create real impact."
                  className="text-lg text-text-secondary leading-relaxed text-center"
                  stagger={0}
                  delay={0.3}
                />
              </motion.div>

              <motion.div 
                variants={fadeUpVariants} 
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <GradientText 
                  text="The Beginning — Curiosity Over Comfort"
                  className="text-2xl font-bold mb-6"
                />
                <AnimatedText 
                  text="What started as learning soon became obsession — not just building things, but building them the right way."
                  className="text-text-secondary leading-relaxed"
                  stagger={0}
                  delay={0.4}
                />
              </motion.div>

              <motion.div 
                variants={fadeUpVariants} 
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <GradientText 
                  text="Today — Digital Growth Architect"
                  className="text-2xl font-bold mb-6"
                />
                <AnimatedText 
                  text="Now, I don't just build platforms. I design end-to-end digital ecosystems, conversion-focused experiences, high-performance web applications, and systems that evolve with the business."
                  className="text-text-secondary leading-relaxed"
                  stagger={0}
                  delay={0.5}
                />
              </motion.div>

              <motion.div 
                variants={fadeUpVariants} 
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card rounded-2xl p-8 backdrop-blur-xl max-w-2xl mx-auto">
                  <GradientText 
                    text="Clean architecture. Clear strategy. Scalable execution."
                    className="text-xl font-bold"
                  />
                </div>
              </motion.div>
            </div>

            {/* Bottom row images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mt-16">
              {['Gemini_Generated_Image_5lopx75lopx75lop_1.png', 'Gemini_Generated_Image_2wkwgf2wkwgf2wkw.png'].map((image, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-2xl w-full max-w-md"
                >
                  <motion.img
                    src={`/images/My_journey/${image}`}
                    alt={`Journey Image ${index + 3}`}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </LazySection>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article 
                key={post.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => {
                  if (post.id === 1) {
                    console.log('Navigating to freelancing blog');
                    window.location.href = '/blog/from-code-to-client';
                  } else if (post.id === 2) {
                    console.log('Navigating to remote work blog');
                    window.location.href = '/blog/future-of-remote-work-2024';
                  }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-primary-600 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <span>By {post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <i className="fas fa-eye mr-1"></i>
                        {post.views}
                      </span>
                      <span className="flex items-center">
                        <i className="far fa-heart mr-1"></i>
                        {post.likes}
                      </span>
                    </div>
                    {post.id === 1 ? (
                      <Link 
                        to="/blog/from-code-to-client"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm inline-block z-10 relative"
                      >
                        Read More →
                      </Link>
                    ) : post.id === 2 ? (
                      <Link 
                        to="/blog/future-of-remote-work-2024"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm inline-block z-10 relative"
                      >
                        Read More →
                      </Link>
                    ) : (
                      <button 
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm z-10 relative"
                        disabled
                      >
                        Read More →
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

            <Footer />
    </div>
  );
};

export default Blog;
