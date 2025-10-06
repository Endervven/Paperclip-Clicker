import React from 'react';
import { Achievement } from '../types';
import AchievementItem from './AchievementItem';

interface AchievementsProps {
  achievements: Achievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;

  return (
    <div className="bg-clip-gray-900 rounded-xl shadow-2xl border border-clip-gray-800 p-4 h-full">
      <div className="flex justify-between items-baseline mb-4">
        <h3 className="text-2xl font-bold text-white">Achievements</h3>
        <span className="text-sm font-semibold text-clip-gray-400">{unlockedCount} / {totalCount}</span>
      </div>
      <div className="space-y-2 overflow-y-auto max-h-[calc(50vh-4rem)] md:max-h-[35vh]">
        {achievements.map(ach => (
          <AchievementItem key={ach.id} achievement={ach} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
