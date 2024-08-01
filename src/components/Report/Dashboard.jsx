import CalendarGraph from '../Graph/CalendarGraph';  // 수정된 경로
import LineChart from '../Graph/LineChart';           // 수정된 경로
import RadarChart from '../Graph/RadarChart';         // 수정된 경로
import WordCloud from '../Graph/WordCloud';           // 수정된 경로
import './Dashboard.css';


function Dashboard() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 2100, 
    width:500,// 뷰포트 높이의 100%로 부모 요소를 꽉 채움
    backgroundColor: '#F5F5F5', // 전체 배경색
  };
  return (
    <div style={containerStyle}>
      <h1 style={{fontSize:25,marginBottom: "20px",fontWeight:"bold"}}>감정그래프</h1>
      <h1>어떤 감정들이 느껴졌는지 그래프로 확인해볼까요?</h1>
    <div className="dashboard-container">
      <CalendarGraph />
      <div className="chart-spacing" />
      <LineChart />
      <div className="chart-spacing" />
      <RadarChart />
      <div className="chart-spacing" />
      <WordCloud />
    </div>

    </div>

  );
}

export default Dashboard;
