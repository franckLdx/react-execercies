import React, { FunctionComponent, memo, useMemo } from "react";
import { Link } from 'react-router-dom'
import PseudoBox, { PseudoBoxProps } from "@chakra-ui/core/dist/PseudoBox";
import Text from "@chakra-ui/core/dist/Text";
import { UserInfo } from "./UserInfo";
import { AppDivider } from "../../../sharedComponents/AppDivider";
import { getPostPageUrl } from "../../../routes";
import { Post } from "../../../model";

type PostItemProps = {
  post: Post;
} & Pick<PseudoBoxProps, 'mt' | 'marginTop'>

export const PostItem: FunctionComponent<PostItemProps> = memo(({ post, mt }) => {
  const postLink = useMemo(() => getPostPageUrl(post.id), [post]);
  return (
    <Link to={postLink}>
      <PseudoBox as="article" {...PostItemContainerProps} mt={mt}>
        <Text minHeight="app.itemContainer.minHeight">
          {post.title}
        </Text>
        <AppDivider />
        <UserInfo userId={post.userId} />
      </PseudoBox>
    </Link >
  )
});
PostItem.displayName = "PostItem";

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
