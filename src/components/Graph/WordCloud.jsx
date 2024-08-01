import ReactWordcloud from 'react-wordcloud';

const words = [
  { text: 'told', value: 80 },
  { text: 'mistake', value: 20 },
  { text: 'thought', value: 30 },
  { text: 'bad', value: 90 },
  { text: 'told', value: 20 },
  { text: 'mistake', value: 10 },
  { text: 'thought', value: 230 },
  { text: 'bad', value: 190 },
  { text: 'told', value: 10 },
  { text: 'mistake', value: 250 },
  { text: 'thought', value: 90 },
  { text: 'bad', value: 270 },
  { text: 'told', value: 20 },
  { text: 'mistake', value: 450 },
  { text: 'thought', value: 330 },
  { text: 'bad', value: 290 },
  { text: 'told', value: 800 },
  { text: 'mistake', value: 5 },
  { text: 'thought', value: 3 },
  { text: 'bad', value: 9 },
];

const options = {
  rotations: 3,  // 단어의 회전 각도 설정
  rotationAngles: [10, 70],  // 단어가 회전될 수 있는 각도 범위 설정
  scale: 'sqrt',  // sqrt 스케일을 사용하여 단어 크기 조정
  fontSizes: [20, 60],  // 최소 및 최대 글꼴 크기
  padding: 5,  // 단어 간의 간격을 늘려서 클라우드 형태 조절
  enableOptimizations: true, // 성능 최적화
};

function WordCloud() {
  return (
    <div style={{ height: "400px", width: '100%' }}> {/* Adjusted height */}
      <ReactWordcloud words={words} options={options} />
    </div>
  );
}

export default WordCloud;
