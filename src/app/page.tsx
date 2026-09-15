"use client";

import { useEffect, useState } from "react";
import "./hub.css";

/* ================================================================== */
/*  Icons — one consistent set, 1.6–1.8 stroke, currentColor          */
/* ================================================================== */

type IconName =
  | "brand"
  | "sun"
  | "moon"
  | "check"
  | "arrow"
  | "external"
  | "github"
  | "compass"
  | "window"
  | "sparkle"
  | "trend"
  | "book"
  | "search";

function Icon({ name, className }: { name: IconName; className?: string }) {
  const base = {
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true as const,
    focusable: "false" as const,
  };
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "brand":
      return (
        <svg {...base} {...stroke} strokeWidth={1.6}>
          <circle cx="12" cy="12" r="3.6" />
          <path d="M12 2.2v2.4M12 19.4v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.2 12h2.4M19.4 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
        </svg>
      );
    case "sun":
      return (
        <svg {...base} {...stroke}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      );
    case "moon":
      return (
        <svg {...base} {...stroke}>
          <path d="M20.5 13.3A8.5 8.5 0 1 1 10.7 3.5a6.6 6.6 0 0 0 9.8 9.8Z" />
        </svg>
      );
    case "check":
      return (
        <svg {...base} {...stroke} strokeWidth={2.1}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...base} {...stroke} strokeWidth={1.8}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "external":
      return (
        <svg {...base} {...stroke} strokeWidth={1.8}>
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
      );
    case "github":
      return (
        <svg {...base} fill="currentColor">
          <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
        </svg>
      );
    case "compass":
      return (
        <svg {...base} {...stroke} strokeWidth={1.6}>
          <circle cx="12" cy="12" r="9" />
          <path d="m16.1 7.9-1.8 5.4a2 2 0 0 1-1.3 1.3l-5.4 1.8 1.8-5.4a2 2 0 0 1 1.3-1.3z" />
        </svg>
      );
    case "window":
      return (
        <svg {...base} {...stroke} strokeWidth={1.6}>
          <rect x="3" y="3.5" width="18" height="17" rx="2.4" />
          <path d="M3 12h18M12 3.5v17" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...base} {...stroke} strokeWidth={1.6}>
          <path d="M12 3.2l1.75 5.05L18.8 10l-5.05 1.75L12 16.8l-1.75-5.05L5.2 10l5.05-1.75z" />
          <path d="M18.4 16.3l.7 1.95 1.95.7-1.95.7-.7 1.95-.7-1.95-1.95-.7 1.95-.7z" />
        </svg>
      );
    case "trend":
      return (
        <svg {...base} {...stroke} strokeWidth={1.6}>
          <path d="M3 17.6 8 12l3.4 3.4L20 6.6" />
          <path d="M20 11.2V6.6h-4.6" />
        </svg>
      );
    case "book":
      return (
        <svg {...base} {...stroke} strokeWidth={1.6}>
          <path d="M12 7.5v13" />
          <path d="M3 18.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
        </svg>
      );
    case "search":
      return (
        <svg {...base} {...stroke} strokeWidth={1.8}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.6-3.6" />
        </svg>
      );
    default:
      return null;
  }
}

/* ================================================================== */
/*  Data                                                              */
/* ================================================================== */

type Sig = "tiers" | "swap" | "dots" | "bars" | "search";

type Tool = {
  id: string;
  num: string;
  when: string;
  name: string;
  tag: string;
  basis: string;
  desc: string;
  chips: string[];
  url: string;
  repo: string;
  icon: IconName;
  sig: Sig;
};

