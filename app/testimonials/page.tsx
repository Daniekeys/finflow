import Navbar from "../components/landing/Navbar";
import Image from "next/image";
import { Star, MessageSquareQuote, Briefcase, MapPin } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Founder, Bloom Studio",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256&h=256",
      cover: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800&h=400",
      quote: "FinFlow changed how I manage my freelance taxes. The real-time categorization literally saves me 10 hours a month. I never have to manually tag a receipt again.",
      category: "Small Business",
      rating: 5,
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "VP Finance",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256",
      cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=400",
      quote: "Migrating our corporate spend to FinFlow was flawless. The export speeds and data density on the Web Dashboard gives our accounting team ultimate visibility.",
      category: "Enterprise",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Independent Crypto Trader",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256",
      cover: "https://images.unsplash.com/photo-1621504450181-5d156f8746ce?auto=format&fit=crop&q=80&w=800&h=400",
      quote: "The low-latency transfers on the Mobile app are unmatched. When markets move fast, I need my capital available instantly without hidden wire fees.",
      category: "Personal Finance",
      rating: 4,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Tech Lead, Vertex AI",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256&h=256",
      cover: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=400",
      quote: "I love the shared digital wallets for our team offsites. It makes splitting operational expenses between engineers entirely frictionless and fully trackable.",
      category: "Startups",
      rating: 5,
    },
    {
      id: 5,
      name: "Amanda Brooks",
      role: "University Student",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256&h=256",
      cover: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=400",
      quote: "The smart budgeting tool told me exactly how much I was spending on coffees and helped me save for my study abroad trip. It acts like a personal financial coach.",
      category: "Personal Finance",
      rating: 5,
    },
    {
      id: 6,
      name: "Thomas Wright",
      role: "E-Commerce Manager",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256&h=256",
      cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=400",
      quote: "Having my Shopify payouts matched instantly inside FinFlow's transaction ledger provides an airtight reconciliation loop. The 99.99% uptime is reliable.",
      category: "Small Business",
      rating: 4,
    }
  ];

  const categories = ["All Stories", "Personal Finance", "Small Business", "Enterprise", "Startups"];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col pt-24 pb-16">
      <Navbar />
      
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Stories from the <span className="text-blue-600">FinFlow Community</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
            Discover how professionals, families, and high-growth companies use our tools to master their financial rhythm.
          </p>
          
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button 
                key={cat} 
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors
                  ${i === 0 
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid (Meetup Cards Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full cursor-pointer"
            >
              {/* Cover Image */}
              <div className="relative h-32 w-full overflow-hidden">
                 <Image 
                    src={testimonial.cover} 
                    alt="Cover" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"/>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 relative mt-[-40px]">
                {/* Profile Pic overlapping cover */}
                <div className="relative w-16 h-16 rounded-full border-4 border-white dark:border-slate-900 overflow-hidden mb-4 bg-slate-100">
                  <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                </div>
                
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {testimonial.name}
                  </h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                    ))}
                  </div>
                </div>
                
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  {testimonial.role}
                </p>
                <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-5 font-medium">
                  <MapPin className="w-3 h-3 mr-1" /> {testimonial.location}
                </div>

                {/* Quote Box */}
                <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 relative">
                  <MessageSquareQuote className="w-8 h-8 text-blue-100 dark:text-blue-900/40 absolute -top-2 -left-2 rotate-12" />
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed relative z-10 italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                   <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-md flex items-center gap-1.5">
                     <Briefcase className="w-3.5 h-3.5" />
                     {testimonial.category}
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
