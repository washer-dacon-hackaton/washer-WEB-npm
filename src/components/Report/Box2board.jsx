import Box2 from "../Report/Box2";
import './Dashboard.css';

function Box2board() {
  const containerStyle = {
    width: '100%',  /* 전체 너비를 차지하도록 설정 */
    maxWidth: "1200px",  /* 원하는 최대 너비 설정 */
    margin: "0 auto",  /* 중앙 정렬 */
    padding: "20px",  /* 여백 설정 */
    boxSizing: "border-box",  /* 패딩을 포함하여 전체 크기를 계산하도록 설정 */
    display: "flex",
    flexDirection: "column",
    alignItems: "center",  /* 자식 요소를 가로축 중앙에 정렬 */
    justifyContent: "center",  /* 자식 요소를 세로축 중앙에 정렬 */
    gap: "10px",  /* 그래프 사이의 간격 설정 */
    backgroundColor: "transparent", /* 배경 투명 */
    border: "1px solid black", /* 검정색 테두리 */
    borderRadius: "10px", /* 둥근 테두리 설정 (선택사항) */
    height: '300px',  /* 페이지 전체 높이 차지 */
  };

  return (
    <div style={containerStyle}>
      <Box2 />
      <h1 style={{ fontSize: 13, textAlign: "center" }}>지난 한 달 간 수고했어요 {"♡◟(⑅'ㅅ'⑅)◞♡"}</h1>
    </div>
  );
}

export default Box2board;
