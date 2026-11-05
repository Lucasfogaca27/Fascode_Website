import { useEffect, useRef } from "react";

/** Linha fina no topo que acompanha o quanto da página já foi rolado. */
const ScrollProgress = () => {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 h-[3px] z-[70] pointer-events-none">
      <div
        ref={bar}
        className="h-full origin-left bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 shadow-[0_0_12px_hsl(var(--purple-500))]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};

export default ScrollProgress;