const TOOLS: Tool[] = [
  {
    id: "calm",
    num: "01",
    when: "In the moment",
    name: "Calm Router",
    tag: "Mood-to-skill coping companion",
    basis: "DBT-informed coping skills",
    desc: "A 30-second check-in that matches how you feel to a coping skill you can actually do now. Skills are sorted into five energy tiers — from an emergency reset in a crisis, down to daily maintenance when you're steady.",
    chips: ["25 coping skills", "5 energy tiers", "Crisis to daily"],
    url: "https://calm-router.vercel.app/",
    repo: "https://github.com/sunnyskyess420/calm-router",
    icon: "compass",
    sig: "tiers",
  },
  {
    id: "worry",
    num: "02",
    when: "In the moment",
    name: "Worry Window",
    tag: "Scheduled worry time",
    basis: "CBT worry time · one DBT skill",
    desc: "Worry lives in the future; calm lives in the present. Catch the thought, park it, and give it one scheduled 10–15 minute meeting — then close the window. Includes a \u201cwhat if \u2192 what is\u201d reality check and small next steps.",
    chips: ["Park & revisit", "Fact-check", "One small step"],
    url: "https://sunnyskyess420.github.io/worry-window/",
    repo: "https://github.com/sunnyskyess420/worry-window",
    icon: "window",
    sig: "swap",
  },
  {
    id: "glimmer",
    num: "03",
    when: "Over time",
    name: "Glimmer Journal",
    tag: "Daily nervous-system check-in",
    basis: "Polyvagal theory",
    desc: "A journaling app rooted in polyvagal theory. Check in with your nervous system, breathe with guided animations, and log the small glimmers — the tiny signals that tell your body it's safe. Export a focused weekly summary to bring to therapy.",
    chips: ["Guided breathing", "Glimmer log", "Weekly PDF"],
    url: "https://glimmer-journal.vercel.app/",
    repo: "https://github.com/sunnyskyess420/glimmer-journal",
    icon: "sparkle",
    sig: "dots",
  },
  {
    id: "mapper",
    num: "04",
    when: "Over time",
    name: "Emotion Mapper",
    tag: "Log it, then see the pattern",
    basis: "Self-monitoring · DBT mindfulness",
    desc: "Log what you're feeling, how strong it is, what set it off and what helped. Emotion Mapper charts it over time so patterns stop being invisible — and it keeps everything on your own device. Export as JSON or CSV whenever you want.",
    chips: ["Log & rate", "History & analytics", "Stays on your device"],
    url: "https://sunnyskyess420.github.io/emotion-mapper-web/#/",
    repo: "https://github.com/sunnyskyess420/emotion-mapper-web",
    icon: "trend",
    sig: "bars",
  },
  {
    id: "ref",
    num: "05",
    when: "Over time",
    name: "DBT Skills Reference",
    tag: "Search-first skill database",
    basis: "Full DBT · Linehan (2014)",
    desc: "All 53 DBT skills across the four modules — Mindfulness, Distress Tolerance, Emotion Regulation and Interpersonal Effectiveness — plus the general skills that frame them. Search it, bookmark it, fill in 52 worksheets, and prep for a group session.",
    chips: ["53 skills", "52 worksheets", "Bookmarks & goals"],
    url: "https://dbt-skills-reference.vercel.app/",
    repo: "https://github.com/sunnyskyess420/dbt-skills-reference",
    icon: "book",
    sig: "search",
  },
];

const GROUPS: { label: string; hint: string; ids: string[] }[] = [
  {
    label: "In the moment",
    hint: "When something is happening right now.",
    ids: ["calm", "worry"],
  },
  {
    label: "Over time",
    hint: "For habits, patterns and looking things up.",
    ids: ["glimmer", "mapper", "ref"],
  },
];

const ROUTES = [
  {
    tool: "calm",
    label: "I'm overwhelmed and need something now",
    title: "Calm Router",
    why: "Calm Router matches how you feel right now to a coping skill you can do in the next few minutes.",
    url: "https://calm-router.vercel.app/",
  },
  {
    tool: "worry",
    label: "I can't stop worrying about something",
    title: "Worry Window",
    why: "Worry Window gives a spinning thought one scheduled window, and parks it until then.",
    url: "https://sunnyskyess420.github.io/worry-window/",
  },
  {
    tool: "glimmer",
    label: "I want to build a daily habit",
    title: "Glimmer Journal",
    why: "Glimmer Journal is a short daily check-in that helps your nervous system register safety.",
    url: "https://glimmer-journal.vercel.app/",
  },
  {
    tool: "mapper",
    label: "I want to see my patterns over time",
    title: "Emotion Mapper",
    why: "Emotion Mapper logs what you're feeling and charts it over time, so patterns stop being invisible.",
    url: "https://sunnyskyess420.github.io/emotion-mapper-web/#/",
  },
  {
    tool: "ref",
    label: "I need to look up a specific skill",
    title: "DBT Skills Reference",
    why: "DBT Skills Reference lets you search all 53 DBT skills and pull up a worksheet in seconds.",
    url: "https://dbt-skills-reference.vercel.app/",
  },
];

/* ================================================================== */
/*  Schematic micro-visual, one per tool                              */
/* ================================================================== */

