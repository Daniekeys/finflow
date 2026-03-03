const SpendingChart = () => {
    return (
        <div className="w-full bg-surface-dark rounded-xl border border-slate-700 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-6 gap-4">
                <div>
                    <h3 className="text-lg font-bold text-white">Spending Trends</h3>
                    <p className="text-slate-400 text-sm">Monthly outflow comparison</p>
                </div>
                <div className="flex items-center gap-2 bg-background-dark p-1 rounded-lg border border-slate-700">
                    <button className="px-3 py-1 text-xs font-bold bg-slate-700 rounded text-white shadow-sm">Month</button>
                    <button className="px-3 py-1 text-xs font-bold text-slate-400 hover:text-white">Quarter</button>
                    <button className="px-3 py-1 text-xs font-bold text-slate-400 hover:text-white">Year</button>
                </div>
            </div>
            <div className="relative w-full h-[200px]">
                {/* SVG Chart */}
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                    <defs>
                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#137fec" stopOpacity="0.2"></stop>
                            <stop offset="100%" stopColor="#137fec" stopOpacity="0"></stop>
                        </linearGradient>
                    </defs>
                    {/* Grid Lines */}
                    <line opacity="0.3" stroke="#324d67" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
                    <line opacity="0.3" stroke="#324d67" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="100" y2="100"></line>
                    <line opacity="0.3" stroke="#324d67" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="50" y2="50"></line>
                    {/* Chart Line */}
                    <path d="M0 150 C 100 150, 150 80, 250 80 S 350 120, 450 100 S 550 40, 650 60 S 750 110, 850 90 S 950 20, 1000 40" fill="none" stroke="#137fec" strokeLinecap="round" strokeWidth="3"></path>
                    {/* Chart Fill */}
                    <path d="M0 150 C 100 150, 150 80, 250 80 S 350 120, 450 100 S 550 40, 650 60 S 750 110, 850 90 S 950 20, 1000 40 V 200 H 0 Z" fill="url(#chartGradient)" stroke="none"></path>
                </svg>
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium px-2">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
            </div>
        </div>
    );
};

export default SpendingChart;
