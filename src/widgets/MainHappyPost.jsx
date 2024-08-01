import styled from "@emotion/styled";
import { palette } from "../shared/styles/index";
import { Flex } from "../shared/utils/Wrapper";
import { PostHeader } from "../components/Post/PostHeader";
import { HappyPosts } from "../components/Post/HappyPosts";
import { HappyPost } from "../components/Post/HappyPost";

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
      <HappyPosts title={"인기 행복글"}>{LIST1}</HappyPosts>
      <HappyPosts title={"최신 행복글"}>{LIST2}</HappyPosts>
      <HappyPosts title={"추천 행복글"}>{LIST3}</HappyPosts>
    </Wrapper>
  );
};

let LIST1 = (
  <div className="posts-list">
    <HappyPost id={1}></HappyPost>
    <HappyPost id={2}></HappyPost>
    <HappyPost id={3}></HappyPost>
    <HappyPost id={4}></HappyPost>
  </div>
);
let LIST2 = (
  <div className="posts-list">
    <HappyPost id={4}></HappyPost>
    <HappyPost id={1}></HappyPost>
    <HappyPost id={3}></HappyPost>
    <HappyPost id={2}></HappyPost>
  </div>
);
let LIST3 = (
  <div className="posts-list">
    <HappyPost id={3}></HappyPost>
    <HappyPost id={2}></HappyPost>
    <HappyPost id={4}></HappyPost>
    <HappyPost id={1}></HappyPost>
  </div>
);
