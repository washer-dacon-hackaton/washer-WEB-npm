import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";
import { Flex } from "../../shared/utils/Wrapper";
import { LinkButton } from "../Button/LinkButton";

const Wrapper = styled(Flex)`
  width: 1020px;
  padding: 20px;
  gap: 20px;
  border: 1px solid ${palette.Gray.gray10};
  border-radius: 20px;
  background-color: ${palette.Gray.white};

  .posts-title {
    ${typo.Head.h2};
    color: ${palette.Gray.gray100};
  }
  .posts-list {
    display: flex;
    width: stretch;
    justify-content: space-between;
  }
`;

export const HappyPosts = ({ title, children }) => {
  return (
    <Wrapper direction={"column"} align={"flex-start"}>
      <div className="posts-title">{title}</div>
      {children}
      <LinkButton text={"더보기"}></LinkButton>
    </Wrapper>
  );
};
