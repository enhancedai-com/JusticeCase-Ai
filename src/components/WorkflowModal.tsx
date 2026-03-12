import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XIcon,
  FileTextIcon,
  CheckIcon,
  ChevronRightIcon,
  SparklesIcon } from
'lucide-react';
import { Document } from '../lib/mockData';
interface WorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  documents: Document[];
}
export function WorkflowModal({
  isOpen,
  onClose,
  documents
}: WorkflowModalProps) {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setIsComplete(true);
    }, 3000);
  };
  const resetAndClose = () => {
    setStep(1);
    setIsGenerating(false);
    setIsComplete(false);
    onClose();
  };
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm"
          onClick={resetAndClose} />
        

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          className="relative w-full max-w-3xl bg-navy-800 border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
          
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10 bg-navy-900 shrink-0">
            <div className="flex items-center gap-3">
              <div className="bg-gold-500/20 p-2 rounded-lg">
                <FileTextIcon className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Case Summarization
                </h2>
                <p className="text-xs text-slate-400 font-mono">
                  WORKFLOW: SUMMARIZE_V2
                </p>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-navy-700 rounded-lg transition-colors">
              
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {!isGenerating && !isComplete &&
            <div className="space-y-8">
                {/* Step 1 */}
                <div
                className={`transition-opacity ${step < 1 ? 'opacity-50 pointer-events-none' : ''}`}>
                
                  <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-navy-600 text-xs flex items-center justify-center border border-white/10">
                      1
                    </span>
                    Select Documents to Include
                  </h3>
                  <div className="bg-navy-900 border border-white/10 rounded-lg p-4 space-y-2 max-h-48 overflow-y-auto">
                    <label className="flex items-center gap-3 p-2 hover:bg-navy-800 rounded cursor-pointer border-b border-white/5 pb-3 mb-1">
                      <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded border-slate-500 text-gold-500 focus:ring-gold-500/50 bg-navy-700" />
                    
                      <span className="text-sm font-medium text-white">
                        Select All ({documents.length})
                      </span>
                    </label>
                    {documents.map((doc) =>
                  <label
                    key={doc.id}
                    className="flex items-center gap-3 p-2 hover:bg-navy-800 rounded cursor-pointer">
                    
                        <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded border-slate-500 text-gold-500 focus:ring-gold-500/50 bg-navy-700" />
                    
                        <span className="text-sm font-mono text-slate-300">
                          {doc.name}
                        </span>
                      </label>
                  )}
                  </div>
                </div>

                {/* Step 2 */}
                <div
                className={`transition-opacity ${step < 2 ? 'opacity-50 pointer-events-none' : ''}`}>
                
                  <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-navy-600 text-xs flex items-center justify-center border border-white/10">
                      2
                    </span>
                    Summary Format
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                  'Narrative (3-5 pages)',
                  'Bullet Points',
                  'Court Filing Format'].
                  map((fmt, i) =>
                  <label
                    key={fmt}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border cursor-pointer transition-colors ${i === 1 ? 'bg-navy-700 border-gold-500/50 text-white' : 'bg-navy-900 border-white/10 text-slate-400 hover:border-white/30'}`}>
                    
                        <input
                      type="radio"
                      name="format"
                      className="sr-only"
                      defaultChecked={i === 1} />
                    
                        <span className="text-sm font-medium text-center">
                          {fmt}
                        </span>
                      </label>
                  )}
                  </div>
                </div>

                {/* Step 3 */}
                <div
                className={`transition-opacity ${step < 3 ? 'opacity-50 pointer-events-none' : ''}`}>
                
                  <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-navy-600 text-xs flex items-center justify-center border border-white/10">
                      3
                    </span>
                    Focus Areas (Optional)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                  'Key Facts',
                  'Timeline',
                  'People & Entities',
                  'Evidence Summary',
                  'Gaps & Issues'].
                  map((area, i) =>
                  <label
                    key={area}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border cursor-pointer transition-colors ${i < 3 ? 'bg-gold-500/10 border-gold-500/30 text-gold-400' : 'bg-navy-900 border-white/10 text-slate-400 hover:border-white/30'}`}>
                    
                        <input
                      type="checkbox"
                      className="sr-only"
                      defaultChecked={i < 3} />
                    
                        <span className="text-xs font-medium">{area}</span>
                        {i < 3 && <CheckIcon className="w-3 h-3" />}
                      </label>
                  )}
                  </div>
                </div>
              </div>
            }

            {isGenerating &&
            <div className="flex flex-col items-center justify-center h-64 space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-navy-700 rounded-full"></div>
                  <div className="w-16 h-16 border-4 border-gold-500 rounded-full border-t-transparent animate-spin absolute inset-0"></div>
                  <SparklesIcon className="w-6 h-6 text-gold-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Synthesizing Documents...
                  </h3>
                  <p className="text-sm text-slate-400 font-mono">
                    Processing 14 files • Extracting entities
                  </p>
                </div>
              </div>
            }

            {isComplete &&
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-green-500 mb-4">
                  <CheckIcon className="w-5 h-5" />
                  <span className="font-semibold">
                    Summary Generated Successfully
                  </span>
                </div>
                <div className="bg-navy-900 border border-white/10 rounded-lg p-5 prose prose-invert prose-sm max-w-none font-sans">
                  <h3 className="text-white">
                    Executive Summary: State v. Martinez
                  </h3>
                  <p>
                    Based on the analysis of 14 documents, including financial
                    records and wiretap transcripts, the following key points
                    have been identified:
                  </p>
                  <ul>
                    <li>
                      <strong>Financial Anomalies:</strong> 14 structured
                      deposits identified between July 15 and August 2.
                    </li>
                    <li>
                      <strong>Entity Links:</strong> Direct connection
                      established to Apex Holdings LLC via wiretap transcript
                      (Oct 12).
                    </li>
                    <li>
                      <strong>Flight Risk:</strong> Rapid liquidation of assets
                      observed on September 28.
                    </li>
                  </ul>
                  <p className="text-xs text-slate-500 italic mt-4 pt-4 border-t border-white/10">
                    AI output requires human review before use in legal
                    proceedings
                  </p>
                </div>
              </div>
            }
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-white/10 bg-navy-900 shrink-0 flex justify-between items-center">
            {!isGenerating && !isComplete ?
            <>
                <button
                onClick={resetAndClose}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                
                  Cancel
                </button>
                <div className="flex gap-3">
                  {step < 3 ?
                <button
                  onClick={() => setStep((s) => s + 1)}
                  className="px-4 py-2 bg-navy-700 hover:bg-navy-600 text-white text-sm font-medium rounded flex items-center gap-2 transition-colors">
                  
                      Next Step <ChevronRightIcon className="w-4 h-4" />
                    </button> :

                <button
                  onClick={handleGenerate}
                  className="px-6 py-2 bg-gold-500 hover:bg-gold-600 text-navy-900 text-sm font-bold rounded shadow-lg shadow-gold-500/20 flex items-center gap-2 transition-colors">
                  
                      <SparklesIcon className="w-4 h-4" /> Generate Summary
                    </button>
                }
                </div>
              </> :
            isComplete ?
            <>
                <button
                onClick={resetAndClose}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                
                  Close
                </button>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-navy-700 hover:bg-navy-600 text-white text-sm font-medium rounded transition-colors">
                    Copy to Clipboard
                  </button>
                  <button
                  onClick={resetAndClose}
                  className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-navy-900 text-sm font-bold rounded transition-colors">
                  
                    Add to Session Outputs
                  </button>
                </div>
              </> :

            <div className="w-full text-center text-sm text-slate-500 font-mono">
                Please wait while the AI processes the request...
              </div>
            }
          </div>
        </motion.div>
      </div>
    </AnimatePresence>);

}