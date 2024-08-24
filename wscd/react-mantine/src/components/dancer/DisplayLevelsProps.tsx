import { FC } from 'react';
import { Text } from '@mantine/core';
import { LevelModel } from '@/services/dancer/getDancer';

interface DisplayLevelsProps {
  levels: LevelModel[];
}

export const DisplayLevels: FC<DisplayLevelsProps> = ({ levels }) => {
  const displayedLevels = levels.sort((level1, level2) => level2.division.id - level1.division.id);

  return displayedLevels.map((level) => (
    <Text>
      {level.division.name} : {level.total_points}
    </Text>
  ));
};
