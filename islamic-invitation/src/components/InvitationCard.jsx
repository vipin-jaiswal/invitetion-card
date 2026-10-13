import { motion } from "framer-motion";
import { useState } from "react";
import invitationTemplate from "../assets/img/Gilded_Emerald_Mosque_Invitation_Template-removebg-preview.png";
import { weddingData, formatWeddingDate } from "../data/weddingData";

const nikah = weddingData.events.nikah;
const eventDetails = [
  ["Nikah Date", formatWeddingDate(nikah.date)],
  ["Time", nikah.time || "Add Nikah Time"],
  ["Location", nikah.venue || weddingData.venue.name],
];

export default function InvitationCard({ stage }) {
  const visible = stage >= 3;
  const settled = stage >= 5;
  const [openingFinished, setOpeningFinished] = useState(false);

  return (
    <motion.article
      aria-label="Islamic wedding invitation"
      aria-hidden={!visible}
      inert={!visible}
      className="invitation-card pointer-events-auto absolute left-1/2 top-1/2 z-20 w-[min(calc(100vw-32px),680px,51svh)] -translate-x-1/2"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? (settled ? "-50%" : stage === 4 ? "-44%" : "-28%") : "-50%",
        rotateX: visible ? (settled ? 0 : 22) : -32,
        rotateY: visible ? (settled ? 0 : -7) : 10,
        scale: visible ? (settled ? 1.5  : .88) : 0.62,
        filter: visible ? "blur(0px)" : "blur(5px)",
      }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        if (settled) setOpeningFinished(true);
      }}
      style={{
        transformPerspective: 1100,
        transformOrigin: "50% 90%",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <img
        src={invitationTemplate}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="relative z-0 block h-auto w-full select-none"
      />

      <div className="absolute inset-x-[18%] top-[35%] bottom-[20%] z-10 flex flex-col items-center justify-center text-center text-[#174432] [text-shadow:0_1px_1px_rgba(255,250,235,0.7)]">
        <p lang="ar" dir="rtl" className=" text-8xl font-extrabold text-[clamp(9px,2.4vw,13px)] leading-relaxed text-[#000000]">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <div aria-hidden="true" className="my-[2%] flex w-full items-center justify-center gap-2 text-[#a17a3c]">
          <span className="h-px w-8 bg-current/50" />
          <span className="text-[9px]">✦</span>
          <span className="h-px w-8 bg-current/50" />
        </div>

        <p className="text-[clamp(7px,1.9vw,10px)] text-2xl font-bold italic tracking-wide text-[#536b59]">
          Together with 
        </p>
        <p className="text-[clamp(7px,1.9vw,10px)] text-2xl font-bold italic tracking-wide text-[#536b59]">
          their families
        </p>
        <h2 className="mt-[5%] font-serif text-6xl text-[clamp(16px,4.4vw,23px)] leading-tight text-[#153f30]">
          {weddingData.bride.name}
        </h2>
         <p className="text-[8px]">D/o Naseem Ahmad Shaikh</p>
       
        <p className="mt-[5%] font-serif text-[clamp(15px,3.8vw,20px)] italic leading-none text-[#a17a3c]" aria-label="and">
         Weds
        </p>
        <h2 className="mt-[3%]  font-serif text-6xl text-[clamp(16px,4.4vw,23px)] w-[60%] leading-tight text-[#153f30]">
          {weddingData.groom.name}
        </h2>
         <p className="text-[8px]">s/o Sultan Ghalib Siddiqui</p>

        

        <div className="mt-[6%] flex items-center justify-center">
          <button
            type="button"
            disabled={!settled || !openingFinished}
            onClick={() => {
              document.getElementById("events-page")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            aria-label="Open the wedding events page"
            className="rounded-full border border-[#9a773a] bg-[#f5ead2]/90 px-1.5 py-px text-[6px] tracking-wide text-[#174432] shadow-sm disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f6d37]"
          >
            View Events
          </button>
        </div>

        <div aria-hidden="true" className="mt-[3%] flex flex-col items-center gap-0.5 text-[#8a6b38]">
          <span className="text-[7px] tracking-[0.3em]">SCROLL</span>
          <span className="text-[10px] leading-none">⌄</span>
        </div>
      </div>
    </motion.article>


  );

}
