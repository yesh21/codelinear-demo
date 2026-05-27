import svgPaths from "../../assets/svgs/svg-54ycx9j4u6";


export function Navbar() {
  return (
    <div className="sticky z-50 backdrop-blur-[7.5px] bg-[rgba(47,47,47,0.7)] m-auto w-[75%] content-stretch flex justify-between items-center overflow-clip px-[10px] py-[9px] rounded-[12px] top-[31px]">
      <p className="[word-break:break-word] font-['Archivo:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#e9f4f9] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        N7
      </p>
      <div className="content-stretch flex gap-[80px] items-center relative shrink-0">
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#e9f4f9] text-[12px] uppercase whitespace-nowrap">solutions</p>
            <div className="flex items-center justify-center relative shrink-0 size-[13.728px]">
              <div className="-rotate-90 flex-none">
                <div className="relative size-[13.728px]" data-name="1">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.728 13.728">
                    <g clipPath="url(#clip0_1_1398)" id="1">
                      <path d={svgPaths.p15eda9a6} id="Vector" stroke="var(--stroke-0, #E9F4F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.144" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1398">
                        <rect fill="white" height="13.728" width="13.728" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
            <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#e9f4f9] text-[12px] uppercase whitespace-nowrap">resources</p>
            <div className="flex items-center justify-center relative shrink-0 size-[13.728px]">
              <div className="-rotate-90 flex-none">
                <div className="relative size-[13.728px]" data-name="1">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.728 13.728">
                    <g clipPath="url(#clip0_1_1398)" id="1">
                      <path d={svgPaths.p15eda9a6} id="Vector" stroke="var(--stroke-0, #E9F4F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.144" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1398">
                        <rect fill="white" height="13.728" width="13.728" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
            <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#e9f4f9] text-[12px] uppercase whitespace-nowrap">About us</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
          <div className="content-stretch flex items-center justify-center px-[37px] py-[5px] relative rounded-[6px] shrink-0">
            <div aria-hidden="true" className="absolute border border-[#e9f4f9] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#e9f4f9] text-[12px] uppercase whitespace-nowrap">request demo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
