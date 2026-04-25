import { Card } from "@/components/ui/card";
import { Code, Database, Smartphone, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "C", "JavaScript"],
    },
    {
      title: "Web Technologies",
      icon: Code,
      skills: ["HTML/CSS", "Bootstrap", "JavaScript", "Responsive Design"],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Mobile UI/UX", "App Architecture"],
    },
    {
      title: "AI / ML & Deep Learning",
      icon: Brain,
      skills: ["Machine Learning", "Deep Learning", "Model Training", "Data Analysis"],
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["SQL", "MongoDB", "Canva", "Git"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-teal-100 dark:border-teal-900/20"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mr-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:scale-105 hover:shadow-md transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Fun Facts Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/20 border-teal-200 dark:border-teal-800">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">4+</div>
            <p className="text-gray-700 dark:text-gray-300">Projects Completed</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900/20 dark:to-teal-900/20 border-cyan-200 dark:border-cyan-800">
            <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">15+</div>
            <p className="text-gray-700 dark:text-gray-300">Technologies Learned</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/20 dark:to-teal-900/20 border-teal-200 dark:border-teal-800">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">2027</div>
            <p className="text-gray-700 dark:text-gray-300">Expected Graduation</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
