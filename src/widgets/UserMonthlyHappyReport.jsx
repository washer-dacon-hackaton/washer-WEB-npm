import styled from "@emotion/styled";
import { Flex } from "../shared/utils/Wrapper";
import { DefaultBox } from "../components/DefaultBox";
import { HappyScore } from "../components/HappyScore";
// import happyReportAPI from "../apis/happyReportAPI";

const Wrapper = styled(Flex)`
  width: stretch;
`;

export const UserMonthlyHappyReport = () => {
  // const data = happyReportAPI.GET_ONE_REPORT();
  const data = {
    score: 45,
    month: "2024년 8월",
    isMore: true,
  };
  return (
    <DefaultBox
      title={"지난 행복 보고서"}
      description={"예전에 받은 행복 보고서를 확인할 수 있어요."}
    >
      <Wrapper justify={"space-between"}>
        <HappyScore
          user={{ score: data.score }}
          month={data.month}
          isMore={true}
        ></HappyScore>
        <HappyScore
          user={{ score: data.score }}
          month={data.month}
          isMore={true}
        ></HappyScore>
        <HappyScore
          user={{ score: data.score }}
          month={data.month}
          isMore={true}
        ></HappyScore>
        <HappyScore
          user={{ score: data.score }}
          month={data.month}
          isMore={true}
        ></HappyScore>
      </Wrapper>
    </DefaultBox>
  );
};
