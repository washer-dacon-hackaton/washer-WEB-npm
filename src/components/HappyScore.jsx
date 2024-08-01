import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles/index";
import { Flex } from "../shared/utils/Wrapper";
import { LinkButton } from "./Button/LinkButton";

const Wrapper = styled(Flex)`
  background-color: ${palette.Gray.white};
  border: 1px solid ${palette.Gray.gray10};
  gap: 0px;
  width: 240px;
  height: 240px;
  box-sizing: border-box;
  border-radius: 20px;
  .score-month {
    ${typo.Head.h1};
    color: ${palette.Gray.gray90};
  }
  .score-num {
    ${typo.Head.h0};
    color: ${palette.Gray.gray100};
  }
`;

export const HappyScore = ({ user, month, isMore }) => {
  // user의 행복 보고서 값을 호출함.
  // 호출 후 아래 변수에 값을 저장해서 출력함.

  let monthString = month;

  return (
    <Wrapper direction={"column"}>
      <div className="score-month">{monthString}</div>
      <div className="score-num">{user.score}</div>
      {isMore ? (
        <LinkButton text={"자세히 보기"} link={`/user/report/1`}></LinkButton>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};
