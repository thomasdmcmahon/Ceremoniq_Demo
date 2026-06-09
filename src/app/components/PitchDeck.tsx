import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PitchDeckProps {
  onExit: () => void;
}

function OrnamentDivider({ light = false }: { light?: boolean }) {
  const c = light ? "rgba(255,255,255,0.35)" : "rgba(198,168,107,0.5)";
  return (
    <div className="flex items-center gap-3">
      <div style={{ width: "48px", height: "0.5px", backgroundColor: c }} />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M5 0.5C5 0.5 6 3 5 5C4 3 5 0.5 5 0.5Z" fill={c} />
        <path d="M5 9.5C5 9.5 6 7 5 5C4 7 5 9.5 5 9.5Z" fill={c} />
        <path d="M0.5 5C0.5 5 3 6 5 5C3 4 0.5 5 0.5 5Z" fill={c} />
        <path d="M9.5 5C9.5 5 7 6 5 5C7 4 9.5 5 9.5 5Z" fill={c} />
      </svg>
      <div style={{ width: "48px", height: "0.5px", backgroundColor: c }} />
    </div>
  );
}

// ─── SLIDE 1: Cover ────────────────────────────────────────────────────────────
function Slide01() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: "#1a1510" }}>
      <img
        src="https://images.unsplash.com/photo-1570991652278-dc23ef47f092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBUdXNjYW55JTIwZWxlZ2FudHxlbnwxfHx8fDE3ODA5NzM1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Wedding venue"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.45 }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,11,7,0.4) 0%, rgba(15,11,7,0.6) 100%)" }} />

      <div className="relative z-10 flex flex-col items-center text-center px-8">
        {/* Monogram */}
        <svg width="56" height="56" viewBox="0 0 56 56" className="mb-6">
          <circle cx="28" cy="28" r="27" stroke="rgba(198,168,107,0.5)" strokeWidth="0.7" />
          <circle cx="28" cy="28" r="21" stroke="rgba(198,168,107,0.3)" strokeWidth="0.4" />
          <text x="28" y="36" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="22" fontWeight="300" fill="rgba(198,168,107,0.9)" fontStyle="italic">C</text>
        </svg>

        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(198,168,107,0.8)", marginBottom: "16px" }}>
          Introducing
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(56px, 12vw, 96px)", fontWeight: 300, color: "white", lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: "20px" }}>
          Ceremoniq
        </h1>
        <OrnamentDivider light />
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(16px, 3vw, 22px)", fontStyle: "italic", color: "rgba(255,255,255,0.65)", marginTop: "20px", lineHeight: 1.5 }}>
          The Digital Concierge for Wedding Guests
        </p>
      </div>
    </div>
  );
}

// ─── SLIDE 2: The Problem ───────────────────────────────────────────────────────
function Slide02() {
  const chaos = [
    { label: "WhatsApp Groups", icon: "💬" },
    { label: "Email Threads", icon: "📧" },
    { label: "PDF Attachments", icon: "📄" },
    { label: "Facebook Groups", icon: "📘" },
    { label: "Spreadsheets", icon: "📊" },
    { label: "Verbal Instructions", icon: "🗣️" },
    { label: "Hotel Printouts", icon: "🏨" },
    { label: "Missed Calls", icon: "📵" },
  ];
  return (
    <div className="w-full h-full flex flex-col justify-center px-10 md:px-16" style={{ backgroundColor: "var(--ivory)" }}>
      <div className="max-w-2xl mx-auto w-full">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--dusty-rose)", marginBottom: "14px" }}>
          The Problem
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(34px, 6vw, 60px)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.05, marginBottom: "16px" }}>
          Wedding communication<br />
          <em style={{ color: "var(--dusty-rose)" }}>is fragmented.</em>
        </h2>
        <OrnamentDivider />
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(13px, 2vw, 15px)", color: "var(--muted-foreground)", marginTop: "18px", marginBottom: "28px", lineHeight: 1.7 }}>
          Guests are overwhelmed. Planners lose control.<br />
          The most important day of someone's life — managed across:
        </p>
        <div className="flex flex-wrap gap-2.5">
          {chaos.map(c => (
            <div key={c.label} className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: "var(--champagne)", border: "0.5px solid rgba(45,45,45,0.1)", borderRadius: "3px" }}>
              <span style={{ fontSize: "14px" }}>{c.icon}</span>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--charcoal)", letterSpacing: "0.04em" }}>{c.label}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(15px, 2.5vw, 20px)", fontStyle: "italic", color: "var(--charcoal)", marginTop: "28px", lineHeight: 1.5, borderLeft: "2px solid var(--dusty-rose)", paddingLeft: "16px" }}>
          "Where do I need to be? What time is the shuttle?<br />What's the dress code again?"
        </p>
      </div>
    </div>
  );
}

