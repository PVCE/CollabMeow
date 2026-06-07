"use client";

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
        background: "linear-gradient(180deg,#fffaf3 0%,#fff4e8 100%)",
        padding: "40px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link
          href="/shop"
          style={{
            display: "inline-block",
            marginBottom: "30px",
            color: "#a66a2c",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          ← Back to Shop
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <img
            src={cat.image}
            alt={cat.name}
            style={{
              width: "100%",
              borderRadius: "30px",
              height: "650px",
              objectFit: "cover",
              boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
            }}
          />

          <div>
            <div
              style={{
                display: "inline-block",
                background: "#fff",
                border: "1px solid #ecd5b8",
                color: "#a66a2c",
                padding: "10px 18px",
                borderRadius: "999px",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              Premium Cat
            </div>

            <h1 style={{ fontSize: "4rem", margin: 0, color: "#24170f" }}>
              {cat.name}
            </h1>

            <h2 style={{ color: "#8a6b52", marginTop: "10px" }}>
              {cat.breed}
            </h2>

            <div
              style={{
                fontSize: "3rem",
                fontWeight: 900,
                marginTop: "20px",
                color: "#24170f",
              }}
            >
              {cat.price}
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "25px",
              }}
            >
              {[cat.age, cat.gender, cat.color].map((item) => (
                <span
                  key={item}
                  style={{
                    background: "#fff",
                    padding: "10px 16px",
                    borderRadius: "999px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <p
              style={{
                marginTop: "30px",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#6b5848",
              }}
            >
              {cat.description}
            </p>

            <div
              style={{
                marginTop: "30px",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {["Vaccinated", "Health Checked", "Friendly", "Family Safe"].map(
                (item) => (
                  <span
                    key={item}
                    style={{
                      background: "#fff",
                      padding: "12px 18px",
                      borderRadius: "999px",
                      border: "1px solid #ecd5b8",
                    }}
                  >
                    ✓ {item}
                  </span>
                )
              )}
            </div>

            <button
              style={{
                marginTop: "40px",
                border: 0,
                padding: "18px 36px",
                borderRadius: "18px",
                fontWeight: 900,
                cursor: "pointer",
                color: "white",
                background: "linear-gradient(135deg,#f59e0b,#ea580c)",
              }}
            >
              Adopt {cat.name}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}