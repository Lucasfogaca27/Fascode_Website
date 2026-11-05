import { useEffect } from "react";

/**
 * Faz os elementos com .animate-fade-in-up animarem só quando entram na tela.
 * Sem JS (ou antes de rodar) tudo continua visível, porque a classe
 * .reveal-ready só é adicionada aqui.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const observe = () =>
      document
        .querySelectorAll(".animate-fade-in-up:not(.in-view)")
        .forEach((el) => observer.observe(el));

    root.classList.add("reveal-ready");
    observe();

    // Pega elementos que aparecem depois (ex.: acordeões), agrupando as mudanças por frame
    let raf = 0;
    const mutation = new MutationObserver(() => {
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; observe(); });
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      mutation.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);
}
