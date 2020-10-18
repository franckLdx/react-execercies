import React, { FunctionComponent, memo } from 'react';
import { HeaderLink } from './HeaderLink';
import { AppBorder } from './AppBorder';
import { Image } from '@chakra-ui/core';
import { getPostsPageUrl, getUsersPageUrl, getAboutPageUrl } from '../routes';

export const AppHeader: FunctionComponent = memo(() => (
  <AppBorder display="flex" alignItems="center" marginTop="1" marginBottom="1">
    <Image size="50px"
      objectFit="cover"
      src="/reactEurope.png"
      alt="Icon react europe"
      rounded="full"
    />
    <HeaderLink url={getPostsPageUrl()} label="Posts" />
    <HeaderLink url={getUsersPageUrl()} label="Users" />
    <HeaderLink url={getAboutPageUrl()} label="About" />
  </AppBorder>
));
