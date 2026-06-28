"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRouter } from "next/navigation";
import { cats } from "./data";

gsap.registerPlugin(TextPlugin);

const featuredCat = cats.find((cat) => cat.featured) || cats[0];
const newArrivals = cats.filter((cat) => cat.isNew);
const popularCats = cats.filter((cat) => cat.isPopular);

export default function Shop() {
  const router = useRouter();
  const pageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".shop-reveal", {
        opacity: 0,
        y: 22,
      });

      gsap.set(".shop-card", {
        opacity: 0,
        y: 18,
        scale: 0.98,
      });

      gsap.set(".shop-image", {
        opacity: 0,
        scale: 0.95,
        rotate: -3,
      });

      gsap.set(".shop-stat", {
        opacity: 0,
        y: 16,
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

      tl.to(".shop-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.74,
        stagger: 0.08,
      })
        .to(
          ".shop-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.78,
          },
          "-=0.14"
        )
        .to(
          ".shop-image",
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .to(
          ".shop-stat",
          {
            opacity: 1,
            y: 0,
            duration: 0.58,
            stagger: 0.08,
          },
          "-=0.22"
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
            "linear-gradient(180deg, #fffaf3 0%, #fff4e8 45%, #fffaf7 100%)",
          color: "#24170f",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          overflow: "hidden",
        }}
      >
      {/* Hero */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 24px 70px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "48px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            className="shop-reveal"
            style={{
              display: "inline-flex",
              padding: "10px 18px",
              borderRadius: "999px",
              background: "white",
              border: "1px solid #ecd5b8",
              color: "#a66a2c",
              fontWeight: 800,
              marginBottom: "24px",
              boxShadow: "0 10px 30px rgba(120,70,20,0.08)",
            }}
          >
            Premium Cat Collection
          </div>

          <h1
            className="shop-reveal typing-text"
            data-text="Find Your Perfect Cat."
            style={{
              fontSize: "clamp(3.4rem, 7vw, 6.8rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.06em",
              margin: 0,
              fontWeight: 950,
            }}
          >
            Find Your
            <br />
            Perfect Cat.
          </h1>

          <p
            className="shop-reveal typing-text"
            data-text="Discover healthy, vaccinated, and socialized kittens from premium breeds. A modern way to meet your next best friend."
            style={{
              marginTop: "28px",
              maxWidth: "620px",
              color: "#776252",
              fontSize: "1.18rem",
              lineHeight: 1.8,
            }}
          >
            Discover healthy, vaccinated, and socialized kittens from premium
            breeds. A modern way to meet your next best friend.
          </p>

          <div
            className="shop-reveal"
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "34px",
            }}
          >
            <button
              onClick={() => {router.push("/about")}}
              style={{
                border: "1px solid #e8cba8",
                borderRadius: "999px",
                padding: "16px 28px",
                background: "white",
                color: "#4c3323",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          className="shop-card"
          style={{
            position: "relative",
            borderRadius: "42px",
            overflow: "hidden",
            background: "white",
            padding: "16px",
            boxShadow: "0 40px 90px rgba(90,50,20,0.18)",
            border: "1px solid #f1ddc4",
          }}
        >
          <img
            className="shop-image"
            src={featuredCat.image}
            alt={featuredCat.name}
            style={{
              width: "100%",
              height: "560px",
              objectFit: "cover",
              borderRadius: "30px",
              display: "block",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "36px",
              bottom: "36px",
              right: "36px",
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(18px)",
              borderRadius: "24px",
              padding: "22px",
              border: "1px solid rgba(255,255,255,0.7)",
            }}
          >
            <div
              style={{
                color: "#a66a2c",
                fontWeight: 900,
                fontSize: "0.8rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Cat of the Week
            </div>
            <h2 style={{ margin: "8px 0 4px", fontSize: "2rem" }}>
              {featuredCat.name}
            </h2>
            <p style={{ margin: 0, color: "#776252" }}>
              {featuredCat.breed} • {featuredCat.age} • {featuredCat.price}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "18px",
        }}
      >
        {[
          ["120+", "Happy Families"],
          ["4.9★", "Customer Rating"],
          ["100%", "Health Checked"],
          ["15+", "Premium Breeds"],
        ].map(([number, label]) => (
          <div
            key={label}
            className="shop-stat"
            style={{
              background: "white",
              border: "1px solid #f0dcc3",
              borderRadius: "26px",
              padding: "28px",
              textAlign: "center",
              boxShadow: "0 18px 40px rgba(90,50,20,0.07)",
            }}
          >
            <div style={{ fontSize: "2.2rem", fontWeight: 950 }}>{number}</div>
            <div style={{ color: "#806a58", marginTop: "6px" }}>{label}</div>
          </div>
        ))}
      </section>

      {/* New Arrivals */}
      <ShopSection title="New Arrivals" subtitle="Freshly added kittens">
        <ProductGrid cats={newArrivals} showBadge="NEW" />
      </ShopSection>

      {/* Most Picked */}
      <ShopSection title="Most Picked This Month" subtitle="Customer favorites">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {popularCats.map((cat, index) => (
            <ProductCard
              key={cat.id}
              cat={cat}
              badge={`#${index + 1}`}
              darkBadge={index === 0}
            />
          ))}
        </div>
      </ShopSection>

      {/* Featured Cat */}
      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "30px 24px 90px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            alignItems: "center",
            background: "#21150f",
            color: "white",
            borderRadius: "42px",
            padding: "24px",
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(40,20,10,0.22)",
          }}
        >
          <img
            src={featuredCat.image}
            alt={featuredCat.name}
            style={{
              width: "100%",
              height: "520px",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />

          <div style={{ padding: "20px" }}>
            <div
              style={{
                display: "inline-block",
                border: "1px solid rgba(255,215,150,0.35)",
                color: "#ffd79c",
                borderRadius: "999px",
                padding: "10px 16px",
                fontWeight: 900,
                marginBottom: "20px",
              }}
            >
              Featured Companion
            </div>

            <h2
              style={{
                fontSize: "clamp(2.6rem, 5vw, 5rem)",
                lineHeight: 1,
                margin: 0,
              }}
            >
              Meet {featuredCat.name}
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.8,
                fontSize: "1.1rem",
                maxWidth: "560px",
              }}
            >
              {featuredCat.description} This kitten is carefully raised,
              socialized daily, and prepared for a loving home.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "24px",
              }}
            >
              {["Vaccinated", "Health Checked", "Friendly", "Family Safe"].map(
                (item) => (
                  <span
                    key={item}
                    style={{
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      padding: "12px 16px",
                      color: "#fff1dc",
                      fontWeight: 800,
                    }}
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <button
              style={{
                marginTop: "34px",
                border: 0,
                borderRadius: "999px",
                padding: "16px 28px",
                background: "linear-gradient(135deg,#ffd79c,#d88735)",
                color: "#21150f",
                fontWeight: 950,
                cursor: "pointer",
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* Breed Categories */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 80px",
          textAlign: "center",
        }}
      >
        <SectionHeader title="Browse By Breed" subtitle="Choose your style" />

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            "British Shorthair",
            "Ragdoll",
            "Maine Coon",
            "Scottish Fold",
            "Bengal",
            "Persian",
            "Siamese",
            "Sphynx",
          ].map((breed) => (
            <button
              key={breed}
              style={{
                border: "1px solid #edd6b7",
                background: "white",
                padding: "14px 20px",
                borderRadius: "999px",
                cursor: "pointer",
                color: "#4c3323",
                fontWeight: 800,
                boxShadow: "0 12px 28px rgba(90,50,20,0.06)",
              }}
            >
              {breed}
            </button>
          ))}
        </div>
      </section>

      {/* All Cats */}
      <ShopSection title="Shop All Cats" subtitle="Explore every available cat">
        <ProductGrid cats={cats} />
      </ShopSection>

      {/* Process */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 90px",
        }}
      >
        <SectionHeader
          title="Simple Adoption Process"
          subtitle="From first look to forever home"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            ["01", "Choose Cat", "Explore the collection and pick your favorite."],
            ["02", "Schedule Visit", "Book a visit to meet the kitten."],
            ["03", "Meet & Play", "Spend time and check compatibility."],
            ["04", "Bring Home", "Complete the process and welcome your cat."],
          ].map(([num, title, text]) => (
            <div
              key={num}
              style={{
                background: "white",
                border: "1px solid #f0dcc3",
                borderRadius: "28px",
                padding: "28px",
                boxShadow: "0 18px 40px rgba(90,50,20,0.07)",
              }}
            >
              <div
                style={{
                  color: "#c47a2c",
                  fontWeight: 950,
                  marginBottom: "18px",
                }}
              >
                {num}
              </div>
              <h3 style={{ margin: 0, fontSize: "1.35rem" }}>{title}</h3>
              <p style={{ color: "#806a58", lineHeight: 1.7 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 90px",
        }}
      >
        <SectionHeader title="Loved By Families" subtitle="Real customer stories" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {[
            ["Best experience ever. Our kitten is healthy and so playful.", "Sarah"],
            ["The process was smooth, clean, and very professional.", "Daniel"],
            ["Our family found the perfect cat. Highly recommended.", "Emily"],
          ].map(([review, name]) => (
            <div
              key={name}
              style={{
                background: "white",
                borderRadius: "28px",
                padding: "28px",
                border: "1px solid #f0dcc3",
                boxShadow: "0 18px 40px rgba(90,50,20,0.07)",
              }}
            >
              <div style={{ color: "#d88735", fontSize: "1.3rem" }}>★★★★★</div>
              <p style={{ color: "#5f4b3e", lineHeight: 1.8 }}>{review}</p>
              <strong>{name}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 90px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg,#fff,#fff1df)",
            borderRadius: "38px",
            padding: "48px 28px",
            textAlign: "center",
            border: "1px solid #f0dcc3",
            boxShadow: "0 28px 70px rgba(90,50,20,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              margin: 0,
              letterSpacing: "-0.04em",
            }}
          >
            New kittens arrive weekly.
          </h2>

          <p style={{ color: "#776252", fontSize: "1.1rem" }}>
            Get notified when new cats are available.
          </p>

          <div
            style={{
              margin: "28px auto 0",
              maxWidth: "520px",
              display: "flex",
              gap: "10px",
              background: "white",
              borderRadius: "999px",
              padding: "8px",
              border: "1px solid #edd6b7",
            }}
          >
            <input
              placeholder="Enter your email"
              style={{
                flex: 1,
                border: 0,
                outline: 0,
                padding: "0 18px",
                fontSize: "1rem",
                background: "transparent",
              }}
            />
            <button
              style={{
                border: 0,
                borderRadius: "999px",
                padding: "14px 22px",
                background: "#24170f",
                color: "white",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #f0dcc3",
          padding: "34px 24px",
          textAlign: "center",
          color: "#806a58",
        }}
      >
        <strong style={{ color: "#24170f" }}>Meow Shop</strong> — Premium cats
        for loving homes.
      </footer>
      </main>
    </>
  );
}

function ShopSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "0 24px 90px",
      }}
    >
      <SectionHeader title={title} subtitle={subtitle} />
      {children}
    </section>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div style={{ textAlign: "center", marginBottom: "36px" }}>
      <div
        style={{
          color: "#b56d25",
          fontWeight: 950,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          fontSize: "0.78rem",
          marginBottom: "10px",
        }}
      >
        {subtitle}
      </div>
      <h2
        style={{
          margin: 0,
          fontSize: "clamp(2.2rem,5vw,4rem)",
          letterSpacing: "-0.045em",
          lineHeight: 1,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function ProductGrid({
  cats,
  showBadge,
}: {
  cats: typeof catsData;
  showBadge?: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
      }}
    >
      {cats.map((cat) => (
        <ProductCard key={cat.id} cat={cat} badge={showBadge} />
      ))}
    </div>
  );
}

