
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock } from "lucide-react";
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
const Projects = () => {
  const projects = [
    {
      title: "Memory Game",
      description: "A fun and engaging mobile game designed to enhance memory skills through colorful card matching gameplay.",
      image: "🧠",
      technologies: ["Flutter", "Dart", "Mobile UI"],
      status: "Completed",
      liveLink: "https://www.linkedin.com/posts/ugcPost-7349076084807602176-pdcq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEviEggB83b625SUH-hrlg-GOQBJeGeJBpk"
    },
    // {
    //   title: "Booksy",
    //   description: "A comprehensive PDF reading app featuring resume-reading capabilities, session timer, an integrated Chat with PDF system, and a clean, intuitive user interface.",
    //   image: "📚",
    //   technologies: ["Flutter", "Dart", "PDF SDK", "AI Chat", "Timer"],
    //   status: "Completed",
    //   liveLink: "https://drive.google.com/drive/folders/1t6Rw_RSvbTAGK51ew8jL6Yfe-UP-JsIQ?usp=sharing"
    // },
    {
      title: "Kidoku",
      description: "An elegant mobile Sudoku puzzle game for logic lovers with multiple difficulty levels and clean design aesthetics. Live on the Google Play Store.",
      image: "🔢",
      technologies: ["Flutter", "Dart", "Game Logic"],
      status: "Completed",
      liveLink: "https://play.google.com/store/apps/details?id=com.aswdc_sudoku"
    },
    {
      title: "CardioPredict",
      description: "A live web application that predicts cardiovascular risk using machine learning, featuring a clean, responsive interface and intuitive user experience.",
      image: "❤️",
      technologies: ["Web", "Machine Learning", "UI/UX"],
      status: "Completed",
      liveLink: "https://cardio-ml-project-65y5.onrender.com/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in mobile app development and UI/UX design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className="h-full"
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#2dd4bf"
                glarePosition="all"
                glareBorderRadius="0.75rem"
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                scale={1.04}
                transitionSpeed={2000}
                className="h-full transform-gpu"
                perspective={900}
                tiltEnable={true}
              >
                <Card
                  className="h-[380px] flex flex-col group overflow-hidden bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border-teal-100 dark:border-teal-900/20 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 relative rounded-xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Default State — floats above card */}
                  <div
                    className="absolute inset-0 p-6 flex flex-col items-center justify-center transition-all duration-700 group-hover:opacity-0 group-hover:scale-90 group-hover:-translate-y-6"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: index * 0.4 }}
                      className="text-8xl mb-6 drop-shadow-2xl"
                    >
                      {project.image}
                    </motion.div>
                    <h3
                      className="text-2xl font-bold text-gray-900 dark:text-white text-center"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      {project.title}
                    </h3>
                    {/* Tech stack preview chips floating */}
                    <div className="flex flex-wrap gap-1.5 justify-center mt-3" style={{ transform: 'translateZ(15px)' }}>
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-teal-500/10 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400 border border-teal-200/40 dark:border-teal-700/40">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Reveal Card */}
                  <div className="absolute inset-0 px-6 py-8 flex flex-col bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">
                        {project.title}
                      </h3>
                      <Badge
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={project.status === "Completed"
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0"
                          : "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0"
                        }
                      >
                        {project.status === "In Progress" && <Clock className="w-3 h-3 mr-1" />}
                        {project.status}
                      </Badge>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 5).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 bg-teal-50/50 dark:bg-teal-900/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-xs text-gray-500 flex items-center px-1">+{project.technologies.length - 5}</span>
                      )}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      {project.liveLink && (
                        <Button
                          size="sm"
                          asChild
                          className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl h-12"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
