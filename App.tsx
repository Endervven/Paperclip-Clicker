import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Generator, Achievement } from './types';
import { INITIAL_GENERATORS } from './constants';
import { INITIAL_ACHIEVEMENTS } from './achievements';
import PaperclipDisplay from './components/PaperclipDisplay';
import ClickerButton from './components/ClickerButton';
import GeneratorStore from './components/GeneratorStore';
import Achievements from './components/Achievements';
import AchievementToast from './components/AchievementToast';

const App: React.FC = () => {
  const [paperclipCount, setPaperclipCount] = useState<number>(0);
  const [generators, setGenerators] = useState<Generator[]>(INITIAL_GENERATORS);
  const [achievements, setAchievements] = useState<Achievement[]>(INITIAL_ACHIEVEMENTS);
  const [unlockedQueue, setUnlockedQueue] = useState<Achievement[]>([]);
  const [currentUnlock, setCurrentUnlock] = useState<Achievement | null>(null);

  const paperclipsPerSecond = useMemo(() => {
    return generators.reduce((total, gen) => total + gen.owned * gen.pps, 0);
  }, [generators]);

  const totalGeneratorsOwned = useMemo(() => {
    return generators.reduce((total, gen) => total + gen.owned, 0);
  }, [generators]);

  const handleManualClick = useCallback(() => {
    setPaperclipCount(prev => prev + 1);
  }, []);

  const handleBuyGenerator = useCallback((generatorId: string) => {
    setGenerators(prevGenerators => {
      const newGenerators = [...prevGenerators];
      const generatorIndex = newGenerators.findIndex(g => g.id === generatorId);
      if (generatorIndex === -1) return prevGenerators;

      const generator = newGenerators[generatorIndex];
      const currentCost = Math.ceil(generator.baseCost * Math.pow(generator.costMultiplier, generator.owned));

      if (paperclipCount >= currentCost) {
        setPaperclipCount(prevCount => prevCount - currentCost);
        newGenerators[generatorIndex] = { ...generator, owned: generator.owned + 1 };
        return newGenerators;
      }
      return prevGenerators;
    });
  }, [paperclipCount]);

  useEffect(() => {
    const gameTick = setInterval(() => {
      if (paperclipsPerSecond > 0) {
        setPaperclipCount(prev => prev + paperclipsPerSecond / 10);
      }
    }, 100);

    return () => clearInterval(gameTick);
  }, [paperclipsPerSecond]);
  
  // Check for new achievements
  useEffect(() => {
    const newUnlocks: Achievement[] = [];

    setAchievements(prevAchievements => {
      const updatedAchievements = prevAchievements.map(ach => {
        if (ach.unlocked) {
          return ach;
        }

        let conditionMet = false;
        switch (ach.type) {
          case 'PAPERCLIPS':
            conditionMet = paperclipCount >= ach.value;
            break;
          case 'PPS':
            conditionMet = paperclipsPerSecond >= ach.value;
            break;
          case 'TOTAL_GENERATORS':
            conditionMet = totalGeneratorsOwned >= ach.value;
            break;
          case 'SPECIFIC_GENERATOR':
            const gen = generators.find(g => g.id === ach.generatorId);
            conditionMet = (gen?.owned ?? 0) >= ach.value;
            break;
        }

        if (conditionMet) {
          const unlockedAch = { ...ach, unlocked: true };
          newUnlocks.push(unlockedAch);
          return unlockedAch;
        }

        return ach;
      });

      if (newUnlocks.length > 0) {
        setUnlockedQueue(prevQueue => [...prevQueue, ...newUnlocks]);
        return updatedAchievements;
      }
      return prevAchievements; // No change, return original to avoid re-render
    });
  }, [paperclipCount, paperclipsPerSecond, generators, totalGeneratorsOwned]);

  // Process the unlock notification queue
  useEffect(() => {
    if (unlockedQueue.length > 0 && !currentUnlock) {
      const [nextUnlock, ...rest] = unlockedQueue;
      setCurrentUnlock(nextUnlock);
      setUnlockedQueue(rest);
    }
  }, [unlockedQueue, currentUnlock]);


  return (
    <div className="bg-clip-gray-950 text-clip-gray-100 min-h-screen font-sans flex flex-col items-center">
      <header className="w-full text-center py-6 border-b border-clip-gray-800 shadow-lg bg-clip-gray-900">
        <h1 className="text-4xl font-bold tracking-wider text-white">Paperclip Klicker</h1>
        <p className="text-clip-gray-400">Your path to office supply domination begins now.</p>
      </header>
      
      <main className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 p-4 md:p-8">
        {/* Left/Main Column */}
        <div className="flex-grow md:w-2/3 flex flex-col items-center justify-center p-6 bg-clip-gray-900 rounded-xl shadow-2xl border border-clip-gray-800">
          <PaperclipDisplay count={paperclipCount} pps={paperclipsPerSecond} />
          <ClickerButton onClick={handleManualClick} />
        </div>

        {/* Right/Store & Achievements Column */}
        <div className="md:w-1/3 flex flex-col gap-8">
          <GeneratorStore
            generators={generators}
            paperclipCount={paperclipCount}
            onBuyGenerator={handleBuyGenerator}
          />
          <Achievements achievements={achievements} />
        </div>
      </main>
      <AchievementToast
        unlockedAchievement={currentUnlock}
        onDismiss={() => setCurrentUnlock(null)}
      />
    </div>
  );
};

export default App;