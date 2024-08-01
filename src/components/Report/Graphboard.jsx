import CalendarGraph from "../Graph/CalendarGraph";
import LineChart from "./components/Graph/LineChart";
import RadarChart from "./components/Graph/RadarChart";
import WordCloud from "./components/Graph/WordCloud";

function Graphboard() {
  return (
    <div className="graphboard-container">
      <h1 style={{ fontSize: 20 }}>감정그래프</h1>
      <h2 style={{ fontSize: 15 }}>어떤 감정들이 느껴졌는지 그래프로 확인해볼까요?</h2>
      <div className="graph-container">
        <section className="graph-section">
          <CalendarGraph />
        </section>
        <section className="graph-section">
          <LineChart />
        </section>
        <section className="graph-section">
          <RadarChart />
        </section>
        <section className="graph-section">
          <WordCloud />
        </section>
      </div>
    </div>
  );
}

export default Graphboard;
