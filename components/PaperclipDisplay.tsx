
import React from 'react';

interface PaperclipDisplayProps {
  count: number;
  pps: number;
}

const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
};

const PaperclipDisplay: React.FC<PaperclipDisplayProps> = ({ count, pps }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
        {formatNumber(Math.floor(count))}
      </h2>
      <p className="text-clip-gray-300">paperclips</p>
      <p className="text-clip-gray-400 mt-2 text-lg">
        per second: {formatNumber(pps)}
      </p>
    </div>
  );
};

export default PaperclipDisplay;
