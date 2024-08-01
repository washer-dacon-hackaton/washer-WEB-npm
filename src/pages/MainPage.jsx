import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import { MainHeader } from "../components/MainHeader";
import { MainHappyPost } from "../widgets/MainHappyPost";

const Wrapper = styled(Flex)`
  gap: 40px;
`;

const MainPage = () => {
  return (
    <Wrapper direction={"column"}>
      <Space height={80}></Space>
      <MainHeader></MainHeader>
      <MainHappyPost></MainHappyPost>
    </Wrapper>
  );
};

export default MainPage;