function SigMark({ sig }: { sig: Sig }) {
  if (sig === "tiers") {
    return (
      <div className="sig sig-tiers" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }
  if (sig === "swap") {
    return (
      <div className="sig sig-swap" aria-hidden="true">
        <span className="pill">&quot;what if&quot;</span>
        <Icon name="arrow" />
        <span className="pill on">&quot;what is&quot;</span>
      </div>
    );
  }
  if (sig === "dots") {
    return (
      <div className="sig sig-dots" aria-hidden="true">
        <i className="on" />
        <i className="on" />
        <i className="half" />
        <i className="on" />
        <i className="half" />
        <i />
        <i />
        <span className="sig-cap">this week</span>
      </div>
    );
  }
  if (sig === "bars") {
    return (
      <div className="sig sig-bars" aria-hidden="true">
        <i style={{ height: "34%" }} />
        <i style={{ height: "58%" }} />
        <i style={{ height: "42%" }} />
        <i style={{ height: "76%" }} />
        <i className="dim" style={{ height: "48%" }} />
        <i style={{ height: "92%" }} />
        <i style={{ height: "64%" }} />
      </div>
    );
  }
  return (
    <div className="sig sig-search" aria-hidden="true">
      <Icon name="search" />
      <span className="q">search 53 skills…</span>
      <span className="caret" />
    </div>
  );
}

/* ================================================================== */
/*  Tool card                                                         */
/* ================================================================== */

function ToolCard({ tool, targeted }: { tool: Tool; targeted: boolean }) {
  return (
    <article
      className={targeted ? "card is-target" : "card"}
      id={`tool-${tool.id}`}
      data-tool={tool.id}
    >
      <div className="card-top">
        <span className="card-num">{tool.num}</span>
        <span className="card-when">{tool.when}</span>
      </div>

      <div className="card-body">
        <div className="card-lead">
          <div className="card-mark" aria-hidden="true">
            <Icon name={tool.icon} />
          </div>
          <h3>{tool.name}</h3>
          <p className="card-tag">{tool.tag}</p>
          <p className="card-basis">{tool.basis}</p>
          <p className="card-desc">{tool.desc}</p>
        </div>

        <div className="card-side">
          <SigMark sig={tool.sig} />

          <ul className="chips">
            {tool.chips.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <div className="card-actions">
            <a
              className="btn btn-solid"
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open {tool.name}
              <Icon name="external" />
            </a>
            <a
              className="icon-btn"
              href={tool.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${tool.name} source on GitHub`}
            >
              <Icon name="github" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ================================================================== */
/*  Page                                                              */
/* ================================================================== */

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [picked, setPicked] = useState<string | null>(null);

  /* restore saved theme */
  useEffect(() => {
    try {
      const stored = localStorage.getItem("clearstep.theme");
      if (stored === "dark" || stored === "light") setTheme(stored);
    } catch {
      /* storage unavailable */
    }
  }, []);

  /* apply + persist theme */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("clearstep.theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  /* reveal on scroll */
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const selected = ROUTES.find((r) => r.tool === picked);
  const isDark = theme === "dark";

  return (
    <>
      <a className="skip" href="#tools">
        Skip to the tools
      </a>

      {/* ===== HEADER ===== */}
      <header className="site-head">
        <div className="wrap">
          <a className="brand" href="#top">
            <Icon name="brand" className="brand-mark" />
            <span className="brand-name">ClearStep</span>
          </a>
          <nav className="head-nav" aria-label="Primary">
            <a href="#tools">Tools</a>
            <a href="#about">About</a>
            <button
              className="theme-btn"
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? <Icon name="moon" /> : <Icon name="sun" />}
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Free coping and DBT tools, all in one place</p>
              <h1>
                One <em className="u-calm">calm</em> place for the hard moments and the
                daily work.
              </h1>
              <p className="lede">
                Five free tools for the moments you&apos;re overwhelmed, the hours your
                mind won&apos;t stop, and the slow work of building skills that last.
                They used to live on separate sites — now they share one home.
              </p>
              <div className="hero-cta">
                <a className="btn btn-solid" href="#tools">
                  Browse all five tools
                  <Icon name="arrow" />
                </a>
                <a className="btn btn-quiet" href="#choose">
                  Not sure where to start?
                </a>
              </div>
              <ul className="facts">
                <li>
                  <Icon name="check" />
                  Free, always — no paywalls
                </li>
                <li>
                  <Icon name="check" />
                  DBT, CBT and polyvagal-based
                </li>
                <li>
                  <Icon name="check" />
                  Works on phone and desktop
                </li>
              </ul>
            </div>

            {/* Router */}
            <aside className="router" id="choose" aria-labelledby="routerTitle">
              <h2 id="routerTitle">What do you need right now?</h2>
              <p className="router-sub">
                Pick the one that sounds most like you. We&apos;ll point you to the right
                tool.
              </p>

              <div className="routes">
                {ROUTES.map((r) => (
                  <a
                    key={r.tool}
                    className="route"
                    href={`#tool-${r.tool}`}
                    data-tool={r.tool}
                    aria-pressed={picked === r.tool}
                    onClick={() => setPicked(r.tool)}
                  >
                    <span className="dot" aria-hidden="true" />
                    <span className="r-label">{r.label}</span>
                    <Icon name="arrow" className="r-go" />
                  </a>
                ))}
              </div>

              {selected && (
                <div className="router-out is-on" role="status" aria-live="polite">
                  <p>
                    <strong>{selected.title}</strong> — {selected.why}
                  </p>
                  <a
                    className="btn btn-solid"
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open {selected.title}
                  </a>
                </div>
              )}
            </aside>
          </div>
        </section>

        {/* ===== TOOLKIT ===== */}
        <section className="sec" id="tools">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="sec-num">01 — The toolkit</span>
              <h2>Five tools, covering every kind of moment.</h2>
              <p className="sec-lede">
                Two are there when something is happening right now. Three are for the
                slower work — the daily habit, the pattern you want to see, and the skill
                you need to look up. Each card names the approach it&apos;s built on, so
                you always know.
              </p>
            </div>

            {GROUPS.map((g) => (
              <div className="group reveal" key={g.label}>
                <div className="group-head">
                  <span className="group-label">{g.label}</span>
                  <span className="group-hint">{g.hint}</span>
                </div>
                <div className="cards">
                  {g.ids.map((id) => {
                    const tool = TOOLS.find((t) => t.id === id)!;
                    return (
                      <ToolCard
                        key={tool.id}
                        tool={tool}
                        targeted={picked === tool.id}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="sec" id="about">
          <div className="wrap about-grid">
            <div className="reveal">
              <div className="about-mark">
                <Icon name="brand" />
                <span>Meet ClearStep</span>
              </div>
              <p className="pull">
                Meet people where they are — in the middle of a crisis, or working
                through a structured journey.
              </p>
            </div>

            <div className="about-copy reveal">
              <p>
                ClearStep makes practical, accessible tools designed to meet people where
                they are — whether that&apos;s in the middle of a crisis or working
                through a structured learning journey.
              </p>
              <p>
                The DBT Skills Reference is built directly on Marsha Linehan&apos;s
                Dialectical Behavior Therapy. The other tools draw on different, equally
                evidence-based approaches — CBT, polyvagal theory, and plain
                self-monitoring — and each card tells you which one it uses. Everything
                is free, so that cost never stands between someone and the support they
                need.
              </p>
              <p>
                The tools used to live on five separate sites with five separate front
                doors. This page is the answer to a simple question:{" "}
                <em>where do I start?</em>
              </p>
            </div>
          </div>
        </section>

        {/* ===== CRISIS ===== */}
        <section className="sec">
          <div className="wrap">
            <div className="crisis reveal">
              <div>
                <h2>If it&apos;s a crisis right now, these tools can wait.</h2>
                <p>
                  ClearStep is not a crisis service. If you&apos;re in immediate danger,
                  contact your local emergency number or a crisis line in your area
                  first. The DBT Skills Reference app also carries a Crisis Resources
                  section you can open at any time.
                </p>
              </div>
              <div>
                <a
                  className="btn btn-solid"
                  href="https://dbt-skills-reference.vercel.app/?v=crisis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open crisis resources
                  <Icon name="external" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="site-foot">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <a className="brand" href="#top">
                <Icon name="brand" className="brand-mark" />
                <span className="brand-name">ClearStep</span>
              </a>
              <p>
                Five free coping and DBT tools for real-life support — in one place.
              </p>
            </div>

            <div className="foot-col">
              <h4>The tools</h4>
              <ul>
                {TOOLS.map((t) => (
                  <li key={t.id}>
                    <a href={t.url} target="_blank" rel="noopener noreferrer">
                      {t.name}
                      <Icon name="external" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="foot-col">
              <h4>Source code</h4>
              <ul>
                {TOOLS.map((t) => (
                  <li key={t.id}>
                    <a href={t.repo} target="_blank" rel="noopener noreferrer">
                      {t.repo.split("/").pop()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="foot-base">
            <span>Evidence-based: DBT, CBT and polyvagal theory.</span>
            <span>Free to use, always.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
