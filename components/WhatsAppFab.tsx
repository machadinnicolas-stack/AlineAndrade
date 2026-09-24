"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/content";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      const contact = document.getElementById("contato");
      const atContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.75 : false;
      setVisible(pastHero && !atContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/${business.phoneWhatsapp}?text=${encodeURIComponent("Oi! Vim pelo site e quero agendar um horário")}`}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-verde text-creme shadow-[0_10px_40px_-8px_rgba(63,92,58,0.6)] transition-[opacity,translate] duration-500 ease-[var(--ease-studio)] sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
