import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";
import { SmallArrow } from "../../assets/icons/SmallArrow";

const Btn = styled.button`
  ${typo.Body.b3};
  color: ${palette.Gray.gray70};
  background-color: transparent;
  padding: 0px;

  display: flex;
  gap: 4px;
  align-items: center;
`;

export const SmallLinkButton = ({ text }) => {
  return (
    <Btn>
      <div className="lbtn-text">{text}</div>
      <SmallArrow></SmallArrow>
    </Btn>
  );
};
