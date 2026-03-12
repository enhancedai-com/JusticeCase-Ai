import React, { useState } from 'react';
import { DocumentDock } from '../components/DocumentDock';
import { ChatInterface } from '../components/ChatInterface';
import { OutputStaging } from '../components/OutputStaging';
import { WorkflowModal } from '../components/WorkflowModal';
import {
  mockDocuments,
  mockChatMessages,
  mockOutputs,
  Document,
  ChatMessage } from
'../lib/mockData';
export function CaseSession() {
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages);
  const [isWorkflowModalOpen, setIsWorkflowModalOpen] = useState(false);
  const handleUpload = () => {
    const newDoc: Document = {
      id: `d${Date.now()}`,
      name: `New_Evidence_File_${documents.length + 1}.pdf`,
      size: '1.2 MB',
      type: 'pdf',
      status: 'processing'
    };
    setDocuments([newDoc, ...documents]);
    // Simulate processing
    setTimeout(() => {
      setDocuments((docs) =>
      docs.map((d) =>
      d.id === newDoc.id ?
      {
        ...d,
        status: 'processed'
      } :
      d
      )
      );
    }, 2000);
  };
  const handleSendMessage = (content: string) => {
    const newMsg: ChatMessage = {
      id: `m${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setMessages([...messages, newMsg]);
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: `m${Date.now() + 1}`,
        role: 'assistant',
        content:
        'I am analyzing the newly provided context. Based on the documents in the session, I can confirm that the timeline aligns with the events described.',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };
  return (
    <div className="flex-1 flex overflow-hidden bg-navy-800">
      <DocumentDock documents={documents} onUpload={handleUpload} />

      <ChatInterface
        messages={messages}
        onSendMessage={handleSendMessage}
        onOpenWorkflow={() => setIsWorkflowModalOpen(true)} />
      

      <OutputStaging outputs={mockOutputs} />

      <WorkflowModal
        isOpen={isWorkflowModalOpen}
        onClose={() => setIsWorkflowModalOpen(false)}
        documents={documents} />
      
    </div>);

}