import styled from "@emotion/styled";
import { palette } from "../shared/styles/index";
import { Flex } from "../shared/utils/Wrapper";
import { PostHeader } from "../components/PostHeader";
import { HappyPosts } from "../components/HappyPosts";
import { HappyPost } from "../components/HappyPost";

const Wrapper = styled(Flex)`
  width: 1060px;
  box-shadow: 0px 0px 4.2px 0px rgba(185, 185, 185, 0.57);

  background-color: ${palette.Gray.white};
  padding: 20px;
  gap: 40px;
  border-radius: 20px;
`;

export const MainHappyPost = () => {
  return (
    <Wrapper direction={"column"}>
      <PostHeader></PostHeader>
      <HappyPosts title={"인기 행복글"} list={LIST}></HappyPosts>
      <HappyPosts title={"최신 행복글"} list={LIST}></HappyPosts>
      <HappyPosts title={"추천 행복글"} list={LIST}></HappyPosts>
    </Wrapper>
  );
};

let LIST = (
  <div className="posts-list">
    <HappyPost id={1}></HappyPost>
    <HappyPost id={1}></HappyPost>
    <HappyPost id={1}></HappyPost>
  </div>
);
