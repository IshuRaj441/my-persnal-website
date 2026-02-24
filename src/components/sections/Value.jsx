import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Card from '../ui/Card';
import { fadeUp, staggerContainer } from '../../animations/motionVariants';

const Value = () => {
  const valueProps = [
    {
      title: '🧠 I Build Growth Engines — Not Just Websites',
      description: 'Anyone can build a website. I build digital ecosystems that attract the right audience, convert visitors into leads, turn leads into customers, and track and optimize every step. Your platform isn\'t just "live" — it becomes a measurable, scalable growth asset.'
    },
    {
      title: '⚙️ Strategy Comes Before Code',
      description: 'Before writing a single line of code, I focus on business model clarity, target audience psychology, funnel architecture, conversion flow, and revenue pathways. Technology without strategy is noise. With strategy, it becomes leverage.'
    },
    {
      title: '🔧 Full-Stack + Full-Funnel Thinking',
      description: 'I don\'t think in pages. I think in systems. Frontend experience, backend logic, performance optimization, SEO structure, analytics integration, automation workflows. Everything works together — clean, scalable, intelligent.'
    },
    {
      title: '📈 Data-Driven Decision Making',
      description: 'Design decisions are not based on "what looks good." They are based on user behavior, heatmaps, conversion metrics, A/B insights, and funnel drop-off analysis. If something can be measured, it can be improved.'
    },
    {
      title: '🎯 Conversion-Focused Design',
      description: 'Every section, button, layout block, headline, and interaction is intentionally placed to move users toward action. Beautiful design is important. But profitable design is powerful.'
    },
    {
      title: '🔥 I Think Like a Founder',
      description: 'I understand cash flow pressure, scaling challenges, market positioning, and brand authority building. I don\'t just execute tasks — I help teams make smarter technical decisions that support long-term growth.'
    },
    {
      title: '🛠️ Clean Code. Clean Architecture. Zero Chaos.',
      description: 'Visionary teams value maintainable systems, scalable architecture, clear documentation, and future-ready builds. No messy shortcuts. No fragile builds. No technical debt traps.'
    },
    {
      title: '🤝 Partnership > Projects',
      description: 'I don\'t disappear after delivery. I monitor performance, optimize continuously, suggest improvements, and adapt to growth stages. Because real impact happens after launch.'
    },
    {
      title: '🌍 Execution Speed Without Compromising Quality',
      description: 'Visionary teams move fast. So do I — but never recklessly. Structured workflows. Clear milestones. Efficient delivery. High standards.'
    }
  ];

  return (
    <Section className="bg-secondary">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
              Why Visionary Teams Work With Me
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The principles that drive exceptional results.
            </p>
          </motion.div>

          {/* 3-Column Grid for 9 cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index}
                whileHover={{ 
                  y: -5,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="h-full border border-white/10 hover:border-accent/50">
                  <h3 className="text-xl font-bold text-text-primary mb-4 hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Value;
