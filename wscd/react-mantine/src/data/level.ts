export type LevelId = 'CHMP' | 'ALS' | 'ADV' | 'INT' | 'NOV' | 'NEW' | 'JUN';

export const leveNamelByLevelid: Record<LevelId, string> = {
  CHMP: 'champion',
  ALS: 'all star',
  ADV: 'advanced',
  INT: 'intermediate',
  NOV: 'novice',
  NEW: 'newcommer',
  JUN: 'junior',
};
