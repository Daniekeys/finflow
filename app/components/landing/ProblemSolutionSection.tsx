import Image from "next/image";

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Stop fighting with <br />
              <span className="text-red-500">financial chaos.</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-red-600 dark:text-red-400">receipt_long</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">The Old Way</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Drowning in paper receipts, multiple spreadsheet versions, and hidden bank fees that eat away at your savings.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">check_circle</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">The FinFlow Way</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Automated tracking, categorized spending, and crystal-clear insights. Peace of mind is just a tap away.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
             <Image
              src="/assets/landing/problem-solution.png"
              alt="Chaos vs Order"
              fill
              className="object-cover"
            />
             {/* Split line overlay for dramatic effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-[1px] left-1/2 -translate-x-1/2 h-full opacity-50" />
            
            <div className="absolute bottom-8 left-8 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <p className="text-red-400 font-semibold">Before</p>
            </div>
            <div className="absolute bottom-8 right-8 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-blue-500/30">
                <p className="text-blue-400 font-semibold">After</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
