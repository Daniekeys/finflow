"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  ChevronRight,
  TrendingUp,
  Download,
  LucideIcon,
  RefreshCcw,
} from "lucide-react";

// =========================================
// 1. CONFIGURATION & DATA TYPES
// =========================================

export type ProductId = "mobile" | "web";

export interface FeatureMetric {
  label: string;
  value: number; // 0-100
  icon: LucideIcon;
}

export interface ProductData {
  id: ProductId;
  label: string; 
  title: string;
  description: string;
  image: string;
  colors: {
    gradient: string; 
    glow: string;     
    ring: string;     
  };
  stats: {
    connectionStatus: string;
    serverUptime: number;
  };
  features: FeatureMetric[];
}

const PRODUCT_DATA: Record<ProductId, ProductData> = {
  mobile: {
    id: "mobile",
    label: "Mobile App",
    title: "FinFlow Mobile",
    description: "The primary node for your finances on the go. Handles low-latency remote transfers and anchors your transaction alerts instantly.",
    image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80&w=800&h=800",
    colors: {
      gradient: "from-blue-600 to-indigo-900",
      glow: "bg-blue-500",
      ring: "border-l-blue-500/50",
    },
    stats: { connectionStatus: "Synced", serverUptime: 99 },
    features: [
      { label: "Transfer Speed", value: 95, icon: Zap },
      { label: "Alert Sync Rate", value: 98, icon: RefreshCcw },
    ],
  },
  web: {
    id: "web",
    label: "Web Dashboard",
    title: "Real-time Analytics",
    description: "Optimized for high-density data visualization and detailed cash flow tracking. Complete with exportable CSV ledgers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=800",
    colors: {
      gradient: "from-slate-600 to-slate-900",
      glow: "bg-slate-500",
      ring: "border-r-slate-500/50",
    },
    stats: { connectionStatus: "Secure", serverUptime: 99 },
    features: [
      { label: "Data density", value: 94, icon: TrendingUp },
      { label: "Export Speed", value: 88, icon: Download },
    ],
  },
};

// =========================================
// 2. ANIMATION VARIANTS
// =========================================

const ANIMATIONS: any = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { opacity: 0, y: -10, filter: "blur(5px)" },
  },
  image: (isLeft: boolean): any => ({
    initial: {
      opacity: 0,
      scale: 1.5,
      filter: "blur(15px)",
      rotate: isLeft ? -10 : 10,
      x: isLeft ? -40 : 40,
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      rotate: 0,
      x: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(20px)",
      transition: { duration: 0.25 },
    },
  }),
};

// =========================================
// 3. SUB-COMPONENTS
// =========================================

