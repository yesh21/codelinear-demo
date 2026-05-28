import { imgRectangle77 } from '../../assets/svgs/svg-mwqa7';
import svgPaths from '../../assets/svgs/svg-54ycx9j4u6';

type MaskGroupProps = {
  className?: string;
  property1?: 'Default' | 'Variant2' | 'Variant3';
};

// Arrow icon extracted to avoid repetition
function ArrowIcon() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="flex-none rotate-180">
        <div
          className="h-[14.505px] overflow-clip relative w-[13.569px]"
          data-name="3"
        >
          <div className="absolute flex items-center justify-center left-[0.53px] size-[11.58px] top-[1.23px]">
            <div className="flex-none rotate-45">
              <div className="h-[8.422px] relative w-[7.954px]">
                <div className="absolute inset-[-4.16%_-7.35%_0_-1.47%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 8.65572 8.77279"
                  >
                    <g id="Frame 58">
                      <path
                        d={svgPaths.p2fcc2700}
                        id="Vector"
                        stroke="var(--stroke-0, #00B4FD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.935782"
                      />
                      <path
                        d={svgPaths.p5869e80}
                        id="Vector_2"
                        stroke="var(--stroke-0, #00B4FD)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.935782"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavLink({ label }: { label: string }) {
  return (
    <div className="flex gap-[14px] items-center">
      <p
        className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 text-[#e9f4f9] text-[16px] w-[136.45px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </p>
      <ArrowIcon />
    </div>
  );
}

function MaskGroup({ className, property1 = 'Default' }: MaskGroupProps) {
  const isVariant2 = property1 === 'Variant2';
  const isVariant3 = property1 === 'Variant3';
  return (
    <div className={className || 'h-[232px] relative w-[440px]'}>
      <div
        className="absolute bg-[#01b4fd] inset-[-4.33%_-32.1%_-25.78%_-22.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[126.872px_9.983px] mask-size-[399.658px_232.073px]"
        style={{ maskImage: `url('${imgRectangle77}')` }}
      />
      <div
        className={`absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[399.658px_232.073px] ${
          isVariant3
            ? 'inset-[-13.36%_72.5%_4.99%_-29.64%] mask-position-[157.838px_30.934px]'
            : isVariant2
              ? 'inset-[-25.13%_30.55%_16.75%_12.31%] mask-position-[-26.748px_58.233px]'
              : 'inset-[23.15%_2.91%_-31.53%_39.94%] mask-position-[-148.343px_-53.787px]'
        }`}
        style={{ maskImage: `url('${imgRectangle77}')` }}
      >
        <div className="absolute inset-[-39.77%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 451.44 451.44"
          >
            <g
              filter={
                isVariant3
                  ? 'url(#filter0_f_1_1401)'
                  : isVariant2
                    ? 'url(#filter0_f_1_1657)'
                    : 'url(#filter0_f_1_1550)'
              }
              id="Ellipse 57"
            >
              <circle
                cx="225.72"
                cy="225.72"
                fill="var(--fill-0, #013ACF)"
                fillOpacity={
                  isVariant3 ? '0.7' : isVariant2 ? '0.5' : undefined
                }
                r="125.72"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="451.44"
                id={
                  isVariant3
                    ? 'filter0_f_1_1401'
                    : isVariant2
                      ? 'filter0_f_1_1657'
                      : 'filter0_f_1_1550'
                }
                width="451.44"
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
                  result={
                    isVariant3
                      ? 'effect1_foregroundBlur_1_1401'
                      : isVariant2
                        ? 'effect1_foregroundBlur_1_1657'
                        : 'effect1_foregroundBlur_1_1550'
                  }
                  stdDeviation="50"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className={`absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[399.658px_232.073px] mix-blend-color-dodge ${
          isVariant3
            ? 'inset-[40.66%_11.07%_4.37%_59.95%] mask-position-[-236.357px_-94.393px]'
            : isVariant2
              ? 'inset-[57.37%_41.35%_-12.35%_29.66%] mask-position-[-103.085px_-133.176px]'
              : 'inset-[47.05%_55.72%_-2.03%_15.29%] mask-position-[-39.895px_-109.24px]'
        }`}
        style={{ maskImage: `url('${imgRectangle77}')` }}
      >
        <div className="absolute inset-[-78.4%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 327.553 327.553"
          >
            <g
              filter="url(#filter0_f_1_1409)"
              id="Ellipse 58"
              style={{ mixBlendMode: 'color-dodge' }}
            >
              <circle
                cx="163.776"
                cy="163.776"
                fill="var(--fill-0, #74F1AE)"
                r="63.7764"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="327.553"
                id="filter0_f_1_1409"
                width="327.553"
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
                  result="effect1_foregroundBlur_1_1409"
                  stdDeviation="50"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-[#000d12] relative w-full overflow-clip">
      {/* Background glow ellipse — decorative, hidden on mobile to avoid overflow */}
      <div className="hidden md:block absolute -translate-x-1/2 left-1/2 bottom-0 h-[556.772px] w-full pointer-events-none">
        <div className="absolute inset-[-35.92%_-13.89%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1840 956.772"
          >
            <g filter="url(#filter0_f_1_1453)" id="Ellipse 1" opacity="0.05">
              <ellipse
                cx="920"
                cy="478.386"
                fill="url(#paint0_linear_1_1453)"
                rx="720"
                ry="278.386"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="956.772"
                id="filter0_f_1_1453"
                width="1840"
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
                  result="effect1_foregroundBlur_1_1453"
                  stdDeviation="100"
                />
              </filter>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_1453"
                x1="544.541"
                x2="1636.28"
                y1="-387.128"
                y2="287.262"
              >
                <stop stopColor="#00B4FD" />
                <stop offset="1" stopColor="#003ACE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[53px] pt-10 lg:pt-[130px] pb-10 lg:pb-[69px]">
        {/* ── DESKTOP layout (lg+) ── 4-col grid, logo spans 2 rows */}
        <div className="hidden lg:grid lg:grid-cols-[440px_1fr_1fr_1fr] lg:grid-rows-[auto_auto] gap-x-[34px] gap-y-[128px] items-start">
          <div className="col-start-1 row-start-1 row-span-2 flex items-start">
            <MaskGroup className="h-[232px] relative w-[440px] max-w-full" />
          </div>
          <div className="col-start-2 row-start-1 flex flex-col gap-4 text-[#e9f4f9] text-[16px]">
            <p
              className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              London
            </p>
            <p
              className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 max-w-[268px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP,
              England, United Kingdom.
            </p>
          </div>
          <div className="col-start-3 row-start-1 flex flex-col gap-4 text-[#e9f4f9] text-[16px]">
            <p
              className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Dubai
            </p>
            <p
              className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 max-w-[268px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Linktia Infosystems Ltd – CB7, Jumeirah Business Center 5 Cluster
              W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
            </p>
          </div>
          <div className="col-start-4 row-start-1 flex flex-col gap-4 text-[#e9f4f9] text-[16px]">
            <p
              className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              London
            </p>
            <p
              className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 max-w-[211px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road,
              Pune, Maharashtra, 411041, India
            </p>
          </div>
          <div className="col-start-2 row-start-2 flex flex-col gap-4">
            <p
              className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] text-[#e9f4f9] text-[16px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Solutions
            </p>
            <div className="flex flex-col gap-[10px]">
              {[
                'Core Banking CB7',
                'Digital Banking N7',
                'Open Banking',
                'Loan Origination System',
                'Loan Management System',
                'Digital Transformation',
              ].map((item) => (
                <NavLink key={item} label={item} />
              ))}
            </div>
          </div>
          <div className="col-start-3 row-start-2 flex flex-col gap-4">
            <p
              className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] text-[#e9f4f9] text-[16px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              N7 Banking
            </p>
            <div className="flex flex-col gap-[10px]">
              {[
                'About Us',
                'Solutions',
                'Contact',
                'Company',
                'Careers',
                'Insights',
                'Core Team',
                'Brand Center',
              ].map((item) => (
                <NavLink key={item} label={item} />
              ))}
            </div>
          </div>
          <div className="col-start-4 row-start-2 flex flex-col gap-4">
            <p
              className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] text-[#e9f4f9] text-[16px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Our Socials
            </p>
            <div className="flex flex-col gap-[10px]">
              {['LinkedIn', 'X'].map((item) => (
                <NavLink key={item} label={item} />
              ))}
            </div>
          </div>
        </div>

        {/* ── MOBILE + TABLET layout (hidden on lg+) ── */}
        <div className="lg:hidden flex flex-col gap-10">
          {/* Logo */}
          <div className="flex items-start">
            <MaskGroup className="h-[232px] relative w-[440px] max-w-full" />
          </div>

          {/* All 3 addresses — stacked on mobile, 2-col on tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 text-[#e9f4f9] text-[16px]">
              <p
                className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                London
              </p>
              <p
                className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP,
                England, United Kingdom.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-[#e9f4f9] text-[16px]">
              <p
                className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Dubai
              </p>
              <p
                className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Linktia Infosystems Ltd – CB7, Jumeirah Business Center 5
                Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
              </p>
            </div>
            <div className="flex flex-col gap-4 text-[#e9f4f9] text-[16px]">
              <p
                className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                London
              </p>
              <p
                className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity
                Road, Pune, Maharashtra, 411041, India
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <p
                className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] text-[#e9f4f9] text-[16px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Solutions
              </p>
              <div className="flex flex-col gap-[10px]">
                {[
                  'Core Banking CB7',
                  'Digital Banking N7',
                  'Open Banking',
                  'Loan Origination System',
                  'Loan Management System',
                  'Digital Transformation',
                ].map((item) => (
                  <NavLink key={item} label={item} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <p
                className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] text-[#e9f4f9] text-[16px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                N7 Banking
              </p>
              <div className="flex flex-col gap-[10px]">
                {[
                  'About Us',
                  'Solutions',
                  'Contact',
                  'Company',
                  'Careers',
                  'Insights',
                  'Core Team',
                  'Brand Center',
                ].map((item) => (
                  <NavLink key={item} label={item} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p
                className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] text-[#e9f4f9] text-[16px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Our Socials
              </p>
              <div className="flex flex-col gap-[10px]">
                {['LinkedIn', 'X'].map((item) => (
                  <NavLink key={item} label={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p
          className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-30 text-[#e9f4f9] text-[14px] mt-12 lg:mt-[80px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
          Commercial Brand] — [Registered under the Companies Act 2006 in
          England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </div>
  );
}
