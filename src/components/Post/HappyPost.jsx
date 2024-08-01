import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";
import { Flex } from "../../shared/utils/Wrapper";
import { SmallLinkButton } from "../Button/SmallLinkButton";
import { SmallLike } from "../../assets/icons/SmallLike";
import happyPostAPI from "../../apis/happyPostAPI";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Flex)`
  width: 240px;
  height: 240px;

  border-radius: 20px;
  border: 1px solid ${palette.Gray.gray10};

  background-color: ${palette.Gray.white};
  box-sizing: border-box;
  padding: 20px 12px;

  .post-header {
    width: 196px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    gap: 8px;

    .post-title {
      color: ${palette.Gray.gray100};
      ${typo.Body.b1}
    }
    .post-content {
      color: ${palette.Gray.gray100};
      ${typo.Body.b3}
    }
  }

  .post-footer {
    width: 196px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HappyPost = ({ id }) => {
  // 필요한 API: 페이지를 호출할 때마다 어떤 id로 포스트를 불러와야 하는가?
  let navigate = useNavigate();

  const user = localStorage.getItem("name");
  const data = happyPostAPI.GET_HAPPY_POST(user, id);

  return (
    <Wrapper direction={"column"} justify={"space-between"}>
      <div className="post-header">
        <div className="post-title">{data.title}</div>
        <div className="post-content">{data.content}</div>
      </div>
      <div className="post-footer">
        <SmallLike></SmallLike>
        <SmallLinkButton
          text={"더보기"}
          action={() => {
            navigate(`/post/${id}`);
          }}
        ></SmallLinkButton>
      </div>
    </Wrapper>
  );
};
