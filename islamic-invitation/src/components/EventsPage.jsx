import { motion } from "framer-motion";
import { MapPin, CalendarDays, Clock, Sparkles } from "lucide-react";
import { weddingData, formatWeddingDate } from "../data/weddingData";

const events = [
  {
    ...weddingData.events.haldi,
    date: formatWeddingDate(weddingData.events.haldi.date, "Add Haldi Date"),
    time: weddingData.events.haldi.time || "Add Haldi Time",
    venue: weddingData.events.haldi.venue || weddingData.events.haldi.address || "Add Haldi Venue",
    icon: "🌼",
    number: "01",
  },
  {
    ...weddingData.events.nikah,
    date: formatWeddingDate(weddingData.events.nikah.date, "Add Nikah Date"),
    time: weddingData.events.nikah.time || "Add Nikah Time",
    venue: weddingData.events.nikah.venue || weddingData.events.nikah.address || "Add Nikah Venue",
    icon: "☪",
    number: "02",
  },
];

export default function EventsPage() {
  return (
    <section id="events-page" className="relative min-h-screen overflow-hidden bg-[#f4ecd9] px-4 py-16 text-[#174633] sm:px-8">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full border border-[#d6b36a]/20" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full border border-[#d6b36a]/20" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Page heading */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-3xl text-[#d6b36a]">❦ ✦ ❦</p>

          <p className="text-xs uppercase tracking-[0.35em] text-[#e5ca8b]">
            Save the Date
          </p>

          <h1 className="mt-4 font-serif text-4xl sm:text-6xl">
            Wedding Events
          </h1>

          <p className=" mt-2 max-w-xl text-sm leading-7 mr-3 text-[#486b58] sm:text-base">
            By the grace of Allah, we invite you to join us
            for these special moments filled with love,
            happiness, prayers, and blessings.
          </p>
        </motion.header>

        {/* Event cards */}
        <div className="grid grid-cols-1 gap-5 mr-3 md:grid-cols-2">
          {events.map((event, index) => (
            <motion.article
              key={event.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative mx-auto w-full rounded-[28px] border-2 border-[#c6a15a] bg-[#fff9ec] p-3 text-[#174633] shadow-[0_20px_55px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-full flex-col rounded-[21px] border border-[#c6a15a]/60 p-4 sm:p-5">
                {/* Card top */}
                <div className="flex items-start justify-between">
                  <span className="font-serif text-sm tracking-[0.2em] text-[#a58243]">
                    EVENT {event.number}
                  </span>

                  <span className="text-3xl text-[#b18a42]">
                    {event.icon}
                  </span>
                </div>

                <div className=" text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#c6a15a]/60 bg-[#f6edda]">
                    <Sparkles size={23} className="text-[#a58243]" />
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl">
                    {event.title}
                  </h2>

                  <p className="mt-3 text-sm italic leading-6 text-[#75866e]">
                    {event.subtitle}
                  </p>
                </div>

                <div className="my-1 flex items-center gap-3 text-[#b18a42]">
                  <span className="h-px flex-1 bg-current/40" />
                  <span>✦</span>
                  <span className="h-px flex-1 bg-current/40" />
                </div>

                {/* Event details */}
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-4">
                    <CalendarDays
                      size={21}
                      className="mt-0.5 shrink-0 text-[#a58243]"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#a58243]">
                        Date
                      </p>
                      <p className="mt-1 font-medium">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock
                      size={21}
                      className="mt-0.5 shrink-0 text-[#a58243]"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#a58243]">
                        Time
                      </p>
                      <p className="mt-1 font-medium">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin
                      size={21}
                      className="mt-0.5 shrink-0 text-[#a58243]"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#a58243]">
                        Venue
                      </p>
                      <p className="mt-1 leading-6">{event.venue}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-5 text-center">
                  <p className="font-wedding text-xl text-[#a58243]">
                    With love & blessings
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="font-ballet text-2xl italic text-[#8b7040]">
            Your presence will make our celebration complete.
          </p>
          <p className="mt-4 text-2xl text-[#d6b36a]">✦ ❦ ✦</p>
        </footer>
      </div>
    </section>
  );
}
