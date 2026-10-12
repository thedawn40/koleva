import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Container, LinkButton } from "./ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "transition-colors duration-300",
          scrolled
            ? "border-b border-line bg-white/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-18 items-center justify-between gap-4">
          <Logo />

          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-accent-50 hover:text-primary-800"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LinkButton href="#daftar-tunggu" size="md">
              Gabung Daftar Tunggu
            </LinkButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-primary-900 transition-colors hover:bg-accent-50 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden"
          >
            <Container className="pb-4">
              <div className="flex flex-col gap-1 rounded-3xl border border-line bg-white p-3 shadow-soft">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-accent-50 hover:text-primary-800"
                  >
                    {link.label}
                  </a>
                ))}
                <LinkButton
                  href="#daftar-tunggu"
                  size="md"
                  className="mt-2 w-full"
                  onClick={() => setOpen(false)}
                >
                  Gabung Daftar Tunggu
                </LinkButton>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
