import React from 'react';
import { Terminal, Code, Database } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center space-x-4 mb-8">
          <div className="animate-bounce delay-100">
            <Terminal className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="animate-bounce delay-200">
            <Code className="w-12 h-12 text-green-400" />
          </div>
          <div className="animate-bounce delay-300">
            <Database className="w-12 h-12 text-purple-400" />
          </div>
        </div>
        
        <div className="mb-4">
          <div className="loading-text text-2xl font-mono text-cyan-400">
            INITIALIZING_PORTFOLIO
          </div>
        </div>
        
        <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto">
          <div className="loading-bar h-full bg-gradient-to-r from-cyan-400 to-green-400 rounded-full"></div>
        </div>
        
        <div className="mt-4 text-gray-400 font-mono text-sm">
          Loading neural networks...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;