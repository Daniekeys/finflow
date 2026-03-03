import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <aside className="hidden w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111a22] lg:flex">
      <div className="flex h-16 items-center gap-3 px-6 border-b border-slate-200 dark:border-slate-800">
        <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">FinFlow</h1>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <nav className="flex flex-col gap-1">
          <Link className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 text-primary" href="/">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="/accounts">
            <span className="material-symbols-outlined">credit_card</span>
            <span className="text-sm font-medium">Accounts</span>
          </Link>
          <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="/payments">
            <span className="material-symbols-outlined">swap_horiz</span>
            <span className="text-sm font-medium">Transactions</span>
          </Link>
          <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm font-medium">Analytics</span>
          </Link>
          <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>
        <div className="rounded-xl bg-slate-100 dark:bg-[#1a2430] p-4">
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="size-10 rounded-full bg-cover bg-center" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB66OZP8I8L2kkFEvcbKGbJnowiiQ9t0TnfkSfeckUogCvX3olKxaxWB_9TVEZn_KlMrLCqyTWr4YzwQG6MMX5ohr3LzM3sU0uFmy7sIY-6zRZsFbceD5KcCevLL-_UDsCTOrYvRfyaMslef9xOdgDqre3XGLGFoaJlDjD5AUnE0JDEx9xNpCnDv76DutYsyF3h7yQPF16uzH13dOqK2DouSqvOhbRzTEEpwXeMztBgpSKqJignpAMwRf1o9zqoqpDWjM0157gMzJQ")' }}
            ></div>
            <div className="flex flex-col overflow-hidden">
              <span className="truncate text-sm font-bold text-slate-900 dark:text-white">Alex Morgan</span>
              <span className="truncate text-xs text-slate-500 dark:text-slate-400">Pro Member</span>
            </div>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-[16px]">logout</span>
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
