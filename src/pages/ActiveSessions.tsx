import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SearchIcon,
  FilterIcon,
  PlayIcon,
  DownloadIcon,
  ArchiveIcon,
  FileTextIcon,
  ClockIcon,
  PlusIcon,
  FolderOpenIcon } from
'lucide-react';
import { mockSessions, Session } from '../lib/mockData';
interface ActiveSessionsProps {
  onOpenSession: (id?: string) => void;
}
export function ActiveSessions({ onOpenSession }: ActiveSessionsProps) {
  const [filter, setFilter] = useState<
    'all' | 'active' | 'closed' | 'exported'>(
    'all');
  const [search, setSearch] = useState('');
  const filtered = mockSessions.filter((s) => {
    const matchesFilter = filter === 'all' || s.status === filter;
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  const statusColor = (status: Session['status']) => {
    switch (status) {
      case 'active':
        return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'closed':
        return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
      case 'exported':
        return 'text-gold-500 bg-gold-500/10 border-gold-500/20';
    }
  };
  const statusDot = (status: Session['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'closed':
        return 'bg-slate-500';
      case 'exported':
        return 'bg-gold-500';
    }
  };
  const counts = {
    all: mockSessions.length,
    active: mockSessions.filter((s) => s.status === 'active').length,
    closed: mockSessions.filter((s) => s.status === 'closed').length,
    exported: mockSessions.filter((s) => s.status === 'exported').length
  };
  return (
    <div className="flex-1 overflow-auto p-8 bg-navy-800">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Active Sessions
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Manage and resume your case analysis sessions
            </p>
          </div>
          <button
            onClick={() => onOpenSession()}
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-gold-500/20">
            
            <PlusIcon className="w-4 h-4" />
            New Session
          </button>
        </div>

        {/* Filters & Search */}
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-navy-900 rounded-lg border border-white/10 p-1">
            {(['all', 'active', 'closed', 'exported'] as const).map((f) =>
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${filter === f ? 'bg-navy-700 text-white' : 'text-slate-400 hover:text-white'}`}>
              
                {f} ({counts[f]})
              </button>
            )}
          </div>
          <div className="relative flex-1 max-w-sm">
            <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search sessions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-navy-900 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-500/50 font-mono" />
            
          </div>
        </div>

        {/* Sessions Table */}
        <div className="bg-navy-700 border border-white/10 rounded-lg overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy-900/50 text-slate-400 font-mono text-xs uppercase border-b border-white/10">
              <tr>
                <th className="px-5 py-3 font-medium">Case Name</th>
                <th className="px-5 py-3 font-medium">Date Opened</th>
                <th className="px-5 py-3 font-medium">Documents</th>
                <th className="px-5 py-3 font-medium">Last Activity</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((session, i) =>
              <motion.tr
                key={session.id}
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                transition={{
                  delay: i * 0.03
                }}
                className="hover:bg-navy-800/40 transition-colors group">
                
                  <td className="px-5 py-4">
                    <button
                    onClick={() => onOpenSession(session.id)}
                    className="text-white font-medium hover:text-gold-400 transition-colors text-left">
                    
                      {session.name}
                    </button>
                  </td>
                  <td className="px-5 py-4 text-slate-400 font-mono text-xs">
                    {new Date(session.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                    <span className="text-slate-500 ml-1">
                      {new Date(session.date).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="flex items-center gap-1.5 text-slate-300 font-mono text-xs">
                      <FileTextIcon className="w-3.5 h-3.5 text-slate-400" />
                      {session.documentCount}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-slate-400 text-xs font-mono">
                    {session.lastActivity}
                  </td>
                  <td className="px-5 py-4">
                    <span
                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium border capitalize ${statusColor(session.status)}`}>
                    
                      <span
                      className={`w-1.5 h-1.5 rounded-full ${statusDot(session.status)} ${session.status === 'active' ? 'animate-pulse' : ''}`} />
                    
                      {session.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                      onClick={() => onOpenSession(session.id)}
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-navy-600 rounded transition-colors"
                      title="Resume">
                      
                        <PlayIcon className="w-4 h-4" />
                      </button>
                      <button
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-navy-600 rounded transition-colors"
                      title="Export">
                      
                        <DownloadIcon className="w-4 h-4" />
                      </button>
                      <button
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-navy-600 rounded transition-colors"
                      title="Archive">
                      
                        <ArchiveIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              )}
            </tbody>
          </table>

          {filtered.length === 0 &&
          <div className="flex flex-col items-center justify-center py-16 text-slate-500">
              <FolderOpenIcon className="w-10 h-10 mb-3 opacity-50" />
              <p className="font-medium">No sessions found</p>
              <p className="text-xs mt-1">
                Try adjusting your search or filter
              </p>
            </div>
          }
        </div>

        {/* Summary Footer */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-1">
          <span>
            Showing {filtered.length} of {mockSessions.length} sessions
          </span>
          <span>
            Session data retained per policy (24h inactivity auto-close)
          </span>
        </div>
      </div>
    </div>);

}