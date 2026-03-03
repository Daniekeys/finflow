const CashFlowChart = () => {
    return (
        <div className="xl:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a2430]">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cash Flow</h3>
                <div className="flex items-center rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
                    <button className="rounded-md px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">1W</button>
                    <button className="rounded-md bg-white px-3 py-1 text-xs font-bold text-slate-900 shadow-sm dark:bg-[#111a22] dark:text-white">1M</button>
                    <button className="rounded-md px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">6M</button>
                    <button className="rounded-md px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">1Y</button>
                </div>
            </div>
            {/* Chart Placeholder using CSS Grid/Flex */}
            <div className="relative h-64 w-full pt-6">
                <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400">
                    <span>$6k</span>
                    <span>$4k</span>
                    <span>$2k</span>
                    <span>$0</span>
                </div>
                <div className="absolute inset-0 ml-8 flex items-end justify-between gap-2 pb-6">
                    {/* Bar Groups */}
                    <div className="group relative flex h-full w-full flex-col justify-end gap-1">
                        <div className="w-full rounded-t bg-primary/30 h-[40%] transition-all hover:bg-primary/50"></div>
                        <div className="w-full rounded-b bg-primary h-[30%] transition-all hover:bg-blue-600"></div>
                        <span className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2">Jan</span>
                    </div>
                    <div className="group relative flex h-full w-full flex-col justify-end gap-1">
                        <div className="w-full rounded-t bg-primary/30 h-[55%] transition-all hover:bg-primary/50"></div>
                        <div className="w-full rounded-b bg-primary h-[45%] transition-all hover:bg-blue-600"></div>
                        <span className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2">Feb</span>
                    </div>
                    <div className="group relative flex h-full w-full flex-col justify-end gap-1">
                        <div className="w-full rounded-t bg-primary/30 h-[35%] transition-all hover:bg-primary/50"></div>
                        <div className="w-full rounded-b bg-primary h-[25%] transition-all hover:bg-blue-600"></div>
                        <span className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2">Mar</span>
                    </div>
                    <div className="group relative flex h-full w-full flex-col justify-end gap-1">
                        <div className="w-full rounded-t bg-primary/30 h-[60%] transition-all hover:bg-primary/50"></div>
                        <div className="w-full rounded-b bg-primary h-[50%] transition-all hover:bg-blue-600"></div>
                        <span className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2">Apr</span>
                    </div>
                    <div className="group relative flex h-full w-full flex-col justify-end gap-1">
                        <div className="w-full rounded-t bg-primary/30 h-[75%] transition-all hover:bg-primary/50"></div>
                        <div className="w-full rounded-b bg-primary h-[40%] transition-all hover:bg-blue-600"></div>
                        <span className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2">May</span>
                    </div>
                    <div className="group relative flex h-full w-full flex-col justify-end gap-1">
                        <div className="w-full rounded-t bg-primary/30 h-[65%] transition-all hover:bg-primary/50"></div>
                        <div className="w-full rounded-b bg-primary h-[55%] transition-all hover:bg-blue-600"></div>
                        <span className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2">Jun</span>
                    </div>
                </div>
                {/* Horizontal Grid Lines */}
                <div className="pointer-events-none absolute inset-0 ml-8 flex flex-col justify-between pb-6">
                    <div className="h-px w-full border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                    <div className="h-px w-full border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                    <div className="h-px w-full border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                    <div className="h-px w-full border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-primary/30"></span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Income</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-primary"></span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Expenses</span>
                </div>
            </div>
        </div>
    );
};

export default CashFlowChart;
