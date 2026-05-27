import { imgRectangle77, imgImage3, imgDesign } from "../../assets/svgs/svg-mwqa7";
import svgPaths from "../../assets/svgs/svg-54ycx9j4u6";

type MaskGroupProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

function MaskGroup({ className, property1 = "Default" }: MaskGroupProps) {
  const isVariant2 = property1 === "Variant2";
  const isVariant3 = property1 === "Variant3";
  return (
    <div className={className || "h-[232px] relative w-[440px]"}>
      <div className="absolute bg-[#01b4fd] inset-[-4.33%_-32.1%_-25.78%_-22.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[126.872px_9.983px] mask-size-[399.658px_232.073px]" style={{ maskImage: `url('${imgRectangle77}')` }} />
      <div className={`absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[399.658px_232.073px] ${isVariant3 ? "inset-[-13.36%_72.5%_4.99%_-29.64%] mask-position-[157.838px_30.934px]" : isVariant2 ? "inset-[-25.13%_30.55%_16.75%_12.31%] mask-position-[-26.748px_58.233px]" : "inset-[23.15%_2.91%_-31.53%_39.94%] mask-position-[-148.343px_-53.787px]"}`} style={{ maskImage: `url('${imgRectangle77}')` }}>
        <div className="absolute inset-[-39.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451.44 451.44">
            <g filter={isVariant3 ? "url(#filter0_f_1_1401)" : isVariant2 ? "url(#filter0_f_1_1657)" : "url(#filter0_f_1_1550)"} id="Ellipse 57">
              <circle cx="225.72" cy="225.72" fill="var(--fill-0, #013ACF)" fillOpacity={isVariant3 ? "0.7" : isVariant2 ? "0.5" : undefined} r="125.72" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="451.44" id={isVariant3 ? "filter0_f_1_1401" : isVariant2 ? "filter0_f_1_1657" : "filter0_f_1_1550"} width="451.44" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result={isVariant3 ? "effect1_foregroundBlur_1_1401" : isVariant2 ? "effect1_foregroundBlur_1_1657" : "effect1_foregroundBlur_1_1550"} stdDeviation="50" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className={`absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[399.658px_232.073px] mix-blend-color-dodge ${isVariant3 ? "inset-[40.66%_11.07%_4.37%_59.95%] mask-position-[-236.357px_-94.393px]" : isVariant2 ? "inset-[57.37%_41.35%_-12.35%_29.66%] mask-position-[-103.085px_-133.176px]" : "inset-[47.05%_55.72%_-2.03%_15.29%] mask-position-[-39.895px_-109.24px]"}`} style={{ maskImage: `url('${imgRectangle77}')` }}>
        <div className="absolute inset-[-78.4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327.553 327.553">
            <g filter="url(#filter0_f_1_1409)" id="Ellipse 58" style={{ mixBlendMode: "color-dodge" }}>
              <circle cx="163.776" cy="163.776" fill="var(--fill-0, #74F1AE)" r="63.7764" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="327.553" id="filter0_f_1_1409" width="327.553" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1409" stdDeviation="50" />
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
    <div className="bg-[#000d12] h-[787px] overflow-clip relative shrink-0 w-[1440px]">
      <div className="-translate-x-1/2 absolute h-[556.772px] left-1/2 top-[547.54px] w-[1440px]">
        <div className="absolute inset-[-35.92%_-13.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1840 956.772">
            <g filter="url(#filter0_f_1_1453)" id="Ellipse 1" opacity="0.05">
              <ellipse cx="920" cy="478.386" fill="url(#paint0_linear_1_1453)" rx="720" ry="278.386" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="956.772" id="filter0_f_1_1453" width="1840" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1453" stdDeviation="100" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1453" x1="544.541" x2="1636.28" y1="-387.128" y2="287.262">
                <stop stopColor="#00B4FD" />
                <stop offset="1" stopColor="#003ACE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <MaskGroup className="absolute h-[232px] left-[53px] top-[130.17px] w-[440px]" />
      <div className="absolute content-stretch flex gap-[34px] items-start left-[calc(33.33%+63.68px)] top-[130px]">
        <div className="content-stretch flex flex-col gap-[128px] items-start relative shrink-0">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#e9f4f9] text-[16px]">
            <p className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              London
            </p>
            <div className="font-['Archivo:Regular',sans-serif] font-normal leading-[0] opacity-70 relative shrink-0 w-[268.506px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[1.3] mb-0">Linktia Infosystems Ltd – CB7,</p>
              <p className="leading-[1.3]">26 Main Road Sundridge,TN14 6EP, England, United Kingdom.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
            <p className="[word-break:break-word] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#e9f4f9] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Solutions
            </p>
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Core Banking CB7
                </p>
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
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Digital Banking N7
                </p>
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
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Open Banking
                </p>
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
              <div className="content-stretch flex gap-[14px] items-start relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Loan Origination System
                </p>
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
              <div className="content-stretch flex gap-[14px] items-start relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Loan Management System
                </p>
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
              <div className="content-stretch flex gap-[14px] items-start relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Digital Transformation
                </p>
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
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[107px] items-start relative shrink-0">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.3] relative shrink-0 text-[#e9f4f9] text-[16px]">
            <p className="font-['Archivo:Medium',sans-serif] font-medium relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dubai
            </p>
            <p className="font-['Archivo:Regular',sans-serif] font-normal opacity-70 relative shrink-0 w-[268.506px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
            <p className="[word-break:break-word] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#e9f4f9] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              N7 Banking
            </p>
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  About Us
                </p>
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
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Solutions
                </p>
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
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Contact
                </p>
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
              <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Company
                </p>
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
              <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Careers
                </p>
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
              <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Insights
                </p>
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
              <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Core Team
                </p>
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
            </div>
            <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0">
              <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Brand Center
              </p>
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
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[107px] items-start relative shrink-0">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.3] relative shrink-0 text-[#e9f4f9] text-[16px]">
            <p className="font-['Archivo:Medium',sans-serif] font-medium relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              London
            </p>
            <p className="font-['Archivo:Regular',sans-serif] font-normal opacity-70 relative shrink-0 w-[211.305px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
            <p className="[word-break:break-word] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#e9f4f9] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Our Socials
            </p>
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  LinkedIn
                </p>
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
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-[#e9f4f9] text-[16px] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  X
                </p>
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
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] left-[calc(33.33%+63.68px)] opacity-30 text-[#e9f4f9] text-[14px] top-[718.96px] w-[779.431px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
      </p>
    </div>
  );
}
