import svgPaths from "./svg-9xhpqbhd8q";

function Frame13() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full">
      <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[24px] text-nowrap text-right tracking-[-0.96px] whitespace-pre">Фільтри</p>
    </div>
  );
}

function Tab() {
  return (
    <div className="basis-0 bg-[rgba(201,85,85,0.1)] grow min-h-px min-w-px relative rounded-[999px] shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border border-[#c95555] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[8px] pt-[12px] px-[8px] relative w-full">
          <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c95555] text-[14px] text-nowrap whitespace-pre">Бюджет</p>
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="tab">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[8px] pl-[8px] pr-[16px] pt-[12px] relative w-full">
          <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">Заходи</p>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[999px] shrink-0 w-full" data-name="tabs">
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Tab />
      <Tab1 />
    </div>
  );
}

function Remove() {
  return (
    <div className="absolute inset-[45.83%_20.83%]" data-name="remove">
      <div className="absolute inset-[0_0_-0.01%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
          <g>
            <path d={svgPaths.p24d21cb0} fill="var(--fill-0, #343A40)" id="remove_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Період</p>
      <Frame2 />
    </div>
  );
}

function ButtonsRadiobutton() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Buttons / Radiobutton">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Buttons / Radiobutton">
          <circle cx="8" cy="8" id="Ellipse 5" r="7" stroke="var(--stroke-0, #737B8C)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <ButtonsRadiobutton />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">За поточний квартал</p>
        </div>
      </div>
    </div>
  );
}

function ButtonsRadiobutton1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Buttons / Radiobutton">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Buttons / Radiobutton">
          <circle cx="8" cy="8" id="Ellipse 5" r="7" stroke="var(--stroke-0, #737B8C)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <ButtonsRadiobutton1 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">За останні півроку</p>
        </div>
      </div>
    </div>
  );
}

function ButtonsRadiobutton2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Buttons / Radiobutton">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Buttons / Radiobutton">
          <circle cx="8" cy="8" id="Ellipse 5" r="7" stroke="var(--stroke-0, #737B8C)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <ButtonsRadiobutton2 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">За поточний рік</p>
        </div>
      </div>
    </div>
  );
}

function ButtonsRadiobutton3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Buttons / Radiobutton">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Buttons / Radiobutton">
          <circle cx="8" cy="8" id="Ellipse 5" r="7" stroke="var(--stroke-0, #737B8C)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <ButtonsRadiobutton3 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">{`За минулий рік `}</p>
        </div>
      </div>
    </div>
  );
}

function ButtonsRadiobutton4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Buttons / Radiobutton">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Buttons / Radiobutton">
          <circle cx="8" cy="8" id="Ellipse 5" r="7" stroke="var(--stroke-0, #737B8C)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <ButtonsRadiobutton4 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">За останні 5 років</p>
        </div>
      </div>
    </div>
  );
}

function ButtonsRadiobutton5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Buttons / Radiobutton">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Buttons / Radiobutton">
          <circle cx="8" cy="8" fill="var(--fill-0, #C95555)" id="Ellipse 5" r="8" />
          <circle cx="7.99981" cy="8.00037" fill="var(--fill-0, #C95555)" id="Ellipse 6" r="4.83333" stroke="var(--stroke-0, white)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <ButtonsRadiobutton5 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Обрати інший період</p>
        </div>
      </div>
    </div>
  );
}

function LucideCalendar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/calendar">
          <path d={svgPaths.p1ea97140} id="Vector" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function InputText() {
  return (
    <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[#343a40] text-[14px] text-nowrap tracking-[-0.28px]">
        <p className="leading-[16px] whitespace-pre">Обрати період</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] py-0 relative shrink-0 w-[208px]" data-name="content">
      <LucideCalendar />
      <InputText />
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border-[#d0d1d2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pc87b500} fill="var(--fill-0, #343A40)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function IconButtonStandard() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon button - standard">
      <Content1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <path d={svgPaths.p1e934100} fill="var(--fill-0, #343A40)" id="icon_2" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pl-[8px] pr-[4px] py-[10px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Aug</p>
      </div>
      <Icon1 />
    </div>
  );
}

function BuildingBlocksMenuButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Building Blocks/Menu button">
      <StateLayer1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pa1eb970} fill="var(--fill-0, #343A40)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function IconButtonStandard1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon button - standard">
      <Content2 />
    </div>
  );
}

