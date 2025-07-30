import React from 'react';
import { Target, Zap, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Cpu, label: 'Projects Completed', value: '10+', color: 'text-cyan-400' },
    { icon: Zap, label: 'DSA Problems Solved', value: '500+', color: 'text-green-400' },
    { icon: Target, label: 'Student', value: '4th Year', color: 'text-purple-400' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ABOUT <span className="text-cyan-400">PROTOCOL</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">System Overview</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A passionate MERN stack developer with expertise in building scalable web applications 
                and solving complex algorithmic challenges. My neural pathways are optimized for 
                clean code, efficient algorithms, and innovative solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Specializing in React.js, Node.js, MongoDB, and Express.js, I create robust 
                full-stack applications while maintaining a strong foundation in data structures 
                and algorithms for optimal performance.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Mission Parameters</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  'Develop high-performance web applications',
                  'Optimize algorithms for maximum efficiency',
                  'Implement scalable database architectures',
                  'Create intuitive user experiences'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/40 transition-all duration-300 group hover:scale-105"
              >
                <div className="text-center">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:animate-pulse`} />
                  <div className={`text-3xl font-bold ${stat.color} mb-2 counter`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 border border-cyan-400/20 rounded-full text-cyan-400 font-mono text-sm hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;