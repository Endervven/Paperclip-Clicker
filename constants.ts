
import { Generator } from './types';

export const INITIAL_GENERATORS: Generator[] = [
  {
    id: 'auto-clipper',
    name: 'Auto-Clipper',
    description: 'A friendly robot arm that clips for you.',
    baseCost: 15,
    pps: 0.1,
    owned: 0,
    costMultiplier: 1.15,
  },
  {
    id: 'intern',
    name: 'Unpaid Intern',
    description: 'Eager to please, fueled by coffee and dreams.',
    baseCost: 100,
    pps: 1,
    owned: 0,
    costMultiplier: 1.15,
  },
  {
    id: 'paperclip-printer',
    name: 'Paperclip Printer',
    description: 'A repurposed 3D printer that churns out clips.',
    baseCost: 1100,
    pps: 8,
    owned: 0,
    costMultiplier: 1.15,
  },
  {
    id: 'branch-office',
    name: 'Branch Office',
    description: 'An entire office dedicated to paperclip production.',
    baseCost: 12000,
    pps: 47,
    owned: 0,
    costMultiplier: 1.15,
  },
  {
    id: 'paperclip-factory',
    name: 'Paperclip Factory',
    description: 'Industrial-scale clipping operations.',
    baseCost: 130000,
    pps: 260,
    owned: 0,
    costMultiplier: 1.15,
  },
    {
    id: 'quantum-folder',
    name: 'Quantum Folder',
    description: 'Folds spacetime into the shape of paperclips.',
    baseCost: 1400000,
    pps: 1400,
    owned: 0,
    costMultiplier: 1.15,
  },
];
