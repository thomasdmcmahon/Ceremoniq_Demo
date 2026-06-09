import { guests, arrivalColor, arrivalLabel, type ArrivalStatus } from "./data";

export function GuestStatus() {
  const total = 142; // invited + RSVPd (larger event context)
  const checkedIn = guests.filter(g => g.arrived === "checked-in").length;
  const enRoute   = guests.filter(g => g.arrived === "en-route").length;
  const pending   = guests.filter(g => g.arrived === "pending").length;

  // Scale to event context (32 prototype guests represent 142 RSVPs)
  const displayCheckedIn = 118;
  const displayEnRoute   = 7;
  const displayPending   = 17;
  const displayTotal     = 142;

  const notArrived = guests.filter(g => g.arrived !== "checked-in");
  const recentArrivals = guests.filter(g => g.arrived === "checked-in").slice(-4).reverse();

  const segments = [
    { label: "Checked In",  count: displayCheckedIn, color: "var(--sage)",       status: "checked-in" as ArrivalStatus },
    { label: "En Route",    count: displayEnRoute,   color: "var(--gold)",        status: "en-route" as ArrivalStatus },
    { label: "Not Arrived", count: displayPending,   color: "var(--dusty-rose)", status: "pending" as ArrivalStatus },
  ];

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      {/* Summary arc / progress */}
      <div
        className="mb-5 p-5"
        style={{ backgroundColor: "var(--champagne)", borderRadius: "4px", border: "0.5px solid rgba(45,45,45,0.08)" }}
      >
        <div className="flex items-end justify-between mb-4">
          <div>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "42px", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1 }}>
              {displayCheckedIn}
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted-foreground)", marginTop: "4px" }}>
              of {displayTotal} guests checked in
            </p>
          </div>
          {/* Circular progress */}
          <div style={{ position: "relative", width: "72px", height: "72px" }}>
            <svg width="72" height="72" viewBox="0 0 72 72">
              <circle cx="36" cy="36" r="30" fill="none" stroke="rgba(45,45,45,0.08)" strokeWidth="4" />
              <circle
                cx="36" cy="36" r="30"
                fill="none"
                stroke="var(--sage)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${(displayCheckedIn / displayTotal) * 188.5} 188.5`}
                transform="rotate(-90 36 36)"
              />
              <circle
                cx="36" cy="36" r="30"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${(displayEnRoute / displayTotal) * 188.5} 188.5`}
                strokeDashoffset={`-${(displayCheckedIn / displayTotal) * 188.5}`}
                transform="rotate(-90 36 36)"
              />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 500, color: "var(--charcoal)" }}>
                {Math.round((displayCheckedIn / displayTotal) * 100)}%
              </p>
            </div>
          </div>
        </div>

        {/* Segment pills */}
        <div className="flex gap-2 flex-wrap">
          {segments.map(s => (
            <div key={s.label} className="flex items-center gap-1.5 px-3 py-1.5" style={{ backgroundColor: "var(--ivory)", borderRadius: "2px", border: "0.5px solid rgba(45,45,45,0.08)" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: s.color, flexShrink: 0 }} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--charcoal)" }}>
                <span style={{ fontWeight: 500 }}>{s.count}</span>{" "}
                <span style={{ color: "var(--muted-foreground)" }}>{s.label}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Insights strip */}
      <div className="mb-5 flex flex-col gap-2">
        {[
          { text: `${displayPending} guests have not yet checked in`, color: "var(--dusty-rose)" },
          { text: `${displayEnRoute} guests are currently en route`, color: "var(--gold)" },
          guests.some(g => g.accessibility) ? { text: "2 guests require wheelchair accessibility", color: "var(--sage)" } : null,
        ].filter(Boolean).map((insight, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: "var(--ivory)", borderRadius: "3px", border: "0.5px solid rgba(45,45,45,0.08)" }}>
            <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: insight!.color, flexShrink: 0 }} />
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--charcoal)" }}>{insight!.text}</p>
          </div>
        ))}
      </div>

      {/* Requires attention */}
      <div className="mb-2">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "10px" }}>
          Requires Attention
        </p>
        <div className="flex flex-col gap-2">
          {notArrived.map(g => (
            <div key={g.id} className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: "var(--champagne)", borderRadius: "3px", border: "0.5px solid rgba(45,45,45,0.07)" }}>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--charcoal)" }}>{g.name}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "var(--muted-foreground)", marginTop: "1px" }}>
                  Table {g.table} · {g.hotel}
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: arrivalColor[g.arrived], flexShrink: 0 }} />
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: arrivalColor[g.arrived], letterSpacing: "0.08em" }}>
                  {arrivalLabel[g.arrived]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
