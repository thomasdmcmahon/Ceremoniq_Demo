type Screen = "home" | "timeline" | "dining" | "seating" | "transportation";

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  onOrganizerAccess: () => void;
  onPitchDeck: () => void;
}

const navItems = [
  {
    id: "timeline" as Screen,
    label: "Timeline",
    subtitle: "Ceremony · Dinner · Dancing",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="0.8" />
        <path d="M11 6V11.5L14 14" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "transportation" as Screen,
    label: "Transport",
    subtitle: "Shuttles · Hotels · Directions",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 10C4 6.69 6.69 4 10 4H12C15.31 4 18 6.69 18 10V14H4V10Z" stroke="currentColor" strokeWidth="0.8" />
        <path d="M2 14H20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="6.5" cy="17" r="1.8" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="15.5" cy="17" r="1.8" stroke="currentColor" strokeWidth="0.8" />
        <path d="M4 10H18" stroke="currentColor" strokeWidth="0.7" />
        <path d="M8 14V10" stroke="currentColor" strokeWidth="0.7" />
        <path d="M11 14V10" stroke="currentColor" strokeWidth="0.7" />
        <path d="M14 14V10" stroke="currentColor" strokeWidth="0.7" />
      </svg>
    ),
  },
  {
    id: "dining" as Screen,
    label: "Dining",
    subtitle: "Menu · Dietary Preferences",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M8 3V10C8 11.66 9.34 13 11 13V19" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" />
        <path d="M14 3V8C14 9.1 13.1 10 12 10H10" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" />
        <path d="M14 10V19" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "seating" as Screen,
    label: "Seating",
    subtitle: "Find Your Table",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="3.5" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="11" cy="3.5" r="1.7" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="11" cy="18.5" r="1.7" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="3.5" cy="11" r="1.7" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="18.5" cy="11" r="1.7" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="5.7" cy="5.7" r="1.4" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="16.3" cy="5.7" r="1.4" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="5.7" cy="16.3" r="1.4" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="16.3" cy="16.3" r="1.4" stroke="currentColor" strokeWidth="0.6" />
      </svg>
    ),
  },
];

function OrnamentalBorder({ color = "rgba(198,168,107,0.45)" }: { color?: string }) {
  return (
    <div className="flex items-center w-full" style={{ gap: 0 }}>
      <div style={{ flex: 1, height: "0.5px", backgroundColor: color }} />
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, margin: "0 5px" }}>
        <path d="M7 1 C7 1 8.2 4.5 7 7 C5.8 4.5 7 1 7 1Z" fill={color} />
        <path d="M7 13 C7 13 8.2 9.5 7 7 C5.8 9.5 7 13 7 13Z" fill={color} />
        <path d="M1 7 C1 7 4.5 8.2 7 7 C4.5 5.8 1 7 1 7Z" fill={color} />
        <path d="M13 7 C13 7 9.5 8.2 7 7 C9.5 5.8 13 7 13 7Z" fill={color} />
        <circle cx="7" cy="7" r="0.8" fill={color} />
      </svg>
      <div style={{ flex: 1, height: "0.5px", backgroundColor: color }} />
    </div>
  );
}

