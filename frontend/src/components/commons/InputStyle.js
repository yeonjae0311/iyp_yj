import styled from 'styled-components';
import colorNames from '../../styles/colors';

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

export const TitleInput = styled.input`
  font-size: 2rem;
  font-weight: 600;
  margin: 50px 0 0 40px;
  border: none;
  border-bottom: ${(props) => (props.$edit ? '1px solid black' : 'none')};
  text-align: ${({ align }) => align || 'left'};
  color: ${({ color }) => (color ? colorNames[color] : '#000')};
  margin-bottom: ${({ margin_bottom }) => margin_bottom || '20px'};
  width: 190px;
`;

export const TextArea = styled.textarea`
  border: none;
  border: ${(props) => (props.$edit ? '1px solid black' : 'none')};
  width: 350px;
  height: 170px;
  resize: none;
`;
