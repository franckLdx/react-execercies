import { FC } from 'react';
import { Stack, Text } from '@mantine/core';
import { LevelExplanationModel, LevelModel, RoleName } from '@/services/dancer/getDancer';
import { compareLevelShort, leveNamelByLevelShort } from '@/data/level';

interface DisplayLevelsProps {
  role: RoleName;
  levelExplanation: LevelExplanationModel;
  levels: LevelModel[];
}

export const DisplayLevels: FC<DisplayLevelsProps> = ({ role, levelExplanation, levels }) => {
  const displayedLevels = levels.sort((level1, level2) =>
    compareLevelShort(level1.division.name, level2.division.name)
  );
  const allowed = leveNamelByLevelShort[levelExplanation.allowed];
  const minimum = leveNamelByLevelShort[levelExplanation.required];
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
