const AccountsTable = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-surface-dark p-4 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative w-full sm:w-64 group">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">search</span>
                        <input 
                            className="w-full bg-background-dark border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-500" 
                            placeholder="Search transactions..." 
                            type="text"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <div className="flex items-center gap-2 px-3 py-2 bg-background-dark border border-slate-700 rounded-lg cursor-pointer hover:border-slate-500 transition-colors">
                        <span className="material-symbols-outlined text-slate-400 text-[20px]">calendar_today</span>
                        <span className="text-sm font-medium text-slate-300">This Month</span>
                        <span className="material-symbols-outlined text-slate-400 text-[16px]">expand_more</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-background-dark border border-slate-700 rounded-lg cursor-pointer hover:border-slate-500 transition-colors">
                        <span className="material-symbols-outlined text-slate-400 text-[20px]">filter_list</span>
                        <span className="text-sm font-medium text-slate-300">Filter</span>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-surface-dark rounded-xl border border-slate-700 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-white">
                        <thead>
                            <tr className="bg-slate-800 border-b border-slate-700 text-slate-400 text-xs uppercase tracking-wider font-semibold">
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Description</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700 text-sm">
                            {/* Row 1 */}
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap text-slate-400">Oct 24, 2023</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                            <span className="material-symbols-outlined text-[18px]">movie</span>
                                        </div>
                                        <span className="font-bold text-white">Netflix Subscription</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-400">Entertainment</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-500">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Completed
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-medium text-white">-$15.99</td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap text-slate-400">Oct 23, 2023</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                            <span className="material-symbols-outlined text-[18px]">attach_money</span>
                                        </div>
                                        <span className="font-bold text-white">Salary Deposit</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-400">Income</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-500">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Completed
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-medium text-green-400">+$3,200.00</td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap text-slate-400">Oct 22, 2023</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                            <span className="material-symbols-outlined text-[18px]">directions_car</span>
                                        </div>
                                        <span className="font-bold text-white">Uber Ride</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-400">Transport</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-500">
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                                        Pending
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-medium text-white">-$24.50</td>
                            </tr>
                            {/* Row 4 */}
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap text-slate-400">Oct 21, 2023</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                                            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        </div>
                                        <span className="font-bold text-white">Whole Foods Market</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-400">Groceries</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-500">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Completed
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-medium text-white">-$142.85</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-slate-700">
                    <span className="text-xs text-slate-400">Showing 1-5 of 48 transactions</span>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-lg border border-slate-700 hover:bg-slate-700 text-slate-400 disabled:opacity-50">
                            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button className="p-2 rounded-lg border border-slate-700 hover:bg-slate-700 text-white">
                            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountsTable;
