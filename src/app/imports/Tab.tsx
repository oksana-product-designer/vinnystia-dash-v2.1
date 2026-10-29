import svgPaths from "./svg-vmt0spnopo";

function Visibility() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="visibility">
          <mask height="16" id="mask0_57_83" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_57_83)">
            <path d={svgPaths.p145d9d00} fill="var(--fill-0, #343A40)" id="visibility_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap">5 283</p>
    </div>
  );
}

export default function Tab() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[999px] size-full" data-name="tab">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <Visibility />
          <Frame />
        </div>
      </div>
    </div>
  );
}