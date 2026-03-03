export default function FeaturesGrid() {
  const features = [
    {
      title: "Instant Transfers",
      description: "Send money to anyone, anywhere in the world, instantly. No hidden fees, just speed.",
      icon: "payments",
      color: "bg-blue-500",
    },
    {
      title: "Smart Budgeting",
      description: "AI-powered spending categorization helps you stick to your goals without the manual work.",
      icon: "savings",
      color: "bg-purple-500",
    },
    {
      title: "Real-time Analytics",
      description: "Visualize your cash flow with interactive charts. Know exactly where your money goes.",
      icon: "monitoring",
      color: "bg-indigo-500",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Everything you need, <br />
            <span className="text-blue-600">all in one place.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Powerful features designed to help you manage your wealth with precision and ease.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/20 dark:border-slate-700/50 group"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 text-white text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
