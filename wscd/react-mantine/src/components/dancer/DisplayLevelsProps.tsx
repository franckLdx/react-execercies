import { FC } from 'react';
import { Stack, Text } from '@mantine/core';
import { LevelExplanationModel, LevelModel, RoleName } from '@/services/dancer/getDancer';
import { leveNamelByLevelid } from '@/data/level';

interface DisplayLevelsProps {
  role: RoleName;
  levelExplanation: LevelExplanationModel;
  levels: LevelModel[];
}

export const DisplayLevels: FC<DisplayLevelsProps> = ({ role, levelExplanation, levels }) => {
  const displayedLevels = levels.sort((level1, level2) => level2.division.id - level1.division.id);
  const allowed = leveNamelByLevelid[levelExplanation.allowed];
  const minimum = leveNamelByLevelid[levelExplanation.required];
  const textExplanation = `Niveau authorisé: ${allowed}, Niveau minimum: ${minimum}`;

  return (
    <Stack>
      <Text fw={700} size="xl">
        {role}
      </Text>
      <Text fw={500} size="lg">
        {textExplanation}
      </Text>
      {displayedLevels.map((level) => (
        <Text key={level.division.name}>
          {level.division.name} : {level.total_points}
        </Text>
      ))}
    </Stack>
  );
};
