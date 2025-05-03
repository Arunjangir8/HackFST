import React, { useEffect, useRef } from 'react';

const profitMarginData = [
  { name: 'Large Sellers', value: 11 },
  { name: 'Small Sellers', value: 3.5 },
];

export default function ComparisonBar() {
  const bars = useRef([]);

  useEffect(() => {
    if (bars.current) {
      const maxValue = Math.max(...profitMarginData.map(item => item.value));
      bars.current.forEach((bar, index) => {
        if (bar) {
          setTimeout(() => {
            const width = `${(profitMarginData[index].value / maxValue) * 100}%`;
            bar.style.width = width;
          }, 300 + index * 150);
        }
      });
    }
  }, []);

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto opacity-0 animate-fade-in"
      style={{ animationDelay: '0.3s' }}
    >
      <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">Profit Margin Comparison</h3>

      <div className="flex flex-col space-y-6">
        {profitMarginData.map((entry, index) => (
          <div key={`${entry.name}-${index}`} className="flex items-center">
            <div className="w-32 text-right pr-4 font-medium text-gray-700">{entry.name}</div>
            <div className="flex-1 h-6 bg-gray-100 rounded-md overflow-hidden">
              <div
                ref={(el) => (bars.current[index] = el)}
                className={`h-full ${
                  index === 0 ? 'bg-green-500' : 'bg-orange-400'
                } rounded-md `}
                style={{
                  transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDelay: `${index * 0.2}s`,
                }}
              ></div>
            </div>
            <div className="w-16 pl-3 font-bold text-gray-800">{entry.value}%</div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-600 mt-6">
        Large sellers have a profit margin more than three times higher than small sellers.
      </p>
    </div>
  );
}
