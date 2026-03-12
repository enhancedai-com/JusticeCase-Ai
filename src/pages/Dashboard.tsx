import React from 'react';
import { motion } from 'framer-motion';
import {
  PlusIcon,
  SearchIcon,
  FileTextIcon,
  PlayIcon,
  DownloadIcon,
  ArchiveIcon,
  ClockIcon } from
'lucide-react';
import { mockSessions, Session } from '../lib/mockData';
interface DashboardProps {
  onOpenSession: (id?: string) => void;
}
export function Dashboard({ onOpenSession }: DashboardProps) {
  const getStatusColor = (status: Session['status']) => {
    switch (status) {
      case 'active':
        return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'closed':
        return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
      case 'exported':
        return 'text-gold-500 bg-gold-500/10 border-gold-500/20';
    }
  };
  return (
    <div className="flex-1 overflow-auto p-8 bg-navy-800">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-12 bg-navy-700 rounded-xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-center z-10">
            
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
              Case Analysis Sessions
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Secure, isolated environments for AI-assisted document review,
              entity extraction, and timeline generation.
            </p>
            <button
              onClick={() => onOpenSession()}
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-6 rounded-lg shadow-lg shadow-gold-500/20 flex items-center gap-2 transition-all transform hover:scale-105">
              
              <PlusIcon className="w-5 h-5" />
              Open New Case Session
            </button>
          </motion.div>
        </div>

        {/* Recent Sessions */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">
              Recent Sessions
            </h3>
            <div className="relative">
              <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search cases..."
                className="bg-navy-900 border border-white/10 rounded-md py-1.5 pl-9 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-500/50 w-64 font-mono" />
              
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockSessions.map((session, i) =>
            <motion.div
              key={session.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: i * 0.05
              }}
              className="bg-navy-700 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors group flex flex-col">
              
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-semibold text-white text-lg leading-tight group-hover:text-gold-400 transition-colors line-clamp-2">
                    {session.name}
                  </h4>
                </div>

                <div className="space-y-2 mb-6 flex-1">
                  <div className="flex items-center gap-2 text-sm text-slate-400 font-mono">
                    <ClockIcon className="w-4 h-4" />
                    <span>
                      Opened: {new Date(session.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400 font-mono">
                    <FileTextIcon className="w-4 h-4" />
                    <span>{session.documentCount} documents</span>
                  </div>
                  <div className="mt-2">
                    <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getStatusColor(session.status)} capitalize`}>
                    
                      {session.status === 'active' &&
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                    }
                      {session.status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                  <button
                  onClick={() => onOpenSession(session.id)}
                  className="flex-1 bg-navy-600 hover:bg-navy-500 text-white text-sm font-medium py-2 rounded transition-colors flex items-center justify-center gap-1.5">
                  
                    <PlayIcon className="w-4 h-4" /> Resume
                  </button>
                  <button
                  className="p-2 text-slate-400 hover:text-white hover:bg-navy-600 rounded transition-colors"
                  title="Export">
                  
                    <DownloadIcon className="w-4 h-4" />
                  </button>
                  <button
                  className="p-2 text-slate-400 hover:text-white hover:bg-navy-600 rounded transition-colors"
                  title="Archive">
                  
                    <ArchiveIcon className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>);

}