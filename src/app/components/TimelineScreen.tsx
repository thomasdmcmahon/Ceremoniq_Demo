interface TimelineScreenProps {
  onBack: () => void;
}

const events = [
  {
    day: "Day One",
    date: "Saturday, June 21",
    items: [
      {
        time: "3:30 PM",
        event: "Ceremony",
        location: "Chapel of Castello di Petrata",
        description:
          "Guests are kindly asked to be seated by 3:15 PM. The ceremony will begin promptly and last approximately 45 minutes.",
        duration: "45 min",
        dress: "Black Tie Optional",
      },
      {
        time: "4:30 PM",
        event: "Cocktail Hour",
        location: "Terrace & Gardens",
        description:
          "Join us on the sun-drenched terrace for aperitivo, passed hors d'oeuvres, and the first toast of the evening.",
        duration: "90 min",
        dress: null,
      },
      {
        time: "6:00 PM",
        event: "Dinner",
        location: "Grand Salon",
        description:
          "A five-course dinner celebrating the flavours of Umbria. Seating is assigned — please find your table card at the entrance.",
        duration: "3 hrs",
        dress: null,
      },
      {
        time: "9:30 PM",
        event: "Dancing",
        location: "Ballroom & Courtyard",
        description:
          "The night continues with live music, dancing under the stars, and a late-night dessert buffet.",
        duration: "Until 1:00 AM",
        dress: null,
      },
    ],
  },
  {
    day: "Day Two",
    date: "Sunday, June 22",
    items: [
      {
        time: "11:00 AM",
        event: "Farewell Brunch",
        location: "Orangerie Garden",
        description:
          "A relaxed morning gathering before guests depart. Shuttle service to hotels begins at 1:00 PM.",
        duration: "2 hrs",
        dress: "Garden Casual",
      },
    ],
  },
];

export function TimelineScreen({ onBack }: TimelineScreenProps) {
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
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--charcoal)", padding: 0 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", letterSpacing: "0.12em", color: "var(--muted-foreground)" }}>Back</span>
        </button>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>
          Ceremoniq
        </span>
        <div style={{ width: "48px" }} />
      </div>

      {/* Page title */}
      <div className="px-7 pt-8 pb-6">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)" }}>
          Schedule of Events
        </p>
        <h1
          className="mt-2"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,8vw,46px)", fontWeight: 300, color: "var(--charcoal)", letterSpacing: "-0.01em", lineHeight: 1.1 }}
        >
          Timeline
        </h1>
        <p
          className="mt-2"
          style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontStyle: "italic", color: "var(--dusty-rose)" }}
        >
          Castello di Petrata, June 21–22
        </p>
      </div>

      {/* Days */}
      {events.map((day) => (
        <div key={day.day} className="px-6 pb-10">
          {/* Day header */}
          <div className="flex items-center gap-4 mb-6">
            <div>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "var(--charcoal)" }}>{day.day}</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--muted-foreground)", marginTop: "1px" }}>{day.date}</p>
            </div>
            <div style={{ flex: 1, height: "0.5px", backgroundColor: "rgba(45,45,45,0.1)" }} />
          </div>

          {/* Timeline items */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute top-0 bottom-0"
              style={{ left: "11px", width: "0.5px", backgroundColor: "rgba(198,168,107,0.3)" }}
            />

            <div className="flex flex-col gap-8">
              {day.items.map((item, idx) => (
                <div key={idx} className="flex gap-5 relative">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center" style={{ flexShrink: 0, marginTop: "3px" }}>
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        backgroundColor: "var(--ivory)",
                        border: "1px solid var(--gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "var(--gold)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 pb-2"
                    style={{
                      backgroundColor: "var(--champagne)",
                      borderRadius: "3px",
                      padding: "18px 20px",
                      border: "0.5px solid rgba(45,45,45,0.08)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>
                        {item.time}
                      </p>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "var(--muted-foreground)" }}>{item.duration}</p>
                    </div>
                    <h3
                      style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.2, marginBottom: "3px" }}
                    >
                      {item.event}
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--dusty-rose)", marginBottom: "10px" }}>
                      {item.location}
                    </p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--muted-foreground)", lineHeight: 1.65 }}>
                      {item.description}
                    </p>
                    {item.dress && (
                      <div className="mt-3 inline-flex items-center gap-1.5">
                        <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "var(--sage)" }} />
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "var(--sage)", letterSpacing: "0.1em" }}>
                          {item.dress}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="pb-12" />
    </div>
  );
}
