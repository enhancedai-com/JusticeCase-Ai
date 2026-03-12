import React, { useState } from 'react';
import {
  UploadIcon,
  FileIcon,
  TrashIcon,
  AlertTriangleIcon,
  CheckIcon,
  CircleIcon } from
'lucide-react';
import { Document } from '../lib/mockData';
interface DocumentDockProps {
  documents: Document[];
  onUpload: () => void;
}
export function DocumentDock({ documents, onUpload }: DocumentDockProps) {
  const [sessionTitle, setSessionTitle] = useState(
    'State v. Martinez — Financial Records Review'
  );
  const processedCount = documents.filter(
    (d) => d.status === 'processed'
  ).length;
  return (
    <div className="w-64 bg-navy-900 border-r border-white/10 flex flex-col h-full shrink-0">
      {/* Header */}
      <div className="p-4 border-b border-white/10 shrink-0">
        <input
          type="text"
          value={sessionTitle}
          onChange={(e) => setSessionTitle(e.target.value)}
          className="w-full bg-transparent text-white font-semibold text-sm border-b border-transparent hover:border-white/20 focus:border-gold-500 focus:outline-none pb-1 transition-colors" />
        
        <div className="mt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="bg-navy-700 px-1.5 py-0.5 rounded text-gold-400">
            SESSION ID: 8829A
          </span>
        </div>
      </div>

      {/* Upload Zone */}
      <div className="p-4 shrink-0">
        <button
          onClick={onUpload}
          className="w-full bg-navy-700 hover:bg-navy-600 border border-dashed border-slate-500 hover:border-gold-500 text-slate-300 hover:text-white rounded-lg p-4 flex flex-col items-center justify-center gap-2 transition-all group">
          
          <div className="bg-navy-800 p-2 rounded-full group-hover:bg-gold-500/20 transition-colors">
            <UploadIcon className="w-5 h-5 group-hover:text-gold-500" />
          </div>
          <span className="text-sm font-medium">Upload Documents</span>
          <span className="text-[10px] text-slate-500 text-center">
            PDF, CSV, TXT, JSON
          </span>
        </button>
      </div>

      {/* Document List */}
      <div className="flex-1 overflow-y-auto px-2 pb-4">
        <div className="px-2 mb-2 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>FILES ({documents.length})</span>
          <span className="text-green-500">{processedCount} ready</span>
        </div>

        <div className="space-y-1">
          {documents.map((doc) =>
          <div
            key={doc.id}
            className="flex items-start gap-2 p-2 rounded hover:bg-navy-800 group transition-colors">
            
              <div className="mt-0.5 shrink-0">
                {doc.status === 'processed' &&
              <CheckIcon className="w-3.5 h-3.5 text-green-500" />
              }
                {doc.status === 'processing' &&
              <CircleIcon className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
              }
                {doc.status === 'error' &&
              <AlertTriangleIcon className="w-3.5 h-3.5 text-red-500" />
              }
              </div>
              <div className="flex-1 min-w-0">
                <p
                className="text-xs font-mono text-slate-200 truncate"
                title={doc.name}>
                
                  {doc.name}
                </p>
                <p className="text-[10px] font-mono text-slate-500">
                  {doc.size} • {doc.type.toUpperCase()}
                </p>
              </div>
              <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-navy-700 rounded text-slate-400 hover:text-red-400 transition-all shrink-0">
                <TrashIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {documents.length === 0 &&
          <div className="text-center p-4 mt-4 text-slate-500 text-sm">
              <FileIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Drop case files here to begin analysis</p>
            </div>
          }
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-white/10 shrink-0">
        <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded border border-red-500/30 text-red-400 hover:bg-red-500/10 text-sm font-medium transition-colors">
          <TrashIcon className="w-4 h-4" />
          Clear Session
        </button>
      </div>
    </div>);

}