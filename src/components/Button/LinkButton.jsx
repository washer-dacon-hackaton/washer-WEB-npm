import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";
import { Arrow } from "../../assets/icons/Arrow";

const Btn = styled.button`
  ${typo.Body.b0};
  color: ${palette.Gray.gray70};
  background-color: transparent;
  padding: 0px;

  display: flex;
  gap: 10px;
  aligh-items: center;
`;

export const LinkButton = ({ text }) => {
  return (
    <Btn>
      <div className="lbtn-text">{text}</div>
      <Arrow></Arrow>
    </Btn>
  );
};
