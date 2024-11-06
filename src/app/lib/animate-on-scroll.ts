import { MutableRefObject } from "react";

export function animateOnScroll(ref: MutableRefObject<HTMLDivElement | null>) {
  if (ref.current) {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          entry.target.classList.remove("hiddenn");
        } else {
          entry.target.classList.remove("animate");
          entry.target.classList.add("hiddenn");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    observer.observe(ref.current);

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }
}
