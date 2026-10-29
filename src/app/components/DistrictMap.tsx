import { useState } from 'react';

interface District {
  id: number;
  name: string;
  budget: number;
  projects: number;
  color: string;
}

interface DistrictMapProps {
  districts: District[];
  viewMode: 'budget' | 'projects';
}

export function DistrictMap({ districts, viewMode }: DistrictMapProps) {
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, district: District) => {
    setHoveredDistrict(district);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredDistrict(null);
  };

  // SVG paths for Vinnytsia districts (simplified polygons)
  const districtPaths = [
    { id: 1, d: 'M 400 80 L 500 60 L 550 100 L 520 180 L 450 200 L 400 150 Z', cx: 470, cy: 120 },
    { id: 2, d: 'M 300 120 L 400 80 L 400 150 L 350 200 L 280 180 Z', cx: 350, cy: 140 },
    { id: 3, d: 'M 420 180 L 480 160 L 520 180 L 500 240 L 440 250 L 410 220 Z', cx: 460, cy: 210 },
    { id: 4, d: 'M 520 180 L 580 160 L 620 200 L 600 270 L 540 280 L 510 240 Z', cx: 570, cy: 220 },
    { id: 5, d: 'M 340 240 L 410 220 L 440 250 L 420 320 L 360 340 L 320 300 Z', cx: 380, cy: 280 },
    { id: 6, d: 'M 440 250 L 510 240 L 540 280 L 520 350 L 450 360 L 420 320 Z', cx: 480, cy: 300 },
    { id: 7, d: 'M 240 200 L 310 180 L 350 200 L 340 240 L 280 260 L 230 240 Z', cx: 290, cy: 220 },
    { id: 8, d: 'M 350 280 L 400 260 L 420 290 L 410 330 L 360 340 L 340 310 Z', cx: 385, cy: 300 },
    { id: 9, d: 'M 330 340 L 380 320 L 410 350 L 400 400 L 350 410 L 320 380 Z', cx: 365, cy: 365 },
    { id: 10, d: 'M 480 320 L 540 300 L 570 340 L 550 400 L 490 410 L 470 370 Z', cx: 520, cy: 360 },
    { id: 11, d: 'M 400 360 L 450 340 L 480 370 L 470 430 L 410 440 L 390 400 Z', cx: 440, cy: 390 },
    { id: 12, d: 'M 300 400 L 350 380 L 380 410 L 360 460 L 310 470 L 280 440 Z', cx: 335, cy: 425 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 800 550"
        className="w-full h-full"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      >
        {/* District polygons */}
        {districtPaths.map((path, index) => {
          const district = districts[index];
          return (
            <g key={district.id}>
              <path
                d={path.d}
                fill={district.color}
                stroke="#ffffff"
                strokeWidth="3"
                className="cursor-pointer transition-all duration-200 hover:opacity-80"
                onMouseMove={(e) => handleMouseMove(e, district)}
                onMouseLeave={handleMouseLeave}
              />
              {/* District label */}
              <circle
                cx={path.cx}
                cy={path.cy}
                r="22"
                fill="white"
                stroke="#e0e0e0"
                strokeWidth="1"
                className="pointer-events-none"
              />
              <text
                x={path.cx}
                y={path.cy + 5}
                textAnchor="middle"
                className="text-sm pointer-events-none"
                fill="#333"
              >
                {viewMode === 'budget' ? district.budget : district.projects}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoveredDistrict && (
        <div
          className="fixed z-50 bg-gray-900 text-white px-3 py-2 rounded shadow-lg text-sm pointer-events-none"
          style={{
            left: mousePosition.x + 15,
            top: mousePosition.y + 15,
          }}
        >
          <div className="mb-1">{hoveredDistrict.name}</div>
          <div>
            {viewMode === 'budget'
              ? `${hoveredDistrict.budget} млн грн`
              : `${hoveredDistrict.projects} заходів`}
          </div>
        </div>
      )}
    </div>
  );
}
