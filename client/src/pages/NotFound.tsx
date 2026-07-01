import { Link } from "wouter";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lion } from "@/assets";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-[var(--navy-deep)] px-6 text-center">
      <div>
        <img src={lion} alt="SYL lion" className="mx-auto h-24 w-auto rounded-xl bg-white/95 p-2" />
        <p className="mt-8 font-display text-6xl font-extrabold text-white">404</p>
        <h1 className="mt-2 font-display text-2xl font-bold text-white">
          Page not found
        </h1>
        <p className="mt-3 text-white/70 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back to safety.
        </p>
        <Button asChild size="xl" className="mt-8 bg-white text-navy hover:bg-white/90">
          <Link href="/">
            <Home className="size-5" /> Back home
          </Link>
        </Button>
      </div>
    </div>
  );
}
