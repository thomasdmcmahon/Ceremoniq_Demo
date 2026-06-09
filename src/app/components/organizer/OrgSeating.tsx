import { useState } from "react";
import { guests, dietaryColors, arrivalColor, arrivalLabel, type Guest } from "./data";

const tables = [1, 2, 3, 4];
const tableNames: Record<number, string> = { 1: "Cortona", 2: "Siena", 3: "Assisi", 4: "Spoleto" };
const tablePositions: Record<number, { x: number; y: number }> = {
  1: { x: 28, y: 26 },
  2: { x: 72, y: 26 },
  3: { x: 28, y: 70 },
  4: { x: 72, y: 70 },
};

function TableSvg({
  tableNum,
  tableGuests,
  isSelected,
  onClick,
}: {
  tableNum: number;
  tableGuests: Guest[];
  isSelected: boolean;
  onClick: () => void;
}) {
  const r = 36;
  const cx = r + 4;
  const cy = r + 4;
  const count = tableGuests.length;
  const hasAlert = tableGuests.some(g => g.dietary !== "Standard" || g.accessibility);
  const notArrived = tableGuests.filter(g => g.arrived !== "checked-in").length;

  return (
    <button
      onClick={onClick}
      style={{ position: "absolute", left: `${tablePositions[tableNum].x}%`, top: `${tablePositions[tableNum].y}%`, transform: "translate(-50%,-50%)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
    >
      <svg width={r * 2 + 8} height={r * 2 + 8} viewBox={`0 0 ${r * 2 + 8} ${r * 2 + 8}`}>
        <circle cx={cx} cy={cy} r={r} fill={isSelected ? "rgba(198,168,107,0.18)" : "rgba(241,232,218,0.7)"} stroke={isSelected ? "var(--gold)" : "rgba(45,45,45,0.15)"} strokeWidth={isSelected ? "1.5" : "0.7"} />
        <circle cx={cx} cy={cy} r={16} fill={isSelected ? "rgba(198,168,107,0.2)" : "rgba(248,244,238,0.9)"} stroke={isSelected ? "rgba(198,168,107,0.5)" : "rgba(45,45,45,0.1)"} strokeWidth="0.5" />
        {/* Guest dots */}
        {Array.from({ length: count }).map((_, i) => {
          const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
          const gx = cx + Math.cos(angle) * r;
          const gy = cy + Math.sin(angle) * r;
          const g = tableGuests[i];
          const dotColor = g ? arrivalColor[g.arrived] : "rgba(168,178,154,0.6)";
          return (
            <circle key={i} cx={gx} cy={gy} r={5} fill={dotColor} fillOpacity={0.85} stroke="var(--ivory)" strokeWidth="0.8" />
          );
        })}
        <text x={cx} y={cy - 3} textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="13" fontWeight="500" fill={isSelected ? "var(--gold)" : "rgba(45,45,45,0.55)"}>
          {tableNum}
        </text>
        <text x={cx} y={cy + 9} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.5" fill="rgba(45,45,45,0.35)" letterSpacing="0.5">
          {tableNames[tableNum].toUpperCase()}
        </text>
      </svg>
      {/* Alert dot */}
      {(hasAlert || notArrived > 0) && (
        <div style={{ position: "absolute", top: "4px", right: "4px", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: notArrived > 0 ? "var(--dusty-rose)" : "var(--gold)", border: "1.5px solid var(--ivory)" }} />
      )}
    </button>
  );
}

export function OrgSeating() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  const tableGuests = (t: number) => guests.filter(g => g.table === t);

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      {/* Floor plan */}
      <div
        className="relative w-full mb-5"
        style={{ backgroundColor: "var(--champagne)", borderRadius: "4px", border: "0.5px solid rgba(45,45,45,0.08)", paddingBottom: "90%", overflow: "hidden" }}
      >
        <div className="absolute top-3 left-0 right-0 flex justify-center">
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(45,45,45,0.3)" }}>
            Grand Salon
          </p>
        </div>

        {/* Top table */}
        <div className="absolute flex items-center justify-center" style={{ left: "50%", top: "5%", transform: "translateX(-50%)", width: "34%", height: "5%", backgroundColor: "rgba(198,168,107,0.15)", border: "0.5px solid rgba(198,168,107,0.4)", borderRadius: "2px" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "7px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>
            Top Table
          </p>
        </div>

        {/* Dance floor */}
        <div className="absolute flex items-center justify-center" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "20%", height: "18%", border: "0.5px dashed rgba(45,45,45,0.1)", borderRadius: "50%" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "6.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(45,45,45,0.2)" }}>Dance</p>
        </div>

        {tables.map(t => (
          <TableSvg
            key={t}
            tableNum={t}
            tableGuests={tableGuests(t)}
            isSelected={selectedTable === t}
            onClick={() => {
              setSelectedTable(selectedTable === t ? null : t);
              setSelectedGuest(null);
            }}
          />
        ))}

        {/* Legend */}
        <div className="absolute bottom-3 left-3 flex flex-col gap-1">
          {[
            { color: "var(--sage)",       label: "Checked In" },
            { color: "var(--gold)",        label: "En Route" },
            { color: "var(--dusty-rose)", label: "Not Arrived" },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-1">
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: l.color }} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "7.5px", color: "rgba(45,45,45,0.45)", letterSpacing: "0.08em" }}>{l.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guest list for selected table */}
      {selectedTable && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "var(--charcoal)" }}>
                Table {selectedTable} — {tableNames[selectedTable]}
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "var(--muted-foreground)", marginTop: "1px" }}>
                {tableGuests(selectedTable).filter(g => g.arrived === "checked-in").length} of {tableGuests(selectedTable).length} checked in
              </p>
            </div>
            <button onClick={() => setSelectedTable(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted-foreground)", fontSize: "11px", letterSpacing: "0.1em" }}>
              Close
            </button>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            {tableGuests(selectedTable).map(g => (
              <button
                key={g.id}
                onClick={() => setSelectedGuest(selectedGuest?.id === g.id ? null : g)}
                className="w-full text-left"
                style={{
                  backgroundColor: selectedGuest?.id === g.id ? "var(--ivory)" : "var(--champagne)",
                  border: selectedGuest?.id === g.id ? "0.5px solid rgba(198,168,107,0.4)" : "0.5px solid rgba(45,45,45,0.07)",
                  borderRadius: "3px",
                  padding: "12px 14px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: arrivalColor[g.arrived], flexShrink: 0 }} />
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--charcoal)" }}>{g.name}</p>
                    {g.dietary !== "Standard" && (
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "9px", padding: "1px 6px", borderRadius: "2px", backgroundColor: `${dietaryColors[g.dietary]}18`, border: `0.5px solid ${dietaryColors[g.dietary]}50`, color: dietaryColors[g.dietary] }}>
                        {g.dietary}
                      </span>
                    )}
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "var(--muted-foreground)" }}>Seat {g.seat}</p>
                </div>

                {/* Expanded detail */}
                {selectedGuest?.id === g.id && (
                  <div className="mt-3 pt-3 grid grid-cols-2 gap-2" style={{ borderTop: "0.5px solid rgba(45,45,45,0.08)" }}>
                    {[
                      { label: "Starter", value: g.starter },
                      { label: "Main", value: g.meal },
                      { label: "Hotel", value: g.hotel },
                      { label: "Transport", value: g.transport === "shuttle" ? "Shuttle" : g.transport === "private" ? "Private Car" : "Self" },
                      { label: "Status", value: arrivalLabel[g.arrived] },
                      g.accessibility ? { label: "Accessibility", value: g.accessibility } : null,
                      g.dietaryNote ? { label: "Note", value: g.dietaryNote } : null,
                    ].filter(Boolean).map((item, i) => (
                      <div key={i}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: "8.5px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>{item!.label}</p>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--charcoal)", marginTop: "2px" }}>{item!.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {!selectedTable && (
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", fontStyle: "italic", color: "var(--muted-foreground)", textAlign: "center", paddingTop: "8px" }}>
          Tap a table to view guests
        </p>
      )}
    </div>
  );
}
