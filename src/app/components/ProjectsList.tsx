import listSvgPaths from '../imports/svg-nj0q18ja6b';
import cardSvgPaths from '../imports/svg-oid8cvtejv';
import svgPaths from '../imports/svg-r3calk4byz';
import filterSvgPaths from '../imports/svg-vlkj6996dt';
import datePickerSvgPaths from '../imports/svg-zftmp9pkai';
import districtSvgPaths from '../imports/svg-yjhl4nr828';
import clearSvgPaths from '../imports/svg-dffh2v4h3n';
import searchSvgPaths from '../imports/svg-benquzv13h';
import modalSvgPaths from '../imports/svg-3b0jlb9m40';
import { Download, Plus, Minus, ChevronDown, Search, Eye } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface ProjectsListProps {
  onBackToDashboard: () => void;
  initialDistrict?: string | null;
}

interface Project {
  id: number;
  title: string;
  code: string;
  sphere: string;
  program: string;
  location: string;
  budget: number;
  image: string;
  date: Date;
}

// Direction categories (from dashboard)
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

// Programs (from dashboard)
const PROGRAMS = [
  'Програма «Муніципальний університет перепідготовки та підвищення кваліфікації посадових осіб місцевого самоврядування Вінницької міської ради»',
  'Програма надання фінансової підтримки інститутам громадянського суспільства на реалізацію проектів на териорії Вінницької міської територіальної громади',
  'Програма інноваційного розвитку муніципального управління на 2017-2026 рр.',
  'Програма «Нагородження відзнаками міського рівня, організація і проведення урочистих та інших заходів у населених пунктах, що входять до Вінницької міської територіальної громади на 2021-2025 роки»',
  'Програма запобігання виникненню надзвичайних ситуацій природного, техногенного, соціального характеру та надзвичайних ситуацій в умовах воєнного стану, ліквідації їх наслідків на 2020-2027 роки',
  'Програма використання соціальної реклами для інформування громадськості та профілактики негативних явищ у суспільстві на 2021-2025 роки'
];

// Districts (from dashboard map)
const DISTRICTS = [
  'Замостя',
  'Вишенька',
  'Центр',
  'Барський район',
  'Поділля',
  'Слов\'янка',
  'Старе місто',
  'Ківцівка',
  'Тяжилів',
  'Корея',
  'Пирогово',
  'Стрижавка'
];

// Project name templates by category
const projectTemplates = {
  'Освіта': [
    'Реконструкція школи №',
    'Ремонт навчального закладу №',
    'Оновлення дитячого садка №',
    'Модернізація ліцею №',
    'Капітальний ремонт гімназії №'
  ],
  'Транспорт, зв\'язок, енергетика, інформаційні технології': [
    'Ремонт вулиці',
    'Реконструкція дорожнього покриття',
    'Встановлення світлофорів ��а',
    'Оновлення системи освітлення',
    'Капітальний ремонт тротуарів'
  ],
  'Культура і мистецтво': [
    'Реставрація культурного центру',
    'Ремонт будинку культури',
    'Оновлення бібліотеки №',
    'Модернізація музею',
    'Реконструкція театру'
  ],
  'Охорона здоров\'я': [
    'Ремонт поліклініки №',
    'Оновлення лікарні №',
    'Модернізація медичного центру',
    'Капітальний ремонт амбулаторії',
    'Реконструкція медичного закладу'
  ],
  'Архітектура і містобудування': [
    'Благоустрій парку',
    'Реконструкція скверу',
    'Оновлення міської площі',
    'Модернізація громадського простору',
    'Капітальний ремонт фасадів'
  ],
  'Туризм, дозвілля, молодь': [
    'Створення молодіжного центру',
    'Реконструкція зони відпочинку',
    'Оновлення туристичного об\'єкту',
    'Модернізація дозвіллєвого центру',
    'Облаштування місця відпочинку'
  ],
  'Фізкультура та спорт': [
    'Будівництво спортивного майданчика',
    'Реконструкція стадіону',
    'Оновлення спортзалу №',
    'Модернізація басейну',
    'Капітальний ремонт спорткомплексу'
  ],
  'Комунальні підприємства': [
    'Ремонт системи водопостачання',
    'Оновлення теплової мережі',
    'Модернізація каналізації',
    'Реконструкція котельні',
    'Капітальний ремонт комунальної інфраструктури'
  ],
  'Благоустрій міста та охорона навколишнього середовища': [
    'Озеленення району',
    'Встановлення дитячого майданчика',
    'Створення зеленої зони',
    'Благоустрій території',
    'Реконструкція парку'
  ],
  'Громадська участь': [
    'Створення громадського простору',
    'Реалізація ініціативи мешканців',
    'Облаштування зони для громади',
    'Модернізація громадського центру',
    'Реконструкція місця зустрічей'
  ]
};

const streetNames = ['Соборна', 'Київська', 'Хмельницьке шосе', 'Келецька', 'Пирогова', 'Коцюбинського', '600-річчя', 'Зодчих', 'Чехова', 'Грушевського'];

const images = [
  'https://images.unsplash.com/photo-1622818171279-fe0b6a336835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW58ZW58MXx8fHwxNzY1NTU1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1614213275608-539f9452373a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwcGFyayUyMHBsYXlncm91bmR8ZW58MXx8fHwxNzY1NTU3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1592066575517-58df903152f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjU1NDQ1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NTU1Nzg5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1582765974199-34f88f3c8bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaWVsZHxlbnwxfHx8fDE3NjU1NTc4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1730422736576-f75a57fd5638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjZW50ZXJ8ZW58MXx8fHwxNzY1NTU3ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080'
];

