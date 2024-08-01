function PostBox1({ title, content, onEdit, onDelete }) {
  return (
    <div style={styles.box}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => alert('더보기 클릭됨')}>더보기 {" >"} </button>
        <div style={styles.buttonGroup}>
          <button style={styles.button} onClick={onEdit}>수정</button>
          <button style={styles.button} onClick={onDelete}>삭제</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  box: {
    width: "840px",
    height: "138px",
    padding: "20px",
    borderRadius: "20px 0px 0px 0px",
    border: "1px solid black",  // 적절한 border 스타일을 넣어야 합니다.
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
  }
};

export default PostBox1;
