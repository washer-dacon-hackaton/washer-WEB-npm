import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import { PostBox } from "../components/Post/PostBox";

import happyPostAPI from "../apis/happyPostAPI";
import { DefaultBox } from "../components/DefaultBox";
import { ContentBox } from "../components/ContentBox";
import { useParams } from "react-router-dom";
import { useSetAtom } from "jotai";
import { routeAtom } from "../shared/atom";
import { useEffect } from "react";

const Wrapper = styled(Flex)`
  gap: 40px;
`;

const PostPage = () => {
  const setRoute = useSetAtom(routeAtom);
  useEffect(() => setRoute("")), [setRoute];

  const id = useParams().id;
  const user = localStorage.getItem("name");

  const { Title, Writer, CreatedAt, Content, AiFeedback } =
    happyPostAPI.GET_HAPPY_POST({ User: user }, id);

  const isWriter = user == Writer;
  return (
    <Wrapper direction={"column"}>
      <Space height={80}></Space>
      <PostBox
        title={Title}
        writer={Writer}
        created_at={CreatedAt}
        content={Content}
      ></PostBox>
      {isWriter ? (
        <DefaultBox
          title={"행복 글에 대한 피드백이 도착했어요!"}
          description={"인공지능이 전해줄 말이 있대요."}
        >
          <ContentBox title={"왓셩"} text={AiFeedback}></ContentBox>
        </DefaultBox>
      ) : (
        <div></div>
      )}
    </Wrapper>
  );
};

export default PostPage;
