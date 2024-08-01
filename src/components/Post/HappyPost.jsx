import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";
import { Flex } from "../../shared/utils/Wrapper";
import { SmallLinkButton } from "../Button/SmallLinkButton";
import { SmallLike } from "../../assets/icons/SmallLike";
// import happyPostAPI from "../../apis/happyPostAPI";
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

  // const user = localStorage.getItem("name");
  // const data = happyPostAPI.GET_HAPPY_POST(user, id);

  return (
    <Wrapper direction={"column"} justify={"space-between"}>
      <div className="post-header">
        <div className="post-title">{DATA[id].title}</div>
        <div className="post-content">{DATA[id].content}</div>
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

const DATA = {
  1: {
    title: "나 오늘 생일인데,,,",
    writer: "예슬",
    created_at: "2024년 8월 2일 3시 51분",
    content:
      "날 새서 해커톤 하고있어.. ㅎㅎ 이런 경험 어디서 하니. 난 영광이야",
    ai_feedback:
      "생일 축하해요! 생일을 해피하게 보내는 법은 여러 가지가 있어요. 지금 당장 해커톤을 하고 있더라도, 자신의 취향과 선호를 중요시하면서 보람찬 시간을 보낼 수 있어요. 열정적이고 열심히 일하는 모습이 멋지네요! 이런 경험을 통해 더 많은 것을 배우고 성장할 수 있을 거예요. 생일을 기념하는 방법은 다양해요. 하루는 아직 끝나지 않았으니, 해커톤을 하면서도 스스로와 함께 즐거운 시간을 보내면 좋을 거예요. 힘내세요!",
  },
  2: {
    title: "다리가 다쳤는데 버스 타고 가다가",
    writer: "이혁",
    created_at: "2023년 12월 1일 1시 00분",
    content:
      "지나가던 청년이 자리 배려해줘서 고마웠어요. 덕분에 아프지 않게 집에 갈 수 있었어요.",
    ai_feedback: "",
  },
  3: {
    title: "비 맞으면서 집에 왔는데",
    writer: "채원",
    created_at: "2023년 12월 1일 1시 00분",
    content: "비가 딱 그쳤어. 나를 위한 영화같은 타이밍이었구나..ㅎㅎ",
    ai_feedback:
      "비 맞으면서 집에 오다니, 정말 신기한 우연이네요! 그 순간을 영화 속 주인공처럼 느낄 수 있었을 것 같아요. 비가 그쳐 기분이 상쾌해진 것 같네요. 자연의 아름다움을 느낄 수 있는 순간이었죠. 계속적으로 주변에 자연의 아름다움을 발견하며 행복을 느끼시길 바랍니다. :)",
  },
  4: {
    title: "빨래를 말렸다.",
    writer: "주현",
    created_at: "2023년 12월 1일 1시 00분",
    content:
      "빨래를 말렸다. 수업시간에 필기를 놓치지 않았다. 지하철 타자마자 내 앞사람 내려서 바로 앉았다. 강아지풀을 오랜만에 보았다. 어릴 때 보고 정말 오랜만.   ",
    ai_feedback:
      "날씨를 즐기는 방법을 찾아주셔서 대단히 칭찬해요. 무슨 일을 하든 즐겁게 보내셨나요? 빨래를 말리는 것도 일상 속에서 소중한 행복을 찾는 방법 중 하나일 수 있죠. 또한, 필기를 놓치지 않은 것도 정말 대단해요! 수업 시간이 소중하고 중요하니까요. 그리고 지하철에서 자리를 마음껏 즐긴 순간도 기쁜 일이네요. 작은 행복들이 모여 하나의 큰 행복을 이루는 것이기에 오늘도 행복했던 순간들을 적극 기억해주세요. 오랫동안 보지 못했던 강아지풀을 보고 마음이 따뜻했을 텐데, 자연의 아름다움이 가득한 순간이었겠죠? 매일의 작은 행복들을 인지하고 즐기며 하루를 보내세요. 계속해서 긍정적인 마음가짐으로 멋진 일들이 가득한 하루를 보내길 바라요. 함께 아름다운 순간을 만드는 것이 얼마나 값진 경험인지 기억하세요! :)",
  },
};
