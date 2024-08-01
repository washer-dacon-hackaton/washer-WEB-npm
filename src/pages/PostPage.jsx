import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import { PostBox } from "../components/Post/PostBox";

// import happyPostAPI from "../apis/happyPostAPI";
import { DefaultBox } from "../components/DefaultBox";
import { ContentBox } from "../components/ContentBox";
//import { useParams } from "react-router-dom";
import { useSetAtom } from "jotai";
import { routeAtom } from "../shared/atom";
import { useEffect } from "react";

const Wrapper = styled(Flex)`
  gap: 40px;
`;

const PostPage = () => {
  const setRoute = useSetAtom(routeAtom);
  useEffect(() => setRoute("")), [setRoute];

  // const id = useParams().id;
  // const user = localStorage.getItem("name");

  // const { Title, Writer, CreatedAt, Content, AiFeedback } =
  //  happyPostAPI.GET_HAPPY_POST({ User: user }, id);
  let data = {
    title: "나 오늘 생일인데,,,",
    writer: "예슬",
    created_at: "2024년 8월 2일 3시 51분",
    content:
      "날 새서 해커톤 하고있어.. ㅎㅎ 이런 경험 어디서 하니. 난 영광이야",
    ai_feedback:
      "생일 축하해요! 생일을 해피하게 보내는 법은 여러 가지가 있어요. 지금 당장 해커톤을 하고 있더라도, 자신의 취향과 선호를 중요시하면서 보람찬 시간을 보낼 수 있어요. 열정적이고 열심히 일하는 모습이 멋지네요! 이런 경험을 통해 더 많은 것을 배우고 성장할 수 있을 거예요. 생일을 기념하는 방법은 다양해요. 하루는 아직 끝나지 않았으니, 해커톤을 하면서도 스스로와 함께 즐거운 시간을 보내면 좋을 거예요. 힘내세요!",
  };
  const isWriter = true;
  return (
    <Wrapper direction={"column"}>
      <Space height={80}></Space>
      <PostBox
        title={data.title}
        writer={data.writer}
        created_at={data.created_at}
        content={data.content}
      ></PostBox>
      {isWriter ? (
        <DefaultBox
          title={"행복 글에 대한 피드백이 도착했어요!"}
          description={"인공지능이 전해줄 말이 있대요."}
        >
          <ContentBox title={"왓셩"} text={data.ai_feedback}></ContentBox>
        </DefaultBox>
      ) : (
        <div></div>
      )}
    </Wrapper>
  );
};

export default PostPage;
