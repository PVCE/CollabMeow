import Link from "next/link";
import { notFound } from "next/navigation";
import { cats } from "../data";

export default async function CatDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const cat = cats.find((item) => item.id === Number(id));

  if (!cat) notFound();

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(245,158,11,0.22), transparent 32%), radial-gradient(circle at 85% 15%, rgba(234,88,12,0.18), transparent 28%), linear-gradient(180deg,#fffaf3 0%,#fff3e3 52%,#fff8ef 100%)",
        padding: "32px 22px 56px",
        color: "#24170f",
      }}
    >
      <style>{`
        @keyframes adoptPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 18px 45px rgba(234,88,12,0.34); }
          50% { transform: scale(1.045); box-shadow: 0 24px 60px rgba(234,88,12,0.45); }
        }

        @keyframes pawWalk {
          0% { opacity: 0; transform: translateX(-18px) translateY(8px) rotate(-10deg); }
          25% { opacity: 1; }
          100% { opacity: 1; transform: translateX(0) translateY(0) rotate(0deg); }
        }

        @keyframes adoptReveal {
          0% { opacity: 0; transform: translateY(28px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .adopt-button:hover {
          animation: adoptPulse 1s ease-in-out infinite;
        }

        #adopt-flow:target {
          animation: adoptReveal 0.7s cubic-bezier(.16,1,.3,1) both;
        }

        #adopt-flow:target .adopt-paw {
          animation: pawWalk 0.55s cubic-bezier(.16,1,.3,1) both;
        }

        #adopt-flow:target .adopt-paw:nth-child(2) { animation-delay: 0.12s; }
        #adopt-flow:target .adopt-paw:nth-child(3) { animation-delay: 0.24s; }
        #adopt-flow:target .adopt-paw:nth-child(4) { animation-delay: 0.36s; }

        .adopt-modal {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: grid;
          place-items: center;
          padding: 24px;
          opacity: 0;
          pointer-events: none;
          background: rgba(36, 23, 15, 0.46);
          backdrop-filter: blur(12px);
          transition: opacity 0.35s ease;
        }

        .adopt-modal:target {
          opacity: 1;
          pointer-events: auto;
        }

        .adopt-modal-card {
          width: min(560px, 100%);
          border-radius: 34px;
          background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,247,237,0.96));
          border: 1px solid rgba(255,255,255,0.92);
          box-shadow: 0 40px 120px rgba(36,23,15,0.32);
          padding: 28px;
          transform: translateY(28px) scale(0.94);
          transition: transform 0.45s cubic-bezier(.16,1,.3,1);
        }

        .adopt-modal:target .adopt-modal-card {
          transform: translateY(0) scale(1);
        }

        .adopt-confirm-image {
          animation: adoptPulse 1.6s ease-in-out infinite;
        }

        #adopt-success:target .success-pop {
          animation: adoptReveal 0.6s cubic-bezier(.16,1,.3,1) both;
        }
      `}</style>
      <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
        <Link
          href="/shop"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
            color: "#9a5d1f",
            textDecoration: "none",
            fontWeight: 900,
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(236,213,184,0.9)",
            padding: "12px 18px",
            borderRadius: "999px",
            boxShadow: "0 12px 30px rgba(146,90,28,0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          ← Back to Shop
        </Link>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(320px, 1.05fr) minmax(320px, 0.95fr)",
            gap: "34px",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              position: "relative",
              minHeight: "680px",
              borderRadius: "42px",
              padding: "14px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,239,215,0.82))",
              border: "1px solid rgba(236,213,184,0.95)",
              boxShadow: "0 40px 100px rgba(88,52,17,0.18)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "auto -70px -90px auto",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                background: "rgba(245,158,11,0.2)",
                filter: "blur(8px)",
              }}
            />

            <img
              src={cat.image}
              alt={cat.name}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "652px",
                borderRadius: "32px",
                objectFit: "cover",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.7)",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "34px",
                right: "34px",
                bottom: "34px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                padding: "18px 20px",
                borderRadius: "26px",
                background: "rgba(255,255,255,0.82)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 20px 50px rgba(36,23,15,0.18)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div>
                <div style={{ fontSize: "0.82rem", color: "#9a6b45", fontWeight: 800 }}>
                  Featured Cat
                </div>
                <div style={{ fontSize: "1.45rem", fontWeight: 950 }}>
                  {cat.name}
                </div>
              </div>
              <div
                style={{
                  borderRadius: "999px",
                  background: "linear-gradient(135deg,#f59e0b,#ea580c)",
                  color: "white",
                  padding: "12px 18px",
                  fontWeight: 950,
                  whiteSpace: "nowrap",
                }}
              >
                {cat.price}
              </div>
            </div>
          </div>

          <div
            style={{
              borderRadius: "42px",
              background: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(236,213,184,0.9)",
              boxShadow: "0 35px 90px rgba(88,52,17,0.12)",
              padding: "38px",
              backdropFilter: "blur(14px)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#fff7ed",
                border: "1px solid #fed7aa",
                color: "#b45309",
                padding: "10px 18px",
                borderRadius: "999px",
                fontWeight: 900,
                marginBottom: "20px",
              }}
            >
              ✨ Premium Cat
            </div>

            <h1
              style={{
                fontSize: "clamp(3rem, 6vw, 5.4rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.07em",
                margin: 0,
                color: "#21140b",
              }}
            >
              {cat.name}
            </h1>

            <h2
              style={{
                color: "#8a6b52",
                marginTop: "16px",
                fontSize: "1.35rem",
                fontWeight: 800,
              }}
            >
              {cat.breed}
            </h2>

            <p
              style={{
                marginTop: "26px",
                fontSize: "1.08rem",
                lineHeight: 1.85,
                color: "#6b5848",
              }}
            >
              {cat.description}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                gap: "12px",
                marginTop: "30px",
              }}
            >
              {[
                { label: "Age", value: cat.age },
                { label: "Gender", value: cat.gender },
                { label: "Color", value: cat.color },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "#fff",
                    padding: "18px 14px",
                    borderRadius: "22px",
                    border: "1px solid #f0dcc3",
                    boxShadow: "0 12px 30px rgba(146,90,28,0.07)",
                  }}
                >
                  <div
                    style={{
                      color: "#a66a2c",
                      fontSize: "0.78rem",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ marginTop: "7px", fontWeight: 950 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "30px",
                display: "grid",
                gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                gap: "12px",
              }}
            >
              {["Vaccinated", "Health Checked", "Friendly", "Family Safe"].map(
                (item) => (
                  <span
                    key={item}
                    style={{
                      background: "#fff",
                      padding: "14px 16px",
                      borderRadius: "18px",
                      border: "1px solid #ecd5b8",
                      fontWeight: 800,
                      color: "#5f4632",
                    }}
                  >
                    ✓ {item}
                  </span>
                )
              )}
            </div>

            <div
              style={{
                marginTop: "34px",
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <a
                href="#adopt-confirm"
                className="adopt-button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: 0,
                  padding: "18px 34px",
                  borderRadius: "20px",
                  fontWeight: 950,
                  cursor: "pointer",
                  color: "white",
                  background: "linear-gradient(135deg,#f59e0b,#ea580c)",
                  boxShadow: "0 18px 45px rgba(234,88,12,0.34)",
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                Adopt {cat.name}
              </a>

              <span style={{ color: "#8a6b52", fontWeight: 800 }}>
                Ready for a loving home 🐾
              </span>
            </div>
          </div>
        </section>
        <section
          id="adopt-flow"
          style={{
            marginTop: "34px",
            borderRadius: "38px",
            padding: "30px",
            background: "rgba(255,255,255,0.78)",
            border: "1px solid rgba(236,213,184,0.95)",
            boxShadow: "0 30px 80px rgba(88,52,17,0.12)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(260px, 0.8fr) minmax(280px, 1.2fr)",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(2rem, 4vw, 3.7rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.06em",
                  color: "#21140b",
                }}
              >
                {cat.name} is almost yours!
              </h2>

              <p
                style={{
                  margin: "16px 0 0",
                  color: "#6b5848",
                  lineHeight: 1.75,
                  fontWeight: 700,
                }}
              >
                This section shows what happens after the fake confirmation.
                Click the Adopt button first, then confirm the adoption request.
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid #f0dcc3",
                borderRadius: "30px",
                padding: "24px",
                boxShadow: "0 18px 45px rgba(146,90,28,0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "18px",
                  fontSize: "1.8rem",
                }}
              >
                <span className="adopt-paw">🐾</span>
                <span className="adopt-paw">🐾</span>
                <span className="adopt-paw">🐾</span>
                <span className="adopt-paw">🐾</span>
              </div>

              {[
                { step: "01", title: "Request received", text: `${cat.name} has been added to your adoption list.` },
                { step: "02", title: "Meet and greet", text: "Schedule a friendly visit and see if it feels like the perfect match." },
                { step: "03", title: "Go home together", text: "Prepare snacks, toys, and a cozy little corner." },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr",
                    gap: "14px",
                    padding: "16px 0",
                    borderTop: "1px solid #f3e3cf",
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "16px",
                      display: "grid",
                      placeItems: "center",
                      background: "linear-gradient(135deg,#f59e0b,#ea580c)",
                      color: "white",
                      fontWeight: 950,
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <div style={{ fontWeight: 950, color: "#21140b" }}>
                      {item.title}
                    </div>
                    <div
                      style={{
                        marginTop: "5px",
                        color: "#7b614c",
                        lineHeight: 1.55,
                        fontWeight: 700,
                      }}
                    >
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="adopt-confirm" className="adopt-modal">
          <div className="adopt-modal-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  background: "#fff7ed",
                  border: "1px solid #fed7aa",
                  color: "#b45309",
                  padding: "9px 14px",
                  borderRadius: "999px",
                  fontWeight: 950,
                }}
              >
                Adoption Request
              </div>

              <a
                href="#"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  background: "white",
                  color: "#8a6b52",
                  textDecoration: "none",
                  fontWeight: 950,
                  border: "1px solid #f0dcc3",
                }}
              >
                ×
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "110px 1fr",
                gap: "18px",
                alignItems: "center",
              }}
            >
              <img
                className="adopt-confirm-image"
                src={cat.image}
                alt={cat.name}
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "28px",
                  objectFit: "cover",
                  border: "4px solid white",
                  boxShadow: "0 16px 36px rgba(88,52,17,0.18)",
                }}
              />

              <div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "2.1rem",
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                    color: "#21140b",
                  }}
                >
                  Adopt {cat.name}?
                </h2>
                <p
                  style={{
                    margin: "10px 0 0",
                    color: "#6b5848",
                    lineHeight: 1.65,
                    fontWeight: 700,
                  }}
                >
                  This is a demo confirmation. Click confirm to continue the
                  fake adoption flow.
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: "24px",
                display: "grid",
                gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                gap: "10px",
              }}
            >
              {[
                { label: "Breed", value: cat.breed },
                { label: "Age", value: cat.age },
                { label: "Price", value: cat.price },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "white",
                    border: "1px solid #f0dcc3",
                    borderRadius: "18px",
                    padding: "12px",
                  }}
                >
                  <div
                    style={{
                      color: "#a66a2c",
                      fontSize: "0.72rem",
                      fontWeight: 950,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ marginTop: "5px", fontWeight: 950 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "26px",
              }}
            >
              <a
                href="#adopt-success"
                style={{
                  flex: "1 1 220px",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px 22px",
                  borderRadius: "18px",
                  background: "linear-gradient(135deg,#f59e0b,#ea580c)",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 950,
                  boxShadow: "0 18px 45px rgba(234,88,12,0.32)",
                }}
              >
                Confirm Adoption
              </a>

              <a
                href="#"
                style={{
                  flex: "1 1 140px",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px 22px",
                  borderRadius: "18px",
                  background: "white",
                  border: "1px solid #f0dcc3",
                  color: "#8a6b52",
                  textDecoration: "none",
                  fontWeight: 950,
                }}
              >
                Cancel
              </a>
            </div>
          </div>
        </section>

        <section id="adopt-success" className="adopt-modal">
          <div className="adopt-modal-card success-pop">
            <div
              style={{
                width: "86px",
                height: "86px",
                borderRadius: "28px",
                display: "grid",
                placeItems: "center",
                margin: "0 auto 18px",
                background: "linear-gradient(135deg,#f59e0b,#ea580c)",
                color: "white",
                fontSize: "2.4rem",
                boxShadow: "0 18px 45px rgba(234,88,12,0.32)",
              }}
            >
              🐾
            </div>

            <h2
              style={{
                margin: 0,
                textAlign: "center",
                fontSize: "clamp(2rem, 5vw, 3.3rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.06em",
                color: "#21140b",
              }}
            >
              Request confirmed!
            </h2>

            <p
              style={{
                margin: "14px auto 0",
                maxWidth: "430px",
                textAlign: "center",
                color: "#6b5848",
                lineHeight: 1.7,
                fontWeight: 700,
              }}
            >
              {cat.name} has been added to your fake adoption list. The next
              step is a meet and greet.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "26px",
              }}
            >
              <a
                href="#adopt-flow"
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px 22px",
                  borderRadius: "18px",
                  background: "linear-gradient(135deg,#f59e0b,#ea580c)",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 950,
                  boxShadow: "0 18px 45px rgba(234,88,12,0.32)",
                }}
              >
                View Next Steps
              </a>

              <a
                href="#"
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px 22px",
                  borderRadius: "18px",
                  background: "white",
                  border: "1px solid #f0dcc3",
                  color: "#8a6b52",
                  textDecoration: "none",
                  fontWeight: 950,
                }}
              >
                Close
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}