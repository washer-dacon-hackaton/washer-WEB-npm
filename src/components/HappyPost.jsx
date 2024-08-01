import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles/index";
import { Flex } from "../shared/utils/Wrapper";
import { SmallLinkButton } from "./Button/SmallLinkButton";
import { SmallLike } from "../assets/icons/SmallLike";

const Wrapper = styled(Flex)`
  width: 240px;
  height: 240px;

  border-radius: 20px;

  background-color: ${palette.Gray.white};
  box-sizing: border-box;
  padding: 20px 12px;

  .post-header {
    width: 196px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    gap: 8px;

    .post-title {
      color: ${palette.Gray.gray100};
      ${typo.Body.b1}
    }
    .post-content {
      color: ${palette.Gray.gray100};
      ${typo.Body.b3}
    }
  }

  .post-footer {
    width: 196px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const data = {
  1: {
    title: "오늘 너무 행복한 일이 있었어",
    content:
      "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
  },
};

export const HappyPost = ({ id }) => {
  return (
    <Wrapper direction={"column"} justify={"space-between"}>
      <div className="post-header">
        <div className="post-title">{data[id].title}</div>
        <div className="post-content">{data[id].content}</div>
      </div>
      <div className="post-footer">
        <SmallLike></SmallLike>
        <SmallLinkButton text={"더보기"}></SmallLinkButton>
      </div>
    </Wrapper>
  );
};
