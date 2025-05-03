'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Custom hook for scroll animations
export function useAnimateOnScroll(threshold = 0.1, triggerOnce = true) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return { ref, inView };
}

// Hook to add animation classes based on visibility
export function useAnimateClass(threshold = 0.1, triggerOnce = true) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(ref);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, threshold, triggerOnce]);

  return { ref: setRef, isVisible, className: isVisible ? 'is-visible' : '' };
}