
import React, { useMemo } from 'react';
import { Generator } from '../types';

interface GeneratorItemProps {
  generator: Generator;
  paperclipCount: number;
  onBuy: (generatorId: string) => void;
}

const formatNumber = (num: number): string => {
  if (num < 1000) return num.toLocaleString('en-US', {maximumFractionDigits: 0});
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 2,
  }).format(num);
};


const GeneratorItem: React.FC<GeneratorItemProps> = ({ generator, paperclipCount, onBuy }) => {
  const currentCost = useMemo(() => {
    return Math.ceil(generator.baseCost * Math.pow(generator.costMultiplier, generator.owned));
  }, [generator.baseCost, generator.costMultiplier, generator.owned]);

  const canAfford = paperclipCount >= currentCost;

  return (
    <div className={`flex items-center justify-between p-3 rounded-lg border border-clip-gray-700 transition-colors duration-200 ${canAfford ? 'bg-clip-gray-800' : 'bg-clip-gray-800/50'}`}>
      <div className="flex-1 pr-4">
        <div className="flex items-baseline gap-2">
            <h4 className="font-bold text-white">{generator.name}</h4>
            <p className="text-xs text-clip-gray-400">({formatNumber(generator.pps)} pps each)</p>
        </div>
        <p className="text-sm text-clip-gray-300">{generator.description}</p>
        <p className="text-sm font-semibold text-blue-400 mt-1">Cost: {formatNumber(currentCost)}</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-white">{generator.owned}</span>
        <button
          onClick={() => onBuy(generator.id)}
          disabled={!canAfford}
          className="mt-1 px-4 py-1 text-sm font-bold text-white bg-blue-600 rounded-md shadow-md transition-all duration-200
                     hover:bg-blue-500 disabled:bg-clip-gray-600 disabled:cursor-not-allowed disabled:text-clip-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default GeneratorItem;
