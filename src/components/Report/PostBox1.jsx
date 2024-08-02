import { Button } from "../Button/Button"; // Button 컴포넌트 경로에 맞게 수정
import { palette } from "../../shared/styles";

function PostBox1({ title, content, onEdit, onDelete }) {
  return (
    <div style={styles.box}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div style={styles.buttonContainer}>
        <Button onClick={() => console.log("더보기 클릭됨")}>
          더보기 {" >"}
        </Button>
        <div style={styles.buttonGroup}>
          <Button onClick={onEdit}>수정</Button>
          <Button onClick={onDelete}>삭제</Button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  box: {
    width: "800px",
    height: "150px", // 높이 조정 가능
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
  buttonGroup: {
    display: "flex",
    gap: "5px", // 버튼 사이의 간격 조정
  },
};

export default PostBox1;
