import styled from "@emotion/styled";
// import { useNavigate } from "react-router-dom";
import { typo, palette } from "../../shared/styles/index";

const Btn = styled.button`
  display: flex;
  gap: 8px;

  border: 1px solid ${palette.Gray.gray70};
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  ${typo.Body.b2};
  background-color: ${palette.Gray.white};
  color: ${palette.Gray.gray100};

  paddding: 12px 16px;
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
