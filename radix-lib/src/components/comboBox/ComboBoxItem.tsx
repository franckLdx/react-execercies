import { forwardRef } from "react";
import { Item, ItemText, SelectItemProps } from "@radix-ui/react-select";


export const ComboBoxItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Item
        className="SelectItem"
        {...props}
        ref={forwardedRef}
      >
        <ItemText>{children}</ItemText>
      </Item>
    );
  },
);