import { Search, Eye } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Navigation */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L4 6v4c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4zm0 2.2l6 3v3.8c0 4.5-3.1 8.8-6 10-2.9-1.2-6-5.5-6-10V7.2l6-3z"/>
              <circle cx="12" cy="12" r="3" fill="white"/>
            </svg>
          </div>
          <div>
            <div className="text-sm leading-tight">Вінницька</div>
            <div className="text-sm leading-tight">міська рада</div>
          </div>
        </div>
        
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm hover:text-red-600">Туристу</a>
          <a href="#" className="text-sm hover:text-red-600">Інвестору</a>
          <a href="#" className="text-sm hover:text-red-600">English</a>
          <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-red-600" />
          <Eye className="w-5 h-5 text-gray-600 cursor-pointer hover:text-red-600" />
        </nav>
      </div>
      
      {/* Breadcrumb and Title */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <span>Вінницька міська рада</span>
          <span>→</span>
          <span>Сервіси міської ради</span>
          <span>→</span>
          <span>Геопортал</span>
        </div>
        
        <h1 className="text-2xl mb-1">Аналітичний графік бюджету громади</h1>
        <p className="text-sm text-gray-600">
          Перетворено детальну інформацію про заходи.{' '}
          <a href="#" className="text-red-600 hover:underline">Перейти →</a>
        </p>
      </div>
    </header>
  );
}
