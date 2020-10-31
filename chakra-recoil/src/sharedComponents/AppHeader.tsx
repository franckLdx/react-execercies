import React, { FunctionComponent, memo } from 'react';
import { HeaderLink } from './HeaderLink';
import { AppBorder, AppBorderProps } from './AppBorder';
import { Image } from '@chakra-ui/core';
import { getPostsPageUrl, getUsersPageUrl, getAboutPageUrl } from '../routes';

export const AppHeader: FunctionComponent = memo(() => (
  <AppBorder {...appBorderProps}>
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
AppHeader.displayName = "AppHeader";

const appBorderProps: AppBorderProps = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  marginTop: "1",
  marginBottom: "1",
};