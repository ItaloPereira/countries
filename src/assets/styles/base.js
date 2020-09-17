import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';

const Base = createGlobalStyle`
  body {
    ${Paragraph}
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background};

    transition: ${({ themeChanged }) =>
      themeChanged ? 'background 0.25s linear, color 0.25s linear' : '0s' };
  }
`;

export default Base;