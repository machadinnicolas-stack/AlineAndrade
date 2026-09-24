"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { business, course } from "@/lib/content";
import { ArrowRightIcon, LeafIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger);

export function Course() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(rootRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
      });
    },
    { scope: rootRef }
  );

  return (
    <section className="px-5 py-4 sm:px-8">
      <div
        ref={rootRef}
        className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-[2rem] bg-verde px-7 py-8 text-creme sm:flex-row sm:items-center sm:px-10"
      >
        <div className="flex items-start gap-4">
          <LeafIcon className="mt-1 size-6 shrink-0 text-verde-sage" />
          <div>
            <p className="font-display text-xl">{course.name}</p>
            <p className="mt-1 max-w-md text-sm text-creme/75">{course.description}</p>
          </div>
        </div>
        <a
          href={business.instagramUrl}
          target="_blank"
          rel="noopener"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-creme/30 px-5 py-2.5 text-sm font-medium text-creme transition-colors hover:bg-creme hover:text-verde"
        >
          Saiba mais no Instagram
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
