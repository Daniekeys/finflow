import Link from "next/link";

export default function DemoSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Join thousands of users who have already taken control of their financial future. 
          It takes less than 60 seconds to set up.
        </p>

        {/* Video Placeholder - representing the "Product Tour" */}
        {/* Video Player */}
        <div className="mx-auto max-w-4xl bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700 aspect-video mb-12 relative group">
            <video 
              src="https://res.cloudinary.com/www-daniekeys-com/video/upload/v1769025034/KINECTIC_VIDEO_2_lfjyzy.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Optional Overlay to ensure text readability or interaction hint if needed, 
                but for a background-style loop, clear view is usually better. 
                Adding a subtle gradient at bottom for text contrast if we had overlaid text.
            */}
        </div>


        <Link
          href="/dashboard"
          className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition shadow-lg shadow-blue-600/30 inline-flex items-center gap-2"
        >
          Create Free Account
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
        <p className="mt-4 text-slate-400 text-sm">No credit card required for basic plan.</p>
      </div>
    </section>
  );
}
