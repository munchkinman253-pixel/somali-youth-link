/* Donate — amount picker, where donations go, giving FAQ.
   NOTE: Wire the "Donate" action to the org's real Stripe/PayPal/Donorbox link
   by setting DONATE_URL below. Until then it prompts contact-to-give. */
import { useState } from "react";
import { Link } from "wouter";
import {
  Heart,
  ShieldCheck,
  GraduationCap,
  MessageSquareHeart,
  Utensils,
  Lock,
  Mail,
  Check,
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { CONTACT } from "@/data";
import { donateBand } from "@/assets";
import { cn } from "@/lib/utils";

// TODO: replace with the organization's real donation link when available.
const DONATE_URL = "";

const AMOUNTS = [25, 50, 100, 250];

const ALLOCATIONS = [
  {
    icon: ShieldCheck,
    title: "Peace Ambassador Outreach",
    text: "Trained, unarmed ambassadors help de-escalate conflict, promote nonviolence, and build safer neighborhoods.",
  },
  {
    icon: GraduationCap,
    title: "Mentoring & Guiding Youth",
    text: "Workforce, arts, and sports mentorship that builds skills, confidence, and opportunity for young people.",
  },
  {
    icon: MessageSquareHeart,
    title: "Monthly Parent & Youth Meetings",
    text: "Facilitated conversations that build trust, share safety strategies, and strengthen relationships.",
  },
  {
    icon: Utensils,
    title: "Emergency Food & Legal Resources",
    text: "Resource navigation, referrals, and support for families facing food insecurity or legal needs.",
  },
];

const FAQS = [
  {
    q: "Is my donation tax-deductible?",
    a: "Deductibility depends on your tax situation. If you need documentation for your records, we can provide a receipt — please reach out after donating.",
  },
  {
    q: "Can I give monthly?",
    a: "Yes. Monthly giving helps keep programs consistent. Contact us and we'll help you set up a recurring gift.",
  },
  {
    q: "How do I donate by check?",
    a: "Please contact us for the correct mailing details and to note the purpose of your gift.",
  },
  {
    q: "Can I donate in honor of someone?",
    a: "Yes. You can make a gift in honor or memory of someone. Include the details when you contact us so we can acknowledge it appropriately.",
  },
  {
    q: "Will I receive a receipt?",
    a: "Yes. If you include your email when donating or contact us afterward, we'll send a confirmation/receipt for your records.",
  },
  {
    q: "I represent a business — can we partner or sponsor?",
    a: "We welcome community partners. Contact us to discuss sponsorships, in-kind donations, or referrals.",
  },
];

export default function Donate() {
  const [amount, setAmount] = useState<number | "custom">(50);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(false);

  const chosen = amount === "custom" ? Number(custom) || 0 : amount;

  const handleGive = () => {
    if (DONATE_URL) {
      window.open(DONATE_URL, "_blank", "noopener");
      return;
    }
    const subject = encodeURIComponent(
      `Donation of $${chosen}${recurring ? " / month" : ""} — Somali Youth Link`
    );
    const body = encodeURIComponent(
      `Hello Somali Youth Link,\n\nI would like to make a ${
        recurring ? "monthly" : "one-time"
      } donation of $${chosen}. Please let me know the best way to complete my gift.\n\nThank you!`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    toast.success("Thank you! Opening your email so we can set up your gift.");
  };

  return (
    <Layout>
      <PageHero
        eyebrow="More than a donation"
        title="Help keep youth safe and families supported"
        subtitle="Every donation—no matter the amount—helps prevent violence, support families, and create positive pathways for youth."
        image={donateBand}
      />

      {/* GIVE CARD */}
      <section className="py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">Make a gift</span>
            <div className="brand-rule mt-3" />
            <h2 className="section-title mt-4">Your support in action</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Your donation supports peace ambassador outreach, youth mentorship,
              safety discussions, and family support services. Choose an amount
              that's right for you.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Funds unarmed, community-rooted violence prevention",
                "Sustains monthly parent & youth safety discussions",
                "Helps families access food, legal, and immigration resources",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <Check className="size-5 text-sky shrink-0" />
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="rounded-3xl border border-border bg-card p-7 md:p-9 shadow-md">
              <div className="flex items-center gap-2">
                <Heart className="size-5 text-[var(--give)]" />
                <h3 className="font-display text-xl font-bold text-navy">
                  Choose your donation
                </h3>
              </div>

              {/* Frequency toggle */}
              <div className="mt-5 inline-flex rounded-full border border-border bg-secondary p-1">
                {[
                  { key: false, label: "One-time" },
                  { key: true, label: "Monthly" },
                ].map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setRecurring(opt.key)}
                    className={cn(
                      "px-5 py-2 text-sm font-semibold rounded-full transition-colors",
                      recurring === opt.key
                        ? "bg-navy text-white"
                        : "text-muted-foreground hover:text-navy"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Amounts */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {AMOUNTS.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAmount(a)}
                    className={cn(
                      "rounded-xl border-2 py-3 font-display font-bold text-lg transition-all",
                      amount === a
                        ? "border-sky bg-sky-soft text-navy"
                        : "border-border text-muted-foreground hover:border-sky"
                    )}
                  >
                    ${a}
                  </button>
                ))}
              </div>

              {/* Custom */}
              <button
                onClick={() => setAmount("custom")}
                className={cn(
                  "mt-3 w-full rounded-xl border-2 p-3 text-left transition-all",
                  amount === "custom" ? "border-sky bg-sky-soft" : "border-border"
                )}
              >
                <span className="text-sm font-semibold text-navy">
                  Custom amount
                </span>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-bold text-navy">$</span>
                  <input
                    type="number"
                    min={1}
                    value={custom}
                    onFocus={() => setAmount("custom")}
                    onChange={(e) => setCustom(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full bg-transparent text-lg font-bold text-navy outline-none placeholder:font-normal placeholder:text-muted-foreground/60"
                  />
                </div>
              </button>

              <Button
                onClick={handleGive}
                variant="give"
                size="xl"
                className="mt-6 w-full"
                disabled={chosen <= 0}
              >
                <Heart className="size-5" /> Donate ${chosen > 0 ? chosen : ""}
                {recurring && chosen > 0 ? " / month" : ""}
              </Button>

              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Lock className="size-3.5" /> Secure giving. You'll receive a
                confirmation/receipt after your donation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHERE IT GOES */}
      <section className="py-20 md:py-24 bg-secondary/60">
        <div className="container">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Where your donation goes</span>
            <div className="brand-rule mt-3" />
            <h2 className="section-title mt-4">Meeting needs today, building safer futures</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ALLOCATIONS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-card border border-border p-7 shadow-sm">
                  <span className="grid place-items-center size-12 rounded-xl bg-sky-soft text-navy">
                    <a.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-navy leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {a.text}
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
            <span className="eyebrow">Have questions?</span>
            <div className="brand-rule mt-3" />
            <h2 className="section-title mt-4">Donation FAQs</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We're here to help with giving, receipts, monthly gifts, and
              partnerships.
            </p>
            <Button asChild size="lg" className="mt-6">
              <a href={`mailto:${CONTACT.email}`}>
                <Mail className="size-4" /> Email us
              </a>
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`d-${i}`}>
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

      {/* NEEDS SUPPORT */}
      <section className="pb-20 md:pb-24">
        <div className="container">
          <div className="rounded-3xl bg-[var(--navy)] p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              Need support, or know someone who does?
            </h2>
            <p className="mt-3 text-white/80 max-w-2xl mx-auto">
              If you or someone you know needs resources, mentorship, or safety
              support, reach out — Somali Youth Link is here.
            </p>
            <Button asChild size="xl" variant="outline" className="mt-7 border-white/30 bg-white/5 text-white hover:bg-white/15">
              <Link href="/contact">
                <Mail className="size-5" /> Contact us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
