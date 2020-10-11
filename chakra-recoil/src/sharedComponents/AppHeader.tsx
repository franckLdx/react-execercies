import React, { FunctionComponent, memo } from 'react';
import { HeaderLink } from './HeaderLink';
import { ExtraBorder } from './ExtraBorder';
import { Image } from '@chakra-ui/core';
import { ABOUT_URL, POSTS_URL, USERS_URL } from '../routes/routesDef';

export const AppHeader: FunctionComponent = memo(() => (
  <ExtraBorder display="flex" alignItems="center" marginTop="1" marginBottom="1">
    <Image size="50px"
      objectFit="cover"
      src="/reactEurope.png"
      alt="Icon react europe"
      rounded="full"
    />
    <HeaderLink url={POSTS_URL} label="Posts" />
    <HeaderLink url={USERS_URL} label="Users" />
    <HeaderLink url={ABOUT_URL} label="About" />
  </ExtraBorder>
));
