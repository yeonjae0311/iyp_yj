import styled from 'styled-components';

export const InputText = styled.input`
  width: ${({ width }) => width || '320px'};
  height: 32px;
  border: none;
  border-bottom: 0.9px solid black;
  outline: none;
  font-size: 16px;
  display: flex;
  & + & {
    margin-top: 5px;
  }
`;
