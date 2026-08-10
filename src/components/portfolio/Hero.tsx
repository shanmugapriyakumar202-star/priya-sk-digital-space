import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroTech from "@/assets/hero-tech.png";
import { PROFILE } from "./data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div
        aria-hidden="true"
        className="blob left-[-10%] top-[-10%] h-72 w-72 bg-primary/25"
        style={{ animationDelay: "0s" }}
      />
      <div
        aria-hidden="true"
        className="blob right-[-5%] top-[20%] h-80 w-80 bg-accent/20"
        style={{ animationDelay: "-6s" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-glass px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Open to internships & placements
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Shanmuga Priya. SK</span>
          </h1>
          <p className="mt-4 font-display text-base text-primary sm:text-lg">{PROFILE.tagline}</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {PROFILE.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              View My Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-glass text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-glass text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Send an email"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-glass text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-6 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="glass-card relative p-6">
            <img
              src={heroTech}
              alt="Illustration of a glowing microchip with circuit traces representing IoT and embedded systems"
              width={1024}
              height={1024}
              className="w-full"
            />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { k: "5", v: "Internships" },
                { k: "2", v: "Projects" },
                { k: "9", v: "Certifications" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-border bg-glass py-3">
                  <p className="font-display text-xl font-bold text-primary">{s.k}</p>
                  <p className="text-[11px] text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}