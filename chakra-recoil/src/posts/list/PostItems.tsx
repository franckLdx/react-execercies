import React, { FunctionComponent } from "react";
import PseudoBox, { PseudoBoxProps } from "@chakra-ui/core/dist/PseudoBox";
import Text from "@chakra-ui/core/dist/Text";
import Divider from "@chakra-ui/core/dist/Divider";
import { Post } from "../model";
import { UserInfo } from "./UserInfo";
import { Link } from "react-router-dom";

interface PostItemProps {
  post: Post;
}

export const PostItem: FunctionComponent<PostItemProps> = ({ post }) => {
  return (
    <Link to={`posts/${post.id}`}>
      <PseudoBox {...PostItemContainerProps}>
        <Text h="5em">
          {post.title}
        </Text>
        <Divider />
        <UserInfo userId={post.userId} />
      </PseudoBox>
    </Link>
  );
};

const PostItemContainerProps: PseudoBoxProps = {
  w: "350px",
  backgroundColor: "white",
  borderColor: "gray.600",
  borderWidth: "2px",
  rounded: "lg",
  shadow: "xl",
  fontSize: "xl",
  fontWeight: "500",
  p: "2",
  _hover: {
    borderColor: "gray.900",
    fontWeight: "bold",
    borderWidth: "3px",
  },
}
