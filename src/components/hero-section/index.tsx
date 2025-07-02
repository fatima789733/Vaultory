import lightImage from "../../assets/light.png";
import demoVideo from "../../assets/video.mp4";
import Navbar from "../navbar";
import { Play } from "lucide-react";
import Button from "../money-section/button";
export default function Hero() {
  return (
    <div className="h-screen bg-black  relative overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute top-[30%] inset-0 z-0 pointer-events-none">
        <video
          className="w-full h-full object-cover "
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-screen"></div>

      <div className="absolute top-0 left-0 z-0">
        <img src={lightImage} alt="Decorative light" className="opacity-100" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="flex flex-col items-center justify-center text-center px-6 py-20 lg:py-32 mt-[-55px]">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-[61px] font-haffer font-[670] leading-[130%] text-center capitalize text-transparent bg-clip-text mb-6"
              style={{
                fontStyle: "normal",
                background:
                  "linear-gradient(93deg, rgba(255, 255, 255, 0.40) 0%, #FFF 49.58%, rgba(255, 255, 255, 0.40) 99.17%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Money. Your Rules.
              <br />
              <span>One Smart Vault.</span>
            </h1>

            <p
              className="text-[20px] font-haffer text-center capitalize mb-12 leading-[176%] max-w-3xl mx-auto"
              style={{
                color: "#FFF",
                fontStyle: "normal",
                fontWeight: 430,
                lineHeight: "176%",
              }}
            >
              Send, Receive, And Manage Company Finances
              <br />
              Across Currencies — All In One Intelligent Dashboard.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 ">
              <div>
                <Button variant="primary">Try Vaultory</Button>
              </div>

              <button className="border-2 border-gray-400 font-haffer hover:border-teal-300 text-gray-300 hover:text-teal-300 px-6 py-2.5 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 hover:bg-teal-400/10 min-w-[180px]">
                <Play className="w-5 h-5" />
                <span>See how it works</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
