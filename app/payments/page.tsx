import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import PaymentProcess from "../components/payments/PaymentProcess";
import TransactionSummary from "../components/payments/TransactionSummary";
import Link from 'next/link';

export default function PaymentsPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <Sidebar />
      <main className="flex flex-1 flex-col h-full overflow-hidden relative">
        <Header />
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 scrollbar-hide">
            <div className="mx-auto max-w-6xl">
                {/* Page Heading */}
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Payments & Transfers</h1>
                        <p className="mt-2 text-slate-500 dark:text-[#92adc9]">Send money securely or manage your scheduled payments.</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#101922] transition-all">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        New Payee
                    </button>
                </div>

                {/* Tabs */}
                <div className="mb-8 border-b border-slate-200 dark:border-[#233648]">
                    <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                        <Link aria-current="page" className="group inline-flex items-center border-b-2 border-primary py-4 px-1 text-sm font-bold text-primary" href="#">
                            <span className="material-symbols-outlined mr-2">send</span>
                            Send Money
                        </Link>
                        <Link className="group inline-flex items-center border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 dark:text-[#92adc9] hover:border-slate-500 dark:hover:border-[#92adc9] hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined mr-2">sync_alt</span>
                            Internal Transfer
                        </Link>
                        <Link className="group inline-flex items-center border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 dark:text-[#92adc9] hover:border-slate-500 dark:hover:border-[#92adc9] hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined mr-2">event_repeat</span>
                            Recurring Setup
                        </Link>
                    </nav>
                </div>

                <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
                    <PaymentProcess />
                    <TransactionSummary />
                </div>

                {/* Recent Transactions Table */}
                <div className="mt-12">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Recent Transactions</h3>
                        <a className="text-sm font-bold text-primary hover:text-blue-400" href="#">View All</a>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-[#233648]">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 dark:bg-[#1e293b] text-slate-500 dark:text-[#92adc9]">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Recipient</th>
                                    <th className="px-6 py-4 font-medium">Date</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                    <th className="px-6 py-4 font-medium text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-[#233648] bg-white dark:bg-[#111a22] text-slate-900 dark:text-white">
                                <tr className="hover:bg-slate-50 dark:hover:bg-[#1a242f] transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBA_jcafnsGuEtrVPmNoaUx51YsYPNIrI0_s-vM7NKHpjeSdnaCPoTllyAuuiPeynNNybFBUrVEi8ObI2OZ0BxgkowPuI65RNhX9WO9sN_aCZdwzXM5ICpWz092Pvxm9mui1KmVik2wfi1YO5P2gMlAdGvnTSOPAyGoMTy1LVGlMpSkjgG5PM3GWfwhVz5nOzB2OTuBheaIB0_FyPEJ9j1jzk0YIbtPQsJ1luZyW1I57IcMqnh_s1SWCpCjLgVMZ1eSFx2_AjrbfnI")' }}></div>
                                            <span className="font-medium">Design Agency Ltd</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 dark:text-[#92adc9]">Oct 24, 2023</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                            Completed
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right font-bold">-$2,450.00</td>
                                </tr>
                                <tr className="hover:bg-slate-50 dark:hover:bg-[#1a242f] transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 text-xs font-bold">NF</div>
                                            <span className="font-medium">Netflix Subscription</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 dark:text-[#92adc9]">Oct 23, 2023</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-2.5 py-0.5 text-xs font-medium text-yellow-700 dark:text-yellow-400">
                                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right font-bold">-$15.99</td>
                                </tr>
                                <tr className="hover:bg-slate-50 dark:hover:bg-[#1a242f] transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoFa9eYz0ssm4SaL1zeIRkTufA4z3fio3LoBh6ZsNorRv7oHfrEnfQWdd15rV-bOGrbsEIah_2XA5k8UVk0tViuI9C7OaL7-GMbd-G2WJIwsvsajaTaAs5dwEU43eFmV_OEkepUlMpQp_k1aPfYd3eQJW2yYds8DJP9THyvaSalHITXVK6wb8WN73vWjcPtEyMFSv_-_yWsrrVmoB2PC9bEKwUMJOkZSU-xKgh9ctkjhNlyDJ4kRENGcUZlIGALA9xOHuCuFQOJgk")' }}></div>
                                            <span className="font-medium">Alice M.</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 dark:text-[#92adc9]">Oct 21, 2023</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                            Completed
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right font-bold">-$150.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
