import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";

const Wrapper = styled(Flex)`
  gap: 40px;
`;

const PostListPage = () => {
  return (
    <Wrapper direction={"column"}>
      <Space height={80}></Space>
    </Wrapper>
  );
};

export default PostListPage;
