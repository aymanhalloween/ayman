'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { articles } from './articles';

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
      <div className="min-h-screen bg-white text-[#1A1A1A] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#A0A0A0] mb-4">Essay not found.</p>
          <Link href="/writing" className="text-[13px] text-[#A0A0A0] hover:text-[#1A1A1A] transition-colors no-underline">
            &larr; Back to writing
          </Link>
        </div>
      </div>
    );
  }

  let blockIndex = 0;

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
        <motion.article initial="hidden" animate="visible">

          <motion.h1
            custom={0}
            variants={fade}
            className="text-[36px] font-normal leading-[1.2] mb-3 tracking-[-0.02em]"
          >
            {article.title}
          </motion.h1>

          <motion.p custom={1} variants={fade} className="text-[14px] text-[#A0A0A0] mb-10">
            {article.date}
          </motion.p>

          {/* Divider */}
          <motion.div custom={2} variants={fade} className="w-full h-px bg-[#E5E5E5] mb-10" />

          <div>
            {article.content.map((block, i) => {
              blockIndex++;
              const ci = blockIndex + 2;

              if (block.type === 'break') {
                return <div key={i} className="h-8" />;
              }

              if (block.type === 'h2') {
                return (
                  <motion.h2
                    key={i}
                    custom={ci}
                    variants={fade}
                    className="text-[22px] font-normal leading-[1.3] text-[#1A1A1A] mt-2 mb-5 tracking-[-0.01em]"
                  >
                    {block.text}
                  </motion.h2>
                );
              }

              if (block.type === 'h3') {
                return (
                  <motion.h3
                    key={i}
                    custom={ci}
                    variants={fade}
                    className="text-[17px] font-normal italic leading-[1.5] text-[#525252] mb-6"
                  >
                    {block.text}
                  </motion.h3>
                );
              }

              // Paragraph — handle newlines as line breaks
              const lines = block.text.split('\n');
              return (
                <motion.p
                  key={i}
                  custom={ci}
                  variants={fade}
                  className="text-[15px] leading-[1.85] text-[#525252] mb-4"
                >
                  {lines.map((line, li) => (
                    <span key={li}>
                      {line}
                      {li < lines.length - 1 && <br />}
                    </span>
                  ))}
                </motion.p>
              );
            })}
          </div>

        </motion.article>

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
