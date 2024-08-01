import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import Dashboard from "../components/Report/Dashboard";
import Box2board from "../components/Report/Box2board"
const Wrapper = styled(Flex)`
  gap: 40px;
`;

const ReportPage = () => {
  return (
    <Wrapper direction={"column"}>
      <Space height={80}></Space>
      
      <Box2board></Box2board>
      <Dashboard></Dashboard>



    </Wrapper>
  );
};

export default ReportPage;
