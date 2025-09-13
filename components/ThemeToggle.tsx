'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-orange-300 via-yellow-300 to-orange-400 dark:from-indigo-600 dark:via-purple-600 dark:to-blue-800 p-1 shadow-lg hover:shadow-xl transition-shadow duration-300 group overflow-hidden animate-float"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, rotate: -180 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-300/40 via-yellow-300/40 to-orange-400/40 dark:from-indigo-600/40 dark:via-purple-600/40 dark:to-blue-800/40 blur-md group-hover:blur-lg transition-all duration-300 animate-glow" />
      
      {/* Inner Circle */}
      <div className="relative w-full h-full rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm flex items-center justify-center overflow-hidden">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-indigo-900 dark:to-purple-900 animate-pulse" />
          <div className="absolute top-1 right-1 w-2 h-2 bg-orange-300 dark:bg-indigo-400 rounded-full animate-twinkle" />
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-yellow-400 dark:bg-purple-400 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-orange-400 dark:bg-blue-400 rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
        </div>

        {/* Icon Container */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative"
              >
                {/* Moon Icon */}
                <svg
                  className="w-5 h-5 text-indigo-600 drop-shadow-sm"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                {/* Stars around moon */}
                <div className="absolute -top-1 -right-1 w-1 h-1 bg-indigo-400 rounded-full animate-twinkle" />
                <div className="absolute -bottom-1 -left-1 w-0.5 h-0.5 bg-purple-400 rounded-full animate-twinkle" style={{ animationDelay: '0.3s' }} />
                <div className="absolute top-0 left-0 w-0.5 h-0.5 bg-blue-300 rounded-full animate-twinkle" style={{ animationDelay: '0.8s' }} />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative"
              >
                {/* Sun Icon */}
                <svg
                  className="w-5 h-5 text-orange-500 drop-shadow-sm"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
                {/* Sun rays animation */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 w-0.5 h-1 bg-orange-400 rounded-full -translate-x-0.5 -translate-y-2" />
                  <div className="absolute bottom-0 left-1/2 w-0.5 h-1 bg-orange-400 rounded-full -translate-x-0.5 translate-y-2" />
                  <div className="absolute left-0 top-1/2 w-1 h-0.5 bg-orange-400 rounded-full -translate-y-0.5 -translate-x-2" />
                  <div className="absolute right-0 top-1/2 w-1 h-0.5 bg-orange-400 rounded-full -translate-y-0.5 translate-x-2" />
                </div>
                {/* Sun sparkles */}
                <div className="absolute -top-1 -left-1 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-twinkle" />
                <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-orange-300 rounded-full animate-twinkle" style={{ animationDelay: '0.4s' }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hover ripple effect */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ 
            opacity: 1, 
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
        />

        {/* Rotating border effect */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-orange-300/50 via-transparent to-yellow-300/50 dark:from-indigo-500/50 dark:to-purple-500/50 group-hover:animate-spin-slow" style={{ clipPath: 'inset(0 round 50%)' }} />
      </div>

      {/* Enhanced Tooltip */}
      <motion.div 
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-none"
        initial={{ opacity: 0, y: -10, scale: 0.8 }}
        whileHover={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { duration: 0.2 }
        }}
      >
        <div className="bg-black/90 dark:bg-white/90 text-white dark:text-black text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-medium shadow-lg backdrop-blur-sm">
          <div className="flex items-center space-x-1">
            {isDark ? (
              <>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L13.09 8.26L20 9L14 14.74L15.18 21.02L10 18L4.82 21.02L6 14.74L0 9L6.91 8.26L10 2Z" />
                </svg>
                <span>Light mode</span>
              </>
            ) : (
              <>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <span>Dark mode</span>
              </>
            )}
          </div>
          {/* Tooltip arrow */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 dark:bg-white/90 rotate-45"></div>
        </div>
      </motion.div>
    </motion.button>
  );
};