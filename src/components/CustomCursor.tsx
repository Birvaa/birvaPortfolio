import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot follows instantly
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  // Ring follows with a pleasant lag
  const ringX = useSpring(mouseX, { stiffness: 520, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 520, damping: 22 });

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Track hoverable interactive elements
    const addHoverListeners = () => {
      const interactables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, label, [class*="cursor-pointer"], select'
      );
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    // Use MutationObserver to re-attach listeners when DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, isVisible]);

  // Hide on touch devices entirely
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: hovered ? 1.8 : clicked ? 0.7 : 1,
          borderColor: hovered ? 'rgba(45, 212, 191, 0.9)' : 'rgba(45, 212, 191, 0.5)',
        }}
        transition={{ scale: { duration: 0.2 }, borderColor: { duration: 0.2 } }}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border-2 border-teal-400/50 pointer-events-none z-[9999] mix-blend-difference"
      />

      {/* Inner Dot */}
      <motion.div
        ref={cursorDotRef}
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: hovered ? 0.4 : clicked ? 2.5 : 1,
          backgroundColor: hovered ? 'rgba(45, 212, 191, 1)' : 'rgba(45, 212, 191, 0.9)',
        }}
        transition={{ scale: { duration: 0.15 }, backgroundColor: { duration: 0.15 } }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-teal-400 pointer-events-none z-[9999]"
      />
    </>
  );
};

export default CustomCursor;
