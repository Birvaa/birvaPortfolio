import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Code, Database, Smartphone, Brain, Layers, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const domainToCategory: Record<string, number> = {
  "Mobile Dev": 0,
  "UI/UX Design": 5,
  "AI / ML": 2,
  "Web Dev": 1,
  "Databases": 4,
  "Languages": 3,
};

const radarData = [
  { domain: "Mobile Dev" },
  { domain: "UI/UX Design" },
  { domain: "AI / ML" },
  { domain: "Web Dev" },
  { domain: "Databases" },
  { domain: "Languages" },
].map((d) => ({ ...d, value: 100 }));

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Mobile UI/UX", "App Architecture"],
    color: "from-teal-500 to-cyan-500",
    activeColor: "from-teal-500/20 to-cyan-500/20",
    dot: "bg-teal-400",
    border: "border-teal-400",
    glow: "shadow-teal-400/30",
  },
  {
    title: "Web Technologies",
    icon: Code,
    skills: ["HTML/CSS", "Bootstrap", "JavaScript", "React"],
    color: "from-cyan-500 to-sky-500",
    activeColor: "from-cyan-500/20 to-sky-500/20",
    dot: "bg-sky-400",
    border: "border-sky-400",
    glow: "shadow-sky-400/30",
  },
  {
    title: "AI / ML & Deep Learning",
    icon: Brain,
    skills: ["ML", "DL", "Model Training", "Data Analysis"],
    color: "from-violet-500 to-purple-500",
    activeColor: "from-violet-500/20 to-purple-500/20",
    dot: "bg-violet-400",
    border: "border-violet-400",
    glow: "shadow-violet-400/30",
  },
  {
    title: "Programming Languages",
    icon: Layers,
    skills: ["Python", "Java", "C", "Dart"],
    color: "from-emerald-500 to-teal-500",
    activeColor: "from-emerald-500/20 to-teal-500/20",
    dot: "bg-emerald-400",
    border: "border-emerald-400",
    glow: "shadow-emerald-400/30",
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["SQL", "MongoDB", "Figma", "Git"],
    color: "from-orange-500 to-amber-500",
    activeColor: "from-orange-500/20 to-amber-500/20",
    dot: "bg-amber-400",
    border: "border-amber-400",
    glow: "shadow-amber-400/30",
  },
  {
    title: "Design & Creative",
    icon: Palette,
    skills: ["Figma", "Canva", "UI Prototyping", "Visual Design"],
    color: "from-pink-500 to-rose-500",
    activeColor: "from-pink-500/20 to-rose-500/20",
    dot: "bg-pink-400",
    border: "border-pink-400",
    glow: "shadow-pink-400/30",
  },
];

// Custom dot on the radar — lights up on hover
const CustomDot = (props: any) => {
  const { cx, cy, payload, activeIndex } = props;
  const idx = radarData.findIndex((d) => d.domain === payload.domain);
  const isActive = activeIndex === idx;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={isActive ? 7 : 4}
      fill="#2dd4bf"
      stroke={isActive ? "#fff" : "#0f766e"}
      strokeWidth={isActive ? 2.5 : 1.5}
      style={{ transition: "all 0.2s ease", filter: isActive ? "drop-shadow(0 0 6px #2dd4bf)" : "none" }}
    />
  );
};

