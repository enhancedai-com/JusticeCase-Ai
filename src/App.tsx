import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { StatusBar } from './components/StatusBar';
import { Dashboard } from './pages/Dashboard';
import { ActiveSessions } from './pages/ActiveSessions';
import { WorkflowLibrary } from './pages/WorkflowLibrary';
import { CaseSession } from './pages/CaseSession';
import { Settings } from './pages/Settings';
export function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleOpenSession = (id?: string) => {
    setActiveSessionId(id || `new-${Date.now()}`);
    setCurrentPage('session');
  };
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onOpenSession={handleOpenSession} />;
      case 'active-sessions':
        return <ActiveSessions onOpenSession={handleOpenSession} />;
      case 'workflow-library':
        return <WorkflowLibrary onOpenSession={() => handleOpenSession()} />;
      case 'session':
        return <CaseSession />;
      case 'settings':
        return (
          <Settings
            isDarkMode={isDarkMode}
            onToggleTheme={() => setIsDarkMode(!isDarkMode)} />);


      default:
        return <Dashboard onOpenSession={handleOpenSession} />;
    }
  };
  return (
    <div
      data-theme={isDarkMode ? 'dark' : 'light'}
      className="flex h-screen w-full bg-navy-800 overflow-hidden text-slate-50 font-sans selection:bg-gold-500/30 transition-colors duration-300">
      
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode(!isDarkMode)} />
        

        <main className="flex-1 flex flex-col overflow-hidden relative">
          {renderPage()}
        </main>

        <StatusBar />
      </div>
    </div>);

}