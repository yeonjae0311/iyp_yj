import styled from 'styled-components';
import { DivBox } from '../commons/BoxStyle';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

const CalBodyW = ({ toDo, currentMonth, updateModal }) => {
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

  return (
    <div className="body" key="1">
      <DivBoxW>
        <span>test</span>
      </DivBoxW>
    </div>
  );
};

export default CalBodyW;
