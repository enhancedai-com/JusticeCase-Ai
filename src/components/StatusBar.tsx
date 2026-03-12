import React from 'react';
import { ActivityIcon, CpuIcon, UsersIcon } from 'lucide-react';
export function StatusBar() {
  return (
    <div className="h-8 bg-navy-900 border-t border-white/10 flex items-center justify-between px-4 shrink-0 font-mono text-xs text-slate-400 z-20">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <CpuIcon className="w-3.5 h-3.5" />
          <span>AI Model: Qwen 3.5 (8B-Instruct)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-500">Status: Online</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <ActivityIcon className="w-3.5 h-3.5" />
          <span>Latency: 42ms</span>
        </div>
        <div className="flex items-center gap-2">
          <UsersIcon className="w-3.5 h-3.5" />
          <span>Users Active: 3</span>
        </div>
        <div>
          <span>SECURE CONNECTION</span>
        </div>
      </div>
    </div>);

}