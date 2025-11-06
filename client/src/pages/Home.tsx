import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Download, Menu, X, ChevronDown, ArrowRight, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const portfolioProjects = [
    {
      id: 1,
      title: "Fraîche Skin - Product Bundle Campaign",
      category: "Product Photography & Marketing",
      image: "/portfolio/BundleFBAds.png",
      description: "Created stunning product photography and marketing graphics for Fraîche Skin's skincare bundle. Designed cohesive visual identity showcasing the complete restore collection."
    },
    {
      id: 2,
      title: "Fraîche Skin - Social Media Content",
      category: "Social Media Design",
      image: "/portfolio/tiktok1cleanser.png",
      description: "Developed engaging TikTok and social media content for Fraîche Skin's cleanser product line with natural ingredient emphasis."
    },
    {
      id: 3,
      title: "Hydrogen Water Bottle - Product Launch",
      category: "E-commerce Marketing",
      image: "/portfolio/17.png",
      description: "Designed comprehensive marketing materials for product launch, highlighting unique features and health benefits."
    },
    {
      id: 4,
      title: "Quietpaws - Pet Tech Campaign",
      category: "Product Marketing",
      image: "/portfolio/4.png",
      description: "Created eye-catching social media graphics highlighting key features for pet owners."
    },
    {
      id: 5,
      title: "Skincare Education - Before & After",
      category: "Educational Content",
      image: "/portfolio/50.png",
      description: "Designed compelling educational graphics about sunscreen importance and skin health."
    },
    {
      id: 6,
      title: "HydraPure - Product Accessories",
      category: "E-commerce Design",
      image: "/portfolio/addoncartridges.png",
      description: "Developed product marketing graphics showcasing accessories with professional layouts."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light tracking-wider">Leah Mae Santillan</h1>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm hover:text-blue-600 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-blue-600 transition-colors">Contact</button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-sm hover:text-blue-600">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-sm hover:text-blue-600">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-sm hover:text-blue-600">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-sm hover:text-blue-600">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Social Media Manager & Graphic Designer
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight">
              Creative Design
              <span className="block text-blue-600 font-normal mt-2">That Drives Results</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Crafting compelling visual content and managing social media presence for brands in real estate, food, and e-commerce industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base"
              >
                View Portfolio
                <ArrowRight size={20} />
              </Button>
              <a 
                href="/Leah_Santillan_Resume.pdf" 
                download 
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 px-8 py-6 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-light text-blue-600">3,942+</p>
                <p className="text-sm text-neutral-600">Hours Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-light text-blue-600">50+</p>
                <p className="text-sm text-neutral-600">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-light text-blue-600">3</p>
                <p className="text-sm text-neutral-600">Industries</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <img 
                src="/profile.png" 
                alt="Leah Mae Santillan" 
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-neutral-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-blue-600">About Me</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">Bringing Brands to Life</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Hi, I'm Leah Mae Santillan, a creative professional based in <span className="font-semibold text-blue-600">General Santos, Philippines</span>. With over 3,942 hours of professional experience, I've successfully managed social media accounts and created engaging visual content for diverse industries.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Before specializing in social media management and graphic design, I worked in customer support, sales, and administrative roles, which gave me valuable insights into client needs and business operations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900">My Expertise</h3>
              <div className="space-y-3">
                {[
                  "Creating customer-focused content and advertisements",
                  "Managing and scheduling social media content",
                  "Designing visual assets for brand promotion",
                  "Building brand presence and driving engagement",
                  "Collaborating with teams to strengthen overall branding"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-blue-600">What I Do</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Instagram className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Social Media Management</h3>
              <ul className="text-neutral-700 space-y-3">
                {[
                  "Content creation and curation",
                  "Social media scheduling and posting",
                  "Community engagement and management",
                  "Social media strategy development",
                  "Performance analytics and reporting",
                  "Influencer collaboration coordination"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="text-purple-600" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Graphic Design</h3>
              <ul className="text-neutral-700 space-y-3">
                {[
                  "Social media graphics and posts",
                  "Brand identity design",
                  "Marketing materials and collateral",
                  "Product photography editing",
                  "Banner and thumbnail design",
                  "Custom visual content creation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-blue-600">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">Skills & Tools</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Design Tools",
                description: "Canva, Adobe Creative Suite, Photoshop, Figma, product photography editing"
              },
              {
                title: "Social Platforms",
                description: "Facebook, Instagram, TikTok, LinkedIn, Twitter, Pinterest"
              },
              {
                title: "Content Creation",
                description: "Copywriting, visual storytelling, video editing, carousel design"
              },
              {
                title: "Brand Strategy",
                description: "Brand positioning, audience analysis, competitor research"
              },
              {
                title: "Analytics",
                description: "Performance tracking, engagement metrics, ROI analysis"
              },
              {
                title: "Communication",
                description: "Client collaboration, project management, stakeholder communication"
              }
            ].map((skill, idx) => (
              <Card key={idx} className="p-6 bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 hover:shadow-lg transition-all">
                <h4 className="font-semibold text-neutral-900 mb-3 text-lg">{skill.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-gradient-to-br from-neutral-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-blue-600">My Work</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">Featured Projects</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              A curated selection of successful campaigns and creative work across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, idx) => (
              <div 
                key={project.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-neutral-100 shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-xs uppercase tracking-wider mb-2 text-blue-300">{project.category}</p>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-xs uppercase tracking-widest text-blue-600">{project.category}</span>
                  <h3 className="text-lg font-medium mt-1 text-neutral-900">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-sm uppercase tracking-widest text-blue-200">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Ready to elevate your brand's social media presence and create stunning visual content? Let's work together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:lsantillan@gmail.com" 
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              lsantillan@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-light text-white mb-2">Leah Mae Santillan</p>
          <p className="text-sm mb-4">Social Media Manager & Graphic Designer</p>
          <p className="text-sm">General Santos, Philippines</p>
          <p className="text-xs mt-6">&copy; 2025 All rights reserved. Designed with passion.</p>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}