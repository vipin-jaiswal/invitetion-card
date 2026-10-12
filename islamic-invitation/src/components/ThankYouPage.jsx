
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

        <h1 className="mt-5 font-serif text-2xl leading-tight text-[#fff7e8] sm:text-7xl">
          {weddingData.bride.name} <span className="text-[#e5ca8b]">&amp;</span> {weddingData.groom.name}
        </h1>

      

        <div className="my-8 flex items-center justify-center gap-3 text-[#d6b36a]">
          <span className="h-px w-12 bg-current/60" />
          <span>✦ ❦ ✦</span>
          <span className="h-px w-12 bg-current/60" />
        </div>

        

        <p className="mt-3 font-wedding text-xs text-[#f1f5f2] sm:text-5xl">
          From the Bottom of Our Hearts
        </p>

        
      </motion.div>
    </section>
  );
}
