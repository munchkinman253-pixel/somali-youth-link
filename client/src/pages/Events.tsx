/* Events — filterable upcoming/past events, event types, FAQ. */
import { useMemo, useState } from "react";
import { CalendarDays, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EVENTS, type SylEvent } from "@/data";
import { iftarDinner } from "@/assets";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Upcoming", "Past"] as const;
type Filter = (typeof FILTERS)[number];

const CATEGORY_COLORS: Record<SylEvent["category"], string> = {
  Meeting: "bg-sky-soft text-navy",
  Community: "bg-emerald-100 text-emerald-800",
  Advocacy: "bg-amber-100 text-amber-800",
};

const FAQS = [
  {
    q: "How do I find upcoming event dates and locations?",
    a: "Send us a message through our contact page and we'll share the latest schedule and locations.",
  },
  {
    q: "Are events free to attend?",
    a: "Most events are free. If registration is needed, we'll share details when you contact us.",
  },
  {
    q: "Who can attend?",
    a: "Youth, parents/caregivers, and community members are welcome. Some sessions may be tailored to specific age groups.",
  },
  {
    q: "Do I need to register?",
    a: "Registration depends on the event. Reach out and we'll confirm what's needed for the next session.",
  },
  {
    q: "Can my organization partner or host an event?",
    a: "Yes. We welcome partnerships with schools, community groups, and local organizations — contact us to collaborate.",
  },
  {
    q: "How can I support events if I can't attend?",
    a: "You can donate, refer families who may benefit, or connect us with partners and resources.",
  },
];

const EVENT_TYPES = [
  {
    title: "Monthly Parent & Youth Safety Discussions",
    text: "Facilitated conversations that build trust, share safety strategies, and strengthen relationships between youth, parents, and community partners.",
  },
  {
    title: "Youth Mentorship Meetups",
    text: "Workforce development, arts, and sports mentorship gatherings that help young people build skills, confidence, and positive pathways.",
  },
  {
    title: "Community Peace & Violence Prevention Outreach",
    text: "Neighborhood presence and outreach led by trained, unarmed peace ambassadors focused on de-escalation and connection to resources.",
  },
  {
    title: "Family Support & Food Drive Events",
    text: "Resource navigation, referrals, and support for families facing food insecurity or needing help accessing essential services.",
  },
];

function EventCard({ event }: { event: SylEvent }) {
  return (
    <article className="group flex flex-col sm:flex-row gap-5 rounded-2xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="sm:w-52 shrink-0 overflow-hidden rounded-xl">
        <img
          src={event.image}
          alt={event.title}
          className="h-44 sm:h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col py-1">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className={cn("rounded-full border-0", CATEGORY_COLORS[event.category])}>
            {event.category}
          </Badge>
          {event.status === "upcoming" && (
            <Badge className="rounded-full border-0 bg-[var(--give)] text-white">
              Upcoming
            </Badge>
          )}
        </div>
        <h3 className="mt-3 font-display text-lg font-bold text-navy leading-snug">
          {event.title}
        </h3>
        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-4 text-sky" /> {event.date}
          </span>
          {event.time && (
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 text-sky" /> {event.time}
            </span>
          )}
          {event.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 text-sky" /> {event.location}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {event.description}
        </p>
      </div>
    </article>
  );
}

export default function Events() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    const list = [...EVENTS].sort((a, b) => b.dateSort.localeCompare(a.dateSort));
    if (filter === "Upcoming") return list.filter((e) => e.status === "upcoming");
    if (filter === "Past") return list.filter((e) => e.status === "past");
    return list;
  }, [filter]);

  return (
    <Layout>
      <PageHero
        eyebrow="Community events & safety conversations"
        title="Events that bring families, youth, and partners together"
        subtitle="Join us for monthly parent & youth safety discussions, mentorship meetups, and community resource events that strengthen connection and promote peace."
        image={iftarDinner}
      />

      {/* EVENT LIST */}
      <section className="py-20 md:py-24">
        <div className="container">
          <Reveal className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="eyebrow">Schedule</span>
              <h2 className="section-title mt-3">Our events</h2>
            </div>
            <div className="inline-flex rounded-full border border-border bg-secondary p-1">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-5 py-2 text-sm font-semibold rounded-full transition-colors",
                    filter === f
                      ? "bg-navy text-white shadow"
                      : "text-muted-foreground hover:text-navy"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5">
            {filtered.map((event, i) => (
              <Reveal key={event.id} delay={i * 0.06}>
                <EventCard event={event} />
              </Reveal>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-10">
                No events in this category right now — check back soon.
              </p>
            )}
          </div>

          <Reveal className="mt-8">
            <p className="text-sm text-muted-foreground">
              Want the latest dates and locations?{" "}
              <Link href="/contact" className="text-sky font-semibold hover:underline">
                Contact us
              </Link>{" "}
              and we'll share the schedule.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="py-20 md:py-24 bg-secondary/60">
        <div className="container">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What to expect</span>
            <div className="brand-rule mt-3" />
            <h2 className="section-title mt-4">Our event types</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              We host welcoming, community-centered events designed to build
              safety, belonging, and opportunity.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {EVENT_TYPES.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-navy">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <span className="eyebrow">Good to know</span>
            <div className="brand-rule mt-3" />
            <h2 className="section-title mt-4">Event FAQs</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Questions about attending or partnering with Somali Youth Link?
              We're here to help.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">
                Ask a question <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-display font-semibold text-navy hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Support community safety"
        title="Help make these gatherings possible"
        text="Your donation—no matter the amount—supports violence prevention, mentorship, and family support services that strengthen our community."
      />
    </Layout>
  );
}
