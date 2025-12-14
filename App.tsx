import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Lock, Code, Globe, Database, Search, ChevronDown, User, LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
  category: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [, setActiveSection] = useState('hero');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  const skills: Skill[] = [
    { name: 'Python', icon: Code, category: 'Programming' },
    { name: 'Web Security', icon: Shield, category: 'Security' },
    { name: 'SQL Injection', icon: Database, category: 'Security' },
    { name: 'XSS', icon: Globe, category: 'Security' },
    { name: 'Git & Github', icon: Terminal, category: 'Tools' },
    { name: 'Network Basics', icon: Globe, category: 'Networking' },
    { name: 'Django', icon: Code, category: 'Framework' },
    { name: 'Selenium', icon: Search, category: 'Testing' },
    { name: 'Linux', icon: Terminal, category: 'OS' },
    { name: 'Java Fundamentals', icon: Code, category: 'Programming' },
    { name: 'iSTQB', icon: Shield, category: 'Certification' },
    { name: 'Jira', icon: Terminal, category: 'Tools' }
  ];

  const projects: Project[] = [
    {
      title: 'Python Encryption Scripts',
      description: 'Advanced encryption and decryption tools implementing various cryptographic algorithms for secure data transmission',
      tags: ['Python', 'Cryptography', 'Security'],
      icon: Lock
    },
    {
      title: 'Vulnerability Scanner',
      description: 'Automated web application security scanner detecting common vulnerabilities including XSS and SQL injection',
      tags: ['Python', 'Web Security', 'Automation'],
      icon: Search
    },
    {
      title: 'Windows Analysis Toolkit',
      description: 'Comprehensive toolkit for Windows system analysis, forensics, and security auditing',
      tags: ['Windows', 'Security', 'Analysis'],
      icon: Terminal
    },
    {
      title: 'Graphic Design Portfolio',
      description: 'Collection of professional graphic design work showcasing creative and technical skills',
      tags: ['Design', 'Creative', 'Visual'],
      icon: Globe
    }
  ];

  return (
    <div className="relative bg-black text-white overflow-x-hidden min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 50%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-red-900/10 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }} />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full animate-float pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          <div 
            className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl transition-all duration-300"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(0, 1 - scrollY / 500)
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-red-600/10 rounded-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              {/* Photo Section */}
              <div className="flex-shrink-0 animate-fade-in">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-red-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <div className="relative w-64 h-64 bg-gradient-to-br from-purple-900/50 to-red-900/50 rounded-3xl overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <User className="w-32 h-32 text-purple-300/30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-sm text-purple-300 font-medium">Upload Photo Here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-4 mb-6 animate-fade-in justify-center md:justify-start">
                  <Shield className="w-12 h-12 text-purple-400 animate-pulse" />
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
                </div>
                
                <h1 className={`text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-red-400 bg-clip-text text-transparent animate-fade-in-up ${glitchActive ? 'animate-glitch' : ''}`}>
                  Mohamed Reda
                </h1>
                
                <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500 animate-text-shimmer" style={{ backgroundSize: '200% auto', animationDelay: '0.2s' }}>
                  Aspiring Bug Bounty Hunter
                </p>
                
                <p className="text-xl text-gray-400 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  Software Tester | Engineering Student
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <a href="tel:+201015230604" className="group backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105">
                    <span className="text-gray-300 group-hover:text-purple-300">+201015230604</span>
                  </a>
                  <a href="mailto:mohamedreda.dx@gmail.com" className="group backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105">
                    <span className="text-gray-300 group-hover:text-purple-300">mohamedreda.dx@gmail.com</span>
                  </a>
                  <a href="https://linktr.ee/mhr_exe" target="_blank" rel="noopener noreferrer" className="group backdrop-blur-md bg-gradient-to-r from-purple-600/20 to-red-600/20 hover:from-purple-600/30 hover:to-red-600/30 border border-purple-500/30 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
                    <span className="text-purple-300 group-hover:text-purple-200 font-medium">Linktree</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-purple-500/30 transition-all duration-500 animate-slide-in-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-red-600 rounded-xl flex items-center justify-center animate-spin-slow">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
                Mission Statement
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 animate-fade-in">
              Dedicated to uncovering vulnerabilities and strengthening digital defenses. As an engineering student specializing in software testing and security, I combine technical expertise with a methodical approach to identify and document security flaws.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              My focus lies in web application security, penetration testing, and automated security analysis. I leverage cutting-edge tools and methodologies to ensure robust protection against emerging threats.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent animate-fade-in">
            Technical Arsenal
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-110 cursor-pointer animate-float-in"
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-red-600/0 group-hover:from-purple-600/10 group-hover:to-red-600/10 rounded-2xl transition-all duration-500" />
                
                <div className="relative flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-red-600/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <skill.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-1">{skill.name}</h3>
                    <span className="text-xs text-purple-400/70 group-hover:text-purple-300 transition-colors">{skill.category}</span>
                  </div>
                </div>

                {/* Animated corner accents */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-purple-500/30 group-hover:border-purple-500 transition-colors" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-purple-500/30 group-hover:border-purple-500 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent animate-fade-in">
            Security Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 cursor-pointer animate-slide-in-up"
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-red-600/0 group-hover:from-purple-600/5 group-hover:to-red-600/5 rounded-3xl transition-all duration-500" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-purple-600/20 to-red-600/20 rounded-2xl group-hover:from-purple-600/30 group-hover:to-red-600/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <project.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-200 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-purple-300 backdrop-blur-sm group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-red-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 hover:border-purple-500/30 transition-all duration-500 animate-fade-in">
            <div className="relative inline-block mb-8">
              <Terminal className="w-16 h-16 text-purple-400 mx-auto animate-pulse" />
              <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-xl animate-ping" style={{ animationDuration: '3s' }} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
              Initiate Contact
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              Available for security assessments, bug bounty collaborations, and penetration testing engagements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:mohamedreda.dx@gmail.com"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-red-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Send Encrypted Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a 
                href="https://linktr.ee/mhr_exe"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 backdrop-blur-md bg-white/5 border border-white/20 rounded-xl font-semibold hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
              >
                Access Network
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 animate-fade-in">
            © 2024 Mohamed Reda. All systems secured.
          </p>
        </div>
      </footer>
    </div>
  );
}