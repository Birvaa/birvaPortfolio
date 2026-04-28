import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from 'framer-motion';
import DevTerminal from "./DevTerminal";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "Birvaa1409@gmail.com",
    href: "mailto:Birvaa1409@gmail.com",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/birvaa",
    href: "https://www.linkedin.com/in/birvaa",
    gradient: "from-cyan-500 to-sky-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Birvaa",
    href: "https://github.com/Birvaa",
    gradient: "from-teal-500 to-emerald-500",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Let's <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Let's discuss your next project or just say hello!
          </motion.p>
        </div>

        {/* Two-column layout: info left, terminal right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-justify">
                Whether you have a project idea, a collaboration in mind, or simply want to talk about technology, design, or AI — I'd love to hear from you.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                Feel free to reach out through any of the channels below — I usually reply within a day or two. Let's create something meaningful! ✨
              </p>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className="block"
                >
                  <Card className="p-5 hover:shadow-xl transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-teal-100 dark:border-teal-900/20 group cursor-pointer overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-gradient-to-r ${link.gradient} rounded-xl shadow-md flex-shrink-0`}>
                        <link.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{link.label}</h4>
                        <span className="text-teal-600 dark:text-teal-400 text-sm group-hover:underline">
                          {link.value}
                        </span>
                      </div>
                      <div className="ml-auto text-gray-300 dark:text-gray-600 group-hover:text-teal-400 transition-colors text-lg">
                        →
                      </div>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Developer Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <DevTerminal />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;