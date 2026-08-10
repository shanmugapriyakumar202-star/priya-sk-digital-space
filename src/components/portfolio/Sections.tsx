import { useState } from "react";
import {
  Activity,
  Award,
  Briefcase,
  CircuitBoard,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Github,
  Presentation,
  Sun,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  CERTIFICATIONS,
  EDUCATION,
  HIGHLIGHTS,
  INTERNSHIPS,
  JOURNEY,
  PROJECTS,
  PROJECT_FILTERS,
  SKILL_GROUPS,
  WORKSHOPS,
} from "./data";

const groupIcons = { Code2, CircuitBoard, Cpu, Database } as const;
const projectIcons = { Activity, Sun } as const;

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="About" title="A multidisciplinary foundation" />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="glass-card p-7">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            I am currently pursuing a Master of Computer Applications (MCA) at Holy Cross College. I
            completed my Bachelor&apos;s degree in Electronics and have developed practical experience
            through internships and projects in Embedded C, PCB Design, Microprocessors, IoT,
            Electronics, and Data Analytics.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            My academic journey has helped me build a multidisciplinary foundation that combines
            hardware and software technologies. I am interested in learning new technologies, solving
            real-world problems, and developing innovative applications.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.label} delay={i * 60}>
              <div className="glass-card h-full p-4">
                <span className="text-2xl">{h.icon}</span>
                <p className="mt-2 font-display text-sm font-semibold">{h.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Education" title="Academic background" />
      <div className="relative mx-auto max-w-3xl pl-8">
        <div className="absolute bottom-2 left-2 top-2 w-px bg-linear-to-b from-primary via-accent to-transparent" />
        {EDUCATION.map((item, i) => (
          <Reveal key={item.degree} delay={i * 100} className="relative mb-6 last:mb-0">
            <span className="absolute -left-[26px] top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
            <div className="glass-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary">
                  <GraduationCap size={14} /> {item.period}
                </span>
                <span className="text-xs text-muted-foreground">{item.score}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        subtitle="Areas I have studied and applied through coursework, internships, and projects."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {SKILL_GROUPS.map((group, i) => {
          const Icon = groupIcons[group.icon as keyof typeof groupIcons];
          return (
            <Reveal key={group.title} delay={i * 80}>
              <div className="glass-card h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-glass px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Internships() {
  return (
    <section id="internships" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Internships" title="Hands-on experience" />
      <div className="grid gap-5 md:grid-cols-2">
        {INTERNSHIPS.map((item, i) => (
          <Reveal key={item.org} delay={i * 70}>
            <article className="glass-card h-full p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Briefcase size={18} />
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {item.year}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{item.org}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-primary/12 px-2.5 py-1 text-[11px] text-primary">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.categories.includes(filter));

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Projects" title="Things I have built" />
      <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
              filter === f
                ? "border-primary/60 bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {visible.map((project, i) => {
          const Icon = projectIcons[project.icon as keyof typeof projectIcons];
          return (
            <Reveal key={project.title} delay={i * 90}>
              <article className="glass-card flex h-full flex-col p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-primary/25 to-accent/20 text-primary">
                    <Icon size={22} />
                  </span>
                  <div className="flex flex-wrap justify-end gap-2">
                    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {project.year}
                    </span>
                    {project.kind ? (
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-xs text-accent">
                        {project.kind}
                      </span>
                    ) : null}
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold sm:text-xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3 pt-1">
                  <button
                    type="button"
                    disabled
                    title="Link coming soon"
                    className="cursor-not-allowed rounded-full bg-primary/15 px-4 py-2 text-xs font-semibold text-primary opacity-70"
                  >
                    View Project
                  </button>
                  <button
                    type="button"
                    disabled
                    title="Link coming soon"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground opacity-70"
                  >
                    <Github size={14} /> GitHub
                  </button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Workshops() {
  return (
    <section id="workshops" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Workshops" title="Learning beyond the classroom" />
      <div className="grid gap-5 md:grid-cols-2">
        {WORKSHOPS.map((w, i) => (
          <Reveal key={w.title} delay={i * 80}>
            <div className="glass-card flex h-full items-start gap-4 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                <Presentation size={18} />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">{w.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {w.org} · {w.year}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Certifications" title="Certifications & achievements" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.title} delay={i * 50}>
            <div className="glass-card h-full p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                  <Award size={16} />
                </span>
                <span className="rounded-full bg-primary/12 px-2.5 py-1 text-[11px] font-semibold text-primary">
                  {c.year}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.org}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Career Journey" title="Step by step" />
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-linear-to-b from-primary via-accent to-transparent md:left-0 md:top-6 md:h-px md:w-full md:bg-linear-to-r" />
        <ol className="grid gap-4 pl-12 md:grid-cols-4 md:gap-6 md:pl-0 md:pt-14">
          {JOURNEY.map((step, i) => (
            <Reveal key={step.year} delay={i * 70}>
              <li className="glass-card relative h-full p-4">
                <span className="absolute -left-[34px] top-5 h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20 md:-top-[38px] md:left-4" />
                <p className="font-display text-lg font-bold text-primary">{step.year}</p>
                <p className="mt-1 text-xs text-muted-foreground">{step.label}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}