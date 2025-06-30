import React from "react";
import Hero from "./components/hero-section";
import BusinessFinanceHero from "./components/cards";
import VaultorySection from "./components/vaultory";
import FinanceHeroSection from "./components/finance-section";
import "./index.css";
function App() {
  return (
    <div>
      <section>
        <Hero />
        <BusinessFinanceHero />
        <VaultorySection />
        <FinanceHeroSection />
      </section>
    </div>
  );
}

export default App;
