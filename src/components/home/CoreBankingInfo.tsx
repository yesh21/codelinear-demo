import { Button } from '../ui/Button';
import { TextLink } from '../ui/TextLink';
import { imgImage3 } from '../../assets/svgs/svg-mwqa7';
import imgImage4 from '../../assets/images/cf6d5ba6cd6512a5bf998febcf101b68f11336d4.png';

function BankingPreview() {
  return (
    <div
      className="
        relative
        h-[clamp(280px,62vw,470px)]
        w-[min(98vw,760px)]
        left-[25%]
      "
    >
      {/* Monitor frame */}
      <div className="absolute inset-0 rounded-t-[18px] border border-[#00b4fd]" />

      {/* Bottom stand */}
      <div className="absolute bottom-[-7px] left-1/2 h-[34px] w-[110%] -translate-x-1/2 rounded-b-[16px] border border-[#00b4fd]" />

      {/* Image */}
      <div
        className="absolute left-[1.5%] top-[1.5%] h-[92%] w-[96%] opacity-80"
        style={{
          maskImage: `url('${imgImage3}')`,
          WebkitMaskImage: `url('${imgImage3}')`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'cover',
          WebkitMaskSize: 'cover',
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute left-[-2%] top-0 h-full w-[104%] max-w-none"
            src={imgImage4}
          />
        </div>
      </div>
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
        gap-6
        text-center
        xl:items-start
        xl:text-left
      "
    >
      <div className="flex flex-col items-center gap-4 text-[#e9f4f9] xl:items-start">
        <p
          className="
            max-w-[620px]
            text-[clamp(34px,7vw,53px)]
            leading-[1.1]
            tracking-[-0.03em]
          "
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          A complete cloud-based core banking.
        </p>

        <p
          className="
            max-w-[420px]
            text-[15px]
            leading-[1.35]
            opacity-80
            md:text-[16px]
          "
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Faster time to market with our cloud-based core banking services
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
  );
}

export function CoreBankingInfo() {
  return (
    <section className="relative w-full overflow-hidden bg-[#000d12]">
      {/* Background Text */}
      <p
        className="
          pointer-events-none
          absolute
          font-['Archivo:Medium',sans-serif]
          left-[-14vw]
          top-[-2vw]
          select-none
          whitespace-nowrap
          text-[clamp(220px,52vw,572px)]
          font-medium
          leading-none
          text-transparent
          opacity-50
        "
        style={{
          WebkitTextStroke: '2px rgba(0, 90, 130, 0.42)',
          fontVariationSettings: "'wdth' 100",
        }}
      >
        CB7
      </p>

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[760px]
          max-w-[1440px]
          flex-col
          items-center
          justify-center
          gap-16
          px-6
          py-16
          xl:min-h-[620px]
          xl:flex-row
          xl:justify-between
          xl:px-20
        "
      >
        <div
          className="
      flex
      w-full
      justify-center
      xl:w-[55%]
      xl:justify-end
    "
        >
          <ContentSection />
        </div>
        <div
          className="      flex
      w-full
      justify-center
      xl:w-[45%]
      xl:justify-end"
        >
          <BankingPreview />
        </div>
      </div>
    </section>
  );
}
