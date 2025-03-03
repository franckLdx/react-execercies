import { FC, ReactNode } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Content, Icon, Portal, Root, ScrollDownButton, ScrollUpButton, Trigger, Value, Viewport } from "@radix-ui/react-select";

import classes from './comboBox.module.scss'

interface ComboBoxProps {
  className?: string
  placeholder?: string
  children: ReactNode
  value?: string
  onValueChange: (newValue: string) => void
}

export const ComboBox: FC<ComboBoxProps> = ({ className = '', placeholder, value, onValueChange, children }) => (
  <Root value={value} onValueChange={onValueChange}>
    <Trigger className={`${classes.trigger} ${className}`} aria-label="Food">
      <Value placeholder={placeholder} />
      <Icon className="SelectIcon">
        <ChevronDownIcon />
      </Icon>
    </Trigger>
    <Portal>
      <Content className={`${classes.content} ${className}`}>
        <ScrollUpButton>
          <ChevronUpIcon />
        </ScrollUpButton>
        <ScrollDownButton>
          <ChevronDownIcon />
        </ScrollDownButton>
        <Viewport>
          {children}
        </Viewport>
      </Content>
    </Portal>
  </Root>
)