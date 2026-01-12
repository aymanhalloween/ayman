'use client';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ayman Hassen",
    "url": "https://aymanhassen.com",
    "email": "ayman.hassen1@gmail.com",
    "jobTitle": "Product Manager & Investor",
    "description": "Product manager and investor based in SF and Dallas",
    "sameAs": [
      "https://www.linkedin.com/in/ayman-hassen/",
      "https://twitter.com/aymancooks",
      "https://calendly.com/ayman-hassen1"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Hassen Ventures",
        "url": "https://aymanhassen.com"
      }
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Apple"
      },
      {
        "@type": "Organization",
        "name": "Nike"
      },
      {
        "@type": "Organization",
        "name": "Alif VC"
      }
    ],
    "knowsAbout": [
      "Product Management",
      "Strategy & Operations",
      "Startups",
      "Venture Capital",
      "Investing"
    ]
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="max-w-[680px] mx-auto px-6 py-16">
        {/* Name */}
        <h1 className="text-[32px] font-normal leading-tight mb-12">
              Ayman Hassen
              </h1>
              
        {/* About Me */}
        <section className="mb-16">
          <p className="text-[16px] leading-[1.6] mb-6">
            I'm a product guy that builds cool stuff based in SF 🔄 Dallas.
          </p>
          <p className="text-[16px] leading-[1.6] mb-6">
            I have experience building product at Apple, running strategy and ops at Nike, and being an operating partner at Alif VC. Currently consulting for startups, investing into companies, and building cool stuff on the side. Always open to{' '}
            <a href="https://calendly.com/ayman-hassen1" target="_blank" rel="noopener noreferrer">
              chatting
            </a>
            {' '}📲.
          </p>
          <p className="text-[16px] leading-[1.6] text-gray-600">
            P.S. Also currently building a WAQF (endowment fund). This is my life's work and what I'm dedicating my life to building.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-[14px] font-normal mb-6 text-gray-600 uppercase tracking-wider">Experience</h2>
          
          <div className="space-y-6">
              <div>
              <a href="https://aymanhassen.com" target="_blank" rel="noopener noreferrer" className="text-[16px] block mb-2">
                Hassen Ventures ↗
              </a>
              <div className="flex justify-between items-start mb-1">
                <p className="text-[16px]">Investing and helping companies scale</p>
                <p className="text-[14px] text-gray-500">Always</p>
              </div>
                </div>
                
            <div>
              <a href="https://alif.build" target="_blank" rel="noopener noreferrer" className="text-[16px] block mb-2">
                Alif VC ↗
              </a>
              <div className="flex justify-between items-start mb-1">
                <p className="text-[16px]">Operating Partner (founding team)</p>
                <p className="text-[14px] text-gray-500">2024 - 2025</p>
              </div>
          </div>

                        <div>
              <a href="https://nike.com" target="_blank" rel="noopener noreferrer" className="text-[16px] block mb-2">
                Nike ↗
              </a>
              <div className="flex justify-between items-start mb-1">
                <p className="text-[16px]">Strategy & Operations</p>
                <p className="text-[14px] text-gray-500">2022</p>
                        </div>
                      </div>
                      
            <div>
              <a href="https://apple.com" target="_blank" rel="noopener noreferrer" className="text-[16px] block mb-2">
                Apple ↗
              </a>
              <div className="flex justify-between items-start mb-1">
                <p className="text-[16px]">Product Manager</p>
                <p className="text-[14px] text-gray-500">2018 - 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-[14px] font-normal mb-6 text-gray-600 uppercase tracking-wider">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
              <a href="https://subtrack.xyz" target="_blank" rel="noopener noreferrer" className="text-[16px] block mb-1">
                Subtrack ↗
              </a>
              <p className="text-[14px] text-gray-500">CFO in your pocket</p>
                      </div>

            <div>
              <a href="https://eterna.so" target="_blank" rel="noopener noreferrer" className="text-[16px] block mb-1">
                Eterna ↗
              </a>
              <p className="text-[14px] text-gray-500">AI memory engagement platform</p>
                    </div>
                    
            <div>
              <a href="https://mahr.fyi" target="_blank" rel="noopener noreferrer" className="text-[16px] block mb-1">
                mahr.fyi ↗
              </a>
              <p className="text-[14px] text-gray-500">Democratizing mahr data</p>
              </div>
          </div>
        </section>

        {/* Contact */}
        <section className="pt-8 border-t border-gray-200 mb-16">
          <h2 className="text-[14px] font-normal mb-6 text-gray-600 uppercase tracking-wider">Contact</h2>
              
          <div className="space-y-3">
            <div>
              <a href="mailto:ayman.hassen1@gmail.com" className="text-[16px] block">
                ayman.hassen1@gmail.com
              </a>
            </div>
                
            <div>
              <a href="https://calendly.com/ayman-hassen1" target="_blank" rel="noopener noreferrer" className="text-[16px] block">
                Calendly ↗
              </a>
              </div>
              
            <div>
              <a href="https://www.linkedin.com/in/ayman-hassen/" target="_blank" rel="noopener noreferrer" className="text-[16px] block">
                LinkedIn ↗
              </a>
                </div>
                
            <div>
              <a href="https://twitter.com/aymancooks" target="_blank" rel="noopener noreferrer" className="text-[16px] block">
                Twitter ↗
              </a>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
} 