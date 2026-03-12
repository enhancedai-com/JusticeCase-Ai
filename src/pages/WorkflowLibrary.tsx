import React from 'react';
import { motion } from 'framer-motion';
import {
  FileTextIcon,
  CalendarIcon,
  ListIcon,
  SearchIcon,
  SparklesIcon,
  GitBranchIcon,
  AlertTriangleIcon,
  ArrowRightIcon,
  ClockIcon,
  ZapIcon } from
'lucide-react';
interface WorkflowLibraryProps {
  onOpenSession: () => void;
}
interface Workflow {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  category: 'analysis' | 'generation' | 'review';
  estimatedTime: string;
  popularity: 'high' | 'medium' | 'low';
}
const workflows: Workflow[] = [
{
  id: 'summarize',
  name: 'Summarize Case',
  description:
  'Generate a comprehensive narrative or bullet-point summary from all uploaded case documents. Supports court filing format.',
  icon: FileTextIcon,
  category: 'analysis',
  estimatedTime: '2-5 min',
  popularity: 'high'
},
{
  id: 'timeline',
  name: 'Build Timeline',
  description:
  'Extract dates, events, and interactions from documents to construct a chronological timeline of case activity.',
  icon: CalendarIcon,
  category: 'analysis',
  estimatedTime: '3-8 min',
  popularity: 'high'
},
{
  id: 'complaint',
  name: 'Draft Complaint',
  description:
  'Generate a preliminary complaint document based on extracted facts, entities, and evidence from the case file.',
  icon: ListIcon,
  category: 'generation',
  estimatedTime: '5-10 min',
  popularity: 'medium'
},
{
  id: 'gap',
  name: 'Gap Analysis',
  description:
  'Identify missing evidence, unresolved questions, and logical gaps in the current case documentation.',
  icon: AlertTriangleIcon,
  category: 'review',
  estimatedTime: '2-4 min',
  popularity: 'medium'
},
{
  id: 'qa',
  name: 'Q&A Mode',
  description:
  'Interactive question-and-answer session against the uploaded documents. Ask anything about the case.',
  icon: SparklesIcon,
  category: 'analysis',
  estimatedTime: 'Ongoing',
  popularity: 'high'
},
{
  id: 'crossref',
  name: 'Cross-Reference Entities',
  description:
  'Map relationships between people, organizations, accounts, and locations mentioned across all documents.',
  icon: GitBranchIcon,
  category: 'analysis',
  estimatedTime: '3-6 min',
  popularity: 'medium'
}];

const categoryLabel = (cat: Workflow['category']) => {
  switch (cat) {
    case 'analysis':
      return {
        text: 'Analysis',
        color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
      };
    case 'generation':
      return {
        text: 'Generation',
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
      };
    case 'review':
      return {
        text: 'Review',
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
      };
  }
};
export function WorkflowLibrary({ onOpenSession }: WorkflowLibraryProps) {
  return (
    <div className="flex-1 overflow-auto p-8 bg-navy-800">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Workflow Library
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Pre-built AI workflows for common case analysis tasks. Open a
            session to use any workflow.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-navy-700 border border-white/10 rounded-lg p-4 flex items-center gap-4">
          <div className="bg-gold-500/20 p-2.5 rounded-lg shrink-0">
            <ZapIcon className="w-5 h-5 text-gold-500" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-white font-medium">
              Workflows run inside Case Sessions
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Open or resume a case session, then launch any workflow from the
              action bar above the chat input.
            </p>
          </div>
          <button
            onClick={onOpenSession}
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-colors shrink-0">
            
            Open Session <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workflows.map((wf, i) => {
            const cat = categoryLabel(wf.category);
            const Icon = wf.icon;
            return (
              <motion.div
                key={wf.id}
                initial={{
                  opacity: 0,
                  y: 15
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: i * 0.05
                }}
                className="bg-navy-700 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors group flex flex-col">
                
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-navy-800 p-2.5 rounded-lg border border-white/5 group-hover:border-gold-500/30 transition-colors">
                    <Icon className="w-5 h-5 text-gold-500" />
                  </div>
                  {wf.popularity === 'high' &&
                  <span className="text-[10px] font-mono text-gold-400 bg-gold-500/10 px-1.5 py-0.5 rounded border border-gold-500/20">
                      POPULAR
                    </span>
                  }
                </div>

                <h3 className="text-white font-semibold mb-2 group-hover:text-gold-400 transition-colors">
                  {wf.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                  {wf.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${cat.color}`}>
                      
                      {cat.text}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-mono text-slate-500">
                      <ClockIcon className="w-3 h-3" />
                      {wf.estimatedTime}
                    </span>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-slate-500 font-mono pt-4">
          All workflows produce AI-generated output that requires human review
          before use in legal proceedings.
        </div>
      </div>
    </div>);

}