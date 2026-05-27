import { Button } from "../ui/Button";

export function PaperlessPromo() {
  return (
    <div className="bg-[#000d12] h-[316px] overflow-clip relative shrink-0 w-[1440px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col font-['Archivo:Regular',sans-serif] font-normal gap-[32px] items-start left-[80px] text-[#e9f4f9] top-1/2">
        <p className="leading-[1.2] relative shrink-0 text-[53px] tracking-[-0.53px] w-[607.835px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Take the full advantage of going paper-less now.
        </p>
        <p className="leading-[1.3] opacity-70 relative shrink-0 text-[16px] w-[462.919px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</p>
      </div>
      <div className="-translate-y-1/2 absolute content-stretch flex gap-[40px] items-center justify-end right-[80px] top-1/2">
        <Button variant="outline">Contact Us</Button>
        <Button variant="default">REQUEST DEMO</Button>
      </div>
    </div>
  );
}
