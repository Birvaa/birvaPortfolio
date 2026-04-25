
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Birva Vaghasiya
            </h3>
            <p className="text-gray-400 mt-2">
              Aspiring App Developer & UI/UX Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:Birvaa1409@gmail.com" 
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/birvaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/Birvaa" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm flex items-center justify-center">
              © {currentYear} Birva Vaghasiya. Made with 
              <Heart className="h-4 w-4 mx-1 text-teal-400" fill="currentColor" />
              in Rajkot, Gujarat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
