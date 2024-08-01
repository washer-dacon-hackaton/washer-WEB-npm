import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles/index";

export const Write = styled.input`
  background-color: ${palette.Gray.white};
  ${typo.Body.b2};
  color: ${palette.Gray.gray100};
  padding: 12px;
  border: 1px solid ${palette.Gray.gray70};
  border-radius: 16px;
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
`;
