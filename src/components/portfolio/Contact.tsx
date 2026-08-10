import { useEffect, useState, type FormEvent } from "react";
import { ArrowUp, Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import { PROFILE } from "./data";

export function Contact() {
  const [sending, setSending] = useState(false);

  // NOTE: Frontend only. Wire this handler to an email service / backend later.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    toast("Message form is not connected yet", {
      description: `Please email ${PROFILE.email} directly for now.`,
    });
    setSending(false);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect & Build Something Amazing"
        subtitle="I'm always interested in learning, collaborating, and exploring new opportunities in technology."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass-card p-6">
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Mail size={18} />
                </span>
                <span className="min-w-0 break-all">{PROFILE.email}</span>
              </a>
            </li>
            <li>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Linkedin size={18} />
                </span>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Github size={18} />
                </span>
                GitHub
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <form onSubmit={handleSubmit} className="glass-card grid gap-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Name" placeholder="Your name" />
              <Field id="email" label="Email" type="email" placeholder="you@example.com" />
            </div>
            <Field id="subject" label="Subject" placeholder="What is this about?" />
            <div className="grid gap-2">
              <label htmlFor="message" className="text-xs font-semibold text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Write your message..."
                className="rounded-xl border border-border bg-glass px-4 py-3 text-sm text-foreground outline-hidden transition-colors placeholder:text-muted-foreground/70 focus:border-primary/70"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-xs font-semibold text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-border bg-glass px-4 py-3 text-sm text-foreground outline-hidden transition-colors placeholder:text-muted-foreground/70 focus:border-primary/70"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
        <p className="font-display text-sm font-semibold">© 2026 Shanmuga Priya. SK</p>
        <p className="text-xs text-muted-foreground">
          &quot;Merging Electronics, Software &amp; Innovation.&quot;
        </p>
        <div className="flex gap-3">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Github size={16} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Send an email"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/80 text-primary backdrop-blur transition-opacity ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}