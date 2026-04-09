'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { essays } from './essays';

const fade = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">

      {/* Nav */}
      <nav className="max-w-[640px] mx-auto px-6 pt-12 pb-4 flex items-center justify-between">
        <Link href="/" className="text-[13px] font-medium tracking-wide text-[#1A1A1A] no-underline">
          Ayman Hassen
        </Link>
        <div className="flex gap-6">
          <Link href="/#building" className="text-[13px] text-[#737373] hover:text-[#1A1A1A] transition-colors duration-200 no-underline">
            Building
          </Link>
          <Link href="/writing" className="text-[13px] text-[#1A1A1A] transition-colors duration-200 no-underline">
            Writing
          </Link>
        </div>
      </nav>

      <main className="max-w-[640px] mx-auto px-6 pt-16 pb-24">
        <motion.section initial="hidden" animate="visible">
          <motion.h1
            custom={0}
            variants={fade}
            className="text-[36px] font-normal leading-[1.2] mb-2 tracking-[-0.02em]"
          >
            Writing
          </motion.h1>
          <motion.p
            custom={1}
            variants={fade}
            className="text-[14px] text-[#A0A0A0] mb-12"
          >
            My thoughts, evolving over time
          </motion.p>

          <div className="space-y-0">
            {essays.map((essay, i) => (
              <motion.div
                key={essay.slug}
                custom={i + 2}
                variants={fade}
              >
                <Link
                  href={`/writing/${essay.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-5 border-b border-[#E5E5E5] first:border-t first:border-[#E5E5E5] no-underline"
                >
                  <h3 className="text-[15px] font-normal text-[#1A1A1A] group-hover:text-[#737373] transition-colors duration-200">
                    {essay.title}
                  </h3>
                  <span className="text-[13px] text-[#A0A0A0] shrink-0">
                    {essay.date}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-px bg-[#E5E5E5] mt-16 mb-8" />

        {/* Footer */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
                className="text-[13px] text-[#A0A0A0] hover:text-[#1A1A1A] transition-colors duration-200 no-underline"
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
