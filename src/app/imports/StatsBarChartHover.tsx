import svgPaths from "./svg-lg2cx93nlu";

function Group() {
  return (
    <div className="absolute inset-[8.16%_1.4%_8.07%_1.43%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174 61">
        <g id="Group">
          <path d={svgPaths.pce8b380} fill="var(--fill-0, #FCFCFC)" id="Vector" />
          <path d={svgPaths.p102c7d00} fill="var(--fill-0, #C62122)" id="Vector_2" />
          <path d={svgPaths.p90f4000} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p27fcfd00} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p1a7fd1c0} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1360e500} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p890a900} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p3062c400} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p2fc6a270} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p35ea2f00} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.p1a19ed00} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.p2132cf00} fill="var(--fill-0, black)" id="Vector_12" />
          <path d={svgPaths.pef5e800} fill="var(--fill-0, black)" id="Vector_13" />
          <path d={svgPaths.p27d4bb30} fill="var(--fill-0, black)" id="Vector_14" />
          <path d={svgPaths.p2ca91980} fill="var(--fill-0, black)" id="Vector_15" />
          <path d={svgPaths.p3ad59d00} fill="var(--fill-0, black)" id="Vector_16" />
          <path d={svgPaths.p1996ba80} fill="var(--fill-0, black)" id="Vector_17" />
          <path d={svgPaths.p34572370} fill="var(--fill-0, black)" id="Vector_18" />
          <path d={svgPaths.p27d88080} fill="var(--fill-0, black)" id="Vector_19" />
          <path d={svgPaths.p27ca7700} fill="var(--fill-0, #010101)" id="Vector_20" />
          <path d={svgPaths.p272f3e00} fill="var(--fill-0, #010101)" id="Vector_21" />
          <path d={svgPaths.p1ea86d00} fill="var(--fill-0, #010101)" id="Vector_22" />
          <path d={svgPaths.p1af24770} fill="var(--fill-0, #010101)" id="Vector_23" />
        </g>
      </svg>
    </div>
  );
}

function LogoMain() {
  return (
    <div className="absolute h-[72px] left-[60px] overflow-clip top-1/2 translate-y-[-50%] w-[179px]" data-name="logo-main (1) 1">
      <Group />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex font-['VinnytsiaSansReg:Book',sans-serif] gap-[24px] items-center leading-[20px] not-italic right-[60px] text-[#343a40] text-[16px] text-nowrap top-[calc(50%-18.5px)] tracking-[-0.32px] translate-y-[-50%] whitespace-pre" data-name="menu">
      <p className="relative shrink-0">Туристу</p>
      <p className="relative shrink-0">Інвестору</p>
      <p className="relative shrink-0">English</p>
    </div>
  );
}

function LucideSearch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/search">
          <path d={svgPaths.p1cbce280} id="Vector" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideEyeOff() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/eye-off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/eye-off">
          <path d={svgPaths.p14bb6180} id="Vector" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <LucideSearch />
      <LucideEyeOff />
    </div>
  );
}

function Menu1() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center right-[60px] top-[calc(50%+15px)] translate-y-[-50%]" data-name="menu">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#343a40] text-[24px] text-nowrap tracking-[-0.48px] whitespace-pre">Туристу</p>
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#343a40] text-[24px] text-nowrap tracking-[-0.48px] whitespace-pre">Інвестору</p>
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#343a40] text-[24px] text-nowrap tracking-[-0.48px] whitespace-pre">English</p>
      <Frame18 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[96px] relative shrink-0 w-[1440px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LogoMain />
      <Menu />
      <Menu1 />
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="relative shrink-0 w-full" data-name="breadcrumbs">
      <div className="size-full">
        <div className="content-stretch flex gap-[8px] items-start leading-[20px] not-italic px-[60px] py-[4px] relative text-[#343a40] text-[14px] text-nowrap w-full whitespace-pre">
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0">Вінницька міська рада</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book','Noto_Sans_Math',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0">⟶</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0">Сервіси міської ради</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book','Noto_Sans_Math',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0">⟶</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0">Геопортал</p>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px not-italic relative shrink-0" data-name="Text and supporting text">
      <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#343a40] text-[28px] tracking-[-1.12px] w-full">Аналітичний графік бюджету громади</p>
      <p className="[white-space-collapse:collapse] font-['VinnytsiaSansReg:Book','Noto_Sans_Math',sans-serif] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(52,58,64,0.6)] text-nowrap tracking-[-0.28px] w-full">
        <span>{`Переглянути детальну інформацію про проєктам. `}</span>
        <span className="font-['VinnytsiaSansBold:Bold','Noto_Sans_Math',sans-serif] not-italic text-[#c95555]">{`Перейти  ⟶`}</span>
      </p>
    </div>
  );
}

