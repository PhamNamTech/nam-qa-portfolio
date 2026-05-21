import CompactDashboard from "@/components/CompactDashboard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200">
      <Navbar />
      <CompactDashboard />
      <Footer />
    </div>
  );
}
