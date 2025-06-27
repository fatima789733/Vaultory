import { useRef, useState, MouseEvent } from "react";
import { ArrowRight, Play } from "lucide-react";
import myBackground from "./Union.png";
import lightImage from "./light.png";
import demoVideo from "./assets/video.mp4";

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const buttonCenter = {
    x: buttonRef.current ? buttonRef.current.offsetWidth / 2 : 0,
    y: buttonRef.current ? buttonRef.current.offsetHeight / 2 : 0,
  };
  const glowOffset = {
    x: pos.x - buttonCenter.x,
    y: pos.y - buttonCenter.y,
  };

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
    <div className="h-screen bg-black relative overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute top-1/2 inset-0 z-0 pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-screen"
        style={{ backgroundImage: `url(${myBackground})` }}
      ></div>

      <div className="absolute top-0 left-0 z-0">
        <img src={lightImage} alt="Decorative light" className="opacity-100" />
      </div>

      <div className="relative z-10">
        <nav className="relative flex items-center justify-center mt-2 px-5 py-6 lg:px-12">
          <div
            className="hidden lg:flex items-center space-x-8 backdrop-blur-sm rounded-full px-6 py-2 border-2 shadow-lg"
            style={{
              background:
                "linear-gradient(to right, rgba(22, 72, 68, 0.4), rgba(27, 36, 35, 0.4), rgba(27, 36, 35, 0.4), rgba(0, 0, 0, 0.4))",
              borderColor: "rgba(45, 212, 191, 0.2)",
            }}
          >
            {["Home", "Why us?", "Cases", "Features", "Pricing", "FAQ"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-aquamarine transition-colors text-sm font-medium px-3 py-1 rounded-full hover:bg-white/10"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div
            className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              className="relative overflow-hidden px-4 py-3 rounded-full text-black font-semibold bg-teal-300 shadow-lg flex items-center space-x-2 group min-w-[180px]"
              style={{
                boxShadow: isHovering
                  ? `${glowOffset.x / 8}px ${
                      glowOffset.y / 8
                    }px 20px rgba(94, 234, 212, 0.6), ${glowOffset.x / 4}px ${
                      glowOffset.y / 4
                    }px 30px rgba(94, 234, 212, 0.4)`
                  : "0 5px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <span
                className={`absolute w-[550px] h-32 -translate-x-1/2 -translate-y-1/2 rounded-l pointer-events-none ${
                  isHovering ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  top: pos.y,
                  left: pos.x,
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(94, 234, 212, 0.7) 50%, rgba(94, 234, 212, 0) 80%)",
                  filter: "blur(20px)",
                }}
              ></span>
              <span
                className={`absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-200 ${
                  isHovering ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  top: pos.y,
                  left: pos.x,
                  background:
                    "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(244, 247, 247, 0.9) 50%, rgba(94, 234, 212, 0) 70%)",
                  filter: "blur(10px)",
                }}
              ></span>
              <span className="relative z-10 flex items-center justify-center w-full space-x-2">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center text-center px-6 py-20 lg:py-32 mt-[-55px]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-300 mb-6 leading-tight">
              Your Money. Your Rules.
              <br />
              <span className="text-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-400">
                One Smart Vault.
              </span>
            </h1>
            <p className="text-[20px] text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
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
                  <span className="relative z-10 flex items-center justify-center w-full">
                    <span>Try Vaultory</span>
                  </span>
                </button>
              </div>

              <button className="border-2 border-gray-400 hover:border-teal-300 text-gray-300 hover:text-teal-300 px-6 py-2.5 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 hover:bg-teal-400/10 min-w-[180px]">
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

export default App;
