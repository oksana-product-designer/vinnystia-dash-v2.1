import { useState, useEffect, useRef } from 'react';
import svgPaths from './imports/svg-r3calk4byz';
import filterSvgPaths from './imports/svg-vlkj6996dt';
import datePickerSvgPaths from './imports/svg-zftmp9pkai';
import viewsSvgPaths from './imports/svg-vmt0spnopo';
import { Eye, Search } from 'lucide-react';
import { ChartView } from './components/ChartView';
import { ProjectsList } from './components/ProjectsList';

// Budget visualization dashboard for Vinnytsia
// Direction categories (from Figma design) with subdirections
const DIRECTIONS = [
  {
    name: 'Освіта',
    subdirections: [
      'Дошкільна освіта',
      'Загальна середня освіта',
      'Позашкільна освіта',
      'Професійно-технічна освіта',
      'Інклюзивна освіта'
    ]
  },
  {
    name: 'Транспорт, зв\'язок, енергетика, інформаційні технології',
    subdirections: [
      'Громадський транспорт',
      'Дорожня інфраструктура',
      'Енергоефективність',
      'Цифрова трансформація',
      'Телекомунікації'
    ]
  },
  {
    name: 'Культура і мистецтво',
    subdirections: [
      'Бібліотеки',
      'Музеї та виставки',
      'Театри та кінотеатри',
      'Культурні центри',
      'Мистецькі школи'
    ]
  },
  {
    name: 'Охорона здоров\'я',
    subdirections: [
      'Первинна медична допомога',
      'Стаціонарна допомога',
      'Швидка медична допомога',
      'Профілактика та скринінг',
      'Медична реабілітація'
    ]
  },
  {
    name: 'Архітектура і містобудування',
    subdirections: [
      'Містобудівне планування',
      'Архітектурний контроль',
      'Реконструкція будівель',
      'Охорона пам\'яток',
      'Земельні відносини'
    ]
  },
  {
    name: 'Туризм, дозвілля, молодь',
    subdirections: [
      'Туристична інфраструктура',
      'Молодіжні центри',
      'Дозвіллєві програми',
      'Розвиток туризму',
      'Молодіжна політика'
    ]
  },
  {
    name: 'Фізкультура та спорт',
    subdirections: [
      'Спортивні споруди',
      'Дитячий спорт',
      'Масовий спорт',
      'Спорт вищих досягнень',
      'Спортивні заходи'
    ]
  },
  {
    name: 'Комунальні підприємства',
    subdirections: [
      'Водопостачання',
      'Водовідведення',
      'Теплопостачання',
      'Газопостачання',
      'Управління відходами'
    ]
  },
  {
    name: 'Благоустрій міста та охорона навколишнього середовища',
    subdirections: [
      'Озеленення територій',
      'Утримання доріг',
      'Освітлення вулиць',
      'Екологічний моніторинг',
      'Парки та сквери'
    ]
  },
  {
    name: 'Громадська участь',
    subdirections: [
      'Бюджет участі',
      'Громадські ініціативи',
      'Співпраця з ГО',
      'Консультації з громадськістю',
      'Електронні петиції'
    ]
  }
];

// Mock programs
const PROGRAMS = [
  'Програма «Муніципальний університет перепідготовки та підвищення кваліфікації посадових осіб місцевого самоврядування Вінницької міської ради»',
  'Програма надання фінансової підтримки інститутам громадянського суспільства на реалізацію проектів на териорії Вінницької міської територіальної громади',
  'Програма інноваційного розвитку муніципального управління на 2017-2026 рр.',
  'Програма «Нагородження відзнаками міського рівня, організація і проведення урочистих та інших заходів у населених пунктах, що входять до Вінницької міської територіальної громади на 2021-2025 роки»',
  'Програма запобігання виникненню надзвичайних ситуацій природного, техногенного, соціального характеру та надзвичайних ситуацій в умовах воєнного стану, ліквідації їх наслідків на 2020-2027 роки',
  'Програма використання соціальної рекла��и для інформування громадськості та профілактики негативних явищ у суспільстві на 2021-2025 роки'
];

