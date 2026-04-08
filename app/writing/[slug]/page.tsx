'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

// ─── ADD YOUR ESSAYS HERE ───
// Each key is the URL slug. The content is an array of paragraphs.
// For section headers, prefix with "## " and they'll render as headers.
// For standalone lines (like "Bismillah"), they'll render with emphasis.
const articles: Record<string, { title: string; date: string; content: string[] }> = {
  'sample-essay': {
    title: 'Your first essay title goes here',
    date: 'April 2026',
    content: [
      'This is a placeholder for your first essay.',
      'Replace this content with your actual writing. Each string in this array becomes a paragraph.',
      '## A Section Header',
      'You can add section headers by starting a line with "## ". They\'ll render with the right styling.',
      'To add a new essay, just add another key to the articles object in this file and a matching entry in the essays array in /writing/page.tsx.',
    ],
  },
};

const fade = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#8A8A8A] mb-4">Essay not found.</p>
          <Link href="/writing" className="text-[13px] text-[#8A8A8A] hover:text-[#1A1A1A] transition-colors no-underline">
            ← Back to writing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A]">

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
        <motion.article initial="hidden" animate="visible">

          <motion.div custom={0} variants={fade} className="mb-12">
            <Link href="/writing" className="text-[13px] text-[#8A8A8A] hover:text-[#1A1A1A] transition-colors no-underline">
              ← Back
            </Link>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fade}
            className="text-[28px] font-normal leading-[1.3] mb-3 tracking-[-0.02em]"
          >
            {article.title}
          </motion.h1>

          <motion.p custom={2} variants={fade} className="text-[13px] text-[#8A8A8A] mb-12">
            {article.date}
          </motion.p>

          <div className="space-y-5">
            {article.content.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <motion.h2
                    key={i}
                    custom={i + 3}
                    variants={fade}
                    className="text-[17px] font-medium text-[#1A1A1A] mt-10 mb-2"
                  >
                    {block.replace('## ', '')}
                  </motion.h2>
                );
              }
              return (
                <motion.p
                  key={i}
                  custom={i + 3}
                  variants={fade}
                  className="text-[15px] leading-[1.8] text-[#525252]"
                >
                  {block}
                </motion.p>
              );
            })}
          </div>

        </motion.article>

        {/* Footer */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 mt-20 border-t border-[#E5E5E5]"
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
