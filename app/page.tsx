import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import ProblemSolutionSection from "./components/landing/ProblemSolutionSection";
import FeaturesGrid from "./components/landing/FeaturesGrid";
import SecurityTrustSection from "./components/landing/SecurityTrustSection";
import SocialProofSection from "./components/landing/SocialProofSection";
import DemoSection from "./components/landing/DemoSection";
import TimelineSection from "./components/landing/TimelineSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark overflow-x-hidden">
      <Navbar />
      
      <HeroSection />
      <div id="features"><FeaturesGrid /></div>
      <ProblemSolutionSection />
      <div id="security"><SecurityTrustSection /></div>
      <div id="testimonials"><SocialProofSection /></div>
      <TimelineSection />
      <DemoSection />
      
      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">payments</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">FinFlow</span>
            </div>
            
            <div className="flex gap-8 text-slate-600 dark:text-slate-400">
              <a href="#" className="hover:text-blue-600 transition">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition">Terms</a>
              <a href="#" className="hover:text-blue-600 transition">Twitter</a>
              <a href="#" className="hover:text-blue-600 transition">LinkedIn</a>
            </div>
          </div>
          <div className="text-center md:text-left text-sm text-slate-500">
             &copy; {new Date().getFullYear()} FinFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

