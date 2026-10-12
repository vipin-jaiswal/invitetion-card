import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

const nikah = weddingData.events.nikah;
const WEDDING_DATE = new Date(`${nikah.date}T${nikah.time || "00:00"}`).getTime();

export default function CountdownPage() {
  const calculateTime = () => {
    const difference = WEDDING_DATE - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#063d2e] px-4 py-10 text-[#174633] sm:py-14">

      {/* Background ornaments */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#d6b36a]" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full border border-[#d6b36a]" />
        <span className="absolute left-[12%] top-[20%] text-2xl text-[#e5ca8b]">✦</span>
        <span className="absolute right-[12%] top-[35%] text-3xl text-[#e5ca8b]">✧</span>
        <span className="absolute bottom-[20%] left-[18%] text-xl text-[#e5ca8b]">✧</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto w-full max-w-3xl rounded-[30px] border-2 border-[#c6a15a] bg-[#fff9ec] px-5 py-7 text-center shadow-[0_24px_70px_rgba(0,0,0,.32)] sm:px-10 sm:py-10"
      >
        {/* Half moon logo */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-7 flex justify-center"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#c6a15a] bg-[#fffaf0] shadow-[0_0_45px_rgba(181,138,63,0.18)]">
            <span className="text-6xl leading-none text-[#b18a42]">☾</span>
          </div>
        </motion.div>

        <p className="text-xs uppercase tracking-[0.4em] text-[#98783e] sm:text-sm">
          Bismillah · A New Beginning
        </p>

        <h1 className="mt-5 font-serif text-4xl leading-tight text-[#174633] sm:text-6xl">
          Counting Down to
          <span className="mt-2 block italic text-[#a47b32]">
            Our Nikah
          </span>
        </h1>

        <div className="my-7 flex items-center justify-center gap-3 text-[#d6b36a]">
          <span className="h-px w-12 bg-current/60" />
          <span>✦ ❦ ✦</span>
          <span className="h-px w-12 bg-current/60" />
        </div>

        {/* Countdown timer */}
        <div className="mx-auto grid max-w-2xl grid-cols-4 overflow-hidden rounded-2xl border-2 border-[#c6a15a] bg-[#fff9ec] text-[#174633] shadow-[0_14px_42px_rgba(0,0,0,.22)]">
          {units.map((unit) => (
            <motion.div
              key={unit.label}
              className="min-w-0 px-1.5 py-4 sm:px-4 sm:py-6 [&:not(:first-child)]:border-l [&:not(:first-child)]:border-[#c6a15a]/60"
            >
              <p className="font-serif text-2xl tabular-nums text-[#a47b32] sm:text-5xl">
                {String(unit.value).padStart(2, "0")}
              </p>
              <p className="mt-2 text-[7px] uppercase tracking-[0.12em] text-[#315643] sm:mt-3 sm:text-xs sm:tracking-[0.2em]">
                {unit.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Paragraph */}
       

        {/* Closing text */}
        <div className="mt-9">
          <p className="font-wedding text-2xl text-[#a47b32] sm:text-4xl">
            A lifetime of love begins soon
          </p>

          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#637967]">
            InshaAllah · Our Forever Begins
          </p>

          <p className="mt-6 text-2xl text-[#d6b36a]">❦</p>
        </div>
      </motion.div>
    </section>
  );
}
