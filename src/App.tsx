import React from "react";
import Hero from "./components/hero-section";
import BusinessFinanceHero from "./components/cards";
import VaultorySection from "./components/vaultory";
import FinanceHeroSection from "./components/finance-section";
import TestimonialSection from "./components/Testoimonials";
import OnboardingFlowSection from "./components/onBoarding";
// import MoneySection from "./components/money-section";
import FooterSection from "./components/footer";
import "./index.css";
function App() {
  return (
    <div>
      <section>
        <Hero />
        <BusinessFinanceHero />
        <VaultorySection />
        <FinanceHeroSection />
        <TestimonialSection />
        <OnboardingFlowSection />
        {/* <MoneySection /> */}
        <FooterSection />
      </section>
    </div>
  );
}

export default App;
