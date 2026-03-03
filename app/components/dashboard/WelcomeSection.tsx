"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getUserSession } from "@/lib/auth";

const WelcomeSection = () => {
    const [name, setName] = useState<string>("Alex");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const user = getUserSession();
        if (user?.name) {
            setName(user.name.split(' ')[0]);
        }
    }, []);

    // Prevent hydration mismatch by rendering default structure first or just waiting
    // But for a simple text update, it's often fine to just let it update after mount.
    // However, to be cleaner let's use the mounted check if we want to avoid 'Alex' flashing to 'John'
    // For now, defaulting to 'Alex' is the requested 'mock' behaviour if not logged in.
    
    return (
        <section className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                        Good morning, {name}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        Here's what's happening with your money today.
                    </p>
                </div>
                
                <div className="flex gap-3">
                    <Link href="/dashboard/send">
                        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
                            <span className="material-symbols-outlined text-[20px]">send</span>
                            Send Money
                        </button>
                    </Link>
                    <Link href="/dashboard/add-funds">
                        <button className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 dark:border-slate-700 dark:bg-[#1a2430] px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">add_card</span>
                            Add Funds
                        </button>
                    </Link>
                    <Link href="/dashboard/bills">
                        <button className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 dark:border-slate-700 dark:bg-[#1a2430] px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                            Bill Pay
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
