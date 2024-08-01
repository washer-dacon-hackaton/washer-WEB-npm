const Box2 = () => {
  const boxStyle = {
    width: '150px',
    height: '130px',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    border: '2px solid gray',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '10px',
    fontSize: '18px',
    color: 'black',
    margin: '20px',
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        행복점수
      </div>
    </div>
  );
};

export default Box2;
