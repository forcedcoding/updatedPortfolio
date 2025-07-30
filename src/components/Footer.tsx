import React from 'react';
import { Heart, Terminal, Code, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 border-t border-cyan-400/20 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Logo and Tagline */}
          <div className="flex items-center justify-center space-x-2">
            <Terminal className="w-8 h-8 text-cyan-400 animate-pulse" />
            <span className="text-2xl font-mono text-white">DEV.PROTOCOL</span>
          </div>
          
          <p className="text-gray-400 max-w-md mx-auto">
            Crafting digital experiences with precision and passion. 
            Building the future, one line of code at a time.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex justify-center space-x-6">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Code className="w-5 h-5" />
              <span className="text-sm font-mono">MERN</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-mono">DSA</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Terminal className="w-5 h-5" />
              <span className="text-sm font-mono">FULL-STACK</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-500 text-sm">
            <span>© {currentYear} Cyber Developer Portfolio.</span>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and lots of caffeine</span>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-600">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-mono">System operational • All networks active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;