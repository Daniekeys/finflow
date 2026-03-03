'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { completeOnboarding, getUserSession } from '@/lib/auth';

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // Verify auth
  useEffect(() => {
    const user = getUserSession();
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  const handleNext = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate work
    setLoading(false);
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      completeOnboarding();
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 text-white relative overflow-hidden">
       {/* Ambient Bacground */}
       <div className="absolute inset-0 bg-slate-900">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
       </div>

      <div className="w-full max-w-2xl p-8 relative z-10">
        {/* Progress Bar */}
        <div className="mb-12">
            <div className="flex justify-between mb-4 text-sm font-semibold text-slate-400">
                <span className={step >= 1 ? "text-blue-400" : ""}>Profile</span>
                <span className={step >= 2 ? "text-blue-400" : ""}>Connect Bank</span>
                <span className={step >= 3 ? "text-blue-400" : ""}>Goals</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-blue-600 transition-all duration-500 ease-out"
                    style={{ width: `${(step / 3) * 100}%` }}
                />
            </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl min-h-[400px] flex flex-col justify-between transition-all">
          
          {/* Step 1: Profile Confirmation */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                  <span className="material-symbols-outlined text-3xl">person</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Let's set up your profile</h2>
              <p className="text-slate-300 text-lg mb-8">
                We need a few details to customize your financial dashboard.
              </p>
              
              <div className="space-y-4">
                 <input type="text" placeholder="Phone Number" className="w-full p-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors" />
                 <input type="text" placeholder="Occupation" className="w-full p-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            </div>
          )}

          {/* Step 2: Connect Bank */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
               <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                  <span className="material-symbols-outlined text-3xl">account_balance</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Connect your accounts</h2>
              <p className="text-slate-300 text-lg mb-8">
                Link your bank accounts safely to track all your finances in one place.
              </p>

              <div className="grid grid-cols-2 gap-4">
                  {['Chase', 'Bank of America', 'Wells Fargo', 'Citi'].map((bank) => (
                      <button key={bank} className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-purple-500 transition-colors flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">🏛️</span>
                          {bank}
                      </button>
                  ))}
              </div>
            </div>
          )}

          {/* Step 3: Goals */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
               <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-400">
                  <span className="material-symbols-outlined text-3xl">monetization_on</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Set your financial goals</h2>
              <p className="text-slate-300 text-lg mb-8">
                What are you saving for? We'll help you get there faster.
              </p>

              <div className="space-y-4 text-left">
                  {['Emergency Fund', 'New Home', 'Travel', 'Retirement'].map((goal) => (
                      <label key={goal} className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl cursor-pointer hover:bg-slate-800/80 transition-colors">
                          <input type="checkbox" className="w-5 h-5 rounded border-slate-600 text-blue-600 focus:ring-blue-500 bg-slate-900" />
                          <span className="font-medium">{goal}</span>
                      </label>
                  ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
                onClick={handleNext}
                disabled={loading}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2"
            >
                {loading ? 'Processing...' : step === 3 ? 'Finish Setup' : 'Continue'}
                {!loading && <span className="material-symbols-outlined">arrow_forward</span>}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
