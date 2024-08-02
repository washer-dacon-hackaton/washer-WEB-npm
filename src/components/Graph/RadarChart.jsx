import { ResponsiveRadar } from "@nivo/radar";

const data = [
  { taste: "슬픔", " ": 100 },
  { taste: "분노", " ": 140 },
  { taste: "기쁨", " ": 116 },
  { taste: "사랑", " ": 150 },
  { taste: "공포", " ": 118 },
  { taste: "감사", " ": 110 },
];

function RadarChart() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      {" "}
      {/* Adjusted height */}
      <h1 style={{ fontSize: 18, textAlign: "center" }}>
        한달동안 내가 선택한 단어
      </h1>
      <ResponsiveRadar
        data={data}
        keys={[" "]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 0, right: 80, bottom: 60, left: 80 }}
        borderColor={{ from: "color" }}
        gridLabelOffset={36}
        dotSize={5}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        colors={{ scheme: "nivo" }}
        blendMode="multiply"
        motionConfig="wobbly"
        theme={{
          axis: {
            ticks: {
              text: { fontSize: 20 }, // 축의 눈금 텍스트 크기
            },
            legend: {
              text: { fontSize: 20 }, // 축 레전드 텍스트 크기
            },
          },
          grid: {
            line: {
              stroke: "#ddd",
              strokeWidth: 1,
            },
          },
          legends: {
            text: { fontSize: 60 }, // 레전드 텍스트 크기
          },
          labels: {
            text: { fontSize: 70 }, // 레이더 차트의 라벨 텍스트 크기
          },
        }}
      />
    </div>
  );
}

export default RadarChart;
