import Navbar from "./_components/navbar.tsx";
import Hero from "./_components/hero.tsx";
import Footer from "./_components/footer.tsx";
import ParallaxSection from "./_components/parallax-section.tsx";

const FINANCE_IMAGE = "https://hercules-cdn.com/file_BHRz4mcYLRIDQJIdcEdkyY6X";
const LOGISTICS_IMAGE = "https://hercules-cdn.com/file_iaAM6GHRENuzeB1BCl0xGJM2";
const STRATEGY_IMAGE = "https://hercules-cdn.com/file_47dohOCc2wcWzLfrc1oDCr7P";

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />

        <ParallaxSection
          id="finance"
          image={FINANCE_IMAGE}
          eyebrow="Accounting & Finance"
          headline="Every Number, In Orbit."
          subtext="We bring precision to numbers that used to feel infinite — clean books, sharp forecasts, and financial clarity that finally makes sense."
          align="left"
        />

        <ParallaxSection
          id="logistics"
          image={LOGISTICS_IMAGE}
          eyebrow="Logistics"
          headline="Freight Above The Clouds."
          subtext="We move your supply chain like it weighs nothing at all — optimized routes, synced systems, zero friction from dock to doorstep."
          align="right"
        />

        <ParallaxSection
          id="strategy"
          image={STRATEGY_IMAGE}
          eyebrow="Consulting & Strategy"
          headline="Find True North."
          subtext="Strategy that points your business somewhere it's never been — guidance built for the market you're actually operating in, not the one from five years ago."
          align="center"
        />
      </main>
      <Footer />
    </div>
  );
}
