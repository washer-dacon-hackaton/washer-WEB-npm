import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles/index";
import { Flex } from "../shared/utils/Wrapper";

const Wrapper = styled(Flex)`
  display: flex;
  gap: 8px;
  width: 880px;

  border: 1px solid ${palette.Gray.gray30};
  border-radius: 8px;

  padding: 24px 24px 20px 24px;

  align-items: flex-start;
  justify-content: space-between;

  ${typo.Body.b2};
  background-color: ${palette.Gray.white};
  color: ${palette.Gray.gray100};

  paddding: 12px 16px;

  .cbox-title {
    ${typo.Head.h3};
    color: ${palette.Gray.gray100};
  }
  .cbox-text {
    height: stretch;
    ${typo.Body.b2}
    color: ${palette.Gray.gray90};
  }
`;

export const ContentBox = (props) => {
  return (
    <Wrapper direction={"column"}>
      {props.title ? <div className="cbox-title">{props.title} </div> : ""}
      <div className="cbox-text">{props.text}</div>
    </Wrapper>
  );
};
