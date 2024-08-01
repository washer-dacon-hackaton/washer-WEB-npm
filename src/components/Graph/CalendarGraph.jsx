import { useState } from "react";
import "./CalendarGraph.css"; // CSS 파일을 import합니다.
import { Space } from "../../shared/utils/Wrapper";

function CalendarGraph() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <div className="calendar-container">
      <h1 style={{ fontSize: 25 }}>__월의 감정기록</h1>
      <Space height={20} />
      <div className="calendar-box">
        {Array.from({ length: 31 }, (_, index) => (
          <div
            key={index}
            className="day-box"
            onClick={() => handleClick(index + 1)}
          >
            {clickedIndex === index + 1 ? (
              <>
                <div className="circle-container">
                  <div className={`circle circle${(index % 5) + 1}`} />
                  <div className={`circle circle${(index % 5) + 2}`} />
                </div>
                <div className="tooltip">abdcsefwdfsvafa {index + 1}</div>
              </>
            ) : (
              <span className="day-number">{index + 1}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarGraph;
