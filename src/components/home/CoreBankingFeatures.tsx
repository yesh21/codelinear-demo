import { imgImage3 } from "../../assets/svgs/svg-mwqa7";
import imgImage5 from "../../assets/images/70d1f8da302fa5c8d9e1fea0fe2e2f72c1f9be9a.png";
import svgPaths from "../../assets/svgs/svg-54ycx9j4u6";


function BankingPreview() {
  return (
    <div
      className="
        relative
        h-[clamp(280px,62vw,470px)]
        w-[min(98vw,760px)]
        right-[25%]
      "
    >
      {/* Monitor frame */}
      <div className="absolute inset-0 rounded-t-[18px] border border-[#00b4fd]" />

      {/* Bottom stand */}
      <div className="absolute bottom-[-7px] left-1/2 h-[34px] w-[110%] -translate-x-1/2 rounded-b-[16px] border border-[#00b4fd]" />

      {/* Image */}
      <div
        className="absolute left-[1.5%] top-[1.5%] h-[92%] w-[97%] opacity-80"
        style={{
          maskImage: `url('${imgImage3}')`,
          WebkitMaskImage: `url('${imgImage3}')`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "cover",
          WebkitMaskSize: "cover",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute top-0 h-full w-[100%] max-w-none"
            src={imgImage5}
          />
        </div>
      </div>
    </div>
  );
}

const featuresLeft = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const featuresRight = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

function CheckIcon() {
  return (
    <div style={{ height: "31.408px", position: "relative", flexShrink: 0, width: "29.98px" }}>
      <svg
        style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }}
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
          <linearGradient gradientUnits="userSpaceOnUse" id="cc_grad" x1="-9.11865" x2="25.1246" y1="-15.9254" y2="-17.5505">
            <stop stopColor="#00B4FD" />
            <stop offset="0.815786" stopColor="#003ACE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckIcon />

      <p
        className="
          break-words flex-1 basis-0 font-medium leading-[1.3] min-w-0 opacity-70 text-[16px] mt-[6px] text-start
        "
        style={{ fontFamily: "'Archivo', sans-serif" }}      >
        {text}
      </p>
    </div>
  );
}

function ContentSection() {
  return (
    <div
      className="
        z-10
        flex
        flex-col
        items-center
        gap-8
        text-center
        xl:items-start
        xl:text-left
      "
    >
      <div className="flex flex-col items-center gap-4 text-[#e9f4f9] xl:items-start">
        <p
          className="
            text-[clamp(34px,7vw,53px)]
            leading-[1.1]
            tracking-[-0.03em]
          "
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Run a more efficient, flexible,and digitally connected corebanking system
        </p>
      </div>

      {/* FEATURES SECTION */}
      <div className="w-full max-w-[900px]">
        <p className="mb-5 text-[16px] font-semibold text-[#e9f4f9] text-start">
          What you will get:
        </p>

        <div
          className="
            grid
            gap-5
            md:grid-cols-2
            md:gap-x-10
          "
        >
          <div className="space-y-4">
            {featuresLeft.map((item) => (
              <FeatureItem key={item} text={item} />
            ))}
          </div>

          <div className="space-y-4">
            {featuresRight.map((item) => (
              <FeatureItem key={item} text={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CoreBankingFeatures() {
  return (
    <section className="relative w-full overflow-hidden bg-[#000d12]">
      <div
        className="
    relative
    mx-auto
    flex
    min-h-[760px]
    max-w-[1440px]
    flex-col-reverse
    items-center
    justify-center
    gap-16
    px-6
    py-16
    xl:min-h-[620px]
    xl:flex-row
    xl:items-center
    xl:gap-10
    xl:px-20
  "
      >
        <div
          className="
      flex
      w-full
      justify-center
      xl:w-[45%]
      xl:justify-end
    "
        >
          <BankingPreview />
        </div>
        <div className="w-full xl:w-[55%]">
          <ContentSection />
        </div>
      </div>
    </section>
  );
}