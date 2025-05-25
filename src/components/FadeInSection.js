import React, { useRef, useEffect, useState } from "react";

function FadeInSection({ children }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div className={`fade-in-section${isVisible ? " visible" : ""}`} ref={domRef}>
      {children}
    </div>
  );
}
export default FadeInSection;
