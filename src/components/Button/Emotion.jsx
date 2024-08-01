import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";

const Btn = styled.button`
  ${typo.Body.b2};
  background-color: ${palette.Gray.white};
  color: ${palette.Gray.gray100};

  border-radius: 40px;
`;

export const Emotion = ({ text }) => {
  return <Btn>{text}</Btn>;
};
