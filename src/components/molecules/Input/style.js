import styled from 'styled-components';
import { rgba } from 'polished';

import { ParagraphLargeHeight } from '@assets/styles/typography';
import { basicTransition } from '@assets/styles/theme';

export const Container = styled.div`
  position: relative;

  .input__el {
    ${ParagraphLargeHeight}
    width: 100%;
    background: ${({ theme }) => theme.elements};
    transition: ${basicTransition};
    border: 1px solid ${({ theme }) => rgba(theme.text, 0.1)};
    padding: 12px;
    padding-left: ${({ type }) => type === 'search' ? '48px' : '12px'};
    outline: none;
    color: ${({ theme }) => theme.text};

    &::placeholder {
      color: ${({ theme }) => rgba(theme.text, 0.5)};
      transition: ${basicTransition};
    }
  }

  .input__icon-search-wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
  }
`;

export default Container;