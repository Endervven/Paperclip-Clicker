import React from 'react';
import { Generator } from '../types';
import GeneratorItem from './GeneratorItem';

interface GeneratorStoreProps {
  generators: Generator[];
  paperclipCount: number;
  onBuyGenerator: (generatorId: string) => void;
}

const GeneratorStore: React.FC<GeneratorStoreProps> = ({ generators, paperclipCount, onBuyGenerator }) => {
  return (
    <div className="bg-clip-gray-900 rounded-xl shadow-2xl border border-clip-gray-800 p-4 h-full">
      <h3 className="text-2xl font-bold text-white mb-4 text-center">Store</h3>
      <div className="space-y-2 overflow-y-auto max-h-[calc(50vh-4rem)] md:max-h-[35vh]">
        {generators.map(gen => (
          <GeneratorItem 
            key={gen.id}
            generator={gen}
            paperclipCount={paperclipCount}
            onBuy={onBuyGenerator}
          />
        ))}
      </div>
    </div>
  );
};

export default GeneratorStore;