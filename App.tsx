
import React, { useState, useEffect, useRef } from 'react';

// Add this declaration for the global JSConfetti object from the CDN script
declare const JSConfetti: any;

// --- SVG Icons ---
const CreeperIcon = () => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 mx-auto text-green-500">
        <rect width="32" height="32" fill="#3E7D3A"/>
        <rect x="8" y="6" width="6" height="6" fill="black"/>
        <rect x="18" y="6" width="6" height="6" fill="black"/>
        <rect x="13" y="12" width="6" height="10" fill="black"/>
        <rect x="8" y="16" width="5" height="6" fill="black"/>
        <rect x="19" y="16" width="5" height="6" fill="black"/>
    </svg>
);

const ArrowRightIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`${className} transform transition-transform group-hover:translate-x-2`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

const LiveDotIcon = ({ colorClass = "bg-green-400", shadowColor = "rgba(52,211,153,0.9)" }) => (
  <div className={`w-4 h-4 ${colorClass} rounded-full shadow-[0_0_10px_${shadowColor}] animate-pulse`}></div>
);

const GithubIcon = () => (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
);

const WinnerStamp = () => (
    <a
        href="https://www.linkedin.com/posts/dan-goncharov_yesterdays-build-with-gemini-win-up-activity-7395918043735859200-exMe/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-8 right-[-105px] z-[100] w-80 py-2 transform rotate-45 bg-amber-400 text-black text-sm font-extrabold uppercase tracking-wider text-center shadow-lg hover:bg-amber-500 transition-colors duration-300 ease-in-out overflow-hidden"
        aria-label="View Hackathon Winner announcement on LinkedIn"
    >
       <div className="whitespace-nowrap animate-marquee-right">
            <span className="mx-4">HACKATHON SUBMISSION: GEMINI</span>
            <span className="mx-4">HACKATHON SUBMISSION: GEMINI</span>
       </div>
    </a>
);