function MonthDropDown() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Month drop down">
      <IconButtonStandard />
      <BuildingBlocksMenuButton />
      <IconButtonStandard1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pc87b500} fill="var(--fill-0, #343A40)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function IconButtonStandard2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon button - standard">
      <Content3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <path d={svgPaths.p1e934100} fill="var(--fill-0, #343A40)" id="icon_2" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pl-[8px] pr-[4px] py-[10px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">2025</p>
      </div>
      <Icon4 />
    </div>
  );
}

function BuildingBlocksMenuButton1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Building Blocks/Menu button">
      <StateLayer4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pa1eb970} fill="var(--fill-0, #343A40)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon5 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer5 />
    </div>
  );
}

function IconButtonStandard3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon button - standard">
      <Content4 />
    </div>
  );
}

function YearDropDown() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Year drop down">
      <IconButtonStandard2 />
      <BuildingBlocksMenuButton1 />
      <IconButtonStandard3 />
    </div>
  );
}

function SelectionRow() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Selection Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-0 relative size-full">
          <MonthDropDown />
          <YearDropDown />
        </div>
      </div>
    </div>
  );
}

function Sunday() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Sunday">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center tracking-[0.5px] w-[9px]">
        <p className="leading-[16px]">S</p>
      </div>
    </div>
  );
}

function Monday() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Monday">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center tracking-[0.5px] w-[14px]">
        <p className="leading-[16px]">M</p>
      </div>
    </div>
  );
}

function Tuesday() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Tuesday">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center tracking-[0.5px] w-[10px]">
        <p className="leading-[16px]">T</p>
      </div>
    </div>
  );
}

function Wednesday() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Wednesday">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[16px] text-[#343a40] text-[14px] text-center tracking-[0.5px]">
        <p className="leading-[16px]">W</p>
      </div>
    </div>
  );
}

function Thursday() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Thursday">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center tracking-[0.5px] w-[10px]">
        <p className="leading-[16px]">T</p>
      </div>
    </div>
  );
}

function Friday() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Friday">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center tracking-[0.5px] w-[8px]">
        <p className="leading-[16px]">F</p>
      </div>
    </div>
  );
}

function Saturday() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Saturday">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center tracking-[0.5px] w-[9px]">
        <p className="leading-[16px]">S</p>
      </div>
    </div>
  );
}

function DaysOfTheWeek() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Days of the week">
      <Sunday />
      <Monday />
      <Tuesday />
      <Wednesday />
      <Thursday />
      <Friday />
      <Saturday />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">26</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="container">
      <StateLayer6 />
    </div>
  );
}

function Sunday1() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Sunday">
      <Container />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">27</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="container">
      <StateLayer7 />
    </div>
  );
}

function Monday1() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Monday">
      <Container1 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">28</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="container">
      <StateLayer8 />
    </div>
  );
}

function Tuesday1() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tuesday">
      <Container2 />
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">29</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="container">
      <StateLayer9 />
    </div>
  );
}

function Wednesday1() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Wednesday">
      <Container3 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">30</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="container">
      <StateLayer10 />
    </div>
  );
}

function Thursday1() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Thursday">
      <Container4 />
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">31</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="container">
      <StateLayer11 />
    </div>
  );
}

function Friday1() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Friday">
      <Container5 />
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="container">
      <StateLayer12 />
    </div>
  );
}

function Saturday1() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Saturday">
      <Container6 />
    </div>
  );
}

function Week() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Week 1">
      <Sunday1 />
      <Monday1 />
      <Tuesday1 />
      <Wednesday1 />
      <Thursday1 />
      <Friday1 />
      <Saturday1 />
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer13 />
    </div>
  );
}

function Sunday2() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Sunday">
      <Container7 />
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer14 />
    </div>
  );
}

function Monday2() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Monday">
      <Container8 />
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer15 />
    </div>
  );
}

function Tuesday2() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tuesday">
      <Container9 />
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer16 />
    </div>
  );
}

function Wednesday2() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Wednesday">
      <Container10 />
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer17 />
    </div>
  );
}

function Thursday2() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Thursday">
      <Container11 />
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">7</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer18 />
    </div>
  );
}

function Friday2() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Friday">
      <Container12 />
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer19 />
    </div>
  );
}

function Saturday2() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Saturday">
      <Container13 />
    </div>
  );
}

function Week1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Week 6">
      <Sunday2 />
      <Monday2 />
      <Tuesday2 />
      <Wednesday2 />
      <Thursday2 />
      <Friday2 />
      <Saturday2 />
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="container">
      <StateLayer20 />
    </div>
  );
}

