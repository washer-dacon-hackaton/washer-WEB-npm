import { Like } from "../../assets/icons/Like";
import { Button } from "../Button/Button"; // Button 컴포넌트 경로에 맞게 수정
import { palette } from "../../shared/styles";

function PostBox2({ title, content, onLike }) {
  return (
    <div style={styles.box}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div style={styles.buttonContainer}>
        <Button onClick={() => console.log("더보기 클릭됨")}>
          더보기 {" >"}
        </Button>
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
    borderRadius: "20px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: palette.Gray.white,
    color: palette.Gray.gray100,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likeButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
};

export default PostBox2;
