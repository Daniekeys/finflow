import Image from "next/image";

export default function SecurityTrustSection() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Matrix/Data effect placeholder */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
        backgroundSize: "30px 30px"
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
             <Image
              src="/assets/landing/security-trust.png"
              alt="Biometric Security"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30">
                <span className="material-symbols-outlined text-green-400">verified_user</span>
                <span className="text-sm font-semibold tracking-wider">AES-256 ENCRYPTION</span>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Your security is our <br />
              <span className="text-blue-400">top priority.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              We use bank-grade encryption and advanced biometric technologies to ensure your data and funds are always protected. 
              Sleep soundly knowing your digital vault is impenetrable.
            </p>
            
            <ul className="space-y-4">
              {[
                "End-to-end encryption for all transactions",
                "Biometric authentication (FaceID & TouchID)",
                "Real-time fraud detection & alerts",
                "FDIC insured partner banks"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-400">lock</span>
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
