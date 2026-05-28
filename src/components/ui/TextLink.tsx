import svgPaths from '../../assets/svgs/svg-54ycx9j4u6';

type TextLinkProps = {
  className?: string;
  textLabel?: string;
};

function TextLink({ className, textLabel = 'learn more' }: TextLinkProps) {
  return (
    <div
      className={
        className ||
        'content-stretch flex flex-col gap-[3px] items-start relative'
      }
    >
      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#00b4fd] text-[14px] text-right uppercase whitespace-nowrap">
          {textLabel}
        </p>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div
              className="h-[14.505px] overflow-clip relative w-[13.569px]"
              data-name="3"
            >
              <div className="absolute flex items-center justify-center left-[0.53px] size-[11.58px] top-[1.23px]">
                <div className="flex-none rotate-45">
                  <div className="h-[8.422px] relative w-[7.954px]">
                    <div className="absolute inset-[-4.16%_-7.35%_0_-1.47%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 8.65572 8.77279"
                      >
                        <g id="Frame 58">
                          <path
                            d={svgPaths.p2fcc2700}
                            id="Vector"
                            stroke="var(--stroke-0, #00B4FD)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0.935782"
                          />
                          <path
                            d={svgPaths.p5869e80}
                            id="Vector_2"
                            stroke="var(--stroke-0, #00B4FD)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0.935782"
                          />
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
      <div className={`h-0 relative shrink-0 w-[32.577px]`}>
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 32.5773 1"
          >
            <line
              id="Line 1"
              stroke="var(--stroke-0, #00B4FD)"
              x2="32.5773"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export { TextLink };
