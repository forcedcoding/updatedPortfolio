// import React, { useState } from 'react';
// import { Code, Database, Globe, Cpu, Terminal, Zap } from 'lucide-react';

// const Skills: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState('frontend');

//   const skillCategories = {
//     frontend: {
//       title: 'Frontend Arsenal',
//       icon: Globe,
//       color: 'cyan',
//       skills: [
//         { name: 'React.js', level: 95 },
//         { name: 'TypeScript', level: 90 },
//         { name: 'Next.js', level: 85 },
//         { name: 'Tailwind CSS', level: 92 },
//         { name: 'JavaScript', level: 95 },
//         { name: 'HTML/CSS', level: 98 }
//       ]
//     },
//     backend: {
//       title: 'Backend Systems',
//       icon: Database,
//       color: 'green',
//       skills: [
//         { name: 'Node.js', level: 92 },
//         { name: 'Express.js', level: 88 },
//         { name: 'MongoDB', level: 85 },
//         { name: 'PostgreSQL', level: 80 },
//         { name: 'REST APIs', level: 90 },
//         { name: 'GraphQL', level: 75 }
//       ]
//     },
//     algorithms: {
//       title: 'Algorithm Matrix',
//       icon: Cpu,
//       color: 'purple',
//       skills: [
//         { name: 'Dynamic Programming', level: 88 },
//         { name: 'Graph Algorithms', level: 85 },
//         { name: 'Tree Structures', level: 90 },
//         { name: 'Sorting & Searching', level: 95 },
//         { name: 'Hash Tables', level: 92 },
//         { name: 'Greedy Algorithms', level: 85 }
//       ]
//     },
//     tools: {
//       title: 'Development Tools',
//       icon: Terminal,
//       color: 'orange',
//       skills: [
//         { name: 'Git/GitHub', level: 95 },
//         { name: 'Docker', level: 80 },
//         { name: 'AWS', level: 75 },
//         { name: 'Jest/Testing', level: 85 },
//         { name: 'Webpack/Vite', level: 88 },
//         { name: 'Linux/Terminal', level: 90 }
//       ]
//     }
//   };

//   const getColorClasses = (color: string) => {
//     const colors = {
//       cyan: { bg: 'bg-cyan-400', text: 'text-cyan-400', border: 'border-cyan-400' },
//       green: { bg: 'bg-green-400', text: 'text-green-400', border: 'border-green-400' },
//       purple: { bg: 'bg-purple-400', text: 'text-purple-400', border: 'border-purple-400' },
//       orange: { bg: 'bg-orange-400', text: 'text-orange-400', border: 'border-orange-400' }
//     };
//     return colors[color as keyof typeof colors];
//   };

//   return (
//     <section id="skills" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             SKILL <span className="text-cyan-400">MATRIX</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
//         </div>

//         {/* Category Selector */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {Object.entries(skillCategories).map(([key, category]) => {
//             const colors = getColorClasses(category.color);
//             const Icon = category.icon;
//             return (
//               <button
//                 key={key}
//                 onClick={() => setActiveCategory(key)}
//                 className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
//                   activeCategory === key
//                     ? `${colors.bg} text-black border-transparent shadow-lg`
//                     : `${colors.text} ${colors.border} bg-transparent hover:bg-gray-800/50`
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span className="font-semibold">{category.title}</span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Skills Display */}
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
//             <div className="grid md:grid-cols-2 gap-8">
//               {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => {
//                 const colors = getColorClasses(skillCategories[activeCategory as keyof typeof skillCategories].color);
//                 return (
//                   <div
//                     key={index}
//                     className="skill-item opacity-0 animate-slide-in"
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-white font-semibold">{skill.name}</span>
//                       <span className={`${colors.text} font-mono text-sm`}>{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
//                       <div
//                         className={`h-full ${colors.bg} skill-progress-bar relative`}
//                         style={{ width: `${skill.level}%` }}
//                       >
//                         <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Achievement Badges */}
//         <div className="mt-16 text-center">
//           <h3 className="text-2xl font-bold text-white mb-8">Achievement Unlocked</h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             {[
//               { name: 'Full Stack Master', icon: Code, color: 'text-cyan-400' },
//               { name: 'Algorithm Expert', icon: Cpu, color: 'text-green-400' },
//               { name: 'Performance Optimizer', icon: Zap, color: 'text-purple-400' },
//               { name: 'Problem Solver', icon: Terminal, color: 'text-orange-400' }
//             ].map((badge, index) => (
//               <div
//                 key={index}
//                 className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full hover:border-cyan-400/50 transition-all duration-300 group"
//               >
//                 <badge.icon className={`w-5 h-5 ${badge.color} group-hover:animate-spin`} />
//                 <span className="text-gray-300 text-sm">{badge.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React, { useState } from 'react';
import { Code, Database, Globe, Cpu, Terminal, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Arsenal',
      icon: Globe,
      color: 'cyan',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 }
      ]
    },
    backend: {
      title: 'Backend Systems',
      icon: Database,
      color: 'green',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    algorithms: {
      title: 'Algorithm Matrix',
      icon: Cpu,
      color: 'purple',
      skills: [
        { name: 'Dynamic Programming', level: 88 },
        { name: 'Graph Algorithms', level: 85 },
        { name: 'Tree Structures', level: 90 },
        { name: 'Sorting & Searching', level: 95 },
        { name: 'Hash Tables', level: 92 },
        { name: 'Greedy Algorithms', level: 85 }
      ]
    },
    tools: {
      title: 'Development Tools',
      icon: Terminal,
      color: 'orange',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Jest/Testing', level: 85 },
        { name: 'Webpack/Vite', level: 88 },
        { name: 'Linux/Terminal', level: 90 }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: { bg: 'bg-cyan-400', text: 'text-cyan-400', border: 'border-cyan-400' },
      green: { bg: 'bg-green-400', text: 'text-green-400', border: 'border-green-400' },
      purple: { bg: 'bg-purple-400', text: 'text-purple-400', border: 'border-purple-400' },
      orange: { bg: 'bg-orange-400', text: 'text-orange-400', border: 'border-orange-400' }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SKILL <span className="text-cyan-400">MATRIX</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                  activeCategory === key
                    ? `${colors.bg} text-black border-transparent shadow-lg`
                    : `${colors.text} ${colors.border} bg-transparent hover:bg-gray-800/50`
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => {
                const colors = getColorClasses(skillCategories[activeCategory as keyof typeof skillCategories].color);
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-white">
                      <span>{skill.name}</span>
                      <span className={`${colors.text}`}>{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-700 rounded-full">
                      <div
                        className={`${colors.bg} h-full rounded-full transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Achievement Unlocked</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Full Stack Master', icon: Code, color: 'text-cyan-400' },
              { name: 'Algorithm Expert', icon: Cpu, color: 'text-green-400' },
              { name: 'Performance Optimizer', icon: Zap, color: 'text-purple-400' },
              { name: 'Problem Solver', icon: Terminal, color: 'text-orange-400' }
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <badge.icon className={`w-5 h-5 ${badge.color} group-hover:animate-spin`} />
                <span className="text-gray-300 text-sm">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
