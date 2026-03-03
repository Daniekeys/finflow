export default function SocialProofSection() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Freelance Designer",
      quote: "FinFlow successfully transformed how I manage my freelance income. The automatic categorization is a game changer.",
      initial: "A",
      bg: "bg-blue-100 dark:bg-blue-900",
      text: "text-blue-600 dark:text-blue-300",
    },
    {
      name: "Sarah Miller",
      role: "Small Business Owner",
      quote: "I finally understand my cash flow. The interface is not only beautiful but incredibly intuitive.",
      initial: "S",
      bg: "bg-purple-100 dark:bg-purple-900",
      text: "text-purple-600 dark:text-purple-300",
    },
    {
      name: "Marcus Williams",
      role: "Software Engineer",
      quote: "Security was my biggest concern, but FinFlow's transparent security features won me over. Highly recommended.",
      initial: "M",
      bg: "bg-green-100 dark:bg-green-900",
      text: "text-green-600 dark:text-green-300",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-2">Community</p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Joined by <span className="text-blue-600">50,000+</span> users worldwide.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md p-8 rounded-2xl relative border border-white/20 dark:border-slate-700/50 shadow-sm">
              <span className="text-6xl text-blue-200 dark:text-blue-900/40 absolute top-4 left-6 font-serif">"</span>
              <p className="text-slate-600 dark:text-slate-300 mb-6 relative z-10 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center font-bold text-lg ${t.text}`}>
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
