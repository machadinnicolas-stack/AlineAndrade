"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { business } from "@/lib/content";
import { CloseIcon, MenuIcon } from "./icons";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15,
      });

      // Respiro sutil no CTA pra puxar o olho sem virar propaganda piscando.
      gsap.to(ctaRef.current, {
        boxShadow: "0 0 0 8px rgba(201,163,92,0.0)",
        keyframes: [
          { boxShadow: "0 0 0 0px rgba(201,163,92,0.35)" },
          { boxShadow: "0 0 0 10px rgba(201,163,92,0)" },
        ],
        duration: 2.2,
        repeat: -1,
        repeatDelay: 1.6,
        ease: "power1.out",
      });
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-creme-dark/60 bg-creme/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#topo" className="flex flex-col leading-none">
          <span className="font-display text-xl tracking-tight text-preto sm:text-2xl">
            Aline Andrade
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.35em] text-verde">
            Studio19
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-preto/70 transition-colors hover:text-preto"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            ref={ctaRef}
            href={business.bookingUrl}
            target="_blank"
            rel="noopener"
            className="hidden rounded-full bg-dourado px-5 py-2.5 text-sm font-semibold text-preto shadow-[0_8px_24px_-8px_rgba(201,163,92,0.7)] transition-transform duration-300 ease-[var(--ease-studio)] hover:scale-[1.04] sm:inline-block"
          >
            Agende seu horário
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-preto/15 text-preto lg:hidden"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-creme-dark/60 bg-creme px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-preto/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener"
              className="mt-2 rounded-full bg-dourado px-5 py-3 text-center text-sm font-semibold text-preto"
            >
              Agende seu horário
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
