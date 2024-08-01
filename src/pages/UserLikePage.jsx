import styled from "@emotion/styled";
import { Flex, Space } from "../shared/utils/Wrapper";
import PostBox2 from "../components/Report/PostBox2";

const Wrapper = styled(Flex)`
  gap: 40px;
`;

const UserLikePage = () => {

  const posts = [
    { id: 1, title: '글 제목 1', content: '글 내용 1' },
    { id: 2, title: '글 제목 2', content: '글 내용 2' },
    { id: 3, title: '글 제목 3', content: '글 내용 3' },
  ];
  const handleEdit = (id) => {
    console.log(`좋아요 클릭됨': ${id}`);
  };

  return (
    <Wrapper direction={"column"}>
      <Space height={80}></Space>

      <div style={styles.container}>
        {posts.map(post => (
          <PostBox2
            key={post.id}
            title={post.title}
            content={post.content}
            onLike={() => handleEdit(post.id)}

          />
        ))}
        </div>
    </Wrapper>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  }
};


export default UserLikePage;
