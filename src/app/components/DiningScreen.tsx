import { useState } from "react";

interface DiningScreenProps {
  onBack: () => void;
}

const dietaryOptions = [
  { id: "standard", label: "Standard", description: "No restrictions" },
  { id: "vegetarian", label: "Vegetarian", description: "No meat or fish" },
  { id: "vegan", label: "Vegan", description: "No animal products" },
  { id: "gluten-free", label: "Gluten Free", description: "Coeliac safe" },
  { id: "nut-allergy", label: "Nut Allergy", description: "Strict nut-free" },
  { id: "dairy-free", label: "Dairy Free", description: "No lactose" },
  { id: "halal", label: "Halal", description: "Halal certified" },
  { id: "kosher", label: "Kosher", description: "Kosher certified" },
];

const courseChoices = [
  {
    course: "Starter",
    options: [
      { id: "s1", label: "Burrata con Tartufo", sub: "burrata, black truffle, heirloom tomato, basil oil" },
      { id: "s2", label: "Carpaccio di Manzo", sub: "wagyu beef, rocket, capers, aged parmigiano, truffle aioli" },
      { id: "s3", label: "Zuppa di Zucca", sub: "pumpkin velouté, toasted pine nuts, sage cream (v)" },
    ],
  },
  {
    course: "Main",
    options: [
      { id: "m1", label: "Filetto di Manzo", sub: "beef fillet, rosemary jus, celeriac purée, seasonal truffle" },
      { id: "m2", label: "Branzino al Forno", sub: "sea bass, lemon butter, samphire, saffron risotto" },
      { id: "m3", label: "Risotto ai Funghi", sub: "wild mushroom, aged parmigiano, white truffle oil (v/gf)" },
    ],
  },
];

export function DiningScreen({ onBack }: DiningScreenProps) {
  const [selected, setSelected] = useState<string>("standard");
  const [starterChoice, setStarterChoice] = useState<string | null>(null);
  const [mainChoice, setMainChoice] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
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
          Your Preferences
        </p>
        <h1
          className="mt-2"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,8vw,46px)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.1 }}
        >
          Dining
        </h1>
        <p
          className="mt-2"
          style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontStyle: "italic", color: "var(--dusty-rose)" }}
        >
          Help us make your evening perfect
        </p>
      </div>

      {/* Dietary section */}
      <div className="px-7 mb-8">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "14px" }}>
          Dietary Requirements
        </p>
        <div className="flex flex-wrap gap-2.5">
          {dietaryOptions.map((opt) => {
            const isSelected = selected === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  padding: "9px 18px",
                  borderRadius: "2px",
                  border: isSelected ? "1px solid var(--gold)" : "0.5px solid rgba(45,45,45,0.15)",
                  backgroundColor: isSelected ? "var(--champagne)" : "transparent",
                  color: isSelected ? "var(--charcoal)" : "var(--muted-foreground)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.05em",
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        {selected !== "standard" && (
          <p
            className="mt-3"
            style={{ fontFamily: "var(--font-serif)", fontSize: "14px", fontStyle: "italic", color: "var(--dusty-rose)" }}
          >
            {dietaryOptions.find((o) => o.id === selected)?.description} — the kitchen will be notified.
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="mx-7 mb-8" style={{ height: "0.5px", backgroundColor: "rgba(45,45,45,0.08)" }} />

      {/* Course choices */}
      {courseChoices.map((section) => (
        <div key={section.course} className="px-7 mb-8">
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "14px" }}>
            {section.course} Selection
          </p>
          <div className="flex flex-col gap-3">
            {section.options.map((opt) => {
              const choices = section.course === "Starter" ? starterChoice : mainChoice;
              const setChoice = section.course === "Starter" ? setStarterChoice : setMainChoice;
              const isSelected = choices === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setChoice(opt.id)}
                  className="text-left w-full flex items-start gap-4"
                  style={{
                    backgroundColor: isSelected ? "var(--champagne)" : "transparent",
                    border: isSelected ? "0.5px solid rgba(198,168,107,0.35)" : "0.5px solid rgba(45,45,45,0.1)",
                    borderRadius: "3px",
                    padding: "16px 18px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  {/* Radio dot */}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      border: isSelected ? "1px solid var(--gold)" : "0.7px solid rgba(45,45,45,0.25)",
                      backgroundColor: "transparent",
                      flexShrink: 0,
                      marginTop: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isSelected && (
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--gold)" }} />
                    )}
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "17px", fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.2 }}>
                      {opt.label}
                    </p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--muted-foreground)", marginTop: "3px", lineHeight: 1.5 }}>
                      {opt.sub}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Notes */}
      <div className="px-7 mb-8">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "12px" }}>
          Additional Notes
        </p>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any allergies, intolerances, or special requests…"
          rows={3}
          style={{
            width: "100%",
            backgroundColor: "var(--champagne)",
            border: "0.5px solid rgba(45,45,45,0.1)",
            borderRadius: "3px",
            padding: "14px 16px",
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "var(--charcoal)",
            resize: "none",
            outline: "none",
            lineHeight: 1.6,
          }}
        />
      </div>

      {/* Save */}
      <div className="px-7 pb-14">
        <button
          onClick={handleSave}
          style={{
            width: "100%",
            backgroundColor: saved ? "var(--sage)" : "var(--charcoal)",
            color: "var(--ivory)",
            border: "none",
            borderRadius: "3px",
            padding: "16px",
            fontFamily: "var(--font-sans)",
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          {saved ? "Preferences Saved ✓" : "Save Preferences"}
        </button>
      </div>
    </div>
  );
}
