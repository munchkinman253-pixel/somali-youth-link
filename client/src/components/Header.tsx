import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NAV, CONTACT } from "@/data";
import { logo } from "@/assets";
import { cn } from "@/lib/utils";

export default function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location === "/" : location.startsWith(path);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Somali Youth Link logo"
            className="h-11 w-auto md:h-12"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-bold text-navy text-[0.98rem] tracking-tight">
              Somali Youth Link
            </span>
            <span className="text-[0.68rem] font-semibold tracking-[0.28em] text-sky mt-0.5">
              S.Y.L. · MINNEAPOLIS
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative px-3.5 py-2 text-sm font-semibold rounded-md transition-colors",
                isActive(item.path)
                  ? "text-navy"
                  : "text-muted-foreground hover:text-navy"
              )}
            >
              {item.label}
              {isActive(item.path) && (
                <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-sky" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="give" size="lg" className="hidden sm:inline-flex">
            <Link href="/donate">
              <Heart className="size-4" /> Donate
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86%] max-w-sm p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex items-center gap-3 p-5 border-b border-border">
                <img src={logo} alt="SYL" className="h-10 w-auto" />
                <div className="leading-tight">
                  <p className="font-display font-bold text-navy">Somali Youth Link</p>
                  <p className="text-xs tracking-widest text-sky font-semibold">
                    S.Y.L.
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-3">
                {NAV.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-base font-semibold transition-colors",
                      isActive(item.path)
                        ? "bg-sky-soft text-navy"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/donate"
                  onClick={() => setOpen(false)}
                  className="mt-2 px-4 py-3 rounded-lg text-base font-semibold bg-[var(--give)] text-white flex items-center gap-2"
                >
                  <Heart className="size-4" /> Donate
                </Link>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-3 px-4 py-3 rounded-lg text-sm text-muted-foreground flex items-center gap-2 border border-border"
                >
                  <Mail className="size-4 text-sky" /> {CONTACT.email}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
