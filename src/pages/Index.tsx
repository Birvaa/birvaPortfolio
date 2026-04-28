
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";
import CustomCursor from "@/components/CustomCursor";
import SplashScreen from "@/components/SplashScreen";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {loading && <SplashScreen key="splash" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen bg-transparent transition-colors duration-300"
          >
            <GlobalBackground />
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
