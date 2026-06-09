import { useState } from "react";

interface SeatingScreenProps {
  onBack: () => void;
}

const tables = [
  {
    id: 1,
    name: "Table 1 — Cortona",
    guests: ["Maya Johnson", "Aiden Park", "Sofia Reyes", "James Okafor", "Priya Sharma", "Marcus Thompson", "Yuna Kim", "Daniel Adeyemi"],
    x: 28,
    y: 22,
  },
  {
    id: 2,
    name: "Table 2 — Siena",
    guests: ["Aaliyah Washington", "Carlos Mendoza", "Jin-soo Choi", "Fatima Al-Hassan", "Tyler Robinson", "Mei-Lin Chen", "Kwame Asante", "Isabelle Moreau"],
    x: 70,
    y: 22,
  },
  {
    id: 3,
    name: "Table 3 — Assisi",
    guests: ["Zara Ahmed", "Luca Fernandez", "Soo-Jin Park", "Dominique Williams", "Rahul Nair", "Amara Diallo", "Kenji Nakamura", "Camille Dubois"],
    x: 28,
    y: 62,
  },
  {
    id: 4,
    name: "Table 4 — Spoleto",
    guests: ["Isaiah Carter", "Hana Yamamoto", "Mateo Gonzalez", "Adaeze Okonkwo", "Sunhee Bae", "Jordan Brooks", "Nia Mensah", "Rafael Santos"],
    x: 70,
    y: 62,
  },
];

