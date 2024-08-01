import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";

export const Button = styled.button`
  ${typo.Body.b2};
  background-color: ${palette.Sub.blue};
  color: ${palette.Gray.white};

  border-radius: 40px;
`;
