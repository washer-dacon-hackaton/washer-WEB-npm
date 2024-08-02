import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import PostBox1 from "../components/Report/PostBox1";

const Wrapper = styled(Flex)`
  gap: 40px;
`;

const UserWritePage = () => {
  const posts = [
    {
      id: 1,
      title: "비 맞으면서 집에 왔는데",
      content: "비가 딱 그쳤어. 나를 위한 영화같은 타이밍이었구나..ㅎㅎ",
    },
    {
      id: 2,
      title: "빨래를 말렸다.",
      content:
        "수업시간에 필기를 놓치지 않았다. 지하철 타자마자 내 앞사람 내려서 바로 앉았다. 강아지풀을 오랜만에 보았다. 어릴 때 보고 정말 오랜만. ",
    },
    {
      id: 3,
      title: "나 오늘 생일인데,,",
      content:
        "날 새서 해커톤 하고있어.. ㅎㅎ 이런 경험 어디서 하니. 난 영광이야",
    },
  ];
  const handleEdit = (id) => {
    console.log(`수정 클릭됨: ${id}`);
  };
  const handleDelete = () => {};
  return (
    <Wrapper direction={"column"}>
      <Space height={80}></Space>
      <div style={styles.container}>
        {posts.map((post) => (
          <PostBox1
            key={post.id}
            title={post.title}
            content={post.content}
            onEdit={() => handleEdit(post.id)}
            onDelete={() => handleDelete(post.id)}
          />
        ))}
      </div>
    </Wrapper>
  );
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },
};

export default UserWritePage;
