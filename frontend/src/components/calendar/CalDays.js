const CalDays = () => {
  const days = [];
  const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className={'col' + (i === 0 ? ' sun' : '')} key={i}>
        {date[i]}
      </div>,
    );
  }

  return <div className="days row">{days}</div>;
};

export default CalDays;
