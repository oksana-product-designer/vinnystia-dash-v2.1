import { ChevronDown, Plus } from 'lucide-react';

interface FilterSidebarProps {
  viewMode: 'budget' | 'projects';
  setViewMode: (mode: 'budget' | 'projects') => void;
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
  expandedSections: string[];
  toggleSection: (section: string) => void;
}

export function FilterSidebar({
  viewMode,
  setViewMode,
  selectedPeriod,
  setSelectedPeriod,
  expandedSections,
  toggleSection
}: FilterSidebarProps) {
  const isPeriodExpanded = expandedSections.includes('period');

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg mb-4">Фільтри</h2>
        
        {/* Budget/Projects Toggle */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setViewMode('budget')}
            className={`flex-1 px-4 py-2 rounded-full text-sm transition-colors ${
              viewMode === 'budget'
                ? 'bg-white border-2 border-red-600 text-red-600'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
          >
            Бюджет
          </button>
          <button
            onClick={() => setViewMode('projects')}
            className={`flex-1 px-4 py-2 rounded-full text-sm transition-colors ${
              viewMode === 'projects'
                ? 'bg-white border-2 border-red-600 text-red-600'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
          >
            Заходи
          </button>
        </div>
        
        {/* Period Section */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('period')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="text-sm">Період</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isPeriodExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {isPeriodExpanded && (
            <div className="space-y-2 ml-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="period"
                  value="currentQuarter"
                  checked={selectedPeriod === 'currentQuarter'}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-4 h-4 text-red-600"
                />
                <span className="text-sm">За поточний квартал</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="period"
                  value="lastSemester"
                  checked={selectedPeriod === 'lastSemester'}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-4 h-4 text-red-600"
                />
                <span className="text-sm">За останні півроку</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="period"
                  value="currentYear"
                  checked={selectedPeriod === 'currentYear'}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-4 h-4 text-red-600"
                />
                <span className="text-sm">За поточний рік</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="period"
                  value="lastYear"
                  checked={selectedPeriod === 'lastYear'}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-4 h-4 text-red-600"
                />
                <span className="text-sm">За минулий рік</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="period"
                  value="last5Years"
                  checked={selectedPeriod === 'last5Years'}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-4 h-4 text-red-600"
                />
                <span className="text-sm">За останні 5 років</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="period"
                  value="custom"
                  checked={selectedPeriod === 'custom'}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-4 h-4 text-red-600"
                />
                <span className="text-sm">Обрати інший період</span>
              </label>
            </div>
          )}
        </div>
        
        {/* Direction Section */}
        <div className="mb-4 pb-4 border-b border-gray-200">
          <button
            onClick={() => toggleSection('direction')}
            className="flex items-center justify-between w-full"
          >
            <span className="text-sm">Напрямок</span>
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        {/* Programs Section */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('programs')}
            className="flex items-center justify-between w-full"
          >
            <span className="text-sm">Програми</span>
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
