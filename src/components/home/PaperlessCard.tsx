import { Button } from '../ui/Button';

export function PaperlessCard() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div
        className="
          relative
          overflow-hidden
          rounded-[20px]
          md:rounded-[24px]
          lg:rounded-[27px]
          max-w-[1280px]
          mx-auto
          min-h-[520px]
          md:min-h-[420px]
          px-6
          py-10
          md:px-10
          lg:px-[65px]
        "
        style={{
          background:
            'linear-gradient(115.899deg, rgb(3, 30, 42) 12.22%, rgb(0, 13, 18) 59.256%)',
        }}
      >
        {/* Background CB7 */}
        <div
          className="
            absolute
            right-[-40px]
            md:right-[-60px]
            top-[-20px]
            md:top-[-80px]
            pointer-events-none
            select-none
            opacity-50
          "
        >
          <p
            className="
              font-['Archivo:Medium',sans-serif]
              font-medium
              leading-none
              text-transparent
              whitespace-nowrap
              text-[180px]
              sm:text-[240px]
              md:text-[320px]
              lg:text-[420px]
              xl:text-[572px]
            "
            style={{
              WebkitTextStroke: '2px rgba(0, 90, 130, 0.42)',
              fontVariationSettings: "'wdth' 100",
            }}
          >
            CB7
          </p>
        </div>

        <div
          className="
            relative
            z-10
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            justify-center
            gap-10
            h-full
            min-h-[520px]
          md:min-h-[420px]

          "
        >
          {/* Left Content */}
          <div className="max-w-[620px]">
            <h2
              className="
                font-['Archivo:Regular',sans-serif]
                text-[#e9f4f9]
                leading-[1.15]
                tracking-[-0.02em]
                text-[32px]
                sm:text-[40px]
                md:text-[46px]
                lg:text-[53px]
              "
              style={{
                fontVariationSettings: "'wdth' 100",
              }}
            >
              Take the full advantage of going paper-less now.
            </h2>

            <p
              className="break-words flex-1 basis-0 font-medium leading-[1.3] min-w-0 opacity-70 text-[16px] mt-8 text-start"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              CB7 helps your financial institution improve the client
              experience, automate and optimize procedures, simplify banking
              operations
            </p>
          </div>

          {/* Buttons */}
          <div
            className="
              relative
              z-10
              flex
              flex-col
              sm:flex-row
              gap-4
              mx-auto
              lg:w-auto
            "
          >
            <Button variant="outline" className="w-full sm:w-auto">
              Contact Us
            </Button>

            <Button variant="default" className="w-full sm:w-auto">
              REQUEST DEMO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
