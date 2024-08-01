import './ScoreBox.css'; // 스타일을 import 합니다.

function ScoreBox({ score }) {
  return (
    <div className="score-box-container">
      <div className="score-box">
        <h2>행복점수</h2>
        <p className="score">{score !== undefined ? score : "점수를 입력하세요"}</p>
      </div>
    </div>
  );
}

export default ScoreBox;
