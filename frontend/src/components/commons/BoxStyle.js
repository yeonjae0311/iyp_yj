import styled from 'styled-components';

export const FormBox = styled.form`
  width: ${({ width }) => width || '622px'};
  min-height: ${({ height }) => height || '400px'};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 92px;
  margin-top: 80px;
`;

export const DivBox = styled.div`
  width: ${({ width }) => width || '622px'};
  min-height: ${({ height }) => height || '400px'};
  border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
