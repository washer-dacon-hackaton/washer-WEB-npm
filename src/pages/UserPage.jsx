import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import { ProfileBox } from "../widgets/UserProfileBox";
import { DefaultBox } from "../components/DefaultBox";
import { HappyScore } from "../components/HappyScore";

const Wrapper = styled(Flex)`
  gap: 40px;
`;

const MainPage = () => {
  return (
    <Wrapper direction={"column"}>
      <Space height={80}></Space>
      <ProfileBox
        user={{ name: "이혁", country: "대한민국", lang: "한국어" }}
      ></ProfileBox>
      <DefaultBox
        title={"오늘의 감정 일기장"}
        description={"오늘 하루 어떤 감정이었는지 기록해봐요."}
        isButton={true}
      ></DefaultBox>
      <DefaultBox
        title={"지난 행복보고서"}
        description={"지난 기간 동안의 행복 보고서를 확인할 수 있어요."}
      >
        <HappyScore
          user={{ score: { "2024년 7월": 800 } }}
          month={"2024년 7월"}
          isMore={true}
        ></HappyScore>
      </DefaultBox>
    </Wrapper>
  );
};

export default MainPage;
