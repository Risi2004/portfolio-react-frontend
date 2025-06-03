import React from 'react';
import { FolderOpen, ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Udemy Clone (Frontend Only)",
      description: "Udemy Clone using HTML and CSS and considering the responsiveness",
      liveLink: "https://risi2004.github.io/udemy-clone/",
      githubLink: "https://github.com/Risi2004/udemy-clone",
      image: "/images/udemy.png",
      skills: ["HTML", "CSS", "Responsive Design"]
    },
    {
      title: "Weather App using API",
      description: "Weather App using React.js and integrated it with the OpenWeatherMap API to fetch real-time weather data.",
      liveLink: "https://weather-app-react-beta-eight.vercel.app/",
      githubLink: "https://github.com/Risi2004/weather_app-react",
      image: "/images/weatherapi.png",
      skills: ["React.js", "API Integration", "JavaScript"]
    },
    {
      title: "Bulk Email Sender",
      description: "Send emails via Nodemailer backend and React frontend.",
      liveLink: "https://bulkmail-backend-csut.vercel.app/",
      githubLink: "https://github.com/Risi2004/bulkmail-frontend",
      image: "/images/bulkmail.png",
      skills: ["React.js", "Node.js", "Nodemailer", "Express.js"]
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-visible">
      {/* Background Animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-bounce delay-2000"></div>
        <div className="absolute top-20 left-1/4 text-yellow-400/10 text-5xl font-mono animate-float">{'</>'}</div>
        <div className="absolute bottom-20 right-1/4 text-purple-400/10 text-4xl font-mono animate-float-delayed">{'{}'}</div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 animate-fade-in-up">
        {/* Title with padding and margin fix */}
        <div className="text-center mb-16 px-6 overflow-visible">
          <h2
            className="pb-2 text-4xl md:text-5xl font-extrabold mb-4 px-4 tracking-wide bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent"
            style={{ marginLeft: '0.25rem', marginRight: '0.25rem' }}
          >
            My Projects
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 shadow-xl group hover:shadow-yellow-300/10 transition duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="rounded-xl mb-6 object-cover w-full h-48"
                />
              )}

              {/* Title Row */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                  <FolderOpen className="text-white" size={24} />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-yellow-300 group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Skills Used */}
              {project.skills && (
                <div className="mb-6">
                  <h4 className="text-yellow-400 font-semibold mb-2">Skills Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm text-yellow-300 bg-yellow-900/30 border border-yellow-700 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-md hover:shadow-yellow-400/30 transition-all hover:scale-105"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-600 rounded-full text-gray-300 font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all hover:scale-105"
                >
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

export default Projects;
