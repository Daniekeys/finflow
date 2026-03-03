import Link from "next/link";
import { SplineScene } from "../ui/spline";
import { Card } from "../ui/card";
import { Spotlight } from "../ui/spotlight";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark pt-32 lg:pt-20">
      
      <div className="container mx-auto px-6 relative z-10 w-full h-full min-h-[600px] flex items-center">
        <Card className="w-full h-auto md:h-[600px] bg-white/10 dark:bg-black/40 backdrop-blur-xl border-white/20 dark:border-slate-800 relative overflow-hidden flex flex-col md:flex-row">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex flex-col md:flex-row w-full h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center text-left">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-6">
                Take control of <br/> your financial rhythm.
              </h1>
              <p className="mt-4 text-slate-300 max-w-lg text-lg leading-relaxed mb-8">
                Experience the future of personal finance with FinFlow. 
                Real-time analytics, smart budgeting, and instant transfers in one sleek app.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/dashboard"
                  className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
                >
                  Get Started Now
                </Link>
                <button className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-semibold text-lg hover:bg-slate-700 transition">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right content - Spline Scene */}
            <div className="flex-1 relative min-h-[400px] md:min-h-full">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full absolute inset-0"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

