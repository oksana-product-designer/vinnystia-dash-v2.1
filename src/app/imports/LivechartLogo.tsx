function Frame() {
  return (
    <div className="content-stretch flex gap-[1.594px] h-[2px] items-start relative shrink-0 w-full">
      <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
      <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
      <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
      <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
      <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Open_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#3c4d5d] text-[15.307px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        LiveCharts
      </p>
      <Frame />
    </div>
  );
}

function LiveChartsLogoRaw() {
  return (
    <div className="absolute content-stretch flex gap-[9.567px] items-center left-[calc(50%-0.01px)] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="LiveCharts logo RAW">
      <Frame1 />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#3c4d5d] h-full shrink-0 w-[0.638px]" />
      </div>
      <p className="font-['Open_Sans',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#3c4d5d] text-[8px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Powered by LaSoft
        <br aria-hidden="true" />
        Innovation Lab
      </p>
    </div>
  );
}

export default function LivechartLogo() {
  return (
    <div className="relative size-full" data-name="livechart logo">
      <LiveChartsLogoRaw />
    </div>
  );
}