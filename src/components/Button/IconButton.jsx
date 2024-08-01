import styled from "@emotion/styled";
// import { useNavigate } from "react-router-dom";
import { typo, palette } from "../../shared/styles/index";

const Btn = styled.button`
  ${typo.Body.b1};
  background-color: ${palette.Gray.white};
  color: ${palette.Gray.gray100};
`;

export const IconButton = ({ icon, text, link }) => {
  return (
    <Btn
      onClick={() => {
        link;
      }}
    >
      {icon}
      <div className="ibtn-text">{text}</div>
    </Btn>
  );
};
