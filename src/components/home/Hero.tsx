import { Button } from '../ui/Button';
import svgPaths from '../../assets/svgs/svg-54ycx9j4u6';
import imgPexelsPhotoByAndreaPiacquadio from '../../assets/images/ee861a9d0572ca7a13a963b266418b7612336b7f.png';
import imgRectangle11 from '../../assets/images/8bd31b71a379644a52221930303daba4b56c660f.png';

export function Hero() {
  return (
    <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center overflow-x-hidden bg-[#000d12] px-4 py-12 lg:block lg:h-[811px] lg:px-0 lg:py-0">
      <div className="absolute left-[calc(58.33%+33.13px)] z-0 size-[398.873px] top-[204.52px]">
        <div className="absolute inset-[-25.07%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 598.873 598.873"
          >
            <g filter="url(#filter0_f_1_1621)" opacity="0.5">
              <circle
                cx="299.437"
                cy="299.437"
                fill="url(#paint0_linear_1_1621)"
                r="199.437"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="598.873"
                id="filter0_f_1_1621"
                width="598.873"
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
                  result="effect1_foregroundBlur_1_1621"
                  stdDeviation="50"
                />
              </filter>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_1621"
                x1="195.436"
                x2="590.687"
                y1="-320.62"
                y2="-226.218"
              >
                <stop stopColor="#00B4FD" />
                <stop offset="1" stopColor="#003ACE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-20 flex flex-col gap-8 items-start text-center lg:absolute lg:left-[80px] lg:top-[211.96px] lg:text-left">
        <div className="flex flex-col gap-[16px] items-start text-[#e9f4f9]">
          <p
            className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.15] text-[40px] tracking-[-0.4px] w-full max-w-[607.835px] sm:text-[52px] lg:text-[67px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            The new foundation of modern banking
          </p>
          <p
            className="font-['Archivo:Regular',sans-serif] mx-auto lg:mx-0 font-normal leading-[1.3] opacity-80 text-[15px] w-full max-w-[356.169px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            We drive innovation and growth, provide seamless customer experience
            and operational excellence
          </p>
        </div>
        <div className="flex flex-col gap-3 items-stretch mx-auto lg:mx-0 sm:flex-row sm:items-start">
          <Button variant="default">REQUEST DEMO</Button>
          <Button variant="outline">Contact Us</Button>
        </div>
      </div>

      <div className="relative z-10 mt-10 h-[301px] w-[562px] origin-top scale-[0.68] sm:scale-[0.85] md:scale-90 lg:absolute lg:left-[calc(58.33%-22px)] lg:top-1/2 lg:mt-0 lg:w-[562px] lg:-translate-y-1/2 lg:scale-100">
        <div className="absolute z-0 h-[300.706px] left-[87.13px] rounded-[31px] top-[0.25px] w-[362.638px] overflow-hidden">
          <img
            alt=""
            className="absolute z-10 h-[100.04%] left-[-24.37%] max-w-none top-[-0.02%] w-[124.37%]"
            src={imgPexelsPhotoByAndreaPiacquadio}
          />
        </div>

        <div className="-translate-y-1/2 absolute z-20 backdrop-blur-[6px] bg-[rgba(255,255,255,0.4)] h-[177px] left-[353px] overflow-clip rounded-[12px] shadow-[0px_0px_27.571px_8.92px_rgba(0,0,0,0.25)] top-[calc(50%-39px)] w-[208px]">
          <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.7)] h-[168px] left-[5px] overflow-clip rounded-[11px] top-1/2 w-[199px]">
            <div className="absolute left-[7.4px] rounded-[8.609px] size-[25.826px] top-[21.01px]">
              <div className="absolute inset-0 rounded-[8.609px] overflow-hidden">
                <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8.609px]" />
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[8.609px] size-full"
                  src={imgRectangle11}
                />
              </div>
            </div>
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[39.68px] text-[8.609px] top-[22.62px] text-[#0d0d0c] leading-[normal]">
              Toni Kross
            </p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[39.68px] opacity-60 text-[6.457px] top-[37.15px] text-[#0d0d0c] leading-[normal]">
              Good Morning
            </p>

            {/* Notification icon */}
            <div className="absolute backdrop-blur-[26.902px] bg-[rgba(255,250,250,0.2)] left-[174.19px] rounded-[4px] size-[17.218px] top-[25.31px]" />
            <div className="absolute left-[176.34px] overflow-clip size-[12.913px] top-[27.46px]">
              <div className="absolute inset-[7.35%_16.14%_6.86%_16.1%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 8.75024 11.0778"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p1c768e00}
                    fill="#0D0D0C"
                    fillRule="evenodd"
                  />
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p30528500}
                    fill="#0D0D0C"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Divider */}
            <div className="absolute h-[0.538px] left-[7.4px] top-[101.71px] w-[184.013px] bg-black opacity-[0.24] rounded-full" />

            {/* Balance */}
            <p className="absolute font-['Gilroy-Regular:☞',sans-serif] leading-[11.837px] left-[7.4px] opacity-60 text-[#1d1d1d] text-[7.533px] top-[59.75px]">
              Total balance
            </p>
            <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[19.37px] left-[7.4px] text-[#081e69] text-[15.065px] top-[75.89px]">
              $42,295.00 USD
            </p>

            {/* Quick actions */}
            <div className="absolute backdrop-blur-[26.902px] bg-[rgba(255,250,250,0.2)] left-[14.93px] rounded-[9px] size-[32.283px] top-[114.63px]" />
            <div className="absolute left-[24.15px] overflow-clip size-[13.836px] top-[123.85px]">
              <div className="absolute inset-[6.26%_6.14%_6.24%_6.14%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 12.1363 12.1067"
                >
                  <path d={svgPaths.p3b5dce00} fill="#0D0D0C" />
                </svg>
              </div>
            </div>
            <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[11.837px] left-[31.4px] text-[#0d0d0c] text-[7.533px] text-center top-[151.21px] whitespace-nowrap -translate-x-1/2">
              Fund Transfer
            </p>

            <div className="absolute backdrop-blur-[26.902px] bg-[rgba(255,250,250,0.2)] left-[90.79px] rounded-[9px] size-[32.283px] top-[114.63px]" />
            <div className="absolute left-[100.02px] size-[13.836px] top-[123.85px]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 13.8356 13.8356"
              >
                <g clipPath="url(#clip0_1_1560)">
                  <path d={svgPaths.p2e968b00} fill="#0D0D0C" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1560">
                    <rect fill="white" height="13.8356" width="13.8356" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[11.837px] left-[107.03px] text-[#0d0d0c] text-[7.533px] text-center top-[151.21px] whitespace-nowrap -translate-x-1/2">
              Add Money
            </p>

            <div className="absolute backdrop-blur-[26.902px] bg-[rgba(255,250,250,0.2)] left-[159.13px] rounded-[9px] size-[32.283px] top-[114.63px]" />
            <div className="absolute left-[168.35px] overflow-clip size-[13.836px] top-[123.85px]">
              <div className="absolute inset-[9.38%_53.13%_53.13%_9.38%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 5.18833 5.18833"
                >
                  <path d={svgPaths.p15511c00} fill="#0D0D0C" />
                </svg>
              </div>
              <div className="absolute inset-[9.38%_9.38%_53.13%_53.13%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 5.18833 5.18833"
                >
                  <path d={svgPaths.p24904d80} fill="#0D0D0C" />
                </svg>
              </div>
              <div className="absolute inset-[53.13%_53.13%_9.38%_9.38%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 5.18833 5.18833"
                >
                  <path d={svgPaths.p1efa1200} fill="#0D0D0C" />
                </svg>
              </div>
              <div className="absolute inset-[53.12%_9.38%_9.38%_53.12%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 5.18833 5.18833"
                >
                  <path d={svgPaths.p33b64400} fill="#0D0D0C" />
                </svg>
              </div>
            </div>
            <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[11.837px] left-[175.12px] text-[#0d0d0c] text-[7.533px] text-center top-[151.21px] whitespace-nowrap -translate-x-1/2">
              More
            </p>
          </div>

          {/* Recent activity panel (positioned outside inner card, within outer card) */}
          <div className="absolute h-[174.328px] left-[9.71px] top-[181.96px] w-[198.54px]">
            <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.065px] left-0 text-[#0f0f0f] text-[10.761px] top-0 whitespace-nowrap">
              Recent activity
            </p>

            {/* Filter tabs */}
            <div className="absolute bg-[#f8f8f8] flex items-center justify-center left-[2.69px] px-[6.457px] py-[1.076px] rounded-[8.609px] top-[25.83px]">
              <p className="font-['Gilroy-Medium:☞',sans-serif] leading-[10.761px] text-[#0d0d0c] text-[6.457px] text-center whitespace-nowrap">
                This Day
              </p>
            </div>
            <div className="absolute bg-[#081e69] flex items-center justify-center left-[51.65px] px-[6.457px] py-[1.076px] rounded-[8.609px] top-[25.83px]">
              <p className="font-['Gilroy-Medium:☞',sans-serif] leading-[10.761px] text-[6.457px] text-center text-white whitespace-nowrap">
                This Week
              </p>
            </div>
            <div className="absolute bg-[#f8f8f8] flex items-center justify-center left-[105.46px] px-[6.457px] py-[1.076px] rounded-[8.609px] top-[25.83px]">
              <p className="font-['Gilroy-Medium:☞',sans-serif] leading-[10.761px] text-[#0d0d0c] text-[6.457px] text-center whitespace-nowrap">
                This Month
              </p>
            </div>
            <div className="absolute bg-[#f8f8f8] flex items-center justify-center left-[161.41px] px-[6.457px] py-[1.076px] rounded-[8.609px] top-[25.83px]">
              <p className="font-['Gilroy-Medium:☞',sans-serif] leading-[10.761px] text-[#0d0d0c] text-[6.457px] text-center whitespace-nowrap">
                6 Month
              </p>
            </div>

            <div className="absolute backdrop-blur-[26.902px] bg-[#9280fd] left-[2.69px] rounded-[8.609px] size-[25.826px] top-[49.5px]" />
            <div className="absolute left-[9.15px] overflow-clip size-[12.913px] top-[55.96px]">
              <div className="absolute inset-[19.79%_19.79%_20.93%_20.92%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 7.65534 7.65544"
                >
                  <path d={svgPaths.p2a054b80} fill="#FCFEF5" />
                  <path d={svgPaths.p33e3c700} fill="#FCFEF5" />
                </svg>
              </div>
            </div>
            <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] left-[37.13px] text-[#0b0b0b] text-[8.609px] top-[49.5px] whitespace-nowrap">
              To Jin
            </p>
            <p className="absolute font-['Gilroy-Medium:☞',sans-serif] leading-[12.913px] left-[66.18px] opacity-60 text-[#0b0b0b] text-[8.609px] top-[49.5px] whitespace-nowrap">
              Work
            </p>
            <p className="absolute font-['Gilroy-Regular:☞',sans-serif] leading-[10.761px] left-[37.13px] opacity-80 text-[#0b0b0b] text-[6.457px] top-[64.57px] whitespace-nowrap">
              12 jun 2022
            </p>
            <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] right-0 text-[#0b0b0b] text-[8.609px] text-right top-[55.96px] whitespace-nowrap">
              -$59
            </p>
            <div className="absolute h-[0.538px] left-[2.69px] top-[83.94px] w-[184.013px] bg-black opacity-[0.24] rounded-full" />

            {/* Transaction row 2: From Google (Salary) */}
            <div className="absolute backdrop-blur-[26.902px] bg-[#1738ad] left-[2.69px] rounded-[8.609px] size-[25.826px] top-[94.7px]" />
            <div className="absolute left-[9.15px] overflow-clip size-[12.913px] top-[101.15px]">
              <div className="absolute inset-[20.92%_20.93%_19.79%_19.79%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 7.65538 7.65534"
                >
                  <path d={svgPaths.p12899100} fill="#F5F5F5" />
                  <path d={svgPaths.p49e7ff0} fill="#F5F5F5" />
                </svg>
              </div>
            </div>
            <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] left-[37.13px] text-[#0b0b0b] text-[8.609px] top-[94.7px] whitespace-nowrap">
              From Google
            </p>
            <p className="absolute font-['Gilroy-Medium:☞',sans-serif] leading-[12.913px] left-[95.23px] opacity-60 text-[#0b0b0b] text-[8.609px] top-[94.7px] whitespace-nowrap">
              Salary
            </p>
            <p className="absolute font-['Gilroy-Regular:☞',sans-serif] leading-[10.761px] left-[37.13px] opacity-80 text-[#0b0b0b] text-[6.457px] top-[109.76px] whitespace-nowrap">
              10 jun 2022
            </p>
            <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] right-0 text-[#0b0b0b] text-[8.609px] text-right top-[101.15px] whitespace-nowrap">
              +$859
            </p>
            <div className="absolute h-[0.538px] left-[2.69px] top-[129.13px] w-[184.013px] bg-black opacity-[0.24] rounded-full" />

            {/* Transaction row 3: To David */}
            <div className="absolute backdrop-blur-[26.902px] bg-[#9280fd] left-[2.69px] rounded-[8.609px] size-[25.826px] top-[139.89px]" />
            <div className="absolute left-[9.15px] overflow-clip size-[12.913px] top-[146.35px]">
              <div className="absolute inset-[19.79%_19.79%_20.93%_20.92%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 7.65534 7.65543"
                >
                  <path d={svgPaths.p2a054b80} fill="#FCFEF5" />
                  <path d={svgPaths.pc9a8650} fill="#FCFEF5" />
                </svg>
              </div>
            </div>
            <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] left-[37.13px] text-[#0b0b0b] text-[8.609px] top-[139.89px] whitespace-nowrap">
              To David
            </p>
            <p className="absolute font-['Gilroy-Medium:☞',sans-serif] leading-[12.913px] left-[78.56px] opacity-60 text-[#0b0b0b] text-[8.609px] top-[139.89px] whitespace-nowrap">
              Work
            </p>
            <p className="absolute font-['Gilroy-Regular:☞',sans-serif] leading-[10.761px] left-[37.13px] opacity-80 text-[#0b0b0b] text-[6.457px] top-[154.96px] whitespace-nowrap">
              7 jun 2022
            </p>
            <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] right-0 text-[#0b0b0b] text-[8.609px] text-right top-[146.35px] whitespace-nowrap">
              -$479
            </p>
            <div className="absolute h-[0.538px] left-[2.69px] top-[174.33px] w-[184.013px] bg-black opacity-[0.24] rounded-full" />
          </div>

          {/* Bottom nav */}
          <div className="absolute h-[43.044px] left-[-0.52px] top-[405.79px] w-[209.839px]">
            <div className="absolute backdrop-blur-[21.522px] bg-[#e7e7e7] inset-0 opacity-80 rounded-tl-[16.141px] rounded-tr-[16.141px]" />
            {/* Home */}
            <div className="absolute overflow-clip inset-[16.25%_85.9%_53.75%_7.95%]">
              <div className="absolute inset-[4.52%_5.21%_5.21%_5.21%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 11.5675 11.6568"
                >
                  <path d={svgPaths.p12b85380} fill="#1B1B1B" />
                  <path d={svgPaths.p167b9400} fill="#1B1B1B" />
                </svg>
              </div>
            </div>
            <p className="absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_83.84%_15.87%_6.15%] leading-[11.837px] text-[#1b1b1b] text-[7.53px] whitespace-nowrap">
              Home
            </p>
            {/* Card */}
            <div className="absolute overflow-clip inset-[16.25%_63.33%_53.75%_30.51%]">
              <div className="absolute inset-[9.37%_5.21%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 11.5681 10.492"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p60c9000}
                    fill="#1B1B1B"
                    fillRule="evenodd"
                  />
                  <path d={svgPaths.p16600e80} fill="#1B1B1B" />
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p21f7e900}
                    fill="#1B1B1B"
                    fillRule="evenodd"
                  />
                  <path
                    clipRule="evenodd"
                    d={svgPaths.pf77ed80}
                    fill="#1B1B1B"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_62.19%_15.87%_29.23%] leading-[11.837px] text-[#1b1b1b] text-[7.53px] whitespace-nowrap">
              Card
            </p>
            {/* Transaction */}
            <div className="absolute overflow-clip inset-[16.25%_36.41%_53.75%_57.44%]">
              <div className="absolute inset-[17.71%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 8.3398 8.33977"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p19bcf300}
                    fill="#1B1B1B"
                    fillRule="evenodd"
                  />
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p1d7fee70}
                    fill="#1B1B1B"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_29.44%_15.87%_51.03%] leading-[11.837px] text-[#1b1b1b] text-[7.53px] whitespace-nowrap">
              Transaction
            </p>
            {/* Profile */}
            <div className="absolute overflow-clip inset-[16.25%_8.21%_53.75%_85.64%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12.9132 12.9132"
              >
                <path d={svgPaths.p33cbcb00} fill="#1B1B1B" />
              </svg>
            </div>
            <p className="absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_5.93%_15.87%_83.59%] leading-[11.837px] text-[#1b1b1b] text-[7.53px] whitespace-nowrap">
              Profile
            </p>
            {/* Active indicator */}
            <div className="absolute bg-[#081e69] inset-[0_84.1%_98.13%_6.41%] rounded-[24px]" />
          </div>

          {/* Recent activity transaction at bottom of outer card */}
          <div className="absolute h-0 left-[12.4px] top-[401.49px] w-[184.013px]">
            <div className="absolute inset-[-0.54px_0_0_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 184.013 0.538049"
              >
                <line
                  opacity="0.24"
                  stroke="#0D0D0C"
                  strokeLinecap="round"
                  strokeWidth="0.538049"
                  x1="0.269025"
                  x2="183.744"
                  y1="0.269025"
                  y2="0.269025"
                />
              </svg>
            </div>
          </div>
          <div className="absolute backdrop-blur-[26.902px] bg-[#1738ad] left-[12.4px] rounded-[8.609px] size-[25.826px] top-[367.05px]" />
          <div className="absolute left-[18.85px] overflow-clip size-[12.913px] top-[373.51px]">
            <div className="absolute inset-[20.92%_20.93%_19.79%_19.79%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 7.65538 7.65535"
              >
                <path d={svgPaths.p689d480} fill="#FCFEF5" />
                <path d={svgPaths.p49e7ff0} fill="#FCFEF5" />
              </svg>
            </div>
          </div>
          <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] left-[calc(16.67%+12.16px)] text-[#0b0b0b] text-[8.609px] top-[367.05px] whitespace-nowrap">
            From Google
          </p>
          <p className="absolute font-['Gilroy-Medium:☞',sans-serif] leading-[12.913px] left-[calc(50%+0.94px)] opacity-60 text-[#0b0b0b] text-[8.609px] top-[367.05px] whitespace-nowrap">
            Bonus
          </p>
          <p className="absolute font-['Gilroy-Regular:☞',sans-serif] leading-[10.761px] left-[calc(16.67%+12.16px)] opacity-80 text-[#0b0b0b] text-[6.457px] top-[382.12px] whitespace-nowrap">
            10 jun 2022
          </p>
          <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] right-0 text-[#0b0b0b] text-[8.609px] text-right top-[373.51px] whitespace-nowrap">
            +$859
          </p>
        </div>

        {/* Left floating activity card */}
        <div className="absolute z-20 backdrop-blur-[8.096px] bg-[rgba(255,255,255,0.4)] h-[117px] left-[-28px] overflow-clip rounded-[12px] top-[150px] w-[254px]">
          <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.7)] h-[109px] left-[4px] overflow-clip rounded-[11px] top-1/2 w-[246px]">
            <div className="-translate-x-1/2 absolute h-[204.533px] left-1/2 top-[10px] w-[232.94px]">
              <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[17.676px] left-0 text-[#0f0f0f] text-[12.625px] top-0 whitespace-nowrap">
                Recent activity
              </p>

              {/* Filter tabs */}
              <div className="absolute bg-[#f8f8f8] flex items-center justify-center left-[3.16px] px-[7.575px] py-[1.263px] rounded-[10.1px] top-[30.3px]">
                <p className="font-['Gilroy-Medium:☞',sans-serif] leading-[12.625px] text-[#0d0d0c] text-[7.575px] text-center whitespace-nowrap">
                  This Day
                </p>
              </div>
              <div className="absolute bg-[#081e69] flex items-center justify-center left-[60.6px] px-[7.575px] py-[1.263px] rounded-[10.1px] top-[30.3px]">
                <p className="font-['Gilroy-Medium:☞',sans-serif] leading-[12.625px] text-[7.575px] text-center text-white whitespace-nowrap">
                  This Week
                </p>
              </div>
              <div className="absolute bg-[#f8f8f8] flex items-center justify-center left-[123.73px] px-[7.575px] py-[1.263px] rounded-[10.1px] top-[30.3px]">
                <p className="font-['Gilroy-Medium:☞',sans-serif] leading-[12.625px] text-[#0d0d0c] text-[7.575px] text-center whitespace-nowrap">
                  This Month
                </p>
              </div>
              <div className="absolute bg-[#f8f8f8] flex items-center justify-center left-[189.38px] px-[7.575px] py-[1.263px] rounded-[10.1px] top-[30.3px]">
                <p className="font-['Gilroy-Medium:☞',sans-serif] leading-[12.625px] text-[#0d0d0c] text-[7.575px] text-center whitespace-nowrap">
                  6 Month
                </p>
              </div>

              {/* Row 1: To Jin */}
              <div className="absolute backdrop-blur-[31.564px] bg-[#9280fd] left-[3.16px] rounded-[10.1px] size-[30.301px] top-[58.08px]" />
              <div className="absolute left-[10.73px] overflow-clip size-[15.151px] top-[65.65px]">
                <div className="absolute inset-[19.79%_19.79%_20.92%_20.92%]">
                  <svg
                    className="absolute block inset-0 size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 8.98172 8.9818"
                  >
                    <path d={svgPaths.p15885600} fill="#FCFEF5" />
                    <path d={svgPaths.p20468c00} fill="#FCFEF5" />
                  </svg>
                </div>
              </div>
              <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.151px] left-[43.56px] text-[#0b0b0b] text-[10.1px] top-[58.08px] whitespace-nowrap">
                To Jin
              </p>
              <p className="absolute font-['Gilroy-Medium:☞',sans-serif] leading-[15.151px] left-[77.65px] opacity-60 text-[#0b0b0b] text-[10.1px] top-[58.08px] whitespace-nowrap">
                Work
              </p>
              <p className="absolute font-['Gilroy-Regular:☞',sans-serif] leading-[12.625px] left-[43.56px] opacity-80 text-[#0b0b0b] text-[7.575px] top-[75.75px] whitespace-nowrap">
                12 jun 2022
              </p>
              <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.151px] right-0 text-[#0b0b0b] text-[10.1px] text-right top-[65.65px] whitespace-nowrap">
                -$59
              </p>
              <div className="absolute h-[0.631px] left-[3.16px] top-[98.48px] w-[215.896px] bg-black opacity-[0.24] rounded-full" />

              {/* Row 2: From Google (Salary) */}
              <div className="absolute backdrop-blur-[31.564px] bg-[#1738ad] left-[3.16px] rounded-[10.1px] size-[30.301px] top-[111.1px]" />
              <div className="absolute left-[10.73px] overflow-clip size-[15.151px] top-[118.68px]">
                <div className="absolute inset-[20.93%_20.92%_19.79%_19.79%]">
                  <svg
                    className="absolute block inset-0 size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 8.98176 8.98209"
                  >
                    <path d={svgPaths.p286a5100} fill="#F5F5F5" />
                    <path d={svgPaths.pd711300} fill="#F5F5F5" />
                  </svg>
                </div>
              </div>
              <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.151px] left-[43.56px] text-[#0b0b0b] text-[10.1px] top-[111.1px] whitespace-nowrap">
                From Google
              </p>
              <p className="absolute font-['Gilroy-Medium:☞',sans-serif] leading-[15.151px] left-[111.74px] opacity-60 text-[#0b0b0b] text-[10.1px] top-[111.1px] whitespace-nowrap">
                Salary
              </p>
              <p className="absolute font-['Gilroy-Regular:☞',sans-serif] leading-[12.625px] left-[43.56px] opacity-80 text-[#0b0b0b] text-[7.575px] top-[128.78px] whitespace-nowrap">
                10 jun 2022
              </p>
              <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.151px] right-0 text-[#0b0b0b] text-[10.1px] text-right top-[118.68px] whitespace-nowrap">
                +$859
              </p>
              <div className="absolute h-[0.631px] left-[3.16px] top-[151.51px] w-[215.896px] bg-black opacity-[0.24] rounded-full" />

              {/* Row 3: To David */}
              <div className="absolute backdrop-blur-[31.564px] bg-[#9280fd] left-[3.16px] rounded-[10.1px] size-[30.301px] top-[164.13px]" />
              <div className="absolute left-[10.73px] overflow-clip size-[15.151px] top-[171.71px]">
                <div className="absolute inset-[19.79%_19.79%_20.93%_20.92%]">
                  <svg
                    className="absolute block inset-0 size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 8.98172 8.9818"
                  >
                    <path d={svgPaths.p3bf7fe00} fill="#FCFEF5" />
                    <path d={svgPaths.p20468c00} fill="#FCFEF5" />
                  </svg>
                </div>
              </div>
              <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.151px] left-[43.56px] text-[#0b0b0b] text-[10.1px] top-[164.13px] whitespace-nowrap">
                To David
              </p>
              <p className="absolute font-['Gilroy-Medium:☞',sans-serif] leading-[15.151px] left-[92.17px] opacity-60 text-[#0b0b0b] text-[10.1px] top-[164.13px] whitespace-nowrap">
                Work
              </p>
              <p className="absolute font-['Gilroy-Regular:☞',sans-serif] leading-[12.625px] left-[43.56px] opacity-80 text-[#0b0b0b] text-[7.575px] top-[181.81px] whitespace-nowrap">
                7 jun 2022
              </p>
              <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.151px] right-0 text-[#0b0b0b] text-[10.1px] text-right top-[171.71px] whitespace-nowrap">
                -$479
              </p>
              <div className="absolute h-[0.631px] left-[3.16px] top-[204.53px] w-[215.896px] bg-black opacity-[0.24] rounded-full" />
            </div>
          </div>

          {/* Nav bar for left card */}
          <div className="absolute h-[54.874px] left-[-6.97px] top-[298.78px] w-[267.509px]">
            <div className="absolute backdrop-blur-[27.437px] bg-[#e7e7e7] inset-0 opacity-80 rounded-tl-[20.578px] rounded-tr-[20.578px]" />
            <div className="absolute overflow-clip inset-[16.25%_85.9%_53.75%_7.95%]">
              <div className="absolute inset-[4.52%_5.21%_5.21%_5.21%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 14.7466 14.8604"
                >
                  <path d={svgPaths.p2bc08e00} fill="#1B1B1B" />
                  <path d={svgPaths.p3559c100} fill="#1B1B1B" />
                </svg>
              </div>
            </div>
            <p className="absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_83.75%_14.59%_6.15%] leading-[15.09px] text-[#1b1b1b] text-[9.6px] whitespace-nowrap">
              Home
            </p>
            <div className="absolute overflow-clip inset-[16.25%_63.33%_53.75%_30.51%]">
              <div className="absolute inset-[9.37%_5.21%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 14.7473 13.3755"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p317e1b90}
                    fill="#1B1B1B"
                    fillRule="evenodd"
                  />
                  <path d={svgPaths.p25495300} fill="#1B1B1B" />
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p2da3da00}
                    fill="#1B1B1B"
                    fillRule="evenodd"
                  />
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p3fe37800}
                    fill="#1B1B1B"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_62.17%_14.59%_29.23%] leading-[15.09px] text-[#1b1b1b] text-[9.6px] whitespace-nowrap">
              Card
            </p>
            <div className="absolute overflow-clip inset-[16.25%_36.41%_53.75%_57.44%]">
              <div className="absolute inset-[17.71%]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 10.6318 10.6318"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p3bb94000}
                    fill="#1B1B1B"
                    fillRule="evenodd"
                  />
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p35b7e300}
                    fill="#1B1B1B"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_29.54%_14.59%_51.03%] leading-[15.09px] text-[#1b1b1b] text-[9.6px] whitespace-nowrap">
              Transaction
            </p>
            <div className="absolute overflow-clip inset-[16.25%_8.21%_53.75%_85.64%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16.4621 16.4621"
              >
                <path d={svgPaths.p23b40980} fill="#1B1B1B" />
              </svg>
            </div>
            <p className="absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_6.32%_14.59%_83.59%] leading-[15.09px] text-[#1b1b1b] text-[9.6px] whitespace-nowrap">
              Profile
            </p>
            <div className="absolute bg-[#081e69] inset-[0_84.1%_98.13%_6.41%] rounded-[24px]" />
          </div>

          {/* Actions for left card */}
          <div className="absolute backdrop-blur-[34.296px] bg-[#f8f8f8] left-[19.09px] rounded-[16.462px] size-[41.155px] top-[-64.76px]" />
          <div className="absolute left-[30.85px] overflow-clip size-[17.638px] top-[-53px]">
            <div className="absolute inset-[6.26%_6.14%_6.24%_6.14%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 15.4717 15.4339"
              >
                <path d={svgPaths.pcbf4480} fill="#0D0D0C" />
              </svg>
            </div>
          </div>
          <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.09px] left-[39.99px] text-[#0d0d0c] text-[9.603px] text-center top-[-18.12px] whitespace-nowrap -translate-x-1/2">
            Fund Transfer
          </p>

          <div className="absolute backdrop-blur-[34.296px] bg-[#f8f8f8] left-[calc(33.33%+31.14px)] rounded-[16.462px] size-[41.155px] top-[-64.76px]" />
          <div className="absolute left-[calc(50%+0.57px)] size-[17.638px] top-[-53px]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 17.6379 17.6379"
            >
              <path d={svgPaths.p5717500} fill="#0D0D0C" />
            </svg>
          </div>
          <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.09px] left-[calc(33.33%+51.84px)] text-[#0d0d0c] text-[9.603px] text-center top-[-18.12px] whitespace-nowrap -translate-x-1/2">
            Add Money
          </p>

          <div className="absolute backdrop-blur-[34.296px] bg-[#f8f8f8] left-[calc(83.33%-8.75px)] rounded-[16.462px] size-[41.155px] top-[-64.76px]" />
          <div className="absolute left-[calc(83.33%+3.01px)] overflow-clip size-[17.638px] top-[-53px]">
            <div className="absolute inset-[9.38%_53.13%_53.13%_9.38%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 6.61423 6.61423"
              >
                <path d={svgPaths.p3bb05900} fill="#0D0D0C" />
              </svg>
            </div>
            <div className="absolute inset-[9.38%_9.38%_53.13%_53.13%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 6.61423 6.61423"
              >
                <path d={svgPaths.p18651a40} fill="#0D0D0C" />
              </svg>
            </div>
            <div className="absolute inset-[53.13%_53.13%_9.38%_9.38%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 6.61423 6.61423"
              >
                <path d={svgPaths.p16b8a380} fill="#0D0D0C" />
              </svg>
            </div>
            <div className="absolute inset-[53.12%_9.38%_9.38%_53.12%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 6.61423 6.61423"
              >
                <path d={svgPaths.p10ae1ef0} fill="#0D0D0C" />
              </svg>
            </div>
          </div>
          <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.09px] left-[calc(83.33%+11.67px)] text-[#0d0d0c] text-[9.603px] text-center top-[-18.12px] whitespace-nowrap -translate-x-1/2">
            More
          </p>

          {/* Avatar + name + notification for left card */}
          <div className="absolute left-[9.49px] rounded-[10.975px] size-[32.924px] top-[-184.11px] overflow-hidden">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10.975px]" />
            <img
              alt=""
              className="absolute max-w-none object-cover rounded-[10.975px] size-full"
              src={imgRectangle11}
            />
          </div>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[calc(16.67%+8.31px)] text-[10.975px] top-[-182.05px] text-[#0d0d0c] leading-[normal]">
            Toni Kross
          </p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[calc(16.67%+8.31px)] opacity-60 text-[8.231px] top-[-163.53px] text-[#0d0d0c] leading-[normal]">
            Good Morning
          </p>

          <div className="absolute backdrop-blur-[34.296px] bg-[#f8f8f8] left-[calc(83.33%+10.46px)] rounded-[8.231px] size-[21.949px] top-[-178.62px]" />
          <div className="absolute left-[calc(83.33%+13.2px)] overflow-clip size-[16.462px] top-[-175.88px]">
            <div className="absolute inset-[7.35%_16.14%_6.86%_16.1%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 11.155 14.1222"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p37c3400}
                  fill="#0D0D0C"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p1316dd80}
                  fill="#0D0D0C"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Balance for left card */}
          <div className="absolute h-[0.686px] left-[9.49px] top-[-81.22px] w-[234.585px] bg-white opacity-[0.24] rounded-full" />
          <p className="absolute font-['Gilroy-Regular:☞',sans-serif] leading-[15.09px] left-[9.49px] opacity-60 text-[9.603px] text-white top-[-134.72px]">
            Total balance
          </p>
          <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[24.693px] left-[9.49px] text-[#081e69] text-[19.206px] top-[-114.14px]">
            $42,295.00 USD
          </p>

          {/* Transaction at bottom of left card */}
          <div className="absolute h-[0.686px] left-[9.49px] top-[293.29px] w-[234.585px] bg-black opacity-[0.24] rounded-full" />
          <div className="absolute backdrop-blur-[34.296px] bg-[#1738ad] left-[9.49px] rounded-[10.975px] size-[32.924px] top-[249.39px]" />
          <div className="absolute left-[17.72px] overflow-clip size-[16.462px] top-[257.62px]">
            <div className="absolute inset-[20.93%_20.93%_19.79%_19.79%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 9.75927 9.75922"
              >
                <path d={svgPaths.p1950e800} fill="#FCFEF5" />
                <path d={svgPaths.p19b8b400} fill="#FCFEF5" />
              </svg>
            </div>
          </div>
          <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[16.462px] left-[calc(16.67%+11.06px)] text-[#0b0b0b] text-[10.975px] top-[249.39px] whitespace-nowrap">
            From Google
          </p>
          <p className="absolute font-['Gilroy-Medium:☞',sans-serif] leading-[16.462px] left-[calc(50%+0.47px)] opacity-60 text-[#0b0b0b] text-[10.975px] top-[249.39px] whitespace-nowrap">
            Bonus
          </p>
          <p className="absolute font-['Gilroy-Regular:☞',sans-serif] leading-[13.718px] left-[calc(16.67%+11.06px)] opacity-80 text-[#0b0b0b] text-[8.231px] top-[268.6px] whitespace-nowrap">
            10 jun 2022
          </p>
          <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[16.462px] right-[calc(16.67%-32.23px)] text-[#0b0b0b] text-[10.975px] text-right top-[257.62px] whitespace-nowrap">
            +$859
          </p>
        </div>
      </div>
      <div className="relative z-10 flex flex-col gap-4 items-start pt-6 text-center lg:absolute lg:left-[80px] lg:top-[655.06px] lg:pt-0 lg:text-left">
        <p
          className="capitalize font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] opacity-70 text-[#e9f4f9] text-[16px] whitespace-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          trusted by:
        </p>
        <div className="flex flex-wrap justify-center gap-[18.398px] items-center opacity-90">
          <div className="flex gap-[4.599px] items-center">
            <div className="h-[18.398px] w-[17.478px] relative">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 17.478 18.3979"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p1713f6f0}
                  fill="#586E84"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <p className="font-['Roboto:Bold',sans-serif] font-bold text-[#586e84] text-[13.8px] leading-[1.1]">
              SHELLS
            </p>
          </div>

          {/* SmartFinder */}
          <div className="flex gap-[4.599px] items-center">
            <div className="h-[18.398px] w-[19.064px] relative">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 19.0639 18.3979"
              >
                <path d={svgPaths.p1a05e700} fill="#586E84" />
                <path d={svgPaths.p34c66200} fill="#586E84" />
                <path d={svgPaths.p398afb00} fill="white" />
              </svg>
            </div>
            <p className="font-['Roboto:Bold',sans-serif] font-bold text-[#586e84] text-[13.8px] leading-[1.1]">
              SmartFinder
            </p>
          </div>

          {/* Zoomerr */}
          <div className="flex gap-[4.599px] items-center">
            <div className="relative size-[18.398px]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 18.3979 18.3979"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p1bfec400}
                  fill="#586E84"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <p className="font-['Roboto:Bold',sans-serif] font-bold text-[#586e84] text-[13.8px] leading-[1.1]">
              Zoomerr
            </p>
          </div>

          {/* ArtVenue */}
          <div className="flex gap-[4.599px] items-center">
            <div className="h-[18.398px] w-[32.087px] relative">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 32.0868 18.3979"
              >
                <path d={svgPaths.p27c1900} fill="#586E84" />
                <path d={svgPaths.p28b68c00} fill="#586E84" />
                <path d={svgPaths.p3eef0180} fill="#586E84" />
              </svg>
            </div>
            <p className="font-['Roboto:Bold',sans-serif] font-bold text-[#586e84] text-[13.8px]">
              <span className="leading-[1.1]">Art</span>
              <span className="leading-[1.1]">Venue</span>
            </p>
          </div>

          {/* kontrastr */}
          <div className="flex gap-[4.599px] items-center">
            <div className="h-[16.788px] w-[13.655px] relative">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 13.6547 16.788"
              >
                <path d={svgPaths.p1f3e6980} fill="#586E84" />
                <path d={svgPaths.p28c79ab1} fill="#586E84" />
              </svg>
            </div>
            <p className="font-['Roboto:Bold',sans-serif] font-bold text-[#586e84] text-[13.8px] leading-[1.1]">
              kontrastr
            </p>
          </div>

          {/* WAVES MARATHON */}
          <div className="flex gap-[4.599px] items-center">
            <div className="h-[18.398px] w-[12.09px] relative">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12.0897 18.3979"
              >
                <path d={svgPaths.p3b72aa00} fill="#586E84" />
              </svg>
            </div>
            <p className="font-['Roboto:Medium',sans-serif] font-medium text-[#586e84] tracking-[0.5px] text-[18px]">
              <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.1]">
                WAVES
              </span>
              <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4]">
                MARATHON
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
