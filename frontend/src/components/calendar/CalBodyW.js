import styled from 'styled-components';
import { DivBox } from '../commons/BoxStyle';

const CalBodyW = () => {
  const DivBoxW = styled(DivBox)`
    width: 150px;
    height: 450px;
    display: flex;

    span {
      border: none;
      border-bottom: 0.9px solid black;
      outline: none;
      margin: 10px;
      padding-bottom: 7px;
      & + & {
        margin-top: 5px;
      }
    }

    & + & {
      margin-left: 5px;
    }
  `;

  const todos = [
    { contents: 'PM 1:20 치과예약', id: 1 },
    { contents: '', id: 2 },
    { contents: '', id: 3 },
    { contents: '', id: 4 },
    { contents: '', id: 5 },
    { contents: '', id: 6 },
    { contents: '', id: 7 },
  ];

  const renderTodos = todos.map((todos) => {
    return (
      <DivBoxW className={todos.id} key={todos.id}>
        <span>{todos.contents}</span>
      </DivBoxW>
    );
  });

  return (
    <div className="body" key="1">
      {renderTodos}
    </div>
  );
};

export default CalBodyW;
