
import React, { useEffect, useRef } from 'react';

const PieGraph = ({ data, dataKey = "value", nameKey = "name", title }) => {
  const svgRef = useRef(null);
  
  useEffect(() => {
    if (svgRef.current) {
      setTimeout(() => {
        svgRef.current.classList.add('animate-pie-reveal');
      }, 300);
    }
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
      <div className="flex justify-center mb-4">
        <div className="relative w-48 h-48">
          <svg ref={svgRef} viewBox="0 0 100 100" className="w-full h-full opacity-0">
            {data.map((entry, index) => {
              const total = data.reduce((sum, item) => sum + item[dataKey], 0);
              const percentage = (entry[dataKey] / total) * 100;
              
              // Calculate the position for this segment
              let startAngle = 0;
              for (let i = 0; i < index; i++) {
                startAngle += (data[i][dataKey] / total) * 360;
              }
              
              const endAngle = startAngle + (percentage * 3.6);
              
              // Convert angles to radians for calculations
              const startRad = (startAngle - 90) * Math.PI / 180;
              const endRad = (endAngle - 90) * Math.PI / 180;
              
              // Calculate the path
              const x1 = 50 + 48 * Math.cos(startRad);
              const y1 = 50 + 48 * Math.sin(startRad);
              const x2 = 50 + 48 * Math.cos(endRad);
              const y2 = 50 + 48 * Math.sin(endRad);
              
              // Determine if the arc should be drawn the long way or short way around
              const largeArcFlag = percentage > 50 ? 1 : 0;
              
              // Create the path
              const path = `M 50 50 L ${x1} ${y1} A 48 48 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
              
              // Assign colors based on index
              const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];
              const color = colors[index % colors.length];
              
              return (
                <path key={index} d={path} fill={color} />
              );
            })}
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {data.map((entry, index) => {
          const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500', 'bg-pink-500'];
          const color = colors[index % colors.length];
          return (
            <div key={`${entry[nameKey]}-${index}`} className="flex items-center text-sm opacity-0 animate-slide-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
              <div className={`w-3 h-3 ${color} rounded-full mr-2`}></div>
              <span>{entry[nameKey]}: {entry[dataKey]}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieGraph;
