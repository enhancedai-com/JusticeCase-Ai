import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  SendIcon,
  PaperclipIcon,
  CopyIcon,
  DownloadIcon,
  PlusIcon,
  SparklesIcon,
  ListIcon,
  CalendarIcon,
  FileTextIcon,
  SearchIcon,
  GitBranchIcon } from
'lucide-react';
import { ChatMessage } from '../lib/mockData';
interface ChatInterfaceProps {
  messages: ChatMessage[];
  onSendMessage: (content: string) => void;
  onOpenWorkflow: (type: string) => void;
}
export function ChatInterface({
  messages,
  onSendMessage,
  onOpenWorkflow
}: ChatInterfaceProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSend = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput('');
  };
  const workflows = [
  {
    id: 'summarize',
    label: 'Summarize Case',
    icon: FileTextIcon
  },
  {
    id: 'timeline',
    label: 'Build Timeline',
    icon: CalendarIcon
  },
  {
    id: 'complaint',
    label: 'Draft Complaint',
    icon: ListIcon
  },
  {
    id: 'gap',
    label: 'Gap Analysis',
    icon: SearchIcon
  },
  {
    id: 'qa',
    label: 'Q&A Mode',
    icon: SparklesIcon
  },
  {
    id: 'crossref',
    label: 'Cross-Reference Entities',
    icon: GitBranchIcon
  }];

  return (
    <div className="flex-1 flex flex-col h-full bg-navy-800 relative">
      {/* Chat Thread */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) =>
        <motion.div
          key={msg.id}
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: i * 0.1
          }}
          className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
          
            <div
            className={`max-w-[85%] ${msg.role === 'user' ? 'bg-navy-600 text-white rounded-l-xl rounded-tr-xl' : 'bg-navy-700 border border-white/10 text-slate-100 rounded-r-xl rounded-tl-xl'} p-4 shadow-sm`}>
            
              {/* Message Content */}
              <div className="prose prose-invert prose-sm max-w-none font-sans leading-relaxed">
                {msg.content.split('\n').map((line, j) =>
              <p key={j} className="mb-2 last:mb-0">
                    {/* Basic markdown bold parsing for mock data */}
                    {line.split(/(\*\*.*?\*\*)/).map((part, k) =>
                part.startsWith('**') && part.endsWith('**') ?
                <strong key={k} className="text-white font-semibold">
                          {part.slice(2, -2)}
                        </strong> :

                part

                )}
                  </p>
              )}
              </div>

              {/* AI Specifics: Sources & Actions */}
              {msg.role === 'assistant' &&
            <div className="mt-4 pt-3 border-t border-white/10">
                  {msg.sources && msg.sources.length > 0 &&
              <div className="mb-3 text-xs font-mono text-slate-400">
                      <span className="text-gold-500 mr-2">Referenced:</span>
                      {msg.sources.join(', ')}
                    </div>
              }
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1.5 px-2 py-1 rounded bg-navy-800 hover:bg-navy-600 text-xs text-slate-300 transition-colors border border-white/5">
                        <CopyIcon className="w-3 h-3" /> Copy
                      </button>
                      <button className="flex items-center gap-1.5 px-2 py-1 rounded bg-navy-800 hover:bg-navy-600 text-xs text-slate-300 transition-colors border border-white/5">
                        <DownloadIcon className="w-3 h-3" /> Export PDF
                      </button>
                      <button className="flex items-center gap-1.5 px-2 py-1 rounded bg-navy-800 hover:bg-navy-600 text-xs text-slate-300 transition-colors border border-white/5">
                        <PlusIcon className="w-3 h-3" /> Add to Summary
                      </button>
                    </div>
                    <span className="text-[10px] text-slate-500 italic">
                      AI output requires human review before use in legal
                      proceedings
                    </span>
                  </div>
                </div>
            }
            </div>
            <span className="text-[10px] font-mono text-slate-500 mt-1 px-1">
              {msg.timestamp}
            </span>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-navy-800 border-t border-white/10 shrink-0">
        {/* Workflow Action Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-1 scrollbar-hide">
          {workflows.map((wf) =>
          <button
            key={wf.id}
            onClick={() => onOpenWorkflow(wf.id)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-700 hover:bg-navy-600 border border-white/10 text-xs font-medium text-slate-200 whitespace-nowrap transition-colors">
            
              <wf.icon className="w-3.5 h-3.5 text-gold-500" />
              {wf.label}
            </button>
          )}
        </div>

        {/* Input Box */}
        <div className="relative bg-navy-900 border border-white/20 rounded-xl focus-within:border-gold-500/50 focus-within:ring-1 focus-within:ring-gold-500/50 transition-all">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask a question about the case documents..."
            className="w-full bg-transparent text-white placeholder:text-slate-500 p-4 pr-24 resize-none focus:outline-none min-h-[80px] max-h-[200px]"
            rows={2} />
          

          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-navy-700">
              <PaperclipIcon className="w-5 h-5" />
            </button>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-2 bg-gold-500 hover:bg-gold-600 disabled:bg-navy-700 disabled:text-slate-500 text-navy-900 rounded-lg transition-colors flex items-center justify-center">
              
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 px-1">
          <span className="text-[10px] font-mono text-slate-500">
            Context: <span className="text-gold-400">42% used</span> (34k / 80k
            tokens)
          </span>
          <span className="text-[10px] text-slate-500">
            Press Enter to send, Shift+Enter for new line
          </span>
        </div>
      </div>
    </div>);

}