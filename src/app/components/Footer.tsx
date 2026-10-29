export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between h-[60px]">
      <div className="text-sm text-gray-600">
        Джерело даних:{' '}
        <a href="#" className="text-gray-900 hover:text-red-600 underline">
          Вінницька міська рада
        </a>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Powered by</span>
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
              <rect x="2" y="2" width="5" height="5" />
              <rect x="9" y="2" width="5" height="5" />
              <rect x="2" y="9" width="5" height="5" />
              <rect x="9" y="9" width="5" height="5" />
            </svg>
          </div>
          <span className="text-sm">LiveCharts</span>
        </div>
        <span className="text-xs text-gray-500 ml-1">Innovation Lab</span>
      </div>
    </footer>
  );
}
