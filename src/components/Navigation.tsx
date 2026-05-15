
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Palette, Smartphone, Code, Brain } from "lucide-react";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    {
      name: "Projects",
      href: "#projects",
      dropdown: [
        { name: "Memory Game", href: "#projects", icon: "🧠" },
        // { name: "Booksy App", href: "#projects", icon: "📚" },
        { name: "Kidoku", href: "#projects", icon: "🔢" },
        { name: "CardioPredict", href: "#projects", icon: "❤️" }
      ]
    },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        { name: "AI / ML", href: "#services", icon: <Brain size={86} strokeWidth={1.5} /> },
        { name: "App Development", href: "#services", icon: <Smartphone size={86} strokeWidth={1.5} /> },
        { name: "Frontend Development", href: "#services", icon: <Code size={86} strokeWidth={1.5} /> },
        { name: "UI/UX Design", href: "#services", icon: <Palette size={86} strokeWidth={1.5} /> }
      ]
    },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl border-b border-teal-100 dark:border-teal-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('#home')}>
            B.
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 h-full">
            {navItems.map((item) => (
              <div key={item.name} className="group h-full flex items-center">
                {/* Nav Link Item */}
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 font-medium flex items-center h-full py-4"
                >
                  {item.name}
                  {item.dropdown && (
                    <svg className="w-4 h-4 ml-1.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Desktop Full-Width Mega Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-b border-teal-100 dark:border-teal-900/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] pointer-events-none group-hover:pointer-events-auto transform origin-top group-hover:scale-y-100 scale-y-95">
                    <div className="max-w-6xl mx-auto px-6 py-10 w-full">
                      <div className="flex gap-6 justify-center">
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => scrollToSection(subItem.href)}
                            className="group/card flex-1 flex flex-col hover:-translate-y-2 transition-transform duration-500"
                          >
                            {/* Visual Card Image Stand-in */}
                            <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-teal-900/30 dark:to-cyan-900/30 flex items-center justify-center mb-4 border border-teal-100 dark:border-teal-800/50 shadow-sm overflow-hidden relative transition-all duration-500 group-hover/card:shadow-xl">

                              {/* Bottom Gradient Overlay on Hover (Mimics real-estate overlay) */}
                              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10" />

                              <div className="text-7xl transform group-hover/card:scale-125 transition-transform duration-700 z-0 drop-shadow-xl text-teal-700 dark:text-teal-300">
                                {subItem.icon}
                              </div>
                            </div>

                            {/* Bottom Title Text */}
                            <h4 className="font-semibold text-gray-900 dark:text-white text-center w-full group-hover/card:text-teal-600 dark:group-hover/card:text-teal-400 transition-colors">
                              {subItem.name}
                            </h4>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-teal-100 dark:border-teal-900/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 font-medium py-3 text-lg w-full"
                    >
                      {item.name}
                    </button>
                    {item.dropdown && (
                      <button
                        onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                        className="p-2 text-gray-500 dark:text-gray-400"
                      >
                        <svg className={`w-5 h-5 transition-transform duration-300 ${expandedItem === item.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown Sub-menu */}
                  {item.dropdown && expandedItem === item.name && (
                    <div className="pl-4 border-l-2 border-teal-100 dark:border-teal-900/30 flex flex-col space-y-2 mt-1 mb-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => scrollToSection(subItem.href)}
                          className="text-left text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 py-2 w-full text-base"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
