import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollTopButton = () => {
  const { pathname } = useLocation();
  const [showTop, setShowTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      setShowTop(window.scrollY > 0 && scrolled >= pageHeight - 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [[pathname]]);

  if (pathname === "/" || !showTop) return null;

  return (
    <div className="btn__container">
    <button className="to__top--btn" onClick={scrollToTop}>
      Back to top ↑
    </button>
    </div>
  );
};

export default ScrollTopButton;
