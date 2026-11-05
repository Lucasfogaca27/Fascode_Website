import { Asterisk } from "lucide-react";

const words = [
  "Sites que vendem",
  "SaaS sob medida",
  "Sistemas de gestão",
  "E-commerce",
  "Automação",
  "UX / UI",
  "React · Java · Spring",
  "Deploy & suporte",
];

/** Faixa inclinada com texto correndo infinitamente entre o hero e o portfólio. */
const MarqueeStrip = () => {
  const row = [...words, ...words];

  return (
    <div className="relative z-20 -mt-10 mb-4 py-6 overflow-hidden" aria-hidden="true">
      <div className="-rotate-2 scale-105 bg-gradient-to-r from-purple-700 via-purple-500 to-blue-500 py-4 shadow-[0_20px_60px_-20px_hsl(var(--purple-500)/0.8)]">
        <div className="marquee overflow-hidden">
          <div className="marquee-track" style={{ ["--marquee-duration" as string]: "35s" }}>
            {row.map((w, i) => (
              <span
                key={i}
                className="flex items-center gap-6 pr-6 font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white whitespace-nowrap"
              >
                {w}
                <Asterisk className="w-6 h-6 text-white/70" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeStrip;
