import { FC, ReactNode } from "react";
import { Root, Trigger, Content } from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import styles from './styles.module.scss'

interface CollapbibleProps {
  title: ReactNode
  children: ReactNode
}

export const Collapbible: FC<CollapbibleProps> = ({ title, children }) => {
  const toggleIcon = <ChevronDownIcon className={styles.icon} aria-hidden />
  return (
    <Root >
      <Trigger className={styles.trigger}>{title}{toggleIcon}</Trigger>
      <Content>{children}</Content>
    </Root >
  )
}