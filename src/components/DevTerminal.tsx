import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalLine {
  type: 'command' | 'output' | 'link' | 'gap';
  text?: string;
  label?: string;
  href?: string;
  color?: string;
  delay: number;
}

const lines: TerminalLine[] = [
  { type: 'command', text: 'whoami', delay: 400 },
  { type: 'output', text: 'Birva Vaghasiya — Creative Developer & Designer', color: 'text-teal-400', delay: 900 },
  { type: 'gap', delay: 1100 },

  { type: 'command', text: 'cat location.txt', delay: 1300 },
  { type: 'output', text: '📍 Gujarat, India ', color: 'text-cyan-300', delay: 1800 },
  { type: 'gap', delay: 2000 },

  // { type: 'command', text: 'cat status.txt', delay: 2200 },
  // { type: 'output', text: '🟢 Available for hire · Actively looking', color: 'text-emerald-400', delay: 2700 },
  // { type: 'gap', delay: 2900 },

  { type: 'command', text: 'cat skills.txt', delay: 3100 },
  { type: 'output', text: '⚡ Flutter  ·  React  ·  Python  ·  ML  ·  UI/UX', color: 'text-violet-400', delay: 3600 },
  { type: 'gap', delay: 3800 },

  { type: 'command', text: 'ls contact/', delay: 4000 },
  { type: 'link', label: '📧 email', text: 'Birvaa1409@gmail.com', href: 'mailto:Birvaa1409@gmail.com', delay: 4500 },
  { type: 'link', label: '💼 linkedin', text: 'linkedin.com/in/birvaa', href: 'https://www.linkedin.com/in/birvaa', delay: 4800 },
  { type: 'link', label: '🐙 github', text: 'github.com/Birvaa', href: 'https://github.com/Birvaa', delay: 5100 },
];

const TypingText = ({ text, onDone }: { text: string; onDone: () => void }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); onDone(); }
    }, 28);
    return () => clearInterval(id);
  }, [text]);

  return <span>{displayed}</span>;
};

const DevTerminal = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingIdx, setTypingIdx] = useState(-1);
  const [doneLine, setDoneLine] = useState(-1);
  const [started, setStarted] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Start on mount via IntersectionObserver
  const wrapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (visibleCount >= lines.length) return;

    const line = lines[visibleCount];
    const timer = setTimeout(() => {
      if (line.type === 'command') {
        setTypingIdx(visibleCount);
      } else {
        setVisibleCount(v => v + 1);
      }
    }, visibleCount === 0 ? line.delay : line.delay - lines[visibleCount - 1].delay);

    return () => clearTimeout(timer);
  }, [visibleCount, started]);

  // Scroll only the terminal body, never the page
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visibleCount, typingIdx]);

  const handleTypingDone = (idx: number) => {
    setDoneLine(idx);
    setTypingIdx(-1);
    setVisibleCount(v => v + 1);
  };

  // Reset + replay
  const handleReplay = () => {
    setVisibleCount(0);
    setTypingIdx(-1);
    setDoneLine(-1);
    setTimeout(() => setStarted(true), 100);
  };

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      className="w-full rounded-2xl overflow-hidden border border-gray-700/60 shadow-2xl shadow-teal-500/10 bg-gray-950"
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-gray-500 font-mono">birva@portfolio ~ </span>
        <button
          onClick={handleReplay}
          className="text-xs text-gray-600 hover:text-teal-400 transition-colors font-mono"
          title="Replay"
        >
          ↺ replay
        </button>
      </div>

      {/* Terminal Body */}
      <div ref={bodyRef} className="p-5 font-mono text-sm space-y-1 min-h-[320px] max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <AnimatePresence>
          {lines.slice(0, Math.max(visibleCount, typingIdx >= 0 ? typingIdx : 0) + 1).map((line, i) => {
            const isTyping = typingIdx === i;
            const isVisible = i < visibleCount || isTyping;
            if (!isVisible) return null;

            if (line.type === 'gap') {
              return <div key={i} className="h-2" />;
            }

            if (line.type === 'command') {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-teal-500 select-none">❯</span>
                  <span className="text-white">
                    {isTyping ? (
                      <TypingText text={line.text!} onDone={() => handleTypingDone(i)} />
                    ) : (
                      line.text
                    )}
                  </span>
                  {isTyping && (
                    <span className="inline-block w-2 h-4 bg-teal-400 animate-pulse ml-0.5 align-middle" />
                  )}
                </motion.div>
              );
            }

            if (line.type === 'output') {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`pl-5 ${line.color ?? 'text-gray-300'}`}
                >
                  {line.text}
                </motion.div>
              );
            }

            if (line.type === 'link') {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-5 flex items-center gap-3 group"
                >
                  <span className="text-gray-500 w-24 flex-shrink-0">{line.label}</span>
                  <a
                    href={line.href}
                    target={line.href?.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 hover:underline underline-offset-2 transition-colors"
                  >
                    {line.text}
                  </a>
                </motion.div>
              );
            }

            return null;
          })}
        </AnimatePresence>

        {/* Idle blinking cursor at the end */}
        {visibleCount >= lines.length && typingIdx === -1 && (
          <div className="flex items-center gap-2 mt-2">
            <span className="text-teal-500 select-none">❯</span>
            <span className="inline-block w-2 h-4 bg-teal-400 animate-pulse align-middle" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DevTerminal;
