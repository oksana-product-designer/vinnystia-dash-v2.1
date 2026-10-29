function StateLayer() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center tracking-[0.5px] w-[19px]">
        <p className="leading-[16px]">13</p>
      </div>
    </div>
  );
}

export default function Thursday() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Thursday">
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-[-31.25%] right-1/2" data-name="Range highlight end" />
      <div className="absolute bottom-0 flex h-[32px] items-center justify-center left-[calc(50%-0.43px)] translate-x-[-50%] w-[40px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#faeeee] h-[32px] w-[40px]" data-name="Range highlight middle" />
        </div>
      </div>
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-1/2 right-[-31.25%]" data-name="Range highlight start" />
      <StateLayer />
    </div>
  );
}