import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";
import { Flex } from "../../shared/utils/Wrapper";
import { Button } from "../Button/Button";

const Wrapper = styled(Flex)`
  background-color: ${palette.Gray.white};
  width: 1020px;
  .happypost-header {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .happypost-title {
      color: ${palette.Gray.gray100};
      ${typo.Head.h2};
    }
    .happypost-description {
      color: ${palette.Gray.gray70};
      ${typo.Body.b2};
    }
  }
`;

export const PostHeader = () => {
  return (
    <Wrapper justify={"space-between"}>
      <div className="happypost-header">
        <div className="happypost-title">{"행복 글"}</div>
        <div className="happypost-description">
          {"사소한 행복이라도 공유하며 어제보다 행복한 오늘이 되어봐요!"}
        </div>
      </div>
      <Button>{"행복 글 작성하기"}</Button>
    </Wrapper>
  );
};
