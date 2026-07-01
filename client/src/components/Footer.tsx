import { Link } from "wouter";
import { Mail, MapPin, Heart } from "lucide-react";
import { NAV, CONTACT } from "@/data";
import { lion } from "@/assets";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--navy-deep)] text-white/85">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center size-14 rounded-xl bg-white/95 p-1.5">
                <img src={lion} alt="SYL lion" className="h-full w-auto" />
              </span>
              <div>
                <p className="font-display text-xl font-bold text-white">
                  Somali Youth Link
                </p>
                <p className="text-sm tracking-[0.24em] text-sky font-semibold">
                  S.Y.L.
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Trained, unarmed peace ambassadors and mentors keeping youth safe,
              supporting families, and building stronger, safer neighborhoods in
              Minneapolis.
            </p>
            <Button asChild variant="give" size="lg" className="mt-6">
              <Link href="/donate">
                <Heart className="size-4" /> Support our work
              </Link>
            </Button>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-sm text-white/80 hover:text-sky transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/donate"
                  className="text-sm text-white/80 hover:text-sky transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="size-4 mt-0.5 text-sky shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-white/80 hover:text-sky break-all transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-4 mt-0.5 text-sky shrink-0" />
                <span className="text-white/80">{CONTACT.city}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {year} Somali Youth Link (S.Y.L.). All rights reserved.</p>
          <p>We rise by lifting others.</p>
        </div>
      </div>
    </footer>
  );
}
