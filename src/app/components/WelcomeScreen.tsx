interface WelcomeScreenProps {
  onEnter: () => void;
}

export function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: "var(--ivory)" }}>
      {/* Hero image full bleed */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1761211488173-a7154314420a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwcm9tYW50aWMlMjB3ZWRkaW5nJTIwcG9ydHJhaXQlMjBnb2xkZW4lMjBob3VyfGVufDF8fHx8MTc4MDk3MzU5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Romeo and Juliet wedding"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay: bottom heavy for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(45,45,45,0.15) 0%, rgba(45,45,45,0.02) 40%, rgba(24,20,16,0.72) 75%, rgba(15,12,8,0.88) 100%)",
          }}
        />
      </div>

      {/* Top wordmark */}
      <div className="relative z-10 flex justify-center pt-12 px-8">
        <span
          className="tracking-[0.28em] uppercase text-white/70"
          style={{ fontFamily: "var(--font-sans)", fontSize: "11px", letterSpacing: "0.28em" }}
        >
          Ceremoniq
        </span>
      </div>

      {/* Monogram / crest area */}
      <div className="relative z-10 flex justify-center mt-12">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="25" stroke="rgba(198,168,107,0.55)" strokeWidth="0.8" />
          <circle cx="26" cy="26" r="20" stroke="rgba(198,168,107,0.35)" strokeWidth="0.5" />
          {/* R */}
          <text x="10" y="33" fontFamily="Cormorant Garamond, serif" fontSize="20" fontWeight="300" fill="rgba(198,168,107,0.9)" fontStyle="italic">R</text>
          {/* & */}
          <text x="22.5" y="32" fontFamily="Cormorant Garamond, serif" fontSize="13" fontWeight="300" fill="rgba(255,255,255,0.5)"> &</text>
          {/* J */}
          <text x="33" y="33" fontFamily="Cormorant Garamond, serif" fontSize="20" fontWeight="300" fill="rgba(198,168,107,0.9)" fontStyle="italic">J</text>
        </svg>
      </div>

      {/* Main content at bottom */}
      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen pb-16 px-8 text-center">
        <div className="mb-2">
          <p
            className="text-white/60 tracking-widest uppercase mb-6"
            style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.3em" }}
          >
            The Wedding of
          </p>
          <h1
            className="text-white mb-3 leading-none"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(52px, 11vw, 82px)", fontWeight: 300, letterSpacing: "-0.01em" }}
          >
            Romeo &amp; Juliet
          </h1>
          <div
            className="mx-auto mb-2"
            style={{ width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.7 }}
          />
          <p
            className="text-white/75 mb-1"
            style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 400, fontStyle: "italic" }}
          >
            June 21–22, 2027
          </p>
          <p
            className="text-white/55 mb-8"
            style={{ fontFamily: "var(--font-sans)", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Castello di Petrata · Umbria, Italy
          </p>
          <p
            className="text-white/60 mb-12 mx-auto"
            style={{ fontFamily: "var(--font-serif)", fontSize: "17px", fontStyle: "italic", maxWidth: "280px", lineHeight: 1.7 }}
          >
            We are delighted to celebrate with you.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onEnter}
          className="group relative overflow-hidden"
          style={{
            backgroundColor: "transparent",
            border: "1px solid rgba(198,168,107,0.6)",
            color: "rgba(255,255,255,0.9)",
            fontFamily: "var(--font-sans)",
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            padding: "16px 48px",
            cursor: "pointer",
            transition: "all 0.4s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(198,168,107,0.15)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(198,168,107,0.9)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(198,168,107,0.6)";
          }}
        >
          Enter Wedding
        </button>

        {/* Floral line art decoration */}
        <div className="mt-10 flex items-center gap-3 opacity-40">
          <div style={{ width: "24px", height: "0.5px", backgroundColor: "rgba(255,255,255,0.5)" }} />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1 C6 1 7.5 3 6 6 C4.5 3 6 1 6 1Z" fill="rgba(198,168,107,0.7)" />
            <path d="M6 11 C6 11 7.5 9 6 6 C4.5 9 6 11 6 11Z" fill="rgba(198,168,107,0.7)" />
            <path d="M1 6 C1 6 3 7.5 6 6 C3 4.5 1 6 1 6Z" fill="rgba(198,168,107,0.7)" />
            <path d="M11 6 C11 6 9 7.5 6 6 C9 4.5 11 6 11 6Z" fill="rgba(198,168,107,0.7)" />
          </svg>
          <div style={{ width: "24px", height: "0.5px", backgroundColor: "rgba(255,255,255,0.5)" }} />
        </div>
      </div>
    </div>
  );
}
