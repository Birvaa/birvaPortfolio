
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock } from "lucide-react";

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
    {
      title: "Booksy",
      description: "A comprehensive PDF reading app featuring resume-reading capabilities, session timer, an integrated Chat with PDF system, and a clean, intuitive user interface.",
      image: "📚",
      technologies: ["Flutter", "Dart", "PDF SDK", "AI Chat", "Timer"],
      status: "Completed",
      liveLink: "https://drive.google.com/drive/folders/1t6Rw_RSvbTAGK51ew8jL6Yfe-UP-JsIQ?usp=sharing"
    },
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
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/10 dark:to-teal-950/10">
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
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-teal-100 dark:border-teal-900/20">
              <div className="p-6">
                {/* Project Icon */}
                <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Status Badge */}
                <div className="flex justify-between items-center mb-4">
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" 
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white" 
                      : "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                    }
                  >
                    {project.status === "In Progress" && <Clock className="w-3 h-3 mr-1" />}
                    {project.status}
                  </Badge>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveLink && (
                    <Button 
                      size="sm"
                      asChild
                      className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300"
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button 
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
