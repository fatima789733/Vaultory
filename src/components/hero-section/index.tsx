import { useRef, useState, MouseEvent } from "react";
import lightImage from "../../assets/light.png";
import demoVideo from "../../assets/video.mp4";
import Navbar from "../navbar";
import { Play } from "lucide-react";

export default function Hero() {
  const secondButtonRef = useRef<HTMLButtonElement>(null);
  const [secondButtonPos, setSecondButtonPos] = useState({ x: 0, y: 0 });
  const [isSecondHovering, setIsSecondHovering] = useState(false);

  const handleSecondButtonMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!secondButtonRef.current) return;
    const rect = secondButtonRef.current.getBoundingClientRect();
    setSecondButtonPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const secondButtonCenter = {
    x: secondButtonRef.current ? secondButtonRef.current.offsetWidth / 2 : 0,
    y: secondButtonRef.current ? secondButtonRef.current.offsetHeight / 2 : 0,
  };
  const secondGlowOffset = {
    x: secondButtonPos.x - secondButtonCenter.x,
    y: secondButtonPos.y - secondButtonCenter.y,
  };

  return (
    <div className="h-[140vh] bg-black  relative overflow-hidden">
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
              <div
                className="relative rounded-full"
                onMouseEnter={() => setIsSecondHovering(true)}
                onMouseLeave={() => setIsSecondHovering(false)}
              >
                <button
                  ref={secondButtonRef}
                  onMouseMove={handleSecondButtonMouseMove}
                  className="relative overflow-hidden px-6 py-3 rounded-full text-black font-semibold bg-teal-300 shadow-lg flex items-center space-x-2 group min-w-[180px]"
                  style={{
                    boxShadow: isSecondHovering
                      ? `${secondGlowOffset.x / 8}px ${
                          secondGlowOffset.y / 8
                        }px 20px rgba(94, 234, 212, 0.6), ${
                          secondGlowOffset.x / 4
                        }px ${
                          secondGlowOffset.y / 4
                        }px 30px rgba(145, 229, 216, 0.4)`
                      : "0 5px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <span
                    className={`absolute w-[550px] h-32 -translate-x-1/2 -translate-y-1/2 rounded-l pointer-events-none ${
                      isSecondHovering ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      top: secondButtonPos.y,
                      left: secondButtonPos.x,
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(94, 234, 212, 0.7) 50%, rgba(94, 234, 212, 0) 80%)",
                      filter: "blur(20px)",
                    }}
                  ></span>
                  <span
                    className={`absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-200 ${
                      isSecondHovering ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      top: secondButtonPos.y,
                      left: secondButtonPos.x,
                      background:
                        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(244, 247, 247, 0.9) 50%, rgba(94, 234, 212, 0) 70%)",
                      filter: "blur(10px)",
                    }}
                  ></span>
                  <span className="relative z-10 flex font-haffer items-center justify-center w-full">
                    <span>Try Vaultory</span>
                  </span>
                </button>
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
