import styled from 'styled-components';
import { Heading, LabelMedium, LabelMediumStrong } from '@assets/styles/typography';
import { smscreen } from '@assets/styles/medias';
import { basicTransition } from '@assets/styles/theme';

export const Viewport = styled.div`
  height: 80px;
  background: ${({ theme }) => theme.elements};
  transition: ${basicTransition};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  .nav__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1012px;
    margin: 0 auto;
    height: 100%;

    @media ${smscreen} {
      padding: 0 16px;
    }

    &__title {
      ${Heading}

      @media ${smscreen} {
        ${LabelMediumStrong}
      }
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

        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const NavWrapper = styled.div`
  
`;