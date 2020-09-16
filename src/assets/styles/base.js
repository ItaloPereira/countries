import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';
import { Primary } from './colors';

const Base = createGlobalStyle`
  body {
    ${Paragraph}
    color: ${Primary};
    background: ${({ theme }) => theme.background};
    transition: background 0.25s linear;
  }
`;

export default Base;