const catsData = cats;

function ProductCard({
  cat,
  badge,
  darkBadge,
}: {
  cat: (typeof cats)[number];
  badge?: string;
  darkBadge?: boolean;
}) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "30px",
        overflow: "hidden",
        border: "1px solid #f2e2cf",
        boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
        transition: "all .35s ease",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 30px 70px rgba(0,0,0,0.13)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.08)";
      }}
    >
      {badge && (
        <div
          style={{
            position: "absolute",
            top: "18px",
            left: "18px",
            zIndex: 2,
            background: darkBadge ? "#24170f" : "#fff3dc",
            color: darkBadge ? "white" : "#b56d25",
            borderRadius: "999px",
            padding: "8px 14px",
            fontWeight: 950,
            fontSize: "0.8rem",
          }}
        >
          {badge}
        </div>
      )}

      <div style={{ height: "300px", overflow: "hidden" }}>
        <img
          src={cat.image}
          alt={cat.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div style={{ padding: "22px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: "1.45rem" }}>{cat.name}</h3>
            <p style={{ margin: "5px 0 0", color: "#806a58" }}>
              {cat.breed}
            </p>
          </div>

          <button
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              border: "1px solid #efd8ba",
              background: "#fff8ef",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
          >
            ♡
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginTop: "18px",
          }}
        >
          {[cat.age, cat.gender, cat.color].map((item) => (
            <span
              key={item}
              style={{
                background: "#fff5e8",
                color: "#8b6547",
                padding: "8px 12px",
                borderRadius: "999px",
                fontSize: "0.85rem",
                fontWeight: 800,
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <p style={{ color: "#776252", lineHeight: 1.7 }}>
          {cat.description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "18px",
          }}
        >
          <div>
            <div style={{ color: "#9b8c7e", fontSize: "0.82rem" }}>
              Price
            </div>
            <div
              style={{
                fontWeight: 950,
                fontSize: "1.6rem",
              }}
            >
              {cat.price}
            </div>
          </div>

          <Link
            href={`/shop/${cat.id}`}
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                border: 0,
                borderRadius: "16px",
                padding: "14px 20px",
                background: "linear-gradient(135deg,#f59e0b,#ea580c)",
                color: "white",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              View Cat
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}