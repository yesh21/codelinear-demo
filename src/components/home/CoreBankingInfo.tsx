import { Button } from "../ui/Button";
import { imgImage3 } from "../../assets/svgs/svg-mwqa7";
import imgImage4 from "../../assets/images/cf6d5ba6cd6512a5bf998febcf101b68f11336d4.png";
import { TextLink } from "../ui/TextLink";

export function CoreBankingInfo() {
  return (
    <section className="relative w-full overflow-hidden bg-[#000d12]">
      {/* Desktop / large screens */}
      <div className="relative mx-auto hidden h-[619px] w-full max-w-[1440px] overflow-hidden xl:block">
        <p
          className="
            pointer-events-none select-none absolute
            left-[-163.31px] top-[-2.25px]
            whitespace-nowrap opacity-50
            font-['Archivo:Medium',sans-serif] font-medium
            text-[572.632px] leading-none tracking-[-0.02em]
            text-transparent
          "
          style={{
            WebkitTextStroke: "2px rgba(0, 90, 130, 0.42)",
            fontVariationSettings: "'wdth' 100",
          }}
        >
          CB7
        </p>

        <div className="absolute h-[461.422px] left-[calc(66.67%-33px)] top-[80.17px] w-[651.666px]">
          <div className="absolute border-[#00b4fd] border-[1.051px] border-solid h-[431.992px] left-0 rounded-tl-[15.766px] rounded-tr-[15.766px] top-0 w-[651.666px]" />
          <div className="-translate-x-1/2 absolute border-[#00b4fd] border-[1.051px] border-solid h-[30.305px] left-1/2 rounded-bl-[14.715px] rounded-br-[14.715px] rounded-tl-[5.255px] rounded-tr-[5.255px] top-[431.12px] w-[765.944px]" />
          <div className="absolute contents left-[10.22px] top-[7.57px]" data-name="Mask group">
            <div
              className="absolute h-[483.136px] left-[10.22px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[631.152px_408.798px] opacity-80 top-[7.57px] w-[631.152px]"
              style={{ maskImage: `url('${imgImage3}')` }}
              data-name="image 3"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-full left-[-0.34%] max-w-none top-0 w-[100.46%]"
                  src={imgImage4}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[80px] top-[156.88px]">
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0">
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Archivo:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0 text-[#e9f4f9]">
              <p
                className="leading-[1.2] relative shrink-0 text-[53px] tracking-[-0.53px] w-[607.835px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                A complete cloud-based core banking.
              </p>
              <p
                className="leading-[1.3] opacity-80 relative shrink-0 text-[16px] w-[327.188px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Faster time to market with our cloud-based core banking services
              </p>
            </div>

            <Button variant="default">REQUEST DEMO</Button>
          </div>

          <TextLink className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0" />
        </div>
      </div>

      {/* Tablet / mobile */}
      <div className="relative flex min-h-[760px] w-full items-center justify-center overflow-hidden px-6 py-16 xl:hidden md:min-h-[820px] md:px-10">
        <p
          className="
            pointer-events-none select-none absolute
            left-[-14vw] top-[-2vw]
            whitespace-nowrap opacity-50
            font-['Archivo:Medium',sans-serif] font-medium
            text-[clamp(220px,52vw,420px)] leading-none
            text-transparent
          "
          style={{
            WebkitTextStroke: "2px rgba(0, 90, 130, 0.42)",
            fontVariationSettings: "'wdth' 100",
          }}
        >
          CB7
        </p>

        <div className="relative z-10 flex w-full max-w-[720px] flex-col items-center text-center">
          <div className="flex flex-col items-center gap-5 md:gap-6">
            <div className="flex flex-col items-center gap-4 text-[#e9f4f9]">
              <p
                className="max-w-[620px] text-[clamp(34px,7.2vw,48px)] leading-[1.08] tracking-[-0.03em]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                A complete cloud-based core banking.
              </p>
              <p
                className="max-w-[420px] text-[15px] leading-[1.35] opacity-80 md:text-[16px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Faster time to market with our cloud-based core banking services
              </p>
            </div>

            <Button variant="default">REQUEST DEMO</Button>

            <TextLink className="mt-1 flex flex-col items-center gap-[3px]" />
          </div>

          {/* Overflowing image block */}
          <div className="relative mt-14 h-[clamp(280px,62vw,470px)] w-[min(98vw,760px)] overflow-visible md:mt-16">
            <div className="absolute inset-0 left-auto right-[-6vw] top-[2%] h-[96%] w-[min(92vw,660px)] overflow-visible md:right-[6vw]">
              <div className="absolute inset-0 rounded-t-[18px] border-[1px] border-[#00b4fd]" />
              <div className="-translate-x-1/2 absolute bottom-[-7px] left-1/2 h-[34px] w-[110%] rounded-b-[16px] border-[1px] border-[#00b4fd]" />

              <div
                className="absolute left-[1.5%] top-[1.5%] h-[101%] w-[96%] opacity-80"
                style={{ maskImage: `url('${imgImage3}')` }}
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute h-full max-w-none top-0 left-[-2%] w-[104%]"
                    src={imgImage4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}