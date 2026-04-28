
import { Card } from "@/components/ui/card";
import { MapPin, GraduationCap, Calendar, Heart } from "lucide-react";
import { motion } from 'framer-motion';
const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
            style={{ perspective: 1000 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi! I'm <strong className="text-teal-600 dark:text-teal-400">Birva Vaghasiya</strong> from Rajkot, Gujarat.
              I'm currently pursuing my B.Tech in Computer Science Engineering at Darshan University
              with an expected graduation in 2027.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about creating engaging, user-friendly experiences through design and development.
              My focus areas include UI/UX design and Flutter app development, where I love bringing
              creative ideas to life through clean code and beautiful interfaces.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I also have a growing interest in Deep Learning and data-driven applications, exploring how models
              can solve real-world problems and enhance user experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, learning about emerging
              technologies, or working on personal projects that challenge my creativity and problem-solving skills.
            </p>
          </motion.div>

          {/* Right Content - Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid gap-6"
            style={{ perspective: 1000 }}
          >
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-teal-100 dark:border-teal-900/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Rajkot, Gujarat, India</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-teal-100 dark:border-teal-900/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">B.Tech CSE, Darshan University</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-teal-100 dark:border-teal-900/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Graduation</h3>
                  <p className="text-gray-600 dark:text-gray-400">Expected 2027</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-teal-100 dark:border-teal-900/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Passion</h3>
                  <p className="text-gray-600 dark:text-gray-400"> ML/DL, Web & Mobile App Development, and UI/UX</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
