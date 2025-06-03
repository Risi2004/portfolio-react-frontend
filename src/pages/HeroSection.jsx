import React, { useState, useEffect } from 'react';
import {
  ChevronDown, Github, Linkedin, Mail, Download, Code, Database, Server
} from 'lucide-react';

function HeroSection() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "Java Developer",
    "Spring Boot Specialist"
  ];

  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentRole.substring(0, charIndex - 1)
        : currentRole.substring(0, charIndex + 1);

      setDisplayText(updatedText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setCharIndex(0);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  // Delay profile image appearance
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full mt-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left Text Content */}
          <div className="text-left flex-1 pt-10">
            <h2 className="text-lg md:text-xl text-gray-400 mb-4 animate-fade-in-up">👋 Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Jegatheesan Risikesan
              </span>
            </h1>

            <div className="mb-8 h-16 flex items-center animate-fade-in-up">
              <p className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                {displayText}
                <span className="border-r-2 border-yellow-400 animate-blink ml-1"></span>
              </p>
            </div>

            <div className="flex space-x-8 mb-8 animate-fade-in-up">
              <SkillIcon icon={<Code size={32} />} label="Frontend" />
              <SkillIcon icon={<Database size={32} />} label="Database" />
              <SkillIcon icon={<Server size={32} />} label="Backend" />
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl animate-fade-in-up">
              Passionate about creating innovative web solutions with modern technologies. 
              Specialized in building scalable applications using MERN stack and Java ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up">
              <PrimaryButton href="/projects" text="View My Work" />
              <SecondaryButton href="/contact" text="Get In Touch" icon={<Mail size={20} />} />
              <SecondaryButton href="/cv.pdf" text="Download CV" icon={<Download size={20} />} />
            </div>

            <div className="flex space-x-6 animate-fade-in-up">
              <SocialLink href="https://github.com/Risi2004" icon={<Github size={24} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/jegatheesan-risikesan/" icon={<Linkedin size={24} />} label="LinkedIn" />
              <SocialLink href="mailto:risikesanjegatheesan@gmail.com" icon={<Mail size={24} />} label="Email" />
            </div>
          </div>

          {/* Right Image with Ring - visible only on large screens */}
          <div
            className={`relative w-72 h-72 lg:w-80 lg:h-80 mt-[30px] group transition-all duration-1000 ease-out hidden lg:block ${
              showImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="absolute inset-0 rounded-full border-[8px] border-yellow-400 animate-spin-slow border-t-transparent z-0 pointer-events-none blur-sm group-hover:blur-md"></div>
            <img
              src="/images/profile.jpg"
              alt="Risikesan"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-gray-900 shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }
        .animate-blink { animation: blink 1s step-end infinite; }
        .animate-spin-slow { animation: spin 6s linear infinite; }
      `}</style>
    </section>
  );
}

// Skill Icon Component
function SkillIcon({ icon, label }) {
  return (
    <div className="group flex flex-col items-center">
      <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-yellow-400 group-hover:text-yellow-300 transform group-hover:scale-110 transition-all duration-300 shadow-lg border border-gray-700/50">
        {icon}
      </div>
      <span className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">{label}</span>
    </div>
  );
}

// Buttons
function PrimaryButton({ href, text }) {
  return (
    <a href={href} className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 overflow-hidden">
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  );
}

function SecondaryButton({ href, text, icon }) {
  const isDownload = href.endsWith(".pdf");
  return (
    <a
      href={href}
      {...(isDownload ? { download: "Risikesan_Resume.pdf" } : {})}
      className="group inline-flex items-center justify-center px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 space-x-2"
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </a>
  );
}

// Social Links
function SocialLink({ href, icon, label }) {
  return (
    <a href={href} aria-label={label} className="group w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-110 mb-5">
      {icon}
    </a>
  );
}

export default HeroSection;
