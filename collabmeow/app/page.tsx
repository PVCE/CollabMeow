"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight, Medal, Sparkles, Star, Trophy } from "lucide-react";
import { gsap } from "gsap";

const students = [
  {
    name: "SKYZ",
    role: "Finalist",
    image: "/teams/skyz.png",
    accent: "from-cyan-200 via-sky-400 to-blue-600",
    ring: "ring-cyan-200/30",
    stat: "Logic",
  },
  {
    name: "PACE",
    role: "Finalist",
    image: "/teams/pace.png",
    accent: "from-yellow-100 via-amber-300 to-orange-500",
    ring: "ring-amber-200/40",
    stat: "Focus",
  },
  {
    name: "FINN",
    role: "Finalist",
    image: "/teams/finn.png",
    accent: "from-rose-200 via-fuchsia-300 to-indigo-500",
    ring: "ring-fuchsia-200/30",
    stat: "Build",
  },
];

const highlights = ["National Finalist", "True Coding School", "Final Round"];
const podiumStats = [
  { label: "Finalists", value: "03" },
  { label: "Team", value: "01" },
  { label: "Mission", value: "Win" },
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const trophyRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      gsap.set([badgeRef.current, titleRef.current, trophyRef.current], {
        opacity: 0,
        y: 36,
      });
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 84,
        rotateX: 10,
        scale: 0.92,
      });
      gsap.set(".stage-sweep", { scaleX: 0, opacity: 0 });
      gsap.set(".podium-stat", { opacity: 0, y: 24 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.55 })
        .to(trophyRef.current, { opacity: 1, y: 0, duration: 0.65 }, "-=0.28")
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.78 }, "-=0.36")
        .to(
          ".stage-sweep",
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.72,
            stagger: 0.1,
            transformOrigin: "center",
          },
          "-=0.48"
        )
        .to(
          cardsRef.current,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.92,
            stagger: 0.14,
          },
          "-=0.42"
        )
        .to(".podium-stat", { opacity: 1, y: 0, duration: 0.58, stagger: 0.08 }, "-=0.46");

      if (!prefersReduced) {
        gsap.to(".spotlight-left", {
          rotate: -7,
          duration: 4.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".spotlight-right", {
          rotate: 7,
          duration: 5.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".sparkle", {
          y: -16,
          opacity: 0.2,
          scale: 1.25,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.28,
        });
        // Removed continuous card floating animation
        gsap.to(".ticker-track", {
          xPercent: -50,
          duration: 18,
          repeat: -1,
          ease: "none",
        });
      }
    }, pageRef);

    // Removed stageRef parallax quickTo and mousemove code

    return () => {
      // Removed mousemove event cleanup
      ctx.revert();
    };
  }, []);

  // Removed handleCardMove and handleCardLeave functions

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-[#05020b] px-4 py-6 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#12051f_0%,#070713_46%,#020203_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(56,189,248,0.22),transparent_32%),linear-gradient(245deg,rgba(251,191,36,0.24),transparent_30%)]" />
      <div className="spotlight-left absolute -top-24 left-[6%] h-[115vh] w-32 origin-top -rotate-12 bg-gradient-to-b from-cyan-200/28 via-cyan-300/10 to-transparent blur-xl" />
      <div className="spotlight-right absolute -top-24 right-[10%] h-[115vh] w-32 origin-top rotate-12 bg-gradient-to-b from-amber-200/30 via-rose-300/10 to-transparent blur-xl" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(250,204,21,0.09)_40%,rgba(2,2,3,0.95))]" />
      <div className="stage-sweep absolute left-1/2 top-[17%] h-px w-[82vw] max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-200/80 to-transparent" />
      <div className="stage-sweep absolute bottom-[18%] left-1/2 h-px w-[78vw] max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />

      <div className="sparkle absolute left-[14%] top-[24%] text-yellow-100/60">
        <Sparkles size={26} />
      </div>
      <div className="sparkle absolute right-[16%] top-[31%] text-cyan-100/55">
        <Star size={22} />
      </div>
      <div className="sparkle absolute bottom-[22%] left-[9%] hidden text-rose-100/45 md:block">
        <Sparkles size={20} />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black uppercase leading-none tracking-normal text-white/[0.035]">
        FINAL
      </div>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col items-center justify-center gap-7 text-center">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-3 rounded-full border border-yellow-200/35 bg-white/8 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-yellow-50 shadow-2xl shadow-yellow-500/10 backdrop-blur md:text-sm"
        >
          <Medal size={18} />
          National Finalist Team
        </div>

        <div ref={trophyRef} className="relative" aria-hidden="true">
          <div className="absolute inset-0 scale-125 rounded-full bg-yellow-200/20 blur-2xl" />
          <div className="relative grid size-20 place-items-center rounded-full border border-yellow-100/40 bg-gradient-to-b from-yellow-100 via-amber-300 to-orange-500 text-slate-950 shadow-[0_22px_70px_rgba(251,191,36,0.32)]">
            <Trophy size={42} strokeWidth={2.4} />
          </div>
        </div>

        <div ref={titleRef} className="max-w-5xl space-y-5">
          <h1 className="text-5xl font-black uppercase leading-[0.86] tracking-normal sm:text-7xl lg:text-9xl">
            <span className="block text-white drop-shadow-[0_16px_40px_rgba(0,0,0,0.55)]">
              COLLABMEOW
            </span>
            <span className="mt-4 block bg-gradient-to-r from-cyan-100 via-yellow-200 to-rose-200 bg-clip-text text-3xl text-transparent sm:text-5xl lg:text-7xl">
              Road To Final
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-base font-medium leading-8 text-slate-100/82 sm:text-xl">
            Skyz, Pace, and Finn step onto the final stage for True Coding School with sharp logic, calm focus, and fearless creative coding.
          </p>
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.2em] text-slate-50 shadow-lg shadow-black/20 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={stageRef}
          id="team"
          className="grid w-full max-w-6xl gap-5 pt-4 [perspective:1200px] md:grid-cols-3 lg:gap-7"
        >
          {students.map((student, index) => (
            <div
              key={student.name}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="float-card group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.075] p-3 shadow-2xl shadow-black/45 backdrop-blur-xl"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <div
                className={`absolute -inset-x-7 top-12 h-44 bg-gradient-to-r ${student.accent} opacity-35 blur-3xl transition duration-500 group-hover:opacity-60`}
              />
              <div className="relative flex min-h-[420px] flex-col items-center justify-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/12 via-slate-950/20 to-black/70 p-4 ring-1 ring-white/5">
                <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.08))]" />
                <div className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full border border-yellow-100/35 bg-black/35 text-xs font-black text-yellow-50 shadow-lg backdrop-blur">
                  0{index + 1}
                </div>
                <div
                  className={`absolute right-4 top-4 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white/80 ring-1 ${student.ring}`}
                >
                  {student.stat}
                </div>
                <div className="relative mb-5 aspect-square w-full max-w-[278px] overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-b from-white/10 to-black/25 shadow-2xl shadow-black/35">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_36%,rgba(255,255,255,0.08))]" />
                  <Image
                    src={student.image}
                    alt={`${student.name} from CollabMeow`}
                    fill
                    className="object-contain p-3 drop-shadow-[0_26px_24px_rgba(0,0,0,0.58)]"
                    sizes="(max-width: 768px) 82vw, 278px"
                    priority={index === 1}
                  />
                </div>
                <div className="relative w-full rounded-2xl border border-yellow-200/25 bg-black/58 px-4 py-4 shadow-xl">
                  <h2 className="text-3xl font-black tracking-[0.16em] text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
                    {student.name}
                  </h2>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.26em] text-yellow-100/78">
                    {student.role}
                  </p>
                  <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-yellow-200 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="story" className="grid w-full max-w-4xl grid-cols-3 gap-3 pt-1 sm:gap-4">
          {podiumStats.map((item) => (
            <div
              key={item.label}
              className="podium-stat border border-white/12 bg-white/[0.075] px-3 py-4 shadow-xl shadow-black/25 backdrop-blur"
            >
              <div className="text-2xl font-black uppercase tracking-normal text-yellow-100 sm:text-4xl">
                {item.value}
              </div>
              <div className="mt-1 text-[0.62rem] font-black uppercase tracking-[0.18em] text-slate-200/75 sm:text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pb-2">
          <a
            href="#team"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-100 via-amber-300 to-orange-500 px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-950 shadow-2xl shadow-yellow-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-yellow-300/35 sm:px-8 sm:py-4"
          >
            Enter Stage
            <ArrowRight size={18} />
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-3 rounded-full border border-cyan-100/25 bg-white/8 px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-cyan-50 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/14 sm:px-8 sm:py-4"
          >
            Finalists
            <Sparkles size={18} />
          </a>
        </div>
      </section>

      <div className="relative z-10 -mx-4 border-y border-white/10 bg-black/35 py-3 text-xs font-black uppercase tracking-[0.24em] text-white/70 backdrop-blur sm:-mx-8 lg:-mx-12">
        <div className="ticker-track flex w-max gap-8 whitespace-nowrap">
          {[...students, ...students, ...students, ...students].map((student, index) => (
            <span key={`${student.name}-${index}`} className="inline-flex items-center gap-3 px-2">
              <Star size={14} className="text-yellow-200" />
              {student.name} / CollabMeow / Road To Final
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