function GlobeUk() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="globe_uk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="globe_uk">
          <mask height="24" id="mask0_14_2942" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_14_2942)">
            <path d={svgPaths.p3a0136c0} fill="var(--fill-0, #343A40)" id="globe_uk_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MapIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="map icon">
      <GlobeUk />
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[16px] pr-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="tab">
      <MapIcon />
    </div>
  );
}

function Leaderboard() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="leaderboard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="leaderboard">
          <mask height="24" id="mask0_14_2932" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_14_2932)">
            <path d={svgPaths.p12104f00} fill="var(--fill-0, white)" id="leaderboard_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ChartIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chart icon">
      <Leaderboard />
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-[#c95555] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border border-[rgba(201,85,85,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <ChartIcon />
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[999px] shrink-0" data-name="tabs">
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Tab />
      <Tab1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-end justify-center pb-0 pt-[24px] px-[60px] relative w-full">
          <TextAndSupportingText />
          <Tabs />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full">
      <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[24px] text-nowrap text-right tracking-[-0.96px] whitespace-pre">Фільтри</p>
    </div>
  );
}

function Tab2() {
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

function Tab3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="tab">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[8px] pl-[8px] pr-[16px] pt-[12px] relative w-full">
          <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">Проєкти</p>
        </div>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[999px] shrink-0 w-full" data-name="tabs">
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Tab2 />
      <Tab3 />
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

function Frame6() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Період</p>
      <Frame8 />
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
          <circle cx="8" cy="8" fill="var(--fill-0, #C95555)" id="Ellipse 5" r="8" />
          <circle cx="7.99981" cy="8.00037" fill="var(--fill-0, #C95555)" id="Ellipse 6" r="4.83333" stroke="var(--stroke-0, white)" strokeWidth="3" />
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
          <circle cx="8" cy="8" id="Ellipse 5" r="7" stroke="var(--stroke-0, #737B8C)" strokeWidth="2" />
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

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Checkbox />
      <Checkbox1 />
      <Checkbox2 />
      <Checkbox3 />
      <Checkbox4 />
      <Checkbox5 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame17 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 1321315081">
          <path d={svgPaths.p1fa88440} fill="var(--fill-0, #1C1B1F)" id="add_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Напрямок</p>
      <Frame10 />
    </div>
  );
}

function RadioButtons() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame11 />
    </div>
  );
}

function Selector() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="selector">
      <RadioButtons />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 1321315081">
          <path d={svgPaths.p1fa88440} fill="var(--fill-0, #1C1B1F)" id="add_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Програми</p>
      <Frame13 />
    </div>
  );
}

function RadioButtons1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame14 />
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

function FilterBudgetDefault() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[24px] h-[852px] items-start px-[24px] py-[32px] relative rounded-[16px] shrink-0 w-[312px]" data-name="Filter – Budget – Default">
      <Frame15 />
      <Tabs1 />
      <Frame16 />
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
  );
}

function YAxisLabel() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pb-[24px] pt-0 px-0 relative shrink-0" data-name="_Y-axis label">
      <div className="flex h-[173px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "161.734375", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[18px] not-italic relative text-[#3c4d5d] text-[12px] text-center text-nowrap whitespace-pre">Масштаб бюджету у млн грн</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-full items-end leading-[0] not-italic pl-0 pr-[4px] py-0 relative shrink-0 text-[#3c4d5d] text-[12px] text-right">
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">100</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">90</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">80</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">70</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">60</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">50</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">40</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">30</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">20</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">10</p>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[46.522px] relative w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 870 47">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeOpacity="0.1" x1="0.5" x2="869.5" y1="22.7608" y2="22.7608" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-end relative size-full">
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full">
          {[...Array(10).keys()].map((_, i) => (
            <Divider key={i} />
          ))}
        </div>
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
    </div>
  );
}

