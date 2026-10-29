import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ChartViewProps {
  budgetData: Array<{ budget: number; projects: number }>;
  viewMode: 'budget' | 'projects';
  minBudget: number;
  maxBudget: number;
  minProjects: number;
  maxProjects: number;
}

const districtNames = [
  'Замостя', 'Вишенька', 'Центр', 'Барський район', 'Поділля', 'Слов\'янка',
  'Старе місто', 'Ківцівка', 'Тяжилів', 'Корея', 'Пирогово', 'Стрижавка'
];

export function ChartView({ budgetData, viewMode, minBudget, maxBudget, minProjects, maxProjects }: ChartViewProps) {
  // Prepare chart data
  const chartData = budgetData.map((data, index) => ({
    name: districtNames[index],
    value: viewMode === 'budget' ? data.budget : data.projects,
    budget: data.budget,
    projects: data.projects
  }))
  // Sort from highest to lowest
  .sort((a, b) => b.value - a.value);

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="w-full h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={chartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(52,58,64,0.1)" />
            <XAxis 
              dataKey="name" 
              angle={-45}
              textAnchor="end"
              height={100}
              tick={{ 
                fill: '#3c4d5d', 
                fontSize: 12,
                fontFamily: 'VinnytsiaSansReg:Book, sans-serif'
              }}
            />
            <YAxis 
              tick={{ 
                fill: '#3c4d5d', 
                fontSize: 12,
                fontFamily: 'VinnytsiaSansReg:Book, sans-serif'
              }}
              label={{ 
                value: viewMode === 'budget' ? 'Масштаб бюджету у млн грн' : 'Кількість заходів', 
                angle: -90, 
                position: 'insideLeft',
                offset: 15,
                style: { 
                  fill: '#3c4d5d', 
                  fontSize: 12,
                  fontFamily: 'VinnytsiaSansReg:Book, sans-serif',
                  textAnchor: 'middle'
                }
              }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                fontFamily: 'VinnytsiaSansReg:Book, sans-serif',
                fontSize: '12px'
              }}
              labelStyle={{
                color: 'white',
                fontFamily: 'VinnytsiaSansBold:Bold, sans-serif',
                fontSize: '12px'
              }}
              formatter={(value: any, name: string, props: any) => {
                const data = props.payload;
                return [
                  <>
                    <div style={{ color: 'white' }}>{data.budget} млн грн</div>
                    <div style={{ color: 'white' }}>{data.projects} {data.projects === 1 ? 'захід' : data.projects < 5 ? 'заходи' : 'заходів'}</div>
                  </>,
                  ''
                ];
              }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} fill="#c95555" barSize={32}>
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill="#c95555"
                  stroke="#fff"
                  strokeWidth={1}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}