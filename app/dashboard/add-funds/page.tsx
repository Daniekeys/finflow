'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { addTransaction } from '@/lib/finance';
import Header from '@/app/components/layout/Header';
import Sidebar from '@/app/components/layout/Sidebar';

export default function AddFundsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('Chase Checking **** 1234');

  const handleDeposit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    addTransaction({
      type: 'income',
      amount: parseFloat(amount),
      category: 'Deposit',
      recipient: 'Top Up',
      status: 'Completed',
      icon: 'add_card'
    });

    router.push('/dashboard');
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="flex flex-1 flex-col h-full overflow-hidden relative">
        <Header />
        <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900 p-6 lg:p-10">
          <div className="max-w-2xl mx-auto">
             <Link href="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-blue-500 mb-6 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Dashboard
            </Link>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Add Funds</h1>
                <p className="text-slate-500">Top up your FinFlow account instantly.</p>
              </div>

              <form onSubmit={handleDeposit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Amount</label>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {['100', '500', '1000'].map((val) => (
                        <button 
                            type="button"
                            key={val}
                            onClick={() => setAmount(val)}
                            className={`py-3 rounded-xl border font-semibold transition-all ${amount === val ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-blue-400'}`}
                        >
                            ${val}
                        </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                    <input
                      type="number"
                      required
                      min="1"
                      className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-lg"
                      placeholder="Custom Amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Source Account</label>
                  <select 
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option>Chase Checking **** 1234</option>
                    <option>Wells Fargo Savings **** 5678</option>
                    <option>Apple Pay</option>
                  </select>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 flex gap-3">
                    <span className="material-symbols-outlined text-green-500">security</span>
                    <p className="text-sm text-slate-500">Transfers are encrypted and usually arrive within seconds.</p>
                </div>

                <button
                  type="submit"
                  disabled={loading || !amount}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? 'Processing...' : 'Add Funds'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
