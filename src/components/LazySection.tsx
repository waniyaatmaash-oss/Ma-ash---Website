
import React, { useRef, useState, useEffect } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  minHeight?: string;
}

export default function LazySection({ children, minHeight = "200px" }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: isVisible ? "auto" : minHeight }}>
      {isVisible ? children : null}
    </div>
  );
}
