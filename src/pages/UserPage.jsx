import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import { ProfileBox } from "../widgets/UserProfileBox";
import { DefaultBox } from "../components/DefaultBox";
import { UserMonthlyHappyReport } from "../widgets/UserMonthlyHappyReport";

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
      <UserMonthlyHappyReport></UserMonthlyHappyReport>
    </Wrapper>
  );
};

export default MainPage;
