import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";
import { Flex } from "../../shared/utils/Wrapper";
import { Button } from "../Button/Button";
import { Emotion } from "../Button/Emotion";
import { useEffect, useState } from "react";

const Input = styled.input`
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${palette.Gray.white};
  ${typo.Body.b2}
  border: 1px solid ${palette.Gray.gray50};
`;

const Wrapper = styled(Flex)`
  width: stretch;
`;

export const EmotionList = () => {
  let [option, setOption] = useState("");
  const data = [];
  let [list, setList] = useState([]);
  let [componentList, setComponentList] = useState(<div></div>);

  function handleDiary() {}

  useEffect(() => {
    setList(data.filter((el) => el.includes(option)));
    setComponentList(<div></div>);
    for (let item of list) {
      setComponentList(componentList.appendChild(<Emotion>{item}</Emotion>));
    }
  }, [data, option, componentList, list]);

  return (
    <form onSubmit={handleDiary}>
      <Input
        id={"input-value"}
        value={option}
        onChange={(e) => setOption(e.target.value)}
      ></Input>
      <Wrapper>{componentList}</Wrapper>
      <Button id={"submit"} onClick={() => handleDiary}></Button>
    </form>
  );
};
