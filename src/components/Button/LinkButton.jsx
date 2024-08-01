import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";
import { Arrow } from "../../assets/icons/Arrow";
import { useNavigate } from "react-router-dom";

const Btn = styled.button`
  ${typo.Body.b1};
  color: ${palette.Gray.gray70};
  background-color: transparent;
  padding: 0px;

  display: flex;
  gap: 10px;
  align-items: center;
`;

export const LinkButton = ({ text, link }) => {
  let navigate = useNavigate();
  return (
    <Btn
      onClick={() => {
        navigate(link);
      }}
    >
      <div className="lbtn-text">{text}</div>
      <Arrow></Arrow>
    </Btn>
  );
};
