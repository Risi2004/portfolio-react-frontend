import React, { useState } from 'react';
import { Mail, Send, Loader, Github, Linkedin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
    const response = await fetch('https://portfolio-react-backend-4vrl.onrender.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });


      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }

    setLoading(false);
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-16 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-bounce delay-2000"></div>
        <div className="absolute top-20 left-1/4 text-yellow-400/10 text-5xl font-mono animate-float">{'</>'}</div>
        <div className="absolute bottom-20 right-1/4 text-purple-400/10 text-4xl font-mono animate-float-delayed">{'{}'}</div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto relative z-10 animate-fade-in-up">
        {/* Fixed Heading */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 px-2 tracking-wide bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800/50 p-8 rounded-2xl shadow-xl border border-gray-700/50 backdrop-blur-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-yellow-400 transition-all duration-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-yellow-400 transition-all duration-300"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-yellow-400 transition-all duration-300"
            required
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-bold transition-transform duration-300 shadow-lg hover:shadow-yellow-300/20 ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              }`}
            >
              {loading ? (
                <>
                  <Loader className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>

        {/* Animated Social Links Below Form */}
        <div className="flex justify-center space-x-10 mt-12">
          <SocialLink href="https://github.com/Risi2004" icon={<Github size={28} />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/jegatheesan-risikesan/" icon={<Linkedin size={28} />} label="LinkedIn" />
          <SocialLink href="mailto:risikesanjegatheesan@gmail.com" icon={<Mail size={28} />} label="Email" />
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out both;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        /* Social Icon Animation */
        .social-link {
          background: rgba(31, 41, 55, 0.5);
          border: 1px solid rgba(107, 114, 128, 0.5);
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af; /* Tailwind gray-400 */
          width: 56px;
          height: 56px;
          transition: all 0.4s ease;
          cursor: pointer;
          box-shadow: 0 0 0 rgba(255, 193, 7, 0);
          /* initially no shadow */
        }
        .social-link:hover {
          color: #f59e0b; /* Tailwind yellow-400 */
          border-color: #f59e0b;
          box-shadow:
            0 0 8px 2px rgba(245, 158, 11, 0.6),
            0 0 16px 4px rgba(245, 158, 11, 0.4);
          transform: scale(1.2);
        }
        .social-link:active {
          transform: scale(1.1);
          box-shadow:
            0 0 4px 1px rgba(245, 158, 11, 0.8);
        }
      `}</style>
    </section>
  );
}

// SocialLink component 
function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      title={label}
    >
      {icon}
    </a>
  );
}

export default Contact;
