import { useState } from "react";
import { GuestStatus } from "./GuestStatus";
import { DiningOps } from "./DiningOps";
import { OrgSeating } from "./OrgSeating";
import { TransportCommand } from "./TransportCommand";
import { Announcements } from "./Announcements";
import { guests } from "./data";

interface OrganizerDashboardProps {
  onExit: () => void;
}

type Tab = "guests" | "dining" | "seating" | "transport" | "announce";

const tabs: { id: Tab; label: string; shortLabel: string }[] = [
  { id: "guests",   label: "Guest Status",     shortLabel: "Guests" },
  { id: "dining",   label: "Dining",           shortLabel: "Dining" },
  { id: "seating",  label: "Seating",          shortLabel: "Seating" },
  { id: "transport",label: "Transport",        shortLabel: "Transport" },
  { id: "announce", label: "Announcements",    shortLabel: "Updates" },
];

function StatusBadge({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: color, flexShrink: 0 }} />
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color, letterSpacing: "0.08em" }}>{children}</p>
    </div>
  );
}

export function OrganizerDashboard({ onExit }: OrganizerDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>("guests");

  const checkedIn = guests.filter(g => g.arrived === "checked-in").length;
  const enRoute   = guests.filter(g => g.arrived === "en-route").length;
  const pending   = guests.filter(g => g.arrived === "pending").length;

  const tabContent: Record<Tab, React.ReactNode> = {
    guests:    <GuestStatus />,
    dining:    <DiningOps />,
    seating:   <OrgSeating />,
    transport: <TransportCommand />,
    announce:  <Announcements />,
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--ivory)", fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <div style={{ backgroundColor: "var(--champagne)", borderBottom: "0.5px solid rgba(45,45,45,0.1)" }}>
        <div className="px-6 pt-5 pb-4">
          {/* Top row */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "9.5px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "4px" }}>
                Operations Center
              </p>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 6vw, 34px)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.1 }}>
                Romeo &amp; Juliet
              </h1>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--muted-foreground)", marginTop: "3px" }}>
                Castello di Petrata · 21 June 2027
              </p>
            </div>
            <button
              onClick={onExit}
              style={{ background: "none", border: "0.5px solid rgba(45,45,45,0.15)", borderRadius: "2px", padding: "6px 12px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted-foreground)", whiteSpace: "nowrap", flexShrink: 0, marginTop: "4px" }}
            >
              Guest View
            </button>
          </div>

          {/* Live status bar */}
          <div
            className="flex items-center gap-2 px-3 py-2.5"
            style={{ backgroundColor: "var(--ivory)", borderRadius: "3px", border: "0.5px solid rgba(45,45,45,0.08)" }}
          >
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--sage)", flexShrink: 0 }}>
              {/* Pulse ring via CSS animation would go here; using static dot for now */}
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--charcoal)", flex: 1 }}>
              Ceremony begins in <span style={{ color: "var(--gold)", fontWeight: 500 }}>45 minutes</span>
            </p>
            <div className="flex items-center gap-3">
              <StatusBadge color="var(--sage)">{checkedIn} In</StatusBadge>
              <StatusBadge color="var(--gold)">{enRoute} Route</StatusBadge>
              <StatusBadge color="var(--dusty-rose)">{pending} Pending</StatusBadge>
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex overflow-x-auto" style={{ borderTop: "0.5px solid rgba(45,45,45,0.07)", scrollbarWidth: "none" }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flexShrink: 0,
                background: "none",
                border: "none",
                borderBottom: activeTab === tab.id ? "2px solid var(--gold)" : "2px solid transparent",
                padding: "11px 16px",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: activeTab === tab.id ? "var(--charcoal)" : "var(--muted-foreground)",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              {tab.shortLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Module title */}
      <div className="px-6 pt-6 pb-3 flex items-baseline gap-3">
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.1 }}>
          {tabs.find(t => t.id === activeTab)?.label}
        </h2>
        <div style={{ flex: 1, height: "0.5px", backgroundColor: "rgba(45,45,45,0.1)" }} />
      </div>

      {/* Module content */}
      <div className="px-6 pb-14">
        {tabContent[activeTab]}
      </div>
    </div>
  );
}
