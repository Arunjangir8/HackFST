import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const sellerVisibilityData = [
  { name: 'Top 10% Sellers', value: 70 },
  { name: 'Middle 30% Sellers', value: 25 },
  { name: 'Bottom 60% Sellers', value: 5 },
];

export default function SellerVisibilityBarGraph() {
  return (
    <div className="bg-white shadow-md flex flex-col items-center w-full opacity-0 p-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <h2 className="text-xl font-bold mb-4">Seller Visibility Distribution</h2>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sellerVisibilityData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={(value) => [`${value}%`, 'Visibility']} />
            <Legend />
            <Bar dataKey="value" name="Visibility Percentage" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
     
    </div>
  );
}