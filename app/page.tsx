'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, ArrowUpRight, Github, Linkedin, Twitter, Calendar } from 'lucide-react';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 50]);

  return (
    <>
      <main className="min-h-screen bg-stone-50 text-stone-900 overflow-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-xl text-stone-900"
            >
              Ayman Hassen
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex space-x-8 text-sm text-stone-600"
            >
              <a 
                href="#work" 
                className="hover:text-olive-600 transition-colors"
              >
                Work
              </a>
              <a 
                href="#experience" 
                className="hover:text-olive-600 transition-colors"
              >
                Experience
              </a>
              <a 
                href="#about" 
                className="hover:text-olive-600 transition-colors"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="hover:text-olive-600 transition-colors"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative px-8">
          {/* Floating Elements */}
          <motion.div
            style={{ y: y1 }}
            className="absolute top-1/4 right-1/3 w-32 h-32 opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full border border-olive-300 rounded-full" />
          </motion.div>
          
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-olive-200 rounded-lg opacity-30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-tight tracking-tight">
                Building products but really<br />
                <em className="text-olive-600">I build clarity.</em>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-xl md:text-2xl text-stone-600 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                From cracked screens to Nike dashboards, and FEMA robots to ghostwritten memories.<br />
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center items-center space-x-12 text-sm text-stone-500 uppercase tracking-wider"
              >
                <span 
                  className="hover:text-olive-600 transition-colors cursor-pointer"
                >
                  Builder
                </span>
                <div className="w-px h-6 bg-stone-300" />
                <span 
                  className="hover:text-olive-600 transition-colors cursor-pointer"
                >
                  Operator
                </span>
                <div className="w-px h-6 bg-stone-300" />
                <span 
                  className="hover:text-olive-600 transition-colors cursor-pointer"
                >
                  Storyteller
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>



        {/* About Section */}
        <section id="about" className="py-24 px-8 bg-stone-50 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 text-stone-900">
                  From sneaker bots<br />
                  to neural networks.
                </h2>
                
                <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                  <p>
                    Started coding sneaker bots in Highschool. Ended up shipping hardware at Apple and managing product for millions of users at Nike.
                  </p>
                  
                  <p>
                    Now I&apos;m building <span className="text-olive-600 font-medium">Eterna</span> — AI that preserves memories like Pixar meets OpenAI. Built for your grandma.
                  </p>
                  
                  <p>
                    I&apos;ve founded companies, advised founders, and helped teams raise $12M+ without losing their souls. I believe great products start with empathy, not features.
                  </p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-12 p-8 bg-white rounded-2xl border border-stone-200"
                >
                  <p className="font-serif text-lg italic text-stone-700">
                    &quot;The best interfaces disappear. Stories shape behavior more than specs ever will.&quot;
                  </p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-stone-100 to-olive-100 rounded-3xl flex items-center justify-center border border-stone-200">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🧠</div>
                    <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">Currently Building</p>
                    <p className="text-xl font-serif text-olive-700">Eterna AI</p>
                    <p className="text-sm text-stone-600 mt-2">Stealth Mode</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-6xl font-light mb-16 text-center text-stone-900">
                Selected Works
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                {[
                  {
                    title: "Eterna",
                    subtitle: "AI Memory Platform",
                    description: "Pixar meets OpenAI. Preserving human stories through conversational AI that learns and remembers.",
                    status: "Active",
                    year: "2024",
                    tags: ["AI", "React", "Python", "Storytelling"],
                    color: "from-olive-400 to-olive-600"
                  },
                  {
                    title: "Subtrack",
                    subtitle: "SaaS Analytics",
                    description: "Stop setting money on fire. Helped companies save $2M+ on unused subscriptions.",
                    status: "Acquired",
                    year: "2023",
                    tags: ["SaaS", "Analytics", "Growth"],
                    color: "from-stone-400 to-stone-600"
                  },
                  {
                    title: "Apple Hardware",
                    subtitle: "Product Management",
                    description: "Shipped hardware experiences that millions of people touch every day. Making Macs feel more human.",
                    status: "Shipped",
                    year: "2022",
                    tags: ["Hardware", "PM", "Scale"],
                    color: "from-stone-500 to-olive-500"
                  },
                  {
                    title: "Nike Digital",
                    subtitle: "Product Platform",
                    description: "From fixing sneaker bots to building them. Managed product for millions of sneakerheads.",
                    status: "Scaled",
                    year: "2022",
                    tags: ["E-commerce", "Platform", "Mobile"],
                    color: "from-olive-300 to-stone-500"
                  }
                ].map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-stone-50 rounded-3xl p-8 border border-stone-200 cursor-pointer overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-serif text-stone-900">{project.title}</h3>
                            <span className="text-sm text-stone-500">{project.year}</span>
                          </div>
                          <p className="text-olive-600 text-sm uppercase tracking-wider">{project.subtitle}</p>
                        </div>
                        <ArrowUpRight className="w-6 h-6 text-stone-400 group-hover:text-olive-600 transition-colors" />
                      </div>
                      
                      <p className="text-stone-600 text-lg mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-white text-stone-600 text-xs rounded-full border border-stone-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-stone-400 uppercase tracking-wider">Status</span>
                        <span className="px-3 py-1 bg-olive-100 text-olive-700 text-xs rounded-full font-medium border border-olive-200">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-8 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-6xl font-light mb-16 text-center text-stone-900">
                Professional Journey
              </h2>
              
              <div className="space-y-12">
                {[
                  {
                    company: "Alif VC",
                    role: "Head of Strategy and Operations - Founding Team",
                    location: "San Francisco, CA",
                    period: "March 2024 – Current",
                    highlights: [
                      "Built and scaled an accelerator that helped 16 startups grow from zero to $9M+ in combined ARR",
                      "Led fundraising support across the cohort, contributing to over $12M raised partnered with A16Z, Bain, Kleiner Perkins, and others",
                      "Led sourcing and screening for 100+ inbound and outbound deals, increasing investment conversion rate by 35%",
                      "Structured partnerships with AWS, Stripe, Google Cloud, and Ramp, unlocking $1.5M+ in platform benefits per startup"
                    ]
                  },
                  {
                    company: "Hassen Ventures",
                    role: "Product & Strategy Consultant",
                    location: "Remote",
                    period: "September 2022 – March 2024",
                    highlights: [
                      "Led product and GTM for 3 early-stage startups across EdTech, HealthTech, and FinTech",
                      "Built U.S. market strategy for Mathpapa, leading to +20% user retention through gamified onboarding",
                      "Overhauled ops for Etched Quality Care, reducing churn by 13% through CRM implementation"
                    ]
                  },
                  {
                    company: "Nike",
                    role: "Program Manager Co-Op",
                    location: "Boston, MA",
                    period: "June 2022 – September 2022",
                    highlights: [
                      "Led a project that boosted sales by 14% across 88 stores through data-driven inventory management",
                      "Partnered with strategy teams to evaluate human capital assets and resource allocation",
                      "Presented a strategic investment plan to C-suite executives, leveraging local partnerships"
                    ]
                  },
                  {
                    company: "Apple Inc.",
                    role: "Product Manager Rotation Program",
                    location: "Cupertino, CA | Dallas, TX",
                    period: "December 2021 - June 2022",
                    highlights: [
                      "Supported cross-functional engineering teams in redesigning failure analysis tools, resulting in 7,500-hour annual labor savings",
                      "Launched a hardware prototype management tool with 3,000+ monthly users",
                      "Managed product backlog, prioritizing features based on UI/UX needs and strategic goals",
                      "Developed SOPs to enhance factory operations, increasing production efficiency by 9%"
                    ]
                  }
                ].map((job, index) => (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 border border-stone-200"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-serif text-stone-900 mb-1">{job.company}</h3>
                        <p className="text-olive-600 font-medium mb-2">{job.role}</p>
                        <p className="text-stone-500 text-sm">{job.location}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:text-right">
                        <span className="px-3 py-1 bg-stone-100 text-stone-600 text-sm rounded-full border border-stone-200">
                          {job.period}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-stone-600 leading-relaxed">
                          <div className="w-1.5 h-1.5 bg-olive-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-6xl font-light mb-8 text-stone-900">
                Building something<br />
                <em className="text-olive-600">interesting?</em>
              </h2>
              
              <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Whether you need a brain, a builder, or a believer —<br />
                let&apos;s talk.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <motion.a 
                  href="mailto:ayman.hassen1@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-stone-900 text-white hover:bg-olive-700 transition-all duration-300 text-lg rounded-full"
                >
                  <Mail className="w-5 h-5" />
                  <span>Start a conversation</span>
                </motion.a>
                
                <motion.a 
                  href="https://calendly.com/ayman-hassen1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-stone-300 text-stone-700 hover:border-olive-500 hover:text-olive-700 transition-all duration-300 text-lg rounded-full"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a call</span>
                </motion.a>
              </div>
              
              <div className="pt-12 border-t border-stone-200">
                <div className="flex justify-center space-x-8 mb-8">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/ayman-hassen/", label: "LinkedIn" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Github, href: "https://github.com/aymanhalloween", label: "GitHub" },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-stone-100 border border-stone-200 rounded-full flex items-center justify-center hover:bg-olive-100 hover:border-olive-300 transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-stone-600 group-hover:text-olive-600 transition-colors" />
                    </motion.a>
                  ))}
                </div>
                
                <p className="text-stone-400 text-sm">
                  © 2024 Ayman Hassen<br />
                  <span className="text-stone-300">Designed with intention. Built with obsession.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .text-olive-600 {
          color: #6B7A52;
        }
        
        .text-olive-700 {
          color: #5A6B45;
        }
        
        .bg-olive-100 {
          background-color: #F0F2EC;
        }
        
        .bg-olive-700 {
          background-color: #5A6B45;
        }
        
        .border-olive-200 {
          border-color: #E8EBE0;
        }
        
        .border-olive-300 {
          border-color: #D1D7C4;
        }
        
        .border-olive-500 {
          border-color: #8A9575;
        }
        
        .border-olive-600 {
          border-color: #6B7A52;
        }
        
        .hover\\:text-olive-600:hover {
          color: #6B7A52;
        }
        
        .hover\\:text-olive-700:hover {
          color: #5A6B45;
        }
        
        .hover\\:bg-olive-100:hover {
          background-color: #F0F2EC;
        }
        
        .hover\\:border-olive-300:hover {
          border-color: #D1D7C4;
        }
        
        .hover\\:border-olive-500:hover {
          border-color: #8A9575;
        }
        
        .from-olive-300 {
          --tw-gradient-from: #D1D7C4;
        }
        
        .from-olive-400 {
          --tw-gradient-from: #A3B18A;
        }
        
        .to-olive-500 {
          --tw-gradient-to: #8A9575;
        }
        
        .to-olive-600 {
          --tw-gradient-to: #6B7A52;
        }
        
        .group-hover\\:text-olive-600:hover {
          color: #6B7A52;
        }
      `}</style>
    </>
  );
} 