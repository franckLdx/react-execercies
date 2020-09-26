import React, { FunctionComponent, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import Text from "@chakra-ui/core/dist/Text";
import { usersFamily } from '../../Users/model';
import { useLoadPost } from './misc/hooks';
import { Loading } from '../../../sharedComponents/misc/Loading';
import { Page } from '../../../sharedComponents/misc/Page';
import { Link, useParams } from 'react-router-dom';

export const Post: FunctionComponent = () => {
  const { id } = useParams<any>();
  const postId = useMemo(() => {
    const num = Number(id);
    if (isNaN(num)) {
      throw new Error(`Not a valid post id`);
    }
    return num;
  }, [id]);

  const [post, loadingState, loadingError] = useLoadPost(postId)
  const user = useRecoilValue(usersFamily(post?.userId));

  switch (loadingState) {
    case 'none':
    case 'loading':
      return <Loading />;
    case 'loaded':
      return (
        <Page>
          <Text fontSize="6xl" {...DividerProps} marginBottom="8">{post?.title}</Text>
          <Text fontSize="4xl">{post?.body}</Text>
          <Text fontSize="4xl"{...DividerProps} paddingBottom="20">{post?.body}</Text>
          {user && (
            <Link to={`/users/${user.id}`}>
              <Text fontSize="4xl" textAlign="right">{user?.username}</Text>
            </Link>
          )}
        </Page>
      )
    case 'error':
      throw loadingError;
  }
}

const DividerProps = { borderBottomColor: "blue.700", borderBottomWidth: "2px" }
