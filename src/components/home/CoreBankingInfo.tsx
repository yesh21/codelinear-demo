import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { TextLink } from '../ui/TextLink';
import { imgImage3 } from '../../assets/svgs/svg-mwqa7';
import imgImage4 from '../../assets/images/cf6d5ba6cd6512a5bf998febcf101b68f11336d4.png';

function BankingDesktopPreview() {
  return (
    <motion.div
      className="
        relative
        h-[clamp(280px,62vw,470px)]
        w-[min(98vw,760px)]
        left-[25%]
      "
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
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
    </motion.div>
  );
}

function ContentSection() {
  return (
    <motion.div
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
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
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
    </motion.div>
  );
}

export function CoreBankingInfo() {
  return (
    <section className="relative w-full overflow-hidden bg-[#000d12]">
      {/* Background Text */}
{/* Background Text */}
<div
  className="
    pointer-events-none
    absolute
    left-[-14vw]
    top-[-2vw]
    select-none
  "
>
  <div className="relative">
    <p
      className="
        font-['Archivo:Medium',sans-serif]
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

        // Fade toward LEFT-BOTTOM
        WebkitMaskImage: `
          linear-gradient(
            to top right,
            transparent 0%,
            rgba(0,0,0,0.15) 12%,
            rgba(0,0,0,0.7) 28%,
            black 45%,
            black 100%
          )
        `,
        maskImage: `
          linear-gradient(
            to top right,
            transparent 0%,
            rgba(0,0,0,0.15) 12%,
            rgba(0,0,0,0.7) 28%,
            black 45%,
            black 100%
          )
        `,
      }}
    >
      CB7
    </p>

    {/* Extra overlay to fully hide stroke on left-bottom */}
    <div
      className="
        absolute inset-0
        bg-[radial-gradient(circle_at_bottom_left,rgba(0,13,18,1)_0%,rgba(0,13,18,0.9)_18%,rgba(0,13,18,0.45)_38%,transparent_65%)]
      "
    />
  </div>
</div>

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
          <BankingDesktopPreview />
        </div>
      </div>
    </section>
  );
}
