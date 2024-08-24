export type LevelShort = 'CHMP' | 'ALS' | 'ADV' | 'INT' | 'NOV' | 'NEW' | 'JUN';

const prioritylByLevelid: Record<LevelShort, number> = {
  CHMP: 1,
  ALS: 2,
  ADV: 3,
  INT: 4,
  NOV: 5,
  NEW: 6,
  JUN: 7,
};

export const compareLevelShort = (LevelShort1: LevelShort, LevelShort2: LevelShort) =>
  prioritylByLevelid[LevelShort1] - prioritylByLevelid[LevelShort2];

export const leveNamelByLevelShort: Record<LevelShort, string> = {
  CHMP: 'champion',
  ALS: 'all star',
  ADV: 'advanced',
  INT: 'intermediate',
  NOV: 'novice',
  NEW: 'newcommer',
  JUN: 'junior',
};
