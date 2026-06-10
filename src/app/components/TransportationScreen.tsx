import { useState } from "react";

interface TransportationScreenProps {
  onBack: () => void;
}

const hotels = [
  {
    name: "Hotel Brufani Palace",
    category: "5-Star · Official Partner",
    distance: "12 km from venue",
    shuttle: true,
    note: "Shuttle departs from main entrance",
    address: "Piazza Italia 12, Perugia",
  },
  {
    name: "Castello di Monterone",
    category: "Boutique Hotel",
    distance: "8 km from venue",
    shuttle: true,
    note: "Shuttle departs from main entrance",
    address: "Strada Montevile 3, Perugia",
  },
  {
    name: "Alla Posta dei Donini",
    category: "Country House Hotel",
    distance: "5 km from venue",
    shuttle: false,
    note: "Private taxi recommended",
    address: "Via Deruta 43, San Martino in Campo",
  },
  {
    name: "NH Perugia",
    category: "4-Star · City Centre",
    distance: "14 km from venue",
    shuttle: true,
    note: "Shuttle departs from lobby",
    address: "Viale Indipendenza 10, Perugia",
  },
];

const shuttleSchedule = [
  {
    direction: "To Venue",
    date: "Saturday, 21 June",
    runs: [
      { time: "2:30 PM", from: "Hotel Brufani Palace" },
      { time: "2:40 PM", from: "NH Perugia" },
      { time: "2:50 PM", from: "Castello di Monterone" },
      { time: "3:00 PM", from: "Arrival at Castello di Petrata" },
    ],
  },
  {
    direction: "Return",
    date: "Saturday, 21 June (after party)",
    runs: [
      { time: "11:30 PM", from: "Castello di Petrata → All Hotels" },
      { time: "1:00 AM", from: "Castello di Petrata → All Hotels" },
    ],
  },
  {
    direction: "Brunch Return",
    date: "Sunday, 22 June",
    runs: [
      { time: "1:00 PM", from: "Castello di Petrata → All Hotels" },
      { time: "2:00 PM", from: "Castello di Petrata → All Hotels" },
    ],
  },
];

const drivingInfo = [
  { label: "From Perugia", value: "A1 motorway south · Exit Valdichiana · 25 min" },
  { label: "From Florence", value: "A1 south · Exit Valdichiana · 90 min" },
  { label: "From Rome", value: "A1 north · Exit Orvieto · 95 min" },
  { label: "Nearest Airport", value: "Perugia Sant'Egidio (PEG) · 18 km" },
];