const infoItems = [
  {
    label: "Location",
    value: "Castello di Petrata",
    detail: "Umbria, Italy",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6C3.5 9.25 8 14.5 8 14.5C8 14.5 12.5 9.25 12.5 6C12.5 3.51 10.49 1.5 8 1.5Z" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    label: "Dress Code",
    value: "Black Tie Optional",
    detail: "Formal evening attire",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2L6 5H10L8 2Z" stroke="currentColor" strokeWidth="0.8" strokeLinejoin="round" />
        <path d="M6 5L4.5 14H11.5L10 5" stroke="currentColor" strokeWidth="0.8" strokeLinejoin="round" />
        <path d="M6 5L8 8L10 5" stroke="currentColor" strokeWidth="0.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function HomeScreen({ onNavigate, onOrganizerAccess, onPitchDeck }: HomeScreenProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--ivory)", fontFamily: "var(--font-sans)" }}>
      {/* Hero strip */}
      <div className="relative w-full overflow-hidden" style={{ height: "52vw", maxHeight: "380px", minHeight: "220px" }}>
        <img
          src="https://images.unsplash.com/photo-1727425383452-2be55354f06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBjYXN0bGUlMjJ2aW5leWFyZCUyMEl0YWx5fGVufDF8fHx8MTc4MDk3MzU5MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Castello di Petrata"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(45,45,45,0.1) 0%, rgba(248,244,238,0) 60%, rgba(248,244,238,1) 100%)" }}
        />
        <div className="absolute top-5 left-0 right-0 flex justify-center">
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "9px", color: "rgba(255,255,255,0.75)", letterSpacing: "0.25em", textTransform: "uppercase" }}>
            Ceremoniq
          </span>
        </div>
      </div>

      {/* Title section */}
      <div className="px-7 pt-0 pb-2 text-center" style={{ marginTop: "-24px", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", color: "var(--gold)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          21–22 June 2027
        </p>
        <h1
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(34px, 8vw, 52px)", fontWeight: 300, color: "var(--charcoal)", letterSpacing: "-0.01em", lineHeight: 1.1 }}
        >
          Romeo &amp; Juliet
        </h1>
        <p className="mt-2" style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontStyle: "italic", color: "var(--dusty-rose)" }}>
          Castello di Petrata, Umbria
        </p>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-3 mt-5 mb-2">
          <div style={{ width: "32px", height: "0.5px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M4 0.5 C4 0.5 5 2 4 4 C3 2 4 0.5 4 0.5Z" fill="var(--gold)" opacity="0.8" />
            <path d="M4 7.5 C4 7.5 5 6 4 4 C3 6 4 7.5 4 7.5Z" fill="var(--gold)" opacity="0.8" />
            <path d="M0.5 4 C0.5 4 2 5 4 4 C2 3 0.5 4 0.5 4Z" fill="var(--gold)" opacity="0.8" />
            <path d="M7.5 4 C7.5 4 6 5 4 4 C6 3 7.5 4 7.5 4Z" fill="var(--gold)" opacity="0.8" />
          </svg>
          <div style={{ width: "32px", height: "0.5px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
        </div>
      </div>

      {/* Info strip */}
      <div className="mx-6 mb-7 grid grid-cols-2 divide-x" style={{ borderRadius: "4px", border: "0.5px solid rgba(45,45,45,0.1)" }}>
        {infoItems.map((item) => (
          <div key={item.label} className="flex flex-col items-center py-4 px-3 text-center gap-1">
            <div style={{ color: "var(--gold)", opacity: 0.85 }}>{item.icon}</div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "8.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>
              {item.label}
            </p>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "var(--charcoal)", fontWeight: 500 }}>{item.value}</p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--muted-foreground)" }}>{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Navigation section heading */}
      <div className="px-7 mb-5">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>
          Your Concierge
        </p>
      </div>

      {/* Nav grid — 2×2 */}
      <div className="px-5 grid grid-cols-2 gap-3 pb-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="flex flex-col items-center text-center"
            style={{
              backgroundColor: "var(--champagne)",
              border: "none",
              borderRadius: "3px",
              padding: "0",
              cursor: "pointer",
              overflow: "hidden",
              transition: "background-color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ede0cc";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--champagne)";
            }}
          >
            {/* Top ornamental border */}
            <div className="w-full px-4 pt-4 pb-2">
              <OrnamentalBorder color="rgba(198,168,107,0.5)" />
            </div>

            {/* Icon + label */}
            <div className="flex flex-col items-center px-4 py-3 gap-2.5">
              <div style={{ color: "var(--dusty-rose)" }}>{item.icon}</div>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.1 }}>
                  {item.label}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "9.5px", color: "var(--muted-foreground)", marginTop: "3px", letterSpacing: "0.04em", lineHeight: 1.4 }}>
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Bottom ornamental border */}
            <div className="w-full px-4 pb-4 pt-2">
              <OrnamentalBorder color="rgba(198,168,107,0.5)" />
            </div>
          </button>
        ))}
      </div>

      {/* Subtle footer links */}
      <div className="flex justify-center items-center gap-6 pb-10">
        <button
          onClick={onOrganizerAccess}
          style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(45,45,45,0.25)", padding: "6px 4px", transition: "color 0.2s ease" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(45,45,45,0.25)")}
        >
          Planner Access
        </button>
        <div style={{ width: "2px", height: "2px", borderRadius: "50%", backgroundColor: "rgba(45,45,45,0.15)" }} />
        <button
          onClick={onPitchDeck}
          style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(45,45,45,0.25)", padding: "6px 4px", transition: "color 0.2s ease" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(45,45,45,0.25)")}
        >
          Pitch Deck
        </button>
      </div>
    </div>
  );
}
