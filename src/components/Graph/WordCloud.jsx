import ReactWordcloud from 'react-wordcloud';

const words = [
  { text: '기쁘다', value: 80 },
  { text: '친구', value: 20 },
  { text: '가족', value: 30 },
  { text: '여행', value: 90 },
  { text: '부모님', value: 20 },
  { text: '선생님', value: 10 },
  { text: '여행', value: 230 },
  { text: '엠티', value: 190 },
  { text: '더위', value: 10 },
  { text: '선물', value: 150 },
  { text: '지하철', value: 90 },
  {text:"습하다",value:20},
  {text:"더럽다",value:10},
  {text:"사랑",value:100},
  {text:"짜증",value:30},
  {text:"불쾌",value:40}

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
    <div style={{ marginTop:30,marginBottom:20,height: "400px", width: '100%' }}> {/* Adjusted height */}
      <h1 style={{fontSize:18, textAlign:"center",marginBottom:-2}}>내가 쓴 행복 키워드</h1>
      <ReactWordcloud words={words} options={options} />
    </div>
  );
}

export default WordCloud;
