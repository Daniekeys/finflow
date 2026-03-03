const TransactionsWidget = () => {
    return (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#1a2430] overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Transactions</h3>
                <a className="text-sm font-bold text-primary hover:text-blue-400" href="#">View All</a>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
                    <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-800/50 dark:text-slate-400">
                        <tr>
                            <th className="px-6 py-3" scope="col">Description</th>
                            <th className="px-6 py-3" scope="col">Category</th>
                            <th className="px-6 py-3" scope="col">Date</th>
                            <th className="px-6 py-3" scope="col">Status</th>
                            <th className="px-6 py-3 text-right" scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-3">
                                <div className="size-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 dark:bg-red-900/20 dark:text-red-400">
                                    <span className="material-symbols-outlined text-[18px]">movie</span>
                                </div>
                                Netflix Subscription
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">Entertainment</td>
                            <td className="whitespace-nowrap px-6 py-4">Oct 24, 2023</td>
                            <td className="whitespace-nowrap px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">Completed</span>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-right font-bold text-slate-900 dark:text-white">-$15.99</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-3">
                                <div className="size-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
                                    <span className="material-symbols-outlined text-[18px]">work</span>
                                </div>
                                Direct Deposit Employer
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">Income</td>
                            <td className="whitespace-nowrap px-6 py-4">Oct 23, 2023</td>
                            <td className="whitespace-nowrap px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">Completed</span>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-right font-bold text-emerald-600 dark:text-emerald-400">+$2,400.00</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-3">
                                <div className="size-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                                    <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                                </div>
                                Grocery Store
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">Shopping</td>
                            <td className="whitespace-nowrap px-6 py-4">Oct 22, 2023</td>
                            <td className="whitespace-nowrap px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">Pending</span>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-right font-bold text-slate-900 dark:text-white">-$84.32</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-3">
                                <div className="size-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                                    <span className="material-symbols-outlined text-[18px]">electric_bolt</span>
                                </div>
                                Electric Company
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">Utilities</td>
                            <td className="whitespace-nowrap px-6 py-4">Oct 21, 2023</td>
                            <td className="whitespace-nowrap px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">Completed</span>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-right font-bold text-slate-900 dark:text-white">-$124.50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionsWidget;
