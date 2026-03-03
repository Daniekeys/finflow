const AccountsWidget = () => {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a2430] flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">My Accounts</h3>
                <button className="rounded-full bg-slate-100 p-1.5 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
                    <span className="material-symbols-outlined text-[20px] text-slate-600 dark:text-slate-300">add</span>
                </button>
            </div>
            <div className="flex flex-col gap-4 flex-1">
                {/* Card 1 */}
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1a2430] to-[#111a22] p-5 shadow-lg border border-slate-700 hover:border-primary/50 transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-6">
                        <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-white">wallet</span>
                        </div>
                        <span className="text-xs font-medium text-white/60 bg-white/10 px-2 py-1 rounded">Primary</span>
                    </div>
                    <div>
                        <p className="text-sm text-slate-400">Checking Account</p>
                        <p className="text-xl font-bold text-white mt-1">**** **** **** 4289</p>
                    </div>
                    <div className="mt-4 flex justify-between items-end">
                        <p className="text-2xl font-bold text-white">$14,230.50</p>
                        <span className="material-symbols-outlined text-white/40 group-hover:text-white transition-colors">arrow_forward</span>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="group relative overflow-hidden rounded-xl bg-slate-50 p-5 shadow-sm border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-primary/50 transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2">
                            <span className="material-symbols-outlined text-primary">savings</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Savings Vault</p>
                        <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">$10,269.50</p>
                    </div>
                    <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        +4.2% APY Interest
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountsWidget;
