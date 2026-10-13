import { motion } from "framer-motion";

// Set VITE_WEDDING_WHATSAPP_URL in .env to a link such as https://wa.me/<countrycode><number>.
export const WHATSAPP_CONTACT_URL = import.meta.env.VITE_WEDDING_WHATSAPP_URL?.trim() || "";

export default function WeddingDetails({ stage }) {
  if (stage < 5) return null;

  return (
    <motion.section
      id="wedding-events"
      aria-label="Wedding details"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex min-h-svh w-full shrink-0 items-center justify-center overflow-y-auto bg-[#063d2e] px-4 py-8 text-[#f7edcf] sm:px-6"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 15% 15%, rgba(214,179,106,.13), transparent 35%), radial-gradient(ellipse at 85% 80%, rgba(214,179,106,.11), transparent 38%)",
      }}
    >
      <article className="mx-auto mr-3 w-full max-w-2xl rounded-[28px] border-2 border-[#b99756] bg-[#fffaf0]/90 p-5 text-center shadow-[0_20px_65px_rgba(48,37,18,.18)] sm:p-9">
        <p lang="ur" dir="rtl" className="mb-2 font-serif text-xl leading-relaxed text-[#153f30] sm:text-2xl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <p className="mb-2 font-serif text-base italic text-[#8b7040] sm:text-lg">
          Together with their families
        </p>
        <p lang="ur" dir="rtl" className="font-sans text-lg leading-[2] text-[#345747] sm:text-xl">
          اللہ کے نام سے جو نہایت مہربان، بے حد رحم فرمانے والا ہے۔ ہماری خوشیوں کے اس خوبصورت موقع پر آپ کی شرکت ہمارے لیے باعثِ مسرت ہوگی۔ دعا ہے کہ اللہ تعالیٰ اس نئے سفر کو محبت، رحمت، برکت اور خوشیوں سے بھر دے۔
        </p>
        <p className="my-2 text-[#b18b48]" aria-hidden="true">✦ ❋ ✦</p>
        <p className="font-serif text-base leading-8 text-[#345747] sm:text-lg">
          In the name of Allah, the Most Gracious, the Most Merciful. As we begin this beautiful new chapter of our lives, your presence and blessings would mean the world to us. May Allah fill our journey together with endless love, peace, mercy, and happiness. We look forward to celebrating this special occasion with you.
        </p>
        <p className="mt-6 font-serif text-sm italic tracking-wide text-[#8b7040]">
          With prayers, love &amp; blessings
        </p>
      </article>
    </motion.section>
  );
}
