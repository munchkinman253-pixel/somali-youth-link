/* Gallery — albums of real community photos with interactive lightbox. */
import { useState } from "react";
import { Expand } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Lightbox, { type LightboxImage } from "@/components/Lightbox";
import { GALLERY } from "@/data";
import { memorialPatrol } from "@/assets";

export default function Gallery() {
  // Flatten all album images into one list for the lightbox navigation.
  const allImages: LightboxImage[] = GALLERY.flatMap((a) => a.images);
  const [active, setActive] = useState<number | null>(null);

  // Map each album's local index to the global flat index.
  let running = 0;
  const albumsWithOffset = GALLERY.map((album) => {
    const offset = running;
    running += album.images.length;
    return { ...album, offset };
  });

  return (
    <Layout>
      <PageHero
        eyebrow="Community moments"
        title="Gallery"
        subtitle="A look at Somali Youth Link in action — peace ambassador outreach, mentorship, safety discussions, and community support."
        image={memorialPatrol}
      />

      <section className="py-20 md:py-24">
        <div className="container space-y-20">
          {albumsWithOffset.map((album) => (
            <div key={album.id}>
              <Reveal className="max-w-2xl">
                <span className="eyebrow">Album</span>
                <div className="brand-rule mt-3" />
                <h2 className="section-title mt-4">{album.title}</h2>
                <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
                  {album.caption}
                </p>
              </Reveal>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {album.images.map((img, i) => {
                  const globalIndex = album.offset + i;
                  return (
                    <Reveal key={i} delay={i * 0.04}>
                      <button
                        onClick={() => setActive(globalIndex)}
                        className="group relative block w-full overflow-hidden rounded-xl aspect-[4/3]"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <span className="absolute inset-0 bg-[var(--navy-deep)]/0 group-hover:bg-[var(--navy-deep)]/35 transition-colors grid place-items-center">
                          <Expand className="size-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                      </button>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        images={allImages}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />

      <CtaBand
        eyebrow="Keep programs going"
        title="Your support helps keep youth safe"
        text="Donations help fund peace ambassador outreach, mentorship, safety discussions, and family support services."
      />
    </Layout>
  );
}
