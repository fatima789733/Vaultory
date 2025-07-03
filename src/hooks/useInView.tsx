import { useEffect, useRef, useState } from "react";

export default function useInView(threshold: number = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observerTarget = ref.current;
    if (!observerTarget) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(observerTarget);

    return () => {
      if (observerTarget) observer.unobserve(observerTarget);
    };
  }, [threshold]);

  return { ref, isInView };
}