function ChartBar() {
  return (
    <div className="absolute bottom-0 left-0 top-[24px] w-[32px]" data-name="Chart bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 380">
        <g id="Chart bar">
          <path d={svgPaths.p234ab980} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function Bar() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar />
    </div>
  );
}

function ChartBar1() {
  return (
    <div className="absolute bottom-0 left-0 top-[24px] w-[32px]" data-name="Chart bar">
      <div className="absolute inset-[0_0_0_-0.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 380">
          <g id="Chart bar">
            <path d={svgPaths.p2ea85e00} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Bar1() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar1 />
    </div>
  );
}

function ChartBar2() {
  return (
    <div className="absolute inset-[40px_0_0_0]" data-name="Chart bar">
      <div className="absolute bottom-0 left-0 top-[25.56%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 271">
          <path d={svgPaths.pa918700} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
}

function Bar2() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar2 />
    </div>
  );
}

function ChartBar3() {
  return (
    <div className="absolute inset-[40px_-0.18px_0_0.18px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-0 top-[25.56%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 271">
          <path d={svgPaths.pa918700} fill="var(--fill-0, #C95555)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Bar3() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar3 />
    </div>
  );
}

function ChartBar4() {
  return (
    <div className="absolute inset-[16px_0_0_0]" data-name="Chart bar">
      <div className="absolute bottom-0 left-0 top-[43.99%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 218">
          <path d={svgPaths.p241e9100} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
}

function Bar4() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar4 />
    </div>
  );
}

function ChartBar5() {
  return (
    <div className="absolute inset-[48px_0_0_0]" data-name="Chart bar">
      <div className="absolute bottom-0 left-0 top-[65.39%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 124">
          <path d={svgPaths.p1038f80} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
}

function Bar5() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar5 />
    </div>
  );
}

function ChartBar6() {
  return (
    <div className="absolute inset-[80px_0_0_0]" data-name="Chart bar">
      <div className="absolute bottom-0 left-0 top-[70.72%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 95">
          <path d={svgPaths.p12456700} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
}

function Bar6() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar6 />
    </div>
  );
}

function ChartBar7() {
  return (
    <div className="absolute inset-[80px_0_0_0]" data-name="Chart bar">
      <div className="absolute bottom-0 left-0 top-[86%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 46">
          <path d={svgPaths.p279ca580} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
}

function Bar7() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar7 />
    </div>
  );
}

function Chart() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-end justify-between min-h-px min-w-px overflow-clip relative shrink-0" data-name="Chart">
      <Bar />
      <Bar1 />
      <Bar2 />
      <Bar3 />
      {[...Array(2).keys()].map((_, i) => (
        <Bar4 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <Bar5 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <Bar6 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <Bar7 key={i} />
      ))}
    </div>
  );
}

function ChartData() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative size-full" data-name="_Chart data">
      <Chart />
    </div>
  );
}

