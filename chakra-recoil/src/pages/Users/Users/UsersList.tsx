import React, { FunctionComponent } from 'react';
import { Page } from '../../../sharedPages/Page';

export const Users: FunctionComponent = () => {
  return (
    <Page>
      {/* <LoadableComponent loadingState={metaData.loadingState} loadingError={metaData.error}>
        <SimpleGrid as="section" columns={2} spacing={5}>
          {userIds.map(id => (<UserItem key={id} userId={id} />))}
        </SimpleGrid>
      </LoadableComponent> */}
      USERS
    </Page>
  );
}

// interface UserItemProps {
//   userId: number;
// }
// const UserItem: FunctionComponent<UserItemProps> = ({ userId }) => {
//   const user = useRecoilValue(userById(userId));
//   return (<Text>{user?.name}</Text>);
// }