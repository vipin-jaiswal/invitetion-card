export const weddingData = {
  bride: {
    name: "Siddiqua Shaikh",
  },
  groom: {
    name: "Abu Shahma Sultan siddiqui",
  },
  events: {
    haldi: {
      title: "Haldi Ceremony",
      subtitle: "A Day Filled With Turmeric & Happiness",
      date: "",
      time: "",
      venue: "",
      address: "",
    },
    nikah: {
      title: "Nikah Ceremony",
      subtitle: "A Sacred Beginning, By the Grace of Allah",
      // The numeric date came from the Save the Date text. Add the real time and venue below.
      date: "2026-12-12",
      time: "",
      venue: "",
      address: "",
    },
  },
  contacts: {
    bride: { name: "Shaikh Raiyan", phone: "8874010117" },
    groom: { name: "Shaikh Adnan", phone: "9506095846" },
  },
  venue: {
    name: "Venue",
    address: "Uttrai maryadpur mau",
    mapsUrl: "",
  },
};

export function formatWeddingDate(date, fallback = "Date to be announced") {
  if (!date) return fallback;
  const parsed = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return fallback;
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}
