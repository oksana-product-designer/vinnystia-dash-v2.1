import { useState } from 'react';
import { DistrictMap } from './DistrictMap';

interface MapVisualizationProps {
  viewMode: 'budget' | 'projects';
}

export function MapVisualization({ viewMode }: MapVisualizationProps) {
  // Mock data for districts
  const districtData = [
    { id: 1, name: 'Ленінський район', budget: 361, projects: 28, color: '#f8c9b0' },
    { id: 2, name: 'Замостянський район', budget: 378, projects: 31, color: '#f5b89a' },
    { id: 3, name: 'Старомістський район', budget: 320, projects: 26, color: '#f9d4c0' },
    { id: 4, name: 'Вишенський район', budget: 491, projects: 42, color: '#f0a174' },
    { id: 5, name: 'Київський район', budget: 540, projects: 48, color: '#ea8f5c' },
    { id: 6, name: 'Слов\'янський район', budget: 523, projects: 45, color: '#ec9566' },
    { id: 7, name: 'Поділля', budget: 344, projects: 29, color: '#f7c5ad' },
    { id: 8, name: 'Центральний', budget: 211, projects: 18, color: '#fce5d9' },
    { id: 9, name: 'Пирогівський', budget: 173, projects: 14, color: '#fef0ea' },
    { id: 10, name: 'Східний район', budget: 240, projects: 24, color: '#fdddc8' },
    { id: 11, name: 'Південний район', budget: 262, projects: 22, color: '#fcd7c0' },
    { id: 12, name: 'Західний район', budget: 120, projects: 10, color: '#fff5f0' },
  ];

  const legendData = viewMode === 'budget'
    ? {
        title: 'Масштаб бюджету у млн грн',
        values: [20, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]
      }
    : {
        title: 'Кількість',
        values: ['<10', '10-20', '20-30', '30-40', '40-50', '>50']
      };

  return (
    <main className="flex-1 flex flex-col bg-white overflow-hidden">
      {/* Map Container */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-hidden">
        <DistrictMap districts={districtData} viewMode={viewMode} />
      </div>
      
      {/* Legend */}
      <div className="px-8 py-4 border-t border-gray-200">
        <div className="text-xs text-gray-600 mb-2">{legendData.title}</div>
        <div className="flex items-center gap-2">
          {/* Gradient Bar */}
          <div 
            className="h-3 flex-1 rounded"
            style={{
              background: 'linear-gradient(to right, #fff5f0, #fce5d9, #fcd7c0, #f9d4c0, #f7c5ad, #f5b89a, #f0a174, #ec9566, #ea8f5c, #e57d44, #e06b2c)'
            }}
          />
          
          {/* Scale Labels */}
          <div className="flex gap-2 text-xs text-gray-500">
            {viewMode === 'budget' ? (
              <>
                <span>20</span>
                <span>100</span>
                <span>200</span>
                <span>300</span>
                <span>400</span>
                <span>500</span>
              </>
            ) : (
              <>
                <span>&lt;10</span>
                <span>10-20</span>
                <span>30-40</span>
                <span>&gt;50</span>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