export function TransportationScreen({ onBack }: TransportationScreenProps) {
  const [activeTab, setActiveTab] = useState<"hotels" | "shuttle" | "directions">("shuttle");

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
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", letterSpacing: "0.12em", color: "var(--muted-foreground)" }}>Back</span>
        </button>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>
          Ceremoniq
        </span>
        <div style={{ width: "48px" }} />
      </div>

      <div className="px-7 pt-8 pb-6">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)" }}>
          Getting Here
        </p>
        <h1
          className="mt-2"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,8vw,46px)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.1 }}
        >
          Transportation
        </h1>
        <p
          className="mt-2"
          style={{ fontFamily: "var(--font-serif)", fontSize: "16.5px", fontStyle: "italic", color: "var(--dusty-rose)" }}
        >
          Everything you need to arrive with ease
        </p>
      </div>

      {/* Tabs */}
      <div className="px-7 mb-6">
        <div
          className="flex"
          style={{ borderBottom: "0.5px solid rgba(45,45,45,0.1)" }}
        >
          {(["shuttle", "hotels", "directions"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === tab ? "1.5px solid var(--gold)" : "1.5px solid transparent",
                padding: "8px 0",
                marginRight: "24px",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: activeTab === tab ? "var(--charcoal)" : "var(--muted-foreground)",
                marginBottom: "-0.5px",
                transition: "all 0.2s ease",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Shuttle tab */}
      {activeTab === "shuttle" && (
        <div className="px-6 pb-12">
          {/* Alert bar */}
          <div
            className="mb-6 flex gap-3 items-start"
            style={{
              backgroundColor: "rgba(198,168,107,0.1)",
              border: "0.5px solid rgba(198,168,107,0.35)",
              borderRadius: "3px",
              padding: "14px 16px",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
              <circle cx="8" cy="8" r="6.5" stroke="var(--gold)" strokeWidth="0.8" />
              <path d="M8 5V8.5" stroke="var(--gold)" strokeWidth="0.9" strokeLinecap="round" />
              <circle cx="8" cy="11" r="0.6" fill="var(--gold)" />
            </svg>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "13.5px", color: "var(--charcoal)", lineHeight: 1.6 }}>
              Complimentary shuttle service is provided for all guests. No booking required — simply arrive at your hotel entrance at the listed time.
            </p>
          </div>

          {shuttleSchedule.map((section) => (
            <div key={section.direction} className="mb-7">
              <div className="flex items-baseline gap-3 mb-4">
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "20.5px", fontWeight: 500, color: "var(--charcoal)" }}>{section.direction}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--muted-foreground)" }}>{section.date}</p>
              </div>
              <div className="flex flex-col gap-2.5">
                {section.runs.map((run, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4"
                    style={{
                      backgroundColor: "var(--champagne)",
                      borderRadius: "3px",
                      padding: "14px 16px",
                      border: "0.5px solid rgba(45,45,45,0.08)",
                    }}
                  >
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "13.5px", color: "var(--gold)", minWidth: "60px", letterSpacing: "0.05em" }}>
                      {run.time}
                    </p>
                    <div style={{ width: "0.5px", height: "24px", backgroundColor: "rgba(45,45,45,0.1)" }} />
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "13.5px", color: "var(--charcoal)", lineHeight: 1.4 }}>{run.from}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Hotels tab */}
      {activeTab === "hotels" && (
        <div className="px-6 pb-12 flex flex-col gap-3">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              style={{
                backgroundColor: "var(--champagne)",
                borderRadius: "3px",
                padding: "20px",
                border: "0.5px solid rgba(45,45,45,0.08)",
              }}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "20.5px", fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.2 }}>
                  {hotel.name}
                </p>
                {hotel.shuttle && (
                  <div
                    style={{
                      backgroundColor: "rgba(168,178,154,0.2)",
                      border: "0.5px solid rgba(168,178,154,0.4)",
                      borderRadius: "2px",
                      padding: "3px 8px",
                      flexShrink: 0,
                    }}
                  >
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--sage)" }}>
                      Shuttle
                    </p>
                  </div>
                )}
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--dusty-rose)", marginBottom: "8px" }}>{hotel.category}</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "13.5px", color: "var(--muted-foreground)", marginBottom: "4px" }}>{hotel.address}</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--muted-foreground)" }}>{hotel.distance}</p>
              <div
                className="mt-3 flex items-center gap-1.5"
                style={{ borderTop: "0.5px solid rgba(45,45,45,0.07)", paddingTop: "10px" }}
              >
                <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: hotel.shuttle ? "var(--sage)" : "var(--dusty-rose)" }} />
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: hotel.shuttle ? "var(--sage)" : "var(--dusty-rose)" }}>
                  {hotel.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Directions tab */}
      {activeTab === "directions" && (
        <div className="px-6 pb-12">
          {/* Venue block */}
          <div
            className="mb-6"
            style={{
              backgroundColor: "var(--champagne)",
              borderRadius: "3px",
              padding: "20px",
              border: "0.5px solid rgba(45,45,45,0.08)",
            }}
          >
            <div className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                <path d="M9 1.5C6.1 1.5 3.75 3.85 3.75 6.75C3.75 10.69 9 16.5 9 16.5C9 16.5 14.25 10.69 14.25 6.75C14.25 3.85 11.9 1.5 9 1.5Z" stroke="var(--gold)" strokeWidth="0.8" />
                <circle cx="9" cy="6.75" r="1.75" stroke="var(--gold)" strokeWidth="0.8" />
              </svg>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "20.5px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "4px" }}>
                  Castello di Petrata
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "13.5px", color: "var(--muted-foreground)", lineHeight: 1.5 }}>
                  Localita Petrata, 06134 Perugia PG, Italy
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--gold)", marginTop: "6px" }}>
                  GPS: 43.1063° N, 12.4321° E
                </p>
              </div>
            </div>
          </div>

          <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "14px" }}>
            Driving Directions
          </p>
          <div className="flex flex-col gap-3">
            {drivingInfo.map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: "var(--champagne)",
                  borderRadius: "3px",
                  padding: "16px 18px",
                  border: "0.5px solid rgba(45,45,45,0.08)",
                }}
              >
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "5px" }}>
                  {item.label}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "14.5px", color: "var(--charcoal)", lineHeight: 1.5 }}>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Taxi note */}
          <div
            className="mt-5"
            style={{
              border: "0.5px solid rgba(45,45,45,0.1)",
              borderRadius: "3px",
              padding: "16px 18px",
            }}
          >
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "16.5px", fontStyle: "italic", color: "var(--charcoal)", marginBottom: "5px" }}>
              Private transfers
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "13.5px", color: "var(--muted-foreground)", lineHeight: 1.6 }}>
              Pre-arranged private taxis are available. Please contact the concierge at{" "}
              <span style={{ color: "var(--gold)" }}>concierge@ceremoniq.co</span> at least 48 hours in advance.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
