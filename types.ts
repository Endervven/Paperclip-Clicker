export interface Generator {
  id: string;
  name: string;
  description: string;
  baseCost: number;
  pps: number; // paperclips per second
  owned: number;
  costMultiplier: number;
}

export type AchievementType = 'PAPERCLIPS' | 'PPS' | 'TOTAL_GENERATORS' | 'SPECIFIC_GENERATOR';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: AchievementType;
  value: number;
  unlocked: boolean;
  // Optional for 'SPECIFIC_GENERATOR' type
  generatorId?: string;
}
