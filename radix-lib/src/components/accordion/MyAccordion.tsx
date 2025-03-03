import { FC, ReactNode } from "react";
import { AccordionContent, AccordionTrigger, Item, Root } from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classes from './styles.module.scss'

interface MyAccordionProps {
  title: ReactNode
  children: ReactNode
}

export const MyAccordion: FC<MyAccordionProps> = ({ title, children }) => (
  <Root type="single" collapsible>
    <Item className={classes.AccordionItem} value="content" >
      <AccordionTrigger className={classes.AccordionTrigger}>
        {title}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </AccordionTrigger>
      <AccordionContent className={classes.AccordionContent}>
        {children}
      </AccordionContent>
    </ Item>
  </Root >
);