// Generate 2000 projects
function generateProjects() {
  const projects = [];
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  for (let i = 1; i <= 2000; i++) {
    const direction = DIRECTIONS[i % DIRECTIONS.length].name;
    const district = DISTRICTS[i % DISTRICTS.length];
    const program = PROGRAMS[i % PROGRAMS.length];
    const templates = projectTemplates[direction];
    const template = templates[i % templates.length];
    
    let title = template;
    if (template.includes('№')) {
      title = `${template}${Math.floor(i / 10) + 1}`;
    } else if (template.includes('вулиці') || template.includes('на')) {
      title = `${template} ${streetNames[i % streetNames.length]}`;
    } else {
      title = `${template} ${i}`;
    }
    
    const code = String(1000000000 + i).padStart(10, '0');
    const budget = Math.floor(Math.random() * 2500000) + 100000;
    const image = images[i % images.length];
    
    // Generate dates spread across different periods
    // Distribute projects: 40% current year, 20% last year, 10% last 6 months, 10% current quarter, 20% older (last 6 years)
    let projectDate;
    const rand = Math.random();
    if (rand < 0.4) {
      // Current year (2025)
      const month = Math.floor(Math.random() * 12);
      const day = Math.floor(Math.random() * 28) + 1;
      projectDate = new Date(currentYear, month, day);
    } else if (rand < 0.6) {
      // Last year (2024)
      const month = Math.floor(Math.random() * 12);
      const day = Math.floor(Math.random() * 28) + 1;
      projectDate = new Date(currentYear - 1, month, day);
    } else if (rand < 0.7) {
      // Last 6 months
      const monthsAgo = Math.floor(Math.random() * 6);
      const day = Math.floor(Math.random() * 28) + 1;
      const targetDate = new Date(currentDate);
      targetDate.setMonth(targetDate.getMonth() - monthsAgo);
      projectDate = new Date(targetDate.getFullYear(), targetDate.getMonth(), day);
    } else if (rand < 0.8) {
      // Current quarter
      const currentMonth = currentDate.getMonth();
      const quarterStart = Math.floor(currentMonth / 3) * 3;
      const monthInQuarter = Math.floor(Math.random() * 3);
      const day = Math.floor(Math.random() * 28) + 1;
      projectDate = new Date(currentYear, quarterStart + monthInQuarter, day);
    } else {
      // Last 6 years (2019-2024)
      const yearsAgo = Math.floor(Math.random() * 6) + 1;
      const month = Math.floor(Math.random() * 12);
      const day = Math.floor(Math.random() * 28) + 1;
      projectDate = new Date(currentYear - yearsAgo, month, day);
    }
    
    projects.push({
      id: i,
      title,
      code,
      sphere: direction,
      program,
      location: district,
      budget,
      image,
      date: projectDate
    });
  }
  
  return projects;
}

// Mock project data - 2000 projects
const projects = generateProjects();

