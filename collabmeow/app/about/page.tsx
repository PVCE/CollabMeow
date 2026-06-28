"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const values = [
  {
    title: "Carefully Chosen",
    text: "Every cat is selected with attention to health, personality, and comfort.",
  },
  {
    title: "Family Friendly",
    text: "We match cats with homes that fit their energy, habits, and lifestyle.",
  },
  {
    title: "Forever Homes",
    text: "Our goal is to help every feline find a safe, loving place to thrive.",
  },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".about-fade", {
        opacity: 0,
        y: 18,
      });

      gsap.set(".about-card", {
        opacity: 0,
        scale: 0.98,
        y: 14,
      });

      gsap.set(".about-image", {
        opacity: 0,
        scale: 0.96,
        rotate: -3,
      });

      gsap.set(".about-stat", {
        opacity: 0,
        y: 12,
      });

      const typingTargets = document.querySelectorAll<HTMLElement>(".typing-text");
      typingTargets.forEach((node, index) => {
        const rawText = node.dataset.text || node.textContent || "";
        const text = rawText.trim();

        if (!text) {
          return;
        }

        const content = document.createElement("span");
        content.className = "typed-content";
        content.style.display = "inline-block";

        const cursor = document.createElement("span");
        cursor.className = "typed-cursor";
        cursor.textContent = "|";
        cursor.style.display = "inline-block";
        cursor.style.marginLeft = "0.08em";
        cursor.style.color = "#111111";
        cursor.style.fontWeight = "700";

        node.innerHTML = "";
        node.appendChild(content);
        node.appendChild(cursor);

        const cursorBlink = gsap.to(cursor, {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.5,
          ease: "power1.inOut",
        });

        gsap.fromTo(
          content,
          { text: "" },
          {
            text,
            duration: Math.max(1.8, text.length * 0.06),
            delay: 0.15 + index * 0.06,
            ease: "none",
            onComplete: () => {
              cursorBlink.kill();
              gsap.to(cursor, {
                opacity: 0,
                duration: 0.18,
                ease: "power1.out",
              });
            },
          }
        );
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".about-fade", {
        opacity: 1,
        y: 0,
        duration: 0.72,
        stagger: 0.08,
      })
        .to(
          ".about-card",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.78,
          },
          "-=0.12"
        )
        .to(
          ".about-image",
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.74,
            ease: "power3.out",
          },
          "-=0.22"
        )
        .to(
          ".about-stat",
          {
            opacity: 1,
            y: 0,
            duration: 0.56,
            stagger: 0.08,
          },
          "-=0.18"
        );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main
        ref={pageRef}
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top, rgba(245,158,11,0.14), transparent 18%), linear-gradient(180deg, #fffaf3 0%, #fff4e8 52%, #fffaf7 100%)",
          color: "#24170f",
          overflow: "hidden",
        }}
      >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "72px 24px 88px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "36px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              className="about-fade"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "10px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.78)",
                border: "1px solid #ecd5b8",
                color: "#a66a2c",
                fontWeight: 900,
                marginBottom: "22px",
              }}
            >
              About CollabMeow
            </div>

            <h1
              className="about-fade typing-text"
              data-text="Connecting cats with people who care."
              style={{
                margin: 0,
                fontSize: "clamp(3.4rem, 6vw, 5.8rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.06em",
              }}
            >
              Connecting cats with people who care.
            </h1>

            <p
              className="about-fade typing-text"
              data-text="Welcome to CollabMeow, where every cat is treated like family and every home is considered with care. We are passionate about making the adoption journey simple, joyful, and full of trust."
              style={{
                marginTop: "22px",
                maxWidth: "620px",
                fontSize: "1.08rem",
                lineHeight: 1.8,
                color: "#6d5849",
              }}
            >
              Welcome to CollabMeow, where every cat is treated like family and
              every home is considered with care. We are passionate about making
              the adoption journey simple, joyful, and full of trust.
            </p>

            <p
              className="about-fade typing-text"
              data-text="From first hello to final cuddle, we focus on healthy, socialized cats that are ready to brighten your day. Our mission is to help both cats and families find the perfect match."
              style={{
                marginTop: "18px",
                maxWidth: "620px",
                fontSize: "1.08rem",
                lineHeight: 1.8,
                color: "#6d5849",
              }}
            >
              From first hello to final cuddle, we focus on healthy, socialized
              cats that are ready to brighten your day. Our mission is to help
              both cats and families find the perfect match.
            </p>

            <div
              className="about-fade"
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <Link
                href="/shop"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "999px",
                  padding: "16px 24px",
                  background: "linear-gradient(135deg, #f59e0b, #ea580c)",
                  color: "white",
                  fontWeight: 900,
                  textDecoration: "none",
                  boxShadow: "0 18px 40px rgba(234,88,12,0.28)",
                }}
              >
                Browse Cats
              </Link>

              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "999px",
                  padding: "16px 24px",
                  background: "white",
                  border: "1px solid #ecd5b8",
                  color: "#4c3323",
                  fontWeight: 900,
                  textDecoration: "none",
                }}
              >
                Back Home
              </Link>
            </div>
          </div>

          <div
            className="about-card"
            style={{
              background: "rgba(255,255,255,0.82)",
              border: "1px solid #f0dcc3",
              borderRadius: "36px",
              padding: "18px",
              boxShadow: "0 26px 60px rgba(90,50,20,0.12)",
            }}
          >
            <img
              className="about-image"
              src="/teams/pace.png"
              alt="Pace, creator of CollabMeow"
              style={{
                width: "100%",
                height: "520px",
                objectFit: "cover",
                borderRadius: "28px",
                display: "block",
              }}
            />
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#a66a2c",
                    fontWeight: 900,
                    fontSize: "0.82rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Founder & Creator
                </div>
                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "1.4rem",
                    fontWeight: 950,
                  }}
                >
                  Pace
                </div>
              </div>
              <span
                style={{
                  background: "#fff7ed",
                  color: "#b45309",
                  border: "1px solid #fed7aa",
                  borderRadius: "999px",
                  padding: "10px 14px",
                  fontWeight: 800,
                }}
              >
                ✨ Cat lover
              </span>
            </div>
          </div>
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
            marginTop: "34px",
          }}
        >
          {[
            ["100%", "Healthy care"],
            ["4.9★", "Loved by families"],
            ["24/7", "Support guidance"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="about-stat"
              style={{
                background: "white",
                border: "1px solid #f0dcc3",
                borderRadius: "24px",
                padding: "22px 18px",
                textAlign: "center",
                boxShadow: "0 18px 40px rgba(90,50,20,0.06)",
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: 950 }}>{value}</div>
              <div style={{ color: "#806a58", marginTop: "6px" }}>{label}</div>
            </div>
          ))}
        </section>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 90px",
        }}
      >
        <div
          style={{
            background: "#21150f",
            color: "white",
            borderRadius: "36px",
            padding: "34px 32px",
            boxShadow: "0 26px 68px rgba(40,20,10,0.2)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            Why people choose CollabMeow
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
              marginTop: "26px",
            }}
          >
            {values.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "22px",
                  padding: "22px",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "1.3rem" }}>{item.title}</h3>
                <p style={{ marginTop: "10px", color: "rgba(255,255,255,0.74)", lineHeight: 1.7 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
    </>
  );
}