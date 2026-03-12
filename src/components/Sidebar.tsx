import React from 'react';
import {
  LayoutDashboardIcon,
  FolderOpenIcon,
  GitBranchIcon,
  SettingsIcon,
  ShieldCheckIcon } from
'lucide-react';
import { motion } from 'framer-motion';
interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}
export function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboardIcon
  },
  {
    id: 'active-sessions',
    label: 'Active Sessions',
    icon: FolderOpenIcon
  },
  {
    id: 'workflow-library',
    label: 'Workflow Library',
    icon: GitBranchIcon
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: SettingsIcon
  }];

  return (
    <div className="w-16 hover:w-56 transition-all duration-300 ease-in-out bg-navy-900 border-r border-white/10 flex flex-col h-full z-20 group overflow-hidden shrink-0">
      <div className="h-14 flex items-center justify-center group-hover:justify-start group-hover:px-4 border-b border-white/10 shrink-0">
        <ShieldCheckIcon className="w-6 h-6 text-gold-500 shrink-0" />
        <span className="ml-3 font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ACE JUSTICE
        </span>
      </div>

      <nav className="flex-1 py-4 flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive =
          currentPage === item.id ||
          currentPage === 'session' && item.id === 'active-sessions';
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`relative flex items-center w-full h-12 px-5 transition-colors ${isActive ? 'text-white bg-navy-800' : 'text-slate-400 hover:text-white hover:bg-navy-800/50'}`}>
              
              {isActive &&
              <motion.div
                layoutId="activeNav"
                className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }} />

              }
              <Icon
                className={`w-5 h-5 shrink-0 ${isActive ? 'text-gold-500' : ''}`} />
              
              <span className="ml-4 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </button>);

        })}
      </nav>
    </div>);

}