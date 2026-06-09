import { LanguageProvider } from './hooks/useLanguage';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SystemOverview from './components/SystemOverview';
import EnterpriseArchitecture from './components/EnterpriseArchitecture';
import DatabaseEngineering from './components/DatabaseEngineering';
import ERDShowcase from './components/ERDShowcase';
import PerformanceCenter from './components/PerformanceCenter';
import SecurityAudit from './components/SecurityAudit';
import BackupRecovery from './components/BackupRecovery';
import ProjectTimeline from './components/ProjectTimeline';
import GitHubShowcase from './components/GitHubShowcase';
import RecruiterSection from './components/RecruiterSection';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-white antialiased">
        <Navbar />
        <HeroSection />
        <SystemOverview />
        <EnterpriseArchitecture />
        <DatabaseEngineering />
        <ERDShowcase />
        <PerformanceCenter />
        <SecurityAudit />
        <BackupRecovery />
        <ProjectTimeline />
        <GitHubShowcase />
        <RecruiterSection />
        <FinalCTA />

        {/* Footer */}
        <footer className="py-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="OraBank" className="w-7 h-7 rounded-md object-cover" />
              <span className="text-slate-500 text-sm">OraBank - Oracle Banking System</span>
            </div>
            <p className="text-slate-600 text-sm">Enterprise-grade banking database architecture</p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
