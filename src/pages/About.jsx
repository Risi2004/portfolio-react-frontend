import React from 'react';
import { Code2, Trophy, Users, Clock } from 'lucide-react';

function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-bounce delay-2000"></div>

        {/* Floating Symbols */}
        <div className="absolute top-20 left-24 text-yellow-400/10 text-5xl font-mono animate-float">{'</>'}</div>
        <div className="absolute bottom-20 right-24 text-purple-400/10 text-4xl font-mono animate-float-delayed">{'{}'}</div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10 animate-fade-in-up">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Biography Section */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-12 text-gray-200 text-lg leading-relaxed mb-16 max-w-full mx-auto shadow-lg border border-yellow-500/30">
          <p className="mb-6">
            👋 <strong className="text-yellow-400">Hi, I'm Jegatheesan Risikesan</strong>, a passionate Full Stack Developer from Sri Lanka.  
            My journey in tech started with a deep curiosity for computers and coding, quickly evolving into a love for building <span className="text-orange-400 font-semibold">innovative web applications</span> that make a difference.
          </p>

          <p className="mb-6 italic border-l-4 border-yellow-400 pl-4 text-yellow-300">
            “My web development journey began at <strong>Error Makes Clever academy</strong>, where I gained foundational skills in programming and problem-solving.”
          </p>

          <p className="mb-6">
            Over the years, I've developed expertise in the <span className="font-bold text-yellow-400">MERN stack</span> and <span className="font-bold text-yellow-400">Java Spring Boot</span>, focusing on writing <span className="text-orange-400 font-semibold">clean, efficient code</span> and crafting user-friendly interfaces.
            I’m committed to continuous learning and enjoy contributing to open-source projects.
          </p>

          <p>
            Beyond coding, I thrive on <span className="text-yellow-300 font-semibold">collaborating with professionals</span>, participating in hackathons, and exploring <span className="text-orange-400 italic">UI/UX design</span> to create beautiful, intuitive digital experiences.
            Lifelong learning drives me, and I’m excited to bring my skills and energy to impactful projects.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Technical Expertise */}
          <div className="space-y-10">
            <ContentCard
              icon={<Code2 className="text-white" size={24} />}
              title="Technical Expertise"
              text="With expertise in frontend and backend, I build complete solutions using cutting-edge stacks and best practices."
              pills={[
                "React.js", "Node.js", "Express.js", "MongoDB",
                "Java", "Spring Boot", "JavaScript"
              ]}
            />
          </div>

          {/* Right - Stats */}
          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
              <StatCard icon={<Trophy size={28} />} number="8+" label="Projects" />
              <StatCard icon={<Users size={28} />} number="2+" label="Clients" />
              <StatCard icon={<Clock size={28} />} number="4" label="Months" />
              <StatCard icon={<Code2 size={28} />} number="6+" label="Technologies" />
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="flex justify-center mb-20">
          <div className="bg-gray-800/60 p-10 rounded-2xl shadow-xl border border-gray-700/40 w-full max-w-4xl">
            <h3 className="text-white text-3xl font-bold mb-8 text-center">Skills Overview</h3>
            <div className="space-y-10">
              <SkillBar skill="MERN Stack" percentage={90} />
              <SkillBar skill="Java & Spring Boot" percentage={85} />
              <SkillBar skill="UI/UX Design" percentage={80} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-gray-800/60 px-8 py-12 rounded-2xl border border-gray-700/50 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together!</h3>
            <p className="text-gray-300 mb-6">I’m always excited to collaborate and take on new challenges. Let's bring your vision to life.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton href="/contact" text="Get In Touch" primary />
              <CTAButton href="/projects" text="View Projects" />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

// Reusable Components

const ContentCard = ({ icon, title, text, pills = [], gradient }) => (
  <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/40 shadow-lg">
    <div className="flex items-center mb-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg ${gradient ? `bg-gradient-to-br ${gradient}` : 'bg-gradient-to-br from-blue-500 to-purple-600'}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 text-lg">{text}</p>
    {pills.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-4">
        {pills.map((pill, idx) => (
          <span key={idx} className="px-3 py-1 rounded-full text-sm text-blue-300 bg-blue-500/10 border border-blue-400/30 font-medium">{pill}</span>
        ))}
      </div>
    )}
  </div>
);

const StatCard = ({ icon, number, label }) => (
  <div className="bg-gray-800/50 p-6 rounded-xl text-center shadow-lg border border-gray-700/40 hover:shadow-yellow-400/10 transition-all hover:-translate-y-1 duration-300">
    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2 text-white">
      {icon}
    </div>
    <div className="text-2xl font-bold text-white">{number}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);

const SkillBar = ({ skill, percentage }) => (
  <div>
    <div className="flex justify-between text-sm mb-1 text-gray-300">
      <span>{skill}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3">
      <div className="h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const CTAButton = ({ href, text, primary }) => (
  <a
    href={href}
    className={`px-6 py-3 font-bold rounded-full transition-all transform hover:scale-105 duration-300 ${
      primary
        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:shadow-yellow-400/25'
        : 'border-2 border-gray-500 text-gray-300 hover:border-yellow-400 hover:text-yellow-400'
    }`}
  >
    {text}
  </a>
);

export default About;
