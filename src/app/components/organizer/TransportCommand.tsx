import { guests, transportRoutes } from "./data";

const statusLabel: Record<string, string> = {
  "on-schedule": "On Schedule",
  "delayed":     "Delayed",
  "scheduled":   "Scheduled",
  "private":     "Private Transfer",
};

const statusColor: Record<string, string> = {
  "on-schedule": "var(--sage)",
  "delayed":     "var(--dusty-rose)",
  "scheduled":   "var(--muted-foreground)",
  "private":     "var(--gold)",
};

export function TransportCommand() {
  const enRouteGuests = guests.filter(g => g.arrived === "en-route");

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      {/* Insights */}
      <div className="mb-5 flex flex-col gap-2">
        <div className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: "rgba(198,168,107,0.1)", border: "0.5px solid rgba(198,168,107,0.3)", borderRadius: "3px" }}>
          <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "var(--gold)", flexShrink: 0 }} />
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "13.5px", color: "var(--charcoal)" }}>
            {enRouteGuests.length} guests currently en route from hotels
          </p>
        </div>
        <div className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: "rgba(207,169,163,0.1)", border: "0.5px solid rgba(207,169,163,0.25)", borderRadius: "3px" }}>
          <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "var(--dusty-rose)", flexShrink: 0 }} />
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "13.5px", color: "var(--charcoal)" }}>
            Shuttle from Castello di Monterone is running 12 min late
          </p>
        </div>
      </div>

      {/* Route cards */}
      <div className="flex flex-col gap-4 mb-6">
        {transportRoutes.map(route => (
          <div key={route.hotel} style={{ backgroundColor: "var(--champagne)", borderRadius: "4px", border: "0.5px solid rgba(45,45,45,0.08)", overflow: "hidden" }}>
            {/* Hotel header */}
            <div className="flex items-center justify-between px-4 py-4" style={{ borderBottom: "0.5px solid rgba(45,45,45,0.07)" }}>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "19.5px", fontWeight: 500, color: "var(--charcoal)" }}>{route.hotel}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "11.5px", color: "var(--muted-foreground)", marginTop: "2px" }}>
                  {route.guestCount} guests
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                {route.shuttles[0].status !== "private" ? (
                  <>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>Next shuttle</p>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "24px", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.1 }}>
                      {route.shuttles[0].time}
                    </p>
                  </>
                ) : (
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>Private</span>
                )}
              </div>
            </div>

            {/* Shuttle rows */}
            {route.shuttles.map((shuttle, idx) => (
              <div
                key={idx}
                className="grid items-center px-4 py-3"
                style={{
                  gridTemplateColumns: "60px 60px 1fr auto",
                  gap: "12px",
                  borderBottom: idx < route.shuttles.length - 1 ? "0.5px solid rgba(45,45,45,0.05)" : "none",
                }}
              >
                <div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>Departs</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "15.5px", color: "var(--charcoal)", marginTop: "1px" }}>{shuttle.time}</p>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>Arrives</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "15.5px", color: "var(--charcoal)", marginTop: "1px" }}>{shuttle.arrival}</p>
                </div>
                {shuttle.status !== "private" && shuttle.capacity > 0 ? (
                  <div>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>Boarded</p>
                    {/* Mini capacity bar */}
                    <div className="flex items-center gap-2 mt-1">
                      <div style={{ width: "64px", height: "3px", backgroundColor: "rgba(45,45,45,0.1)", borderRadius: "2px", overflow: "hidden" }}>
                        <div style={{ width: `${(shuttle.boarded / shuttle.capacity) * 100}%`, height: "100%", backgroundColor: "var(--sage)", borderRadius: "2px", transition: "width 0.4s ease" }} />
                      </div>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--muted-foreground)" }}>
                        {shuttle.boarded}/{shuttle.capacity}
                      </p>
                    </div>
                  </div>
                ) : <div />}
                <div className="flex items-center gap-1.5">
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: statusColor[shuttle.status], flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "10.5px", color: statusColor[shuttle.status], letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
                    {statusLabel[shuttle.status]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* En-route guests */}
      {enRouteGuests.length > 0 && (
        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "10px" }}>
            Currently En Route
          </p>
          <div className="flex flex-col gap-2">
            {enRouteGuests.map(g => (
              <div key={g.id} className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: "rgba(198,168,107,0.08)", border: "0.5px solid rgba(198,168,107,0.25)", borderRadius: "3px" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "17.5px", color: "var(--charcoal)" }}>{g.name}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--muted-foreground)", marginTop: "1px" }}>
                    From {g.hotel}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--gold)" }} />
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--gold)" }}>En Route</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
