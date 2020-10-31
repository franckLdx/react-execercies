import React, { FunctionComponent, memo } from "react"
import { Link } from "react-router-dom"
import Text from "@chakra-ui/core/dist/Text"
import { BoxProps } from "@chakra-ui/core/dist/Box";

interface ButtonLinkProps {
  url: string;
  label: string;
}

export const HeaderLink: FunctionComponent<ButtonLinkProps> = memo(({ url, label }) => {
  return (
    <Link to={url}>
      <Text {...textProps}>
        {label}
      </Text>
    </Link>
  );
});

HeaderLink.displayName = "HeaderLink";

const textProps: BoxProps = {
  margin: "2",
  color: "app.main",
  fontSize: "app.medium",
  fontWeight: "app.bold",
}