const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111a22] px-6 lg:px-10 shrink-0 z-20">
      <div className="flex items-center gap-4 lg:hidden">
        <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Dashboard</h2>
      </div>
      <div className="hidden lg:flex flex-1 max-w-md">
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="material-symbols-outlined text-slate-400">search</span>
          </div>
          <input
            className="block w-full rounded-lg border-0 bg-slate-100 py-2 pl-10 pr-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-[#1a2430] dark:text-white sm:text-sm sm:leading-6"
            placeholder="Search transactions, accounts..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-white transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#111a22]"></span>
        </button>
        <button className="hidden lg:flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
          <span className="truncate">Check Updates</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
