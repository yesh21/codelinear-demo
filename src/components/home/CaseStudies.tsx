import { useState, useRef, useEffect, useCallback } from "react";

// ── Brand pattern ─────────────────────────────────────────────────────────────
function BrandPattern({ color = "#00B4FD" }) {
  const X = ({ tx = 0, ty = 0 }) => (
    <g transform={`translate(${tx},${ty})`}>
      <path
        d="M4 4 Q36 4 36 36 Q36 4 68 4 L68 68 Q36 68 36 36 Q36 68 4 68 Z"
        fill={color}
      />
      <circle cx="36" cy="36" r="21" fill="#07193c" />
    </g>
  );
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "74%", height: "74%" }}>
      <X tx={0} ty={0} /><X tx={84} ty={0} />
      <X tx={0} ty={84} /><X tx={84} ty={84} />
    </svg>
  );
}

// ── Nav button ────────────────────────────────────────────────────────────────
function NavBtn({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      style={{
        width: 42, height: 42, borderRadius: "50%",
        border: "1.36px solid #00B4FD", background: "transparent",
        cursor: "pointer", display: "flex", alignItems: "center",
        justifyContent: "center", flexShrink: 0, padding: 0,
        transition: "background 0.2s",
      }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(0,180,253,0.10)"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
    >
      {direction === "left"
        ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="#00B4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        : <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="#00B4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      }
    </button>
  );
}

// ── Dots ──────────────────────────────────────────────────────────────────────
function Dots({ total, current, onDotClick }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} onClick={() => onDotClick(i)}
          aria-label={`Go to slide ${i + 1}`}
          style={{
            height: 12, width: i === current ? 38 : 12, borderRadius: 6,
            background: i === current ? "#0B4B63" : "transparent",
            border: "0.86px solid #0B4B63", cursor: "pointer", padding: 0,
            transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      ))}
    </div>
  );
}

// ── View All ──────────────────────────────────────────────────────────────────
function ViewAll() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3, cursor: "pointer", flexShrink: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <span style={{
          fontFamily: "'Chivo Mono', monospace", fontSize: 13, color: "#00B4FD",
          textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "nowrap",
        }}>view all</span>
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M2 7H12M8 3L12 7L8 11" stroke="#00B4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div style={{ height: 1, width: 32.6, background: "#00B4FD" }} />
    </div>
  );
}

