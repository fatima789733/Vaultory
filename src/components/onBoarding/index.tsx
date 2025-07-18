import React from "react";
import GlowingFlowPath from "./GlowingFlowPath";
import useInView from "../../hooks/useInView";

const OnboardingFlowSection: React.FC = () => {
  const { ref, isInView } = useInView(0.3);

  const animatedClass = isInView
    ? "animate-fade-in-left"
    : "opacity-0 translate-x-10 transition-all duration-1000";

  return (
    <section ref={ref} className="bg-black text-white px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className={`capitalize text-center font-haffer transition-all duration-1000 ${animatedClass}`}
            style={{
              fontSize: "39px",
              fontStyle: "normal",
              fontWeight: 670,
              lineHeight: "130%",
              background:
                "linear-gradient(93deg, rgba(255, 255, 255, 0.40) 0%, #FFF 49.58%, rgba(255, 255, 255, 0.40) 99.17%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            No Onboarding.
            <br />
            No Learning Curve.
            <br />
            Just Plug & Go.
          </h2>
        </div>

        {/* Flow Visualization */}
        <div className="relative flex items-center justify-center">
          <GlowingFlowPath />

          {/* Text Labels */}
          <div className={`absolute top-10 left-32 ${animatedClass}`}>
            <div className="text-gray-400 text-sm font-haffer md:text-base">
              <div>Connect Your</div>
              <div>Bank Accounts</div>
            </div>
          </div>

          <div
            className={`absolute top-20 left-[450px] transform -translate-x-1/2 font-haffer ${animatedClass}`}
          >
            <div className="text-gray-400 text-sm md:text-base text-center">
              <div>Invite Your Team</div>
              <div>& Set Controls</div>
            </div>
          </div>

          <div
            className={`absolute top-16 right-[12rem] md:right-80 ${animatedClass}`}
          >
            <div className="text-gray-400 text-sm md:text-base font-haffer text-center">
              <div>Start Transacting &</div>
              <div>Automating</div>
            </div>
          </div>

          <div
            className={`absolute top-64 left-[12rem] md:left-56 ${animatedClass}`}
          >
            <div className="text-gray-400 text-sm md:text-base font-haffer">
              <div>Fast Integrations With</div>
              <div>50+ Banks Globally.</div>
            </div>
          </div>

          <div
            className={`absolute left-[620px] top-96 transform ${animatedClass}`}
          >
            <div className="text-gray-400 text-sm md:text-base font-haffer text-center">
              <div>Role-Based Permissions.</div>
              <div>Real-Time Alerts.</div>
            </div>
          </div>

          <div className={`absolute right-12 ${animatedClass}`}>
            <div className="text-gray-400 text-sm md:text-base font-haffer text-center">
              <div>Vaultory Handles The Backend.</div>
              <div>You Just Focus On Growth.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingFlowSection;
