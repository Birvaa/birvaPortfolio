import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Send, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: ""
  // });
  // const {
  //   toast
  // } = useToast();
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   toast({
  //     title: "Message Sent!",
  //     description: "Thank you for reaching out. I'll get back to you soon!"
  //   });
  //   setFormData({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: ""
  //   });
  // };
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };
  return <section id="contact" className="py-20 px-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/10 dark:to-cyan-950/10">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Get In <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Let's discuss your next project or just say hello!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-justify">
              Whether you have a project idea, a collaboration in mind, or simply want to talk about technology, design, or AI — I'd love to hear from you. I'm always excited to meet curious minds and explore new opportunities together.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-justify">
              Feel free to reach out through any of the channels below — I usually reply within a day or two. Let's create something meaningful! ✨
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-teal-100 dark:border-teal-900/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <a href="mailto:Birvaa1409@gmail.com" className="text-teal-600 dark:text-teal-400 hover:underline">
                    Birvaa1409@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-teal-100 dark:border-teal-900/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/birvaa" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
                    linkedin.com/in/birvaa
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-teal-100 dark:border-teal-900/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">GitHub</h4>
                  <a href="https://github.com/Birvaa" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
                    github.com/Birvaa
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-teal-100 dark:border-teal-900/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Rajkot, Gujarat, India</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Resume Download */}

        </div>

        {/* Contact Form */}

      </div>
    </div>
  </section>;
};
export default Contact;