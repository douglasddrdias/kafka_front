export default function Teste() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Container with perspective */}
      <div className="w-full max-w-4xl px-6">
        {/* Star Wars style title */}
        <div className="flex justify-center">
          <h1
            className="uppercase font-extrabold text-yellow-300 tracking-widest"
            style={{
              // big responsive size and luminous glow
              fontSize: "clamp(3rem, 10vw, 8rem)",
              textShadow:
                "0 0 10px rgba(255,230,120,0.9), 0 10px 30px rgba(0,0,0,0.8)",
              transform: "translateZ(60px)",
            }}
          >
            teste
          </h1>
        </div>

        {/* "Opening crawl" style block (tilted perspective like Star Wars) */}
        <div className="mt-12 perspective">
          <div
            className="mx-auto text-center text-yellow-200/90 leading-tight"
            style={{
              maxWidth: "38rem",
              transformOrigin: "50% 100%",
              transform: "rotateX(35deg) translateY(10px)",
            }}
          >
            <p
              className="uppercase font-semibold tracking-wide"
              style={{
                fontSize: "1.15rem",
                textShadow: "0 1px 0 rgba(0,0,0,0.6)",
              }}
            >
              teste
            </p>
            {/* optional descriptive line that follows the same style */}
            <p
              className="mt-4 text-sm opacity-90"
              style={{ fontSize: "0.85rem", lineHeight: 1.4 }}
            >
              Esta página demonstra uma estilização inspirada no formato
              clássico de Star Wars usando Tailwind. O título acima usa cor
              amarela brilhante, espaçamento de letras e perspectiva inclinada.
            </p>
          </div>
        </div>
      </div>

      {/* Inline styles needed for perspective helper */}
      <style>{`
                .perspective { perspective: 900px; }
                @media (max-width: 640px) {
                    h1 { font-size: 3.6rem !important; }
                }
            `}</style>
    </main>
  );
}
