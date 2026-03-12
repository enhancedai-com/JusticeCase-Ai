import React from 'react';
import {
  CpuIcon,
  HardDriveIcon,
  UsersIcon,
  ShieldCheckIcon } from
'lucide-react';
import { mockUsers } from '../lib/mockData';
interface SettingsProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}
export function Settings({ isDarkMode, onToggleTheme }: SettingsProps) {
  return (
    <div className="flex-1 overflow-auto p-8 bg-navy-800">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">
            System Settings & Administration
          </h2>
          <p className="text-slate-400">
            Manage AI models, view system status, and configure access policies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* System Status Panel */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-navy-900 border border-white/10 rounded-lg p-5 flex items-center gap-4">
              <div className="p-3 bg-navy-800 rounded-lg border border-white/5">
                <CpuIcon className="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">
                  GPU Utilization
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white font-mono">
                    64%
                  </span>
                  <span className="text-xs text-green-500">Optimal</span>
                </div>
              </div>
            </div>
            <div className="bg-navy-900 border border-white/10 rounded-lg p-5 flex items-center gap-4">
              <div className="p-3 bg-navy-800 rounded-lg border border-white/5">
                <HardDriveIcon className="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">
                  Active Model
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-white font-mono">
                    Qwen 3.5 (8B)
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-navy-900 border border-white/10 rounded-lg p-5 flex items-center gap-4">
              <div className="p-3 bg-navy-800 rounded-lg border border-white/5">
                <UsersIcon className="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">
                  Active Sessions
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white font-mono">
                    12
                  </span>
                  <span className="text-xs text-slate-400">across 3 users</span>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="bg-navy-700 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-gold-500" />
                Security & Policies
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    AI Model Selection
                  </label>
                  <select className="w-full bg-navy-900 border border-white/10 rounded-md py-2 px-3 text-sm text-white focus:outline-none focus:border-gold-500 font-mono">
                    <option>Qwen 3.5 (8B-Instruct)</option>
                    <option>Llama 3.1 (8B)</option>
                    <option>Mistral Nemo (12B)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Session Retention
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      defaultValue={24}
                      className="w-20 bg-navy-900 border border-white/10 rounded-md py-2 px-3 text-sm text-white focus:outline-none focus:border-gold-500 font-mono" />
                    
                    <span className="text-sm text-slate-400">
                      hours of inactivity
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <label
                    className="flex items-center justify-between cursor-pointer"
                    onClick={onToggleTheme}>
                    
                    <div>
                      <span className="text-sm font-medium text-slate-300">
                        Appearance
                      </span>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {isDarkMode ? 'Dark mode active' : 'Light mode active'}
                      </p>
                    </div>
                    <div className="relative">
                      <div
                        className={`block w-10 h-6 rounded-full transition-colors ${isDarkMode ? 'bg-gold-500' : 'bg-navy-500'}`}>
                      </div>
                      <div
                        className={`dot absolute left-1 top-1 bg-navy-900 w-4 h-4 rounded-full transition-transform ${isDarkMode ? 'translate-x-4' : 'translate-x-0'}`}>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* User Management */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-navy-700 border border-white/10 rounded-lg overflow-hidden flex flex-col h-full">
              <div className="p-5 border-b border-white/10 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  User Management
                </h3>
                <button className="text-sm bg-navy-600 hover:bg-navy-500 text-white px-3 py-1.5 rounded transition-colors border border-white/5">
                  Add User
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-navy-800/50 text-slate-400 font-mono text-xs uppercase">
                    <tr>
                      <th className="px-5 py-3 font-medium">Name</th>
                      <th className="px-5 py-3 font-medium">Role</th>
                      <th className="px-5 py-3 font-medium">Last Active</th>
                      <th className="px-5 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {mockUsers.map((user) =>
                    <tr
                      key={user.id}
                      className="hover:bg-navy-800/30 transition-colors">
                      
                        <td className="px-5 py-3 font-medium text-white">
                          {user.name}
                        </td>
                        <td className="px-5 py-3 text-slate-300">
                          {user.role}
                        </td>
                        <td className="px-5 py-3 text-slate-400 font-mono text-xs">
                          {user.lastActive}
                        </td>
                        <td className="px-5 py-3">
                          <span className="flex items-center gap-1.5">
                            <span
                            className={`w-2 h-2 rounded-full ${user.status === 'online' ? 'bg-green-500' : user.status === 'away' ? 'bg-gold-500' : 'bg-slate-500'}`}>
                          </span>
                            <span className="text-slate-300 capitalize text-xs">
                              {user.status}
                            </span>
                          </span>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}