function PopOver() {
  return (
    <div className="bg-[rgba(0,0,0,0.7)] content-stretch flex flex-col gap-[6px] items-start justify-center p-[8px] relative rounded-[4px] shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)]" data-name="pop-over">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">{`69 млн грн `}</p>
      <div className="absolute bottom-[-6px] h-[6px] left-[calc(50%+0.5px)] translate-x-[-50%] w-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
          <path d="M6 6L0 0H12L6 6Z" fill="var(--fill-0, black)" fillOpacity="0.7" id="Vector 3" />
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[838px] items-start justify-end relative w-[404px]">
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <ChartData />
        </div>
      </div>
      <div className="absolute flex h-[71px] items-center justify-center left-[calc(50%+91.5px)] top-[calc(50%-182.5px)] translate-x-[-50%] translate-y-[-50%] w-[23px]" style={{ "--transform-inner-width": "52.578125", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <PopOver />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-end min-h-px min-w-px relative shrink-0 w-full">
      <Frame2 />
      <div className="basis-0 flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "3000", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] size-full">
          <Frame3 />
        </div>
      </div>
      <div className="absolute bottom-[21.22px] flex h-[404px] items-center justify-center left-[59px] w-[838px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function XAxis() {
  return (
    <div className="relative shrink-0 w-full" data-name="_X-axis">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[64px] pr-0 py-0 relative w-full">
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "34.796875", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Центр</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "45.75", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Поділля</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "46.515625", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Тяжилів</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "56.921875", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Вишенька</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "64.515625", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">П’ятничани</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "58.09375", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Слов’янка</p>
            </div>
          </div>
          <div className="flex h-[60.785px] items-center justify-center relative shrink-0 w-[81.282px]" style={{ "--transform-inner-width": "92.015625", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Дальнє Замостя</p>
            </div>
          </div>
          <div className="flex h-[60.785px] items-center justify-center relative shrink-0 w-[81.282px]" style={{ "--transform-inner-width": "95.234375", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Ближнє Замостя</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "67.359375", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Старе місто</p>
            </div>
          </div>
          <div className="flex h-[60.785px] items-center justify-center relative shrink-0 w-[81.282px]" style={{ "--transform-inner-width": "94.78125", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Вінницькі хутори</p>
            </div>
          </div>
          <div className="flex h-[60.785px] items-center justify-center relative shrink-0 w-[81.282px]" style={{ "--transform-inner-width": "109.140625", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Свердловський мік</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "73.125", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Академічний</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function XAxis1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="X-axis">
      <XAxis />
    </div>
  );
}

function XAxisLabel() {
  return (
    <div className="content-stretch flex items-start justify-center pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="_X-axis label">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3c4d5d] text-[12px] text-center text-nowrap whitespace-pre">Район</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-end justify-end min-h-px min-w-px relative shrink-0" data-name="Content">
      <Frame4 />
      <XAxis1 />
      <XAxisLabel />
    </div>
  );
}

function Axis() {
  return (
    <div className="absolute content-stretch flex gap-[4px] inset-0 items-start" data-name="Axis">
      <YAxisLabel />
      <Content />
    </div>
  );
}

function LineAndBarChart() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Line and bar chart">
      <Axis />
    </div>
  );
}

function Content1() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <LineAndBarChart />
        </div>
      </div>
    </div>
  );
}

function Resource() {
  return (
    <div className="basis-0 content-stretch flex font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] grow items-center leading-[0] min-h-px min-w-px not-italic px-0 py-[12px] relative shrink-0 text-[#3c4d5d] text-[14px] text-nowrap tracking-[-0.28px]" data-name="resource">
      <div className="flex flex-col justify-center opacity-60 relative shrink-0">
        <p className="leading-[16px] text-nowrap whitespace-pre">Джерело даних:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="[text-underline-position:from-font] decoration-solid leading-[16px] text-nowrap underline whitespace-pre">Вінницька міська рада</p>
      </div>
    </div>
  );
}

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
      <p className="font-['Open_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#3c4d5d] text-[15.307px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <p className="font-['Open_Sans',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#3c4d5d] text-[8px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Powered by LaSoft
        <br aria-hidden="true" />
        Innovation Lab
      </p>
    </div>
  );
}

function LivechartLogo() {
  return (
    <div className="h-[40px] relative shrink-0 w-[180px]" data-name="livechart logo">
      <LiveChartsLogoRaw />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="footer">
      <Resource />
      <LivechartLogo />
    </div>
  );
}

function Body() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Body">
      <Content1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 984 1">
            <path d="M0 0.5H984" id="Vector 3" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Dashboard() {
  return (
    <div className="relative shrink-0 w-full" data-name="Dashboard">
      <div className="size-full">
        <div className="content-stretch flex gap-[24px] items-start px-[60px] py-[24px] relative w-full">
          <FilterBudgetDefault />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default function StatsBarChartHover() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Stats – Bar Chart – Hover">
      <Header />
      <Breadcrumbs />
      <Header1 />
      <Dashboard />
    </div>
  );
}