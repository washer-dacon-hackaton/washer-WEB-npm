import { Like } from "../../assets/icons/Like"; 

function PostBox({ title, content, onLike }) {
  return (
    <div style={styles.box}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => console.log('더보기 클릭됨')}>
          더보기 {" >"} 
        </button>
        <button style={styles.likeButton} onClick={onLike}>
          <Like />
        </button>
      </div>
    </div>
  );
}

const styles = {
  box: {
    width: "800px",
    height: "100px",
    padding: "20px",
    borderRadius: "20px 20px 20px 20px",
    border: "1px solid black", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  likeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  }
};

export default PostBox;
