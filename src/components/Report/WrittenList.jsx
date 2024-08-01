import './App.css'
import Box3 from "./components/Report/Box3";
import PostBox1 from './components/Report/PostBox1';

function App() {
  const posts = [
    { id: 1, title: '글 제목 1', content: '글 내용 1' },
    { id: 2, title: '글 제목 2', content: '글 내용 2' },
    { id: 3, title: '글 제목 3', content: '글 내용 3' },
  ];

  // 수정 버튼 클릭 핸들러
  const handleEdit = (id) => {
    console.log(`수정 클릭됨: ${id}`);
  };

  // 삭제 버튼 클릭 핸들러
  const handleDelete = (id) => {
    console.log(`삭제 클릭됨: ${id}`);
  };

  return (
    <div className="App">
    <h1> 우리행복</h1>
    <section>
      <Box3></Box3>
    </section>
    <h1>내가 쓴 글 목록</h1>
      <div style={styles.container}>
        {posts.map(post => (
          <PostBox1
            key={post.id}
            title={post.title}
            content={post.content}
            onEdit={() => handleEdit(post.id)}
            onDelete={() => handleDelete(post.id)}
          />
        ))}
      </div>

    <section>
    </section>
    </div>
  )
}
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  }
};

export default App;
