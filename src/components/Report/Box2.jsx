const Box2 = () => {
  const boxStyle = {
    width: '120px',   // 박스 너비 축소
    height: '100px',  // 박스 높이 축소
    backgroundColor: 'rgba(217, 217, 217, 1)',
    border: '2px solid gray',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // 콘텐츠가 박스 내 중앙에 위치하도록 조정
    alignItems: 'center',
    paddingTop: '10px',
    fontSize: '16px',  // 텍스트 크기 약간 축소
    color: 'black',
    margin: '20px',
  };

  return (
    <div style={boxStyle}>
      <h1 style={{ fontWeight: "bold", fontSize: 20 }}>행복점수</h1>
      <h1 style={{ fontSize: 28, textAlign: "center", marginTop: 10, fontWeight: "bold" }}>점수</h1>
    </div>
  );
};

export default Box2;