// Mock project counts for directions and subdirections
const PROJECT_COUNTS: Record<string, number> = {
  // Main directions
  'Освіта': 145,
  'Транспорт, зв\'язок, енергетика, інформаційні технології': 98,
  'Культура і мистецтво': 67,
  'Охорона здоров\'я': 112,
  'Архітектура і містобудування': 54,
  'Туризм, дозвілля, молодь': 43,
  'Фізкультура та спорт': 76,
  'Комунальні підприємства': 89,
  'Благоустрій міста та охорона навколишнього середовища': 134,
  'Громадська участь': 52,
  
  // Освіта subdirections
  'Дошкільна освіта': 38,
  'Загальна середня освіта': 52,
  'Позашкільна освіта': 21,
  'Професійно-технічна освіта': 18,
  'Інклюзивна освіта': 16,
  
  // Транспорт subdirections
  'Громадський транспорт': 24,
  'Дорожня інфраструктура': 35,
  'Енергоефективність': 19,
  'Цифрова трансформація': 12,
  'Телекомунікації': 8,
  
  // Культура subdirections
  'Бібліотеки': 15,
  'Музеї та виставки': 11,
  'Театри та кінотеатри': 9,
  'Культурні центри': 18,
  'Мистецькі школи': 14,
  
  // Охорона здоров\'я subdirections
  'Первинна медична допомога': 31,
  'Стаціонарна допомога': 28,
  'Швидка медична допомога': 15,
  'Профілактика та скринінг': 22,
  'Медична реабілітація': 16,
  
  // Архітектура subdirections
  'Містобудівне планування': 14,
  'Архітектурний контроль': 10,
  'Реконструкція будівель': 16,
  'Охорона пам\'яток': 8,
  'Земельні відносини': 6,
  
  // Туризм subdirections
  'Туристична інфраструктура': 12,
  'Молодіжні центри': 9,
  'Дозвіллєві програми': 11,
  'Розвиток туризму': 7,
  'Молодіжна політика': 4,
  
  // Фізкультура subdirections
  'Спортивні споруди': 22,
  'Дитячий спорт': 18,
  'Масовий спорт': 15,
  'Спорт вищих досягнень': 12,
  'Спортивні заходи': 9,
  
  // Комунальні підприємства subdirections
  'Водопостачання': 21,
  'Водовідведення': 19,
  'Теплопостачання': 17,
  'Газопостачання': 13,
  'Управління відходами': 19,
  
  // Благоустрій subdirections
  'Озеленення територій': 32,
  'Утримання доріг': 38,
  'Освітлення вулиць': 28,
  'Екологічний моніторинг': 16,
  'Парки та сквери': 20,
  
  // Громадська участь subdirections
  'Бюджет участі': 18,
  'Громадські ініціативи': 14,
  'Співпраця з ГО': 9,
  'Консультації з громадськістю': 7,
  'Електронні петиції': 4
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'projects'>('dashboard');
  const [contentView, setContentView] = useState<'map' | 'chart'>('map');
  const [viewMode, setViewMode] = useState<'budget' | 'projects'>('budget');
  const [selectedPeriod, setSelectedPeriod] = useState('currentYear');
  const [periodExpanded, setPeriodExpanded] = useState(true);
  const [directionsExpanded, setDirectionsExpanded] = useState(false);
  const [programsExpanded, setProgramsExpanded] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [expandedMainDirections, setExpandedMainDirections] = useState<string[]>([]);
  
  // Filter state
  const [selectedDirections, setSelectedDirections] = useState<string[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [directionsSearch, setDirectionsSearch] = useState('');
  const [programsSearch, setProgramsSearch] = useState('');
  const [customPeriodStart, setCustomPeriodStart] = useState('2020');
  const [customPeriodEnd, setCustomPeriodEnd] = useState('2025');
  
  // State for selected district
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  
  // Date picker state
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const datePickerRef = useRef<HTMLDivElement>(null);
  const filterSidebarRef = useRef<HTMLDivElement>(null);
  
  // Tooltip state
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringFilters, setIsHoveringFilters] = useState(false);
  
  // Track mouse position globally for tooltip
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Handle clicking outside date picker
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setDatePickerOpen(false);
      }
    };

    if (datePickerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [datePickerOpen]);

  const toggleDirection = (direction: string) => {
    // Check if this is a main direction
    const mainDir = DIRECTIONS.find(d => d.name === direction);
    
    if (mainDir) {
      // This is a main direction - toggle all subdirections
      const allSubdirectionsSelected = mainDir.subdirections.every(sub => 
        selectedDirections.includes(sub)
      );
      
      if (allSubdirectionsSelected) {
        // Remove all subdirections
        setSelectedDirections(prev => 
          prev.filter(d => !mainDir.subdirections.includes(d))
        );
      } else {
        // Add all subdirections
        setSelectedDirections(prev => {
          const withoutCurrentSubs = prev.filter(d => !mainDir.subdirections.includes(d));
          return [...withoutCurrentSubs, ...mainDir.subdirections];
        });
      }
    } else {
      // This is a subdirection - toggle it individually
      setSelectedDirections(prev =>
        prev.includes(direction)
          ? prev.filter(d => d !== direction)
          : [...prev, direction]
      );
    }
  };

  const toggleMainDirection = (mainDirection: string) => {
    setExpandedMainDirections(prev =>
      prev.includes(mainDirection)
        ? prev.filter(d => d !== mainDirection)
        : [...prev, mainDirection]
    );
  };

  const toggleProgram = (program: string) => {
    setSelectedPrograms(prev =>
      prev.includes(program)
        ? prev.filter(p => p !== program)
        : [...prev, program]
    );
  };

  const clearAllFilters = () => {
    setSelectedDirections([]);
    setSelectedPrograms([]);
    setSelectedPeriod('currentYear');
    setCustomPeriodStart('2020');
    setCustomPeriodEnd('2025');
  };

  const filteredDirections = DIRECTIONS.filter(d =>
    d.name.toLowerCase().includes(directionsSearch.toLowerCase()) ||
    d.subdirections.some(sub => sub.toLowerCase().includes(directionsSearch.toLowerCase()))
  );

  const filteredPrograms = PROGRAMS.filter(p =>
    p.toLowerCase().includes(programsSearch.toLowerCase())
  );

  // Generate filtered data based on current filters
  const generateFilteredData = () => {
    // Base data for each region
    const baseData = [
      { budget: 344, projects: 28 },
      { budget: 211, projects: 18 },
      { budget: 173, projects: 14 },
      { budget: 120, projects: 10 },
      { budget: 262, projects: 22 },
      { budget: 378, projects: 31 },
      { budget: 540, projects: 48 },
      { budget: 320, projects: 26 },
      { budget: 361, projects: 29 },
      { budget: 240, projects: 24 },
      { budget: 491, projects: 42 },
      { budget: 523, projects: 45 },
    ];

    // Apply period multiplier
    let periodMultiplier = 1;
    switch (selectedPeriod) {
      case 'currentQuarter':
        periodMultiplier = 0.25;
        break;
      case 'lastSemester':
        periodMultiplier = 0.5;
        break;
      case 'currentYear':
        periodMultiplier = 1;
        break;
      case 'lastYear':
        periodMultiplier = 0.9;
        break;
      case 'last5Years':
        periodMultiplier = 4.5;
        break;
      case 'custom':
        periodMultiplier = 0.7;
        break;
    }

    // Apply direction filter (if any selected, reduce values)
    const directionMultiplier = selectedDirections.length > 0 
      ? 0.3 + (selectedDirections.length * 0.07) 
      : 1;

    // Apply program filter (if any selected, reduce values)
    const programMultiplier = selectedPrograms.length > 0 
      ? 0.2 + (selectedPrograms.length * 0.13) 
      : 1;

    return baseData.map(region => ({
      budget: Math.round(region.budget * periodMultiplier * directionMultiplier * programMultiplier),
      projects: Math.round(region.projects * periodMultiplier * directionMultiplier * programMultiplier)
    }));
  };

  const budgetData = generateFilteredData();
  
  // District names for each region
  const districtNames = [
    'Замостя', 'Вишенька', 'Центр', 'Барський район', 'Поділля', 'Слов\'янка',
    'Старе місто', 'Ківцівка', 'Тяжилів', 'Корея', 'Пирогово', 'Стрижавка'
  ];
  
  // Calculate min and max values for dynamic legend
  const maxBudget = Math.max(...budgetData.map(d => d.budget));
  const minBudget = Math.min(...budgetData.map(d => d.budget));
  const maxProjects = Math.max(...budgetData.map(d => d.projects));
  const minProjects = Math.min(...budgetData.map(d => d.projects));

  // Get color based on value and view mode
  const getColor = (value: number) => {
    const colors = [
      '#FFEAC1', '#FFD78A', '#FBCA81', '#F7BD78', '#F3B06F', 
      '#EFA366', '#EB965D', '#E88854', '#E47B4B', '#E06E42', 
      '#DC6139', '#D44727'
    ];
    
    if (viewMode === 'budget') {
      const normalizedValue = Math.max(0, Math.min(1, (value - minBudget) / (maxBudget - minBudget)));
      const colorIndex = Math.floor(normalizedValue * (colors.length - 1));
      return colors[colorIndex];
    } else {
      const normalizedValue = Math.max(0, Math.min(1, (value - minProjects) / (maxProjects - minProjects)));
      const colorIndex = Math.floor(normalizedValue * (colors.length - 1));
      return colors[colorIndex];
    }
  };

  // Generate legend labels dynamically
  const generateLegendLabels = (min: number, max: number) => {
    const labels = [];
    const step = (max - min) / 11; // 12 color stops
    for (let i = 0; i < 12; i++) {
      labels.push(Math.round(min + (step * i)));
    }
    return labels;
  };

  const budgetLegendLabels = generateLegendLabels(minBudget, maxBudget);
  const projectsLegendLabels = generateLegendLabels(minProjects, maxProjects);

  // Show projects list page if selected
  if (currentPage === 'projects') {
    return <ProjectsList onBackToDashboard={() => setCurrentPage('dashboard')} initialDistrict={selectedDistrict} />;
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-[#e3e3e3] h-24 shrink-0 flex items-center justify-between px-[60px] relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-[179px] h-[72px] relative">
            <svg className="absolute inset-[8.16%_1.4%_8.07%_1.43%]" fill="none" preserveAspectRatio="none" viewBox="0 0 174 61">
              <g>
                <path d={svgPaths.pce8b380} fill="#FCFCFC" />
                <path d={svgPaths.p102c7d00} fill="#C62122" />
                <path d={svgPaths.p90f4000} fill="black" />
                <path d={svgPaths.p27fcfd00} fill="black" />
                <path d={svgPaths.p1a7fd1c0} fill="black" />
                <path d={svgPaths.p1360e500} fill="black" />
                <path d={svgPaths.p890a900} fill="black" />
                <path d={svgPaths.p3062c400} fill="black" />
                <path d={svgPaths.p2fc6a270} fill="black" />
                <path d={svgPaths.p35ea2f00} fill="black" />
                <path d={svgPaths.p1a19ed00} fill="black" />
                <path d={svgPaths.p2132cf00} fill="black" />
                <path d={svgPaths.pef5e800} fill="black" />
                <path d={svgPaths.p27d4bb30} fill="black" />
                <path d={svgPaths.p2ca91980} fill="black" />
                <path d={svgPaths.p3ad59d00} fill="black" />
                <path d={svgPaths.p1996ba80} fill="black" />
                <path d={svgPaths.p34572370} fill="black" />
                <path d={svgPaths.p27d88080} fill="black" />
                <path d={svgPaths.p27ca7700} fill="#010101" />
                <path d={svgPaths.p272f3e00} fill="#010101" />
                <path d={svgPaths.p1ea86d00} fill="#010101" />
                <path d={svgPaths.p1af24770} fill="#010101" />
              </g>
            </svg>
          </div>
        </div>
        
        {/* Top right navigation */}
        <div className="flex items-center gap-10">
          <nav className="flex items-center gap-6 text-[#343a40] text-base leading-5 tracking-[-0.32px] font-['VinnytsiaSansReg:Book',sans-serif] not-italic">
            <a href="#" className="hover:text-[#c95555]">Туристу</a>
            <a href="#" className="hover:text-[#c95555]">Інвестору</a>
            <a href="#" className="hover:text-[#c95555]">English</a>
          </nav>
          <div className="flex items-center gap-4">
            <Search className="w-6 h-6 text-[#343a40] cursor-pointer hover:text-[#c95555]" />
            <Eye className="w-6 h-6 text-[#343a40] cursor-pointer hover:text-[#c95555]" />
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="px-[60px] py-1 text-sm leading-5 text-[#343a40] font-['VinnytsiaSansReg:Book',sans-serif] not-italic">
        <div className="flex items-center gap-2">
          <span>Вінницька міська рада</span>
          <span>⟶</span>
          <span>Сервіси міської ради</span>
          <span>⟶</span>
          <span>Геопортал</span>
        </div>
      </div>

      {/* Title and Tabs */}
      <div className="px-[60px] pt-6 pb-0">
        <div className="flex items-end gap-4 justify-between">
          <div className="flex-1">
            <h1 className="text-[28px] leading-8 tracking-[-1.12px] text-[#343a40] mb-2 font-['VinnytsiaSansBold:Bold',sans-serif] not-italic">
              Аналітичний графік бюджету громади
            </h1>
            <p className="text-sm leading-5 tracking-[-0.28px] text-[rgba(52,58,64,0.6)] font-['VinnytsiaSansReg:Book',sans-serif] not-italic">
              Переглянути детальну інформацію про заходам. <span className="text-[#c95555] font-['VinnytsiaSansBold:Bold',sans-serif] cursor-pointer hover:underline" onClick={() => setCurrentPage('projects')}>Перейти ⟶</span>
            </p>
          </div>
          
          {/* Map/Chart Toggle */}
          <div className="bg-white border border-[rgba(52,58,64,0.2)] rounded-full flex items-center">
            <button 
              className={`rounded-full px-4 py-2 transition-colors ${contentView === 'map' ? 'bg-[#c95555]' : ''}`}
              onClick={() => setContentView('map')}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.p3a0136c0} fill={contentView === 'map' ? 'white' : '#343A40'} />
              </svg>
            </button>
            <button 
              className={`px-3 py-2 rounded transition-colors ${contentView === 'chart' ? 'bg-[#c95555] rounded-full px-4' : ''}`}
              onClick={() => setContentView('chart')}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.p12104f00} fill={contentView === 'chart' ? 'white' : '#343A40'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="flex gap-6 px-[60px] py-6 flex-1 overflow-hidden" style={{ height: 'calc(100vh - 240px)', minHeight: '600px' }}>
        {/* Sidebar Filters */}
        <aside 
          ref={filterSidebarRef}
          onMouseEnter={() => setIsHoveringFilters(true)}
          onMouseLeave={() => setIsHoveringFilters(false)}
          className="bg-[#f7f7f7] rounded-2xl p-4 w-[312px] shrink-0 flex flex-col gap-6 overflow-y-auto" 
          style={{ maxHeight: programsDropdownOpen ? 'none' : '100%' }}
        >
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-2xl leading-6 text-[#343a40] font-['VinnytsiaSansBold:Bold',sans-serif] not-italic">Фільтри</h2>
            {(selectedDirections.length > 0 || selectedPrograms.length > 0) && (
              <button
                onClick={clearAllFilters}
                className="bg-white border border-[rgba(52,58,64,0.1)] rounded-full flex items-center gap-1 px-3 py-1.5 hover:bg-gray-50 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path d={filterSvgPaths.p5f5ce80} fill="#343A40" />
                </svg>
                <span className="text-sm text-[#343a40] leading-4 font-['VinnytsiaSansReg:Book',sans-serif] not-italic">Очистити</span>
              </button>
            )}
          </div>
          
          {/* Budget/Projects Toggle */}
          <div className="bg-white border border-[rgba(52,58,64,0.1)] rounded-full flex w-full">
            <button
              onClick={() => setViewMode('budget')}
              className={`flex-1 px-2 py-3 rounded-full text-sm leading-4 transition-colors font-['VinnytsiaSerif:Book',sans-serif] not-italic ${
                viewMode === 'budget'
                  ? 'bg-[rgba(201,85,85,0.1)] border border-[#c95555] text-[#c95555]'
                  : 'text-[#343a40]'
              }`}
            >
              Бюджет
            </button>
            <button
              onClick={() => setViewMode('projects')}
              className={`flex-1 px-4 py-3 rounded-full text-sm leading-4 transition-colors font-['VinnytsiaSerif:Book',sans-serif] not-italic ${
                viewMode === 'projects'
                  ? 'bg-[rgba(201,85,85,0.1)] border border-[#c95555] text-[#c95555]'
                  : 'text-[#343a40]'
              }`}
            >
              Заходи
            </button>
          </div>

          {/* Period Section */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setPeriodExpanded(!periodExpanded)}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg leading-6 text-[#343a40] text-right font-['VinnytsiaSerif:Book',sans-serif] not-italic">Період</span>
                {!periodExpanded && (
                  <span className="text-xs leading-4 text-[#c95555] font-['VinnytsiaSansReg:Book',sans-serif] not-italic">
                    ({selectedPeriod === 'currentQuarter' ? 'За поточний квартал' :
                      selectedPeriod === 'lastSemester' ? 'За останні півроку' :
                      selectedPeriod === 'currentYear' ? 'За поточний рік' :
                      selectedPeriod === 'lastYear' ? 'За минулий рік' :
                      selectedPeriod === 'last5Years' ? 'За останні 5 років' :
                      'Обрати інший період'})
                  </span>
                )}
              </div>
              <div className="bg-white rounded-full p-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  {periodExpanded ? (
                    <path d="M3 8H13" stroke="#343A40" strokeWidth="2" strokeLinecap="round" />
                  ) : (
                    <>
                      <path d="M8 3V13" stroke="#343A40" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 8H13" stroke="#343A40" strokeWidth="2" strokeLinecap="round" />
                    </>
                  )}
                </svg>
              </div>
            </button>
            
            {periodExpanded && (
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative w-4 h-4 shrink-0">
                    <input
                      type="radio"
                      name="period"
                      value="currentQuarter"
                      checked={selectedPeriod === 'currentQuarter'}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="sr-only"
                    />
                    {selectedPeriod === 'currentQuarter' ? (
                      <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8" fill="#C95555" />
                        <circle cx="8" cy="8" r="3.5" fill="white" />
                      </svg>
                    ) : (
                      <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="7" stroke="#737B8C" strokeWidth="2" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-[#343a40] leading-5 font-['VinnytsiaSansReg:Book',sans-serif] not-italic">За поточний квартал</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative w-4 h-4 shrink-0">
                    <input
                      type="radio"
                      name="period"
                      value="lastSemester"
                      checked={selectedPeriod === 'lastSemester'}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="sr-only"
                    />
                    {selectedPeriod === 'lastSemester' ? (
                      <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8" fill="#C95555" />
                        <circle cx="8" cy="8" r="3.5" fill="white" />
                      </svg>
                    ) : (
                      <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="7" stroke="#737B8C" strokeWidth="2" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-[#343a40] leading-5 font-['VinnytsiaSansReg:Book',sans-serif] not-italic">За останні півроку</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative w-4 h-4 shrink-0">
                    <input
                      type="radio"
                      name="period"
                      value="currentYear"
                      checked={selectedPeriod === 'currentYear'}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="sr-only"
                    />
                    {selectedPeriod === 'currentYear' ? (
                      <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8" fill="#C95555" />
                        <circle cx="8" cy="8" r="3.5" fill="white" />
                      </svg>
                    ) : (
                      <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="7" stroke="#737B8C" strokeWidth="2" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-[#343a40] leading-5 font-['VinnytsiaSansReg:Book',sans-serif] not-italic">За поточний рік</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative w-4 h-4 shrink-0">
                    <input
                      type="radio"
                      name="period"
                      value="lastYear"
                      checked={selectedPeriod === 'lastYear'}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="sr-only"
                    />
                    {selectedPeriod === 'lastYear' ? (
                      <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8" fill="#C95555" />
                        <circle cx="8" cy="8" r="3.5" fill="white" />
                      </svg>
                    ) : (
                      <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="7" stroke="#737B8C" strokeWidth="2" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-[#343a40] leading-5 font-['VinnytsiaSansReg:Book',sans-serif] not-italic">За минулий рік</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative w-4 h-4 shrink-0">
                    <input
                      type="radio"
                      name="period"
                      value="last5Years"
                      checked={selectedPeriod === 'last5Years'}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="sr-only"
                    />
                    {selectedPeriod === 'last5Years' ? (
                      <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8" fill="#C95555" />
                        <circle cx="8" cy="8" r="3.5" fill="white" />
                      </svg>
                    ) : (
                      <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="7" stroke="#737B8C" strokeWidth="2" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-[#343a40] leading-5 font-['VinnytsiaSansReg:Book',sans-serif] not-italic">За останні 5 років</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative w-4 h-4 shrink-0">
                    <input
                      type="radio"
                      name="period"
                      value="custom"
                      checked={selectedPeriod === 'custom'}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="sr-only"
                    />
                    {selectedPeriod === 'custom' ? (
                      <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8" fill="#C95555" />
                        <circle cx="8" cy="8" r="3.5" fill="white" />
                      </svg>
                    ) : (
                      <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="7" stroke="#737B8C" strokeWidth="2" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-[#343a40] leading-5 font-['VinnytsiaSansReg:Book',sans-serif] not-italic">Обрати інший період</span>
                </label>

                {selectedPeriod === 'custom' && (
                  <div className="flex flex-col gap-1 w-full" ref={datePickerRef}>
                    <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic text-[#49454f] text-[12px] tracking-[-0.24px]">Період</p>
                    <div 
                      className="w-full border border-[#e3e3e3] rounded-[999px] flex items-center h-[40px] px-[12px] cursor-pointer"
                      onClick={() => setDatePickerOpen(!datePickerOpen)}
                    >
                      <div className="flex gap-[8px] items-center flex-1">
                        <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="#343A40" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.5" />
                        </svg>
                        <span className={`text-sm leading-5 font-['VinnytsiaSansReg:Book',sans-serif] not-italic whitespace-nowrap ${selectedStartDate && selectedEndDate ? 'text-[#343a40]' : 'text-[#343a40] opacity-50'}`}>
                          {selectedStartDate && selectedEndDate
                            ? `${selectedStartDate.toLocaleDateString('uk-UA')} – ${selectedEndDate.toLocaleDateString('uk-UA')}`
                            : 'Обрати період'}
                        </span>
                      </div>
                    </div>
                    
                    {datePickerOpen && (
                      <DatePicker 
                        selectedStartDate={selectedStartDate}
                        selectedEndDate={selectedEndDate}
                        currentMonth={currentMonth}
                        currentYear={currentYear}
                        onStartDateSelect={setSelectedStartDate}
                        onEndDateSelect={setSelectedEndDate}
                        onMonthChange={setCurrentMonth}
                        onYearChange={setCurrentYear}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-[rgba(52,58,64,0.2)]" />

          {/* Direction Section */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setDirectionsExpanded(!directionsExpanded)}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg leading-6 text-[#343a40] text-right font-['VinnytsiaSerif:Book',sans-serif] not-italic">Напрямок</span>
                {selectedDirections.length > 0 && (
                  <span className="bg-[#c95555] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-['VinnytsiaSansReg:Book',sans-serif]">
                    {selectedDirections.length}
                  </span>
                )}
              </div>
              <div className="bg-white rounded-full p-1 flex items-center justify-center w-6 h-6">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${directionsExpanded ? 'rotate-180' : ''}`}>
                  <path d={directionsExpanded ? svgPaths.p24d21cb0 : svgPaths.p1fa88440} fill="#1C1B1F" />
                </svg>
              </div>
            </button>

            {directionsExpanded && (
              <div className="flex flex-col gap-3">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Пошук напрямку"
                    value={directionsSearch}
                    onChange={(e) => setDirectionsSearch(e.target.value)}
                    className="w-full px-4 py-2 pr-10 border border-[#e3e3e3] rounded-full text-sm font-['VinnytsiaSansReg:Book',sans-serif] placeholder:opacity-50 placeholder:text-[#343a40] placeholder:tracking-[-0.28px]"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d={filterSvgPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" />
                    </svg>
                  </div>
                </div>

                {/* Main directions with subdirections */}
                <div className="flex flex-col gap-3 max-h-80 overflow-y-auto">
                  {filteredDirections.map((direction) => {
                    const isExpanded = expandedMainDirections.includes(direction.name);
                    const filteredSubdirections = direction.subdirections.filter(sub =>
                      directionsSearch === '' || 
                      sub.toLowerCase().includes(directionsSearch.toLowerCase())
                    );
                    
                    // Check if all subdirections are selected
                    const allSubdirectionsSelected = direction.subdirections.every(sub => 
                      selectedDirections.includes(sub)
                    );
                    
                    return (
                      <div key={direction.name} className="flex flex-col gap-2">
                        {/* Main direction row */}
                        <div className="flex items-center gap-2 pl-0 pr-2 w-full">
                          <div 
                            className="relative w-6 h-6 shrink-0 cursor-pointer"
                            onClick={() => toggleDirection(direction.name)}
                          >
                            <input
                              type="checkbox"
                              checked={allSubdirectionsSelected}
                              onChange={() => toggleDirection(direction.name)}
                              className="sr-only"
                            />
                            <svg className="absolute inset-0 pointer-events-none" fill="none" viewBox="0 0 24 24">
                              {allSubdirectionsSelected ? (
                                <path d={filterSvgPaths.p7913d80} fill="#C95555" />
                              ) : (
                                <path d={filterSvgPaths.p542c300} fill="#737B8C" />
                              )}
                            </svg>
                          </div>
                          <span className="text-sm text-[#343a40] leading-5 font-['VinnytsiaSansReg:Book',sans-serif] not-italic flex-1 min-w-0">
                            {direction.name}
                          </span>
                          {viewMode === 'projects' && (
                            <span className="text-xs leading-4 text-[rgba(52,58,64,0.6)] font-['VinnytsiaSansReg:Book',sans-serif] not-italic shrink-0 whitespace-nowrap">
                              ({PROJECT_COUNTS[direction.name] || 0})
                            </span>
                          )}
                          <button
                            onClick={() => toggleMainDirection(direction.name)}
                            className="shrink-0 w-4 h-4"
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d={isExpanded ? svgPaths.p24d21cb0 : svgPaths.p1fa88440} fill="#1C1B1F" />
                            </svg>
                          </button>
                        </div>

                        {/* Subdirections */}
                        {isExpanded && (
                          <div className="flex flex-col gap-2">
                            {filteredSubdirections.map((subdirection, subIndex) => (
                              <label key={subdirection} className="flex items-center gap-2 pl-6 pr-8 w-full cursor-pointer">
                                <div className="relative w-6 h-6 shrink-0">
                                  <input
                                    type="checkbox"
                                    checked={selectedDirections.includes(subdirection)}
                                    onChange={() => toggleDirection(subdirection)}
                                    className="sr-only"
                                  />
                                  <svg className="absolute inset-0" fill="none" viewBox="0 0 24 24">
                                    {selectedDirections.includes(subdirection) ? (
                                      <path d={filterSvgPaths.p7913d80} fill="#C95555" />
                                    ) : (
                                      <path d={filterSvgPaths.p542c300} fill="#737B8C" />
                                    )}
                                  </svg>
                                </div>
                                <span className="text-sm text-[#343a40] leading-5 font-['VinnytsiaSansReg:Book',sans-serif] not-italic flex-1 min-w-0">
                                  {subdirection}
                                </span>
                                {viewMode === 'projects' && (
                                  <span className="text-xs leading-4 text-[rgba(52,58,64,0.6)] font-['VinnytsiaSansReg:Book',sans-serif] not-italic shrink-0 whitespace-nowrap">
                                    ({PROJECT_COUNTS[subdirection] || 0})
                                  </span>
                                )}
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-[rgba(52,58,64,0.2)]" />

          {/* Programs Section */}
          <div className="flex flex-col gap-4 relative">
            <button
              onClick={() => {
                setProgramsExpanded(!programsExpanded);
                setProgramsDropdownOpen(false); // Don't auto-open dropdown
              }}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg leading-6 text-[#343a40] text-right font-['VinnytsiaSerif:Book',sans-serif] not-italic">Програми</span>
                {selectedPrograms.length > 0 && (
                  <span className="bg-[#c95555] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-['VinnytsiaSansReg:Book',sans-serif]">
                    {selectedPrograms.length}
                  </span>
                )}
              </div>
              <div className="bg-white rounded-full p-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${programsExpanded ? 'rotate-180' : ''}`}>
                  <path d={programsExpanded ? svgPaths.p24d21cb0 : svgPaths.p1fa88440} fill="#1C1B1F" />
                </svg>
              </div>
            </button>

            {programsExpanded && (
              <div className="flex flex-col gap-4">
                {/* Search field - always visible when expanded */}
                <div className="flex flex-col gap-2">
                  <div className="relative w-full border border-[#e3e3e3] rounded-full">
                    <input
                      type="text"
                      placeholder="Пошук програми"
                      value={programsSearch}
                      onChange={(e) => setProgramsSearch(e.target.value)}
                      onFocus={() => setProgramsDropdownOpen(true)}
                      onBlur={() => setTimeout(() => setProgramsDropdownOpen(false), 200)}
                      className="w-full h-[40px] px-4 pr-12 text-sm font-['VinnytsiaSansReg:Book',sans-serif] placeholder:opacity-50 placeholder:text-[#343a40] placeholder:tracking-[-0.28px] border-0 focus:outline-none rounded-full"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center pointer-events-none">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d={filterSvgPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Dropdown - shows when search is focused */}
                  {programsDropdownOpen && (
                    <div className="bg-white rounded-[16px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.05)] flex flex-col items-start w-full">
                      {/* Checkboxes with custom scrollbar */}
                      <div className="h-[240px] relative w-full">
                        <div className="flex flex-col gap-[16px] items-start p-[8px] h-full overflow-y-auto custom-scrollbar">
                          {filteredPrograms.filter(program => !selectedPrograms.includes(program)).map((program, index) => (
                            <label key={program} className="flex items-start gap-2 cursor-pointer w-full relative group">
                              <div className="relative w-6 h-6 shrink-0 mt-0.5">
                                <input
                                  type="checkbox"
                                  checked={selectedPrograms.includes(program)}
                                  onChange={() => toggleProgram(program)}
                                  className="sr-only"
                                />
                                <svg className="absolute inset-0 pointer-events-none" fill="none" viewBox="0 0 24 24">
                                  {selectedPrograms.includes(program) ? (
                                    <path d={filterSvgPaths.p7913d80} fill="#C95555" />
                                  ) : (
                                    <path d={filterSvgPaths.p542c300} fill="#95989B" />
                                  )}
                                </svg>
                              </div>
                              <div className="flex-1 flex items-start gap-2 overflow-hidden">
                                <span 
                                  className="text-sm text-[#343a40] leading-5 font-['VinnytsiaSansReg:Book',sans-serif] not-italic flex-1 overflow-hidden"
                                  style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                  }}
                                >
                                  {program}
                                </span>
                                {viewMode === 'projects' && (
                                  <span className="text-xs leading-4 text-[rgba(52,58,64,0.6)] font-['VinnytsiaSansReg:Book',sans-serif] not-italic shrink-0 whitespace-nowrap">
                                    ({90 - index * 5})
                                  </span>
                                )}
                              </div>
                              
                              {/* Tooltip on hover - positioned outside overflow */}
                              <div className="absolute left-8 top-0 z-[100] hidden group-hover:block pointer-events-none" style={{ marginTop: '-40px' }}>
                                <div className="bg-[rgba(0,0,0,0.7)] rounded px-2 py-1.5 shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)] max-w-[264px] relative">
                                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-4 text-xs text-white whitespace-normal">
                                    {program}
                                  </p>
                                  <div className="absolute top-full left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[rgba(0,0,0,0.7)]" />
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Selected programs - shown below search */}
                {selectedPrograms.length > 0 && (
                  <div className="flex flex-col gap-2">
                    {selectedPrograms.map((program) => (
                      <div key={program} className="flex items-center gap-2 w-full">
                        <div className="relative w-6 h-6 shrink-0">
                          <svg className="absolute inset-0" fill="none" viewBox="0 0 24 24">
                            <path d={filterSvgPaths.p7913d80} fill="#C95555" />
                          </svg>
                        </div>
                        <span 
                          className="text-sm text-[#343a40] leading-5 font-['VinnytsiaSansReg:Book',sans-serif] not-italic flex-1 overflow-hidden"
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {program}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="bg-white rounded-xl flex flex-col overflow-hidden flex-1" style={{ height: 'calc(100vh - 240px)' }}>
          {contentView === 'map' ? (
            /* Map and Legend Container */
            <div className="flex-1 flex flex-col justify-between p-6 relative overflow-hidden w-full min-h-0">
              {/* Legend */}
              <div className="absolute top-6 left-6 bg-white border border-[rgba(52,58,64,0.1)] rounded-lg p-4 z-10 max-w-[240px]">
                <p className="text-sm text-[#343a40] leading-4 tracking-[-0.28px] mb-4 font-['VinnytsiaSansReg:Book',sans-serif] not-italic">
                  {viewMode === 'budget' ? 'Масштаб бюджету у млн грн:' : 'Кількість заходів:'}
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-0.5">
                    <div className="bg-[#ffeac1] h-1.5 w-[18px]" />
                    <div className="bg-[#ffd78a] h-1.5 w-[18px]" />
                    <div className="bg-[#fbca81] h-1.5 w-[18px]" />
                    <div className="bg-[#f7bd78] h-1.5 w-[18px]" />
                    <div className="bg-[#f3b06f] h-1.5 w-[18px]" />
                    <div className="bg-[#efa366] h-1.5 w-[18px]" />
                    <div className="bg-[#eb965d] h-1.5 w-[18px]" />
                    <div className="bg-[#e88854] h-1.5 w-[18px]" />
                    <div className="bg-[#e47b4b] h-1.5 w-[18px]" />
                    <div className="bg-[#e06e42] h-1.5 w-[18px]" />
                    <div className="bg-[#dc6139] h-1.5 w-[18px]" />
                    <div className="bg-[#d44727] h-1.5 w-[18px]" />
                  </div>
                  <div className="flex gap-0.5 text-[8px] text-[#343a40] text-center leading-3 font-['VinnytsiaSansReg:Book',sans-serif] not-italic">
                    {viewMode === 'budget' ? (
                      <>
                        {budgetLegendLabels.map((label, i) => (
                          <span key={i} className="w-[18px]">{label}</span>
                        ))}
                      </>
                    ) : (
                      <>
                        {projectsLegendLabels.map((label, i) => (
                          <span key={i} className="w-[18px]">{label}</span>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Map SVG */}
              <div className="flex-1 flex items-center justify-center min-h-0">
                <MapComponent 
                  svgPaths={svgPaths} 
                  viewMode={viewMode} 
                  budgetData={budgetData}
                  minBudget={minBudget}
                  maxBudget={maxBudget}
                  minProjects={minProjects}
                  maxProjects={maxProjects}
                  onHoverChange={setHoveredRegion}
                  onDistrictClick={(districtName) => {
                    setSelectedDistrict(districtName);
                    setCurrentPage('projects');
                  }}
                />
              </div>
            </div>
          ) : (
            /* Chart View */
            <ChartView
              budgetData={budgetData}
              viewMode={viewMode}
              minBudget={minBudget}
              maxBudget={maxBudget}
              minProjects={minProjects}
              maxProjects={maxProjects}
            />
          )}

          {/* Footer Divider and Info */}
          <div className="border-t border-[rgba(52,58,64,0.2)]" />
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-2 text-sm text-[#3c4d5d] leading-4 tracking-[-0.28px] font-['VinnytsiaSansReg:Book',sans-serif] not-italic">
              <span className="opacity-60">Джерело даних:</span>
              <a href="#" className="underline">Вінницька міська рада</a>
            </div>
            <div className="flex items-center gap-[9.567px]">
              {/* Views counter */}
              <div className="bg-[#f7f7f7] rounded-[999px] flex items-center gap-[8px] px-[16px] py-[10px]">
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <mask height="16" id="mask0_57_83" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                      <rect fill="#D9D9D9" height="16" width="16" />
                    </mask>
                    <g mask="url(#mask0_57_83)">
                      <path d={viewsSvgPaths.p145d9d00} fill="#343A40" />
                    </g>
                  </svg>
                </div>
                <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic text-[#343a40] text-[14px] text-nowrap">5 283</p>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-[#3c4d5d] text-[15.307px] font-['Open_Sans',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>LiveCharts</span>
                <div className="flex gap-[1.594px] w-full h-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-[#3c4d5d] h-full flex-1 rounded-[0.319px]" />
                  ))}
                </div>
              </div>
              <div className="h-6 w-[0.638px] bg-[#3c4d5d]" />
              <div className="text-[8px] text-[#3c4d5d] leading-[1.5] font-['Open_Sans',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
                Powered by LaSoft<br />Innovation Lab
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Hover Tooltip - rendered at top level outside scaled containers */}
      {hoveredRegion !== null && !isHoveringFilters && (
        <div 
          className="fixed bg-[rgba(0,0,0,0.7)] flex flex-col gap-2 p-2 rounded shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)] pointer-events-none z-50"
          style={{
            left: `${mousePos.x + 10}px`,
            top: `${mousePos.y - 10}px`,
            transform: 'translate(0, -100%)'
          }}
        >
          {/* District name with color indicator */}
          <div className="flex gap-1 items-center">
            <div className="size-1.5">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <circle cx="3" cy="3" fill={getColor(viewMode === 'budget' ? budgetData[hoveredRegion].budget : budgetData[hoveredRegion].projects)} r="3" />
              </svg>
            </div>
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-4 not-italic text-[10px] text-white">
              {districtNames[hoveredRegion]}
            </p>
          </div>
          
          {/* Budget amount */}
          <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-5 not-italic text-[12px] text-white">
            {budgetData[hoveredRegion].budget} млн грн
          </p>
          
          {/* Project count */}
          <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-5 not-italic text-[12px] text-white">
            {budgetData[hoveredRegion].projects} {budgetData[hoveredRegion].projects === 1 ? 'захід' : budgetData[hoveredRegion].projects < 5 ? 'заходи' : 'заходів'}
          </p>
          
          {/* Bottom arrow */}
          <div className="absolute bottom-[-6px] h-1.5 left-1/2 translate-x-[-50%] w-3">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
              <path d="M6 6L0 0H12L6 6Z" fill="rgba(0,0,0,0.7)" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}


interface MapComponentProps {
  svgPaths: any;
  viewMode: 'budget' | 'projects';
  budgetData: Array<{ budget: number; projects: number }>;
  minBudget: number;
  maxBudget: number;
  minProjects: number;
  maxProjects: number;
  onHoverChange: (region: number | null) => void;
  onDistrictClick: (districtName: string) => void;
}

function MapComponent({ svgPaths, viewMode, budgetData, minBudget, maxBudget, minProjects, maxProjects, onHoverChange, onDistrictClick }: MapComponentProps) {
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Helper to handle hover changes
  const handleHoverChange = (region: number | null) => {
    setHoveredRegion(region);
    onHoverChange(region);
  };

  // District names for each region
  const districtNames = [
    'Замостя', 'Вишенька', 'Центр', 'Барський район', 'Поділля', 'Слов\'янка',
    'Старе місто', 'Ківцівка', 'Тяжилів', 'Корея', 'Пирогово', 'Стрижавка'
  ];

  // Map natural dimensions (based on furthest positioned elements)
  const MAP_WIDTH = 677.812; // 457 + 220.812
  const MAP_HEIGHT = 492.28; // 364.27 + 128.011



  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        
        // Add padding to prevent map from touching edges
        const PADDING = 20; // pixels of padding on each side
        const availableWidth = containerWidth - (PADDING * 2);
        const availableHeight = containerHeight - (PADDING * 2);
        
        // Calculate scale to fit container while maintaining aspect ratio
        const scaleX = availableWidth / MAP_WIDTH;
        const scaleY = availableHeight / MAP_HEIGHT;
        const newScale = Math.min(scaleX, scaleY, 1.2); // Allow slight upscaling to 1.2x
        
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // Get color based on value and view mode with dynamic min/max
  const getColor = (value: number) => {
    const colors = [
      '#FFEAC1', '#FFD78A', '#FBCA81', '#F7BD78', '#F3B06F', 
      '#EFA366', '#EB965D', '#E88854', '#E47B4B', '#E06E42', 
      '#DC6139', '#D44727'
    ];
    
    if (viewMode === 'budget') {
      // Use dynamic min and max budget values
      const normalizedValue = Math.max(0, Math.min(1, (value - minBudget) / (maxBudget - minBudget)));
      const colorIndex = Math.floor(normalizedValue * (colors.length - 1));
      return colors[colorIndex];
    } else {
      // Use dynamic min and max project values
      const normalizedValue = Math.max(0, Math.min(1, (value - minProjects) / (maxProjects - minProjects)));
      const colorIndex = Math.floor(normalizedValue * (colors.length - 1));
      return colors[colorIndex];
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center" ref={containerRef}>
      <div 
        className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start" 
        style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }}
      >
        {/* Map polygons with exact positioning from Figma */}
        <div className="[grid-area:1_/_1] h-[128.011px] ml-[106.91px] mt-[364.27px] relative w-[209.692px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 129">
            <g opacity={hoveredRegion === null ? "1" : hoveredRegion === 0 ? "1" : "0.3"} className="cursor-pointer pointer-events-auto" onMouseEnter={() => handleHoverChange(0)} onMouseLeave={() => handleHoverChange(null)} onClick={() => onDistrictClick(districtNames[0])}>
              <path d={svgPaths.p21e2a0c0} fill={getColor(viewMode === 'budget' ? budgetData[0].budget : budgetData[0].projects)} />
              <path d={svgPaths.p2e010800} stroke="#343A40" strokeOpacity="0.14" strokeWidth="1.7152" />
            </g>
          </svg>
        </div>
        
        <div className="[grid-area:1_/_1] h-[152.692px] ml-0 mt-[250.78px] relative w-[104.375px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 153">
            <g opacity={hoveredRegion === null ? "1" : hoveredRegion === 1 ? "1" : "0.3"} className="cursor-pointer pointer-events-auto" onMouseEnter={() => handleHoverChange(1)} onMouseLeave={() => handleHoverChange(null)} onClick={() => onDistrictClick(districtNames[1])}>
              <path d={svgPaths.p13a2e900} fill={getColor(viewMode === 'budget' ? budgetData[1].budget : budgetData[1].projects)} />
              <path d={svgPaths.p89f7600} stroke="#343A40" strokeOpacity="0.14" strokeWidth="1.7152" />
            </g>
          </svg>
        </div>
        
        <div className="[grid-area:1_/_1] h-[94.973px] ml-[91.02px] mt-[276.64px] relative w-[136.618px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137 95">
            <g opacity={hoveredRegion === null ? "1" : hoveredRegion === 2 ? "1" : "0.3"} className="cursor-pointer pointer-events-auto" onMouseEnter={() => handleHoverChange(2)} onMouseLeave={() => handleHoverChange(null)} onClick={() => onDistrictClick(districtNames[2])}>
              <path d={svgPaths.p3b7ff500} fill={getColor(viewMode === 'budget' ? budgetData[2].budget : budgetData[2].projects)} />
              <path d={svgPaths.p127f8800} stroke="#343A40" strokeOpacity="0.14" strokeWidth="1.7152" />
            </g>
          </svg>
        </div>
        
        <div className="[grid-area:1_/_1] h-[132.307px] ml-[164.1px] mt-[256.88px] relative w-[130.263px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 133">
            <g opacity={hoveredRegion === null ? "1" : hoveredRegion === 3 ? "1" : "0.3"} className="cursor-pointer pointer-events-auto" onMouseEnter={() => handleHoverChange(3)} onMouseLeave={() => handleHoverChange(null)} onClick={() => onDistrictClick(districtNames[3])}>
              <path d={svgPaths.p3f4e8500} fill={getColor(viewMode === 'budget' ? budgetData[3].budget : budgetData[3].projects)} />
              <path d={svgPaths.p37cdda00} stroke="#343A40" strokeOpacity="0.14" strokeWidth="1.7152" />
            </g>
          </svg>
        </div>
        
        <div className="[grid-area:1_/_1] h-[89.35px] ml-[255.44px] mt-[264.61px] relative w-[69.103px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 90">
            <g opacity={hoveredRegion === null ? "1" : hoveredRegion === 4 ? "1" : "0.3"} className="cursor-pointer pointer-events-auto" onMouseEnter={() => handleHoverChange(4)} onMouseLeave={() => handleHoverChange(null)} onClick={() => onDistrictClick(districtNames[4])}>
              <path d={svgPaths.p257c5e00} fill={getColor(viewMode === 'budget' ? budgetData[4].budget : budgetData[4].projects)} />
              <path d={svgPaths.p292c8d00} stroke="#343A40" strokeOpacity="0.14" strokeWidth="1.7152" />
            </g>
          </svg>
        </div>
        
        <div className="[grid-area:1_/_1] h-[90.209px] ml-[206.99px] mt-[216.5px] relative w-[173.155px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174 91">
            <g opacity={hoveredRegion === null ? "1" : hoveredRegion === 5 ? "1" : "0.3"} className="cursor-pointer pointer-events-auto" onMouseEnter={() => handleHoverChange(5)} onMouseLeave={() => handleHoverChange(null)} onClick={() => onDistrictClick(districtNames[5])}>
              <path d={svgPaths.p16414f00} fill={getColor(viewMode === 'budget' ? budgetData[5].budget : budgetData[5].projects)} />
              <path d={svgPaths.p19408d00} stroke="#343A40" strokeOpacity="0.14" strokeWidth="1.7152" />
            </g>
          </svg>
        </div>
        
        <div className="[grid-area:1_/_1] h-[293.824px] ml-[94.2px] mt-[6.87px] relative w-[248.612px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 249 294">
            <g opacity={hoveredRegion === null ? "1" : hoveredRegion === 6 ? "1" : "0.3"} className="cursor-pointer pointer-events-auto" onMouseEnter={() => handleHoverChange(6)} onMouseLeave={() => handleHoverChange(null)} onClick={() => onDistrictClick(districtNames[6])}>
              <mask fill="white" id="path-1-inside-1_3_2560">
                <path d={svgPaths.p2fc48d00} />
              </mask>
              <path d={svgPaths.p2fc48d00} fill={getColor(viewMode === 'budget' ? budgetData[6].budget : budgetData[6].projects)} mask="url(#path-1-inside-1_3_2560)" stroke="#343A40" strokeOpacity="0.14" strokeWidth="3.4304" />
            </g>
          </svg>
        </div>
        
        <div className="[grid-area:1_/_1] h-[161.517px] ml-[268.15px] mt-[275.03px] relative w-[148.532px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 162">
            <g opacity={hoveredRegion === null ? "1" : hoveredRegion === 7 ? "1" : "0.3"} className="cursor-pointer pointer-events-auto" onMouseEnter={() => handleHoverChange(7)} onMouseLeave={() => handleHoverChange(null)} onClick={() => onDistrictClick(districtNames[7])}>
              <path d={svgPaths.p3b50f980} fill={getColor(viewMode === 'budget' ? budgetData[7].budget : budgetData[7].projects)} />
              <path d={svgPaths.p1df4ea00} stroke="#343A40" strokeOpacity="0.14" strokeWidth="1.7152" />
            </g>
          </svg>
        </div>
        
        <div className="[grid-area:1_/_1] h-[128.011px] ml-[338.84px] mt-0 relative w-[238.287px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239 129">
            <g opacity={hoveredRegion === null ? "1" : hoveredRegion === 8 ? "1" : "0.3"} className="cursor-pointer pointer-events-auto" onMouseEnter={() => handleHoverChange(8)} onMouseLeave={() => handleHoverChange(null)} onClick={() => onDistrictClick(districtNames[8])}>
              <path d={svgPaths.p4691e00} fill={getColor(viewMode === 'budget' ? budgetData[8].budget : budgetData[8].projects)} />
              <path d={svgPaths.p7334d00} stroke="#343A40" strokeOpacity="0.14" strokeWidth="1.7152" />
            </g>
          </svg>
        </div>
        
        <div className="[grid-area:1_/_1] h-[136.602px] ml-[337.25px] mt-[102.35px] relative w-[127.086px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 137">
            <g opacity={hoveredRegion === null ? "1" : hoveredRegion === 9 ? "1" : "0.3"} className="cursor-pointer pointer-events-auto" onMouseEnter={() => handleHoverChange(9)} onMouseLeave={() => handleHoverChange(null)} onClick={() => onDistrictClick(districtNames[9])}>
              <path d={svgPaths.p341bac00} fill={getColor(viewMode === 'budget' ? budgetData[9].budget : budgetData[9].projects)} />
              <path d={svgPaths.p2848880} stroke="#343A40" strokeOpacity="0.14" strokeWidth="1.7152" />
            </g>
          </svg>
        </div>
        
        <div className="[grid-area:1_/_1] h-[261.177px] ml-[457px] mt-[58.14px] relative w-[220.812px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 262">
            <g opacity={hoveredRegion === null ? "1" : hoveredRegion === 10 ? "1" : "0.3"} className="cursor-pointer pointer-events-auto" onMouseEnter={() => handleHoverChange(10)} onMouseLeave={() => handleHoverChange(null)} onClick={() => onDistrictClick(districtNames[10])}>
              <path d={svgPaths.pba53c00} fill={getColor(viewMode === 'budget' ? budgetData[10].budget : budgetData[10].projects)} />
              <path d={svgPaths.p4361480} stroke="#343A40" strokeOpacity="0.14" strokeWidth="1.7152" />
            </g>
          </svg>
        </div>
        
        <div className="[grid-area:1_/_1] h-[200.178px] ml-[373.91px] mt-[228.14px] relative w-[196.189px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197 201">
            <g opacity={hoveredRegion === null ? "1" : hoveredRegion === 11 ? "1" : "0.3"} className="cursor-pointer pointer-events-auto" onMouseEnter={() => handleHoverChange(11)} onMouseLeave={() => handleHoverChange(null)} onClick={() => onDistrictClick(districtNames[11])}>
              <path d={svgPaths.p254ff680} fill={getColor(viewMode === 'budget' ? budgetData[11].budget : budgetData[11].projects)} />
              <path d={svgPaths.p76a2d80} stroke="#343A40" strokeOpacity="0.14" strokeWidth="1.7152" />
            </g>
          </svg>
        </div>

        {/* Budget labels with exact positions from Figma - show budget or projects based on viewMode */}
        {/* All bubbles hide when hovering any polygon */}
        {hoveredRegion === null && (
          <div className="[grid-area:1_/_1] bg-white ml-[482.91px] mt-[128.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[72px]">
            <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] left-1/2 not-italic text-[#343a40] text-[20px] text-center text-nowrap top-[calc(50%-7px)] translate-x-[-50%] whitespace-pre">
              {viewMode === 'budget' ? budgetData[10].budget : budgetData[10].projects}
            </p>
          </div>
        )}
        
        {hoveredRegion === null && (
          <div className="[grid-area:1_/_1] bg-white ml-[290.91px] mt-[216.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[72px]">
            <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] left-[calc(50%+0.5px)] not-italic text-[#343a40] text-[20px] text-center text-nowrap top-[calc(50%-7px)] translate-x-[-50%] whitespace-pre">
              {viewMode === 'budget' ? budgetData[6].budget : budgetData[6].projects}
            </p>
          </div>
        )}
        
        {hoveredRegion === null && (
          <div className="[grid-area:1_/_1] bg-white ml-[178.91px] mt-[264.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[72px]">
            <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] left-1/2 not-italic text-[#343a40] text-[20px] text-center text-nowrap top-[calc(50%-7px)] translate-x-[-50%] whitespace-pre">
              {viewMode === 'budget' ? budgetData[11].budget : budgetData[11].projects}
            </p>
          </div>
        )}
        
        {hoveredRegion === null && (
          <div className="[grid-area:1_/_1] bg-white ml-[266.91px] mt-[136.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[56px]">
            <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] left-[calc(50%+0.5px)] not-italic text-[#343a40] text-[16px] text-center text-nowrap top-[calc(50%-7px)] translate-x-[-50%] whitespace-pre">
              {viewMode === 'budget' ? budgetData[5].budget : budgetData[5].projects}
            </p>
          </div>
        )}
        
        {hoveredRegion === null && (
          <div className="[grid-area:1_/_1] bg-white ml-[434.91px] mt-[48.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[56px]">
            <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-1px)] not-italic text-[#343a40] text-[14px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">
              {viewMode === 'budget' ? budgetData[8].budget : budgetData[8].projects}
            </p>
          </div>
        )}
        
        {hoveredRegion === null && (
          <div className="[grid-area:1_/_1] bg-white ml-[378.91px] mt-[136.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[56px]">
            <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-1px)] not-italic text-[#343a40] text-[14px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">
              {viewMode === 'budget' ? budgetData[9].budget : budgetData[9].projects}
            </p>
          </div>
        )}
        
        {hoveredRegion === null && (
          <div className="[grid-area:1_/_1] bg-white ml-[431.91px] mt-[288.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[48px]">
            <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-1px)] not-italic text-[#343a40] text-[14px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">
              {viewMode === 'budget' ? budgetData[7].budget : budgetData[7].projects}
            </p>
          </div>
        )}
        
        {hoveredRegion === null && (
          <div className="[grid-area:1_/_1] bg-white ml-[319.91px] mt-[352.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[52px]">
            <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-1px)] not-italic text-[#343a40] text-[14px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">
              {viewMode === 'budget' ? budgetData[4].budget : budgetData[4].projects}
            </p>
          </div>
        )}
        
        {hoveredRegion === null && (
          <div className="[grid-area:1_/_1] bg-white ml-[271.91px] mt-[288.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[44px]">
            <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-0.5px)] not-italic text-[#343a40] text-[12px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">
              {viewMode === 'budget' ? budgetData[2].budget : budgetData[2].projects}
            </p>
          </div>
        )}
        
        {hoveredRegion === null && (
          <div className="[grid-area:1_/_1] bg-white ml-[215.91px] mt-[382.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[40px]">
            <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-1px)] not-italic text-[#343a40] text-[12px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">
              {viewMode === 'budget' ? budgetData[3].budget : budgetData[3].projects}
            </p>
          </div>
        )}
        
        {hoveredRegion === null && (
          <div className="[grid-area:1_/_1] bg-white ml-[119.91px] mt-[310.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[48px]">
            <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-0.5px)] not-italic text-[#343a40] text-[12px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">
              {viewMode === 'budget' ? budgetData[1].budget : budgetData[1].projects}
            </p>
          </div>
        )}
        
        {hoveredRegion === null && (
          <div className="[grid-area:1_/_1] bg-white ml-[39.91px] mt-[270.14px] relative rounded-[999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] size-[56px]">
            <p className="absolute font-['VinnytsiaSansBold:Bold',sans-serif] leading-[16px] left-[calc(50%-0.5px)] not-italic text-[#343a40] text-[14px] text-center text-nowrap top-[calc(50%-4px)] translate-x-[-50%] whitespace-pre">
              {viewMode === 'budget' ? budgetData[0].budget : budgetData[0].projects}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

interface DatePickerProps {
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  currentMonth: number;
  currentYear: number;
  onStartDateSelect: (date: Date | null) => void;
  onEndDateSelect: (date: Date | null) => void;
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
}

function DatePicker({ 
  selectedStartDate, 
  selectedEndDate, 
  currentMonth, 
  currentYear, 
  onStartDateSelect, 
  onEndDateSelect, 
  onMonthChange, 
  onYearChange 
}: DatePickerProps) {
  const monthsShort = [
    'Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер',
    'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'
  ];

  const handleMonthChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        onMonthChange(11);
        onYearChange(currentYear - 1);
      } else {
        onMonthChange(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        onMonthChange(0);
        onYearChange(currentYear + 1);
      } else {
        onMonthChange(currentMonth + 1);
      }
    }
  };

  const handleYearChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      onYearChange(currentYear - 1);
    } else {
      onYearChange(currentYear + 1);
    }
  };

  const handleDateSelect = (date: Date, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;
    
    if (!selectedStartDate || (selectedEndDate && date < selectedStartDate)) {
      onStartDateSelect(date);
      onEndDateSelect(null);
    } else if (!selectedEndDate) {
      if (date >= selectedStartDate) {
        onEndDateSelect(date);
      } else {
        onStartDateSelect(date);
        onEndDateSelect(null);
      }
    } else {
      onStartDateSelect(date);
      onEndDateSelect(null);
    }
  };

  const isDateSelected = (date: Date) => {
    if (selectedStartDate && selectedEndDate) {
      return date >= selectedStartDate && date <= selectedEndDate;
    }
    return false;
  };

  const isDateStart = (date: Date) => {
    return selectedStartDate && date.toDateString() === selectedStartDate.toDateString();
  };

  const isDateEnd = (date: Date) => {
    return selectedEndDate && date.toDateString() === selectedEndDate.toDateString();
  };

  const isDateInRange = (date: Date) => {
    return isDateSelected(date) && !isDateStart(date) && !isDateEnd(date);
  };

  const renderDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
    const days: JSX.Element[] = [];

    // Add previous month's trailing days
    const startDay = firstDay === 0 ? 6 : firstDay - 1; // Adjust for Monday start
    for (let i = startDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      const date = new Date(prevYear, prevMonth, day);
      
      days.push(
        <div
          key={`prev-${day}`}
          className="basis-0 grow min-h-px min-w-px flex items-center justify-center h-8 rounded-full"
        >
          <div className="flex items-center justify-center px-2.5 py-2">
            <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] text-[#343a40] text-[14px] text-center tracking-[0.5px]">
              <p className="leading-4">{day}</p>
            </div>
          </div>
        </div>
      );
    }

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10" />);
    }

    // Add current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isStart = isDateStart(date);
      const isEnd = isDateEnd(date);
      const inRange = isDateInRange(date);

      days.push(
        <div
          key={day}
          className="basis-0 grow min-h-px min-w-px flex items-center justify-center h-8 rounded-full cursor-pointer relative"
          onClick={() => handleDateSelect(date, true)}
        >
          {inRange && (
            <>
              <div className="absolute bg-[#faeeee] bottom-0 h-8 left-[-31.25%] right-1/2" />
              <div className="absolute bottom-0 flex h-8 items-center justify-center left-[calc(50%-0.43px)] translate-x-[-50%] w-10">
                <div className="flex-none rotate-180 scale-y-[-100%]">
                  <div className="bg-[#faeeee] h-8 w-10" />
                </div>
              </div>
              <div className="absolute bg-[#faeeee] bottom-0 h-8 left-1/2 right-[-31.25%]" />
            </>
          )}
          <div className={`flex items-center justify-center w-8 h-8 rounded-full relative z-10 ${
            isStart || isEnd ? 'bg-[#c95555]' : ''
          }`}>
            <div className={`flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic text-[14px] text-center tracking-[0.5px] ${
              isStart || isEnd ? 'text-white' : 
              'text-[#343a40]'
            }`}>
              <p className="leading-4">{day}</p>
            </div>
          </div>
        </div>
      );
    }

    // Add next month's leading days to fill the grid
    const totalCells = days.length;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    
    for (let day = 1; day <= remainingCells; day++) {
      const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      const date = new Date(nextYear, nextMonth, day);
      
      days.push(
        <div
          key={`next-${day}`}
          className="basis-0 grow min-h-px min-w-px flex items-center justify-center h-8 rounded-full"
        >
          <div className="flex items-center justify-center px-2.5 py-2">
            <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-[0.38] text-[#343a40] text-[14px] text-center tracking-[0.5px]">
              <p className="leading-4">{day}</p>
            </div>
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_28px_0px_rgba(0,0,0,0.05)] overflow-hidden w-full mt-1">
      {/* Selection Row */}
      <div className="h-10 border-b border-[#d0d1d2]">
        <div className="flex items-center justify-between px-2 h-full">
          {/* Month Controls */}
          <div className="basis-0 grow flex items-center justify-center min-h-px min-w-px">
            <button
              className="flex items-center justify-center shrink-0 size-8"
              onClick={() => handleMonthChange('prev')}
            >
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-full w-10">
                <div className="flex items-center justify-center h-10 w-full">
                  <svg className="block shrink-0 size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={datePickerSvgPaths.pc87b500} fill="#343A40" />
                  </svg>
                </div>
              </div>
            </button>
            <div className="flex flex-col items-start">
              <div className="flex gap-2 items-center justify-center overflow-hidden rounded-full pl-2 pr-1 py-2.5">
                <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-5">{monthsShort[currentMonth]}</p>
                </div>
                <svg className="block shrink-0 size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d={datePickerSvgPaths.p1e934100} fill="#343A40" />
                </svg>
              </div>
            </div>
            <button
              className="flex items-center justify-center shrink-0 size-8"
              onClick={() => handleMonthChange('next')}
            >
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-full w-10">
                <div className="flex items-center justify-center h-10 w-full">
                  <svg className="block shrink-0 size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={datePickerSvgPaths.pa1eb970} fill="#343A40" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
          
          {/* Year Controls */}
          <div className="basis-0 grow flex items-center justify-center min-h-px min-w-px">
            <button
              className="flex items-center justify-center shrink-0 size-8"
              onClick={() => handleYearChange('prev')}
            >
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-full w-10">
                <div className="flex items-center justify-center h-10 w-full">
                  <svg className="block shrink-0 size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={datePickerSvgPaths.pc87b500} fill="#343A40" />
                  </svg>
                </div>
              </div>
            </button>
            <div className="flex flex-col items-start">
              <div className="flex gap-2 items-center justify-center overflow-hidden rounded-full pl-2 pr-1 py-2.5">
                <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic shrink-0 text-[#343a40] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-5">{currentYear}</p>
                </div>
                <svg className="block shrink-0 size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d={datePickerSvgPaths.p1e934100} fill="#343A40" />
                </svg>
              </div>
            </div>
            <button
              className="flex items-center justify-center shrink-0 size-8"
              onClick={() => handleYearChange('next')}
            >
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-full w-10">
                <div className="flex items-center justify-center h-10 w-full">
                  <svg className="block shrink-0 size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={datePickerSvgPaths.pa1eb970} fill="#343A40" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex flex-col items-start p-3">
        {/* Days of the week */}
        <div className="flex items-start justify-center w-full mb-1">
          {['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'].map((day, i) => (
            <div key={i} className="basis-0 grow h-8 flex items-center justify-center min-h-px min-w-px rounded-full">
              <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic text-[#343a40] text-[14px] text-center tracking-[0.5px]">
                <p className="leading-4">{day}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Calendar days grid */}
        <div className="grid grid-cols-7 w-full gap-y-0">
          {renderDays()}
        </div>
      </div>
    </div>
  );
}