import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import WordCloud from "../components/Graph/WordCloud";

const Wrapper = styled(Flex)`
  gap: 40px;
`;

const ReportPage = () => {
  return (
    <Wrapper direction={"column"}>
      <Space height={80}></Space>
      <WordCloud></WordCloud>
    </Wrapper>
  );
};

export default ReportPage;