const BackgroundGradient = ({ isLeft }: { isLeft: boolean }) => (
  <div className="fixed inset-0 pointer-events-none">
    <motion.div
      animate={{
        background: isLeft
          ? "radial-gradient(circle at 0% 50%, rgba(37, 99, 235, 0.15), transparent 50%)"   // blue-600
          : "radial-gradient(circle at 100% 50%, rgba(71, 85, 105, 0.15), transparent 50%)", // slate-600
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 dark:block hidden"
    />
  </div>
);

const ProductVisual = ({ data, isLeft }: { data: ProductData; isLeft: boolean }) => (
  <motion.div layout="position" className="relative group shrink-0">
    {/* Animated Rings */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={`absolute inset-[-20%] rounded-full border border-dashed border-slate-300 dark:border-white/10 ${data.colors.ring}`}
    />
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute inset-0 rounded-full bg-gradient-to-br ${data.colors.gradient} blur-2xl opacity-40`}
    />

    {/* Image Container */}
    <div className="relative h-80 w-80 md:h-[450px] md:w-[450px] rounded-full border border-slate-200 dark:border-white/5 shadow-2xl flex items-center justify-center overflow-hidden bg-white dark:bg-black/20 backdrop-blur-sm">
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={data.id}
            src={data.image}
            alt={`${data.title}`}
            variants={ANIMATIONS.image(isLeft)}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full object-cover rounded-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-4"
            draggable={false}
          />
        </AnimatePresence>
      </motion.div>
    </div>

    {/* Status Label */}
    <motion.div
      layout="position"
      className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950/80 px-4 py-2 rounded-full border border-slate-200 dark:border-white/5 backdrop-blur shadow-sm">
        <span className={`h-1.5 w-1.5 rounded-full ${data.colors.glow} animate-pulse`} />
        {data.stats.connectionStatus}
      </div>
    </motion.div>
  </motion.div>
);

const ProductDetails = ({ data, isLeft }: { data: ProductData; isLeft: boolean }) => {
  const alignClass = isLeft ? "items-start text-left" : "items-end text-right";
  const flexDirClass = isLeft ? "flex-row" : "flex-row-reverse";
  const barColorClass = isLeft ? "left-0 bg-blue-600" : "right-0 bg-slate-600";

  return (
    <motion.div
      variants={ANIMATIONS.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col ${alignClass}`}
    >
      <motion.h2 variants={ANIMATIONS.item} className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-slate-400 mb-2">
        {data.label} Platform
      </motion.h2>
      <motion.h1 variants={ANIMATIONS.item} className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
        {data.title}
      </motion.h1>
      <motion.p variants={ANIMATIONS.item} className={`text-slate-600 dark:text-slate-400 mb-8 max-w-sm leading-relaxed ${isLeft ? "mr-auto" : "ml-auto"}`}>
        {data.description}
      </motion.p>

      {/* Feature Grid */}
      <motion.div variants={ANIMATIONS.item} className="w-full space-y-6 bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-white/5 backdrop-blur-sm shadow-sm">
        {data.features.map((feature, idx) => (
          <div key={feature.label} className="group">
            <div className={`flex items-center justify-between mb-3 text-sm ${flexDirClass}`}>
              <div className={`flex items-center gap-2 text-slate-700 dark:text-slate-300`}>
                <feature.icon size={16} /> <span className="font-semibold">{feature.label}</span>
              </div>
              <span className="font-mono text-xs text-slate-500 font-medium">{feature.value}%</span>
            </div>
            <div className="relative h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${feature.value}%` }}
                transition={{ duration: 1, delay: 0.4 + idx * 0.15 }}
                className={`absolute top-0 bottom-0 ${barColorClass} opacity-90`}
              />
            </div>
          </div>
        ))}

        <div className={`pt-4 flex ${isLeft ? "justify-start" : "justify-end"}`}>
          <button type="button" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
            <ShieldCheck size={14} /> View Security Specs
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      {/* Battery / Status */}
      <motion.div variants={ANIMATIONS.item} className={`mt-6 flex items-center gap-3 text-slate-500 dark:text-slate-500 ${flexDirClass}`}>
        <Zap size={16} className="text-blue-500" />
        <span className="text-sm font-medium">{data.stats.serverUptime}.99% Uptime SLA</span>
      </motion.div>
    </motion.div>
  );
};

const Switcher = ({ 
  activeId, 
  onToggle 
}: { 
  activeId: ProductId; 
  onToggle: (id: ProductId) => void 
}) => {
  const options = Object.values(PRODUCT_DATA).map(p => ({ id: p.id, label: p.label }));

  return (
    <div className="fixed bottom-12 inset-x-0 flex justify-center z-50 pointer-events-none">
      <motion.div layout className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-white dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-slate-100 dark:ring-white/5">
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            onClick={() => onToggle(opt.id)}
            whileTap={{ scale: 0.96 }}
            className="relative w-32 h-12 rounded-full flex items-center justify-center text-sm font-semibold focus:outline-none"
          >
            {activeId === opt.id && (
              <motion.div
                layoutId="island-surface"
                className="absolute inset-0 rounded-full bg-blue-50 dark:bg-white/10 shadow-inner border border-blue-100 dark:border-transparent"
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-300 ${activeId === opt.id ? "text-blue-700 dark:text-white" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"}`}>
              {opt.label}
            </span>
            {activeId === opt.id && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-1 h-1 w-6 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

// =========================================
// 4. MAIN COMPONENT
// =========================================

export default function SpatialProductShowcase() {
  const [activeSide, setActiveSide] = useState<ProductId>("mobile");
  
  const currentData = PRODUCT_DATA[activeSide];
  const isLeft = activeSide === "mobile";

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden selection:bg-blue-500/30 flex flex-col items-center justify-center pt-20">
      
      <BackgroundGradient isLeft={isLeft} />

      <main className="relative z-10 w-full px-6 py-8 flex flex-col justify-center max-w-7xl mx-auto">
        <motion.div
          layout
          transition={{ type: "spring", bounce: 0, duration: 0.9 }}
          className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 lg:gap-48 w-full ${
            isLeft ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Left Column: Visuals */}
          <ProductVisual data={currentData} isLeft={isLeft} />

          {/* Right Column: Content */}
          <motion.div layout="position" className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <ProductDetails 
                key={activeSide} 
                data={currentData} 
                isLeft={isLeft} 
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>

      <Switcher activeId={activeSide} onToggle={setActiveSide} />
    </div>
  );
}
