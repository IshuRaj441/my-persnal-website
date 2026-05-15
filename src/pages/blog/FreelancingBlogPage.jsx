import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/layout/Footer';
import Container from '../../components/layout/Container';
import LazySection from '../../components/layout/LazySection';
import { 
  GradientText
} from '../../components/ui/OptimizedText';
import { 
  optimizedFadeUp,
  optimizedSlideIn,
  optimizedScaleIn,
  optimizedHover,
  optimizedCardHover,
  optimizedButton,
  optimizedSecondaryButton,
  usePerformanceMode,
  reducedMotionVariants
} from '../../animations/optimizedVariants';

const FreelancingBlogPage = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const reduceMotion = usePerformanceMode();
  const [readingProgress, setReadingProgress] = useState(0);
  
  const fadeUpVariants = reduceMotion ? reducedMotionVariants : optimizedFadeUp;

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setReadingProgress(value);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const articleContent = {
    hero: {
      category: "Freelancing",
      title: "From Code to Client:",
      subtitle: "Building a Successful Freelancing Career in Tech",
      description: "Exploring how developers transform technical skills into sustainable freelance careers through branding, communication, consistency, and modern digital opportunities.",
      author: "Ishu Raj",
      date: "February 15, 2024",
      readTime: "12 min read",
      image: "/images/blog/latest-insights/blog 1.png"
    },
    sections: [
      {
        id: "changing-tech",
        title: "The Changing Tech Industry",
        content: `The tech industry has undergone a massive transformation over the past decade. What was once dominated by traditional employment models has evolved into a dynamic ecosystem where freelancing plays a crucial role. Remote work has become the norm rather than the exception, and companies are increasingly open to working with independent developers who bring specialized skills and fresh perspectives.

This shift isn't just about where we work—it's about how we work. The rise of startup culture, the gig economy, and digital nomadism has created unprecedented opportunities for developers who want to build their own paths. But with opportunity comes complexity, and success requires more than just technical expertise.`
      },
      {
        id: "freelancing-growth",
        title: "Why Freelancing Is Growing",
        content: `Several factors are driving the explosive growth in tech freelancing. First, companies are realizing the benefits of flexible talent acquisition—they can scale up or down quickly, access specialized skills on demand, and often reduce overhead costs compared to full-time hires.

Second, developers themselves are seeking more autonomy, better work-life balance, and the ability to choose projects that align with their interests and values. The traditional 9-to-5 model no longer appeals to everyone, especially those who have experienced the freedom of remote work.

Third, technology has made freelancing more accessible than ever. Platforms like Upwork, Fiverr, and specialized developer marketplaces connect clients with talent globally. Collaboration tools, payment systems, and project management software have removed many of the barriers that once made remote freelancing challenging.`
      },
      {
        id: "beginner-illusion",
        title: "The Beginner Illusion",
        content: `Many new developers enter freelancing with a dangerous illusion: that technical skills alone are enough to succeed. They believe that if they can write clean code, solve complex problems, and build impressive projects, clients will naturally flock to them.

This couldn't be further from the truth. While technical competence is the foundation, it's just the starting point. The most successful freelancers understand that they're not just selling code—they're selling solutions, trust, communication, and reliability. They're business owners, not just developers.

The illusion extends to pricing as well. Beginners often undercharge dramatically, thinking they need to "build a portfolio" or "prove themselves." This devalues their work and attracts the wrong kind of clients—those looking for cheap labor rather than quality solutions.`
      },
      {
        id: "skills-matter",
        title: "Skills That Matter Most",
        content: `Beyond coding, successful freelancers develop a range of complementary skills:

Communication is paramount. You need to understand client requirements, explain technical concepts in non-technical terms, provide regular updates, and manage expectations. Poor communication leads to misunderstandings, scope creep, and unhappy clients.

Project management becomes crucial when you're juggling multiple clients, deadlines, and deliverables. You need to estimate timelines accurately, track your time, manage revisions, and ensure you're delivering value consistently.

Sales and marketing skills might feel uncomfortable for many developers, but they're essential. You need to identify potential clients, craft compelling proposals, negotiate rates, and build relationships that lead to repeat business and referrals.

Business operations—including contracts, invoicing, taxes, and financial planning—can't be ignored. Many freelancers fail not because they're bad developers, but because they're bad business owners.`
      },
      {
        id: "communication-trust",
        title: "Communication & Trust",
        content: `"Trust is what transforms code into clients." This simple truth captures the essence of successful freelancing. Clients hire freelancers not just for their technical abilities, but because they trust them to deliver solutions that solve real business problems.

Building trust starts with the first interaction. Your website, portfolio, and initial communications all contribute to the impression you make. Professionalism, clarity, and attention to detail signal that you're someone who can be relied upon.

During projects, trust is maintained through consistent communication. Regular updates, transparency about challenges, and proactive problem-solving show clients that you're invested in their success. When issues arise—and they always do—how you handle them determines whether the relationship strengthens or breaks.

Trust extends beyond individual projects to long-term relationships. The most valuable clients are those who return repeatedly and refer others to you. This only happens when you've proven yourself reliable, competent, and easy to work with.`
      },
      {
        id: "personal-branding",
        title: "Personal Branding",
        content: `In a crowded marketplace, personal branding becomes your competitive advantage. Your brand is more than a logo or color scheme—it's the story you tell about who you are, what you do, and why you do it.

Strong personal branding starts with clarity about your niche and value proposition. What problems do you solve better than anyone else? What makes your approach unique? Who are your ideal clients?

Your online presence should reflect this brand consistently. Your website, social media profiles, portfolio, and even your email signature should present a cohesive professional image. Every piece of content you create—blog posts, tutorials, case studies, open-source contributions—should reinforce your expertise and approach.

But branding isn't just about self-promotion. It's about demonstrating value and building authority in your chosen area. When potential clients see that you understand their industry and challenges, they're more likely to trust you with their projects.`
      },
      {
        id: "choosing-niche",
        title: "Choosing a Niche",
        content: `Generalist developers often struggle to stand out in a competitive market. Specialization allows you to develop deeper expertise, command higher rates, and become the go-to person for specific types of projects.

Your niche might be based on technology (React, Python, blockchain), industry (healthcare, finance, e-commerce), or problem type (performance optimization, API integration, automation). The key is choosing an area that has genuine demand and aligns with your interests and strengths.

Research your chosen niche thoroughly. Understand the common challenges, current trends, and key players. What problems are businesses in this space struggling with? How can your skills help them achieve their goals?

As you build expertise in your niche, create content that demonstrates your knowledge. Write articles, speak at events, contribute to open-source projects, and share insights that help others in your field. Over time, you'll become known as an authority rather than just another developer.`
      },
      {
        id: "first-client",
        title: "Getting the First Client",
        content: `The first client is often the hardest to land. Without testimonials or a substantial portfolio, you need to be strategic and persistent.

Start with your existing network. Friends, family, former colleagues, and acquaintances might need development work or know someone who does. Don't be shy about letting people know what you do and what kind of projects you're looking for.

Consider offering your services at a slight discount initially in exchange for detailed testimonials and case studies. The goal isn't to work for free, but to build the social proof that makes future sales easier.

Freelancing platforms can be good for getting started, but don't rely on them exclusively. The competition is fierce, and the race to the bottom on pricing can be demoralizing. Use them to gain experience and build your portfolio, then gradually transition to direct client acquisition.

Cold outreach can work if done strategically. Research potential clients thoroughly, identify specific problems you can solve, and craft personalized messages that demonstrate your understanding of their business. Quality over quantity is key—ten well-researched, personalized outreach emails are more effective than a hundred generic templates.`
      },
      {
        id: "pricing-psychology",
        title: "Pricing Psychology",
        content: `Pricing is one of the most challenging aspects of freelancing, yet it has enormous impact on your success. Many developers dramatically undercharge, often because they lack confidence or don't understand the value they provide.

Remember that clients aren't buying your time—they're buying solutions to their problems. A well-built website that generates leads, an automated system that saves hours of work, or a custom application that enables new business capabilities can provide tremendous value that far exceeds your hourly rate.

Consider value-based pricing rather than hourly billing. Instead of charging $50/hour for a 20-hour project ($1,000), consider what the solution is worth to the client. If your work helps them generate an additional $10,000 in revenue, charging $2,000-3,000 is entirely reasonable.

Your pricing should reflect your expertise, the complexity of the work, the value delivered, and current market rates. Research what other freelancers with similar skills and experience are charging, but don't be afraid to premium price if you're delivering premium value.`
      },
      {
        id: "burnout-discipline",
        title: "Burnout & Discipline",
        content: `Freelancing freedom comes with a hidden cost: the need for self-discipline. Without the structure of traditional employment, many freelancers struggle with productivity, boundaries, and work-life balance.

Burnout is common in freelancing, often stemming from irregular schedules, feast-or-famine income cycles, and the pressure to always be "on." The solution isn't to work harder—it's to work smarter and establish sustainable practices.

Set clear working hours and stick to them. Create boundaries around when you're available to clients and when you're not. Just because you can work 24/7 doesn't mean you should.

Build systems and routines that support productivity without requiring constant willpower. Time blocking, Pomodoro techniques, and dedicated workspaces can help maintain focus and efficiency.

Most importantly, take care of your physical and mental health. Exercise, sleep, nutrition, and social connections aren't luxuries—they're essential for long-term success in freelancing.`
      },
      {
        id: "ai-future",
        title: "AI and the Future of Freelancing",
        content: `Artificial intelligence is transforming how developers work, and freelancers need to adapt to remain competitive. AI tools can significantly boost productivity, automate routine tasks, and even help with code generation and debugging.

However, AI is unlikely to replace skilled freelancers entirely. Instead, it's changing what clients value. As basic coding tasks become automated, the emphasis shifts to higher-level skills: system architecture, problem-solving, client communication, and strategic thinking.

Successful freelancers will learn to leverage AI as a tool rather than viewing it as a threat. They'll use AI to handle repetitive tasks, allowing them to focus on the uniquely human aspects of development work that AI cannot replicate.

The future belongs to freelancers who can combine technical expertise with business acumen, adapt to new technologies quickly, and consistently deliver value that goes beyond just writing code.`
      },
      {
        id: "final-thoughts",
        title: "Final Thoughts",
        content: `Building a successful freelancing career is a marathon, not a sprint. It requires technical excellence, business savvy, emotional intelligence, and persistent effort. But for those who master the craft, the rewards are substantial: autonomy, flexibility, financial opportunity, and the satisfaction of building something entirely your own.

The journey begins with acknowledging that you're not just a developer—you're a business owner. This mindset shift is fundamental to success. It changes how you approach pricing, client relationships, marketing, and every other aspect of your work.

Start small, learn continuously, and don't be afraid to make mistakes. Every project, whether successful or challenging, teaches you something valuable about your craft, your clients, and yourself.

The future of work is increasingly flexible, and skilled developers are perfectly positioned to thrive in this new landscape. By combining technical expertise with business intelligence and human connection, you can build a freelancing career that's both professionally rewarding and personally fulfilling.`
      }
    ]
  };

  const relatedPosts = [
    {
      title: "Future of Remote Work in 2024",
      excerpt: "The landscape of remote work continues to evolve rapidly...",
      image: "/images/blog/latest-insights/5.jpeg",
      category: "Remote Work",
      route: "/blog/future-of-remote-work-2024"
    },
    {
      title: "Real-World Software Solutions",
      excerpt: "In this post, I share my personal journey through development...",
      image: "/images/My_journey/image_1.png",
      category: "Development",
      route: null // No page yet
    },
    {
      title: "AI Automation Strategies",
      excerpt: "How to leverage artificial intelligence in your development workflow...",
      image: "/images/blog/latest-insights/7.jpeg",
      category: "AI Automation",
      route: null // No page yet
    }
  ];

  return (
    <div className="app">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-primary-red z-50 origin-left"
        style={{ scaleX: readingProgress }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
               style={{ background: '#050816' }}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255,30,30,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Hero Image with Overlay */}
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src={articleContent.hero.image}
              alt="From Code to Client"
              className="w-full h-full object-cover opacity-40"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Category Badge */}
            <motion.div
              variants={optimizedSlideIn}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 text-sm font-medium text-white rounded-full backdrop-blur-md"
                    style={{ background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.3)' }}>
                {articleContent.hero.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUpVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="block">{articleContent.hero.title}</span>
              <GradientText text={articleContent.hero.subtitle} className="block" />
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              {articleContent.hero.description}
            </motion.p>

            {/* Meta Info */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center justify-center gap-6 text-gray-400 mb-12"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-electric-blue to-primary-red flex items-center justify-center">
                  <span className="text-white font-bold">IR</span>
                </div>
                <span>{articleContent.hero.author}</span>
              </div>
              <span>•</span>
              <span>{articleContent.hero.date}</span>
              <span>•</span>
              <span>{articleContent.hero.readTime}</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.button
                variants={optimizedButton}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 bg-gradient-to-r from-electric-blue to-primary-red text-white rounded-lg font-medium"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                Start Reading
              </motion.button>
              <motion.button
                variants={optimizedSecondaryButton}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 backdrop-blur-md text-white rounded-lg font-medium border border-white/20"
                onClick={() => navigate('/blog')}
              >
                Back to Blog
              </motion.button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Article Content */}
      <LazySection className="py-20" style={{ background: '#0B1220' }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            {articleContent.sections.map((section, index) => (
              <motion.section
                key={section.id}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="mb-20 last:mb-0"
              >
                {/* Section Header */}
                <motion.h2
                  variants={optimizedSlideIn}
                  className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight"
                >
                  <GradientText text={section.title} />
                </motion.h2>

                {/* Section Content */}
                <motion.div
                  variants={fadeUpVariants}
                  className="prose prose-lg prose-invert max-w-none"
                >
                  {section.content.split('\n\n').map((paragraph, pIndex) => {
                    // Check if this is a quote
                    if (paragraph.includes('"') && paragraph.includes('"')) {
                      return (
                        <motion.blockquote
                          key={pIndex}
                          variants={optimizedSlideIn}
                          className="border-l-4 border-electric-blue pl-6 my-8 italic text-xl text-gray-300"
                          style={{ 
                            background: 'rgba(59,130,246,0.1)',
                            borderRadius: '8px',
                            padding: '20px',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          {paragraph}
                        </motion.blockquote>
                      );
                    }
                    
                    return (
                      <motion.p
                        key={pIndex}
                        variants={fadeUpVariants}
                        className="text-gray-300 leading-relaxed mb-6 text-lg"
                      >
                        {paragraph}
                      </motion.p>
                    );
                  })}
                </motion.div>

                {/* Section Separator */}
                {index < articleContent.sections.length - 1 && (
                  <motion.div
                    variants={fadeUpVariants}
                    className="mt-12 mb-12 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-30"
                  />
                )}
              </motion.section>
            ))}
          </div>
        </Container>
      </LazySection>

      {/* Author Section */}
      <LazySection className="py-20" style={{ background: '#050816' }}>
        <Container>
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={optimizedScaleIn}
              className="backdrop-blur-md rounded-2xl p-8 border border-white/10"
              style={{ background: 'rgba(17,24,39,0.75)' }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  variants={optimizedScaleIn}
                  className="w-24 h-24 rounded-full bg-gradient-to-r from-electric-blue to-primary-red flex items-center justify-center flex-shrink-0"
                >
                  <span className="text-white text-3xl font-bold">IR</span>
                </motion.div>
                
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Ishu Raj</h3>
                  <p className="text-electric-blue font-medium mb-4">Freelance Developer & Automation Engineer</p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Building scalable digital systems, automation platforms, and modern enterprise-grade applications. 
                    Specializing in transforming complex business challenges into elegant technical solutions.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-4 justify-center md:justify-start">
                    {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                      <motion.a
                        key={social}
                        href="#"
                        variants={optimizedHover}
                        initial="rest"
                        whileHover="hover"
                        className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors border border-gray-700 hover:border-electric-blue rounded-lg"
                      >
                        {social}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </LazySection>

      {/* Related Posts */}
      <LazySection className="py-20" style={{ background: '#0B1220' }}>
        <Container>
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Related Articles</h2>
            <p className="text-gray-400 text-lg">Explore more insights on development and freelancing</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={optimizedCardHover}
                initial="rest"
                whileHover="hover"
                className="backdrop-blur-md rounded-xl overflow-hidden border border-white/10 cursor-pointer"
                style={{ background: 'rgba(17,24,39,0.75)' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-white rounded-full"
                          style={{ background: 'rgba(59,130,246,0.8)' }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-electric-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  {post.route ? (
                    <motion.button
                      variants={optimizedHover}
                      initial="rest"
                      whileHover="hover"
                      className="text-electric-blue font-medium text-sm flex items-center gap-2"
                      onClick={() => navigate(post.route)}
                    >
                      Read More →
                    </motion.button>
                  ) : (
                    <motion.button
                      variants={optimizedHover}
                      initial="rest"
                      whileHover="hover"
                      className="text-gray-500 font-medium text-sm flex items-center gap-2 cursor-not-allowed"
                      disabled
                    >
                      Coming Soon →
                    </motion.button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </LazySection>

      {/* Final CTA */}
      <LazySection className="py-20 relative overflow-hidden" style={{ background: '#050816' }}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 30% 70%, rgba(59,130,246,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 30%, rgba(255,30,30,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 70%, rgba(59,130,246,0.2) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              variants={optimizedSlideIn}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Ready To Build<br />
              <GradientText text="Your Freelance Career?" />
            </motion.h2>
            
            <motion.p
              variants={fadeUpVariants}
              className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Transform your technical skills into scalable digital opportunities through consistency, 
              branding, and modern software expertise.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap gap-6 justify-center"
            >
              <motion.button
                variants={optimizedButton}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 bg-gradient-to-r from-electric-blue to-primary-red text-white rounded-lg font-medium text-lg"
                onClick={() => navigate('/projects')}
              >
                Explore Projects
              </motion.button>
              <motion.button
                variants={optimizedSecondaryButton}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 backdrop-blur-md text-white rounded-lg font-medium text-lg border border-white/20"
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </Container>
      </LazySection>

      <Footer />
    </div>
  );
};

export default FreelancingBlogPage;
