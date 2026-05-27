import { Button } from "../ui/Button";

export function PaperlessPromo() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Content */}
      <div
        className="
            relative
            z-10
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-10
            h-full
          "
      >
        {/* Left Content */}
        <div className="max-w-[620px] mx-auto">
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
            className="
                mt-6
                text-[#e9f4f9]
                opacity-80
                leading-[1.6]
                text-[15px]
                md:text-[16px]
                max-w-[470px]
              "
            style={{
              fontVariationSettings: "'wdth' 100",
            }}
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
          <Button
            variant="outline"
            className="w-full sm:w-auto"
          >
            Contact Us
          </Button>

          <Button
            variant="default"
            className="w-full sm:w-auto"
          >
            REQUEST DEMO
          </Button>
        </div>
      </div>
    </section>
  );
}