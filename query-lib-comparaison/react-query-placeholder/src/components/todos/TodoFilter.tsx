import React, { FC } from 'react';

import { Box } from '@chakra-ui/layout';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../store/filter/selectors';
import { filterActions } from '../../store/filter/filter';
import type { Filter as FilterType } from '../../store/filter/filter';
import { Center } from '@chakra-ui/react';
import { RadioCardGroup, RadioCardOption } from '../radio/RadioCardGroup';

const options: Array<RadioCardOption<FilterType>> = [
  { value: 'all', label: 'All' },
  { value: 'done', label: 'Done' },
  { value: 'undone', label: 'Undone' }
]

export const TodoFilter: FC = () => {
  const currentFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterChange = (newFilter: string) => {
    dispatch(filterActions.filterChanged(newFilter as FilterType))
  };

  return (
    <Center>
      <Box height='3em'>
        <RadioCardGroup
          name='Filter'
          options={options}
          onChange={onFilterChange}
          value={currentFilter}
        />
      </Box>
    </Center >
  )
}