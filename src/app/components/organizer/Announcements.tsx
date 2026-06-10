import { useState } from "react";
import { announcements as initialAnnouncements } from "./data";

const templates = [
  "Ceremony delayed 15 minutes — please remain seated",
  "Shuttle departing in 10 minutes from main entrance",
  "Reception is now moving indoors due to weather",
  "Dinner service will begin in 20 minutes",
  "Please make your way to the grand salon for dinner",
];

export function Announcements() {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [composing, setComposing] = useState(false);
  const [draft, setDraft] = useState("");
  const [sent, setSent] = useState(false);

  function handleSend() {
    if (!draft.trim()) return;
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    setAnnouncements(prev => [
      {
        id: prev.length + 1,
        message: draft,
        sentAt: time,
        sentBy: "Wedding Planner",
        readCount: 0,
        totalSent: 32,
      },
      ...prev,
    ]);
    setDraft("");
    setComposing(false);
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  }

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      {/* Send button / compose toggle */}
      {!composing ? (
        <button
          onClick={() => setComposing(true)}
          className="w-full flex items-center justify-center gap-2 mb-6"
          style={{
            backgroundColor: "var(--charcoal)",
            color: "var(--ivory)",
            border: "none",
            borderRadius: "3px",
            padding: "15px",
            cursor: "pointer",
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            transition: "opacity 0.2s ease",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 7L1 13V8.5L9.5 7L1 5.5V1Z" stroke="currentColor" strokeWidth="0.8" strokeLinejoin="round" />
          </svg>
          Send Announcement
        </button>
      ) : (
        <div className="mb-6" style={{ backgroundColor: "var(--champagne)", borderRadius: "4px", border: "0.5px solid rgba(45,45,45,0.1)", padding: "18px" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "10px" }}>
            New Announcement
          </p>
          <textarea
            value={draft}
            onChange={e => setDraft(e.target.value)}
            placeholder="Type your message to all guests…"
            rows={3}
            autoFocus
            style={{
              width: "100%",
              backgroundColor: "var(--ivory)",
              border: "0.5px solid rgba(45,45,45,0.1)",
              borderRadius: "3px",
              padding: "12px 14px",
              fontFamily: "var(--font-sans)",
              fontSize: "14.5px",
              color: "var(--charcoal)",
              resize: "none",
              outline: "none",
              lineHeight: 1.6,
              marginBottom: "10px",
            }}
          />

          {/* Templates */}
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "9.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "8px" }}>
            Quick Templates
          </p>
          <div className="flex flex-col gap-1.5 mb-4">
            {templates.map(t => (
              <button
                key={t}
                onClick={() => setDraft(t)}
                style={{
                  background: "none",
                  border: "0.5px solid rgba(45,45,45,0.1)",
                  borderRadius: "2px",
                  padding: "8px 12px",
                  textAlign: "left",
                  fontFamily: "var(--font-sans)",
                  fontSize: "12.5px",
                  color: "var(--charcoal)",
                  cursor: "pointer",
                  transition: "background-color 0.15s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--ivory)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleSend}
              style={{
                flex: 1,
                backgroundColor: "var(--charcoal)",
                color: "var(--ivory)",
                border: "none",
                borderRadius: "3px",
                padding: "12px",
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Send to All Guests
            </button>
            <button
              onClick={() => { setComposing(false); setDraft(""); }}
              style={{
                backgroundColor: "transparent",
                color: "var(--muted-foreground)",
                border: "0.5px solid rgba(45,45,45,0.15)",
                borderRadius: "3px",
                padding: "12px 18px",
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {sent && (
        <div className="mb-4 px-4 py-3 flex items-center gap-2" style={{ backgroundColor: "rgba(168,178,154,0.15)", border: "0.5px solid rgba(168,178,154,0.4)", borderRadius: "3px" }}>
          <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--sage)" }} />
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "13.5px", color: "var(--sage)" }}>Announcement sent to all 32 guests</p>
        </div>
      )}

      {/* Sent announcements */}
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "12px" }}>
        Sent
      </p>
      <div className="flex flex-col gap-3">
        {announcements.map(a => (
          <div key={a.id} style={{ backgroundColor: "var(--champagne)", borderRadius: "4px", border: "0.5px solid rgba(45,45,45,0.07)", padding: "16px 18px" }}>
            <div className="flex items-start justify-between gap-3 mb-2">
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--gold)", letterSpacing: "0.1em" }}>{a.sentAt}</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--muted-foreground)" }}>{a.sentBy}</p>
            </div>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "16.5px", color: "var(--charcoal)", lineHeight: 1.55, marginBottom: "10px" }}>
              "{a.message}"
            </p>
            {/* Read rate bar */}
            <div className="flex items-center gap-3">
              <div style={{ flex: 1, height: "2px", backgroundColor: "rgba(45,45,45,0.08)", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{ width: `${(a.readCount / a.totalSent) * 100}%`, height: "100%", backgroundColor: "var(--sage)", borderRadius: "2px" }} />
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>
                {a.readCount}/{a.totalSent} read
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
