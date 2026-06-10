import { useState } from "react";
import { guests, dietaryColors, type Dietary } from "./data";

const filters: Dietary[] = ["Vegetarian", "Vegan", "Gluten Free", "Nut Allergy", "Dairy Free", "Halal"];

const dietaryBadgeStyle = (d: Dietary): React.CSSProperties => ({
  backgroundColor: `${dietaryColors[d]}18`,
  border: `0.5px solid ${dietaryColors[d]}60`,
  borderRadius: "2px",
  padding: "2px 7px",
  fontFamily: "var(--font-sans)",
  fontSize: "10.5px",
  letterSpacing: "0.1em",
  color: dietaryColors[d],
  whiteSpace: "nowrap" as const,
});

export function DiningOps() {
  const [activeFilter, setActiveFilter] = useState<Dietary | null>(null);

  const counts = filters.reduce((acc, f) => {
    acc[f] = guests.filter(g => g.dietary === f).length;
    return acc;
  }, {} as Record<Dietary, number>);

  const alertGuests = guests.filter(g => g.dietaryNote);

  const filtered = activeFilter
    ? guests.filter(g => g.dietary === activeFilter)
    : guests;

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      {/* Dietary count summary */}
      <div className="mb-5 flex flex-wrap gap-2">
        {filters.map(f => (
          counts[f] > 0 && (
            <button
              key={f}
              onClick={() => setActiveFilter(activeFilter === f ? null : f)}
              style={{
                ...dietaryBadgeStyle(f),
                cursor: "pointer",
                backgroundColor: activeFilter === f ? `${dietaryColors[f]}28` : `${dietaryColors[f]}12`,
                outline: activeFilter === f ? `1px solid ${dietaryColors[f]}` : "none",
                transition: "all 0.2s ease",
              }}
            >
              {counts[f]} {f}
            </button>
          )
        ))}
        {activeFilter && (
          <button
            onClick={() => setActiveFilter(null)}
            style={{ background: "none", border: "0.5px solid rgba(45,45,45,0.15)", borderRadius: "2px", padding: "2px 10px", fontSize: "10.5px", color: "var(--muted-foreground)", cursor: "pointer", letterSpacing: "0.1em" }}
          >
            Clear ✕
          </button>
        )}
      </div>

      {/* Alert strip for critical dietary notes */}
      {alertGuests.length > 0 && !activeFilter && (
        <div className="mb-5">
          <div className="flex flex-col gap-2">
            {alertGuests.map(g => (
              <div key={g.id} className="flex items-start gap-3 px-4 py-3" style={{ backgroundColor: "rgba(207,169,163,0.12)", border: "0.5px solid rgba(207,169,163,0.4)", borderRadius: "3px" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
                  <path d="M7 1.5L13 12.5H1L7 1.5Z" stroke="var(--dusty-rose)" strokeWidth="0.8" strokeLinejoin="round" />
                  <path d="M7 6V8.5" stroke="var(--dusty-rose)" strokeWidth="0.8" strokeLinecap="round" />
                  <circle cx="7" cy="10.5" r="0.5" fill="var(--dusty-rose)" />
                </svg>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16.5px", color: "var(--charcoal)" }}>
                    {g.name} — <span style={{ color: "var(--dusty-rose)" }}>{g.dietary}</span>
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--muted-foreground)", marginTop: "1px" }}>
                    {g.dietaryNote} · Table {g.table}, Seat {g.seat}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Table insight */}
      {!activeFilter && (
        <div className="mb-4 px-4 py-3 flex items-center gap-2" style={{ backgroundColor: "var(--champagne)", borderRadius: "3px", border: "0.5px solid rgba(45,45,45,0.07)" }}>
          <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "var(--sage)", flexShrink: 0 }} />
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "13.5px", color: "var(--charcoal)" }}>
            7 guests with dietary restrictions are seated at Table 3 — Assisi
          </p>
        </div>
      )}

      {/* Column headers */}
      <div className="grid mb-2 px-1" style={{ gridTemplateColumns: "80px 1fr 1fr 1fr" }}>
        {["Seat", "Guest", "Meal", "Dietary"].map(h => (
          <p key={h} style={{ fontFamily: "var(--font-sans)", fontSize: "9.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>
            {h}
          </p>
        ))}
      </div>

      {/* Guest rows */}
      <div className="flex flex-col gap-1.5">
        {filtered.map(g => (
          <div
            key={g.id}
            className="grid items-center px-3 py-3"
            style={{
              gridTemplateColumns: "80px 1fr 1fr 1fr",
              backgroundColor: g.dietary !== "Standard" ? "var(--champagne)" : "var(--ivory)",
              borderRadius: "3px",
              border: "0.5px solid rgba(45,45,45,0.07)",
              gap: "8px",
            }}
          >
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "11.5px", color: "var(--muted-foreground)" }}>
              T{g.table} · S{g.seat}
            </p>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "16.5px", color: "var(--charcoal)", lineHeight: 1.2 }}>
              {g.name}
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "11.5px", color: "var(--muted-foreground)", lineHeight: 1.3 }}>
              {g.meal.split(" ").slice(0, 2).join(" ")}
            </p>
            <div>
              {g.dietary !== "Standard" ? (
                <span style={dietaryBadgeStyle(g.dietary)}>{g.dietary}</span>
              ) : (
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "rgba(45,45,45,0.3)" }}>—</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
