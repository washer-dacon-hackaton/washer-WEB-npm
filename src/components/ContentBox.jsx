import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles/index";
import { Flex } from "../shared/utils/Wrapper";

const Wrapper = styled(Flex)`
  display: flex;
  gap: 8px;
  width: stretch;

  border: 1px solid ${palette.Gray.gray30};
  border-radius: 8px;

  padding: 24px 24px 20px 24px;

  align-items: center;
  justify-content: flex-start;

  ${typo.Body.b2};
  background-color: ${palette.Gray.white};
  color: ${palette.Gray.gray100};

  paddding: 12px 16px;
`;

export const ContentBox = (props) => {
  return (
    <Wrapper>
      {props.title ? <div className="cbox-title"> </div> : ""}
      <div className="cbox-text">{props.text}</div>
    </Wrapper>
  );
};
