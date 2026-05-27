import { Button } from "../ui/Button";

export function PaperlessCard() {
  return (
    <div className="bg-[#000d12] h-[681px] overflow-clip relative shrink-0 w-[1440px]">
      <div className="-translate-y-1/2 absolute h-[427px] left-[81px] overflow-clip rounded-[27px] top-1/2 w-[1279px]" style={{ backgroundImage: "linear-gradient(115.899deg, rgb(3, 30, 42) 12.22%, rgb(0, 13, 18) 59.256%)" }}>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Archivo:Medium',sans-serif] font-medium leading-[1.2] left-[1364.56px] opacity-50 text-[572.632px] text-[transparent] text-right top-[-160.72px] whitespace-nowrap" style={{
          WebkitTextStroke: "2px rgba(0, 90, 130, 0.42)",
          fontVariationSettings: "'wdth' 100",
        }}>
          CB7
        </p>
        <div className="-translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col font-['Archivo:Regular',sans-serif] font-normal gap-[32px] items-start left-[65px] text-[#e9f4f9] top-[calc(50%-0.22px)]">
          <p className="leading-[1.2] relative shrink-0 text-[53px] tracking-[-0.53px] w-[607.835px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Take the full advantage of going paper-less now.
          </p>
          <p className="leading-[1.3] opacity-80 relative shrink-0 text-[16px] w-[462.919px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</p>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex gap-[40px] items-start left-[757px] top-1/2">
          <Button variant="outline">Contact Us</Button>
          <Button variant="default">REQUEST DEMO</Button>
        </div>
      </div>
    </div>
  );
}
