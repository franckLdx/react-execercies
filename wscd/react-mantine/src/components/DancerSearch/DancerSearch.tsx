import React, { useState } from 'react';
import { Autocomplete, Center } from '@mantine/core';
import { useDancerSearch } from '@/services/dancerSearch';

export function DancerSearch() {
  const [value, setValue] = useState<string>('');
  const query = useDancerSearch(value);

  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Autocomplete
        data={query.data?.map((dancer) => dancer.name)}
        maw={300}
        placeholder="Search by name or WSCD #"
        onChange={setValue}
      />
    </Center>
  );
}
