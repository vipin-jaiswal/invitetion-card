import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function ThankYouPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden  px-4 py-14 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <h1 className="mt-5 font-pinyon  text-3xl leading-tight text-[#fff7e8] sm:text-7xl">
          <p>{weddingData.bride.name}</p>
        </h1>

        <p className="text-[#d6e620] text-3xl mt-3">&</p>
        <h1 className="mt-2 font-pinyon  text-3xl leading-tight text-[#fff7e8] sm:text-7xl">
          <p>{weddingData.groom.name}</p>
        </h1>

        <div className="my-8 flex   items-center justify-center gap-3 text-[#d6b36a]">
          <span className="h-px font-extrabold w-12 bg-current/60" />
          <span className="font-extrabold text-2xl">✦ ❦ ✦</span>
          <span className="h-px w-12 bg-current/60" />
        </div>

        <p className="mt-3 font-serif  text-xl text-[#fffff] sm:text-5xl">
          With Best compliments from
        </p>

        <div className="rounded-2xl mt-3 mr-3 border border-amber-300/50 bg-amber-100/30 p-4 shadow-sm backdrop-blur-sm">
          <p className="mt-2  font-bold  font-sans text-sm leading-relaxed text-[#010101] sm:text-2xl">
            Shaikh Imdad Ahmad ,Shaikh Shameem Ahmad , Shaikh Qamar Iqbal,Shaikh Izharul Ahmad,Shaikh Ajmerul Ahmad, Shaikh Salim ,Shaikh Hafiz Atiqurrahman, shaikh Akmal, Shaikh Shahbaz, Shaikh Mohammad, Shaikh Atif ,Shaikh Siddiqui,Shaikh Saquib,Shaikh Umar,Shaikh Raiyan,Shaikh Samad,Shaikh Adnan,shaikh Arham,Shaikh Usman,Shaikh Haider,All Relatives & Friends
          </p>
        </div>

        <p className="mt-2 font-serif uppercase text-3xl text-[#fffff] sm:text-5xl">
          Thank you
        </p>

        <p className="mt-3 font-serif uppercase text-sm text-[#fffff] sm:text-5xl">
          From the Bottom of Our Hearts
        </p>
      </motion.div>
    </section>
  );
}
