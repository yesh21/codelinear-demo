import svgPaths from '../../assets/svgs/svg-54ycx9j4u6';
import { Button } from '../ui/Button';
import { TextLink } from '../ui/TextLink';

export function Insights() {
  return (
    <section className="relative w-full overflow-hidden bg-[#000d12]">
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[15%] h-[40rem] w-[40rem] rounded-full bg-gradient-to-r from-[#00B4FD] to-[#003ACE] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center lg:items-start gap-12">
            <h2
              className="max-w-[460px] text-4xl leading-[1.2] tracking-[-0.03em] text-[#e9f4f9] md:text-5xl"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Get yourself up-to-speed on all the things happening in fintech
            </h2>

            <Button variant="outline">Insights</Button>
          </div>

          <div className="flex flex-col gap-[29px]">
            <div className="grid min-h-[318px] overflow-hidden rounded-[18px] bg-[#01141b] md:grid-cols-[295px_1fr]">
              <div className="flex items-center justify-center p-6">
                <div className="relative flex h-[267px] w-[295px] items-center justify-center overflow-hidden rounded-[8px] bg-[#07193c]">
                  <div className="relative h-[218.18px] w-[257.198px]">
                    <svg
                      className="absolute inset-0 h-full w-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 257.198 218.18"
                    >
                      <g id="Frame 55">
                        <path
                          d={svgPaths.p24c12780}
                          fill="var(--fill-0, #00B4FD)"
                          id="Vector"
                        />

                        <path
                          d={svgPaths.p3f579070}
                          fill="var(--fill-0, #00B4FD)"
                          id="Vector_2"
                        />

                        <path
                          d={svgPaths.p6cf0600}
                          fill="var(--fill-0, #00B4FD)"
                          id="Vector_3"
                        />

                        <path
                          d={svgPaths.p28b12280}
                          fill="var(--fill-0, #00B4FD)"
                          id="Vector_4"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between px-4 py-6">
                <div className="space-y-[11px]">
                  <p className="font-['Chivo_Mono',_monospace] text-[12px] uppercase text-[#2490bb] tracking-wider opacity-80">
                    Getting Started
                  </p>

                  <h3
                    className="max-w-[289px] text-[27px] leading-[1.2] text-[#e9f4f9]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    How to transition from a traditional to a digital bank
                  </h3>

                  <div className="flex gap-[14px] text-[14px] text-[#64a8c4]">
                    <span>David Grohl</span>
                    <span>17/08/24</span>
                  </div>
                </div>

                <button className="mt-8 rounded-[10px] border border-[rgba(233,244,249,0.5)] py-[10px] text-[12px] uppercase text-[rgba(233,244,249,0.5)] transition hover:border-white hover:text-white">
                  Read More
                </button>
              </div>
            </div>

            <div className="grid gap-[29px] md:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="relative min-h-[318px] overflow-hidden rounded-[18px] bg-[#01141b] px-4 py-6"
                >
                  <div className="flex flex-col gap-[11px]">
                  <p className="font-['Chivo_Mono',_monospace] text-[12px] uppercase text-[#2490bb] tracking-wider opacity-80">
                      Getting Started
                    </p>

                    <h3
                      className="max-w-[259px] text-[27px] leading-[1.2] text-[#e9f4f9]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      How to transition from a traditional to a digital bank
                    </h3>

                    <div className="flex gap-[14px] text-[14px] text-[#64a8c4]">
                      <span>David Grohl</span>
                      <span>17/08/24</span>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button className="absolute bottom-4 left-4 right-4 rounded-[10px] border border-[rgba(233,244,249,0.5)] py-[10px] text-[12px] uppercase text-[rgba(233,244,249,0.5)] transition hover:border-white hover:text-white">
                    Read More
                  </button>
                </div>
              ))}
            </div>

            {/* FOOTER LINK */}
            <div className="flex justify-end">
              <TextLink textLabel="read all insights"></TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
