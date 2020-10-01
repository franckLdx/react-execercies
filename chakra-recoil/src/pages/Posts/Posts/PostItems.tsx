import React, { FunctionComponent } from "react";
import { Link } from 'react-router-dom'
import PseudoBox, { PseudoBoxProps } from "@chakra-ui/core/dist/PseudoBox";
import Text from "@chakra-ui/core/dist/Text";
import { UserInfo } from "./UserInfo";
import { Post } from "../../../state/post";
import { AppDivider } from "../../../sharedComponents/AppDivider";

type PostItemProps = {
  post: Post;
} & Pick<PseudoBoxProps, 'mt'>

export const PostItem: FunctionComponent<PostItemProps> = ({ post, mt }) => (
  <Link to={`/posts/${post.id}`}>
    <PseudoBox {...PostItemContainerProps} mt={mt}>
      <Text minHeight="app.itemContainer.minHeight">
        {post.title}
      </Text>
      <AppDivider />
      <UserInfo userId={post.userId} />
    </PseudoBox>
  </Link >
);


const PostItemContainerProps: PseudoBoxProps = {
  backgroundColor: "app.secondaryBackgroundColor",
  rounded: "app.normal",
  fontSize: "app.normal",
  fontWeight: "app.medium",
  p: "2",
  _hover: {
    borderColor: "app.selectedBorderColor",
    fontWeight: "app.bold",
    borderWidth: "3px",
    shadow: "app.medium",
  },
}
