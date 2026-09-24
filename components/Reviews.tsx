"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { business, reviews } from "@/lib/content";
import { StarIcon } from "./icons";

export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (_ctx, contextSafe) => {
      const track = trackRef.current;
      if (!track) return;

      const tween = gsap.to(track, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      const pause = contextSafe!(() => tween.pause());
      const resume = contextSafe!(() => tween.resume());
      track.addEventListener("mouseenter", pause);
      track.addEventListener("mouseleave", resume);

      return () => {
        track.removeEventListener("mouseenter", pause);
        track.removeEventListener("mouseleave", resume);
      };
    },
    { scope: rootRef }
  );

  const doubled = [...reviews, ...reviews];

  return (
    <section id="avaliacoes" ref={rootRef} className="overflow-hidden bg-creme-dark/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-verde">Quem já passou por aqui</p>
            <h2 className="font-display mt-4 text-3xl leading-tight text-preto sm:text-4xl">
              Avaliações no Google
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-preto/10 bg-white/70 px-5 py-4">
            <div className="flex text-dourado">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="size-4" />
              ))}
            </div>
            <p className="text-sm font-semibold text-preto">
              {business.rating.toFixed(1).replace(".", ",")} · {business.reviewCount} avaliações
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div ref={trackRef} className="flex w-max gap-5 px-5 sm:px-8">
          {doubled.map((review, i) => (
            <blockquote
              key={i}
              className="w-[20rem] shrink-0 rounded-[2rem] border border-preto/10 bg-white/80 p-7 sm:w-[24rem]"
            >
              <div className="flex text-dourado">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} className="size-3.5" />
                ))}
              </div>
              <p className="mt-4 text-preto/80">&ldquo;{review.quote}&rdquo;</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
