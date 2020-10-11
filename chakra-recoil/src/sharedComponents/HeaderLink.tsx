import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import Text from "@chakra-ui/core/dist/Text"

interface ButtonLinkProps {
  url: string;
  label: string;
}

export const HeaderLink: FunctionComponent<ButtonLinkProps> = ({ url, label }) => (
  <Link to={url}>
    <Text
      margin="2"
      color="app.main"
      fontSize="app.medium"
      fontWeight="app.bold"
    >
      {label}
    </Text>
  </Link>
); 