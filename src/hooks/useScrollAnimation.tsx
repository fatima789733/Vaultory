import { useState, useEffect, useRef } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  offset?: number;
  smoothness?: number;
}

interface ScrollAnimationReturn {
  ref: React.RefObject<HTMLImageElement>;
  scrollProgress: number;
  isVisible: boolean;
  getAnimationClass: () => string;
  getDynamicTransform: () => { transform: string; opacity: number };
}

const useScrollAnimation = (
  options: ScrollAnimationOptions = {}
): ScrollAnimationReturn => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLImageElement>(null);

  const {
    threshold = 0.1, // When to start tracking
    offset = 0, // Additional offset
    smoothness = 0.1, // How smooth the animation should be (0-1)
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!element || !isVisible) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate progress based on element position in viewport
      const elementBottom = elementTop + elementHeight;
      const visibleHeight =
        Math.min(windowHeight, elementBottom) - Math.max(0, elementTop);
      const progress = Math.max(0, Math.min(1, visibleHeight / elementHeight));

      // Apply smoothness
      setScrollProgress((prev) => prev + (progress - prev) * smoothness);
    };

    const handleScrollThrottled = () => {
      requestAnimationFrame(handleScroll);
    };

    if (isVisible) {
      window.addEventListener("scroll", handleScrollThrottled, {
        passive: true,
      });
      handleScroll(); // Initial calculation
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, [isVisible, threshold, offset, smoothness]);

  // Calculate animation class based on scroll progress
  const getAnimationClass = () => {
    if (!isVisible) return "image-3d-initial-scroll";

    if (scrollProgress < 0.25) return "image-3d-initial-scroll";
    if (scrollProgress < 0.5) return "image-3d-quarter-scroll";
    if (scrollProgress < 0.75) return "image-3d-half-scroll";
    if (scrollProgress < 0.9) return "image-3d-three-quarter-scroll";
    return "image-3d-full-scroll";
  };

  // Calculate dynamic transform based on exact scroll progress
  const getDynamicTransform = (): { transform: string; opacity: number } => {
    if (!isVisible) {
      return {
        transform:
          "perspective(1500px) rotateX(35deg) rotateY(-25deg) rotateZ(8deg) scale(0.75) translateY(30px)",
        opacity: 0.5,
      };
    }

    const progress = Math.min(1, Math.max(0, scrollProgress));

    // Interpolate values based on progress
    const rotateX = 35 - 35 * progress;
    const rotateY = -25 + 25 * progress;
    const rotateZ = 8 - 8 * progress;
    const scale = 0.75 + 0.25 * progress;
    const translateY = 30 - 30 * progress;
    const opacity = 0.5 + 0.5 * progress;

    return {
      transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale}) translateY(${translateY}px)`,
      opacity: opacity,
    };
  };

  return {
    ref: elementRef,
    scrollProgress,
    isVisible,
    getAnimationClass,
    getDynamicTransform,
  };
};

export default useScrollAnimation;
