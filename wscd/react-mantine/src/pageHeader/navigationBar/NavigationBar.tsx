import { FC } from "react";
import { Flex } from "@mantine/core";
import { RoutedLink } from "./RoutedLink";
import { dancersPageUrl, hompePageUrl } from "@/Router";


export const NavigationBar: FC = () => (
  <Flex gap="40px" justify="center" align="center" pt={5} pb={5} bg="var(--mantine-color-dark-5)">
    <RoutedLink to={hompePageUrl}>Search for dancers</RoutedLink>
    <RoutedLink to={dancersPageUrl}>Dancers list</RoutedLink>
  </Flex >
)