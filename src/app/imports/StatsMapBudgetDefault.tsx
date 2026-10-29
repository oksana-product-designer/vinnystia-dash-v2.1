import svgPaths from "./svg-m3adcg32uk";

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

function Frame17() {
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
      <Frame17 />
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
        <div className="content-stretch flex gap-[8px] items-start leading-[20px] px-[60px] py-[4px] relative text-[#343a40] text-[14px] text-nowrap w-full whitespace-pre">
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] not-italic overflow-ellipsis overflow-hidden relative shrink-0">Вінницька міська рада</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book','Noto_Sans',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            ⟶
          </p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] not-italic overflow-ellipsis overflow-hidden relative shrink-0">Сервіси міської ради</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book','Noto_Sans',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            ⟶
          </p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] not-italic overflow-ellipsis overflow-hidden relative shrink-0">Геопортал</p>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#343a40] text-[28px] tracking-[-1.12px] w-full">Аналітичний графік бюджету громади</p>
      <p className="[white-space-collapse:collapse] font-['VinnytsiaSansReg:Book','Noto_Sans',sans-serif] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(52,58,64,0.6)] text-nowrap tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        <span>{`Переглянути детальну інформацію про проєктам. `}</span>
        <span className="font-['VinnytsiaSansBold:Bold','Noto_Sans',sans-serif] text-[#c95555]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`Перейти  ⟶`}</span>
      </p>
    </div>
  );
}

function GlobeUk() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="globe_uk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="globe_uk">
          <mask height="24" id="mask0_3_2683" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_2683)">
            <path d={svgPaths.p3a0136c0} fill="var(--fill-0, white)" id="globe_uk_2" />
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
    <div className="bg-[#c95555] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="tab">
      <MapIcon />
    </div>
  );
}

function Leaderboard() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="leaderboard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="leaderboard">
          <mask height="24" id="mask0_3_2679" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_2679)">
            <path d={svgPaths.p12104f00} fill="var(--fill-0, #343A40)" id="leaderboard_2" />
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
    <div className="content-stretch flex items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="tab">
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

function Frame14() {
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

function Frame2() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Період</p>
      <Frame4 />
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

function Frame16() {
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

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame16 />
    </div>
  );
}

function Frame5() {
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

function Frame6() {
  return (
    <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Напрямок</p>
      <Frame6 />
    </div>
  );
}

function RadioButtons() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame8 />
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
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Програми</p>
      <Frame10 />
    </div>
  );
}

function RadioButtons1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame11 />
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
      <Frame14 />
      <Tabs1 />
      <Frame15 />
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

function Frame12() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="bg-[#ffeac1] h-[6px] shrink-0 w-[18px]" />
      <div className="bg-[#ffd78a] h-[6px] shrink-0 w-[18px]" />
      <div className="bg-[#fbca81] h-[6px] shrink-0 w-[18px]" />
      <div className="bg-[#f7bd78] h-[6px] shrink-0 w-[18px]" />
      <div className="bg-[#f3b06f] h-[6px] shrink-0 w-[18px]" />
      <div className="bg-[#efa366] h-[6px] shrink-0 w-[18px]" />
      <div className="bg-[#eb965d] h-[6px] shrink-0 w-[18px]" />
      <div className="bg-[#e88854] h-[6px] shrink-0 w-[18px]" />
      <div className="bg-[#e47b4b] h-[6px] shrink-0 w-[18px]" />
      <div className="bg-[#e06e42] h-[6px] shrink-0 w-[18px]" />
      <div className="bg-[#dc6139] h-[6px] shrink-0 w-[18px]" />
      <div className="bg-[#d44727] h-[6px] shrink-0 w-[18px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex font-['VinnytsiaSansReg:Book',sans-serif] gap-[2px] items-center leading-[12px] not-italic relative shrink-0 text-[#343a40] text-[8px] text-center w-full">
      <p className="relative shrink-0 w-[18px]">20</p>
      <p className="relative shrink-0 w-[18px]">{`50 `}</p>
      <p className="relative shrink-0 w-[18px]">100</p>
      <p className="relative shrink-0 w-[18px]">150</p>
      <p className="relative shrink-0 w-[18px]">200</p>
      <p className="relative shrink-0 w-[18px]">250</p>
      <p className="relative shrink-0 w-[18px]">300</p>
      <p className="relative shrink-0 w-[18px]">350</p>
      <p className="relative shrink-0 w-[18px]">400</p>
      <p className="relative shrink-0 w-[18px]">450</p>
      <p className="relative shrink-0 w-[18px]">500</p>
      <p className="relative shrink-0 w-[18px]">550</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Legend() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0" data-name="legend">
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#343a40] text-[14px] tracking-[-0.28px] w-[min-content]">Масштаб бюджету у млн грн:</p>
      <Frame7 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-[482.91px] mt-[128.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[72px]">
      <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] left-1/2 not-italic text-[#343a40] text-[20px] text-center text-nowrap top-[calc(50%-7px)] translate-x-[-50%] whitespace-pre">491</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-[290.91px] mt-[216.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[72px]">
      <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] left-[calc(50%+0.5px)] not-italic text-[#343a40] text-[20px] text-center text-nowrap top-[calc(50%-7px)] translate-x-[-50%] whitespace-pre">540</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-[178.91px] mt-[264.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[72px]">
      <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] left-1/2 not-italic text-[#343a40] text-[20px] text-center text-nowrap top-[calc(50%-7px)] translate-x-[-50%] whitespace-pre">523</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-[266.91px] mt-[136.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[56px]">
      <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] left-[calc(50%+0.5px)] not-italic text-[#343a40] text-[16px] text-center text-nowrap top-[calc(50%-7px)] translate-x-[-50%] whitespace-pre">378</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-[434.91px] mt-[48.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[56px]">
      <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-1px)] not-italic text-[#343a40] text-[14px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">361</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-[378.91px] mt-[136.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[56px]">
      <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-1px)] not-italic text-[#343a40] text-[14px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">320</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-[431.91px] mt-[288.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[48px]">
      <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-1px)] not-italic text-[#343a40] text-[14px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">240</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-[319.91px] mt-[352.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[52px]">
      <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-1px)] not-italic text-[#343a40] text-[14px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">262</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-[271.91px] mt-[288.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[44px]">
      <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-0.5px)] not-italic text-[#343a40] text-[12px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">173</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-[215.91px] mt-[382.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[40px]">
      <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-1px)] not-italic text-[#343a40] text-[12px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">120</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-[119.91px] mt-[310.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[48px]">
      <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-0.5px)] not-italic text-[#343a40] text-[12px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">211</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="[grid-area:1_/_1] bg-white ml-[39.91px] mt-[270.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[56px]">
      <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-0.5px)] not-italic text-[#343a40] text-[14px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">344</p>
    </div>
  );
}

