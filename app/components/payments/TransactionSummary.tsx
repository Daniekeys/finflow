const TransactionSummary = () => {
    return (
        <div className="xl:col-span-1">
            <div className="sticky top-24 space-y-6">
                {/* Transaction Summary Card */}
                <div className="rounded-2xl bg-[#1e293b] dark:bg-[#1a242f] p-6 text-white shadow-lg border border-[#324d67]/50">
                    <h3 className="mb-6 text-lg font-bold">Transaction Summary</h3>
                    <div className="relative mb-8 flex flex-col items-center justify-center">
                        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#233648] border-2 border-[#324d67]">
                            <span className="material-symbols-outlined text-3xl text-primary">arrow_forward</span>
                        </div>
                        <div className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 bg-[#324d67]"></div>
                    </div>
                    <div className="space-y-4 border-t border-[#324d67] pt-4">
                        <div className="flex justify-between">
                            <span className="text-[#92adc9]">Transfer Amount</span>
                            <span className="font-bold">$0.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#92adc9]">Processing Fee</span>
                            <span className="font-bold">Free</span>
                        </div>
                        <div className="flex justify-between border-t border-[#324d67] pt-4">
                            <span className="text-lg font-bold">Total</span>
                            <span className="text-lg font-bold text-primary">$0.00</span>
                        </div>
                    </div>
                    <div className="mt-6 rounded-lg bg-[#233648]/50 p-3 flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#92adc9] text-[20px] mt-0.5">lock</span>
                        <p className="text-xs text-[#92adc9] leading-relaxed">
                            Your transaction is secured with 256-bit SSL encryption. You may be asked for a PIN code on the next step.
                        </p>
                    </div>
                    <button className="mt-6 w-full rounded-xl bg-primary py-4 text-base font-bold text-white shadow-lg hover:bg-blue-600 transition-colors focus:ring-4 focus:ring-blue-500/30">
                        Review & Send
                    </button>
                </div>

                {/* Quick Help */}
                <div className="rounded-xl border border-slate-300 dark:border-[#233648] bg-white dark:bg-[#1a242f] p-4">
                    <h4 className="mb-2 font-bold text-slate-900 dark:text-white">Transfer Limits</h4>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-slate-500 dark:text-[#92adc9]">Daily Limit</span>
                            <span className="font-medium text-slate-900 dark:text-white">$5,000.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500 dark:text-[#92adc9]">Remaining</span>
                            <span className="font-medium text-green-500">$5,000.00</span>
                        </div>
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-slate-100 dark:bg-[#324d67]">
                        <div className="h-2 w-0 rounded-full bg-primary" style={{ width: "0%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionSummary;
