
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function InvitationMessage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f4ecd9] px-4 py-12 text-[#174633]">

      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-amber-400" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full border border-amber-400" />
        <div className="absolute left-8 top-10 text-4xl text-amber-300">✦</div>
        <div className="absolute right-8 top-28 text-3xl text-amber-300">✧</div>
        <div className="absolute bottom-16 left-10 text-3xl text-amber-300">✧</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full max-w-2xl text-center"
      >
        {/* Top ornament */}
        <p className="mb-4 text-3xl text-[#d6b36a]">❧ ❦ ❧</p>

        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#98783e] sm:text-sm">
          OUR INVITATION
        </p>

        <h1 className="font-Roboto Mono font-bold text-2xl leading-tight sm:text-5xl">
          Dear Family & Friends
        </h1>


        {/* Invitation card */}
        <motion.div
          whileHover={{ scale: 1.015 }}
          className="relative mx-auto mt-5 mr-3 max-w-lg rounded-[28px] border-2 border-[#c6a15a] bg-[#fff9ec] p-3 text-[#174633] shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:mt-12 sm:p-5"
        >
          <div className="rounded-[20px] border border-[#c6a15a]/70 px-5 py-9 sm:px-10 sm:py-12">

            <p className="text-2xl text-[#b18a42]">۞</p>

            
          

            <div className=" flex items-center justify-center gap-3 text-[#b18a42]">
              <span className="h-px w-12 bg-current/60" />
              <span>✦</span>
              <span className="h-px w-12 bg-current/60" />
            </div>

            <p className="font-serif text-lg italic leading-8 text-[#466653]">
              By the grace of Allah, we joyfully invite you to be part of our Nikah and Walima celebrations.
Your presence, prayers, and blessings would mean the world to us as we begin this beautiful new journey together.         </p>

            <div className=" flex items-center justify-center gap-3 text-[#b18a42]">
              <span className="h-px w-12 bg-current/60" />
              <span>✦</span>
              <span className="h-px w-12 bg-current/60" />
            </div>

           

            <p className="  text-xl tracking-wide text-[#98783e] sm:text-2xl">With Love in Our Hearts</p>

            {/* Bride and groom names */}
            <div className="mt-5">
              <h3 className="font-pinyon text-3xl sm:text-4xl">
                {weddingData.bride.name}
              </h3>

              <p className="my-2 font-serif text-2xl italic text-[#b18a42]">
                &amp;
              </p>

              <h3 className="font-pinyon text-3xl sm:text-4xl">
                {weddingData.groom.name}
              </h3>
            </div>
          </div>
        </motion.div>

       
      </motion.div>
    </section>
  );
}
