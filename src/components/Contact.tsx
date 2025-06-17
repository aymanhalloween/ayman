'use client';

import { motion } from 'framer-motion';
import { Mail, Calendar, Twitter, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-deep-charcoal text-off-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="headline-large mb-6 text-off-white">Let&apos;s Build Something</h2>
          <p className="body-large text-off-white/70 max-w-2xl mx-auto mb-8">
            Advising. Building. Investing. If I can help — hit me up.
          </p>
          <p className="text-sm text-off-white/50">
            Or we can just talk about sneaker drops and GPT agents. That works too.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Contact Options */}
          <div className="space-y-6">
            <motion.a
              href="mailto:ayman@example.com"
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-4 p-4 bg-off-white/5 rounded-lg border border-off-white/10 hover:bg-off-white/10 transition-colors"
            >
              <Mail className="w-6 h-6 text-accent" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-off-white/60">ayman@example.com</p>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-4 p-4 bg-off-white/5 rounded-lg border border-off-white/10 hover:bg-off-white/10 transition-colors"
            >
              <Calendar className="w-6 h-6 text-accent" />
              <div>
                <p className="font-medium">Schedule a Call</p>
                <p className="text-sm text-off-white/60">30 min to chat</p>
              </div>
            </motion.a>

            <div className="pt-4">
              <p className="text-sm text-off-white/50 mb-4">Find me elsewhere:</p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-off-white/5 rounded-lg hover:bg-off-white/10 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-off-white/5 rounded-lg hover:bg-off-white/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-off-white/5 rounded-lg hover:bg-off-white/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 bg-off-white/5 border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-accent"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 bg-off-white/5 border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-accent"
            />
            <textarea
              rows={4}
              placeholder="What&apos;s on your mind?"
              className="w-full p-3 bg-off-white/5 border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-accent resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-off-white/10"
        >
          <p className="text-sm text-off-white/60 mb-2">
            © Ayman Hassen. All rights reserved.
          </p>
          <p className="text-xs text-off-white/40">
            Unless you&apos;re building something cool — then maybe we talk.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 