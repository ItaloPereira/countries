import styled from 'styled-components';
import { Heading, LabelMedium } from '@assets/styles/typography';

export const Viewport = styled.div`
  height: 80px;

  .nav__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1012px;
    margin: 0 auto;
    height: 100%;

    &__title {
      ${Heading}
    }

    &__toggle-theme {
      width: 113px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &__icon-wrapper {
        margin-right: 16px;
      }

      &__text {
        ${LabelMedium}
        display: block;
      }
    }
  }
`;

export const NavWrapper = styled.div`
  
`;