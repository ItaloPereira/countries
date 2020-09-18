import styled from 'styled-components';
import { rgba } from 'polished';
import { ParagraphLargeHeightExtraStrong, LabelSmallStrong, LabelSmall } from '@assets/styles/typography';
import { smscreen } from '@assets/styles/medias';

export const Container = styled.div`
  margin-bottom: 63px;
  align-self: stretch;
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};

  @media ${smscreen} {
    margin-bottom: 32px;
  }

  .card__flag {
    width: 100%;
    object-fit: cover;
    height: 153px;

    @media ${smscreen} {
      height: 55vw;
    }
  }

  .card__content {
    padding: 23px;
    border: 1px solid ${({ theme }) => rgba(theme.text, 0.1)};
    border-top-width: 0;
    height: 100%;

    &__title {
      ${ParagraphLargeHeightExtraStrong}
      margin-bottom: 8px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }

    &__row {
      margin-bottom: 8px;
      color: ${({ theme }) => rgba(theme.text, 0.9)};


      &__title {
        ${LabelSmallStrong}
      }

      &__description {
        ${LabelSmall}
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default Container;