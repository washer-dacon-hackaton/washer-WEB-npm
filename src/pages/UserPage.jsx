import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import { ProfileBox } from "../widgets/UserProfileBox";
import { DefaultBox } from "../components/DefaultBox";
import { UserMonthlyHappyReport } from "../widgets/UserMonthlyHappyReport";
import { useSetAtom } from "jotai";
import { routeAtom } from "../shared/atom";
import { useEffect } from "react";
import { EmotionList } from "../components/Diary/EmotionList";
import { ContentBox } from "../components/ContentBox";
import char from "../assets/character.jpeg";

const Wrapper = styled(Flex)`
  gap: 40px;
`;

const MainPage = () => {
  const setRoute = useSetAtom(routeAtom);
  useEffect(() => setRoute("유저 페이지"), [setRoute]);

  let user = localStorage.getItem("name");
  user = "이혁";
  let isSubmitted = localStorage.getItem("submit") != null;

  return (
    <Wrapper direction={"column"}>
      <Space height={80}></Space>
      <ProfileBox
        user={{ name: user, country: "대한민국", lang: "한국어" }}
      ></ProfileBox>

      {isSubmitted ? (
        <DefaultBox
          title={"오늘의 감정 일기장"}
          description={"오늘 하루 어떤 감정이었는지 기록해봐요."}
        >
          <EmotionList></EmotionList>
        </DefaultBox>
      ) : (
        <DefaultBox
          title={"오늘의 감정 일기장"}
          description={"왓셩이 전하고 싶은 말이 있대요!"}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <ContentBox title={"왓셩"} text={"와우"}></ContentBox>
            <img src={char} width={"120px"}></img>
          </div>
        </DefaultBox>
      )}

      <UserMonthlyHappyReport></UserMonthlyHappyReport>
    </Wrapper>
  );
};

export default MainPage;
