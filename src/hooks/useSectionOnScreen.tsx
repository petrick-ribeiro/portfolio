import { useEffect, useState, useRef } from "react";
import { UseSectionOnScreenProps } from "./UseSectionOnScreenProps";

const useSectionOnScreen = ({ refs, onVisibilityChange }: UseSectionOnScreenProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<HTMLDivElement>>(
    new Set(),
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      const visible = new Set<HTMLDivElement>();

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.add(entry.target as HTMLDivElement);
        }
      });
      setVisibleSections(visible);
      onVisibilityChange(visible);
    });

    refs.forEach((ref) => {
      if (ref.current) {
        observerRef.current?.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observerRef.current?.unobserve(ref.current);
        }
      });

      observerRef.current?.disconnect();
    };
  }, [refs, onVisibilityChange]);

  return visibleSections;
};

export default useSectionOnScreen;
