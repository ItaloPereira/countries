import styled from 'styled-components';
import { rgba } from 'polished';
import { basicTransition } from '@assets/styles/theme';
import { ParagraphLargeHeightStrong } from '@assets/styles/typography';

export const Container = styled.div`
  position: relative;

  .select__box {
    position: relative;
    width: 100%;
    background: ${({ theme }) => theme.elements};
    transition: ${basicTransition};
    border: 1px solid ${({ theme }) => rgba(theme.text, 0.1)};
    padding: 11px 23px;
    cursor: pointer;
    box-sizing: border-box;

    &__label {
      ${ParagraphLargeHeightStrong}
      color: ${({ theme }) => theme.text};
      transition: ${basicTransition};
    }

    &__icon-wrapper {
      position: absolute;
      right: 16px;
      top: 17px;
      font-size: 7px;
      transition: ${basicTransition};
    }
  }

  .select__dropdown {
    position: absolute;
    top: 47px;
    right: 0;
    left: 0;
    padding: 1px 0;
    transition: ${basicTransition};
    background: ${({ theme }) => theme.elements};
    border: 1px solid ${({ theme }) => rgba(theme.text, 0.1)};

    &__option {
      padding: 10px 23px;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => rgba(theme.text, 0.05)};
      }

      &.active {
        background: ${({ theme }) => rgba(theme.text, 0.05)};
        pointer-events: none;
      }
    }
  }
`;

export default Container;