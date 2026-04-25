
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="mb-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2 font-medium">
              Hi There,
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              I am <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Birva</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-light">
              Aspiring App Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
              Creating engaging user experiences through design and development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button 
              onClick={() => scrollToSection('#projects')}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start space-x-6">
            <a 
              href="mailto:Birvaa1409@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/birva-vaghasiya-86043b2b6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Photo */}
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-900/30 dark:to-cyan-900/30 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.postimg.cc/2jF0gMyk/My-Pic.jpg" 
                  alt="Birva Vaghasiya" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-cyan-300 to-teal-300 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-teal-500" />
      </div>
    </section>
  );
};

export default Hero;