function Sunday3() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-0 top-0 w-[36.857px]" data-name="Sunday">
      <Container14 />
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center tracking-[0.5px] w-[19px]">
        <p className="leading-[16px]">11</p>
      </div>
    </div>
  );
}

function Tuesday3() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[75.71px] top-0 w-[36.857px]" data-name="Tuesday">
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-[-52.96%] right-[71.71%]" data-name="Range highlight end" />
      <div className="absolute bottom-0 flex h-[32px] items-center justify-center left-[calc(50%-0.43px)] translate-x-[-50%] w-[40px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#faeeee] h-[32px] w-[40px]" data-name="Range highlight middle" />
        </div>
      </div>
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-1/2 right-[-31.25%]" data-name="Range highlight start" />
      <StateLayer21 />
    </div>
  );
}

function StateLayer22() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center tracking-[0.5px] w-[19px]">
        <p className="leading-[16px]">12</p>
      </div>
    </div>
  );
}

function Wednesday3() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[113.57px] top-0 w-[36.857px]" data-name="Wednesday">
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-[-31.25%] right-1/2" data-name="Range highlight end" />
      <div className="absolute bottom-0 flex h-[32px] items-center justify-center left-[calc(50%-0.43px)] translate-x-[-50%] w-[40px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#faeeee] h-[32px] w-[40px]" data-name="Range highlight middle" />
        </div>
      </div>
      <div className="absolute bottom-0 flex h-[32px] items-center justify-center left-[calc(50%-0.29px)] translate-x-[-50%] w-[40px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#faeeee] h-[32px] w-[40px]" data-name="Range highlight middle" />
        </div>
      </div>
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-1/2 right-[-31.25%]" data-name="Range highlight start" />
      <StateLayer22 />
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center tracking-[0.5px] w-[19px]">
        <p className="leading-[16px]">13</p>
      </div>
    </div>
  );
}

function Thursday3() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[151.43px] top-0 w-[36.857px]" data-name="Thursday">
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-[-31.25%] right-1/2" data-name="Range highlight end" />
      <div className="absolute bottom-0 flex h-[32px] items-center justify-center left-[calc(50%-0.43px)] translate-x-[-50%] w-[40px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#faeeee] h-[32px] w-[40px]" data-name="Range highlight middle" />
        </div>
      </div>
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-1/2 right-[-31.25%]" data-name="Range highlight start" />
      <StateLayer23 />
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">14</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="container">
      <StateLayer24 />
    </div>
  );
}

function Friday3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[32px] items-center justify-center left-[189.29px] top-0 w-[36.857px]" data-name="Friday">
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-[50.39%] right-[-31.64%]" data-name="Range highlight start" />
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-[-14.73%] right-[33.48%]" data-name="Range highlight start" />
      <Container15 />
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">15</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="container">
      <StateLayer25 />
    </div>
  );
}

function Saturday3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[32px] items-center justify-center left-[227.14px] top-0 w-[36.857px]" data-name="Saturday">
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-[50.78%] right-[-32.03%]" data-name="Range highlight start" />
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-[-14.34%] right-[33.09%]" data-name="Range highlight start" />
      <Container16 />
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#c95555] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="container">
      <StateLayer26 />
    </div>
  );
}

function Monday3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[32px] items-center justify-center left-[37.86px] top-0 w-[36.857px]" data-name="Monday">
      <Container17 />
    </div>
  );
}

function Week2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Week 7">
      <Sunday3 />
      <Tuesday3 />
      <Wednesday3 />
      <Thursday3 />
      <Friday3 />
      <Saturday3 />
      <Monday3 />
    </div>
  );
}

function StateLayer27() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0 w-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center tracking-[0.5px] w-[19px]">
        <p className="leading-[16px]">16</p>
      </div>
    </div>
  );
}

function Sunday4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Sunday">
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-[-29.17%] right-[49.62%]" data-name="Range highlight end" />
      <div className="absolute bottom-0 flex h-[32px] items-center justify-center left-[calc(50%+0.14px)] translate-x-[-50%] w-[40px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#faeeee] h-[32px] w-[40px]" data-name="Range highlight middle" />
        </div>
      </div>
      <div className="absolute bg-[#faeeee] bottom-0 h-[32px] left-[71.59%] right-[-51.14%]" data-name="Range highlight start" />
      <StateLayer27 />
    </div>
  );
}

