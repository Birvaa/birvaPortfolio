
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 transition-colors duration-500">

      {/* ---------------- FOREGROUND CONTENT ---------------- */}

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left z-10"
        >
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6"
            >
              Creative <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Developer &</span> <br />
              Designer.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed border-l-0 lg:border-l-4 border-teal-500 lg:pl-6"
            >
              I'm Birva Vaghasiya. Transforming complex problems into elegant, intuitive digital experiences.
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-400 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-teal-50 dark:hover:bg-teal-900/40 px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Let's Connect
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="flex items-center space-x-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md px-8 py-4 rounded-full shadow-sm border border-gray-200/50 dark:border-gray-700/50">
              <a href="mailto:Birvaa1409@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 hover:-translate-y-1 transform">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/birva-vaghasiya-86043b2b6" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 hover:-translate-y-1 transform">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/Birvaa" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 hover:-translate-y-1 transform">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Photo & Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="flex justify-center lg:justify-end relative mt-12 lg:mt-0 z-10"
          style={{ perspective: 1000 }}
        >
          <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem]">

            {/* Spinning SVG Text Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute -inset-12 z-0 pointer-events-none hidden md:block"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-40 dark:opacity-60">
                <path id="textPath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" />
                <text className="text-[14px] font-semibold uppercase tracking-[0.25em] fill-gray-900 dark:fill-white">
                  <textPath href="#textPath" startOffset="0%">
                    UI/UX Designer • Flutter Developer • Problem Solver •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Profile Image with Tilt */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="100%"
              scale={1.02}
              transitionSpeed={2000}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-900/40 dark:to-cyan-900/40 p-2 shadow-2xl z-10"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-2 overflow-hidden border border-white/50 dark:border-gray-700/50">
                <img
                  src="https://i.postimg.cc/2jF0gMyk/My-Pic.jpg"
                  alt="Birva Vaghasiya"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </Tilt>

            {/* Floating Glass Badges */}

          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
        onClick={() => scrollToSection('#about')}
      >
        <ArrowDown className="h-8 w-8 text-teal-500 hover:text-cyan-400 transition-colors duration-300" />
      </div>
    </section>
  );
};

export default Hero;
