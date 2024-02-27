import styled from 'styled-components';
import colorNames from '../../styles/colors';
import sizeNames from '../../styles/sizes';

const { big } = sizeNames;
const { black, white } = colorNames;

export const BigButton = styled.button`
  background: ${({ color }) => (color ? colorNames[color] : white)};
  font-size: ${({ size }) => (size ? sizeNames[size] : big)};
  width: ${({ width }) => width || '70%'};
  height: ${({ height }) => height || '60px'};
  color: ${({ fcolor }) => fcolor || black};
  border: 0.8px solid black;
  cursor: pointer;
  font-weight: bold;

  & + & {
    margin-top: 30px;
  }
`;

export const SubmitButton = styled.button`
  background: white;
  width: 100%;
  color: black;
  border: 0;
  cursor: pointer;
  font-weight: bold;
  text-decoration-line: none;
  text-align: center;
`;
