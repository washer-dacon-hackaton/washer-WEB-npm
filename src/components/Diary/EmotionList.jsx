import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";
import { Flex } from "../../shared/utils/Wrapper";
import { Button } from "../Button/Button";
import { Emotion } from "../Button/Emotion";
import { useEffect, useState } from "react";
import langList from "../../lang.json";

const Input = styled.input`
  box-sizing: border-box;
  width: 400px;
  padding: 8px;
  border-radius: 16px;
  background-color: ${palette.Gray.white};
  ${typo.Body.b2}
  color: ${palette.Gray.gray100};
  border: 1px solid ${palette.Gray.gray50};
`;

const Wrapper = styled(Flex)`
  width: 1020px;
  flex-wrap: wrap;
  gap: 4px;
`;

const Container = styled(Flex)`
  gap: 16px;

  .question {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .q-title {
      color: ${palette.Gray.gray100};
      ${typo.Body.b1};
    }
  }
`;

export const EmotionList = () => {
  let [option, setOption] = useState(" ");
  let lang = localStorage.getItem("lang");
  let count = 0;
  lang = "한국어";
  const data = langList[lang];
  let [list, setList] = useState([]);
  let [submit, setSubmit] = useState([]);
  let [comp, setComp] = useState();

  let [q1, setQ1] = useState("");
  let [q2, setQ2] = useState("");
  let [q3, setQ3] = useState("");
  let [q4, setQ4] = useState("");

  function handleDiary() {
    // 반한값 전달하는 API 작성해야 함.
  }

  useEffect(() => {
    setList(data.filter((el) => el.includes(option)));
  }, [data, option]);

  return (
    <form
      onSubmit={handleDiary}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <div style={{ color: palette.Gray.gray100 }}>{submit}</div>
      <Input
        id={"input-value"}
        value={option}
        onChange={(e) => {
          setOption(e.target.value);
          setComp(
            list.map((items) => {
              return (
                <Emotion
                  key={`item-${count++}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setSubmit(submit.push(items));
                  }}
                >
                  {items}
                </Emotion>
              );
            })
          );
        }}
      ></Input>
      <Wrapper>{comp}</Wrapper>
      <Container direction={"column"} align={"flex-start"}>
        <div className="question">
          <div className="q-title">{"1. 오늘의 날씨는 어땠나요?"}</div>
          <Input
            id="q1"
            className="q-answer"
            value={q1}
            onChange={(e) => {
              setQ1(e.target.value);
            }}
          ></Input>
        </div>
        <div className="question">
          <div className="q-title">
            {"2. 오늘 자신에게 칭찬해주고 싶은 일이 있었나요?"}
          </div>
          <Input
            id="q2"
            className="q-answer"
            value={q2}
            onChange={(e) => {
              setQ2(e.target.value);
            }}
          ></Input>
        </div>
        <div className="question">
          <div className="q-title">
            {"3. 오늘 당신만이 누린 소소하지만 특별한 순간은 무엇이었나요?"}
          </div>
          <Input
            id="q3"
            className="q-answer"
            value={q3}
            onChange={(e) => setQ3(e.target.value)}
          ></Input>
        </div>
        <div className="question">
          <div className="q-title">
            {"4. 오늘 산책이나 외출 중에 본 가장 아름다운 것은 무엇이었나요?"}
          </div>
          <Input
            id="q4"
            className="q-answer"
            value={q4}
            onChange={(e) => setQ4(e.target.value)}
          ></Input>
        </div>
      </Container>
      <Button id={"submit"} onClick={handleDiary}>
        작성 완료하기
      </Button>
    </form>
  );
};
