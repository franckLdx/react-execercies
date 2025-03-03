import { FC } from "react";
import classes from './style.module.scss'
import { Root, Trigger, Portal, Arrow, Content } from "@radix-ui/react-popover";

interface PopOverProps {
  label: string
  content: string
}

export const PopOver: FC<PopOverProps> = ({ label, content }) => (
  <Root>
    <Trigger className={classes.PopoverTrigger}>{label}</Trigger>
    <Portal>
      <Content className={classes.PopoverContent}>
        {content}
        <Arrow className={classes.PopoverArrow} />
      </Content>
    </Portal>
  </Root>
)