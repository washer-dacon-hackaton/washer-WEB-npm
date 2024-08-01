import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";

export const Emotion = styled.button`
  ${typo.Body.b2};
  background-color: ${palette.Gray.white};
  color: ${palette.Gray.gray100};
  border: 1px solid ${palette.Gray.gray70};
  border-radius: 40px;
  white-space: nowrap;
`;
