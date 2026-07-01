/* Contact — interactive form (opens email with prefilled content) + info. */
import { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CONTACT } from "@/data";
import { outreachStreet } from "@/assets";

const REASONS = [
  "Program question",
  "Referral / request support",
  "Partnership inquiry",
  "Volunteer",
  "Event information",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and a message.");
      return;
    }
    const subject = encodeURIComponent(
      `[Website] ${form.reason || "Message"} — ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nReason: ${form.reason || "N/A"}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success("Opening your email app to send the message.");
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Contact Somali Youth Link"
        title="We're here to help — reach out today"
        subtitle="Questions about our peace ambassador work, mentorship programs, monthly safety discussions, or family support services? Contact us and we'll respond as soon as we can."
        image={outreachStreet}
      />

      <section className="py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-12">
          {/* INFO */}
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Get in touch</span>
            <div className="brand-rule mt-3" />
            <h2 className="section-title mt-4">Contact our team</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Use the form to share what you need — program questions, referrals,
              partnership inquiries, or support requests. If this is urgent,
              please email us directly.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:border-sky transition-colors"
              >
                <span className="grid place-items-center size-11 rounded-xl bg-sky-soft text-navy shrink-0">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-navy">Email us</p>
                  <p className="text-sm text-muted-foreground break-all">
                    {CONTACT.email}
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid place-items-center size-11 rounded-xl bg-sky-soft text-navy shrink-0">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-navy">Where we serve</p>
                  <p className="text-sm text-muted-foreground">{CONTACT.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid place-items-center size-11 rounded-xl bg-sky-soft text-navy shrink-0">
                  <MessageSquare className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-navy">Partner with us</p>
                  <p className="text-sm text-muted-foreground">
                    We welcome referrals, collaboration opportunities, and
                    community questions.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-7 md:p-9 shadow-sm">
              {sent ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto size-14 text-sky" />
                  <h3 className="mt-4 font-display text-xl font-bold text-navy">
                    Thank you for reaching out
                  </h3>
                  <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                    Your email app should have opened with your message ready to
                    send. If it didn't, email us directly at{" "}
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-sky font-semibold"
                    >
                      {CONTACT.email}
                    </a>
                    .
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => setSent(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your name *</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>What can we help with?</Label>
                    <Select
                      value={form.reason}
                      onValueChange={(v) => update("reason", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        {REASONS.map((r) => (
                          <SelectItem key={r} value={r}>
                            {r}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us what you're looking for..."
                    />
                  </div>

                  <Button type="submit" size="xl" className="w-full sm:w-auto">
                    <Send className="size-5" /> Send message
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Submitting opens your email app with the message pre-filled to{" "}
                    {CONTACT.email}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
