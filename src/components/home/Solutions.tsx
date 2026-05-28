import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { TextLink } from '../ui/TextLink';
import svgPaths from '../../assets/svgs/svg-54ycx9j4u6';

const SOLUTIONS_CONFIG = {
  title: 'All of our solutions are tailor-made to your needs',
  cta: 'request demo',

  cards: [
    {
      title: 'Core Banking CB7',
      description:
        'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
      icon: svgPaths.p5b71300,
      gradientId: 'solution-gradient-1',
      gradient: {
        x1: '10.0491',
        x2: '56.4399',
        y1: '-37.7616',
        y2: '-24.0174',
      },
    },

    {
      title: 'Digital Banking N7',
      description:
        'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ',
      icon: svgPaths.p3b3d7a80,
      gradientId: 'solution-gradient-4',
      gradient: {
        x1: '9.27389',
        x2: '52.0744',
        y1: '-30.7795',
        y2: '-18.0777',
      },
    },

    {
      title: 'Open Banking',
      description:
        'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
      icon: svgPaths.p29dbb880,
      gradientId: 'solution-gradient-3',
      strokeWidth: 0.5,
      gradient: {
        x1: '11.5396',
        x2: '54.3415',
        y1: '-30.6272',
        y2: '-17.9249',
      },
    },

    {
      title: 'Loan Origination System',
      label: 'NBFC',
      description:
        'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ',
      multiPathSvg: {
        viewBox: '0 0 38.7589 38.7571',
        inset: 'inset-[20.9%_17.53%_0_0]',
        paths: [
          {
            d: svgPaths.p3aaf9f80,
            id: 'Vector',
            gradientId: 'paint0_linear_1_1473',
          },
          {
            d: svgPaths.p35e24800,
            id: 'Vector_2',
            gradientId: 'paint1_linear_1_1473',
          },
          {
            d: svgPaths.p1beea2b0,
            id: 'Vector_3',
            gradientId: 'paint2_linear_1_1473',
          },
          {
            d: svgPaths.p126a980,
            id: 'Vector_4',
            gradientId: 'paint3_linear_1_1473',
          },
        ],
        gradients: [
          {
            id: 'paint0_linear_1_1473',
            x1: '4.42716',
            x2: '24.8519',
            y1: '-19.5032',
            y2: '-13.4418',
          },
          {
            id: 'paint1_linear_1_1473',
            x1: '24.6875',
            x2: '45.1106',
            y1: '-19.5032',
            y2: '-13.4429',
          },
          {
            id: 'paint2_linear_1_1473',
            x1: '24.6891',
            x2: '45.1123',
            y1: '0.759029',
            y2: '6.81938',
          },
          {
            id: 'paint3_linear_1_1473',
            x1: '4.42558',
            x2: '24.8503',
            y1: '0.759029',
            y2: '6.82043',
          },
        ],
      },
    },

    {
      title: 'Loan Management System',
      description:
        'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ',
      label: 'NBFC',
      icon: svgPaths.p2f3b4400,
      gradientId: 'solution-gradient-5',
      gradient: {
        x1: '9.27389',
        x2: '52.0744',
        y1: '-30.7795',
        y2: '-18.0777',
      },
    },
  ],
};

type SolutionCardProps = {
  title: string;
  description: string;
  icon?: string;
  gradientId?: string;
  label?: string;
  strokeWidth?: number;
  gradient?: {
    x1: string;
    x2: string;
    y1: string;
    y2: string;
  };
  multiPathSvg?: {
    viewBox: string;
    inset: string;
    paths: Array<{
      d: string;
      id: string;
      gradientId: string;
    }>;
    gradients: Array<{
      id: string;
      x1: string;
      x2: string;
      y1: string;
      y2: string;
    }>;
  };
};