const Header = () => {
    const [isGithubMenuOpen, setIsGithubMenuOpen] = useState(false);
    const githubDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (githubDropdownRef.current && !githubDropdownRef.current.contains(event.target as Node)) {
                setIsGithubMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-[60] bg-gray-100/80 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-lg"></div>
                    <span className="font-bold text-xl text-gray-900">BUU AI - GAME MAKER</span>
                </div>
                <nav className="flex items-center gap-4">
                    <div className="relative" ref={githubDropdownRef}>
                        <button
                            onClick={() => setIsGithubMenuOpen(!isGithubMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                            aria-label="GitHub Menu"
                        >
                            <GithubIcon />
                        </button>
                        
                        {isGithubMenuOpen && (
                            <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 animate-in fade-in zoom-in duration-200 origin-top-right">
                                <a 
                                    href="/" 
                                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium"
                                    onClick={() => setIsGithubMenuOpen(false)}
                                >
                                    Landing Page (Hackathon Submission)
                                </a>
                                <a 
                                    href="https://github.com/Buu-AI/atomic-coding" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium border-t border-gray-50"
                                    onClick={() => setIsGithubMenuOpen(false)}
                                >
                                    Buu AI Game Maker
                                </a>
                            </div>
                        )}
                    </div>
                    
                    <a 
                        href="https://atomic-coding.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95"
                    >
                        LIVE DEMO
                    </a>
                </nav>
            </div>
        </header>
    );
};

const App = () => {
  const testimonials = [
    {
      name: "Carlos Roldan",
      role: "CEO @ Buu AI",
      image: "https://pbs.twimg.com/profile_images/1983620121114660864/mODcXOuh_400x400.jpg",
      text: "\"Adding Gemini 3 Pro was challenging, but not as complicated as deploying our agents in google cloud, but thanks to AI studio we made it in a few simple steps\""
    },
    {
      name: "Victor Merino",
      role: "CTO @ Buu AI",
      image: "https://pbs.twimg.com/profile_images/1870212039177613312/pCddDzaQ_400x400.jpg",
      text: "\"The orchestration of multiple agents in sync with MCP servers from the start gave us the edge to win the hackathon\""
    }
  ];

  useEffect(() => {
    if (typeof JSConfetti !== 'undefined') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ['🏆'],
        confettiNumber: 70,
        emojiSize: 50,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <WinnerStamp />
      <Header />
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden shadow-sm h-[28rem] bg-gray-900 border-4 border-gray-900/10">
              <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ZSB-nZzqOLI?autoplay=1&mute=1&loop=1&playlist=ZSB-nZzqOLI&controls=1&si=m-Rqyi2NEW7XQTve" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
              </iframe>
            </div>
            
            <div className="bg-gray-200 rounded-3xl p-8 flex flex-col gap-6 flex-1 shadow-sm">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className={`transition-all duration-300 ease-in-out ${idx === 0 ? 'pb-6 border-b border-gray-300' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                    />
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-snug italic text-sm">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Top Row: Name & Tools */}
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="https://buu.fun/app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group md:col-span-2 bg-indigo-500 text-white rounded-3xl p-8 flex flex-col justify-center cursor-pointer hover:bg-indigo-600 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-5xl font-bold">Launch Buu AI - Game Maker</h1>
                  <ArrowRightIcon />
                </div>
                <p className="mt-2 text-indigo-200">Interact with the platform to generate 3D assets with agents via chat.</p>
              </a>
              <div className="bg-gray-200 rounded-3xl p-8 flex flex-col justify-center shadow-sm">
                <h3 className="font-bold text-lg mb-2">GEMINI 3 PRO</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Gemini 3 Pro powers Buu AI - Game Maker: low-latency multimodal AI turns natural language into instant 3D games, procedural assets, rigged characters, Mixamo animations, colliders, scripting, and shareable prototypes
                </p>
              </div>
            </div>

            {/* Middle Row: App Showcases */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative bg-gray-900 rounded-3xl p-8 h-80 flex flex-col justify-start items-start overflow-hidden group shadow-lg">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: "url('https://qodex.ai/assets/blog-images/5-ways-to-use-cursor-ai-for-free-cover.png')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="relative z-10 flex items-center gap-3">
                    <LiveDotIcon />
                    <h3 className="text-3xl font-bold text-white tracking-wide">LIVE SUPPORT</h3>
                </div>
              </div>
              
              <a 
                href="https://buu.fun/app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative bg-gray-900 rounded-3xl p-8 h-80 flex flex-col justify-start items-start overflow-hidden cursor-pointer shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div 
                    className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: "url('https://i.imgur.com/WeJWmBp.png')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity"></div>
                </div>

                {/* Arrow revealed on hover */}
                <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRightIcon className="w-12 h-12 text-white" />
                </div>
                
                {/* Custom Tooltip Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-black/80 text-white text-sm py-3 px-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 text-center font-medium">
                    Interact with Gemini 3 Pro to generate 3d assets with Trellis 2 from Buu AI web client.
                </div>

                <div className="relative z-10 flex items-center gap-3">
                    <LiveDotIcon colorClass="bg-green-400" shadowColor="rgba(52,211,153,0.9)" />
                    <h3 className="text-3xl font-bold text-white tracking-wide">LIVE</h3>
                </div>
              </a>
            </div>

            {/* Bottom Row: Project Description */}
            <a 
              href="https://github.com/friends4payments/dory-x402-gemini/commit/af5246b4bdec322a0bc942636bc76722726ae485"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 cursor-pointer transform hover:-translate-y-1"
            >
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold text-gray-900">Google Cloud Deployment Script:</h3>
                    <ArrowRightIcon />
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Deploying a Mastra AI agent on Google Cloud can involve moderate complexity, particularly for TypeScript-based setups requiring custom handling of ephemeral storage, Node.js runtime configuration, and integrations like Vertex AI for Gemini models. Challenges include adapting Mastra's local file dependencies (e.g., LibSQLStore) for serverless environments like Cloud Run and ensuring seamless API routing across providers. However, we crafted a highly effective prompt in Google AI Studio that streamlined the process: it generated optimized deployment scripts, automated containerization, and integrated observability, reducing setup time from hours to minutes while ensuring scalable, production-ready endpoints.
                </p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
