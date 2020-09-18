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
    padding: ${({ type }) => type === 'search' ? '11px 48px' : '11px'};
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

  .input__icon-reset-wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    cursor: pointer;
  }
`;

export default Container;