/* About Us — story, mission, values, programs. Civic Trust editorial layout. */
import { Heart, Handshake, Eye, Compass } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProgramCard from "@/components/ProgramCard";
import CtaBand from "@/components/CtaBand";
import { PROGRAMS } from "@/data";
import { groupPhoto, iftarDinner, memorialPatrol, outreachStreet } from "@/assets";

const VALUES = [
  {
    icon: Handshake,
    title: "Trust first",
    text: "We show up consistently, listen before we act, and partner with residents and local organizations.",
  },
  {
    icon: Eye,
    title: "Cultural understanding",
    text: "Our work is grounded in the lived experience of the community we serve and the people who lead it.",
  },
  {
    icon: Compass,
    title: "Prevention over reaction",
    text: "We aim to prevent harm before it happens through presence, mentorship, and connection.",
  },
  {
    icon: Heart,
    title: "Care for families",
    text: "When trusted adults show up, young people feel seen — and families feel supported.",
  },
];

export default function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our story"
        title="Built with the community, for the community"
        subtitle="We started Somali Youth Link to meet a simple need: keep young people safe while helping families feel supported and connected."
        image={groupPhoto}
      />

      {/* STORY */}
      <section className="py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <span className="eyebrow">Who we are</span>
            <div className="brand-rule mt-3" />
            <h2 className="section-title mt-4">Grounded in trust and presence</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Our work is grounded in trust, cultural understanding, and
              consistent presence — showing up in neighborhoods, listening first,
              and partnering with residents and local organizations to prevent
              harm before it happens.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our trained, unarmed peace ambassadors help de-escalate conflict,
              promote nonviolence, and connect youth and families to resources.
              Through mentorship in workforce development, arts, and sports — and
              through monthly parent &amp; youth safety discussions — we build
              skills, confidence, and stronger relationships that support
              long-term community safety.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={memorialPatrol}
                alt="SYL ambassadors in the community"
                className="rounded-xl object-cover aspect-[3/4] w-full shadow-md"
              />
              <div className="grid gap-4">
                <img
                  src={outreachStreet}
                  alt="SYL outreach on the street"
                  className="rounded-xl object-cover aspect-[4/3] w-full shadow-md"
                />
                <img
                  src={iftarDinner}
                  alt="Community Iftar dinner"
                  className="rounded-xl object-cover aspect-[4/3] w-full shadow-md"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-24 bg-secondary/60">
        <div className="container">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What guides us</span>
            <div className="brand-rule mt-3" />
            <h2 className="section-title mt-4">Our values</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-card border border-border p-7 shadow-sm hover:shadow-md transition-shadow">
                  <span className="grid place-items-center size-12 rounded-xl bg-sky-soft text-navy">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-20 md:py-24">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="text-sky text-5xl font-display leading-none">“</div>
            <blockquote className="font-display text-2xl md:text-3xl font-semibold text-navy leading-snug">
              When trusted adults show up consistently, young people feel seen —
              and families feel supported. Somali Youth Link helps our community
              choose safety, connection, and hope.
            </blockquote>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              A community perspective
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="pb-20 md:pb-24">
        <div className="container">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Our programs</span>
            <div className="brand-rule mt-3" />
            <h2 className="section-title mt-4">
              Practical support and prevention
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              We meet people where they are and build pathways to safety and
              opportunity.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((program, i) => (
              <Reveal key={program.id} delay={i * 0.08}>
                <ProgramCard program={program} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