// ── ZoomerrIcon ───────────────────────────────────────────────────────────────
function ZoomerrIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" style={{ flexShrink: 0 }}>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M15 1.5C7.544 1.5 1.5 7.544 1.5 15S7.544 28.5 15 28.5 28.5 22.456 28.5 15 22.456 1.5 15 1.5zM8.5 11l9.5-2.5-4.5 5.5 5.5 1.5-9 4 3-5.5L8.5 11z"
        fill="#586E84" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const slides = [
  { tag: "Getting Started", title: "How we help brand reach out to more people", color: "#00B4FD" },
  { tag: "Brand Strategy", title: "Building identity systems that scale globally", color: "#7c5cfc" },
  { tag: "Growth & Scale", title: "Turning audience insights into measurable results", color: "#00c98d" },
  { tag: "Case Analysis", title: "Data-driven campaigns that move the needle", color: "#f97316" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function getDiff(i, current, n) {
  let d = i - current;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
}

// ── Main ──────────────────────────────────────────────────────────────────────
export function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [stageHeight, setStageHeight] = useState(null);
  const activeCardRef = useRef(null);
  // const touchStartX = useRef(null);
  const n = slides.length;

  const goTo = (idx) => setCurrent(((idx % n) + n) % n);

  // Measure the active card and set stage height to match exactly
  const measureCard = useCallback(() => {
    if (activeCardRef.current) {
      setStageHeight(activeCardRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    measureCard();
    // Re-measure on resize (font size changes, layout reflows, etc.)
    const ro = new ResizeObserver(measureCard);
    if (activeCardRef.current) ro.observe(activeCardRef.current);
    return () => ro.disconnect();
  }, [current, measureCard]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500&family=Chivo+Mono&family=Roboto:wght@700&display=swap');

        .cs-section {
          background: #000d12;
          width: 100%;
          overflow: hidden;
          padding: 43px 0 64px;
        }

        /*
         * Stage: NO hardcoded height.
         * Height is set inline via JS (measured from the active card).
         * overflow:visible so scaled-down bg cards aren't clipped.
         * pointer-events:none on stage, re-enabled per card.
         */
        .cs-stage {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
          transition: height 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        /*
         * All cards sit absolute inside the stage.
         * Width is a percentage of the stage (which is full viewport width).
         * transform-origin: center so scale() keeps cards centred.
         */
        .cs-card-wrap {
          position: absolute;
          width: 78%;
          max-width: 840px;
          transform-origin: center center;
          transition:
            transform 0.5s cubic-bezier(0.4,0,0.2,1),
            opacity   0.5s ease,
            filter    0.5s ease;
          will-change: transform, opacity;
        }

        /* Active card: also rendered in-flow (visibility:hidden) to drive height */
        .cs-sizer {
          width: 78%;
          max-width: 840px;
          visibility: hidden;
          pointer-events: none;
          flex-shrink: 0;
        }

        .cs-card {
          background: #01141b;
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: row;
        }

        .cs-img-panel {
          background: #07193c;
          border-radius: 11px;
          margin: 20px;
          flex-shrink: 0;
          width: clamp(120px, 40%, 400px);
          aspect-ratio: 421 / 370;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cs-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(12px, 2.5vw, 38px);
          padding: clamp(14px, 3vw, 44px) clamp(14px, 2.5vw, 36px);
          flex: 1;
          min-width: 0;
        }

        .cs-tag {
          font-family: 'Chivo Mono', monospace;
          font-size: clamp(9px, 1.1vw, 12px);
          color: #2490BB;
          text-transform: uppercase;
          opacity: 0.8;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .cs-headline {
          font-family: 'Archivo', sans-serif;
          font-weight: 400;
          font-size: clamp(18px, 2.6vw, 38px);
          color: #e9f4f9;
          line-height: 1.2;
          max-width: 9em;
          margin: 0;
        }

        .cs-brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cs-brand-name {
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          font-size: clamp(13px, 1.6vw, 20px);
          color: #586E84;
          line-height: 1.1;
        }

        .cs-read-more {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(233,244,249,0.45);
          border-radius: 10px;
          padding: 10px 0;
          width: 100%;
          max-width: 360px;
          background: transparent;
          cursor: pointer;
          font-family: 'Chivo Mono', monospace;
          font-size: clamp(9px, 1.1vw, 12px);
          color: rgba(233,244,249,0.5);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: border-color 0.2s, color 0.2s;
        }
        .cs-read-more:hover {
          border-color: rgba(233,244,249,0.9);
          color: rgba(233,244,249,0.9);
        }

        /* ── Controls ── */
        .cs-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: clamp(20px, 3vw, 36px);
          padding: 0 clamp(16px, 8.5vw, 123px);
          position: relative;
        }

        .cs-view-all-abs {
          position: absolute;
          right: clamp(16px, 8.5vw, 123px);
          display: flex;
        }
        .cs-view-all-inline { display: none; }

        /* ── Mobile (≤ 600px) ── */
        @media (max-width: 600px) {
          .cs-card-wrap  { width: 90%; }
          .cs-sizer      { width: 90%; }
          .cs-card       { flex-direction: column; }
          .cs-img-panel  {
            width: calc(100% - 32px);
            aspect-ratio: 421 / 200;
            margin: 14px 14px 0;
          }
          .cs-content    { padding: 14px 14px 18px; gap: 10px; }
          .cs-read-more  { max-width: 100%; }

          /* Controls: stack vertically so buttons never overlap cards */
          .cs-controls {
            align-items: center;
            gap: 14px;
            padding: 0 16px;
            position: static;
          }
          /* Row inside the column that holds prev/dots/next */
          .cs-nav-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            width: 100%;
          }
          .cs-view-all-abs    { display: none !important; }
          .cs-view-all-inline { display: flex; justify-content: center; }
        }
      `}</style>

      <div className="cs-section">
        {/* Title */}
        <p style={{
          fontFamily: "'Archivo', sans-serif", fontWeight: 400,
          fontSize: "clamp(28px, 4.5vw, 53px)", color: "#e9f4f9",
          textAlign: "center", letterSpacing: "-0.01em", lineHeight: 1.2,
          marginBottom: "clamp(20px, 3vw, 40px)", padding: "0 16px",
        }}>
          Our Case Studies
        </p>

        <div
          className="cs-stage"
          style={{ height: stageHeight ? stageHeight : undefined }}

        >
          {/* Hidden sizer: renders active card in normal flow to define stage height */}
          <div className="cs-sizer" aria-hidden="true" ref={activeCardRef}>
            <SlideCard slide={slides[current]} />
          </div>

          {/* All slides, absolutely positioned */}
          {slides.map((s, i) => {
            const diff = getDiff(i, current, n);
            const abs = Math.abs(diff);
            const dir = diff > 0 ? 1 : -1;

            let transform, opacity, zIndex, filter;
            if (abs === 0) {
              transform = "translateX(0%) scale(1)";
              opacity = 1; zIndex = 10; filter = "none";
            } else if (abs === 1) {
              transform = `translateX(${dir * 28}%) scale(0.78)`;
              opacity = 0.38; zIndex = 5; filter = "brightness(0.45)";
            } else {
              transform = `translateX(${dir * 32}%) scale(0.65)`;
              opacity = 0; zIndex = 1; filter = "brightness(0.2)";
            }

            return (
              <div key={i} className="cs-card-wrap"
                style={{ transform, opacity, zIndex, filter }}
                onClick={() => abs > 0 && goTo(i)}
              >
                <SlideCard slide={s} />
              </div>
            );
          })}
        </div>

        {/* Controls — always below the stage, never overlapping */}
        <div className="cs-controls">
          {/* Desktop: prev/dots/next inline with absolute view-all */}
          <div className="cs-nav-row" style={{ display: "contents" }}>
            <NavBtn direction="left" onClick={() => goTo(current - 1)} />
            <Dots total={n} current={current} onDotClick={goTo} />
            <NavBtn direction="right" onClick={() => goTo(current + 1)} />
          </div>

          <div className="cs-view-all-abs"><ViewAll /></div>

          {/* Mobile: view all as its own row */}
          <div className="cs-view-all-inline"><ViewAll /></div>
        </div>
      </div>
    </>
  );
}

// ── Extracted card markup (used by both sizer and real cards) ─────────────────
function SlideCard({ slide }) {
  return (
    <div className="cs-card">
      <div className="cs-img-panel">
        <BrandPattern color={slide.color} />
      </div>
      <div className="cs-content">
        <div>
          <p className="cs-tag">{slide.tag}</p>
          <p className="cs-headline">{slide.title}</p>
        </div>
        <div className="cs-brand">
          <ZoomerrIcon />
          <span className="cs-brand-name">Zoomerr</span>
        </div>
        <button className="cs-read-more">read more</button>
      </div>
    </div>
  );
}