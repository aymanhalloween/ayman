'use client';

import { motion } from 'framer-motion';

const About = () => {
  const timeline = [
    {
      period: "2nd Grade",
      title: "Started Selling Financial Advice",
      description: "Apparently knew money was important very early."
    },
    {
      period: "High School",
      title: "iPhone Repair & Sneakerbotting",
      description: "Fixed cracked screens in Dallas while automating sneaker drops."
    },
    {
      period: "College",
      title: "Licensed to Officiate Divorces",
      description: "Legally ended marriages. Seriously. Still have the papers."
    },
    {
      period: "Post-Grad",
      title: "Search & Rescue Robots",
      description: "Built and welded robots for FEMA disaster response."
    },
    {
      period: "Apple",
      title: "Hardware Product Manager",
      description: "Designed how people use Macs. Learned the magic behind the aluminum."
    },
    {
      period: "Nike",
      title: "Product Strategy",
      description: "From sneaker drops to enterprise dashboards. Full circle."
    },
    {
      period: "Alif VC",
      title: "Investment Partner",
      description: "Helped founders raise $12M+. Saw what works and what doesn't."
    },
    {
      period: "Now",
      title: "Building AI Tools with Soul",
      description: "Subtrack, Eterna, Monument. Products that preserve memory and kill waste."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted-tan/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="headline-large mb-6">Who TF Is Ayman</h2>
          <p className="body-large text-deep-charcoal/60 max-w-3xl mx-auto">
            I started out selling financial advice in 2nd grade.<br /><br />
            Later, I welded robots for FEMA to help in natural disasters.<br /><br />
            Recently, I helped founders raise millions and build companies that actually ship.<br /><br />
            I&apos;ve always been drawn to systems — but I build for people.<br />
            Empathy is the through line. Everything else is just execution.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-deep-charcoal/20 transform md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } flex-row`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-deep-charcoal rounded-full transform md:-translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-deep-charcoal/10 interactive-card"
                >
                  <p className="meta-text mb-2">{item.period}</p>
                  <h3 className="headline-medium mb-3">{item.title}</h3>
                  <p className="body-base text-deep-charcoal/70">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="bg-white p-8 rounded-lg border border-deep-charcoal/10 max-w-4xl mx-auto">
            <h3 className="headline-medium mb-6">The Through Line</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <p className="font-medium">&ldquo;Great products start with empathy, not features.&rdquo;</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">&ldquo;Simplicity is a superpower. If it&apos;s not clear, it doesn&apos;t scale.&rdquo;</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">&ldquo;Stories are strategy. Narratives shape behavior more than specs ever will.&rdquo;</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 