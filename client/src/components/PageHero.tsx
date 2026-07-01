import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}

/** Full-bleed navy page header with photo overlay for interior pages. */
export default function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--navy-deep)]">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)] via-[var(--navy-deep)]/85 to-[var(--navy)]/50" />
      </div>

      <div className="container relative py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 rounded-full bg-sky" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1 className="mt-4 font-display font-bold text-white text-[clamp(2.1rem,5vw,3.4rem)] leading-[1.05]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
