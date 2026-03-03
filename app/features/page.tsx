import Navbar from "../components/landing/Navbar";
import SpatialProductShowcase from "@/components/ui/spatial-product-showcase";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Navbar />
      <div className="flex-1 bg-slate-50 dark:bg-slate-950">
        <SpatialProductShowcase />
      </div>
    </main>
  );
}
