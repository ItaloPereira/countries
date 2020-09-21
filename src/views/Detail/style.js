import styled from 'styled-components';
import { smscreen } from '@assets/styles/medias';
import { LabelMedium } from '@assets/styles/typography';

export const PageWrapper = styled.div`
  max-width: 1012px;
  margin: 40px auto 0;

  @media ${smscreen} {
    padding: 0 16px;
  }

  .detail__back {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.text};

    &:hover .detail__back__text {
      text-decoration: underline;
    }

    &__icon-wrapper {
      margin-right: 16px;
      font-size: 14px;
    }

    &__text {
      ${LabelMedium}
      margin-bottom: 4px;
    }
  }

  .detail__content {
    margin-top: 40px;

    @media ${smscreen} {
      margin-top: 32px;
    }
  }
`;

export default PageWrapper;