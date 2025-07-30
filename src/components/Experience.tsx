import React from 'react';
import { Calendar, MapPin, Briefcase} from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Student ',
      company: 'Childrens Academy',
      location: 'Gola Gokarannath, Uttar Pradesh',
      period: '2007 - 2021',
      type: '*',
      achievements: [
        'Won school-level chess tournament showcasing strategic thinking and focus',
  'Scored 90% in 10th grade and 87% in 12th grade demonstrating academic consistency',
  'Won first place in school-level writing competition for creative writing skills',
  'Assisted peers in understanding technical concepts, fostering collaborative learning'
      ],
      tech: []
    },
    {
      id: 2,
      title: 'Student',
      company: 'ABES ENGINEERING COLLEGE',
      location: 'Ghaziabad, Uttar Pradesh',
      period: '2022 - 2026',
      type: '*',
      achievements: [
        'Won college-level chess tournament showcasing strategic thinking and competitiveness',
  'Achieved 7.5+ CGPA reflecting consistent academic performance',
  'Learned and built projects using technologies like MERN stack, Next.js, Tailwind CSS',
  'Practiced Data Structures and Algorithms to strengthen problem-solving skills'
      ],
      tech: []
    }
  ];

  // const certifications = [
  //   {
  //     name: 'AWS Certified Solutions Architect',
  //     issuer: 'Amazon Web Services',
  //     year: '2023',
  //     icon: Award
  //   },
  //   {
  //     name: 'MongoDB Certified Developer',
  //     issuer: 'MongoDB University',
  //     year: '2022',
  //     icon: Award
  //   },
  //   {
  //     name: 'React Professional Certificate',
  //     issuer: 'Meta',
  //     year: '2021',
  //     icon: Award
  //   }
  // ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SYSTEM <span className="text-cyan-400">HISTORY</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-green-400"></div>

            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 z-10 animate-pulse"></div>

                {/* Content */}
                <div className="ml-16 w-full">
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end mt-2 md:mt-0">
                        <div className="flex items-center space-x-1 text-cyan-400 text-sm font-mono">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="text-xs text-gray-500 mt-1">{exp.type}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-xs font-mono hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          {/* <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Security Clearances</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-400/50 transition-all duration-300 text-center group hover:scale-105"
                >
                  <cert.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
                  <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                  <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-purple-400 text-sm font-mono">{cert.year}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;