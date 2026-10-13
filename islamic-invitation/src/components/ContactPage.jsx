import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { weddingData } from "../data/weddingData";

const contacts = [
  { role: "", ...weddingData.contacts.bride },
  { role: "", ...weddingData.contacts.groom },
];

export default function ContactPage() {
  return (
    <section className="relative mr-3 flex min-h-screen items-center justify-center overflow-hidden bg-[#f4ecd9] px-4 py-14 text-[#174633] sm:px-6">
      <div className="pointer-events-none absolute -left-20 top-10 h-54 w-64 rounded-full border border-[#b18a42]/20" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full border border-[#b18a42]/20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl"
      >
        <header className="mb-5 text-center">
          <p className="mb-3 text-3xl text-[#b18a42]" aria-hidden="true">❦ ✦ ❦</p>
          <p className="text-xs uppercase tracking-[0.35em] text-[#98783e]">We Are Here for You</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Contect Information</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#486b58]">
            For questions about the celebration, please contact either family.
          </p>
        </header>

        <div className="flex w-full flex-row items-stretch justify-center gap-3 sm:gap-6">
          {contacts.map((contact, index) => (
            <motion.article
              key={contact.role}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="mx-auto min-w-0 flex-1 rounded-[28px] border-2 border-[#c6a15a] bg-[#fff9ec] p-2 shadow-[0_18px_45px_rgba(48,37,18,.15)] sm:p-3"
            >
              <div className="flex h-full min-h-56 flex-col items-center justify-center rounded-[21px] border border-[#c6a15a]/60 px-2 py-5 text-center sm:min-h-64 sm:px-7 sm:py-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c6a15a]/60 bg-[#f5ecd9] sm:h-14 sm:w-14">
                  <Phone size={20} className="text-[#a58243] sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <p className="mt-4 text-[9px] uppercase tracking-[0.12em] text-[#98783e] sm:text-xs sm:tracking-[0.22em]">{contact.role}</p>
                <h2 className="mt-2 break-words font-serif text-lg text-[#174633] sm:text-3xl">{contact.name}</h2>
                <p className="mt-4 text-[12px] uppercase tracking-[0.14em] text-[#98783e] sm:text-xl sm:tracking-[0.28em]">Phone</p>
                <p className="mt-1 break-words text-xl text-[#486b58] sm:text-lg">{contact.phone}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-center font-serif text-lg italic text-[#8b7040]">
          With love &amp; blessings
        </p>
      </motion.div>
    </section>
  );
}
