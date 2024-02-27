import styled, { css } from 'styled-components';
import colorNames from '../../styles/colors';
import sizeNames from '../../styles/sizes';

const { big } = sizeNames;

export const SubTitle = styled.h2`
  font-size: ${({ size }) => size || big};
  margin: 0;
  padding: 0;
  text-align: ${({ align }) => align || 'left'};
  color: ${({ color }) => (color ? colorNames[color] : '#000')};
  ${({ border_width, color }) =>
    border_width &&
    css`
      padding-bottom: 10px;
      border-bottom: ${border_width}px solid ${color ? color : '#000'};
    `}
  margin-bottom: ${({ margin_bottom }) => margin_bottom || '20px'};
`;

export const MiniTitle = styled.h3`
  font-size: ${({ size }) => size || '1.5rem'};
  font-weight: 600;
`;