function StateLayer28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#c95555] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="container">
      <StateLayer28 />
    </div>
  );
}

function Monday4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Monday">
      <Container18 />
    </div>
  );
}

function StateLayer29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">18</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="container">
      <StateLayer29 />
    </div>
  );
}

function Tuesday4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tuesday">
      <Container19 />
    </div>
  );
}

function StateLayer30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">19</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="container">
      <StateLayer30 />
    </div>
  );
}

function Wednesday4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Wednesday">
      <Container20 />
    </div>
  );
}

function StateLayer31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">20</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="container">
      <StateLayer31 />
    </div>
  );
}

function Thursday4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Thursday">
      <Container21 />
    </div>
  );
}

function StateLayer32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">21</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="container">
      <StateLayer32 />
    </div>
  );
}

function Friday4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Friday">
      <Container22 />
    </div>
  );
}

function StateLayer33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">22</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="container">
      <StateLayer33 />
    </div>
  );
}

function Saturday4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Saturday">
      <Container23 />
    </div>
  );
}

function Week3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Week 8">
      <Sunday4 />
      <Monday4 />
      <Tuesday4 />
      <Wednesday4 />
      <Thursday4 />
      <Friday4 />
      <Saturday4 />
    </div>
  );
}

function StateLayer34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">23</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer34 />
    </div>
  );
}

function Sunday5() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Sunday">
      <Container24 />
    </div>
  );
}

function StateLayer35() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">24</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer35 />
    </div>
  );
}

function Monday5() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Monday">
      <Container25 />
    </div>
  );
}

function StateLayer36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">25</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer36 />
    </div>
  );
}

function Tuesday5() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tuesday">
      <Container26 />
    </div>
  );
}

function StateLayer37() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">26</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer37 />
    </div>
  );
}

function Wednesday5() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Wednesday">
      <Container27 />
    </div>
  );
}

function StateLayer38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">27</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer38 />
    </div>
  );
}

function Thursday5() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Thursday">
      <Container28 />
    </div>
  );
}

function StateLayer39() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">28</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer39 />
    </div>
  );
}

function Friday5() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Friday">
      <Container29 />
    </div>
  );
}

function StateLayer40() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">29</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer40 />
    </div>
  );
}

function Saturday5() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Saturday">
      <Container30 />
    </div>
  );
}

function Week4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Week 9">
      <Sunday5 />
      <Monday5 />
      <Tuesday5 />
      <Wednesday5 />
      <Thursday5 />
      <Friday5 />
      <Saturday5 />
    </div>
  );
}

function StateLayer41() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">30</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer41 />
    </div>
  );
}

function Sunday6() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Sunday">
      <Container31 />
    </div>
  );
}

function StateLayer42() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer42 />
    </div>
  );
}

function Monday6() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Monday">
      <Container32 />
    </div>
  );
}

function StateLayer43() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer43 />
    </div>
  );
}

function Tuesday6() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tuesday">
      <Container33 />
    </div>
  );
}

function StateLayer44() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer44 />
    </div>
  );
}

function Wednesday6() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Wednesday">
      <Container34 />
    </div>
  );
}

function StateLayer45() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer45 />
    </div>
  );
}

function Thursday6() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Thursday">
      <Container35 />
    </div>
  );
}

function StateLayer46() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer46 />
    </div>
  );
}

function Friday6() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Friday">
      <Container36 />
    </div>
  );
}

function StateLayer47() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] relative shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer47 />
    </div>
  );
}

function Saturday6() {
  return (
    <div className="basis-0 content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Saturday">
      <Container37 />
    </div>
  );
}

function Week5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Week 10">
      <Sunday6 />
      <Monday6 />
      <Tuesday6 />
      <Wednesday6 />
      <Thursday6 />
      <Friday6 />
      <Saturday6 />
    </div>
  );
}

function CalendarGrid() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Calendar grid">
      <DaysOfTheWeek />
      <Week />
      <Week1 />
      <Week2 />
      <Week3 />
      <Week4 />
      <Week5 />
    </div>
  );
}

function DatePicker() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Date Picker">
      <SelectionRow />
      <CalendarGrid />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      <DatePicker />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <TextField />
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#49454f] text-[12px] tracking-[-0.24px] w-full">Період</p>
      <Frame10 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Checkbox />
      <Checkbox1 />
      <Checkbox2 />
      <Checkbox3 />
      <Checkbox4 />
      <Checkbox5 />
      <Frame11 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame15 />
    </div>
  );
}

