import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import { typo, palette } from "../shared/styles";
import { Button } from "../components/Button/Button";
import happyPostAPI from "../apis/happyPostAPI";
import { useState } from "react";
import { Write } from "../components/Write";
import { useNavigate } from "react-router-dom";

const Container = styled(Flex)`
  width: 1060px;
  gap: 40px;
`;

const Wrapper = styled(Flex)`
  gap: 12px;
  .write-title {
    ${typo.Head.h2};
    color: ${palette.Gray.gray100};
  }
  .write-label {
    display: flex;
    flex-direction: column;
    gap: 8px;

    color: ${palette.Gray.gray100};
    ${typo.Body.b1};

    textarea {
      background-color: ${palette.Gray.white};
      resize: none;
      ${typo.Body.b2};
      color: ${palette.Gray.gray100};
      padding: 12px;
      border: 1px solid ${palette.Gray.gray70};
      border-radius: 16px;
    }
  }
`;

const PostWritePage = () => {
  const user = localStorage.getItem("name");
  let navigate = useNavigate();

  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const handleWrite = (e) => {
    e.preventDefault();
    let data = happyPostAPI.WRITE_HAPPY_POST(user, title, content);
    localStorage.clear();
    localStorage.setItem("post_id", data.post_id);
    navigate(`/post/${data.post_id}`);
  };

  return (
    <Container direction={"column"} align={"flex-start"}>
      <Space height={80}></Space>
      <form onSubmit={handleWrite}>
        <Wrapper direction={"column"}>
          <div className="write-title">{"행복 글 작성하기"}</div>
          <div className="write-label">
            <div>{"제목"}</div>
            <Write
              id="write-title"
              width={"1000px"}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></Write>
          </div>
          <div className="write-label">
            <div>{"내용"}</div>
            <textarea
              id="write-content"
              rows={4}
              cols={137}
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </Wrapper>
        <Space height={20}></Space>
        <Button type="submit" onClick={handleWrite}>
          작성 완료하기
        </Button>
      </form>
    </Container>
  );
};

export default PostWritePage;
