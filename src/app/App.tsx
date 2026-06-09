import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { HomeScreen } from "./components/HomeScreen";
import { TimelineScreen } from "./components/TimelineScreen";
import { DiningScreen } from "./components/DiningScreen";
import { SeatingScreen } from "./components/SeatingScreen";
import { TransportationScreen } from "./components/TransportationScreen";
import { OrganizerDashboard } from "./components/organizer/OrganizerDashboard";
import { PitchDeck } from "./components/PitchDeck";

type Screen = "welcome" | "home" | "timeline" | "dining" | "seating" | "transportation" | "organizer" | "pitch";

function getVariants(from: Screen, to: Screen) {
  if (to === "welcome" || from === "welcome") {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit:    { opacity: 0 },
      transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] as number[] },
    };
  }
  if (to === "organizer" || from === "organizer") {
    return {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit:    { opacity: 0, y: -8 },
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as number[] },
    };
  }
  const goingDeeper = to !== "home";
  return goingDeeper
    ? { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -16 }, transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] as number[] } }
    : { initial: { opacity: 0, x: -24 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 16 },  transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] as number[] } };
}

export default function App() {
  {/* MARKER-MAKE-KIT-INVOKED */}
  const [screen, setScreen] = useState<Screen>("welcome");
  const prevScreen = useRef<Screen>("welcome");

  function navigate(to: Screen) {
    prevScreen.current = screen;
    setScreen(to);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  const variants = getVariants(prevScreen.current, screen);

  return (
    <div className="size-full relative" style={{ fontFamily: "var(--font-sans)" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={variants.transition}
          style={{ width: "100%", minHeight: "100%" }}
        >
          {screen === "welcome" && (
            <WelcomeScreen onEnter={() => navigate("home")} />
          )}
          {screen === "home" && (
            <HomeScreen
              onNavigate={(s) => navigate(s as Screen)}
              onOrganizerAccess={() => navigate("organizer")}
              onPitchDeck={() => navigate("pitch")}
            />
          )}
          {screen === "timeline" && (
            <TimelineScreen onBack={() => navigate("home")} />
          )}
          {screen === "dining" && (
            <DiningScreen onBack={() => navigate("home")} />
          )}
          {screen === "seating" && (
            <SeatingScreen onBack={() => navigate("home")} />
          )}
          {screen === "transportation" && (
            <TransportationScreen onBack={() => navigate("home")} />
          )}
          {screen === "organizer" && (
            <OrganizerDashboard onExit={() => navigate("home")} />
          )}
          {screen === "pitch" && (
            <PitchDeck onExit={() => navigate("home")} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
