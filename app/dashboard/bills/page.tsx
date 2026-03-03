'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { addTransaction, getBalance } from '@/lib/finance';
import Header from '@/app/components/layout/Header';
import Sidebar from '@/app/components/layout/Sidebar';

export default function BillPayPage() {
  const router = useRouter();
  const balance = getBalance();
  const [loading, setLoading] = useState<string | null>(null);

  const bills = [
    { id: '1', name: 'Electric Bill', provider: 'City Power', amount: 145.20, due: 'Due Today', icon: 'bolt' },
    { id: '2', name: 'Internet Service', provider: 'FiberNet', amount: 89.99, due: 'Due Tomorrow', icon: 'wifi' },
    { id: '3', name: 'Car Insurance', provider: 'SafeDrive', amount: 210.00, due: 'Due in 3 days', icon: 'directions_car' },
    { id: '4', name: 'Rent', provider: 'Apartment Complex', amount: 1800.00, due: 'Due Nov 1st', icon: 'home' },
  ];

  const handlePay = async (bill: typeof bills[0]) => {
    setLoading(bill.id);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    addTransaction({
      type: 'expense',
      amount: bill.amount,
      category: 'Bills',
      recipient: bill.provider,
      status: 'Completed',
      icon: bill.icon
    });

    router.push('/dashboard');
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="flex flex-1 flex-col h-full overflow-hidden relative">
        <Header />
        <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900 p-6 lg:p-10">
          <div className="max-w-4xl mx-auto">
             <Link href="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-blue-500 mb-6 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Dashboard
            </Link>

            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">My Bills</h1>
                    <p className="text-slate-500">Manage and pay your upcoming bills.</p>
                </div>
                 <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <p className="text-sm text-slate-500 dark:text-blue-300 font-medium">Available Balance</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">${balance.toLocaleString()}</p>
                </div>
            </div>

            <div className="grid gap-4">
                {bills.map((bill) => (
                    <div key={bill.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
                                <span className="material-symbols-outlined text-2xl">{bill.icon}</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{bill.name}</h3>
                                <p className="text-slate-500 text-sm">{bill.provider}</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                            <div className="text-right">
                                <p className="font-bold text-lg text-slate-900 dark:text-white">${bill.amount.toFixed(2)}</p>
                                <p className="text-sm text-orange-500 font-medium">{bill.due}</p>
                            </div>
                            <button
                                onClick={() => handlePay(bill)}
                                disabled={!!loading || balance < bill.amount}
                                className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-[100px] flex justify-center"
                            >
                                {loading === bill.id ? <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"/> : 'Pay'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800 flex items-start gap-4">
                <span className="material-symbols-outlined text-blue-600">info</span>
                <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                    Auto-pay is currently enabled for subscription services. You can manage your preferences in <Link href="#" className="underline font-semibold">Settings</Link>.
                </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