// Custom axis tick — highlights on hover
const CustomTick = (props: any) => {
  const { x, y, payload, activeIndex, onDomainHover } = props;
  const idx = radarData.findIndex((d) => d.domain === payload.value);
  const isActive = activeIndex === idx;

  return (
    <g
      style={{ cursor: "default" }}
      onMouseEnter={() => onDomainHover(idx)}
      onMouseLeave={() => onDomainHover(null)}
    >
      {/* Invisible larger hit area */}
      <rect x={x - 40} y={y - 12} width={80} height={24} fill="transparent" />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: "11px",
          fontWeight: isActive ? 800 : 600,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          fill: isActive ? "#2dd4bf" : undefined,
          transition: "all 0.2s ease",
        }}
        className={isActive ? "fill-teal-400" : "fill-gray-500 dark:fill-gray-400"}
      >
        {payload.value}
      </text>
      {isActive && (
        <circle cx={x} cy={y - 14} r={3} fill="#2dd4bf" opacity={0.7} />
      )}
    </g>
  );
};

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleDomainHover = (idx: number | null) => {
    setActiveIndex(idx);
  };

  const activeCategoryIndex = activeIndex !== null ? domainToCategory[radarData[activeIndex].domain] : null;

  return (
    <section id="skills" className="py-20 px-6">
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
            My{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Technologies and tools I work with to bring ideas to life
          </motion.p>
        </div>

        {/* === Radar + Legend === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <Card className="p-6 md:p-10 bg-white/40 dark:bg-gray-900/60 backdrop-blur-md border-teal-100 dark:border-teal-900/30 shadow-xl overflow-hidden relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Radar */}
              <div className="w-full lg:w-1/2 h-[320px] relative">
                <p className="text-center text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 font-semibold">
                  Hover a domain to explore
                </p>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    data={radarData}
                    onMouseLeave={() => handleDomainHover(null)}
                  >
                    <PolarGrid
                      stroke="rgba(45, 212, 191, 0.12)"
                      strokeDasharray="3 4"
                    />
                    <PolarAngleAxis
                      dataKey="domain"
                      tick={(props) => (
                        <CustomTick
                          {...props}
                          activeIndex={activeIndex}
                          onDomainHover={handleDomainHover}
                        />
                      )}
                    />
                    <Radar
                      name="Domains"
                      dataKey="value"
                      stroke="#2dd4bf"
                      strokeWidth={2}
                      fill="url(#domainGradient)"
                      fillOpacity={0.5}
                      dot={(props) => (
                        <CustomDot {...props} activeIndex={activeIndex} />
                      )}
                    />
                    <defs>
                      <radialGradient id="domainGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.85} />
                        <stop offset="100%" stopColor="#2dd4bf" stopOpacity={0.1} />
                      </radialGradient>
                    </defs>
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="w-full lg:w-1/2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-5">
                  Expertise Domains
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {skillCategories.map((cat, i) => {
                    const domain = Object.keys(domainToCategory).find(
                      (k) => domainToCategory[k] === i
                    );
                    const domainIdx = radarData.findIndex((d) => d.domain === domain);
                    const isActive = activeIndex === domainIdx;
                    return (
                      <motion.div
                        key={i}
                        onMouseEnter={() => handleDomainHover(isActive ? null : domainIdx)}
                        onMouseLeave={() => handleDomainHover(null)}
                        whileHover={{ scale: 1.04 }}
                        className={`flex items-center gap-2.5 rounded-lg px-3 py-2 transition-all duration-200 cursor-default ${
                          isActive
                            ? `bg-gradient-to-r ${cat.activeColor} border ${cat.border} shadow-lg ${cat.glow}`
                            : "hover:bg-gray-100 dark:hover:bg-gray-800/60 border border-transparent"
                        }`}
                      >
                        <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${cat.dot} ${isActive ? "shadow-lg" : ""}`} />
                        <span
                          className={`text-sm font-medium transition-colors ${
                            isActive
                              ? "text-gray-900 dark:text-white"
                              : "text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          {cat.title}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Active domain detail */}
                <AnimatePresence mode="wait">
                  {activeCategoryIndex !== null ? (
                    <motion.div
                      key={activeCategoryIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="mt-5 p-4 rounded-xl bg-teal-50/60 dark:bg-teal-900/20 border border-teal-200/40 dark:border-teal-800/40"
                    >
                      <p className="text-xs font-bold text-teal-500 uppercase tracking-wider mb-2">
                        {skillCategories[activeCategoryIndex].title}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skillCategories[activeCategoryIndex].skills.map((s, si) => (
                          <motion.span
                            key={si}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: si * 0.05 }}
                            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white dark:bg-gray-800 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-700 shadow-sm"
                          >
                            {s}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="hint"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-5 p-4 rounded-xl bg-teal-50/60 dark:bg-teal-900/20 border border-teal-200/40 dark:border-teal-800/40"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        A full-stack, cross-platform developer spanning{" "}
                        <span className="text-teal-600 dark:text-teal-400 font-semibold">
                          mobile, web, AI & design
                        </span>{" "}
                        — building elegant solutions from end to end.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* === Skill Category Cards === */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const isActive = activeCategoryIndex === index;
            return (
              <motion.div
                id={`skill-card-${index}`}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                animate={isActive ? { scale: 1.03 } : { scale: 1 }}
                onMouseEnter={() => {
                  const domain = Object.keys(domainToCategory).find(
                    (k) => domainToCategory[k] === index
                  );
                  const domainIdx = radarData.findIndex((d) => d.domain === domain);
                  handleDomainHover(domainIdx);
                }}
                onMouseLeave={() => handleDomainHover(null)}
              >
                <Card
                  className={`p-6 h-full transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm overflow-hidden relative ${
                    isActive
                      ? `border-2 ${category.border} shadow-xl ${category.glow} shadow-2xl`
                      : "border-teal-100 dark:border-teal-900/20 hover:shadow-xl hover:-translate-y-1"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      isActive ? category.activeColor : category.color
                    } ${
                      isActive ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-500 pointer-events-none`}
                  />

                  <div className="flex items-center mb-5">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl mr-4 shadow-lg`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                      {category.title}
                    </h3>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="ml-auto text-xs font-bold text-teal-500 bg-teal-50 dark:bg-teal-900/30 px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-700"
                      >
                        Active
                      </motion.span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, si) => (
                      <motion.span
                        key={si}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + si * 0.04 }}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 hover:scale-110 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* === Stats Row === */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { value: "4+", label: "Projects Completed", gradient: "from-teal-500 to-cyan-500" },
            { value: "15+", label: "Technologies Learned", gradient: "from-cyan-500 to-sky-500" },
            { value: "2027", label: "Expected Graduation", gradient: "from-teal-500 to-emerald-500" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-teal-50/80 to-cyan-50/80 dark:from-teal-900/20 dark:to-cyan-900/20 border-teal-200/50 dark:border-teal-800/50">
                <div className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

