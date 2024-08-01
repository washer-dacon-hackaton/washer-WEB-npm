import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { typo, palette } from "../shared/styles/index";
import { Button } from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${palette.Gray.white};

  border: 1px solid ${palette.Gray.gray30};
  box-sizing: border-box;
  padding: 20px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10; // 스크롤하더라도 GNB가 가장 위에 있도록 설정함.

  .gnb-title {
    display: flex;
    align-items: center;
    gap: 40px;

    div {
      color: ${palette.Gray.gray50};
      ${typo.Body.b1};
    }
  }
  .gnb-user {
    color: ${palette.Gray.gray90};
    ${typo.Head.h3}
  }
`;

export const GNB = ({ breadcrumbs }) => {
  const user = localStorage.getItem("name");
  let navigate = useNavigate();

  return (
    <Wrapper>
      <div className="gnb-title">
        <img src={logo} alt={"우리행복"} width={"90px"} height={"26px"}></img>
        <div>{breadcrumbs}</div>{" "}
        {/** 상태 관리를 통해서 breadcrumbs 관리해야 할듯 ? */}
      </div>
      {user ? (
        <div className="gnb-user">{user} 님</div>
      ) : (
        <Button onClick={() => navigate("/login")}>로그인</Button>
      )}
    </Wrapper>
  );
};
