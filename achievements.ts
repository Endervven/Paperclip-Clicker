import { Achievement } from './types';

export const ALL_ACHIEVEMENTS: Omit<Achievement, 'unlocked'>[] = [
  // Paperclip Milestones
  { id: 'clip1', name: 'First Clip', description: 'Make your first paperclip.', type: 'PAPERCLIPS', value: 1 },
  { id: 'clip100', name: 'Getting Started', description: 'Amass 100 paperclips.', type: 'PAPERCLIPS', value: 100 },
  { id: 'clip1k', name: 'Paperclip Enthusiast', description: 'Amass 1,000 paperclips.', type: 'PAPERCLIPS', value: 1000 },
  { id: 'clip10k', name: 'Serious Business', description: 'Amass 10,000 paperclips.', type: 'PAPERCLIPS', value: 10000 },
  { id: 'clip1m', name: 'Millionaire', description: 'Amass 1,000,000 paperclips.', type: 'PAPERCLIPS', value: 1000000 },

  // PPS Milestones
  { id: 'pps1', name: 'Automation Begins', description: 'Reach 1 paperclip per second.', type: 'PPS', value: 1 },
  { id: 'pps10', name: 'Need for Speed', description: 'Reach 10 paperclips per second.', type: 'PPS', value: 10 },
  { id: 'pps100', name: 'Assembly Line', description: 'Reach 100 paperclips per second.', type: 'PPS', value: 100 },
  { id: 'pps1k', name: 'Unstoppable', description: 'Reach 1,000 paperclips per second.', type: 'PPS', value: 1000 },

  // Generator Milestones
  { id: 'gen1', name: 'First Hire', description: 'Buy your first generator.', type: 'TOTAL_GENERATORS', value: 1 },
  { id: 'gen10', name: 'Growing Team', description: 'Own 10 total generators.', type: 'TOTAL_GENERATORS', value: 10 },
  { id: 'gen50', name: 'Middle Management', description: 'Own 50 total generators.', type: 'TOTAL_GENERATORS', value: 50 },
  { id: 'gen100', name: 'Corporate Ladder', description: 'Own 100 total generators.', type: 'TOTAL_GENERATORS', value: 100 },
  
  // Specific Generator
  { id: 'gen_intern_1', name: 'Welcome Aboard!', description: 'Hire your first Unpaid Intern.', type: 'SPECIFIC_GENERATOR', value: 1, generatorId: 'intern' },
  { id: 'gen_factory_1', name: 'Industrial Revolution', description: 'Build a Paperclip Factory.', type: 'SPECIFIC_GENERATOR', value: 1, generatorId: 'paperclip-factory' },
  { id: 'gen_quantum_1', name: 'Beyond Physics', description: 'Harness a Quantum Folder.', type: 'SPECIFIC_GENERATOR', value: 1, generatorId: 'quantum-folder' },
];

export const INITIAL_ACHIEVEMENTS = ALL_ACHIEVEMENTS.map(ach => ({...ach, unlocked: false}));
