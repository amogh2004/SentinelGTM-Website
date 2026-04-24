import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Pipeline } from "./components/Pipeline";
import { HowItWorks } from "./components/HowItWorks";
import { EarlyAccess } from "./components/EarlyAccess";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f0eeee] font-body">
      <Nav />
      <Hero />
      <Pipeline />
      <Features />
      <HowItWorks />
      <EarlyAccess />
      <Footer />
    </div>
  );
}
