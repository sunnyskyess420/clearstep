"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Brain,
  Compass,
  BookOpen,
  Sun,
  Moon,
  ExternalLink,
  Shield,
  Star,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Theme toggle                                                       */
/* ------------------------------------------------------------------ */
function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-full hover:bg-accent/50"
    >
      {isDark ? (
        <Sun className="size-5 text-neon-peach" />
      ) : (
        <Moon className="size-5 text-neon-lavender" />
      )}
    </Button>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated counter                                                   */
/* ------------------------------------------------------------------ */
function AnimatedStat({ value, label, color }: { value: number; label: string; color: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="text-4xl sm:text-5xl font-bold tabular-nums"
        style={{ color: `var(--${color})` }}
      >
        {count}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tool data                                                         */
/* ------------------------------------------------------------------ */
const tools = [
  {
    title: "Calm Router",
    tagline: "Mood-to-Skill Coping Companion",
    description:
      "An interactive menu of 25 coping skills organized across 5 energy tiers — from Emergency Reset when you're in crisis, to Daily Maintenance when you're doing okay. Pick the level that matches how you're feeling right now.",
    url: "https://calm-router.vercel.app/",
    icon: Compass,
    accent: "neon-peach",
    glow: "glow-peach",
    features: ["25 coping skills", "5 energy tiers", "Crisis-to-daily range"],
  },
  {
    title: "DBT Skills Reference",
    tagline: "Quick-Lookup Skill Database",
    description:
      "A comprehensive searchable reference of 53 DBT skills across Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness, and more. Includes bookmarks, worksheets, a dashboard, and crisis resources.",
    url: "https://dbt-skills-reference.vercel.app/",
    icon: BookOpen,
    accent: "neon-teal",
    glow: "glow-teal",
    features: ["53 DBT skills", "Bookmarks & worksheets", "Crisis resources"],
  },
  {
    title: "DBT Skills Learning Platform",
    tagline: "Structured 31-Session Course",
    description:
      "A guided learning path through all 4 core DBT modules — Mindfulness, Distress Tolerance, Emotion Regulation, and Interpersonal Effectiveness. Track your progress across 31 sessions at your own pace.",
    url: "https://learningdbt.vercel.app/",
    icon: Brain,
    accent: "neon-lavender",
    glow: "glow-lavender",
    features: ["31 sessions", "4 core modules", "Progress tracking"],
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2">
            <Sun className="size-6 text-neon-peach" />
            <span className="text-lg font-semibold tracking-tight">
              ClearStep
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* ===== MAIN ===== */}
      <main className="flex-1">
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
          {/* Background glow orbs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-glow-pink blur-[120px]" />
            <div className="absolute top-40 -left-32 h-[400px] w-[400px] rounded-full bg-glow-teal blur-[100px]" />
            <div className="absolute top-60 -right-32 h-[400px] w-[400px] rounded-full bg-glow-lavender blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-neon-pink/10 text-neon-pink border border-neon-pink/20"
            >
              <Sparkles className="size-3.5 mr-1.5" />
              Free DBT Tools — Always
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Practical DBT tools for{" "}
              <span className="text-neon-peach">real-life</span> coping,{" "}
              <span className="text-neon-teal">learning</span>, and{" "}
              <span className="text-neon-lavender">support</span>.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Free DBT tools that help in the moment and over time. Whether
              you&#39;re learning on your own, in therapy, or just need quick
              coping skills — ClearStep has you covered.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-neon-pink hover:bg-neon-pink/90 text-background font-semibold shadow-lg shadow-neon-pink/20 transition-shadow hover:shadow-neon-pink/30"
              >
                <a href="#tools">Explore the Tools</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-neon-teal/40 text-neon-teal hover:bg-neon-teal/10 hover:text-neon-teal font-semibold"
              >
                <a href="https://calm-router.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Compass className="size-4" />
                  Try Calm Router
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ---------- STATS ---------- */}
        <section className="py-12 border-y border-border/40 bg-card/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <AnimatedStat value={53} label="DBT Skills" color="neon-teal" />
            <AnimatedStat value={31} label="Learning Sessions" color="neon-lavender" />
            <AnimatedStat value={25} label="Coping Tools" color="neon-peach" />
            <AnimatedStat value={4} label="Core Modules" color="neon-gold" />
          </div>
        </section>

        {/* ---------- TOOLS ---------- */}
        <section id="tools" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full bg-neon-teal/10 text-neon-teal border border-neon-teal/20 text-xs">
                <Star className="size-3 mr-1" />
                The Toolkit
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Three tools, one mission
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Each tool serves a different purpose — from in-the-moment crisis
                support to long-term skill mastery.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Card
                    key={tool.title}
                    className="group relative overflow-hidden border-border/60 bg-card/80 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-lg"
                    style={
                      {
                        "--card-glow": `var(--${tool.glow})`,
                      } as React.CSSProperties
                    }
                  >
                    {/* Glow effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--card-glow), transparent 40%)`,
                      }}
                    />

                    <CardHeader className="relative pb-2">
                      <div
                        className="flex items-center justify-center size-12 rounded-xl mb-3"
                        style={{
                          backgroundColor: `var(--${tool.glow})`,
                        }}
                      >
                        <Icon
                          className="size-6"
                          style={{ color: `var(--${tool.accent})` }}
                        />
                      </div>
                      <CardTitle className="text-xl">{tool.title}</CardTitle>
                      <CardDescription className="text-sm font-medium" style={{ color: `var(--${tool.accent})` }}>
                        {tool.tagline}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative flex flex-col gap-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tool.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((f) => (
                          <Badge
                            key={f}
                            variant="secondary"
                            className="text-xs rounded-full"
                          >
                            {f}
                          </Badge>
                        ))}
                      </div>

                      <Separator className="opacity-40" />

                      <Button
                        asChild
                        className="mt-auto w-full rounded-full font-semibold transition-all"
                        style={{
                          backgroundColor: `var(--${tool.accent})`,
                          color: "var(--background)",
                        }}
                      >
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open {tool.title}
                          <ExternalLink className="size-4 ml-1.5" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section id="about" className="py-20 sm:py-28 border-t border-border/40 bg-card/40">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full bg-neon-lavender/10 text-neon-lavender border border-neon-lavender/20 text-xs">
              <Heart className="size-3 mr-1" />
              About the Creator
            </Badge>

            <div className="relative inline-flex items-center justify-center size-20 rounded-full mb-6 bg-glow-lavender ring-2 ring-neon-lavender/30">
              <Sun className="size-10 text-neon-lavender" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Meet ClearStep
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              ClearStep creates practical, accessible DBT tools designed to meet
              people where they are — whether that&#39;s in the middle of a crisis
              or working through a structured learning journey. These tools are
              built with care, guided by evidence-based practices from Marsha
              Linehan&#39;s Dialectical Behavior Therapy, and offered completely
              free so that anyone can access the support they need.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 border-neon-lavender/40 text-neon-lavender hover:bg-neon-lavender/10 hover:text-neon-lavender"
              >
                <a
                  href="https://calm-router.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Shield className="size-4" />
                  Crisis Resources
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 border-neon-peach/40 text-neon-peach hover:bg-neon-peach/10 hover:text-neon-peach"
              >
                <a
                  href="https://learningdbt.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="size-4" />
                  Start Learning
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ---------- MESSAGE ---------- */}
        <section className="py-20 sm:py-28 border-t border-border/40 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-glow-pink blur-[120px] opacity-50" />
          </div>

          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <Sparkles className="size-10 text-neon-gold mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Free DBT tools that help{" "}
              <span className="text-neon-pink">in the moment</span> and{" "}
              <span className="text-neon-teal">over time</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              No paywalls, no sign-ups, no barriers. Just practical coping tools
              rooted in Dialectical Behavior Therapy, ready whenever you need
              them.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 bg-neon-gold hover:bg-neon-gold/90 text-background font-semibold shadow-lg shadow-neon-gold/15 transition-shadow hover:shadow-neon-gold/25"
              >
                <a href="#tools">Get Started Now</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border/40 py-8 mt-auto">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sun className="size-4 text-neon-peach" />
            <span>ClearStep</span>
            <Separator orientation="vertical" className="h-4 mx-1" />
            <span>Practical DBT tools for real-life coping, learning, and support.</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Based on Marsha Linehan&#39;s Dialectical Behavior Therapy
          </p>
        </div>
      </footer>
    </div>
  );
}
