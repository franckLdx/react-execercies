import React, { FunctionComponent } from "react";
import PseudoBox, { PseudoBoxProps } from "@chakra-ui/core/dist/PseudoBox";
import Text from "@chakra-ui/core/dist/Text";
import Divider from "@chakra-ui/core/dist/Divider";
import { Post } from "../misc/model";
import { UserInfo } from "./UserInfo";
import { Link } from "react-router-dom";

type PostItemProps = {
  post: Post;
} & Pick<PseudoBoxProps, 'mt'>

export const PostItem: FunctionComponent<PostItemProps> = ({ post, mt }) => (
  <Link to={`posts/${post.id}`}>
    <PseudoBox {...PostItemContainerProps} mt={mt}>
      <Text height="5em">
        {post.title}
      </Text>
      <Divider />
      <UserInfo userId={post.userId} />
    </PseudoBox>
  </Link >
);


const PostItemContainerProps: PseudoBoxProps = {
  width: "350px",
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
