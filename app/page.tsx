'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fade = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const projects = [
  { name: 'Maidah', desc: 'Permanent endowment for Muslims in the West', url: '#', status: 'Active' },
  { name: 'The Chain', desc: 'Documentary on the oral transmission of the Quran', url: '#', status: 'In development' },
  { name: 'mahr.fyi', desc: 'Democratizing mahr data', url: 'https://mahr.fyi', status: 'Acquired' },
  { name: 'Subtrack', desc: 'Subscription tracking and financial clarity', url: 'https://subtrack.xyz', status: 'Acquired' },
  { name: 'Eterna', desc: 'AI-powered biography service for families', url: 'https://eterna.so', status: 'Acquired' },
];

const statusColor: Record<string, string> = {
  'Active': 'text-[#1A1A1A]',
  'Acquired': 'text-[#A0A0A0]',
  'In development': 'text-[#8A8A8A]',
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ayman Hassen",
    "url": "https://aymanhassen.com",
    "email": "ayman.hassen1@gmail.com",
    "jobTitle": "Founder, Maidah",
    "description": "Founder of Maidah. Previously Apple, Nike, Alif. Building permanent institutions for Muslims in the West.",
    "sameAs": [
      "https://www.linkedin.com/in/ayman-hassen/",
      "https://twitter.com/aymancooks",
      "https://growwiththeflow.substack.com"
    ],
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Nav */}
      <nav className="max-w-[640px] mx-auto px-6 pt-12 pb-4 flex items-center justify-between">
        <Link href="/" className="text-[13px] font-medium tracking-wide text-[#1A1A1A] no-underline">
          Ayman Hassen
        </Link>
        <div className="flex gap-6">
          <a href="#building" className="text-[13px] text-[#737373] hover:text-[#1A1A1A] transition-colors duration-200 no-underline">
            Building
          </a>
          <Link href="/writing" className="text-[13px] text-[#737373] hover:text-[#1A1A1A] transition-colors duration-200 no-underline">
            Writing
          </Link>
        </div>
      </nav>

      <main className="max-w-[640px] mx-auto px-6 pt-16 pb-24">

        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h1
            custom={0}
            variants={fade}
            className="text-[36px] font-normal leading-[1.2] mb-2 tracking-[-0.02em]"
          >
            Ayman Hassen
          </motion.h1>

          <motion.p custom={1} variants={fade} className="text-[14px] text-[#A0A0A0] mb-10">
            @aymancooks
          </motion.p>

          <motion.p custom={2} variants={fade} className="text-[15px] leading-[1.8] text-[#525252] mb-4">
            I&apos;m the founder of{' '}
            <a href="#building" className="text-[#1A1A1A] underline decoration-[#D4D4D4] underline-offset-[3px] hover:decoration-[#1A1A1A] transition-all">Maidah</a>
            , where I&apos;m building a permanent endowment fund for Muslims in the West.
          </motion.p>

          <motion.p custom={3} variants={fade} className="text-[15px] leading-[1.8] text-[#525252] mb-4">
            Before this, I was a product manager at{' '}
            <a href="https://apple.com" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] underline decoration-[#D4D4D4] underline-offset-[3px] hover:decoration-[#1A1A1A] transition-all">Apple</a>
            {' '}on the Mac team for four years, ran strategy and operations at{' '}
            <a href="https://nike.com" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] underline decoration-[#D4D4D4] underline-offset-[3px] hover:decoration-[#1A1A1A] transition-all">Nike</a>
            , and was on the founding team at{' '}
            <a href="https://alif.build" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] underline decoration-[#D4D4D4] underline-offset-[3px] hover:decoration-[#1A1A1A] transition-all">Alif</a>
            , a venture fund and studio for Muslim founders.
          </motion.p>

          <motion.p custom={4} variants={fade} className="text-[15px] leading-[1.8] text-[#525252] mb-4">
            I&apos;ve had a few products acquired along the way. I{' '}
            <Link href="/writing" className="text-[#1A1A1A] underline decoration-[#D4D4D4] underline-offset-[3px] hover:decoration-[#1A1A1A] transition-all">write</Link>
            , invest in early-stage companies, and am currently based in Dallas.
          </motion.p>

          <motion.p custom={5} variants={fade} className="text-[15px] leading-[1.8] text-[#A0A0A0] mt-8">
            ~A
          </motion.p>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-px bg-[#E5E5E5] mb-16" />

        {/* Building */}
        <motion.section
          id="building"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-20"
        >
          <motion.h2
            custom={0}
            variants={fade}
            className="text-[12px] font-medium mb-8 text-[#8A8A8A] uppercase tracking-[0.15em]"
          >
            Building
          </motion.h2>

          <div className="space-y-0">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                custom={i + 1}
                variants={fade}
                className="group py-4 border-b border-[#E5E5E5] first:border-t first:border-[#E5E5E5]"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {project.url !== '#' ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-medium text-[#1A1A1A] no-underline group-hover:text-[#C4A574] transition-colors duration-200"
                      >
                        {project.name}
                      </a>
                    ) : (
                      <span className="text-[15px] font-medium text-[#1A1A1A]">
                        {project.name}
                      </span>
                    )}
                    <p className="text-[13px] text-[#8A8A8A] mt-0.5">{project.desc}</p>
                  </div>
                  <span className={`text-[11px] uppercase tracking-[0.1em] font-medium shrink-0 ${statusColor[project.status] || 'text-[#8A8A8A]'}`}>
                    {project.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 border-t border-[#E5E5E5]"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: 'Email', url: 'mailto:ayman.hassen1@gmail.com' },
              { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ayman-hassen/' },
              { label: 'X', url: 'https://twitter.com/aymancooks' },
              { label: 'Substack', url: 'https://growwiththeflow.substack.com' },
              { label: 'GitHub', url: 'https://github.com/aymanhalloween' },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                custom={i}
                variants={fade}
                href={link.url}
                target={link.url.startsWith('mailto') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="text-[13px] text-[#8A8A8A] hover:text-[#1A1A1A] transition-colors duration-200 no-underline"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.section>

      </main>
    </div>
  );
}
