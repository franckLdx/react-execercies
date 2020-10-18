import React, { ChangeEvent, FunctionComponent, memo, useCallback } from "react";
import { AppBorder } from "../../../sharedComponents/AppBorder";
import { useRecoilState } from "recoil";
import Box, { BoxProps } from "@chakra-ui/core/dist/Box";
import Input from "@chakra-ui/core/dist/Input";
import { filterPostsAtom } from "../../../state/posts";

export const PostsHeader: FunctionComponent = memo(() => (
  <AppBorder >
    <Box display="flex" flexDirection={["column", "column", "row"]} >
      <Filter />
    </Box >
  </AppBorder >
));
PostsHeader.displayName = "PostsHeader";

type ReloadProps = Pick<BoxProps, 'marginRight'>;

// export const Reload: FunctionComponent<ReloadProps> = ({ marginRight }) => {
//   const setPosts = useSetRecoilState(postsAtom);
//   const [metaData, setMetaData] = useRecoilState(postsMetaDataAtom);

//   const reload = useCallback(
//     () => loadPosts(true, { setPosts, metaData, setMetaData }),
//     [metaData, setMetaData, setPosts]
//   );

//   return (
//     <Box display="flex"
//       flexDirection={["column", "row"]}
//       marginBottom={["2", "0"]}
//       marginRight={marginRight}
//       color="app.main"
//       fontWeight="app.medium"
//     >
//       <Text
//         minWidth="15em"
//         paddingLeft="3"
//         paddingY="2"
//         marginBottom={[1, 1, 0]}
//       >
//         Last load: {metaData.loadedDate && format(metaData.loadedDate, "yyyy-MM-dd HH:mm:ss")}
//       </Text>
//       <Button flexGrow={1} onClick={reload} isDisabled={metaData.loadingState === 'loading'}>
//         Reload <Icon marginLeft={[1, 1, 3]} name="repeat" />
//       </Button>
//     </Box>
//   );
// };
// Reload.displayName = "Reload";

export const Filter: FunctionComponent = () => {
  const [filter, setFilter] = useRecoilState(filterPostsAtom);
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value),
    [setFilter]
  );
  return (
    <Input placeholder="Search for a title" onChange={onChange} defaultValue={filter} />
  );
};
Filter.displayName = "PostsFilter";