function SolutionCard({
  title,
  description,
  icon,
  gradientId,
  gradient,
  label,
  strokeWidth,
  multiPathSvg,
}: SolutionCardProps) {
  return (
    <div className="flex w-full max-w-[290px] flex-col gap-6">
      <div className="flex items-end justify-between">
        <div className="relative h-[49px] w-[47px]">
          {multiPathSvg ? (
            <div className={`absolute ${multiPathSvg.inset}`}>
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox={multiPathSvg.viewBox}
              >
                <g id="Group">
                  {multiPathSvg.paths.map((path) => (
                    <path
                      key={path.id}
                      d={path.d}
                      id={path.id}
                      stroke={`url(#${path.gradientId})`}
                    />
                  ))}
                </g>
                <defs>
                  {multiPathSvg.gradients.map((grad) => (
                    <linearGradient
                      key={grad.id}
                      gradientUnits="userSpaceOnUse"
                      id={grad.id}
                      x1={grad.x1}
                      x2={grad.x2}
                      y1={grad.y1}
                      y2={grad.y2}
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="#8B8B8B" />
                    </linearGradient>
                  ))}
                </defs>
              </svg>
            </div>
          ) : (
            <svg
              className="absolute inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 47 49"
            >
              <path
                d={icon}
                stroke={`url(#${gradientId})`}
                strokeWidth={strokeWidth}
              />

              <defs>
                <linearGradient
                  id={gradientId}
                  gradientUnits="userSpaceOnUse"
                  x1={gradient?.x1}
                  x2={gradient?.x2}
                  y1={gradient?.y1}
                  y2={gradient?.y2}
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#8B8B8B" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>

        {label && (
          <p className="text-[14px] uppercase opacity-60 text-[#E9F4F9]">
            {label}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-6 text-[#E9F4F9]">
        <h3 className="text-[22px] leading-[1.2]">{title}</h3>

        <p
          className="break-words flex-1 basis-0 font-medium leading-[1.3] min-w-0 opacity-70 text-[16px] mt-[6px] text-start"
          style={{ fontFamily: "'Archivo', sans-serif" }}
        >
          {description}
        </p>
      </div>

      <TextLink className="flex flex-col gap-[3px] items-start" />
    </div>
  );
}

export function Solutions() {
  return (
    <section className="relative w-full overflow-hidden bg-[#000d12]">
      {/* Blur */}
      <div className="pointer-events-none absolute right-[-120px] top-[220px] hidden lg:block">
        <div className="relative size-[556px]">
          <div className="absolute inset-[-35.92%]">
            <svg
              className="size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 956.772 956.772"
            >
              <g filter="url(#filter0_f_1_1493)" opacity="0.1">
                <circle
                  cx="478.386"
                  cy="478.386"
                  fill="url(#paint0_linear_1_1493)"
                  r="278.386"
                />
              </g>

              <defs>
                <filter
                  id="filter0_f_1_1493"
                  x="0"
                  y="0"
                  width="956.772"
                  height="956.772"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="100"
                    result="effect1_foregroundBlur_1_1493"
                  />
                </filter>

                <linearGradient
                  id="paint0_linear_1_1493"
                  x1="333.216"
                  x2="884.931"
                  y1="-387.128"
                  y2="-255.355"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00B4FD" />
                  <stop offset="1" stopColor="#003ACE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Container */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 px-5 py-14 sm:px-8 md:px-10 lg:flex-row lg:gap-20 lg:px-20 lg:py-16">
        {/* Left */}
        <motion.div
          className="mx-auto flex w-full max-w-[433px] flex-col items-center gap-10 lg:items-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            className="text-[30px] leading-[1.15] tracking-[-0.37px] text-[#E9F4F9] sm:text-[34px] lg:text-[37px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {SOLUTIONS_CONFIG.title}
          </h2>

          <Button variant="outline" className="w-fit">
            {SOLUTIONS_CONFIG.cta}
          </Button>
        </motion.div>

        {/* Grid */}
        <div className="grid flex-1 grid-cols-1 justify-items-center gap-x-10 gap-y-14 sm:grid-cols-2 lg:justify-items-start">
          {SOLUTIONS_CONFIG.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SolutionCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
