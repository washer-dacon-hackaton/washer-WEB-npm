import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles/index";
import { Flex } from "../shared/utils/Wrapper";
import { Button } from "./Button/Button";

const Wrapper = styled(Flex)`
  width: 1060px;
  padding: 20px;
  border-radius: 20px;
  gap: 20px;

  background-color: ${palette.Gray.white};
  box-shadow: 0px 0px 4.2px 0px rgba(185, 185, 185, 0.57);

  .box-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .box-title {
      ${typo.Head.h2};
      color: ${palette.Gray.gray100};
    }
    .box-description {
      ${typo.Body.b1};
      color: ${palette.Gray.gray70};
    }
  }
`;

export const DefaultBox = ({
  title,
  description,
  body = null,
  isButton = false,
}) => {
  return (
    <Wrapper direction={"column"} align={"start"}>
      <div className="box-header">
        <div className="box-title">{title}</div>
        <div className="box-description">{description}</div>
      </div>

      <div className="box-body">{body}</div>
      {isButton ? (
        <Button
          text={"작성 완료하기"}
          onClick={() => {
            console.log("ㅋ");
          }}
        ></Button>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};
