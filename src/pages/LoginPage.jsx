import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import logo from "../assets/logo.png";
import { typo, palette } from "../shared/styles";

import userAPI from "../apis/userAPI";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSetAtom } from "jotai";
import { routeAtom } from "../shared/atom";

const LoginPage = () => {
  const setRoute = useSetAtom(routeAtom);
  useEffect(() => setRoute("로그인 페이지"), [setRoute]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let data = userAPI.POST_LOGIN({ Email: email, Password: password });

    if (data.success == true) {
      localStorage.clear();
      localStorage.setItem("user", { name: data.nickname });
      console.log("성공");
    } else {
      console.log("실패");
    }
    navigate("/login");
  };

  return (
    <Wrapper direction={"column"}>
      <Space height={120}></Space>
      <div className="login">
        <img src={logo} width={"240px"} />
        <Space height={16}></Space>
        <div className="login-title">{"우리행복 | 우울이 행복이 되도록"}</div>
      </div>
      <Space height={40}></Space>

      <form onSubmit={handleLogin}>
        <div className="login-input">
          <Input
            id={"email"}
            placeholder={"이메일을 입력해주세요."}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          ></Input>
          <Input
            id={"password"}
            placeholder={"비밀번호를 입력해주세요."}
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          ></Input>
        </div>
        <Submit
          type="submit"
          onClick={(e) => {
            handleLogin(e);
          }}
        >
          로그인
        </Submit>
      </form>
    </Wrapper>
  );
};

export default LoginPage;

const Input = styled.input`
  width: 400px;
  ${typo.Body.b1};
  color: ${palette.Gray.gray100};
  background-color: ${palette.Gray.white};
  box-sizing: border-box;
  border-radius: 20px;
  border: 2px solid ${palette.Gray.gray10};
  padding: 16px;
`;

const Submit = styled.button`
  ${typo.Body.h3};
  width: 400px;
  background-color: ${palette.Primary.purple100};
  color: ${palette.Gray.white};
  box-sizing: border-box;
  border-radius: 20px;
  border: 2px solid ${palette.Gray.gray10};
  padding: 16px;
`;

const Wrapper = styled(Flex)`
  gap: 40px;
  .login-input {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;

    .login-title {
      ${typo.Body.b0};
      color: ${palette.Gray.gray100};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
