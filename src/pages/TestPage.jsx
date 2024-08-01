import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import { ContentBox } from "../components/ContentBox";
import { PostBox } from "../components/Post/PostBox";
import { DefaultBox } from "../components/DefaultBox";

const Wrapper = styled(Flex)`
  gap: 40px;
`;

const MainPage = () => {
  return (
    <Wrapper direction={"column"}>
      <Space height={80}></Space>
      <h1>ds</h1>
      <ContentBox text={"하이요"}></ContentBox>
      <PostBox
        title={"하이"}
        writer={"이혁"}
        created_at={"오늘"}
        content={"하이요"}
      ></PostBox>
      <DefaultBox title={"하이"} description={""}>
        <ContentBox text={"휴우"}></ContentBox>
      </DefaultBox>
    </Wrapper>
  );
};

export default MainPage;
