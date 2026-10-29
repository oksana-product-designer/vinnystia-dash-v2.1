import svgPaths from "./svg-f094l9mggz";

function InputText() {
  return (
    <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[12px] text-nowrap tracking-[-0.24px]">
        <p className="leading-[16px]">10</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-center justify-center relative shrink-0 w-[16px]" data-name="content">
      <InputText />
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="keyboard_arrow_down">
          <mask height="16" id="mask0_15_654" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_15_654)">
            <path d={svgPaths.p156e8100} fill="var(--fill-0, #343A40)" id="keyboard_arrow_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <KeyboardArrowDown />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-0 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="state-layer">
      <Content />
      <Frame1 />
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-col items-center relative rounded-[999px] shrink-0" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px] text-nowrap">Показувати на сторінці</p>
      <TextField />
    </div>
  );
}

function LucideIconsChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide icons/chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide icons/chevron-left">
          <path d={svgPaths.p2e3b0b80} fill="var(--fill-0, #343A40)" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function PaginationPrev() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[38px]" data-name="pagination-prev">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] size-full">
        <LucideIconsChevronLeft />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#c95555] text-[16px] text-nowrap">1</p>
    </div>
  );
}

function PaginationItem() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-full">
        <TextText />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c95555] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap">2</p>
    </div>
  );
}

function PaginationItem1() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-full">
        <TextText1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap">3</p>
    </div>
  );
}

function PaginationItem2() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-full">
        <TextText2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap">4</p>
    </div>
  );
}

function PaginationItem3() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-full">
        <TextText3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap">5</p>
    </div>
  );
}

function PaginationItem4() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-full">
        <TextText4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap">6</p>
    </div>
  );
}

function PaginationItem5() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-full">
        <TextText5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap">...</p>
    </div>
  );
}

function PaginationItem6() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-full">
        <TextText6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap">11</p>
    </div>
  );
}

function PaginationItem7() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-full">
        <TextText7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function LucideIconsChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide icons/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide icons/chevron-right">
          <path d={svgPaths.p704a2f0} fill="var(--fill-0, #343A40)" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function PaginationNext() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[38px]" data-name="pagination-next">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] size-full">
        <LucideIconsChevronRight />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function PageItems() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[4px] shrink-0" data-name="page items">
      <PaginationPrev />
      <PaginationItem />
      <PaginationItem1 />
      <PaginationItem2 />
      <PaginationItem3 />
      <PaginationItem4 />
      <PaginationItem5 />
      <PaginationItem6 />
      <PaginationItem7 />
      <PaginationNext />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full">
      <Frame />
      <PageItems />
    </div>
  );
}