// ─── SLIDE 3: The Solution ─────────────────────────────────────────────────────
function Slide03() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row" style={{ backgroundColor: "var(--charcoal)" }}>
      {/* Left: text */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-14 py-10">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
          The Solution
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 300, color: "white", lineHeight: 1.05, marginBottom: "20px" }}>
          One elegant<br />experience.
        </h2>
        <OrnamentDivider light />
        <div className="mt-6 flex flex-col gap-4">
          {[
            { headline: "For Guests", body: "Every detail. One place. Feels like a luxury invitation." },
            { headline: "For Planners", body: "Live operations. Complete control. Designed for the day itself." },
            { headline: "Not a Wedding Website", body: "Ceremoniq is a luxury wedding operating system." },
          ].map(item => (
            <div key={item.headline} className="flex gap-4 items-start">
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--gold)", marginTop: "8px", flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(16px, 2.5vw, 20px)", color: "white", marginBottom: "3px" }}>{item.headline}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: mini UI preview */}
      <div className="flex-1 flex items-center justify-center px-8 py-10" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
        <div style={{ width: "100%", maxWidth: "220px", backgroundColor: "var(--ivory)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 32px 64px rgba(0,0,0,0.5)" }}>
          {/* Mini welcome screen */}
          <div className="relative" style={{ height: "160px", backgroundColor: "#1a1510" }}>
            <img src="https://images.unsplash.com/photo-1761211488173-a7154314420a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.6 }} />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 px-3 text-center" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(15,11,7,0.7) 70%)" }}>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "white", fontWeight: 300, lineHeight: 1.1 }}>Romeo &amp; Juliet</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "7px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.2em", marginTop: "3px" }}>JUNE 21–22 · UMBRIA</p>
              <div className="mt-3 px-4 py-1.5" style={{ border: "0.5px solid rgba(198,168,107,0.6)", fontSize: "7px", fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.8)", letterSpacing: "0.2em" }}>
                ENTER WEDDING
              </div>
            </div>
          </div>
          {/* Mini nav */}
          <div className="grid grid-cols-2 gap-1.5 p-2" style={{ backgroundColor: "var(--ivory)" }}>
            {["Timeline", "Transport", "Dining", "Seating"].map(label => (
              <div key={label} className="flex items-center justify-center py-2" style={{ backgroundColor: "var(--champagne)", borderRadius: "2px" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "7.5px", color: "var(--charcoal)", letterSpacing: "0.1em" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 4: Guest Experience ─────────────────────────────────────────────────
function Slide04() {
  return (
    <div className="w-full h-full flex flex-col justify-center px-10 md:px-16" style={{ backgroundColor: "var(--champagne)" }}>
      <div className="max-w-3xl mx-auto w-full">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
          Guest Experience
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.05, marginBottom: "20px" }}>
          Feels like opening<br />
          <em style={{ color: "var(--dusty-rose)" }}>a wedding invitation.</em>
        </h2>
        <OrnamentDivider />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { screen: "Welcome", desc: "Emotional, cinematic entry", color: "var(--charcoal)" },
            { screen: "Timeline", desc: "Ceremony through brunch", color: "var(--dusty-rose)" },
            { screen: "Dining", desc: "Elegant menu & preferences", color: "var(--sage)" },
            { screen: "Seating", desc: "Delightful table discovery", color: "var(--gold)" },
          ].map(item => (
            <div key={item.screen} className="flex flex-col gap-2">
              <div style={{ height: "80px", backgroundColor: "var(--ivory)", borderRadius: "6px", border: "0.5px solid rgba(45,45,45,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: item.color, fontStyle: "italic" }}>{item.screen}</p>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "var(--muted-foreground)", textAlign: "center", lineHeight: 1.4 }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(15px, 2.5vw, 20px)", fontStyle: "italic", color: "var(--charcoal)", marginTop: "32px", lineHeight: 1.6 }}>
          "I know exactly where I need to be and what I need to do."
        </p>
      </div>
    </div>
  );
}

// ─── SLIDE 5: MVP — Dining ─────────────────────────────────────────────────────
function Slide05() {
  const rows = [
    { table: "T3", seat: "S4", name: "Dominique Williams", meal: "Risotto ai Funghi", dietary: "Vegan",       dietaryColor: "#7aaa6b" },
    { table: "T2", seat: "S3", name: "Jin-soo Choi",       meal: "Risotto ai Funghi", dietary: "Vegan",       dietaryColor: "#7aaa6b" },
    { table: "T1", seat: "S4", name: "James Okafor",        meal: "Filetto di Manzo",   dietary: "Gluten Free", dietaryColor: "var(--gold)" },
    { table: "T4", seat: "S4", name: "Adaeze Okonkwo",     meal: "Filetto di Manzo",   dietary: "Nut Allergy", dietaryColor: "var(--dusty-rose)" },
    { table: "T2", seat: "S6", name: "Mei-Lin Chen",       meal: "Risotto ai Funghi", dietary: "Vegan + Nut", dietaryColor: "var(--dusty-rose)" },
    { table: "T3", seat: "S1", name: "Zara Ahmed",          meal: "Risotto ai Funghi", dietary: "Vegetarian",  dietaryColor: "var(--sage)" },
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row" style={{ backgroundColor: "var(--ivory)" }}>
      {/* Left */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-14 py-10">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
          MVP Feature
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.05, marginBottom: "20px" }}>
          The kitchen knows<br />
          <em style={{ color: "var(--sage)" }}>everything. Instantly.</em>
        </h2>
        <OrnamentDivider />
        <div className="mt-6 flex flex-col gap-3">
          {[
            { count: "5", label: "Vegetarian", color: "var(--sage)" },
            { count: "3", label: "Vegan", color: "#7aaa6b" },
            { count: "4", label: "Gluten Free", color: "var(--gold)" },
            { count: "1", label: "Nut Allergy (severe)", color: "var(--dusty-rose)" },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3">
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 300, color: item.color, minWidth: "36px" }}>{item.count}</p>
              <div style={{ height: "1px", flex: 1, backgroundColor: `${item.color}40` }} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--charcoal)", letterSpacing: "0.06em" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: mock table */}
      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div style={{ width: "100%", maxWidth: "340px", backgroundColor: "var(--champagne)", borderRadius: "6px", border: "0.5px solid rgba(45,45,45,0.1)", overflow: "hidden", boxShadow: "0 8px 32px rgba(45,45,45,0.1)" }}>
          <div className="px-4 py-3" style={{ borderBottom: "0.5px solid rgba(45,45,45,0.08)" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "8.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>
              Dining Operations
            </p>
          </div>
          {/* column headers */}
          <div className="grid px-4 py-2" style={{ gridTemplateColumns: "44px 1fr 1fr" }}>
            {["Seat", "Guest", "Dietary"].map(h => (
              <p key={h} style={{ fontFamily: "var(--font-sans)", fontSize: "7.5px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(45,45,45,0.3)" }}>{h}</p>
            ))}
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid px-4 py-2.5 items-center" style={{ gridTemplateColumns: "44px 1fr 1fr", borderTop: "0.5px solid rgba(45,45,45,0.05)", backgroundColor: r.dietary !== "Standard" ? "rgba(248,244,238,0.7)" : "transparent" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "9.5px", color: "var(--muted-foreground)" }}>{r.table}·{r.seat}</p>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "12px", color: "var(--charcoal)" }}>{r.name.split(" ")[0]} {r.name.split(" ")[1][0]}.</p>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "8.5px", padding: "2px 6px", borderRadius: "2px", backgroundColor: `${r.dietaryColor}18`, border: `0.5px solid ${r.dietaryColor}55`, color: r.dietaryColor, display: "inline-block" }}>{r.dietary}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 6: Organizer Dashboard ─────────────────────────────────────────────
function Slide06() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row" style={{ backgroundColor: "var(--charcoal)" }}>
      {/* Left */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-14 py-10">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
          Organizer View
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 300, color: "white", lineHeight: 1.05, marginBottom: "20px" }}>
          Complete confidence.<br />
          <em style={{ color: "var(--dusty-rose)" }}>Live event control.</em>
        </h2>
        <OrnamentDivider light />
        <div className="mt-6 flex flex-col gap-4">
          {[
            { label: "Guest Status", detail: "Arrival tracking. Who's missing. Who needs attention." },
            { label: "Dining Operations", detail: "Every dietary note. Every table. Every allergy flagged." },
            { label: "Seating Command", detail: "Interactive floor plan. Click a table, see every guest." },
            { label: "Transport Center", detail: "Shuttle status. Capacity. Delays. Live." },
            { label: "Announcements", detail: "Push updates to all guests instantly." },
          ].map(item => (
            <div key={item.label} className="flex gap-3 items-start">
              <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "var(--gold)", marginTop: "7px", flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "white" }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "1px", lineHeight: 1.5 }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: mini ops dashboard */}
      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div style={{ width: "100%", maxWidth: "260px", backgroundColor: "var(--champagne)", borderRadius: "10px", overflow: "hidden", boxShadow: "0 24px 56px rgba(0,0,0,0.5)" }}>
          {/* Header */}
          <div className="px-4 py-3" style={{ backgroundColor: "var(--champagne)", borderBottom: "0.5px solid rgba(45,45,45,0.1)" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "7px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>Operations Center</p>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "var(--charcoal)", fontWeight: 300 }}>Romeo &amp; Juliet</p>
            <div className="flex items-center gap-1.5 mt-1.5 px-2 py-1.5" style={{ backgroundColor: "var(--ivory)", borderRadius: "2px" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--sage)" }} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "8px", color: "var(--charcoal)" }}>
                Ceremony begins in <span style={{ color: "var(--gold)" }}>45 min</span>
              </p>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex px-2 py-1.5 gap-1" style={{ backgroundColor: "var(--ivory)", borderBottom: "0.5px solid rgba(45,45,45,0.07)" }}>
            {["Guests", "Dining", "Seating", "Transport"].map((t, i) => (
              <div key={t} className="px-2 py-1" style={{ borderRadius: "2px", backgroundColor: i === 0 ? "var(--champagne)" : "transparent" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "7px", letterSpacing: "0.1em", textTransform: "uppercase", color: i === 0 ? "var(--charcoal)" : "var(--muted-foreground)" }}>{t}</p>
              </div>
            ))}
          </div>
          {/* Content */}
          <div className="px-4 py-4">
            <div className="flex items-end gap-3 mb-3">
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "32px", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1 }}>118</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", color: "var(--muted-foreground)", paddingBottom: "4px" }}>of 142 checked in</p>
            </div>
            <div style={{ height: "3px", backgroundColor: "rgba(45,45,45,0.08)", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ width: "83%", height: "100%", backgroundColor: "var(--sage)", borderRadius: "2px" }} />
            </div>
            <div className="flex flex-col gap-1.5 mt-3">
              {["Priya Sharma — Not Arrived", "Tyler Robinson — Not Arrived", "Daniel Adeyemi — En Route"].map((g, i) => (
                <div key={i} className="flex items-center justify-between px-2 py-1.5" style={{ backgroundColor: "var(--ivory)", borderRadius: "2px" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", color: "var(--charcoal)" }}>{g.split(" — ")[0]}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "8px", color: i === 2 ? "var(--gold)" : "var(--dusty-rose)" }}>{g.split(" — ")[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 7: Transportation ───────────────────────────────────────────────────
function Slide07() {
  return (
    <div className="w-full h-full flex flex-col justify-center px-10 md:px-16" style={{ backgroundColor: "var(--ivory)" }}>
      <div className="max-w-2xl mx-auto w-full">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
          The #1 Cause of Wedding Day Stress
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.05, marginBottom: "20px" }}>
          Transportation.<br />
          <em style={{ color: "var(--sage)" }}>Solved.</em>
        </h2>
        <OrnamentDivider />
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--muted-foreground)", marginTop: "18px", marginBottom: "24px", lineHeight: 1.7 }}>
          Guests never wonder where the shuttle is. Planners see every route, every hotel, every delay — live.
        </p>
        <div className="flex flex-col gap-3">
          {[
            { hotel: "Hotel Brufani Palace", guests: "14 guests", time: "14:15 → 14:35", status: "On Schedule", statusColor: "var(--sage)" },
            { hotel: "NH Perugia", guests: "5 guests", time: "14:20 → 14:45", status: "On Schedule", statusColor: "var(--sage)" },
            { hotel: "Castello di Monterone", guests: "8 guests", time: "14:30 → 14:45", status: "Delayed 12 min", statusColor: "var(--dusty-rose)" },
          ].map(r => (
            <div key={r.hotel} className="flex items-center justify-between px-4 py-4" style={{ backgroundColor: "var(--champagne)", borderRadius: "3px", border: "0.5px solid rgba(45,45,45,0.08)" }}>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--charcoal)" }}>{r.hotel}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "var(--muted-foreground)", marginTop: "2px" }}>{r.guests} · {r.time}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: r.statusColor }} />
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: r.statusColor, letterSpacing: "0.06em" }}>{r.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 8: Positioning ─────────────────────────────────────────────────────
function Slide08() {
  return (
    <div className="w-full h-full flex flex-col justify-center px-10 md:px-16" style={{ backgroundColor: "var(--champagne)" }}>
      <div className="max-w-3xl mx-auto w-full">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
          Positioning
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.05, marginBottom: "20px" }}>
          Not another wedding website.
        </h2>
        <OrnamentDivider />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Competitors", items: ["Wedding website builders", "Registry platforms", "Guest messaging apps"], bad: true },
            { label: "Ceremoniq is", items: ["A luxury digital concierge", "A live operations center", "A premium guest experience"], bad: false },
            { label: "Feels like", items: ["A luxury hotel", "A destination travel guide", "A private members club"], bad: false },
          ].map(col => (
            <div key={col.label} className="flex flex-col gap-3">
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: col.bad ? "var(--dusty-rose)" : "var(--sage)", marginBottom: "2px" }}>
                {col.label}
              </p>
              {col.items.map(item => (
                <div key={item} className="flex items-center gap-2.5 px-3 py-2.5" style={{ backgroundColor: "var(--ivory)", borderRadius: "3px", border: "0.5px solid rgba(45,45,45,0.08)" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: col.bad ? "var(--dusty-rose)" : "var(--sage)", flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--charcoal)", lineHeight: 1.4 }}>{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 9: Closing ──────────────────────────────────────────────────────────
function Slide09() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: "#1a1510" }}>
      <img
        src="https://images.unsplash.com/photo-1570991652278-dc23ef47f092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.3 }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,11,7,0.5) 0%, rgba(15,11,7,0.75) 100%)" }} />
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(198,168,107,0.7)", marginBottom: "20px" }}>
          Ceremoniq
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 6vw, 64px)", fontWeight: 300, color: "white", lineHeight: 1.05, marginBottom: "24px" }}>
          The luxury wedding<br />operating system.
        </h2>
        <OrnamentDivider light />
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(14px, 2.5vw, 20px)", fontStyle: "italic", color: "rgba(255,255,255,0.55)", marginTop: "24px", lineHeight: 1.7, maxWidth: "520px" }}>
          "If judges immediately say: 'Wow, this feels expensive' —<br />the design is successful."
        </p>
        <div className="mt-10 flex items-center gap-6">
          {["Guest Experience", "Organizer Dashboard", "Live Operations"].map((item, i) => (
            <div key={item} className="flex items-center gap-6">
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>{item}</p>
              {i < 2 && <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "rgba(198,168,107,0.4)" }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Slide registry ────────────────────────────────────────────────────────────
const slides = [
  { id: 1, title: "Cover",               component: <Slide01 /> },
  { id: 2, title: "The Problem",         component: <Slide02 /> },
  { id: 3, title: "The Solution",        component: <Slide03 /> },
  { id: 4, title: "Guest Experience",    component: <Slide04 /> },
  { id: 5, title: "MVP — Dining",        component: <Slide05 /> },
  { id: 6, title: "Organizer View",      component: <Slide06 /> },
  { id: 7, title: "Transportation",      component: <Slide07 /> },
  { id: 8, title: "Positioning",         component: <Slide08 /> },
  { id: 9, title: "Closing",             component: <Slide09 /> },
];

export function PitchDeck({ onExit }: PitchDeckProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(idx: number) {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }
  function prev() { if (current > 0) go(current - 1); }
  function next() { if (current < slides.length - 1) go(current + 1); }

  return (
    <div className="fixed inset-0 flex flex-col" style={{ backgroundColor: "#000", zIndex: 50 }}>
      {/* Slide area */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            {slides[current].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls bar */}
      <div
        className="flex items-center justify-between px-5 py-3 flex-shrink-0"
        style={{ backgroundColor: "rgba(15,11,7,0.95)", borderTop: "0.5px solid rgba(255,255,255,0.07)" }}
      >
        {/* Exit */}
        <button
          onClick={onExit}
          style={{ background: "none", border: "0.5px solid rgba(255,255,255,0.15)", borderRadius: "2px", padding: "5px 12px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}
        >
          ← Exit
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: i === current ? "20px" : "5px",
                height: "5px",
                borderRadius: "3px",
                backgroundColor: i === current ? "var(--gold)" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            style={{ background: "none", border: "0.5px solid rgba(255,255,255,0.15)", borderRadius: "2px", padding: "5px 14px", cursor: current === 0 ? "default" : "pointer", fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.15em", color: current === 0 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)", transition: "all 0.2s" }}
          >
            ←
          </button>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", minWidth: "44px", textAlign: "center" }}>
            {current + 1} / {slides.length}
          </p>
          <button
            onClick={next}
            disabled={current === slides.length - 1}
            style={{ background: "none", border: "0.5px solid rgba(255,255,255,0.15)", borderRadius: "2px", padding: "5px 14px", cursor: current === slides.length - 1 ? "default" : "pointer", fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.15em", color: current === slides.length - 1 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)", transition: "all 0.2s" }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
