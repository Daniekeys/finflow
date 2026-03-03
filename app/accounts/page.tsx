import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import AccountsStats from "../components/accounts/AccountsStats";
import SpendingChart from "../components/accounts/SpendingChart";
import AccountsTable from "../components/accounts/AccountsTable";

export default function AccountsPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-dark text-white">
      <Sidebar />
      <main className="flex flex-1 flex-col h-full overflow-hidden relative">
        <Header /> {/* Reusing the dashboard header for layout consistency, or can customize if needed */}
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">
             <div className="mx-auto max-w-7xl flex flex-col gap-8">
                {/* Page Title & Actions */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight text-white">Accounts</h2>
                        <p className="text-slate-400 text-sm mt-1">Overview of your financial status and recent activity.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-dark border border-slate-700 hover:bg-slate-800 text-sm font-medium transition-colors text-white">
                            <span className="material-symbols-outlined text-[20px]">ios_share</span>
                            Export Data
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-900/20 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            Link New Account
                        </button>
                    </div>
                </div>

                <AccountsStats />
                <SpendingChart />
                <AccountsTable />
             </div>
        </div>
      </main>
    </div>
  );
}
