import React from 'react';
import { DownloadIcon, CopyIcon, PinIcon, FileTextIcon } from 'lucide-react';
import { Output } from '../lib/mockData';
interface OutputStagingProps {
  outputs: Output[];
}
export function OutputStaging({ outputs }: OutputStagingProps) {
  return (
    <div className="w-80 bg-navy-900 border-l border-white/10 flex flex-col h-full shrink-0">
      <div className="p-4 border-b border-white/10 shrink-0 flex items-center justify-between">
        <h3 className="font-semibold text-white flex items-center gap-2">
          <PinIcon className="w-4 h-4 text-gold-500" /> Session Outputs
        </h3>
        <span className="bg-navy-700 text-slate-300 text-xs px-2 py-0.5 rounded-full font-mono">
          {outputs.length} saved
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {outputs.map((output) =>
        <div
          key={output.id}
          className="bg-navy-800 border border-white/10 rounded-lg p-3 group hover:border-white/20 transition-colors">
          
            <div className="flex items-start justify-between mb-2">
              <input
              type="text"
              defaultValue={output.title}
              className="bg-transparent text-sm font-medium text-white focus:outline-none focus:border-b focus:border-gold-500 w-full mr-2 truncate" />
            
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-navy-700 text-[10px] font-mono text-gold-400 border border-gold-500/20">
                <FileTextIcon className="w-3 h-3" /> {output.workflowType}
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                {output.timestamp}
              </span>
            </div>

            <div className="text-xs text-slate-400 line-clamp-3 mb-3 font-sans">
              {/* Mock content preview */}
              Based on the provided records, there are three primary financial
              anomalies associated with Martinez...
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-navy-700 hover:bg-navy-600 rounded text-xs text-slate-300 transition-colors">
                <CopyIcon className="w-3 h-3" /> Copy
              </button>
              <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-navy-700 hover:bg-navy-600 rounded text-xs text-slate-300 transition-colors">
                <DownloadIcon className="w-3 h-3" /> PDF
              </button>
            </div>
          </div>
        )}

        {outputs.length === 0 &&
        <div className="text-center p-4 text-slate-500 text-sm">
            <PinIcon className="w-6 h-6 mx-auto mb-2 opacity-50" />
            <p>Pin AI responses here to build your final report</p>
          </div>
        }
      </div>

      <div className="p-4 border-t border-white/10 shrink-0 bg-navy-800/50">
        <button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold py-2.5 px-4 rounded shadow-lg shadow-gold-500/10 flex items-center justify-center gap-2 transition-colors">
          <DownloadIcon className="w-4 h-4" />
          Export Session Report (PDF)
        </button>
      </div>
    </div>);

}