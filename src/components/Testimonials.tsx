'use client';

import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ayman has this rare ability to see the human story behind every product decision. He doesn't just build features—he builds experiences that people actually want to use.",
      author: "Sarah Chen",
      role: "Design Partner, Kleiner Perkins",
      company: "Former Apple Design Team"
    },
    {
      quote: "Working with Ayman at Nike was like having a crystal ball for product-market fit. He could predict what users wanted before they knew it themselves.",
      author: "Marcus Williams",
      role: "VP of Product",
      company: "Nike Digital"
    },
    {
      quote: "Ayman helped us raise our Series A by turning our scattered ideas into a compelling narrative. He doesn't just understand product—he understands people.",
      author: "Alex Rodriguez",
      role: "CEO",
      company: "Stealth AI Startup"
    },
    {
      quote: "At Apple, Ayman was the guy who could translate complex technical requirements into experiences that felt magical. He made the complicated feel simple.",
      author: "Jennifer Liu",
      role: "Senior Director",
      company: "Apple Hardware Engineering"
    },
    {
      quote: "Ayman's thesis on AI + empathy isn't just smart—it's necessary. He sees where the industry is going before it gets there.",
      author: "David Park",
      role: "General Partner",
      company: "Alif Ventures"
    },
    {
      quote: "He built our robotics platform like he was designing an iPhone. Every interaction was intentional, every detail mattered. That's what great product thinking looks like.",
      author: "Dr. Maria Santos",
      role: "FEMA Research Lead",
      company: "Emergency Response Division"
    }
  ];

  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="headline-large mb-6">People Say Nice Things</h2>
          <p className="body-large text-deep-charcoal/60 max-w-3xl mx-auto">
            From teammates who've shipped with me to founders I've helped raise millions. 
            Here's what they'd probably say if you asked.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="bg-white border border-deep-charcoal/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <blockquote className="text-deep-charcoal/80 leading-relaxed mb-6 relative">
                <span className="text-4xl text-accent/20 absolute -top-2 -left-2">"</span>
                <p className="relative z-10">{testimonial.quote}</p>
              </blockquote>
              
              <div className="border-t border-deep-charcoal/10 pt-4">
                <p className="font-medium text-deep-charcoal mb-1">
                  {testimonial.author}
                </p>
                <p className="text-sm text-deep-charcoal/60">
                  {testimonial.role}
                </p>
                <p className="text-sm text-accent font-medium">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 