function Remove1() {
  return (
    <div className="absolute inset-[45.83%_20.83%]" data-name="remove">
      <div className="absolute inset-[0_0_-0.01%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
          <g>
            <path d={svgPaths.p24d21cb0} fill="var(--fill-0, #343A40)" id="remove_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Напрямок</p>
      <Frame4 />
    </div>
  );
}

function InputText1() {
  return (
    <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#343a40] text-[14px] text-nowrap tracking-[-0.28px]">
        <p className="leading-[16px] whitespace-pre">Пошук напрямку</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 w-[208px]" data-name="content">
      <InputText1 />
    </div>
  );
}

function IconsSearch24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons/search_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons/search_24px">
          <path clipRule="evenodd" d={svgPaths.p1f615a40} fill="var(--fill-0, #343A40)" fillOpacity="0.5" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer48() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <IconsSearch24Px />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer48 />
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[40px]" data-name="leading-icon">
      <Container38 />
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Content5 />
      <LeadingIcon />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox6 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Освіта</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox8 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Транспорт, зв’язок, енергетика, інформаційні технології</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox10 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Культура і мистецтво</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox12 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Охорона здоров’я</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox14 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Архітектура і містобудування</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox16 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Туризм, дозвілля, молодь</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox18 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Фізкультура та спорт</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox20 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Комунальні підприємства</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox22 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Благоустрій міста та охорона навколишнього середовища</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox24() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox24 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Громадська участь</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Checkbox7 />
      <Checkbox9 />
      <Checkbox11 />
      <Checkbox13 />
      <Checkbox15 />
      <Checkbox17 />
      <Checkbox19 />
      <Checkbox21 />
      <Checkbox23 />
      <Checkbox25 />
    </div>
  );
}

function Scrollbar() {
  return (
    <div className="absolute h-[320px] right-0 top-[96px] w-[4px]" data-name="scrollbar">
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[4px]">
        <div className="flex-none h-[4px] rotate-[270deg] w-[320px]">
          <div className="bg-white rounded-[4px] size-full" data-name="track" />
        </div>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-0 top-0 w-[4px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#c95555] h-[4px] rounded-[100px] w-[120px]" data-name="thumb" />
        </div>
      </div>
    </div>
  );
}

function RadioButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame5 />
      <TextField1 />
      <Frame16 />
      <Scrollbar />
    </div>
  );
}

function Selector() {
  return (
    <div className="content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="selector">
      <RadioButtons />
    </div>
  );
}

function Remove2() {
  return (
    <div className="absolute inset-[45.83%_20.83%]" data-name="remove">
      <div className="absolute inset-[0_0_-0.01%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
          <g>
            <path d={svgPaths.p24d21cb0} fill="var(--fill-0, #343A40)" id="remove_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Програми</p>
      <Frame7 />
    </div>
  );
}

function InputText2() {
  return (
    <div className="content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#343a40] text-[14px] text-nowrap tracking-[-0.28px]">
        <p className="leading-[16px] whitespace-pre">Пошук програми</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 w-[208px]" data-name="content">
      <InputText2 />
    </div>
  );
}

function IconsSearch24Px1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons/search_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons/search_24px">
          <path clipRule="evenodd" d={svgPaths.p1f615a40} fill="var(--fill-0, #343A40)" fillOpacity="0.5" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer49() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <IconsSearch24Px1 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer49 />
    </div>
  );
}

function LeadingIcon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[40px]" data-name="leading-icon">
      <Container39 />
    </div>
  );
}

function TextField2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Content6 />
      <LeadingIcon1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full">
      <TextField2 />
    </div>
  );
}

function RadioButtons1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame8 />
      <Frame12 />
    </div>
  );
}

function Selector1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="selector">
      <RadioButtons1 />
    </div>
  );
}

export default function FilterBudgetAllOpenOtherPeriodDatepicker() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[16px] size-full" data-name="Filter – Budget – All open – Other period – Datepicker">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative size-full">
          <Frame13 />
          <Tabs />
          <Frame14 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
                <path d="M0 0.5H264" id="Vector 2" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.2" />
              </svg>
            </div>
          </div>
          <Selector />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
                <path d="M0 0.5H264" id="Vector 2" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.2" />
              </svg>
            </div>
          </div>
          <Selector1 />
        </div>
      </div>
    </div>
  );
}