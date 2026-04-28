
import { Card } from "@/components/ui/card";
import { Palette, Smartphone, Code, Brain } from "lucide-react";

const Services = () => {
  const services = [

    {
      icon: Brain,
      title: "AI / ML & Deep Learning",
      description: "Exploring machine learning and deep learning to build smart, data-driven solutions like predictive models and AI-powered features.",
      features: ["Machine Learning", "Deep Learning", "Model Training", "Data Analysis"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Building smooth and scalable Flutter apps from concept to deployment with clean code and beautiful interfaces.",
      features: ["Flutter Development", "Cross-platform", "Responsive Design", "App Store Deployment"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive web applications using modern technologies and best practices.",
      features: ["HTML/CSS", "JavaScript", "Bootstrap", "React"],
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Palette,
      title: "UI/UX & Visual Design",
      description: "Designing clean, intuitive interfaces and crafting stunning visual content using modern design tools like Figma and Canva.",
      features: ["Wireframing & Prototyping", "Visual Design", "Canva & Figma", "Brand & Social Graphics"],
      gradient: "from-teal-500 to-cyan-500"
    }

  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What I can do to help bring your digital ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-[360px] group overflow-hidden bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border-teal-100 dark:border-teal-900/20 shadow-lg hover:shadow-2xl transition-all duration-500 relative">

              {/* Default State */}
              <div className="absolute inset-0 p-8 flex flex-col items-center justify-center transition-all duration-700 group-hover:opacity-0 group-hover:scale-95 group-hover:-translate-y-8">
                <div className={`p-5 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-xl`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                  {service.title}
                </h3>
              </div>

              {/* Hover Reveal Card */}
              <div className="absolute inset-0 p-8 flex flex-col bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                <div className="flex items-center mb-6">
                  <div className={`p-2 bg-gradient-to-br ${service.gradient} rounded-lg mr-4`}>
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-3 mt-auto">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs uppercase tracking-wider">
                    What I Offer:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300 bg-gray-50/50 dark:bg-gray-800/50 p-2 rounded-md">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-gray-500 ml-5">
                        +{service.features.length - 4} more
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl border border-teal-200 dark:border-teal-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. I'm always excited to work on new challenges and bring creative ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:Birvaa1409@gmail.com" className="inline-block">
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Get in Touch
              </button>
            </a>
            <button
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border-2 border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
