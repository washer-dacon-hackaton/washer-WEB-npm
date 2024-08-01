import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles/index";
import { Flex } from "../shared/utils/Wrapper";
import { Button } from "./Button/Button";
import { MAIN_HEADER } from "../shared/utils/constants";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Flex)`
  background-color: ${palette.Gray.white};
  box-shadow: 0px 0px 4.2px 0px rgba(185, 185, 185, 0.57);

  width: 1060px;
  padding: 20px;
  border-radius: 20px;
  div {
    color: ${palette.Gray.gray100};
    ${typo.Head.h2};
  }
`;

export const MainHeader = () => {
  let navigate = useNavigate();
  return (
    <Wrapper justify={"space-between"}>
      <div className="header-text">{MAIN_HEADER}</div>
      <Button onClick={() => navigate("/user/")}>
        {"감정 일기장 작성하기"}
      </Button>
    </Wrapper>
  );
};
