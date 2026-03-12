import React from 'react';
import { ShieldCheckIcon, UserIcon, MoonIcon, SunIcon } from 'lucide-react';
import { motion } from 'framer-motion';
interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}
export function Header({ isDarkMode, onToggleTheme }: HeaderProps) {
  return (
    <header className="h-14 bg-navy-800/90 backdrop-blur border-b border-white/10 flex items-center justify-between px-6 shrink-0 z-10">
      <div className="flex items-center gap-3">
        <div className="bg-navy-900 p-1.5 rounded border border-white/10">
          <ShieldCheckIcon className="w-5 h-5 text-gold-500" />
        </div>
        <h1 className="font-semibold text-lg tracking-tight text-white">
          Ace Justice AI
        </h1>
        <span className="px-2 py-0.5 rounded-full bg-navy-700 border border-white/10 text-xs text-slate-400 ml-2 font-mono">
          SECURE ENCLAVE
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          className="relative flex items-center w-14 h-7 rounded-full border border-white/10 bg-navy-900 p-0.5 transition-colors hover:border-white/20"
          aria-label={
          isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
          }>
          
          <motion.div
            className="w-6 h-6 rounded-full flex items-center justify-center bg-gold-500 shadow-md shadow-gold-500/30"
            animate={{
              x: isDarkMode ? 0 : 26
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 25
            }}>
            
            {isDarkMode ?
            <MoonIcon className="w-3.5 h-3.5 text-navy-900" /> :

            <SunIcon className="w-3.5 h-3.5 text-navy-900" />
            }
          </motion.div>
        </button>

        {/* User Badge */}
        <div className="flex items-center gap-3 bg-navy-900 py-1.5 px-3 rounded-full border border-white/10">
          <div className="w-6 h-6 rounded-full bg-navy-700 flex items-center justify-center border border-white/20">
            <UserIcon className="w-3.5 h-3.5 text-slate-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-none text-white">
              J. Stauffer
            </span>
            <span className="text-[10px] text-gold-500 font-mono mt-0.5">
              ANALYST L3
            </span>
          </div>
        </div>
      </div>
    </header>);

}