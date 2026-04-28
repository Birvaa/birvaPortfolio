import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const GlobalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mouse tracking for the Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for the spotlight movement
  const springX = useSpring(mouseX, { stiffness: 40, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 15 });
  
  const spotlightStyle = useMotionTemplate`radial-gradient(800px circle at ${springX}px ${springY}px, rgba(45, 212, 191, 0.15), transparent 80%)`;

  useEffect(() => {
    // Canvas setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number, y: number, vx: number, vy: number, radius: number }[] = [];
    let animationFrameId: number;
    let mousePos = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 120);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      // Also update framer motion spotlight values
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      mousePos.x = -1000;
      mousePos.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);

    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDark = document.documentElement.classList.contains('dark');
      const particleColor = isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(15, 23, 42, 0.2)';
      const lineColor = isDark ? 'rgba(255, 255, 255, ' : 'rgba(15, 23, 42, ';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Interactive mouse repel and glow effect
        const dxMouse = p.x - mousePos.x;
        const dyMouse = p.y - mousePos.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        const maxMouseDist = 150;
        
        let currentRadius = p.radius;
        let opacityMultiplier = 1;

        if (distMouse < maxMouseDist) {
          const force = (maxMouseDist - distMouse) / maxMouseDist;
          
          // Magnetic repel effect instead of drawing spiderweb lines
          p.x += (dxMouse / distMouse) * force * 1.5;
          p.y += (dyMouse / distMouse) * force * 1.5;
          
          // Particle glows and grows slightly when mouse is near
          currentRadius = p.radius * (1 + force * 1.5);
          opacityMultiplier = 1 + force * 2;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        // Apply glow opacity
        ctx.fillStyle = isDark 
          ? `rgba(255, 255, 255, ${0.3 * opacityMultiplier})` 
          : `rgba(15, 23, 42, ${0.2 * opacityMultiplier})`;
        ctx.fill();

        // Check distance to other particles for constellation connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            // Network lines also slightly glow if this particle is near the mouse
            ctx.strokeStyle = `${lineColor}${0.15 * (1 - dist / 120) * opacityMultiplier})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-slate-50 dark:bg-gray-950 transition-colors duration-500">
      {/* Layer 1: Constellation Particle Network */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 w-full h-full" 
      />
      
      {/* Layer 2: Floating Aurora Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-teal-400/10 dark:bg-teal-900/15 blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, -60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-cyan-400/10 dark:bg-cyan-900/15 blur-[100px]"
        />
      </div>

      {/* Layer 3: Interactive Cursor Spotlight */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ background: spotlightStyle }}
      />
    </div>
  );
};

export default GlobalBackground;
