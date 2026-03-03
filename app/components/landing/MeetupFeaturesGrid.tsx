"use client";

import Image from "next/image";
import { ArrowRight, Calendar, Users, MapPin } from "lucide-react";

export default function FeaturesGridMeetupStyle() {
  const features = [
    {
      id: "feature-1",
      title: "Automated Tax Prep",
      date: "New Feature \u2022 Available Now",
      description: "Let FinFlow scan your ledger and automatically categorize deductibles for tax season.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=500",
      group: "FinFlow Core Team",
      attendees: 1204,
    },
    {
      id: "feature-2",
      title: "Shared Wallets",
      date: "Beta Program \u2022 Joining Soon",
      description: "Create shared digital wallets with family or roommates to split bills autonomously.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800&h=500",
      group: "Community Beta",
      attendees: 856,
    },
    {
      id: "feature-3",
      title: "Investment Insights",
      date: "Upcoming \u2022 Next Quarter",
      description: "Sync your external brokerage accounts to visualize your entire net worth in one dashboard.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800&h=500",
      group: "FinFlow Research",
      attendees: 3042,
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Discover New Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Explore the latest features the FinFlow community is using.
            </p>
          </div>
          <button className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700 transition">
            See all features <ArrowRight className="ml-1 h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  {feature.date}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {feature.title}
                </h3>
                
                <h4 className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {feature.description}
                </h4>
                
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center font-medium">
                    <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-2">
                      <span className="material-symbols-outlined text-[14px]">domain</span>
                    </div>
                    {feature.group}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {feature.attendees}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="md:hidden mt-8 w-full py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition flex justify-center items-center">
          See all features <ArrowRight className="ml-1 h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
