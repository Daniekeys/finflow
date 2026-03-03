const StatsGrid = () => {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            {/* Total Balance */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a2430]">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Balance</p>
                    <button className="text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">$24,500.00</span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <span className="flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <span className="material-symbols-outlined mr-0.5 text-[14px]">trending_up</span>
                        2.4%
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-500">vs last month</span>
                </div>
                {/* Decorative background gradient */}
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
            </div>

            {/* Monthly Income */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a2430]">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Monthly Income</p>
                <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">$5,200.00</span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <span className="flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <span className="material-symbols-outlined mr-0.5 text-[14px]">trending_up</span>
                        1.2%
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-500">vs last month</span>
                </div>
            </div>

            {/* Monthly Expenses */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a2430]">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Monthly Expenses</p>
                <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">$3,100.00</span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <span className="flex items-center rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-500/10 dark:text-orange-400">
                        <span className="material-symbols-outlined mr-0.5 text-[14px]">trending_down</span>
                        0.5%
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-500">vs last month</span>
                </div>
            </div>
        </div>
    );
};

export default StatsGrid;
