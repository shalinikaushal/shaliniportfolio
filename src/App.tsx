import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Calendar, Linkedin } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? 'bg-[#1D1D1F] text-white' : 'bg-[#F5F5F7] text-[#1D1D1F]'
      }`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-opacity-80 transition-colors duration-500">
        <nav
          className={`max-w-7xl mx-auto px-6 py-6 flex items-center justify-between ${
            isDark ? 'bg-[#1D1D1F]/80' : 'bg-[#F5F5F7]/80'
          }`}
        >
          <div className="flex items-center space-x-12">
            <span className="text-xl font-bold tracking-tight">SK</span>
            <div className="hidden md:flex space-x-8 text-sm">
              <a
                href="#work"
                className="hover:opacity-60 transition-opacity duration-300"
              >
                Work highlights
              </a>
              <a
                href="#stories"
                className="hover:opacity-60 transition-opacity duration-300"
              >
                Design stories
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-200/20 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <a
              href="#connect"
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                isDark
                  ? 'bg-white text-[#1D1D1F] hover:bg-gray-200'
                  : 'bg-[#1D1D1F] text-white hover:bg-[#2D2D2F]'
              }`}
            >
              Connect
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-7xl md:text-9xl font-extrabold tracking-tight mb-6 animate-fade-in"
            style={{
              animation: 'fadeInUp 1.2s ease-out forwards',
              opacity: 0,
            }}
          >
            Shalini Kaushal
          </h1>
          <p
            className="text-2xl md:text-4xl font-normal tracking-tight opacity-70 animate-fade-in"
            style={{
              animation: 'fadeInUp 1.2s ease-out 0.3s forwards',
              opacity: 0,
            }}
          >
            UX Designer at Piramal Finance
          </p>
          <p
            className="text-xl md:text-2xl font-light tracking-tight opacity-60 mt-4 animate-fade-in"
            style={{
              animation: 'fadeInUp 1.2s ease-out 0.6s forwards',
              opacity: 0,
            }}
          >
            Reshaping fintech for billions.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-reveal
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible['about']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-5xl font-bold tracking-tight leading-relaxed">
            7+ years experience, dedicated to user-centricity and efficiency.
          </p>
          <p className="text-xl md:text-2xl opacity-60 mt-8">
            Based in Bangalore, India.
          </p>
        </div>
      </section>

      {/* Portfolio Bento Grid */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-16 text-center">
            Work highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - ECG Project */}
            <div
              data-reveal
              id="card1"
              className={`group relative overflow-hidden rounded-3xl transition-all duration-1000 ${
                isVisible['card1']
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } ${
                isDark ? 'bg-[#2D2D2F]' : 'bg-white'
              } p-8 md:p-12 shadow-2xl hover:shadow-3xl cursor-pointer`}
              style={{ minHeight: '500px' }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="mb-8">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                        isDark ? 'bg-[#1D1D1F]' : 'bg-[#F5F5F7]'
                      }`}
                    >
                      <svg
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 13h2l2-7 4 14 4-14 2 7h4" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Diagnose ECG from any place
                  </h3>
                  <p className="text-lg opacity-70 leading-relaxed">
                    Revolutionizing cardiac care with instant ECG analysis
                    accessible to healthcare providers anywhere, anytime.
                  </p>
                </div>
                <div className="mt-8">
                  <span className="inline-block text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity">
                    View case study →
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 - Gandhi Fellows */}
            <div
              data-reveal
              id="card2"
              className={`group relative overflow-hidden rounded-3xl transition-all duration-1000 ${
                isVisible['card2']
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } ${
                isDark ? 'bg-[#2D2D2F]' : 'bg-white'
              } p-8 md:p-12 shadow-2xl hover:shadow-3xl cursor-pointer`}
              style={{
                minHeight: '500px',
                animationDelay: '0.2s',
              }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="mb-8">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                        isDark ? 'bg-[#1D1D1F]' : 'bg-[#F5F5F7]'
                      }`}
                    >
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Safety System for Gandhi Fellows
                  </h3>
                  <p className="text-lg opacity-70 leading-relaxed">
                    Designing a comprehensive safety platform to protect field
                    workers in remote and challenging environments.
                  </p>
                </div>
                <div className="mt-8">
                  <span className="inline-block text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity">
                    View case study →
                  </span>
                </div>
              </div>
            </div>

            {/* Social Feed Card */}
            <div
              data-reveal
              id="card3"
              className={`md:col-span-2 relative overflow-hidden rounded-3xl transition-all duration-1000 ${
                isVisible['card3']
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } ${
                isDark ? 'bg-[#2D2D2F]' : 'bg-white'
              } p-8 md:p-12 shadow-2xl`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  Random Tweets @Shalinikaushal_
                </h3>
                <p className="text-lg opacity-70">
                  Thoughts on design, UX philosophy, and the future of fintech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Stories Section */}
      <section id="stories" className="py-20 px-6">
        <div
          data-reveal
          id="stories-content"
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible['stories-content']
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Mentoring the next generation
          </h2>
          <p className="text-xl md:text-2xl opacity-70 leading-relaxed">
            Active mentor on ADPList, helping designers navigate their careers
            and build user-centered products that matter.
          </p>
        </div>
      </section>

      {/* Footer/CTA */}
      <section
        id="connect"
        className={`py-32 px-6 mt-20 ${
          isDark ? 'bg-[#2D2D2F]' : 'bg-white'
        } transition-colors duration-500`}
      >
        <div
          data-reveal
          id="footer"
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible['footer']
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Let's connect
          </h2>
          <p className="text-xl md:text-2xl opacity-70 mb-12">
            Open to new opportunities and collaborations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://linkedin.com/in/shalinikaushal"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 ${
                isDark
                  ? 'bg-white text-[#1D1D1F] hover:bg-gray-200'
                  : 'bg-[#1D1D1F] text-white hover:bg-[#2D2D2F]'
              }`}
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://calendly.com/shalinikaushal"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 border-2 ${
                isDark
                  ? 'border-white hover:bg-white hover:text-[#1D1D1F]'
                  : 'border-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Book a call</span>
            </a>
          </div>

          <a
            href="mailto:kaushalshalini0@gmail.com"
            className="inline-flex items-center space-x-2 text-lg opacity-70 hover:opacity-100 transition-opacity"
          >
            <Mail className="w-5 h-5" />
            <span>kaushalshalini0@gmail.com</span>
          </a>

          <div className="mt-16 pt-8 border-t border-current opacity-20">
            <p className="text-sm opacity-50">
              © 2024 Shalini Kaushal. Designed with precision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
