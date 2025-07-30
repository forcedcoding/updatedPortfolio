import React, { useState } from 'react';
import { Github, ExternalLink, Code, Database, Globe, Zap } from 'lucide-react';
import img1 from '../images/forcedcoding.png';
import img2 from '../images/moodify.png';
import img3 from '../images/chatroom.png';
import img4 from '../images/musify.png';
import img5 from '../images/tictactoe.png';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Coding Platform',
      description: 'A MERN-based coding platform where students solve problems, submit code, and receive instant feedback with a built-in code editor.',
      image: img1,
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Moodify',
      description: 'Moodify is a MERN-based web app that detects user facial expressions in real-time and recommends movies based on their mood.',
      image: img2,
      tech: ['React', 'JavaScript', 'face-api.js', 'Canvas API'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'ChatRoom',
      description: 'Real-time chat application with user authentication, private messaging, and group chats using WebSocket.',
      image: img3,
      tech: ['Node.js', 'Express', 'Socket.io', 'React', 'MongoDB'],
      category: 'backend',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Musify',
      description: 'Musify is a MERN-based music web app that lets users browse, play, and manage songs with a sleek, responsive audio player interface.',
      image: img4,
      tech: ['MongoDB', 'React', 'Node.js', 'Express.js'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Tic-Tac-Toe',
      description: 'A Simple Tic-Tac-Toe game built with React',
      image: img5,
      tech: ['React'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Globe },
    { key: 'fullstack', label: 'Full Stack', icon: Code },
    { key: 'frontend', label: 'Frontend', icon: Globe },
    { key: 'backend', label: 'Backend', icon: Database },
    { key: 'algorithm', label: 'Algorithms', icon: Zap }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PROJECT <span className="text-cyan-400">ARCHIVES</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                filter === key
                  ? 'bg-cyan-400 text-black border-transparent shadow-lg'
                  : 'text-cyan-400 border-cyan-400 bg-transparent hover:bg-gray-800/50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-semibold">{label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10 ${
                project.featured ? 'ring-2 ring-cyan-400/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-400 to-green-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-xs font-mono hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <Github className="w-5 h-5 group-hover:animate-spin" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <ExternalLink className="w-5 h-5 group-hover:animate-pulse" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more projects?</p>
          <button 
            onClick={() => window.open('https://github.com/forcedcoding', '_blank')} className="bg-gradient-to-r from-cyan-400 to-green-400 text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25">
            VIEW GITHUB PROFILE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;