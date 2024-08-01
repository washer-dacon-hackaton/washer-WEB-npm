import CalendarGraph from '../Graph/CalendarGraph';  // 수정된 경로
import LineChart from '../Graph/LineChart';           // 수정된 경로
import RadarChart from '../Graph/RadarChart';         // 수정된 경로
import WordCloud from '../Graph/WordCloud';           // 수정된 경로
import './Dashboard.css';


function Dashboard() {

  return (

    <div className="dashboard-container">
      <h1 style={{fontSize:20,fontWeight:"bold",textAlign:"center"}}>감정그래프</h1>
      <h1 style={{fontSize:15,textAlign:"center"}}>어떤 감정들이 느껴졌는지 그래프로 확인해볼까요?</h1>
      <CalendarGraph />
      <div className="chart-spacing" />
      <LineChart />
      <div className="chart-spacing" />
      <RadarChart />
      <div className="chart-spacing" />
      <WordCloud />
    </div>

  );
}

export default Dashboard;
