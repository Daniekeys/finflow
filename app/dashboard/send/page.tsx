'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { addTransaction, getBalance } from '@/lib/finance';
import Header from '@/app/components/layout/Header';
import Sidebar from '@/app/components/layout/Sidebar';

export default function SendMoneyPage() {
  const router = useRouter();
  const balance = getBalance();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [note, setNote] = useState('');

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    addTransaction({
      type: 'expense',
      amount: parseFloat(amount),
      category: 'Transfer',
      recipient: recipient,
      status: 'Completed',
      icon: 'send'
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
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Send Money</h1>
                <p className="text-slate-500">Transfer funds securely to friends or family.</p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 flex items-center justify-between border border-blue-100 dark:border-blue-800">
                <div>
                  <p className="text-sm text-slate-500 dark:text-blue-300 font-medium">Available Balance</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">${balance.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
              </div>

              <form onSubmit={handleSend} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Recipient Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="e.g. Alex Smith"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                    <input
                      type="number"
                      required
                      min="1"
                      max={balance}
                      className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-lg"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Note (Optional)</label>
                  <textarea
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none h-24"
                    placeholder="What's this for?"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !amount || !recipient}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? 'Processing Transfer...' : 'Send Now'}
                  {!loading && <span className="material-symbols-outlined">send</span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
