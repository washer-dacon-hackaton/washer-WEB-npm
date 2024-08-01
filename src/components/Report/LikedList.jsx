import './App.css'
import PostBox2 from './components/Report/PostBox2';

function App() {
  const posts = [
    { id: 1, title: '글 제목 1', content: '글 내용 1' },
    { id: 2, title: '글 제목 2', content: '글 내용 2' },
    { id: 3, title: '글 제목 3', content: '글 내용 3' },
  ];

  // 좋아요 버튼 클릭 핸들러
  const handleEdit = (id) => {
    console.log(`좋아요 클릭됨': ${id}`);
  };

  return (
    <div className="App">
    <h1>내가 좋아하는 글 목록</h1>
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
