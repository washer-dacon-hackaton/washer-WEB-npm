import styled from "@emotion/styled";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { DefaultBox } from "../components/DefaultBox";

const Wrapper = styled.div`
  overflow: hidden;
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
`;

export const UserMonthlyHappyReport = ({ list }) => {
  return (
    <DefaultBox
      title={"지난 행복 보고서"}
      description={"예전에 받은 행복 보고서를 확인할 수 있어요."}
    >
      <Wrapper>
        <ScrollMenu></ScrollMenu>
      </Wrapper>
    </DefaultBox>
  );
};
