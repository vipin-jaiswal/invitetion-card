
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import {
  MapPin,
  Navigation,
  ExternalLink,
  ScanLine,
} from "lucide-react";
import { weddingData } from "../data/weddingData";

const VENUE_NAME = weddingData.events.nikah.venue || weddingData.venue.name;
const VENUE_ADDRESS = weddingData.events.nikah.address || weddingData.venue.address;
const MAPS_URL = weddingData.venue.mapsUrl;

export default function VenuePage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f4ecd9] px-4 py-14 text-[#174633] sm:px-6">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full border border-[#d6b36a]/20" />

      <div className="pointer-events-none  absolute -bottom-20 -right-20 h-80 w-80 rounded-full border border-[#d6b36a]/20" />

      <span className="pointer-events-none absolute left-[12%] top-[18%] text-2xl text-[#e5ca8b]/50">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[12%] bottom-[20%] text-3xl text-[#e5ca8b]/50">
        ✧
      </span>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-xl"
      >
        {/* Page heading */}
        <header className="mb-9 text-center text-[#174633]">
          <p className="mb-3 text-3xl text-[#e5ca8b]">
            ❦ ✦ ❦
          </p>

          <p className="text-xs uppercase tracking-[0.35em] text-[#e5ca8b]">
            We look forward to welcoming you
          </p>

          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
            The Venue
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#486b58] sm:text-base">
            Find your way to our special day. Your presence
            will make our celebration complete.
          </p>
        </header>

        {/* Main venue card */}
        <motion.article
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25 }}
          className="mx-auto mr-3 rounded-[30px] border-2 border-[#c6a15a] bg-[#fff9ec] p-3 shadow-[0_25px_70px_rgba(0,0,0,0.3)] sm:p-5"
        >
          <div className="rounded-[22px] border border-[#c6a15a]/60 px-5 py-8 text-center sm:px-8 sm:py-10">

            {/* Location icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#c6a15a]/60 bg-[#f5ecd9]">
              <MapPin
                size={30}
                strokeWidth={1.5}
                className="text-[#a58243]"
              />
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#a58243]">
              Join us at
            </p>

            <h2 className="mt-3 break-words font-serif text-3xl sm:text-4xl">
              {VENUE_NAME}
            </h2>

            {/* Divider */}
            <div className="my-6 flex items-center justify-center gap-3 text-[#b18a42]">
              <span className="h-px w-12 bg-current/50" />
              <span>✦</span>
              <span className="h-px w-12 bg-current/50" />
            </div>

            {/* Address */}
            <div className="rounded-2xl border border-[#c6a15a]/30 bg-[#f8f0df] px-5 py-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#a58243]">
                Venue Address
              </p>

              <p className="mt-3 break-words text-base leading-7 text-[#345747]">
                {VENUE_ADDRESS}
              </p>
            </div>

            {/* Google Maps preview / link */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open wedding venue in Google Maps"
              className="group mt-6 flex min-h-32 flex-col items-center justify-center rounded-2xl border border-dashed border-[#b18a42]/60 bg-[#f5ecd9] p-5 transition hover:bg-[#efe2c5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a58243]"
            >
              <Navigation
                size={30}
                strokeWidth={1.5}
                className="text-[#a58243] transition-transform group-hover:-translate-y-1"
              />

              <span className="mt-3 font-serif text-xl">
                Find Us on the Map
              </span>

              <span className="mt-1 text-xs text-[#6a806e]">
                Open location in Google Maps
              </span>
            </a>

            {/* Directions button */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-[#b18a42] bg-[#164a36] px-6 py-4 text-sm tracking-wide text-[#fff4d9] shadow-md transition hover:bg-[#0b3929] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a58243]"
            >
              <MapPin size={18} />
              Get Directions
              <ExternalLink size={16} />
            </a>

            {/* QR Code section */}
            <div className="mt-8 rounded-2xl border border-[#c6a15a]/50 bg-[#f8f0df] px-4 py-7 sm:px-6">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c6a15a]/60 bg-[#fff9ec]">
                <ScanLine
                  size={23}
                  className="text-[#a58243]"
                />
              </div>

              <h3 className="mt-4 font-serif text-2xl text-[#174633]">
                Scan for Location
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#6a806e]">
                Scan this QR code with your phone camera
                to find our wedding venue on Google Maps.
              </p>

              {/* QR code */}
              <div className="mx-auto mt-5 inline-block rounded-2xl border-2 border-[#b18a42] bg-white p-3 shadow-md">
                <QRCodeSVG
                  value={MAPS_URL}
                  size={180}
                  level="H"
                  bgColor="#ffffff"
                  fgColor="#063d2e"
                  title="Wedding venue location QR code"
                  marginSize={2}
                />
              </div>

              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#98783e]">
                Point · Scan · Find Us
              </p>
            </div>

            {/* Closing text */}
            <p className="mt-7 font-wedding text-2xl text-[#a58243]">
              With Love &amp; Blessings
            </p>

            <p className="mt-2 text-xs leading-6 text-[#6a806e]">
              We can't wait to celebrate this special day with you.
            </p>

          </div>
        </motion.article>

        <p className="mt-8 text-center font-serif text-lg italic text-[#8b7040]">
          Your presence will make our day unforgettable.
        </p>

        <p className="mt-4 text-center text-2xl text-[#d6b36a]">
          ✦ ❦ ✦
        </p>
      </motion.div>
    </section>
  );
}
