
import { motion } from "framer-motion";

export default function BlessingsPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#063d2e] px-4 py-14 text-[#174633]">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full border border-[#d6b36a]/20" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full border border-[#d6b36a]/20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl text-center"
      >
        <p className="mb-4 text-3xl text-[#e5ca8b]">☾ ❦ ✦</p>

        <p className="text-xs uppercase tracking-[0.35em] text-[#e5ca8b]">
          A Prayer for Our New Beginning
        </p>

        <h1 className="mt-4 font-serif text-4xl text-[#fff7e8] sm:text-6xl">
          Blessings &amp; Duas
        </h1>

        <p className="mx-auto mt-5 max-w-lg leading-7 text-emerald-100/80">
          As we begin this beautiful journey together, we ask Allah
          to bless our union with love, peace, patience, and happiness.
        </p>

        <div className="mx-auto mt-5 mr-3  rounded-[30px] border-2 border-[#c6a15a] bg-[#fff9ec] p-3 shadow-2xl sm:p-5">
          <div className="rounded-[22px] border border-[#c6a15a]/60 px-2 py-5 sm:px-10 sm:py-14">
            <p className="text-4xl text-[#b18a42]">۞</p>

            <p
              lang="ar"
              dir="rtl"
              className="mt-4 font-serif text-2xl leading-[2] text-[#174633] sm:text-3xl"
            >
              بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
            </p>

            <p className="mt-3 text-sm italic leading-7 text-[#71816c]">
              May Allah bless you, shower His blessings upon you,
              and unite you both in goodness.
            </p>

            <div className="my-4 flex items-center justify-center gap-3 text-[#b18a42]">
              <span className="h-px w-12 bg-current/50" />
              <span>✦</span>
              <span className="h-px w-12 bg-current/50" />
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl">
              A Prayer for Our Future
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#345747]">
              May our home always be filled with faith, our hearts
              with kindness, and our lives with countless blessings.
              May Allah guide us through every season of life and
              keep our bond strong with love, mercy, and understanding.
            </p>

            <p className="mt-5 font-wedding text-3xl text-[#a58243]">
              Ameen,Ya Rabb
            </p>
          </div>
        </div>

        <p className="mt-6 font-serif text-xl italic text-[#e5ca8b]">
          Your prayers are our greatest gift.
        </p>
      </motion.div>
    </section>
  );
}