export function ProjectsList({ onBackToDashboard, initialDistrict }: ProjectsListProps) {
  // Filter state - Period and Budget expanded by default
  const [selectedPeriod, setSelectedPeriod] = useState('currentYear');
  const [periodExpanded, setPeriodExpanded] = useState(true);
  const [budgetRange, setBudgetRange] = useState([0, 10000000]);
  const [budgetExpanded, setBudgetExpanded] = useState(true);
  const [districtExpanded, setDistrictExpanded] = useState(!!initialDistrict);
  const [directionsExpanded, setDirectionsExpanded] = useState(false);
  const [programsExpanded, setProgramsExpanded] = useState(false);
  
  // Direction filter state
  const [selectedDirections, setSelectedDirections] = useState<string[]>([]);
  const [directionsSearch, setDirectionsSearch] = useState('');
  const [expandedMainDirections, setExpandedMainDirections] = useState<string[]>([]);
  
  // Programs filter state
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [programsSearch, setProgramsSearch] = useState('');
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  
  // District filter state - Initialize with initialDistrict if provided
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>(initialDistrict ? [initialDistrict] : []);
  const [districtSearch, setDistrictSearch] = useState('');
  
  // Search, sort, and view state
  const [projectSearch, setProjectSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [itemsPerPageDropdownOpen, setItemsPerPageDropdownOpen] = useState(false);
  
  // Modal state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Date picker state
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const datePickerRef = useRef<HTMLDivElement>(null);
  
  // Filter directions based on search
  const filteredDirections = DIRECTIONS.filter(direction =>
    directionsSearch === '' ||
    direction.name.toLowerCase().includes(directionsSearch.toLowerCase()) ||
    direction.subdirections.some(sub => sub.toLowerCase().includes(directionsSearch.toLowerCase()))
  );
  
  // Filter programs based on search
  const filteredPrograms = PROGRAMS.filter(program =>
    program.toLowerCase().includes(programsSearch.toLowerCase())
  );
  
  // Filter districts based on search
  const filteredDistricts = DISTRICTS.filter(district =>
    district.toLowerCase().includes(districtSearch.toLowerCase())
  );
  
  // Toggle direction selection
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
  
  // Toggle main direction expansion
  const toggleMainDirection = (mainDirection: string) => {
    setExpandedMainDirections(prev =>
      prev.includes(mainDirection)
        ? prev.filter(d => d !== mainDirection)
        : [...prev, mainDirection]
    );
  };
  
  // Toggle program selection
  const toggleProgram = (program: string) => {
    setSelectedPrograms(prev =>
      prev.includes(program)
        ? prev.filter(p => p !== program)
        : [...prev, program]
    );
  };
  
  // Toggle district selection
  const toggleDistrict = (district: string) => {
    setSelectedDistricts(prev =>
      prev.includes(district)
        ? prev.filter(d => d !== district)
        : [...prev, district]
    );
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setSelectedPeriod('currentYear');
    setBudgetRange([50000, 5000000]);
    setSelectedDirections([]);
    setSelectedPrograms([]);
    setSelectedDistricts([]);
    setDirectionsSearch('');
    setProgramsSearch('');
    setDistrictSearch('');
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };
  
  // Budget slider state and handlers
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDraggingMin, setIsDraggingMin] = useState(false);
  const [isDraggingMax, setIsDraggingMax] = useState(false);
  
  const MIN_BUDGET = 0;
  const MAX_BUDGET = 10000000; // 10 million
  
  const handleMouseDown = (isMin: boolean) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMin) {
      setIsDraggingMin(true);
    } else {
      setIsDraggingMax(true);
    }
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!sliderRef.current || (!isDraggingMin && !isDraggingMax)) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const value = Math.round(MIN_BUDGET + percentage * (MAX_BUDGET - MIN_BUDGET));
    
    if (isDraggingMin) {
      setBudgetRange([Math.min(value, budgetRange[1] - 10000), budgetRange[1]]);
    } else if (isDraggingMax) {
      setBudgetRange([budgetRange[0], Math.max(value, budgetRange[0] + 10000)]);
    }
  };
  
  const handleMouseUp = () => {
    setIsDraggingMin(false);
    setIsDraggingMax(false);
  };
  
  // Add event listeners for dragging
  useEffect(() => {
    if (isDraggingMin || isDraggingMax) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDraggingMin, isDraggingMax, budgetRange]);
  
  // Format budget for display
  const formatBudget = (value: number): string => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)} млн`;
    } else if (value >= 1000) {
      return `${Math.round(value / 1000)} тис`;
    }
    return `${value}`;
  };
  
  // Calculate slider positions
  const minPosition = ((budgetRange[0] - MIN_BUDGET) / (MAX_BUDGET - MIN_BUDGET)) * 100;
  const maxPosition = ((budgetRange[1] - MIN_BUDGET) / (MAX_BUDGET - MIN_BUDGET)) * 100;
  
  // Filter projects based on all active filters
  const filteredProjects = projects.filter(project => {
    const currentDate = new Date();
    const projectDate = project.date;
    
    // Period filter
    if (selectedPeriod === 'currentYear') {
      if (projectDate.getFullYear() !== currentDate.getFullYear()) {
        return false;
      }
    } else if (selectedPeriod === 'lastYear') {
      if (projectDate.getFullYear() !== currentDate.getFullYear() - 1) {
        return false;
      }
    } else if (selectedPeriod === 'currentQuarter') {
      const currentMonth = currentDate.getMonth();
      const currentQuarter = Math.floor(currentMonth / 3);
      const projectMonth = projectDate.getMonth();
      const projectQuarter = Math.floor(projectMonth / 3);
      if (projectDate.getFullYear() !== currentDate.getFullYear() || projectQuarter !== currentQuarter) {
        return false;
      }
    } else if (selectedPeriod === 'lastSixMonths') {
      const sixMonthsAgo = new Date(currentDate);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
      if (projectDate < sixMonthsAgo || projectDate > currentDate) {
        return false;
      }
    } else if (selectedPeriod === 'last6Years') {
      const sixYearsAgo = new Date(currentDate);
      sixYearsAgo.setFullYear(sixYearsAgo.getFullYear() - 6);
      if (projectDate < sixYearsAgo || projectDate > currentDate) {
        return false;
      }
    } else if (selectedPeriod === 'custom') {
      if (selectedStartDate && selectedEndDate) {
        if (projectDate < selectedStartDate || projectDate > selectedEndDate) {
          return false;
        }
      }
    }
    
    // Budget filter
    if (project.budget < budgetRange[0] || project.budget > budgetRange[1]) {
      return false;
    }
    
    // Direction filter
    if (selectedDirections.length > 0 && !selectedDirections.includes(project.sphere)) {
      return false;
    }
    
    // Program filter
    if (selectedPrograms.length > 0 && !selectedPrograms.includes(project.program)) {
      return false;
    }
    
    // District filter
    if (selectedDistricts.length > 0 && !selectedDistricts.includes(project.location)) {
      return false;
    }
    
    // Search filter
    if (projectSearch) {
      const searchLower = projectSearch.toLowerCase();
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.code.includes(searchLower) ||
        project.sphere.toLowerCase().includes(searchLower) ||
        project.location.toLowerCase().includes(searchLower)
      );
    }
    
    return true;
  });

  // Sort filtered projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.date.getTime() - a.date.getTime();
      case 'oldest':
        return a.date.getTime() - b.date.getTime();
      case 'mostExpensive':
        return b.budget - a.budget;
      case 'cheapest':
        return a.budget - b.budget;
      case 'nameAZ':
        return a.title.localeCompare(b.title, 'uk');
      case 'nameZA':
        return b.title.localeCompare(a.title, 'uk');
      default:
        return 0;
    }
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageProjects = sortedProjects.slice(startIndex, endIndex);
  
  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPeriod, budgetRange, selectedDirections, selectedPrograms, selectedDistricts, projectSearch]);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setSortDropdownOpen(false);
      }
    };

    if (sortDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [sortDropdownOpen]);
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
        setSelectedProject(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
    <div className="bg-white flex flex-col min-h-screen w-full">
      {/* Header */}
      <div className="bg-white h-[96px] shrink-0 w-full relative border-b border-[#e3e3e3]">
        <div className="absolute h-[72px] left-[60px] top-1/2 translate-y-[-50%] w-[179px]">
          <div className="absolute inset-[8.16%_1.4%_8.07%_1.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174 61">
              <g>
                <path d={listSvgPaths.pce8b380} fill="#FCFCFC" />
                <path d={listSvgPaths.p102c7d00} fill="#C62122" />
                <path d={listSvgPaths.p90f4000} fill="black" />
                <path d={listSvgPaths.p27fcfd00} fill="black" />
                <path d={listSvgPaths.p1a7fd1c0} fill="black" />
                <path d={listSvgPaths.p1360e500} fill="black" />
                <path d={listSvgPaths.p890a900} fill="black" />
                <path d={listSvgPaths.p3062c400} fill="black" />
                <path d={listSvgPaths.p2fc6a270} fill="black" />
                <path d={listSvgPaths.p35ea2f00} fill="black" />
                <path d={listSvgPaths.p1a19ed00} fill="black" />
                <path d={listSvgPaths.p2132cf00} fill="black" />
                <path d={listSvgPaths.pef5e800} fill="black" />
                <path d={listSvgPaths.p27d4bb30} fill="black" />
                <path d={listSvgPaths.p2ca91980} fill="black" />
                <path d={listSvgPaths.p3ad59d00} fill="black" />
                <path d={listSvgPaths.p1996ba80} fill="black" />
                <path d={listSvgPaths.p34572370} fill="black" />
                <path d={listSvgPaths.p27d88080} fill="black" />
                <path d={listSvgPaths.p27ca7700} fill="#010101" />
                <path d={listSvgPaths.p272f3e00} fill="#010101" />
                <path d={listSvgPaths.p1ea86d00} fill="#010101" />
                <path d={listSvgPaths.p1af24770} fill="#010101" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute flex items-center gap-10 right-[60px] top-1/2 translate-y-[-50%]">
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
      </div>

      {/* Breadcrumbs */}
      <div className="shrink-0 w-full">
        <div className="flex gap-[8px] items-center px-[60px] py-[4px] text-[14px] text-[#343a40]">
          <p className="font-['VinnytsiaSansReg:Book',sans-serif] cursor-pointer hover:text-[#c95555]" onClick={onBackToDashboard}>Вінницька міська рада</p>
          <p className="font-['VinnytsiaSansReg:Book',sans-serif]">⟶</p>
          <p className="font-['VinnytsiaSansReg:Book',sans-serif]">Сервіси міської ради</p>
          <p className="font-['VinnytsiaSansReg:Book',sans-serif]">⟶</p>
          <p className="font-['VinnytsiaSansReg:Book',sans-serif] cursor-pointer hover:text-[#c95555]" onClick={onBackToDashboard}>Геопортал</p>
          <p className="font-['VinnytsiaSansReg:Book',sans-serif]">⟶</p>
          <p className="font-['VinnytsiaSansReg:Book',sans-serif]">Список заходів</p>
        </div>
      </div>

      {/* Page Header */}
      <div className="shrink-0 w-full px-[60px] pt-[24px]">
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['VinnytsiaSansBold:Bold',sans-serif] text-[28px] text-[#343a40] tracking-[-1.12px]">Заходи ({filteredProjects.length})</p>
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[rgba(52,58,64,0.6)] tracking-[-0.28px]">Тут ви можете переглянути перелік заходів, які було фінансовано з міського бюджету</p>
          </div>
          <button className="flex items-center gap-[8px] px-[16px] py-[8px] bg-[rgba(201,85,85,0.1)] border border-[rgba(201,85,85,0.5)] rounded-[999px] cursor-pointer hover:bg-[rgba(201,85,85,0.2)]">
            <Download className="size-[24px] text-[#c95555]" />
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#c95555]">Скачати</p>
          </button>
        </div>
      </div>

      {/* Main Content with Filters and Grid */}
      <div className="flex gap-[24px] px-[60px] py-[24px]">
        {/* Filters Sidebar */}
        <aside className="bg-[#f7f7f7] rounded-[16px] px-[24px] py-[32px] w-[312px] shrink-0 flex flex-col gap-[24px] self-start">
          {/* Header */}
          <div className="flex items-center gap-[8px] h-[28px] w-full">
            <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] text-[#343a40] text-[24px] tracking-[-0.96px] flex-1">Фільтри</p>
            {(selectedDirections.length > 0 || 
              selectedPrograms.length > 0 || 
              selectedDistricts.length > 0 || 
              projectSearch.length > 0 ||
              budgetRange[0] !== 50000 || 
              budgetRange[1] !== 5000000 ||
              selectedPeriod === 'customRange' ||
              selectedStartDate !== null ||
              selectedEndDate !== null) && (
              <button 
                onClick={clearAllFilters}
                className="bg-white flex gap-[4px] items-center justify-center pl-[8px] pr-[12px] py-[6px] rounded-[999px] border border-[rgba(52,58,64,0.1)] hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={clearSvgPaths.p5f5ce80} fill="#343A40" />
                  </svg>
                </div>
                <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] text-[#343a40] text-[14px] tracking-[-0.14px]">
                  Очистити
                </p>
              </button>
            )}
          </div>

          {/* Period Filter */}
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex items-center justify-between w-full cursor-pointer" onClick={() => setPeriodExpanded(!periodExpanded)}>
              <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] text-[#343a40] text-[18px]">Період</p>
              <div className="bg-white border border-[rgba(52,58,64,0.1)] rounded-full p-[4px]">
                {periodExpanded ? (
                  <Minus className="size-[16px] text-[#343a40]" />
                ) : (
                  <Plus className="size-[16px] text-[#343a40]" />
                )}
              </div>
            </div>
            {periodExpanded && (
              <div className="flex flex-col gap-[12px] w-full">
                {/* Custom styled radio buttons */}
                <label className="flex items-center gap-[8px] cursor-pointer">
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
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] text-[#343a40] text-[14px]">
                    За поточний рік
                  </p>
                </label>

                <label className="flex items-center gap-[8px] cursor-pointer">
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
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] text-[#343a40] text-[14px]">
                    За минулий рік
                  </p>
                </label>

                <label className="flex items-center gap-[8px] cursor-pointer">
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
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] text-[#343a40] text-[14px]">
                    За поточний квартал
                  </p>
                </label>

                <label className="flex items-center gap-[8px] cursor-pointer">
                  <div className="relative w-4 h-4 shrink-0">
                    <input
                      type="radio"
                      name="period"
                      value="lastSixMonths"
                      checked={selectedPeriod === 'lastSixMonths'}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="sr-only"
                    />
                    {selectedPeriod === 'lastSixMonths' ? (
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
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] text-[#343a40] text-[14px]">
                    За останні півроку
                  </p>
                </label>

                <label className="flex items-center gap-[8px] cursor-pointer">
                  <div className="relative w-4 h-4 shrink-0">
                    <input
                      type="radio"
                      name="period"
                      value="last6Years"
                      checked={selectedPeriod === 'last6Years'}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="sr-only"
                    />
                    {selectedPeriod === 'last6Years' ? (
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
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] text-[#343a40] text-[14px]">
                    За останні 6 років
                  </p>
                </label>

                <label className="flex items-center gap-[8px] cursor-pointer">
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
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] text-[#343a40] text-[14px]">
                    Обрати інший період
                  </p>
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
          <div className="h-0 w-full relative">
            <svg className="absolute inset-[-0.5px_0] block w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
              <path d="M0 0.5H264" stroke="#343A40" strokeOpacity="0.2" />
            </svg>
          </div>

          {/* Budget Filter */}
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex items-center justify-between w-full cursor-pointer" onClick={() => setBudgetExpanded(!budgetExpanded)}>
              <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] text-[#343a40] text-[18px]">Бюджет</p>
              <div className="bg-white border border-[rgba(52,58,64,0.1)] rounded-full p-[4px]">
                {budgetExpanded ? (
                  <Minus className="size-[16px] text-[#343a40]" />
                ) : (
                  <Plus className="size-[16px] text-[#343a40]" />
                )}
              </div>
            </div>
            {budgetExpanded && (
              <div className="flex flex-col gap-[8px] w-full">
                {/* Slider */}
                <div className="relative w-full h-[48px] flex items-center px-[8px]">
                  <div ref={sliderRef} className="relative w-full h-[4px] bg-[#e3e3e3] rounded-[4px]">
                    <div 
                      className="absolute h-[4px] bg-[#c95555] rounded-[100px]" 
                      style={{
                        left: `${minPosition}%`,
                        right: `${100 - maxPosition}%`
                      }}
                    />
                    {/* Handle markers */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 size-[20px] bg-[#c95555] rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform" 
                      style={{ left: `calc(${minPosition}% - 10px)` }}
                      onMouseDown={handleMouseDown(true)}
                    />
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 size-[20px] bg-[#c95555] rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform" 
                      style={{ left: `calc(${maxPosition}% - 10px)` }}
                      onMouseDown={handleMouseDown(false)}
                    />
                  </div>
                </div>
                
                {/* Range inputs */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col gap-[4px] items-center">
                    <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] text-[#49454f] text-[10px] tracking-[-0.2px]">Від</p>
                    <div className="border border-[#e3e3e3] rounded-[999px] px-[12px] py-0 h-[28px] flex items-center min-w-[56px]">
                      <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] text-[12px] tracking-[-0.24px] whitespace-nowrap">{formatBudget(budgetRange[0])}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] items-center">
                    <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] text-[#49454f] text-[10px] tracking-[-0.2px]">До</p>
                    <div className="border border-[#e3e3e3] rounded-[999px] px-[12px] py-0 h-[28px] flex items-center min-w-[56px]">
                      <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] text-[12px] tracking-[-0.24px] whitespace-nowrap">{formatBudget(budgetRange[1])}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-0 w-full relative">
            <svg className="absolute inset-[-0.5px_0] block w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
              <path d="M0 0.5H264" stroke="#343A40" strokeOpacity="0.2" />
            </svg>
          </div>

          {/* District Filter */}
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex items-center justify-between w-full cursor-pointer" onClick={() => setDistrictExpanded(!districtExpanded)}>
              <div className="flex items-center gap-[8px]">
                <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] text-[#343a40] text-[18px]">Район</p>
                {selectedDistricts.length > 0 && (
                  <div className="bg-[#c95555] flex items-center justify-center px-[8px] py-0 rounded-[999px] min-w-[20px] h-[20px]">
                    <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] text-[14px] text-center text-white">
                      {selectedDistricts.length}
                    </p>
                  </div>
                )}
              </div>
              <div className="bg-white border border-[rgba(52,58,64,0.1)] rounded-full p-[4px]">
                {districtExpanded ? (
                  <Minus className="size-[16px] text-[#343a40]" />
                ) : (
                  <Plus className="size-[16px] text-[#343a40]" />
                )}
              </div>
            </div>
            {districtExpanded && (
              <div className="flex flex-col gap-[12px] w-full">
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Пошук району"
                    value={districtSearch}
                    onChange={(e) => setDistrictSearch(e.target.value)}
                    className="w-full px-[16px] py-[8px] pr-10 border border-[#e3e3e3] rounded-full text-[14px] font-['VinnytsiaSansReg:Book',sans-serif] placeholder:opacity-50 placeholder:text-[#343a40] placeholder:tracking-[-0.28px] focus:outline-none focus:border-[#c95555]"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d={districtSvgPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" />
                    </svg>
                  </div>
                </div>
                
                {/* Checkboxes with custom styling and scrollbar */}
                <div className="flex flex-col gap-[12px] max-h-80 overflow-y-auto pr-2">
                    {filteredDistricts.map((district) => (
                      <label key={district} className="flex items-center gap-[8px] cursor-pointer">
                        <div className="relative w-6 h-6 shrink-0">
                          <input 
                            type="checkbox" 
                            checked={selectedDistricts.includes(district)}
                            onChange={() => toggleDistrict(district)}
                            className="peer absolute opacity-0 w-6 h-6 cursor-pointer"
                          />
                          <div className="absolute inset-0">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path 
                                d={selectedDistricts.includes(district) ? districtSvgPaths.p7913d80 : districtSvgPaths.p542c300} 
                                fill={selectedDistricts.includes(district) ? "#C95555" : "#737B8C"} 
                              />
                            </svg>
                          </div>
                        </div>
                        <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] text-[#343a40] text-[14px] flex-1">
                          {district}
                        </p>
                        <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] text-[12px] text-[rgba(52,58,64,0.6)]">
                          (90)
                        </p>
                      </label>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-0 w-full relative">
            <svg className="absolute inset-[-0.5px_0] block w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
              <path d="M0 0.5H264" stroke="#343A40" strokeOpacity="0.2" />
            </svg>
          </div>

          {/* Direction Filter */}
          <div className="flex flex-col gap-[16px] w-full">
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
              <div className="bg-white rounded-full p-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${directionsExpanded ? 'rotate-180' : ''}`}>
                  <path d={directionsExpanded ? svgPaths.p24d21cb0 : svgPaths.p1fa88440} fill="#1C1B1F" />
                </svg>
              </div>
            </button>
            {directionsExpanded && (
              <div className="flex flex-col gap-[12px] w-full">
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Пошук напрямку"
                    value={directionsSearch}
                    onChange={(e) => setDirectionsSearch(e.target.value)}
                    className="w-full px-[16px] py-[8px] pr-10 border border-[#e3e3e3] rounded-full text-[14px] font-['VinnytsiaSansReg:Book',sans-serif] placeholder:opacity-50 placeholder:text-[#343a40] placeholder:tracking-[-0.28px] focus:outline-none focus:border-[#c95555]"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d={filterSvgPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" />
                    </svg>
                  </div>
                </div>
                
                {/* Checkboxes with custom styling */}
                <div className="flex flex-col gap-[12px] max-h-80 overflow-y-auto">
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
                          <button
                            onClick={() => toggleMainDirection(direction.name)}
                            className="shrink-0 w-4 h-4"
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                              <path d={isExpanded ? svgPaths.p24d21cb0 : svgPaths.p1fa88440} fill="#737B8C" />
                            </svg>
                          </button>
                        </div>
                        
                        {/* Subdirections - shown when expanded */}
                        {isExpanded && filteredSubdirections.length > 0 && (
                          <div className="flex flex-col gap-2 ml-8">
                            {filteredSubdirections.map(sub => (
                              <div key={sub} className="flex items-center gap-2 w-full">
                                <div 
                                  className="relative w-6 h-6 shrink-0 cursor-pointer"
                                  onClick={() => toggleDirection(sub)}
                                >
                                  <input
                                    type="checkbox"
                                    checked={selectedDirections.includes(sub)}
                                    onChange={() => toggleDirection(sub)}
                                    className="sr-only"
                                  />
                                  <svg className="absolute inset-0 pointer-events-none" fill="none" viewBox="0 0 24 24">
                                    {selectedDirections.includes(sub) ? (
                                      <path d={filterSvgPaths.p7913d80} fill="#C95555" />
                                    ) : (
                                      <path d={filterSvgPaths.p542c300} fill="#737B8C" />
                                    )}
                                  </svg>
                                </div>
                                <span className="text-sm text-[#343a40] leading-5 font-['VinnytsiaSansReg:Book',sans-serif] not-italic flex-1">
                                  {sub}
                                </span>
                              </div>
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
          <div className="h-0 w-full relative">
            <svg className="absolute inset-[-0.5px_0] block w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
              <path d="M0 0.5H264" stroke="#343A40" strokeOpacity="0.2" />
            </svg>
          </div>

          {/* Programs Filter */}
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
                <div className="relative">
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
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[16px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.05)] flex flex-col items-start w-full z-50">
                      {/* Checkboxes with custom scrollbar */}
                      <div className="h-[240px] relative w-full">
                        <div className="flex flex-col gap-[16px] items-start p-[8px] h-full overflow-y-auto">
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

        {/* Projects Content Area */}
        <div className="flex-1 flex flex-col gap-[24px]">
          {/* Search, Sort, and View Switcher */}
          <div className="flex gap-[12px] items-start w-full">
            {/* Search Bar */}
            <div className="bg-[#f7f7f7] flex-1 flex items-center gap-[8px] px-[16px] py-0 rounded-[999px] border border-[#e3e3e3] h-[40px]">
              <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={searchSvgPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" fillRule="evenodd" />
              </svg>
              <input
                type="text"
                placeholder="Пошук заходу..."
                value={projectSearch}
                onChange={(e) => setProjectSearch(e.target.value)}
                className="flex-1 bg-transparent font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#343a40] placeholder:opacity-50 placeholder:text-[#343a40] placeholder:tracking-[-0.14px] leading-[16px] border-0 focus:outline-none h-full"
              />
            </div>

            {/* Sort Button */}
            <div ref={sortDropdownRef} className="relative">
              <button 
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="flex gap-[8px] items-center px-[16px] py-[8px] rounded-[999px] border border-[rgba(52,58,64,0.2)] hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={searchSvgPaths.p1f0e0d80} fill="#343A40" />
                </svg>
                <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#343a40] tracking-[-0.14px] leading-[16px]">
                  Сортувати за
                </p>
              </button>
              
              {/* Sort Dropdown */}
              {sortDropdownOpen && (
                <div className="absolute top-[calc(100%+8px)] right-0 bg-white rounded-[8px] shadow-lg border border-[rgba(0,0,0,0.1)] py-[8px] min-w-[200px] z-50">
                  <button
                    onClick={() => {
                      setSortBy('newest');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-[16px] py-[10px] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] leading-[16px] tracking-[-0.14px] hover:bg-gray-50 transition-colors ${
                      sortBy === 'newest' ? 'text-[#c95555]' : 'text-[#343a40]'
                    }`}
                  >
                    Найновіші
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('oldest');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-[16px] py-[10px] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] leading-[16px] tracking-[-0.14px] hover:bg-gray-50 transition-colors ${
                      sortBy === 'oldest' ? 'text-[#c95555]' : 'text-[#343a40]'
                    }`}
                  >
                    Найстаріші
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('mostExpensive');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-[16px] py-[10px] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] leading-[16px] tracking-[-0.14px] hover:bg-gray-50 transition-colors ${
                      sortBy === 'mostExpensive' ? 'text-[#c95555]' : 'text-[#343a40]'
                    }`}
                  >
                    Найдорожчі
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('cheapest');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-[16px] py-[10px] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] leading-[16px] tracking-[-0.14px] hover:bg-gray-50 transition-colors ${
                      sortBy === 'cheapest' ? 'text-[#c95555]' : 'text-[#343a40]'
                    }`}
                  >
                    Найдешевші
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('nameAZ');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-[16px] py-[10px] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] leading-[16px] tracking-[-0.14px] hover:bg-gray-50 transition-colors ${
                      sortBy === 'nameAZ' ? 'text-[#c95555]' : 'text-[#343a40]'
                    }`}
                  >
                    Назва А-Я
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('nameZA');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-[16px] py-[10px] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] leading-[16px] tracking-[-0.14px] hover:bg-gray-50 transition-colors ${
                      sortBy === 'nameZA' ? 'text-[#c95555]' : 'text-[#343a40]'
                    }`}
                  >
                    Назва Я-А
                  </button>
                </div>
              )}
            </div>

            {/* View Switcher */}
            <div className="bg-white flex items-center rounded-[999px] border border-[rgba(52,58,64,0.2)]">
              {/* Grid View Tab */}
              <button 
                onClick={() => setViewMode('grid')}
                className={`flex items-center justify-center w-[40px] h-[40px] rounded-[999px] transition-colors ${
                  viewMode === 'grid' ? 'bg-[#c95555]' : ''
                }`}
              >
                <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={searchSvgPaths.p2ee6af80} fill={viewMode === 'grid' ? 'white' : '#343A40'} />
                </svg>
              </button>
              
              {/* Table View Tab */}
              <button 
                onClick={() => setViewMode('table')}
                className={`flex items-center justify-center w-[40px] h-[40px] rounded-full transition-colors ${
                  viewMode === 'table' ? 'bg-[#c95555]' : ''
                }`}
              >
                <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={searchSvgPaths.p3c7b0900} fill={viewMode === 'table' ? 'white' : '#343A40'} />
                </svg>
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
              {currentPageProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-[#fbfbfb] relative rounded-[16px] w-full cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              >
                <div className="flex flex-col gap-[12px] items-center overflow-clip p-[16px] relative rounded-[inherit] w-full">
                  {/* Project Image */}
                  <div className="h-[160px] relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                      <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
                      <img 
                        alt={project.title} 
                        className="absolute max-w-none object-center object-cover rounded-[8px] size-full" 
                        src={project.image} 
                      />
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="flex flex-col gap-[8px] items-start w-full">
                    <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[20px] not-italic text-[#343a40] text-[18px] tracking-[-0.36px] w-full">
                      {project.title}
                    </p>
                    
                    {/* Code */}
                    <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic text-[#343a40] text-[14px] w-full">
                      <p className="opacity-50 w-full">Код заходу:</p>
                      <p className="w-full">{project.code}</p>
                    </div>
                    
                    {/* Sphere */}
                    <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic text-[#343a40] text-[14px] w-full">
                      <p className="opacity-50 w-full">Сфера діяльності:</p>
                      <p className="w-full">{project.sphere}</p>
                    </div>
                    
                    {/* Program */}
                    <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic text-[#343a40] text-[14px] w-full">
                      <p className="opacity-50 w-full">Програма:</p>
                      <p className="overflow-ellipsis overflow-hidden w-full line-clamp-2">{project.program}</p>
                    </div>
                    
                    {/* Location */}
                    <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic text-[#343a40] text-[14px] w-full">
                      <p className="opacity-50 w-full">Місцевість:</p>
                      <p className="w-full">{project.location}</p>
                    </div>
                    
                    {/* Budget */}
                    <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic text-[#343a40] text-[14px] w-full">
                      <p className="opacity-50 w-full">Фінансування, грн:</p>
                      <p className="w-full">{project.budget}</p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              </div>
            ))}
          </div>
          ) : (
            /* Table View */
            <div className="relative rounded-[16px] w-full overflow-x-auto">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full min-w-[900px]">
                {/* Table Header */}
                <div className="relative w-full">
                  <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
                    {/* Код */}
                    <div className="bg-[#f7f7f7] content-stretch flex items-center px-[12px] py-[16px] relative shrink-0 w-[104px]">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
                      <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] tracking-[-0.48px]">Код</p>
                    </div>
                    {/* Назва */}
                    <div className="basis-0 bg-[#f7f7f7] grow min-h-px min-w-px relative shrink-0">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[12px] py-[16px] relative w-full">
                          <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] tracking-[-0.48px]">Назва</p>
                        </div>
                      </div>
                    </div>
                    {/* Сфера діяльності */}
                    <div className="bg-[#f7f7f7] content-stretch flex items-center px-[12px] py-[16px] relative shrink-0 w-[160px]">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
                      <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] tracking-[-0.48px]">Сфера діяльності</p>
                    </div>
                    {/* Програма */}
                    <div className="basis-0 bg-[#f7f7f7] grow min-h-px min-w-px relative shrink-0">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[12px] py-[16px] relative w-full">
                          <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] tracking-[-0.48px]">Програма</p>
                        </div>
                      </div>
                    </div>
                    {/* Місцевість */}
                    <div className="bg-[#f7f7f7] content-stretch flex items-center px-[12px] py-[16px] relative shrink-0 w-[112px]">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
                      <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] tracking-[-0.48px]">Місцевість</p>
                    </div>
                    {/* Фінансування */}
                    <div className="bg-[#f7f7f7] content-stretch flex items-center px-[12px] py-[16px] relative shrink-0 w-[120px]">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
                      <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] text-right tracking-[-0.48px]">Фінансування</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(52,58,64,0.1)] border-solid inset-0 pointer-events-none" />
                </div>
                
                {/* Table Body */}
                <div className="bg-white content-stretch flex flex-col items-start relative w-full">
                  {currentPageProjects.map((project) => (
                    <div key={project.id} className="content-stretch flex items-stretch relative w-full min-h-[64px]">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
                      {/* Код */}
                      <div className="bg-white content-stretch flex items-start px-[12px] py-[10px] relative shrink-0 w-[104px]">
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
                        <p className="basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#5b5b5b] text-[14px] tracking-[-0.24px]">{project.code}</p>
                      </div>
                      {/* Назва */}
                      <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0">
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-start size-full">
                          <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
                            <p className="basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#5b5b5b] text-[14px] tracking-[-0.24px]">{project.title}</p>
                          </div>
                        </div>
                      </div>
                      {/* Сфера діяльності */}
                      <div className="bg-white content-stretch flex items-start px-[12px] py-[10px] relative shrink-0 w-[160px]">
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
                        <p className="basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#5b5b5b] text-[14px] tracking-[-0.24px]">{project.sphere}</p>
                      </div>
                      {/* Програма */}
                      <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0">
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-start size-full">
                          <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
                            <p className="basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#5b5b5b] text-[14px] tracking-[-0.24px]">{project.program}</p>
                          </div>
                        </div>
                      </div>
                      {/* Місцевість */}
                      <div className="bg-white content-stretch flex items-start px-[12px] py-[10px] relative shrink-0 w-[112px]">
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
                        <p className="basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#5b5b5b] text-[14px] tracking-[-0.24px]">{project.location}</p>
                      </div>
                      {/* Фінансування */}
                      <div className="bg-white content-stretch flex items-start px-[12px] py-[10px] relative shrink-0 w-[120px]">
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
                        <p className="basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#5b5b5b] text-[14px] text-right tracking-[-0.24px]">{project.budget} грн</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            </div>
          )}
          
          {/* Pagination */}
          {filteredProjects.length > 0 && totalPages > 1 && (
            <div className="flex items-center justify-between w-full mt-[32px]">
              {/* Items per page selector */}
              <div className="flex gap-[8px] items-center relative">
                <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic text-[#343a40] text-[14px] text-nowrap">
                  Показувати на сторінці
                </p>
                <div className="relative">
                  <div 
                    className="flex items-center px-[8px] py-0 relative rounded-[999px] border border-[#e3e3e3] cursor-pointer"
                    onClick={() => setItemsPerPageDropdownOpen(!itemsPerPageDropdownOpen)}
                  >
                    <div className="flex gap-[4px] items-center">
                      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic text-[#343a40] text-[12px] tracking-[-0.24px] py-[2px]">
                        {itemsPerPage}
                      </p>
                      <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d="M4 6L8 10L12 6" stroke="#343A40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  {itemsPerPageDropdownOpen && (
                    <div className="absolute bottom-full mb-1 left-0 bg-white border border-[#e3e3e3] rounded-[8px] shadow-lg z-50 min-w-[60px]">
                      {[6, 12, 24, 48].map((value) => (
                        <div
                          key={value}
                          className="px-[12px] py-[8px] cursor-pointer hover:bg-[#f5f5f5] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#343a40]"
                          onClick={() => {
                            setItemsPerPage(value);
                            setCurrentPage(1);
                            setItemsPerPageDropdownOpen(false);
                          }}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Page numbers */}
              <div className="flex gap-[4px] items-center">
                {/* Previous button */}
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`bg-white relative rounded-[999px] size-[38px] flex items-center justify-center border border-[rgba(52,58,64,0.14)] transition-opacity ${
                    currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:bg-[#f5f5f5]'
                  }`}
                >
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="#343A40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                
                {/* Page numbers */}
                {(() => {
                  const pages: (number | string)[] = [];
                  const maxVisible = 6;
                  
                  if (totalPages <= maxVisible + 2) {
                    // Show all pages if total is small
                    for (let i = 1; i <= totalPages; i++) {
                      pages.push(i);
                    }
                  } else {
                    // Show first page
                    pages.push(1);
                    
                    if (currentPage > 4) {
                      pages.push('...');
                    }
                    
                    // Show pages around current page
                    const start = Math.max(2, currentPage - 2);
                    const end = Math.min(totalPages - 1, currentPage + 2);
                    
                    for (let i = start; i <= end; i++) {
                      if (!pages.includes(i)) {
                        pages.push(i);
                      }
                    }
                    
                    if (currentPage < totalPages - 3) {
                      pages.push('...');
                    }
                    
                    // Show last page
                    pages.push(totalPages);
                  }
                  
                  return pages.map((page, idx) => {
                    if (page === '...') {
                      return (
                        <div 
                          key={`ellipsis-${idx}`}
                          className="bg-white relative rounded-[999px] w-[38px] h-[38px] flex items-center justify-center border border-[rgba(52,58,64,0.14)]"
                        >
                          <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[1.5] not-italic text-[#343a40] text-[16px]">
                            ...
                          </p>
                        </div>
                      );
                    }
                    
                    const isActive = page === currentPage;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page as number)}
                        className={`relative rounded-[999px] w-[38px] h-[38px] flex items-center justify-center border transition-colors ${
                          isActive 
                            ? 'bg-white border-[#c95555]' 
                            : 'bg-white border-[rgba(52,58,64,0.14)] hover:bg-[#f5f5f5]'
                        }`}
                      >
                        <p className={`font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic text-[16px] ${
                          isActive ? 'text-[#c95555]' : 'text-[#343a40]'
                        }`}>
                          {page}
                        </p>
                      </button>
                    );
                  });
                })()}
                
                {/* Next button */}
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`bg-white relative rounded-[999px] size-[38px] flex items-center justify-center border border-[rgba(52,58,64,0.14)] transition-opacity ${
                    currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:bg-[#f5f5f5]'
                  }`}
                >
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#343A40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[64px] overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[rgba(0,0,0,0.6)]"
            onClick={() => {
              setIsModalOpen(false);
              setSelectedProject(null);
            }}
          />
          
          {/* Modal Content Wrapper */}
          <div className="relative w-[644px] mb-[64px]">
            {/* Close button - outside modal */}
            <button
              onClick={() => {
                setIsModalOpen(false);
                setSelectedProject(null);
              }}
              className="absolute -top-[12px] -right-[12px] backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.9)] rounded-[999px] size-[40px] hover:bg-white transition-colors z-20 shadow-lg"
            >
              <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <mask height="24" id="mask0_39_351" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                      <rect fill="#D9D9D9" height="24" width="24" />
                    </mask>
                    <g mask="url(#mask0_39_351)">
                      <path d={modalSvgPaths.p231710f0} fill="#343A40" />
                    </g>
                  </g>
                </svg>
              </div>
            </button>
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-[24px] shadow-[0px_12px_32px_8px_rgba(0,0,0,0.2)] flex flex-col">
              {/* Image */}
              <div className="h-[272px] relative shrink-0 w-full">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute bg-[#d9d9d9] inset-0 rounded-t-[24px]" />
                  <img 
                    alt={selectedProject.title} 
                    className="absolute max-w-none object-center object-cover size-full rounded-t-[24px]" 
                    src={selectedProject.image} 
                  />
                </div>
              </div>
            
            {/* Details */}
            <div className="flex flex-col gap-[16px] p-[24px] w-full">
              <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[32px] not-italic text-[#343a40] text-[32px] tracking-[-1.28px] w-full">
                {selectedProject.title}
              </p>
              
              {/* Code */}
              <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic text-[#343a40] text-[16px] w-full">
                <p className="opacity-70 w-full">Код заходу:</p>
                <p className="w-full">{selectedProject.code}</p>
              </div>
              
              {/* Sphere */}
              <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic text-[#343a40] text-[16px] w-full">
                <p className="opacity-70 w-full">Сфера діяльності:</p>
                <p className="w-full">{selectedProject.sphere}</p>
              </div>
              
              {/* Program */}
              <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic text-[#343a40] text-[16px] w-full">
                <p className="opacity-70 w-full">Програма:</p>
                <p className="w-full">{selectedProject.program}</p>
              </div>
              
              {/* District (Район) */}
              <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic text-[#343a40] text-[16px] w-full">
                <p className="opacity-70 w-full">Район:</p>
                <p className="w-full">{selectedProject.location}</p>
              </div>
              
              {/* Year */}
              <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic text-[#343a40] text-[16px] w-full">
                <p className="opacity-70 w-full">Рік:</p>
                <p className="w-full">{selectedProject.date.getFullYear()}</p>
              </div>
              
              {/* Budget */}
              <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic text-[#343a40] text-[16px] w-full">
                <p className="opacity-70 w-full">Фінансування, грн:</p>
                <p className="w-full">{selectedProject.budget.toLocaleString('uk-UA')}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
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
          ))}</div>
        
        {/* Calendar days grid */}
        <div className="grid grid-cols-7 w-full gap-y-0">
          {renderDays()}
        </div>
      </div>
    </div>
  );
}