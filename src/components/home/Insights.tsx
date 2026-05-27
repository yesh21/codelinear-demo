import svgPaths from "../../assets/svgs/svg-54ycx9j4u6";

type ComponentProps = {
  className?: string;
  property1?: "Frame 60" | "Frame 61";
};

function Component({ className, property1 = "Frame 61" }: ComponentProps) {
  const isFrame61 = property1 === "Frame 61";
  return (
    <div className={className || "content-stretch flex flex-col gap-[3px] items-start relative"}>
      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#00b4fd] text-[14px] text-right uppercase whitespace-nowrap">read all insights</p>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="h-[14.505px] overflow-clip relative w-[13.569px]" data-name="3">
              <div className="absolute flex items-center justify-center left-[0.53px] size-[11.58px] top-[1.23px]">
                <div className="flex-none rotate-45">
                  <div className="h-[8.422px] relative w-[7.954px]">
                    <div className="absolute inset-[-4.16%_-7.35%_0_-1.47%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.65572 8.77279">
                        <g id="Frame 58">
                          <path d={svgPaths.p2fcc2700} id="Vector" stroke="var(--stroke-0, #00B4FD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.935782" />
                          <path d={svgPaths.p5869e80} id="Vector_2" stroke="var(--stroke-0, #00B4FD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.935782" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`h-0 relative shrink-0 ${isFrame61 ? "w-[32.577px]" : "w-full"}`}>
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isFrame61 ? "0 0 32.5773 1" : "0 0 161.569 1"}>
            <line id="Line 1" stroke="var(--stroke-0, #00B4FD)" x2={isFrame61 ? "32.5773" : "161.569"} y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export function Insights() {
  return (
    <div className="bg-[#000d12] h-[853px] overflow-clip relative shrink-0 w-[1440px]">
      <div className="absolute left-[58.23px] size-[556.772px] top-[160.23px]">
        <div className="absolute inset-[-35.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 956.772 956.772">
            <g filter="url(#filter0_f_1_1493)" id="Ellipse 1" opacity="0.1">
              <circle cx="478.386" cy="478.386" fill="url(#paint0_linear_1_1493)" r="278.386" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="956.772" id="filter0_f_1_1493" width="956.772" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1493" stdDeviation="100" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1493" x1="333.216" x2="884.931" y1="-387.128" y2="-255.355">
                <stop stopColor="#00B4FD" />
                <stop offset="1" stopColor="#003ACE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[80px] top-[80.17px]">
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#e9f4f9] text-[37px] tracking-[-0.37px] w-[463.264px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Get yourself up-to-speed on all the things happening in fintech
        </p>
        <div className="content-stretch flex items-center justify-center px-[59px] py-[15px] relative rounded-[10px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#e9f4f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#e9f4f9] text-[15px] uppercase whitespace-nowrap">Insights</p>
        </div>
      </div>
      <div className="absolute bg-[#01141b] h-[318px] left-[calc(41.67%+90px)] overflow-clip rounded-[18px] top-[80px] w-[670px]">
        <div className="-translate-y-1/2 absolute bg-[#07193c] h-[267px] left-[24px] overflow-clip rounded-[8px] top-1/2 w-[295px]">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[218.18px] left-1/2 top-1/2 w-[257.198px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257.198 218.18">
              <g id="Frame 55">
                <path d={svgPaths.p24c12780} fill="var(--fill-0, #00B4FD)" id="Vector" />
                <path d={svgPaths.p3f579070} fill="var(--fill-0, #00B4FD)" id="Vector_2" />
                <path d={svgPaths.p6cf0600} fill="var(--fill-0, #00B4FD)" id="Vector_3" />
                <path d={svgPaths.p28b12280} fill="var(--fill-0, #00B4FD)" id="Vector_4" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute content-stretch flex items-center justify-center left-[351.88px] px-[111px] py-[10px] rounded-[10px] top-[244px]">
          <div aria-hidden="true" className="absolute border border-[rgba(233,244,249,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(233,244,249,0.5)] uppercase whitespace-nowrap">read more</p>
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[11px] items-start left-[351.88px] top-[39.91px]">
          <p className="font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic opacity-80 relative shrink-0 text-[#2490bb] text-[12px] uppercase whitespace-nowrap">getting started</p>
          <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#e9f4f9] text-[27px] w-[289.132px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            How to transition from a traditional to a digital bank
          </p>
          <div className="content-stretch flex font-['Archivo:Regular',sans-serif] font-normal gap-[14px] items-start leading-[1.3] relative shrink-0 text-[#64a8c4] text-[14px] whitespace-nowrap">
            <p className="opacity-80 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              David Grohl
            </p>
            <p className="opacity-80 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              17/08/24
            </p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[29px] items-start left-[calc(41.67%+90px)] top-[431px] w-[670px]">
        <div className="bg-[#01141b] h-[318px] overflow-clip relative rounded-[18px] shrink-0 w-[320.5px]">
          <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[11px] items-start left-1/2 top-[38px]">
            <p className="font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic opacity-80 relative shrink-0 text-[#2490bb] text-[12px] uppercase whitespace-nowrap">getting started</p>
            <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#e9f4f9] text-[27px] w-[259.065px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              How to transition from a traditional to a digital bank
            </p>
            <div className="content-stretch flex font-['Archivo:Regular',sans-serif] font-normal gap-[14px] items-start leading-[1.3] relative shrink-0 text-[#64a8c4] text-[14px] whitespace-nowrap">
              <p className="opacity-80 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                David Grohl
              </p>
              <p className="opacity-80 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                17/08/24
              </p>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[111px] py-[10px] rounded-[10px] top-[250px]">
            <div aria-hidden="true" className="absolute border border-[rgba(233,244,249,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(233,244,249,0.5)] uppercase whitespace-nowrap">read more</p>
          </div>
        </div>
        <div className="bg-[#01141b] h-[318px] overflow-clip relative rounded-[18px] shrink-0 w-[320.5px]">
          <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[11px] items-start left-1/2 top-[38px]">
            <p className="font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic opacity-80 relative shrink-0 text-[#2490bb] text-[12px] uppercase whitespace-nowrap">getting started</p>
            <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#e9f4f9] text-[27px] w-[259.065px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              How to transition from a traditional to a digital bank
            </p>
            <div className="content-stretch flex font-['Archivo:Regular',sans-serif] font-normal gap-[14px] items-start leading-[1.3] relative shrink-0 text-[#64a8c4] text-[14px] whitespace-nowrap">
              <p className="opacity-80 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                David Grohl
              </p>
              <p className="opacity-80 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                17/08/24
              </p>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[111px] py-[10px] rounded-[10px] top-[250px]">
            <div aria-hidden="true" className="absolute border border-[rgba(233,244,249,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(233,244,249,0.5)] uppercase whitespace-nowrap">read more</p>
          </div>
        </div>
      </div>
      <Component className="absolute content-stretch flex flex-col gap-[3px] items-start left-[calc(83.33%-1.57px)] top-[767px]" />
    </div>
  );
}
