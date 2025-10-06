import React from 'react';
import { Achievement } from '../types';
import { LockIcon, TrophyIcon } from './icons';

interface AchievementItemProps {
  achievement: Achievement;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ achievement }) => {
  const { name, description, unlocked } = achievement;

  return (
    <div
      className={`flex items-center p-3 rounded-lg border transition-opacity duration-500 ${
        unlocked
          ? 'bg-clip-gray-800 border-yellow-500/50 opacity-100'
          : 'bg-clip-gray-800/50 border-clip-gray-700 opacity-60'
      }`}
    >
      <div className="flex-shrink-0 w-8 h-8 mr-4">
        {unlocked ? (
          <TrophyIcon className="text-yellow-400" />
        ) : (
          <LockIcon className="text-clip-gray-500" />
        )}
      </div>
      <div>
        <h5 className={`font-bold ${unlocked ? 'text-white' : 'text-clip-gray-300'}`}>{name}</h5>
        <p className="text-sm text-clip-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default AchievementItem;
