"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
}: AnimatedCounterProps) {

  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }

      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();

  }, []);

  useEffect(() => {

    if (!startAnimation) return;

    let start = 0;

    const duration = 5000;
    const increment = value / (duration / 30);

    const timer = setInterval(() => {

      start += increment;

      if (start >= value) {

        setCount(value);
        clearInterval(timer);

      } else {

        setCount(Math.floor(start));

      }

    }, 30);

    return () => clearInterval(timer);

  }, [startAnimation, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}