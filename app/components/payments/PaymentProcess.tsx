const PaymentProcess = () => {
    return (
        <div className="xl:col-span-2 space-y-6">
            {/* Recent Payees Carousel */}
            <div className="rounded-2xl border border-slate-700 bg-white dark:bg-[#1a242f] p-6 shadow-sm">
                <h3 className="mb-4 text-base font-bold text-slate-900 dark:text-white">Recent Recipients</h3>
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {/* Add Payee Button */}
                    <button className="flex min-w-[80px] flex-col items-center gap-2 group">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-slate-300 dark:border-[#324d67] bg-slate-50 dark:bg-[#233648] group-hover:border-primary transition-colors">
                            <span className="material-symbols-outlined text-slate-400 dark:text-[#92adc9] group-hover:text-primary">add</span>
                        </div>
                        <span className="text-xs font-medium text-slate-400 dark:text-[#92adc9] group-hover:text-primary">New</span>
                    </button>
                    {/* Payee 1 */}
                    <button className="flex min-w-[80px] flex-col items-center gap-2 group">
                        <div className="h-14 w-14 rounded-full bg-cover bg-center border-2 border-transparent group-hover:border-primary transition-all" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD40mp9ljerq-yWfsJhYjUD0Z5QiJEuZURRd8UUWjgq_KbjmoAsOxoLHdcOeoAfs3HTGYBgEco6OT8PYjVhbpD7SdM6pFk6Vg3xi7bOnFy4SYWL_d5NhF7iZfVprEDXytZxe72ZgUk3pEF13lSvnmKgUaZ2e_YNrSGNAsFmwkuslq7F5K8acIMMK7i5KcSmyIpa9WX74INF_YHqKRoGT7qyyyMPHdCWCS4aHQBV_yhpPLyNX0KuEoFYXvx8HvJsxxXYgc1A0z7Ap68")' }}></div>
                        <span className="text-xs font-medium text-slate-900 dark:text-white">Alice M.</span>
                    </button>
                    {/* Payee 2 */}
                    <button className="flex min-w-[80px] flex-col items-center gap-2 group">
                        <div className="h-14 w-14 rounded-full bg-cover bg-center border-2 border-transparent group-hover:border-primary transition-all" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYJV2K9RVmdvlG8GtUMv-YwNBC0G3ZvxBamvWh_lyAcQV8jvdUN9jndjXueEJvfNiruQVYVlNw2MYC8_ho_cJMHyMmXhs4gK8hjaWzyzdYx1NrsC7cOCg3C400aVV6cpUiY9MQG_O8GxljtpMGquBzzuQrRFCdmfmu_2gvdnCYS0tyLs6UHRUv6d7frBSF5R4hxZ1NZBcOBetCdKj3Df4HskZAT5uQP06aLnhoieDwpamHprEkHzIizxK_sI0pu1GYrp0K3vFm4b0")' }}></div>
                        <span className="text-xs font-medium text-slate-900 dark:text-white">Bob D.</span>
                    </button>
                    {/* Payee 3 */}
                    <button className="flex min-w-[80px] flex-col items-center gap-2 group">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200 text-lg font-bold border-2 border-transparent group-hover:border-primary transition-all">CW</div>
                        <span className="text-xs font-medium text-slate-900 dark:text-white">Charlie</span>
                    </button>
                    {/* Payee 4 */}
                    <button className="flex min-w-[80px] flex-col items-center gap-2 group">
                        <div className="h-14 w-14 rounded-full bg-cover bg-center border-2 border-transparent group-hover:border-primary transition-all" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWE-0veNn9LdruP3hmVYS_mT9i5VDCFNmTKDWeZ1a7pbss6rhghMTZ5_M1hMDIS_TjZWxWnvfi--_u8L_wrNxmqjD9FzjgB8dbt5_iToQ0O5Ob5_QJw1BP039S0zwZ3sa1oopTq02aRAiMXBnYShZgqsfb10NGC_iuijd01YkJp1Wb-jtxj2CFyUK_HdlB5ZvRHWXEfAUEojmOK3Nm3qyShp13oux2xJyRCPVRvSNe-O7qkT7YyQOGOW4diX_T2DI2xPdIZtn-FSY")' }}></div>
                        <span className="text-xs font-medium text-slate-900 dark:text-white">Utility Co</span>
                    </button>
                    {/* Payee 5 */}
                    <button className="flex min-w-[80px] flex-col items-center gap-2 group">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-200 text-lg font-bold border-2 border-transparent group-hover:border-primary transition-all">LM</div>
                        <span className="text-xs font-medium text-slate-900 dark:text-white">Landlord</span>
                    </button>
                </div>
            </div>

            {/* Main Transfer Form */}
            <div className="rounded-2xl border border-slate-700 bg-white dark:bg-[#1a242f] p-6 sm:p-8 shadow-sm">
                <form className="space-y-6">
                    {/* From Account */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">From Account</label>
                        <div className="relative">
                            <button className="flex w-full items-center justify-between rounded-xl border border-slate-300 dark:border-[#324d67] bg-slate-50 dark:bg-[#233648] p-4 text-left transition-colors hover:border-primary dark:hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-primary dark:bg-blue-900/30">
                                        <span className="material-symbols-outlined">account_balance_wallet</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white">Checking Account</p>
                                        <p className="text-sm text-slate-500 dark:text-[#92adc9]">•••• 4829 | Available: <span className="font-semibold text-slate-900 dark:text-white">$12,450.00</span></p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-slate-500 dark:text-[#92adc9]">expand_more</span>
                            </button>
                        </div>
                    </div>

                    {/* To Recipient */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">To</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 dark:text-[#92adc9]">
                                <span className="material-symbols-outlined">search</span>
                            </span>
                            <input className="w-full rounded-xl border border-slate-300 dark:border-[#324d67] bg-slate-50 dark:bg-[#233648] py-3.5 pl-12 pr-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-[#92adc9] focus:border-primary focus:ring-primary" placeholder="Name, @username, email, or mobile" type="text"/>
                        </div>
                    </div>

                    {/* Amount Input */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Amount</label>
                        <div className="relative mb-3">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-2xl font-bold text-slate-900 dark:text-white">$</span>
                            <input className="w-full rounded-xl border border-slate-300 dark:border-[#324d67] bg-slate-50 dark:bg-[#233648] py-4 pl-10 pr-4 text-3xl font-bold text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-[#92adc9] focus:border-primary focus:ring-primary" placeholder="0.00" type="number"/>
                        </div>
                        <div className="flex gap-2">
                            <button className="rounded-full border border-slate-300 dark:border-[#324d67] bg-transparent px-4 py-1 text-sm font-medium text-slate-500 dark:text-[#92adc9] hover:bg-slate-100 dark:hover:bg-[#233648] hover:text-primary transition-colors" type="button">+$50</button>
                            <button className="rounded-full border border-slate-300 dark:border-[#324d67] bg-transparent px-4 py-1 text-sm font-medium text-slate-500 dark:text-[#92adc9] hover:bg-slate-100 dark:hover:bg-[#233648] hover:text-primary transition-colors" type="button">+$100</button>
                            <button className="rounded-full border border-slate-300 dark:border-[#324d67] bg-transparent px-4 py-1 text-sm font-medium text-slate-500 dark:text-[#92adc9] hover:bg-slate-100 dark:hover:bg-[#233648] hover:text-primary transition-colors" type="button">+$500</button>
                            <button className="rounded-full border border-slate-300 dark:border-[#324d67] bg-transparent px-4 py-1 text-sm font-medium text-primary hover:bg-primary/10 transition-colors ml-auto" type="button">Max</button>
                        </div>
                    </div>

                    {/* Date & Repeat */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Date</label>
                            <div className="relative">
                                <input className="w-full rounded-xl border border-slate-300 dark:border-[#324d67] bg-slate-50 dark:bg-[#233648] py-3 pl-4 pr-10 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" type="date"/>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500 dark:text-[#92adc9]">
                                    <span className="material-symbols-outlined">calendar_today</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between rounded-xl border border-slate-300 dark:border-[#324d67] bg-slate-50 dark:bg-[#233648] p-3">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-primary/10 p-2 text-primary">
                                    <span className="material-symbols-outlined text-[20px]">repeat</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Repeat</p>
                                    <p className="text-xs text-slate-500 dark:text-[#92adc9]">Set recurring payment</p>
                                </div>
                            </div>
                            <label className="relative inline-flex cursor-pointer items-center">
                                <input className="peer sr-only" type="checkbox"/>
                                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:bg-[#324d67] dark:border-gray-600"></div>
                            </label>
                        </div>
                    </div>

                    {/* Note */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Note (Optional)</label>
                        <input className="w-full rounded-xl border border-slate-300 dark:border-[#324d67] bg-slate-50 dark:bg-[#233648] py-3 px-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-[#92adc9] focus:border-primary focus:ring-primary" placeholder="What's this for?" type="text"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentProcess;
