"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { business } from "@/lib/content";
import { ArrowRightIcon } from "./icons";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.4, defaults: { ease: "power3.out" } });
      tl.from(".hero-media", { scale: 1.15, opacity: 0, duration: 1.6, ease: "power2.out" })
        .from(".hero-eyebrow", { y: 16, opacity: 0, duration: 0.7 }, "-=1")
        .from(".hero-title-line", { y: "110%", opacity: 0, duration: 0.9, stagger: 0.08 }, "-=0.4")
        .from(".hero-sub", { y: 16, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.45")
        .from(".hero-scrollcue", { opacity: 0, duration: 0.6 }, "-=0.2");

      gsap.to(".hero-scrollcue-dot", {
        y: 10,
        opacity: 0.3,
        repeat: -1,
        yoyo: true,
        duration: 1.1,
        ease: "power1.inOut",
      });
    },
    { scope: rootRef }
  );

  return (
    <section
      id="topo"
      ref={rootRef}
      className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-preto"
    >
      <div className="hero-media absolute inset-0">
        {/* Placeholder de referência (GIF pesado) — trocar por vídeo .mp4/.webm comprimido antes do lançamento */}
        <img
          src="/media/hero-01.gif"
          alt="Cliente com cabelo liso e brilhoso, resultado do Studio19"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-preto via-preto/40 to-preto/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-preto/70 via-transparent to-preto/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <p className="hero-eyebrow mb-4 text-xs uppercase tracking-[0.4em] text-dourado-claro">
          Studio19 · Mairiporã
        </p>
        <h1 className="font-display max-w-3xl text-[2.6rem] leading-[1.05] text-creme sm:text-6xl lg:text-7xl">
          <span className="block overflow-hidden">
            <span className="hero-title-line block">Penteados com</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-title-line block text-dourado-claro">assinatura própria</span>
          </span>
        </h1>
        <p className="hero-sub mt-6 max-w-lg text-base text-creme/80 sm:text-lg">
          Cor, corte, liso perfeito e penteados de noiva — com a Aline Andrade, nota{" "}
          {business.rating.toFixed(1).replace(".", ",")} e mais de {business.reviewCount}{" "}
          avaliações no Google.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener"
            className="hero-cta group inline-flex items-center gap-2 rounded-full bg-dourado px-7 py-3.5 text-sm font-semibold text-preto transition-transform duration-300 ease-[var(--ease-studio)] hover:scale-[1.04]"
          >
            Agende seu horário
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#resultados"
            className="hero-cta text-sm font-medium text-creme/85 underline decoration-dourado/50 decoration-2 underline-offset-4 transition-colors hover:text-creme"
          >
            Ver resultados
          </a>
        </div>
      </div>

      <div className="hero-scrollcue absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8">
        <div className="hero-scrollcue-dot h-8 w-[1.5px] bg-creme/50" />
      </div>
    </section>
  );
}
