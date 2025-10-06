import React, { useEffect, useState } from 'react';
import { Achievement } from '../types';
import { TrophyIcon } from './icons';

interface AchievementToastProps {
  unlockedAchievement: Achievement | null;
  onDismiss: () => void;
}

const AchievementToast: React.FC<AchievementToastProps> = ({ unlockedAchievement, onDismiss }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (unlockedAchievement) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        // Allow time for fade-out animation before dismissing
        setTimeout(onDismiss, 300);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [unlockedAchievement, onDismiss]);

  if (!unlockedAchievement) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-5 right-5 w-full max-w-sm p-4 rounded-lg shadow-2xl bg-clip-gray-800 border border-yellow-400 text-white transition-all duration-300 ease-in-out transform ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 text-yellow-400">
          <TrophyIcon className="w-8 h-8" />
        </div>
        <div className="ml-4">
          <p className="font-bold">Achievement Unlocked!</p>
          <p className="text-sm text-clip-gray-300">{unlockedAchievement.name}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementToast;
