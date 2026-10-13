import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { weddingData, formatWeddingDate } from "../data/weddingData";

const nikahDateLabel = formatWeddingDate(weddingData.events.nikah.date);

function OrnamentalLantern({ className = "" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 60 100" className={className} fill="none">
      <path d="M30 0v16m-9 0h18m-14 0-7 12v37l12 17 12-17V28l-7-12M19 29h22M18 63h24M30 82v8m-7 0h14" stroke="currentColor" strokeWidth="2" />
      <path d="m30 25 8 12v22l-8 12-8-12V37l8-12Z" fill="currentColor" opacity=".2" />
      <path d="M30 35v25m-7-13h14" stroke="currentColor" strokeWidth="1.5" opacity=".8" />
    </svg>
  );
}

export default function ScratchCard() {
  const canvasRef = useRef(null);
  const surfaceRef = useRef(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const revealedRef = useRef(false);
  const [revealed, setRevealed] = useState(false);
  const reducedMotion = useReducedMotion();

  const setReveal = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    revealedRef.current = true;
    setRevealed(true);
    drawingRef.current = false;
  }, []);

  const paintCoating = useCallback(() => {
    const canvas = canvasRef.current;
    const surface = surfaceRef.current;
    if (!canvas || !surface) return;

    const bounds = surface.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(bounds.width * dpr);
    canvas.height = Math.round(bounds.height * dpr);
    canvas.style.width = `${bounds.width}px`;
    canvas.style.height = `${bounds.height}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "source-over";

    const gold = ctx.createLinearGradient(0, 0, bounds.width, bounds.height);
    gold.addColorStop(0, "#815019");
    gold.addColorStop(0.16, "#d7b55f");
    gold.addColorStop(0.32, "#f8e7a5");
    gold.addColorStop(0.5, "#b9852c");
    gold.addColorStop(0.7, "#f1d47b");
    gold.addColorStop(0.86, "#a66e20");
    gold.addColorStop(1, "#e3c36d");
    ctx.fillStyle = gold;
    ctx.fillRect(0, 0, bounds.width, bounds.height);

    // Fine metallic grain and a restrained embossed ornamental pattern.
    for (let i = 0; i < 180; i += 1) {
      const x = ((i * 83) % 997) / 997 * bounds.width;
      const y = ((i * 151) % 991) / 991 * bounds.height;
      ctx.fillStyle = i % 3 === 0 ? "rgba(255,248,205,.2)" : "rgba(74,43,8,.08)";
      ctx.fillRect(x, y, 1.2, 1.2);
    }
    ctx.strokeStyle = "rgba(255,239,176,.37)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(12, 12, bounds.width - 24, bounds.height - 24, 12);
    ctx.stroke();

    // A repeating eight-point Islamic star lattice embossed into the gold.
    const tile = 42;
    ctx.lineWidth = 1.15;
    for (let row = -1; row <= Math.ceil(bounds.height / tile); row += 1) {
      for (let col = -1; col <= Math.ceil(bounds.width / tile); col += 1) {
        const cx = col * tile + (row % 2 ? tile / 2 : 0);
        const cy = row * tile;
        ctx.beginPath();
        for (let point = 0; point < 16; point += 1) {
          const angle = (point * Math.PI) / 8 - Math.PI / 2;
          const radius = point % 2 === 0 ? 11 : 5.5;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          if (point === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = "rgba(255,248,213,.38)";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, cy, 15, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(104,67,17,.2)";
        ctx.stroke();
      }
    }
    ctx.globalCompositeOperation = "source-over";
  }, []);

  useEffect(() => {
    paintCoating();
    const surface = surfaceRef.current;
    if (!surface || typeof ResizeObserver === "undefined") return undefined;
    const observer = new ResizeObserver(() => {
      if (!revealedRef.current) paintCoating();
    });
    observer.observe(surface);
    return () => observer.disconnect();
  }, [paintCoating]);

  const getPoint = (event) => {
    const bounds = canvasRef.current?.getBoundingClientRect();
    if (!bounds) return null;
    return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  };

  const scratchTo = (point) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !point) return;
    const previous = lastPointRef.current || point;
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 36;
    ctx.beginPath();
    ctx.moveTo(previous.x, previous.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(point.x, point.y, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    lastPointRef.current = point;
  };

  const checkProgress = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { willReadFrequently: true });
    if (!canvas || !ctx || revealedRef.current) return;
    const { width, height } = canvas;
    const pixels = ctx.getImageData(0, 0, width, height).data;
    // Sample a regular grid to estimate cleared area without scanning every pixel.
    let transparent = 0;
    let total = 0;
    const stepX = Math.max(1, Math.floor(width / 64));
    const stepY = Math.max(1, Math.floor(height / 44));
    for (let y = 0; y < height; y += stepY) {
      for (let x = 0; x < width; x += stepX) {
        if (pixels[(y * width + x) * 4 + 3] < 80) transparent += 1;
        total += 1;
      }
    }
    // Require nearly the whole coating to be cleared before completing.
    if (total && transparent / total >= 0.18) setReveal();
  };

  const handlePointerDown = (event) => {
    if (revealedRef.current) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    drawingRef.current = true;
    lastPointRef.current = getPoint(event);
    scratchTo(lastPointRef.current);
  };

  const handlePointerMove = (event) => {
    if (!drawingRef.current || revealedRef.current) return;
    event.preventDefault();
    scratchTo(getPoint(event));
  };

  const handlePointerUp = () => {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    lastPointRef.current = null;
    checkProgress();
  };

  const reset = () => {
    revealedRef.current = false;
    drawingRef.current = false;
    lastPointRef.current = null;
    setRevealed(false);
    requestAnimationFrame(paintCoating);
  };

  return (
    <main className="relative isolate flex min-h-svh w-full items-center justify-center overflow-hidden bg-[#031b13] px-4 py-8 text-[#f7edcf] sm:px-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-16 top-12 h-52 w-52 rounded-full border border-[#d8b65d]/15 sm:right-[12%] sm:top-10 sm:h-64 sm:w-64" />
        <div className="absolute right-[calc(12%+1rem)] top-10 h-12 w-12 rounded-full bg-[#f4dfa1] shadow-[0_0_50px_12px_rgba(237,198,105,.24)] sm:right-[calc(12%+2rem)] sm:top-14 sm:h-16 sm:w-16" />
        <OrnamentalLantern className="absolute left-[8%] top-0 h-28 w-16 text-[#d5ad54] opacity-75 sm:left-[15%] sm:h-36" />
        <OrnamentalLantern className="absolute right-[7%] top-0 h-24 w-14 text-[#d5ad54] opacity-65 sm:right-[16%] sm:h-32" />
        <svg className="absolute inset-x-0 bottom-0 h-[30vh] w-full text-[#06140f] opacity-90" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMax slice">
          <path fill="currentColor" d="M0 300V180h80v-38h22v38h48V95q0-36 35-60 35 24 35 60v85h45v-45h18v45h54V110q0-45 42-74 42 29 42 74v70h51V76q0-59 53-92 53 33 53 92v104h48v-47h20v47h56V104q0-48 44-79 44 31 44 79v76h60V85q0-55 50-86 50 31 50 86v95h47v-45h22v45h54V108q0-44 40-72 40 28 40 72v72h88v120Z" />
          <path d="M0 282h1440" stroke="#c6a34e" strokeOpacity=".24" strokeWidth="2" />
        </svg>
        <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(1.5px_1.5px_at_12%_25%,#f3d47e_50%,transparent),radial-gradient(1px_1px_at_77%_34%,#fff0bd_50%,transparent),radial-gradient(1.5px_1.5px_at_66%_72%,#eac35f_50%,transparent),radial-gradient(1px_1px_at_28%_82%,#ffe8aa_50%,transparent)] [background-size:230px_260px,290px_330px,350px_280px,270px_310px]" />
      </div>

      <motion.section
        aria-labelledby="scratch-heading"
        initial={reducedMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[min(92vw,34rem)]"
      >
        <div className="relative mr-3 rounded-[42%_42%_15%_15%/12%_12%_8%_8%] bg-[#b58a3f] p-[2px] shadow-[0_24px_90px_rgba(0,0,0,.56),0_0_45px_rgba(218,176,81,.15)]">
          <div className="rounded-[inherit] bg-[#f2e8cc] p-[5px]">
            <div className="relative overflow-hidden rounded-[inherit] border border-[#b99550] bg-[#f8f0dc] px-5 pb-7 pt-11 text-center sm:px-9 sm:pb-9 sm:pt-14">
              <div aria-hidden="true" className="pointer-events-none absolute inset-[9px] rounded-[inherit] border border-[#b99550]/70" />
              <span aria-hidden="true" className="absolute left-5 top-7 text-2xl text-[#aa7e34] sm:left-8 sm:top-9">❧</span>
              <span aria-hidden="true" className="absolute right-5 top-7 -scale-x-100 text-2xl text-[#aa7e34] sm:right-8 sm:top-9">❧</span>
              <p lang="ar" dir="rtl" className="relative font-serif text-xl text-[#886322] sm:text-2xl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
              <div className="mx-auto mb-4 mt-3 h-px w-24 bg-gradient-to-r from-transparent via-[#b99550] to-transparent" />
              <h1 id="scratch-heading" className="font-serif text-2xl tracking-wide text-[#174332] sm:text-3xl">A Little Surprise</h1>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#6b634e] sm:text-base">Scratch to reveal a special surprise.</p>

              <div className="relative mx-auto mt-6 w-full max-w-[26rem] rounded-2xl border-[3px] border-[#a87527] bg-[linear-gradient(145deg,#fff9e5,#e9d69e_44%,#fff3c9)] p-2 shadow-[inset_0_0_0_2px_rgba(255,255,255,.7),0_12px_25px_rgba(70,48,15,.2)] sm:mt-7 sm:p-3">
                <div ref={surfaceRef} className="relative flex min-h-36 items-center justify-center overflow-hidden rounded-xl border border-[#c7a65b] px-5 py-6 sm:min-h-44 sm:px-8">
                  <div className="relative z-0 max-w-sm text-[#98702e]">
                    <p className="font-Roboto Mono text-sm font-semibold uppercase tracking-[0.3em] text-[#98702e] sm:text-base">
                      Save the Date
                    </p>
                    <p className="mt-3 font-sans text-2xl font-extrabold text-[#98702e] sm:text-3xl">{nikahDateLabel.split(",")[0]}</p>
                    <p className="mt-1 font-sans text-xl font-bold tracking-wide text-[#98702e] sm:text-xl">{nikahDateLabel.replace(`${nikahDateLabel.split(",")[0]}, `, "")}</p>
                  </div>
                  {!revealed && (
                    <canvas
                      ref={canvasRef}
                      aria-label="Scratch the golden surface to reveal your invitation"
                      className="absolute inset-0 z-10 cursor-crosshair touch-none"
                      onPointerDown={handlePointerDown}
                      onPointerMove={handlePointerMove}
                      onPointerUp={handlePointerUp}
                      onPointerCancel={handlePointerUp}
                      onLostPointerCapture={handlePointerUp}
                    />
                  )}
                  <span aria-hidden="true" className="pointer-events-none absolute left-3 top-2 z-20 text-lg text-[#8e6426]">✦</span>
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-2 right-3 z-20 text-lg text-[#8e6426]">✦</span>
                </div>
              </div>

             
              <button
                type="button"
                onClick={reset}
                className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-full border border-[#a9823b] px-4 py-2 text-sm font-medium text-[#174332] transition hover:bg-[#eadbb5] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#99702e]"
              >
                <RotateCcw size={15} aria-hidden="true" /> Reset scratch card
              </button>
              <div aria-hidden="true" className="mt-5 flex justify-center gap-2 text-sm text-[#aa813c]"><span>✧</span><span>❋</span><span>✧</span></div>
            </div>
          </div>
        </div>
        {revealed && !reducedMotion && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 overflow-visible">
            <motion.div
              className="absolute left-1/2 top-1/2 h-[min(82vw,30rem)] w-[min(82vw,30rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#ffe9a7]/80 shadow-[0_0_80px_rgba(255,214,107,.6),inset_0_0_60px_rgba(255,214,107,.2)]"
              initial={{ scale: 0.15, opacity: 0 }}
              animate={{ scale: [0.15, 1.18, 1.35], opacity: [0, 0.9, 0] }}
              transition={{ duration: 3.2, ease: "easeOut" }}
            />
            {Array.from({ length: 20 }, (_, index) => {
              const angle = (index / 20) * Math.PI * 2;
              const distance = 75 + ((index * 31) % 125);
              return (
                <motion.span
                  key={index}
                  className="absolute left-1/2 top-1/2 text-xl font-bold text-[#ffe9a7] drop-shadow-[0_0_12px_rgba(255,215,119,1)]"
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: -45 }}
                  animate={{
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.3, 0.8],
                    rotate: 45,
                  }}
                  transition={{ duration: 3.2, ease: "easeOut", delay: (index % 5) * 0.12 }}
                >
                  ✧
                </motion.span>
              );
            })}
          </div>
        )}
      </motion.section>
    </main>
  );
}
