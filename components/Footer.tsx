import { business } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-preto-soft px-5 py-10 text-creme/60 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-creme/10 pt-8 text-center text-sm sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-base text-creme">{business.shortName}</p>
          <p className="mt-1 text-xs text-creme/50">{business.address}</p>
        </div>
        <p className="text-xs text-creme/40">
          © {new Date().getFullYear()} {business.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
