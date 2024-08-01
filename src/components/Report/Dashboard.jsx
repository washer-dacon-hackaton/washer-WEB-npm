import CalendarGraph from '../Graph/CalendarGraph';  // 수정된 경로
import LineChart from '../Graph/LineChart';           // 수정된 경로
import RadarChart from '../Graph/RadarChart';         // 수정된 경로
import WordCloud from '../Graph/WordCloud';           // 수정된 경로
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
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
