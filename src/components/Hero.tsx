import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Cpu, Code, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['MERN Developer', 'DSA Enthusiast', 'Problem Solver', 'Code Architect'];
  const currentText = texts[currentIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText !== currentText) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        } else {
          setDisplayText(displayText.slice(0, -1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentText, isDeleting, texts.length]); // ✅ Added texts.length

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToProjects = () => {
    const aboutSection = document.getElementById('projects');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-icons">
          <Cpu className="absolute top-20 left-20 w-8 h-8 text-cyan-400/20 animate-pulse" />
          <Code className="absolute top-40 right-32 w-6 h-6 text-green-400/20 animate-bounce" />
          <Database className="absolute bottom-32 left-16 w-10 h-10 text-purple-400/20 animate-spin-slow" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                WEB
              </span>
              <br />
              <span className="text-white">DEVELOPER</span>
            </h1>

            <div className="h-16 flex items-center justify-center">
              <span className="text-xl md:text-2xl font-mono text-gray-300">
                {displayText}
                <span className="animate-pulse text-cyan-400">|</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies.
            Specializing in full-stack development and algorithmic problem solving.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={scrollToProjects}
              className="cyber-button bg-gradient-to-r from-cyan-400 to-green-400 text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
            >
              VIEW PROJECTS
            </button>
            <button
              type="button"
              className="cyber-button-outline border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
              title="View CV"
              aria-label="View CV"
            >
              VIEW CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { Icon: Github, href: "https://github.com/forcedcoding", label: "GitHub", color: "hover:text-gray-300" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/shashwat-a-gupta-719588257/", label: "LinkedIn", color: "hover:text-blue-400" },
              { Icon: Mail, href: "#", label: "Email", color: "hover:text-red-400" }
            ].map(({ Icon, href, label, color }, index) => (
              <a
                key={index}
                href={href}
                className={`text-gray-400 ${color} transition-all duration-300 hover:scale-125 p-2`}
                title={label}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
          <button
            type="button"
            onClick={scrollToNext}
            className="animate-bounce text-cyan-400 hover:text-white transition-colors"
            title="Scroll down"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
