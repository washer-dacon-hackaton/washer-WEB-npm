import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import { MainHeader } from "../components/MainHeader";
import { MainHappyPost } from "../widgets/MainHappyPost";
import { useSetAtom } from "jotai";
import { routeAtom } from "../shared/atom";
import { useEffect } from "react";

const Wrapper = styled(Flex)`
  gap: 40px;
`;

const MainPage = () => {
  const setRoute = useSetAtom(routeAtom);
  useEffect(() => setRoute("메인 페이지"), [setRoute]);

  return (
    <Wrapper direction={"column"}>
      <Space height={80}></Space>
      <MainHeader></MainHeader>
      <MainHappyPost></MainHappyPost>
    </Wrapper>
  );
};

export default MainPage;
