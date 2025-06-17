'use client';

import { motion } from 'framer-motion';

const Philosophy = () => {
  const beliefs = [
    {
      title: "Product-Led Growth",
      text: "Product-led growth starts with person-led empathy.",
      category: "Product"
    },
    {
      title: "Simplicity",
      text: "Most products are overdesigned because someone didn&apos;t edit.",
      category: "Design"
    },
    {
      title: "Speed vs. Durability",
      text: "Build fast. But ship what lasts.",
      category: "Strategy"
    },
    {
      title: "Features vs. Stories",
      text: "Stories are strategy. Narratives shape behavior more than specs ever will.",
      category: "Product"
    },
    {
      title: "Empathy First",
      text: "Great products start with empathy, not features.",
      category: "Philosophy"
    },
    {
      title: "Clarity as Power",
      text: "Simplicity is a superpower. If it&apos;s not clear, it doesn&apos;t scale.",
      category: "Growth"
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-muted-tan/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="headline-large mb-6">Hot Takes</h2>
          <p className="body-large text-deep-charcoal/60 max-w-3xl mx-auto">
            Stuff I&apos;d bet on. Lessons learned from breaking things, fixing them, and occasionally getting them right.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotate: Math.random() * 4 - 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                rotate: Math.random() * 2 - 1,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              className="bg-white border border-deep-charcoal/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <span className="meta-text text-accent mb-3 block">
                {belief.category}
              </span>
              <h3 className="font-medium text-deep-charcoal mb-3">
                {belief.title}
              </h3>
              <p className="text-deep-charcoal/70 leading-relaxed">
                &ldquo;{belief.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Easter egg section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Warming up charisma... 100% complete! 🔥")}
            className="text-sm text-deep-charcoal/50 hover:text-deep-charcoal transition-colors border border-deep-charcoal/20 rounded-full px-4 py-2"
          >
            Don&apos;t Click Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy; 