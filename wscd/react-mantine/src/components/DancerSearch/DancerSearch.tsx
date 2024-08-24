import { FC, useState } from 'react';
import { Autocomplete, Center, ComboboxItem, OptionsFilter, Stack } from '@mantine/core';
import { useDancerSearch } from '@/services/dancer/dancerSearch';
import { LoadError } from '../LoadError';

interface DancerSearchProps {
  onDancerSelected: (wscid: number) => void;
}

export const DancerSearch: FC<DancerSearchProps> = ({ onDancerSelected }) => {
  const [value, setValue] = useState<string>('');
  const query = useDancerSearch(value);

  const onSelected = (selectedValue: string) => {
    setValue(selectedValue);
    const dancerItem = selectedValue
      ? query.data!?.find((dancer) => dancer.name === selectedValue)
      : undefined;
    if (dancerItem) {
      onDancerSelected(dancerItem.wscid);
    }
  };

  const filter: OptionsFilter = ({ options }) => {
    const filtered = (options as ComboboxItem[]).sort((a, b) => a.label.localeCompare(b.label));
    return filtered;
  };

  return (
    <Center h={100}>
      <Stack>
        <Autocomplete
          data={query.data?.map((dancer) => dancer.name)}
          maw={300}
          filter={filter}
          placeholder="Search by name or WSCD #"
          onChange={onSelected}
        />
        {query.isError && <LoadError />}
      </Stack>
    </Center>
  );
};
