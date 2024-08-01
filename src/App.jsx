import "./App.css";
import { GNB } from "./widgets/GNB";
import {} from "react-router-dom";
import { ProfileBox } from "./widgets/ProfileBox";
import { DefaultBox } from "./components/DefaultBox";
import { MainHeader } from "./components/MainHeader";
import { MainHappyPost } from "./widgets/MainHappyPost";

function App() {
  return (
    <>
      <GNB user={{ name: "이혁" }} breadcrumbs={"메인 페이지"}></GNB>
      <ProfileBox
        user={{ name: "이혁", country: "대한민국", lang: "한국어" }}
      ></ProfileBox>
      <DefaultBox
        title={"오늘의 감정 일기장"}
        description={"오늘 하루 어떤 감정이었는지 아래 단어들을 선택해봐요."}
        isButton={true}
      ></DefaultBox>

      <MainHeader></MainHeader>

      <MainHappyPost></MainHappyPost>
    </>
  );
}

export default App;
