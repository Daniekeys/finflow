import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import WelcomeSection from "../components/dashboard/WelcomeSection";
import StatsGrid from "../components/dashboard/StatsGrid";
import CashFlowChart from "../components/dashboard/CashFlowChart";
import AccountsWidget from "../components/dashboard/AccountsWidget";
import TransactionsWidget from "../components/dashboard/TransactionsWidget";

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Side Navigation */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex flex-1 flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <Header />
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-background-dark p-6 lg:p-10 scrollbar-hide">
          <div className="mx-auto max-w-7xl flex flex-col gap-8">
            {/* Welcome & Quick Actions */}
            <WelcomeSection />
            
            {/* Stats Grid */}
            <StatsGrid />
            
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              {/* Main Chart Area */}
              <CashFlowChart />
              
              {/* My Cards / Accounts */}
              <AccountsWidget />
            </div>
            
            {/* Recent Transactions */}
            <TransactionsWidget />
            
            {/* Footer Spacer */}
            <div className="h-10"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
