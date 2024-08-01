import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";

const Btn = styled.button`
  ${typo.Body.b2};
  background-color: ${palette.Sub.blue};
  color: ${palette.Gray.white};

  border-radius: 40px;
`;

export const Button = ({ text }) => {
  return <Btn>{text}</Btn>;
};
