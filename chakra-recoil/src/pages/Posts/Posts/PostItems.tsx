import React, { FunctionComponent, memo } from "react";
import { Link } from 'react-router-dom'
import PseudoBox, { PseudoBoxProps } from "@chakra-ui/core/dist/PseudoBox";
import Text from "@chakra-ui/core/dist/Text";
import { UserInfo } from "./UserInfo";
import { AppDivider } from "../../../sharedComponents/AppDivider";
import { Post } from "../../../state/posts/atoms";

type PostItemProps = {
  post: Post;
} & Pick<PseudoBoxProps, 'mt' | 'marginTop'>

export const PostItem: FunctionComponent<PostItemProps> = memo(({ post, mt }) => (
  <Link to={`/posts/${post.id}`}>
    <PseudoBox as="article" {...PostItemContainerProps} mt={mt}>
      <Text minHeight="app.itemContainer.minHeight">
        {post.title}
      </Text>
      <AppDivider />
      <UserInfo userId={post.userId} />
    </PseudoBox>
  </Link >
));

const PostItemContainerProps: PseudoBoxProps = {
  backgroundColor: "app.secondaryBackground",
  rounded: "app.normal",
  fontSize: "app.normal",
  fontWeight: "app.medium",
  p: "2",
  _hover: {
    borderColor: "app.mainBorder",
    borderWidth: "1px",
    padding: "-1px",
    fontWeight: "app.bold",
    shadow: "app.medium",
  },
}
