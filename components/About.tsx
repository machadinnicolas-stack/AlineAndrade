"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { business } from "@/lib/content";
import { StarIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-copy > *", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
      });
      gsap.from(".about-media", {
        clipPath: "inset(0 0 100% 0 round 999px)",
        duration: 1.1,
        ease: "power3.inOut",
        scrollTrigger: { trigger: rootRef.current, start: "top 65%" },
      });
      gsap.to(".about-blob", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
      });
    },
    { scope: rootRef }
  );

  return (
    <section id="sobre" ref={rootRef} className="relative overflow-hidden bg-creme py-24 sm:py-32">
      <div
        aria-hidden
        className="about-blob absolute -left-32 top-10 size-[26rem] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-verde-sage/25 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
        <div className="about-copy order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.35em] text-verde">Sobre o studio</p>
          <h2 className="font-display mt-4 text-3xl leading-tight text-preto sm:text-4xl">
            Um espaço pra você sair de cabeça erguida
          </h2>
          <p className="mt-5 max-w-xl text-preto/75">
            Aline Andrade é criadora de conteúdo e cabeleireira à frente do Studio19, em
            Mairiporã. Especialista em penteados e produções de noiva, também assina a técnica
            por trás do Curso Liso Perfeito — hoje ensinado a outras profissionais.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-3 rounded-2xl border border-dourado/30 bg-preto/5 px-5 py-4">
              <div className="flex text-dourado">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-4" />
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-preto">
                  {business.rating.toFixed(1).replace(".", ",")} no Google
                </p>
                <p className="text-xs text-preto/60">{business.reviewCount} avaliações</p>
              </div>
            </div>
            <div className="flex items-center rounded-2xl border border-verde/25 bg-preto/5 px-5 py-4">
              <p className="text-sm text-preto/75">
                Presença confirmada no <span className="font-semibold text-preto">Summit Beauty Brasil</span>
              </p>
            </div>
          </div>
        </div>

        <div className="about-media order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[3rem] rounded-tr-[7rem] shadow-2xl lg:ml-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/media/hero-02-poster.jpg"
              aria-label="Penteado ondulado loiro sendo finalizado no Studio19"
              className="size-full object-cover"
            >
              <source src="/media/hero-02.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