function TableCircle({
  table,
  isHighlighted,
  onClick,
}: {
  table: (typeof tables)[0];
  isHighlighted: boolean;
  onClick: () => void;
}) {
  const r = 38;
  const cx = r + 4;
  const cy = r + 4;
  const guestCount = table.guests.length;

  return (
    <button
      onClick={onClick}
      style={{ position: "absolute", left: `${table.x}%`, top: `${table.y}%`, transform: "translate(-50%, -50%)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
    >
      <svg width={r * 2 + 8} height={r * 2 + 8} viewBox={`0 0 ${r * 2 + 8} ${r * 2 + 8}`}>
        {/* Table circle */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill={isHighlighted ? "rgba(198,168,107,0.15)" : "rgba(241,232,218,0.6)"}
          stroke={isHighlighted ? "var(--gold)" : "rgba(45,45,45,0.15)"}
          strokeWidth={isHighlighted ? "1.2" : "0.7"}
        />
        {/* Inner table */}
        <circle
          cx={cx}
          cy={cy}
          r={18}
          fill={isHighlighted ? "rgba(198,168,107,0.2)" : "rgba(248,244,238,0.8)"}
          stroke={isHighlighted ? "rgba(198,168,107,0.5)" : "rgba(45,45,45,0.1)"}
          strokeWidth="0.5"
        />
        {/* Guest dots around the circle */}
        {Array.from({ length: guestCount }).map((_, i) => {
          const angle = (i / guestCount) * 2 * Math.PI - Math.PI / 2;
          const dx = Math.cos(angle) * r;
          const dy = Math.sin(angle) * r;
          return (
            <circle
              key={i}
              cx={cx + dx}
              cy={cy + dy}
              r={5}
              fill={isHighlighted ? "rgba(198,168,107,0.8)" : "rgba(168,178,154,0.6)"}
              stroke={isHighlighted ? "var(--gold)" : "rgba(45,45,45,0.1)"}
              strokeWidth="0.5"
            />
          );
        })}
        {/* Table number label */}
        <text
          x={cx}
          y={cy + 5}
          textAnchor="middle"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="16"
          fontWeight="500"
          fill={isHighlighted ? "var(--gold)" : "rgba(45,45,45,0.6)"}
        >
          {table.id}
        </text>
      </svg>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "9px",
          textAlign: "center",
          letterSpacing: "0.1em",
          color: isHighlighted ? "var(--gold)" : "var(--muted-foreground)",
          textTransform: "uppercase",
          marginTop: "4px",
          whiteSpace: "nowrap",
        }}
      >
        {table.name.split(" — ")[1]}
      </p>
    </button>
  );
}

export function SeatingScreen({ onBack }: SeatingScreenProps) {
  const [searchValue, setSearchValue] = useState("");
  const [foundTable, setFoundTable] = useState<(typeof tables)[0] | null>(null);
  const [searched, setSearched] = useState(false);

  function handleSearch() {
    if (!searchValue.trim()) return;
    const term = searchValue.toLowerCase();
    const match = tables.find((t) => t.guests.some((g) => g.toLowerCase().includes(term)));
    setFoundTable(match || null);
    setSearched(true);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--ivory)", fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <div
        className="sticky top-0 z-20 flex items-center justify-between px-6 py-5"
        style={{ backgroundColor: "var(--ivory)", borderBottom: "0.5px solid rgba(45,45,45,0.08)" }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="var(--charcoal)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", letterSpacing: "0.12em", color: "var(--muted-foreground)" }}>Back</span>
        </button>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>
          Ceremoniq
        </span>
        <div style={{ width: "48px" }} />
      </div>

      <div className="px-7 pt-8 pb-6">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)" }}>
          Grand Salon
        </p>
        <h1
          className="mt-2"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,8vw,46px)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.1 }}
        >
          Seating
        </h1>
        <p
          className="mt-2 mb-6"
          style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontStyle: "italic", color: "var(--dusty-rose)" }}
        >
          Find your place at the table
        </p>

        {/* Search bar */}
        <div className="flex gap-2">
          <div
            className="flex-1 flex items-center gap-3"
            style={{
              backgroundColor: "var(--champagne)",
              border: "0.5px solid rgba(45,45,45,0.12)",
              borderRadius: "3px",
              padding: "13px 16px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, opacity: 0.4 }}>
              <circle cx="6" cy="6" r="4.5" stroke="var(--charcoal)" strokeWidth="0.9" />
              <path d="M10 10L13 13" stroke="var(--charcoal)" strokeWidth="0.9" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search your name…"
              value={searchValue}
              onChange={(e) => { setSearchValue(e.target.value); setSearched(false); setFoundTable(null); }}
              onKeyDown={handleKeyDown}
              style={{
                flex: 1,
                background: "none",
                border: "none",
                outline: "none",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "var(--charcoal)",
              }}
            />
          </div>
          <button
            onClick={handleSearch}
            style={{
              backgroundColor: "var(--charcoal)",
              color: "var(--ivory)",
              border: "none",
              borderRadius: "3px",
              padding: "13px 18px",
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Find Seat
          </button>
        </div>

        {/* Result banner */}
        {searched && (
          <div
            className="mt-4"
            style={{
              backgroundColor: foundTable ? "rgba(168,178,154,0.15)" : "rgba(207,169,163,0.15)",
              border: `0.5px solid ${foundTable ? "rgba(168,178,154,0.4)" : "rgba(207,169,163,0.4)"}`,
              borderRadius: "3px",
              padding: "14px 16px",
            }}
          >
            {foundTable ? (
              <div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sage)", marginBottom: "4px" }}>
                  Your table
                </p>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "var(--charcoal)" }}>
                  {foundTable.name}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--muted-foreground)", marginTop: "2px" }}>
                  Highlighted below on the floor plan
                </p>
              </div>
            ) : (
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontStyle: "italic", color: "var(--dusty-rose)" }}>
                No guest found — please check your name spelling or ask the concierge.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Floor plan */}
      <div className="px-6 mb-6">
        <div
          className="relative w-full"
          style={{
            backgroundColor: "var(--champagne)",
            border: "0.5px solid rgba(45,45,45,0.1)",
            borderRadius: "4px",
            paddingBottom: "95%",
            overflow: "hidden",
          }}
        >
          {/* Room label */}
          <div className="absolute top-4 left-0 right-0 flex justify-center z-10">
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "8.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-foreground)", opacity: 0.6 }}>
              Grand Salon — Floor Plan
            </p>
          </div>

          {/* Stage / head table */}
          <div
            className="absolute z-10 flex items-center justify-center"
            style={{
              left: "50%",
              top: "6%",
              transform: "translateX(-50%)",
              width: "40%",
              height: "6%",
              backgroundColor: "rgba(198,168,107,0.2)",
              border: "0.5px solid rgba(198,168,107,0.4)",
              borderRadius: "2px",
            }}
          >
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "7px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>
              Top Table
            </p>
          </div>

          {/* Tables */}
          {tables.map((table) => (
            <TableCircle
              key={table.id}
              table={table}
              isHighlighted={foundTable?.id === table.id}
              onClick={() => setFoundTable(table)}
            />
          ))}

          {/* Dance floor */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "22%",
              height: "22%",
              border: "0.5px dashed rgba(45,45,45,0.12)",
              borderRadius: "50%",
            }}
          >
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "7px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(45,45,45,0.25)" }}>
              Dance Floor
            </p>
          </div>
        </div>
      </div>

      {/* Guest list for found table */}
      {foundTable && (
        <div className="px-7 mb-12">
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "14px" }}>
            Your tablemates
          </p>
          <div className="flex flex-col gap-2.5">
            {foundTable.guests.map((guest, i) => (
              <div
                key={i}
                className="flex items-center gap-3"
                style={{
                  backgroundColor: "var(--champagne)",
                  borderRadius: "3px",
                  padding: "12px 16px",
                  border: "0.5px solid rgba(45,45,45,0.08)",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(168,178,154,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "12px", color: "var(--sage)", fontWeight: 500 }}>
                    {guest.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </p>
                </div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--charcoal)" }}>{guest}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="pb-12" />
    </div>
  );
}
