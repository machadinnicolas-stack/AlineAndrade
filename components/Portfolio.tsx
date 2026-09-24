"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { results } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

// Alterna alturas pra fugir da grade quadrada e dar ritmo à galeria.
const spanPattern = [
  "sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "",
];

export function Portfolio() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.batch(".result-card", {
        start: "top 90%",
        onEnter: (els) =>
          gsap.from(els, {
            y: 50,
            opacity: 0,
            scale: 0.96,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            overwrite: true,
          }),
      });
    },
    { scope: rootRef }
  );

  return (
    <section id="resultados" ref={rootRef} className="bg-preto py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-dourado-claro">Resultados</p>
          <h2 className="font-display mt-4 text-3xl leading-tight text-creme sm:text-4xl">
            Trabalhos recentes do Studio19
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[13rem] grid-cols-2 gap-4 sm:auto-rows-[11rem] sm:grid-cols-3 lg:gap-5">
          {results.map((photo, i) => (
            <div
              key={photo.src}
              className={`result-card group relative overflow-hidden rounded-[1.75rem] ${spanPattern[i] ?? ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-[var(--ease-studio)] group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-preto/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-creme/50">
          Fotos reais de clientes do Studio19, sem edição de resultado.
        </p>
      </div>
    </section>
  );
}
