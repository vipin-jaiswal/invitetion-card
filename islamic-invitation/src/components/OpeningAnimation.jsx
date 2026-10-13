import { useState } from "react";
import { motion } from "framer-motion";

import islamicBackground from "../assets/img/islamic-bg.png";
import Emblem from "./Emblem";
import InvitationCard from "./InvitationCard";
import WeddingDetails from "./WeddingDetails";
import ScratCard from "./ScratchCard";
import InvitationMessage from "./InvitationMessage";
import EventsPage from "./EventsPage";
import CountdownPage from "./CountdownPage";
import VenuePage from "./VenuePage";
import BlessingsPage from "./BlessingsPage";
import ContactPage from "./ContactPage";
import ThankYouPage from "./ThankYouPage";

const stageLabels = [
  "Invitation ready",
  "Closed emblem",
  "Opening the emblem",
  "Revealing the invitation",
  "Lifting the card",
  "Showing the venue",
  "Wedding invitation",
];

export default function OpeningAnimation() {
  const [stage, setStage] = useState(0);

  const openInvitation = () => {
    if (stage === 0) setStage(5);
  };

  return (
    <main id="invitation-scroll" className={`invitation-scene relative isolate w-full overflow-x-hidden bg-[#031810] text-amber-50 ${stage >= 5 ? "min-h-svh overflow-y-auto" : "h-screen h-svh overflow-y-hidden"}`}>
      <div
        aria-hidden="true"
        className="scene-background fixed inset-0 -z-20 bg-cover bg-[center_58%] bg-no-repeat"
        style={{ backgroundImage: `url(${islamicBackground})` }}
      />
      <div aria-hidden="true" className="scene-shade fixed inset-0 -z-10" />
      <div aria-hidden="true" className="scene-particles fixed inset-0 -z-10" />

      <section id="invitation-home" className="relative h-svh min-h-svh w-full shrink-0 overflow-hidden">
      <motion.header
        className="intro-copy absolute left-1/2 top-[clamp(3.5rem,12svh,8rem)] z-10 w-[min(92vw,650px)] -translate-x-1/2 px-3 text-center"
        animate={{ opacity: stage >= 5 ? 0 : 1 }}
        transition={{ duration: 0 }}
        aria-hidden={stage >= 3}
      >
        <p className="mb-3 text-[9px] font-medium tracking-[0.42em] text-amber-200/90 sm:text-[11px]">A CELEBRATION OF LOVE &amp; BLESSINGS</p>
        <h1 className="font-serif text-3xl leading-tight text-[#fff5d9] drop-shadow-[0_3px_14px_rgba(0,0,0,.8)] sm:text-5xl">A Beautiful Beginning</h1>
        <p className="mx-auto mt-3 max-w-md text-xs leading-5 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,.9)] sm:text-base sm:leading-6">
          An invitation wrapped in elegance, love and blessings.
        </p>
      </motion.header>

      <div className="pointer-events-none absolute inset-0 z-10">
        <div aria-hidden="true" className="pedestal-glow absolute left-1/2 top-[76%] h-16 w-[min(80vw,460px)] -translate-x-1/2 rounded-full" />
        <Emblem stage={stage} onOpenInvitation={openInvitation} />
        <InvitationCard stage={stage} />
      </div>

      {stage === 0 && (
        <button
          type="button"
          onClick={openInvitation}
          className="absolute bottom-[clamp(2rem,8svh,5rem)] left-1/2 z-20 -translate-x-1/2 rounded-full border border-amber-200/80 bg-[#123b2c]/90 px-2 py-.5 text-[12px] font-medium uppercase tracking-[0.1em] text-amber-100 shadow-[0_8px_30px_rgba(0,0,0,.4)] transition hover:bg-[#1a513c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-100 sm:px-5 sm:py-2 sm:text-xs"
        >
          Open Invitation
        </button>
      )}

      <div className="sr-only" aria-live="polite" aria-atomic="true">{stageLabels[stage]}</div>
      </section>
      {stage >= 5 && (
        <>
          <ScratCard stage={stage} />
          <EventsPage />
          <WeddingDetails stage={stage} />
        <InvitationMessage />
        <CountdownPage />
        <VenuePage />
        <BlessingsPage />
        <ContactPage />
        <ThankYouPage />
        </>
      )}
    </main>
  );
}
