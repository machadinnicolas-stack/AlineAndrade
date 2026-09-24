"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.batch(".service-card", {
        start: "top 88%",
        onEnter: (els) =>
          gsap.from(els, { y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out", overwrite: true }),
      });
    },
    { scope: rootRef }
  );

  return (
    <section id="servicos" ref={rootRef} className="bg-verde-fundo py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-dourado-claro">O que fazemos</p>
          <h2 className="font-display mt-4 text-3xl leading-tight text-creme sm:text-4xl">
            Serviços do Studio19
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`service-card rounded-[2rem] border p-7 transition-colors ${
                service.highlight
                  ? "border-transparent bg-dourado text-preto sm:col-span-2 lg:col-span-1 lg:row-span-2"
                  : "border-transparent bg-creme/95 text-preto"
              } ${i % 3 === 1 ? "lg:mt-8" : ""}`}
            >
              <h3 className="font-display text-xl text-preto">{service.label}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${service.highlight ? "text-preto/70" : "text-preto/65"}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
