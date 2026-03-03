const AccountsStats = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Total Balance Card */}
            <div className="lg:col-span-3 bg-gradient-to-br from-surface-dark to-[#151f2b] p-6 rounded-xl border border-slate-700 flex flex-col justify-between h-full min-h-[180px]">
                <div className="flex justify-between items-start">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                        <span className="material-symbols-outlined text-green-500">trending_up</span>
                    </div>
                    <span className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded">+2.4%</span>
                </div>
                <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Total Liquidity</p>
                    <h3 className="text-4xl font-bold text-white">$24,500.00</h3>
                </div>
            </div>

            {/* Accounts Carousel */}
            <div className="lg:col-span-9 flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
                {/* Card 1 */}
                <div className="min-w-[280px] bg-surface-dark p-5 rounded-xl border border-slate-700 flex flex-col justify-between gap-6 hover:border-primary/50 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start">
                        <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-white">account_balance</span>
                        </div>
                        <span className="text-slate-400 text-xs">...4589</span>
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Chase Checking</p>
                        <p className="text-xl font-bold text-white">$4,200.00</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="min-w-[280px] bg-surface-dark p-5 rounded-xl border border-slate-700 flex flex-col justify-between gap-6 hover:border-primary/50 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start">
                        <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-white">credit_card</span>
                        </div>
                        <span className="text-slate-400 text-xs">...1022</span>
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Amex Gold</p>
                        <p className="text-xl font-bold text-red-400">($450.00)</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="min-w-[280px] bg-surface-dark p-5 rounded-xl border border-slate-700 flex flex-col justify-between gap-6 hover:border-primary/50 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start">
                        <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-white">savings</span>
                        </div>
                        <span className="text-slate-400 text-xs">...8841</span>
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">High Yield Savings</p>
                        <p className="text-xl font-bold text-white">$12,000.00</p>
                    </div>
                </div>

                {/* Add New */}
                <div className="min-w-[100px] flex items-center justify-center bg-transparent p-5 rounded-xl border border-dashed border-slate-700 text-slate-400 hover:text-primary hover:border-primary transition-colors cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-3xl">add_circle</span>
                        <span className="text-xs font-bold">Add</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountsStats;
