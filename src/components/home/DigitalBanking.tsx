import { Button } from '../ui/Button';
import { imgDesign } from '../../assets/svgs/svg-mwqa7';
import svgPaths from '../../assets/svgs/svg-54ycx9j4u6';
import imgBlue from '../../assets/images/91a87e77e6e75f676caf9ca74e36779a4047e4ae.png';
import imgDesign1 from '../../assets/images/6d999d2443b6ae0ad97fd4be1da685b8157cd047.png';
import imgDesign2 from '../../assets/images/e8776fe148efa34a95f96a31a10335788da8955a.png';
import imgDesign3 from '../../assets/images/c4701780c6a33ab5ff0dc2da3641196908b22afa.png';
import { TextLink } from '../ui/TextLink';
import { PaperlessCard } from './PaperlessCard';

/* ── Reusable check-circle (extracted from the repeated inline SVG) ── */
function CheckCircle() {
  return (
    <div
      style={{
        height: '31.408px',
        position: 'relative',
        flexShrink: 0,
        width: '29.98px',
      }}
    >
      <svg
        style={{
          position: 'absolute',
          display: 'block',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 29.9801 31.4077"
      >
        <g id="Frame 15">
          <circle cx="14.8862" cy="16.0496" fill="url(#cc_grad)" r="9.26182" />
          <g id="ic:round-check">
            <path d={svgPaths.p287f1d00} fill="var(--fill-0, #E9F4F9)" />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="cc_grad"
            x1="-9.11865"
            x2="25.1246"
            y1="-15.9254"
            y2="-17.5505"
          >
            <stop stopColor="#00B4FD" />
            <stop offset="0.815786" stopColor="#003ACE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ── iPhone mockup wrapper — preserves original layered grid approach ── */
function IPhoneMockup({ screenImage }) {
  return (
    <div
      data-name="iPhone 13 Pro"
      style={{
        display: 'grid',
        gridTemplateColumns: 'max-content',
        gridTemplateRows: 'max-content',
        placeItems: 'start',
        lineHeight: 0,
        flexShrink: 0,
      }}
    >
      <div
        data-name="iPhone-13-Pro-Front"
        style={{
          gridColumn: 1,
          gridRow: 1,
          display: 'grid',
          gridTemplateColumns: 'max-content',
          gridTemplateRows: 'max-content',
          placeItems: 'start',
        }}
      >
        {/* Phone shell — sized via CSS class for responsive control */}
        <div className="db-iphone-shell" data-name="Blue">
          <img
            alt=""
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              maxWidth: 'none',
              width: '100%',
              height: '100%',
            }}
            src={imgBlue}
          />
        </div>

        {/* Screen content — offset via CSS class */}
        <div className="db-iphone-mockup-offset" data-name="Mockup">
          <div
            data-name="Mask group"
            style={{
              gridColumn: 1,
              gridRow: 1,
              display: 'grid',
              gridTemplateColumns: 'max-content',
              gridTemplateRows: 'max-content',
              placeItems: 'start',
            }}
          >
            <div
              className="db-iphone-screen-div"
              data-name="Design"
              style={{
                WebkitMaskImage: `url('${imgDesign}')`,
                maskImage: `url('${imgDesign}')`,
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect',
                WebkitMaskClip: 'no-clip',
                maskClip: 'no-clip',
              }}
            >
              <img
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  maxWidth: 'none',
                  objectFit: 'cover',
                  pointerEvents: 'none',
                  width: '100%',
                  height: '100%',
                }}
                src={screenImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DigitalBanking() {
  return (
    <div
      style={{
        background: '#e9f4f9',
        overflow: 'clip',
        position: 'relative',
        width: '100%',
      }}
    >
      <style>{`
        /* ── Responsive layout styles ── */

        /* Background "N7" watermark */
        .db-bg-n7 {
          word-break: break-word;
          position: absolute;
          font-family: 'Archivo', sans-serif;
          font-weight: 500;
          line-height: 1.2;
          color: transparent;
          opacity: 0.5;
          white-space: nowrap;
          pointer-events: none;
          -webkit-text-stroke: 2px rgba(0, 90, 130, 0.42);
          font-variation-settings: 'wdth' 100;
          font-size: clamp(80px, 39.8vw, 572.632px);
          left: clamp(0px, calc(16.67% + 37px), calc(16.67% + 37px));
          top: clamp(-20px, -4.62vw, -66.74px);
          z-index: 0;
        }

        /* Background "7" watermark */
        .db-bg-7 {
          word-break: break-word;
          position: absolute;
          font-family: 'Archivo', sans-serif;
          font-weight: 500;
          line-height: 1.2;
          color: transparent;
          opacity: 0.20;
          white-space: nowrap;
          pointer-events: none;
          font-variation-settings: 'wdth' 100;
          font-size: clamp(200px, 105.8vw, 1524.104px);
          left: clamp(50%, calc(58.33% + 46.92px), calc(58.33% + 46.92px));
          top: clamp(300px, 66.4vw, 957.28px);
          z-index: 0;
        }

        /* Ellipse 3 – bottom-left blue glow */
        .db-ellipse3 {
          position: absolute;
          width: clamp(300px, 54.1vw, 778.743px);
          height: clamp(300px, 54.1vw, 778.743px);
          left: clamp(-200px, -25.3vw, -364.23px);
          top: clamp(60%, 133.8vw, 1928.56px);
          pointer-events: none;
          z-index: 0;
        }

        /* Vector diagonal path */
        .db-vector {
          position: absolute;
          inset: 15.8% 66.67% 37.16% -53%;
          pointer-events: none;
          z-index: 0;
        }
        @media (max-width: 767px) {
          .db-vector { inset: 8% 50% 50% -30%; }
        }

        /* Ellipse 1 – top-left orange glow */
        .db-ellipse1 {
          position: absolute;
          width: clamp(200px, 40.7vw, 585.85px);
          height: clamp(200px, 40.7vw, 585.85px);
          left: clamp(-60px, -5.96vw, -85.85px);
          top: clamp(-100px, -18.1vw, -260.85px);
          pointer-events: none;
          z-index: 0;
        }

        /* Ellipse 2 – top-right orange glow */
        .db-ellipse2 {
          position: absolute;
          width: clamp(300px, 54.1vw, 778.743px);
          height: clamp(300px, 54.1vw, 778.743px);
          left: clamp(40%, calc(41.67% + 61.26px), calc(41.67% + 61.26px));
          top: clamp(-50px, -6.4vw, -91.57px);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Main content: two-column on desktop, stacked on mobile/tablet ── */
        .db-layout {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 1024px) {
          .db-layout {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        /* Hero / left column */
        .db-hero-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: clamp(40px, 6.9vw, 100px) clamp(16px, 4vw, 81px);
          flex-shrink: 0;
        }
        @media (min-width: 1024px) {
          .db-hero-col {
            /* On desktop, hero column is ~41.67% of 1440 = 600px */
            width: clamp(340px, 41.67%, 600px);
            padding-top: 100px;
            padding-left: 81px;
            padding-right: 0;
            padding-bottom: 0;
            position: sticky;
            top: 0;
            align-self: flex-start;
          }
        }

        /* Feature rows / right column */
        .db-features-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(48px, 7.6vw, 110px);
          padding: clamp(24px, 4vw, 100px) clamp(16px, 4vw, 40px);
          padding-bottom: 0;
        }
        @media (min-width: 1024px) {
          .db-features-col {
            padding-top: 100px;
          }
        }

        /* Each feature row: stacked below ~600px, side-by-side from ~600px up */
        .db-feature-row {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
          width: 100%;
        }
        @media (min-width: 600px) {
          .db-feature-row          { flex-direction: row; gap: clamp(24px, 5vw, 80px); align-items: center; }
          .db-feature-row.reverse  { flex-direction: row-reverse; gap: clamp(24px, 5vw, 76px); }
        }

        .db-feat-text {
          max-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 43px;
          flex: 1;
          min-width: 0;
        }

        /* Remove fixed pixel caps on text widths so they fill available space at all sizes */
        .db-feat-text p { width: 100% !important; }
        .db-feat-text > div > div { width: 100% !important; }

        /* iPhone mockup sizing */
        .db-iphone-shell {
          width: clamp(140px, 28vw, 268.312px);
          aspect-ratio: 268.312 / 542.9;
          position: relative;
          overflow: hidden;
          pointer-events: none;
          grid-column: 1;
          grid-row: 1;
        }
        .db-iphone-screen-div {
          grid-column: 1;
          grid-row: 1;
          width: clamp(124px, 24.8vw, 240.539px);
          aspect-ratio: 240.539 / 520.462;
          position: relative;
          margin-left: -0.79px;
          margin-top: -1.12px;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: 0.789px 1.118px;
          mask-position: 0.789px 1.118px;
          -webkit-mask-size: clamp(122px, 24.4vw, 239.258px) auto;
          mask-size: clamp(122px, 24.4vw, 239.258px) auto;
          -webkit-mask-composite: source-in;
          mask-composite: intersect;
        }
        .db-iphone-mockup-offset {
          grid-column: 1;
          grid-row: 1;
          margin-left: clamp(8px, 1.7vw, 14.93px);
          margin-top: clamp(7px, 1.3vw, 12.41px);
          display: grid;
          grid-template-columns: max-content;
          grid-template-rows: max-content;
          place-items: start;
        }
        @media (min-width: 1024px) {
          .db-iphone-shell         { width: 268.312px; }
          .db-iphone-screen-div    { width: 240.539px; mask-size: 239.258px auto; -webkit-mask-size: 239.258px auto; }
          .db-iphone-mockup-offset { margin-left: 14.93px; margin-top: 12.41px; }
        }

        /* CTA / Paperless card */
        .db-cta-wrapper {
          position: relative;
          z-index: 1;
          width: 100%;
          border-radius: 27px;
          margin-top: clamp(48px, 7.6vw, 110px);
        }
      `}</style>

      {/* ── Decorative: "N7" background text ── */}
      <p className="db-bg-n7" aria-hidden="true">
        N7
      </p>

      {/* ── Decorative: Ellipse 3 (bottom-left blue glow) ── */}
      <div className="db-ellipse3" aria-hidden="true">
        <div style={{ position: 'absolute', inset: '-12.84%' }}>
          <svg
            style={{ display: 'block', width: '100%', height: '100%' }}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 978.743 978.743"
          >
            <g filter="url(#filter0_f_1_1571)" id="Ellipse 3" opacity="0.1">
              <circle
                cx="489.371"
                cy="489.371"
                fill="url(#paint0_linear_1_1571)"
                r="389.371"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="978.743"
                id="filter0_f_1_1571"
                width="978.743"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_1_1571"
                  stdDeviation="50"
                />
              </filter>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_1571"
                x1="434.557"
                x2="854.582"
                y1="74.5053"
                y2="155.505"
              >
                <stop stopColor="#00CFFD" />
                <stop offset="1" stopColor="#0015CE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* ── Decorative: "7" background text ── */}
      <p
        className="db-bg-7"
        aria-hidden="true"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        7
      </p>

      {/* ── Decorative: Vector diagonal path ── */}
      <div className="db-vector" data-name="Vector" aria-hidden="true">
        <svg
          style={{
            position: 'absolute',
            display: 'block',
            inset: 0,
            width: '100%',
            height: '100%',
          }}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1243.25 1245.21"
        >
          <path
            d={svgPaths.pe4fa380}
            id="Vector"
            opacity="0.2"
            stroke="url(#paint0_linear_1_1451)"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_1451"
              x1="297.465"
              x2="1670.69"
              y1="-1313.1"
              y2="-906.258"
            >
              <stop stopColor="#00B4FD" />
              <stop offset="1" stopColor="#003ACE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── Decorative: Ellipse 1 (top-left tiny orange glow) ── */}
      <div className="db-ellipse1" aria-hidden="true">
        <div style={{ position: 'absolute', inset: '-17.07%' }}>
          <svg
            style={{ display: 'block', width: '100%', height: '100%' }}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 785.85 785.85"
          >
            <g filter="url(#filter0_f_1_1554)" id="Ellipse 1" opacity="0.02">
              <circle
                cx="392.925"
                cy="392.925"
                fill="url(#paint0_linear_1_1554)"
                r="292.925"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="785.85"
                id="filter0_f_1_1554"
                width="785.85"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_1_1554"
                  stdDeviation="50"
                />
              </filter>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_1554"
                x1="240.173"
                x2="820.703"
                y1="-517.791"
                y2="-379.137"
              >
                <stop stopColor="#FDA700" />
                <stop offset="1" stopColor="#CE5700" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* ── Decorative: Ellipse 2 (top-right orange glow) ── */}
      <div className="db-ellipse2" aria-hidden="true">
        <div style={{ position: 'absolute', inset: '-12.84%' }}>
          <svg
            style={{ display: 'block', width: '100%', height: '100%' }}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 978.743 978.743"
          >
            <g filter="url(#filter0_f_1_1503)" id="Ellipse 2" opacity="0.05">
              <circle
                cx="489.371"
                cy="489.371"
                fill="url(#paint0_linear_1_1503)"
                r="389.371"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="978.743"
                id="filter0_f_1_1503"
                width="978.743"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_1_1503"
                  stdDeviation="50"
                />
              </filter>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_1503"
                x1="286.325"
                x2="1058"
                y1="-721.2"
                y2="-536.894"
              >
                <stop stopColor="#FDA700" />
                <stop offset="1" stopColor="#CE5700" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* ════════════════════════════════════════
          MAIN LAYOUT
      ════════════════════════════════════════ */}
      <div className="db-layout">
        {/* ── LEFT: Hero column ── */}
        <div className="db-hero-col">
          <div
            className="        z-10
        flex
        flex-col
        items-center
        gap-6
        text-center
        xl:items-start
        xl:text-left
"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 400,
                gap: '16px',
                color: '#000d12',
              }}
            >
              <p
                style={{
                  lineHeight: 1.2,
                  opacity: 0.95,
                  fontSize: 'clamp(28px, 3.68vw, 53px)',
                  letterSpacing: '-0.01em',
                  margin: 0,
                  width: 'min(438.987px, 100%)',
                  fontVariationSettings: "'wdth' 100",
                }}
              >
                Digital banking out-of-the-box
              </p>
              <p
                style={{
                  lineHeight: 1.3,
                  opacity: 0.7,
                  fontSize: '16px',
                  margin: 0,
                  width: 'min(379.032px, 100%)',
                  fontVariationSettings: "'wdth' 100",
                }}
              >
                N7 helps your financial institution improve the client
                experience, automate and optimize procedures
              </p>
            </div>
            <Button variant="default">REQUEST DEMO</Button>
            <TextLink
              className="
          mt-1
          flex
          flex-col
          gap-[3px]
          xl:items-start
        "
            />
          </div>
        </div>

        {/* ── RIGHT: Feature rows column ── */}
        <div className="db-features-col">
          {/* ── Row 1: phone left, text right ── */}
          <div className="db-feature-row">
            <IPhoneMockup screenImage={imgDesign1} />

            <div className="db-feat-text">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                <p
                  style={{
                    wordBreak: 'break-word',
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: '#000d12',
                    fontSize: '16px',
                    margin: 0,
                    width: 'min(269px, 100%)',
                    fontVariationSettings: "'wdth' 100",
                  }}
                >
                  Fully compliant with regulatory requirement
                </p>
                <p
                  style={{
                    wordBreak: 'break-word',
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    opacity: 0.7,
                    color: '#000d12',
                    fontSize: '16px',
                    margin: 0,
                    width: 'min(268.506px, 100%)',
                    fontVariationSettings: "'wdth' 100",
                  }}
                >
                  The governance of risk management with regulations is achieved
                  by our risk management framework that is fully integrated to
                  work with digital bank's operational-risk protocols and
                  procedures.
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center',
                    width: 'min(302px, 100%)',
                  }}
                >
                  <CheckCircle />
                  <p
                    style={{
                      wordBreak: 'break-word',
                      flex: '1 0 0',
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      minWidth: 0,
                      opacity: 0.7,
                      color: '#000d12',
                      fontSize: '16px',
                      margin: 0,
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    Pre-integrated Security System
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'flex-start',
                    width: 'min(302px, 100%)',
                  }}
                >
                  <CheckCircle />
                  <p
                    style={{
                      wordBreak: 'break-word',
                      flex: '1 0 0',
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      minWidth: 0,
                      opacity: 0.7,
                      color: '#000d12',
                      fontSize: '16px',
                      margin: 0,
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    Fully Compliant With Regulatory Requirement
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center',
                    width: 'min(302px, 100%)',
                  }}
                >
                  <CheckCircle />
                  <p
                    style={{
                      wordBreak: 'break-word',
                      flex: '1 0 0',
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      minWidth: 0,
                      opacity: 0.7,
                      color: '#000d12',
                      fontSize: '16px',
                      margin: 0,
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    Digitally Connected Core
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Row 2: text left, phone right ── */}
          <div className="db-feature-row reverse">
            <IPhoneMockup screenImage={imgDesign2} />

            <div className="db-feat-text">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                <p
                  style={{
                    wordBreak: 'break-word',
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: '#000d12',
                    fontSize: '16px',
                    margin: 0,
                    width: 'min(269px, 100%)',
                    fontVariationSettings: "'wdth' 100",
                  }}
                >
                  No legacy IT systems
                </p>
                <p
                  style={{
                    wordBreak: 'break-word',
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    opacity: 0.7,
                    color: '#000d12',
                    fontSize: '16px',
                    margin: 0,
                    width: 'min(268.506px, 100%)',
                    fontVariationSettings: "'wdth' 100",
                  }}
                >
                  Our Digital Banking solution and multilayered approach help
                  financial institutions take advantage of digital
                  transformation by ensuring customer trust and regulatory
                  compliance.
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  width: 'min(269px, 100%)',
                }}
              >
                <div
                  style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                >
                  <CheckCircle />
                  <p
                    style={{
                      wordBreak: 'break-word',
                      flex: '1 0 0',
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      minWidth: 0,
                      opacity: 0.7,
                      color: '#000d12',
                      fontSize: '16px',
                      margin: 0,
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    {'Adaptive & Intelligent API monetization'}
                  </p>
                </div>
                <div
                  style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                >
                  <CheckCircle />
                  <p
                    style={{
                      wordBreak: 'break-word',
                      flex: '1 0 0',
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      minWidth: 0,
                      opacity: 0.7,
                      color: '#000d12',
                      fontSize: '16px',
                      margin: 0,
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    Ambient User Experience
                  </p>
                </div>
                <div
                  style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                >
                  <CheckCircle />
                  <p
                    style={{
                      wordBreak: 'break-word',
                      flex: '1 0 0',
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      minWidth: 0,
                      opacity: 0.7,
                      color: '#000d12',
                      fontSize: '16px',
                      margin: 0,
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    Cloud-native With lower TCO
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Row 3: phone left, text right ── */}
          <div className="db-feature-row">
            <IPhoneMockup screenImage={imgDesign3} />

            <div className="db-feat-text">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                <p
                  style={{
                    wordBreak: 'break-word',
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: '#000d12',
                    fontSize: '16px',
                    margin: 0,
                    width: 'min(269px, 100%)',
                    fontVariationSettings: "'wdth' 100",
                  }}
                >
                  No traditional branches
                </p>
                <p
                  style={{
                    wordBreak: 'break-word',
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    opacity: 0.7,
                    color: '#000d12',
                    fontSize: '16px',
                    margin: 0,
                    width: 'min(268.506px, 100%)',
                    fontVariationSettings: "'wdth' 100",
                  }}
                >
                  Our Digital Banking out-of-the-box helps you to accelerate
                  innovation while reducing risks and optimising operational
                  costs for a seamless branchless experience.
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div
                  style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                >
                  <CheckCircle />
                  <p
                    style={{
                      wordBreak: 'break-word',
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      opacity: 0.7,
                      color: '#000d12',
                      fontSize: '16px',
                      margin: 0,
                      width: 'min(268.414px, 100%)',
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    {'Branchless & Paperless Banking'}
                  </p>
                </div>
                <div
                  style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                >
                  <CheckCircle />
                  <p
                    style={{
                      wordBreak: 'break-word',
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      opacity: 0.7,
                      color: '#000d12',
                      fontSize: '16px',
                      margin: 0,
                      width: 'min(268.414px, 100%)',
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    Digital Transformation Capability
                  </p>
                </div>
                <div
                  style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                >
                  <CheckCircle />
                  <p
                    style={{
                      wordBreak: 'break-word',
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      opacity: 0.7,
                      color: '#000d12',
                      fontSize: '16px',
                      margin: 0,
                      width: 'min(268.414px, 100%)',
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    Optimized, Adoptable and Scalable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end db-features-col */}
      </div>
      {/* end db-layout */}

      {/* ── CTA: Paperless card (full width below both columns) ── */}
      <div className="db-cta-wrapper">
        <PaperlessCard />
      </div>
    </div>
  );
}