function Map() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="map">
      <div className="[grid-area:1_/_1] h-[128.011px] ml-[106.91px] mt-[364.27px] relative w-[209.692px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 129">
          <g id="Vector" opacity="0.7">
            <path d={svgPaths.p21e2a0c0} fill="var(--fill-0, #FFEAC1)" />
            <path d={svgPaths.p2e010800} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="1.7152" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[152.692px] ml-0 mt-[250.78px] relative w-[104.375px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 153">
          <g id="Vector" opacity="0.7">
            <path d={svgPaths.p13a2e900} fill="var(--fill-0, #E47B4B)" />
            <path d={svgPaths.p89f7600} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="1.7152" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[94.973px] ml-[91.02px] mt-[276.64px] relative w-[136.618px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137 95">
          <g id="Vector" opacity="0.7">
            <path d={svgPaths.p3b7ff500} fill="var(--fill-0, #EB965D)" />
            <path d={svgPaths.p127f8800} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="1.7152" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[132.307px] ml-[164.1px] mt-[256.88px] relative w-[130.263px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 133">
          <g id="Vector" opacity="0.7">
            <path d={svgPaths.p3f4e8500} fill="var(--fill-0, #DC6139)" />
            <path d={svgPaths.p37cdda00} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="1.7152" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[89.35px] ml-[255.44px] mt-[264.61px] relative w-[69.103px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 90">
          <g id="Vector" opacity="0.7">
            <path d={svgPaths.p257c5e00} fill="var(--fill-0, #FFD78A)" />
            <path d={svgPaths.p292c8d00} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="1.7152" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[90.209px] ml-[206.99px] mt-[216.5px] relative w-[173.155px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174 91">
          <g id="Vector" opacity="0.7">
            <path d={svgPaths.p16414f00} fill="var(--fill-0, #D44727)" />
            <path d={svgPaths.p19408d00} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="1.7152" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[293.824px] ml-[94.2px] mt-[6.87px] relative w-[248.612px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 249 294">
          <g id="Vector" opacity="0.7">
            <mask fill="white" id="path-1-inside-1_3_2560">
              <path d={svgPaths.p2fc48d00} />
            </mask>
            <path d={svgPaths.p2fc48d00} fill="var(--fill-0, #E88854)" mask="url(#path-1-inside-1_3_2560)" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="3.4304" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[161.517px] ml-[268.15px] mt-[275.03px] relative w-[148.532px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 162">
          <g id="Vector" opacity="0.7">
            <path d={svgPaths.p3b50f980} fill="var(--fill-0, #F7BD78)" />
            <path d={svgPaths.p1df4ea00} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="1.7152" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[128.011px] ml-[338.84px] mt-0 relative w-[238.287px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239 129">
          <g id="Vector" opacity="0.7">
            <path d={svgPaths.p4691e00} fill="var(--fill-0, #EFA366)" />
            <path d={svgPaths.p7334d00} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="1.7152" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[136.602px] ml-[337.25px] mt-[102.35px] relative w-[127.086px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 137">
          <g id="Vector" opacity="0.7">
            <path d={svgPaths.p341bac00} fill="var(--fill-0, #F3B06F)" />
            <path d={svgPaths.p2848880} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="1.7152" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[261.177px] ml-[457px] mt-[58.14px] relative w-[220.812px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 262">
          <g id="Vector" opacity="0.7">
            <path d={svgPaths.pba53c00} fill="var(--fill-0, #E06E42)" />
            <path d={svgPaths.p4361480} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="1.7152" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[200.178px] ml-[373.91px] mt-[228.14px] relative w-[196.189px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197 201">
          <g id="Vector" opacity="0.7">
            <path d={svgPaths.p254ff680} fill="var(--fill-0, #FBCA81)" />
            <path d={svgPaths.p76a2d80} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="1.7152" />
          </g>
        </svg>
      </div>
      <Frame18 />
      <Frame23 />
      <Frame26 />
      <Frame25 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame24 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Map1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[528px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="map">
      <Map />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[24px] h-[528px] items-start relative shrink-0 w-full" data-name="Content">
      <Legend />
      <Map1 />
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
      <Content />
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
    <div className="content-stretch flex gap-[24px] items-start px-[60px] py-[24px] relative shrink-0 w-[1440px]" data-name="Dashboard">
      <FilterBudgetDefault />
      <Body />
    </div>
  );
}

export default function StatsMapBudgetDefault() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Stats – Map – Budget – Default">
      <Header />
      <Breadcrumbs />
      <Header1 />
      <Dashboard />
    </div>
  );
}