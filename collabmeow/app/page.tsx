"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { cats } from "./shop/data";

export default function HomePage() {
  const featuredCats = cats.slice(0, 3);

  const pageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".cm-hero-badge, .cm-hero-title, .cm-hero-text, .cm-hero-actions, .cm-stat-card", {
        opacity: 0,
        y: 34,
      });

      gsap.set(".cm-cat-card", {
        opacity: 0,
        x: 70,
        scale: 0.94,
      });

      gsap.set(".cm-creator-card", {
        opacity: 0,
        y: 46,
        scale: 0.96,
      });

      gsap.set(".cm-creator-image", {
        opacity: 0,
        rotate: -8,
        scale: 0.76,
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".cm-hero-badge", { opacity: 1, y: 0, duration: 0.65 })
        .to(".cm-hero-title", { opacity: 1, y: 0, duration: 0.9 }, "-=0.35")
        .to(".cm-hero-text", { opacity: 1, y: 0, duration: 0.7 }, "-=0.45")
        .to(".cm-hero-actions", { opacity: 1, y: 0, duration: 0.65 }, "-=0.4")
        .to(
          ".cm-stat-card",
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 },
          "-=0.25"
        )
        .to(
          ".cm-cat-card",
          { opacity: 1, x: 0, scale: 1, duration: 0.72, stagger: 0.13 },
          "-=0.75"
        )
        .to(".cm-creator-card", { opacity: 1, y: 0, scale: 1, duration: 0.75 }, "-=0.25")
        .to(
          ".cm-creator-image",
          { opacity: 1, rotate: 0, scale: 1, duration: 0.65, ease: "back.out(1.7)" },
          "-=0.45"
        );

      gsap.to(".cm-cat-card", {
        y: -8,
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.22,
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 12% 8%, rgba(245,158,11,0.24), transparent 30%), radial-gradient(circle at 88% 10%, rgba(234,88,12,0.18), transparent 28%), linear-gradient(180deg,#fffaf3 0%,#fff3e3 50%,#fff8ef 100%)",
        color: "#24170f",
        padding: "32px 22px 64px",
      }}
    >
      <section
        style={{
          maxWidth: "1220px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(300px, 0.95fr) minmax(240px, 0.55fr) minmax(320px, 1.05fr)",
          gap: "24px",
          alignItems: "center",
          minHeight: "calc(100vh - 96px)",
        }}
      >
        <div>
          <div
            className="cm-hero-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.76)",
              border: "1px solid rgba(236,213,184,0.95)",
              color: "#b45309",
              padding: "11px 18px",
              borderRadius: "999px",
              fontWeight: 950,
              boxShadow: "0 12px 30px rgba(146,90,28,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            🐾 CollabMeow Cat Shop
          </div>

          <h1
            className="cm-hero-title"
            style={{
              fontSize: "clamp(3.8rem, 8vw, 7.4rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.08em",
              margin: "26px 0 22px",
              color: "#21140b",
            }}
          >
            Find your perfect cat friend.
          </h1>

          <p
            className="cm-hero-text"
            style={{
              maxWidth: "620px",
              fontSize: "1.16rem",
              lineHeight: 1.85,
              color: "#6b5848",
              margin: 0,
            }}
          >
            Browse adorable cats, view their personality, and choose the one
            that feels like home. Every cat is presented with care so each one
            gets their own spotlight.
          </p>

          <div
            className="cm-hero-actions"
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "34px",
              alignItems: "center",
            }}
          >
            <Link
              href="/shop"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                padding: "18px 34px",
                background: "linear-gradient(135deg,#f59e0b,#ea580c)",
                color: "white",
                fontWeight: 950,
                textDecoration: "none",
                boxShadow: "0 18px 45px rgba(234,88,12,0.34)",
              }}
            >
              Explore Cats
            </Link>

            <span style={{ color: "#8a6b52", fontWeight: 850 }}>
              {cats.length} cats available now
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,minmax(0,1fr))",
              gap: "12px",
              marginTop: "42px",
              maxWidth: "620px",
            }}
          >
            {[
              { value: "100%", label: "Lovely cats" },
              { value: "Safe", label: "Family friendly" },
              { value: "Easy", label: "Quick browsing" },
            ].map((item) => (
              <div
                key={item.label}
                className="cm-stat-card"
                style={{
                  background: "rgba(255,255,255,0.76)",
                  border: "1px solid rgba(236,213,184,0.95)",
                  borderRadius: "24px",
                  padding: "18px 16px",
                  boxShadow: "0 16px 38px rgba(146,90,28,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div style={{ fontWeight: 950, fontSize: "1.24rem" }}>
                  {item.value}
                </div>
                <div
                  style={{
                    color: "#9a6b45",
                    fontWeight: 800,
                    marginTop: "5px",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <section
          className="cm-creator-card"
          style={{
            alignSelf: "center",
            background: "rgba(255,255,255,0.78)",
            border: "1px solid rgba(236,213,184,0.95)",
            borderRadius: "36px",
            padding: "22px",
            display: "grid",
            gap: "18px",
            justifyItems: "center",
            textAlign: "center",
            boxShadow: "0 24px 70px rgba(88,52,17,0.1)",
            backdropFilter: "blur(14px)",
          }}
        >
          <img
            className="cm-creator-image"
            src="/teams/pace.png"
            alt="Pace, creator of CollabMeow Cat Shop"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "34px",
              objectFit: "cover",
              border: "4px solid white",
              boxShadow: "0 16px 36px rgba(88,52,17,0.18)",
            }}
          />

          <div>
            <div
              style={{
                display: "inline-flex",
                color: "#b45309",
                background: "#fff7ed",
                border: "1px solid #fed7aa",
                borderRadius: "999px",
                padding: "7px 12px",
                fontWeight: 950,
                fontSize: "0.8rem",
                marginBottom: "12px",
              }}
            >
              Created by Pace
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(1.55rem, 2.5vw, 2.35rem)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
                color: "#21140b",
              }}
            >
              Meet the young creator behind CollabMeow.
            </h2>

            <p
              style={{
                margin: "12px 0 0",
                color: "#6b5848",
                lineHeight: 1.65,
                fontWeight: 700,
              }}
            >
              Pace created this cat shop showcase to practice design, coding,
              and building a real web experience.
            </p>
          </div>

          <div
            style={{
              borderRadius: "22px",
              padding: "14px 18px",
              background: "linear-gradient(135deg,#f59e0b,#ea580c)",
              color: "white",
              fontWeight: 950,
              whiteSpace: "nowrap",
              boxShadow: "0 16px 36px rgba(234,88,12,0.28)",
            }}
          >
            Student Project
          </div>
        </section>

        <div
          style={{
            position: "relative",
            display: "grid",
            gap: "18px",
          }}
        >
          {featuredCats.map((cat, index) => (
            <Link
              href={`/shop/${cat.id}`}
              key={cat.id}
              className="cm-cat-card"
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr auto",
                gap: "18px",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                background: "rgba(255,255,255,0.78)",
                border: "1px solid rgba(236,213,184,0.95)",
                borderRadius: "34px",
                padding: "14px",
                boxShadow: "0 28px 70px rgba(88,52,17,0.12)",
                backdropFilter: "blur(14px)",
                marginLeft: index === 1 ? "34px" : "0",
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: "160px",
                  height: "150px",
                  borderRadius: "24px",
                  objectFit: "cover",
                }}
              />

              <div>
                <div
                  style={{
                    display: "inline-flex",
                    color: "#b45309",
                    background: "#fff7ed",
                    border: "1px solid #fed7aa",
                    borderRadius: "999px",
                    padding: "7px 12px",
                    fontWeight: 900,
                    fontSize: "0.78rem",
                    marginBottom: "10px",
                  }}
                >
                  Featured Cat
                </div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "2rem",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {cat.name}
                </h2>
                <p
                  style={{
                    margin: "8px 0 0",
                    color: "#7b614c",
                    fontWeight: 750,
                  }}
                >
                  {cat.breed} · {cat.age}
                </p>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg,#f59e0b,#ea580c)",
                  color: "white",
                  fontWeight: 950,
                  padding: "12px 16px",
                  borderRadius: "999px",
                  whiteSpace: "nowrap",
                }}
              >
                {cat.price}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}