"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { business } from "@/lib/content";
import { ArrowRightIcon, InstagramIcon, WhatsAppIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const rootRef = useRef<HTMLDivElement>(null);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(business.mapsQuery)}&output=embed`;

  useGSAP(
    () => {
      gsap.from(".contact-copy > *", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
      });
      gsap.from(".contact-map", {
        clipPath: "inset(0 100% 0 0 round 2rem)",
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
      });
    },
    { scope: rootRef }
  );

  return (
    <section id="contato" ref={rootRef} className="bg-preto-soft py-24 text-creme sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="contact-copy">
          <p className="text-xs uppercase tracking-[0.35em] text-dourado-claro">Venha nos visitar</p>
          <h2 className="font-display mt-4 text-3xl leading-tight sm:text-4xl">
            Marque seu horário no Studio19
          </h2>
          <p className="mt-5 max-w-md text-creme/70">{business.address}</p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-dourado px-7 py-3.5 text-sm font-semibold text-preto transition-transform duration-300 ease-[var(--ease-studio)] hover:scale-[1.04]"
            >
              Agende seu horário
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a
                href={`https://wa.me/${business.phoneWhatsapp}`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-creme/80 transition-colors hover:text-creme"
              >
                <WhatsAppIcon className="size-4" />
                {business.phoneDisplay}
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-creme/80 transition-colors hover:text-creme"
              >
                <InstagramIcon className="size-4" />
                {business.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="contact-map overflow-hidden rounded-[2rem]">
          <iframe
            title="Localização do Studio19 no mapa"
            src={mapSrc}
            className="h-80 w-full grayscale invert-[0.92] sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
