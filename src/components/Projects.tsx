'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Subtrack",
      description: "Stop setting money on fire 🔥",
      details: "AI-powered subscription tracker that kills SaaS waste before it kills your budget.",
      category: "AI · Fintech",
      status: "Live",
      link: "#"
    },
    {
      title: "Eterna",
      description: "Built for your grandma. Powered by AI. Pixar meets OpenAI.",
      details: "Digital legacy platform that preserves family stories and memories using AI.",
      category: "AI · Social",
      status: "Beta",
      link: "#"
    },
    {
      title: "Monument",
      description: "Memory preservation that doesn't suck.",
      details: "Platform for creating digital monuments and preserving important moments.",
      category: "Social · Memory",
      status: "Concept",
      link: "#"
    },
    {
      title: "Alif Ventures",
      description: "Helped founders raise $12M+",
      details: "Investment partner focusing on early-stage startups with product-market fit.",
      category: "Venture · Strategy",
      status: "Portfolio",
      link: "#"
    },
    {
      title: "Nike Product Strategy",
      description: "Enterprise dashboards meet sneaker culture",
      details: "Led product strategy for internal tools and consumer-facing experiences.",
      category: "Enterprise · Consumer",
      status: "Shipped",
      link: "#"
    },
    {
      title: "Apple Hardware PM",
      description: "Designed how people use Macs",
      details: "Product management for Mac hardware ecosystem and user experience.",
      category: "Hardware · UX",
      status: "Shipped",
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="headline-large mb-6">Stuff I've Built</h2>
          <p className="body-large text-deep-charcoal/60 max-w-3xl mx-auto">
            From AI tools that preserve memories to enterprise platforms that move billions. 
            Each project started with a person, not a feature.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <div className="bg-white border border-deep-charcoal/10 rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="meta-text text-deep-charcoal/50 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="headline-medium mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Live' ? 'bg-green-100 text-green-800' :
                      project.status === 'Beta' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'Concept' ? 'bg-yellow-100 text-yellow-800' :
                      project.status === 'Portfolio' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 text-deep-charcoal/40 group-hover:text-accent transition-colors" />
                    </motion.div>
                  </div>
                </div>

                <p className="font-medium mb-3 text-deep-charcoal">
                  {project.description}
                </p>
                
                <p className="text-sm text-deep-charcoal/60 leading-relaxed">
                  {project.details}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="body-base text-deep-charcoal/60 mb-6">
            Want to build something together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Let's Talk</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 