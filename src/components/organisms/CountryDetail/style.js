import styled from 'styled-components';
import { HeadingLarge, LabelMediumHeightStrong, LabelMediumHeight } from '@assets/styles/typography';
import { smscreen } from '@assets/styles/medias';

export const Container = styled.div`
  .country-detail__loader {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .country-detail__content {
    display: flex;
    justify-content: space-between;

    @media ${smscreen} {
      flex-wrap: wrap;
      margin-bottom: 32px;
    }

    &__flag {
      width: 414px;
      height: 296px;
      object-fit: contain;
      // object-position: top center;

      @media ${smscreen} {
        width: 100%;
        height: 60vw;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;

      @media ${smscreen} {
        margin-top: 32px;
      }

      &__title {
        ${HeadingLarge}
        margin-bottom: 24px;
      }

      &__columns {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;

        @media ${smscreen} {
          flex-wrap: wrap;
          margin-bottom: 0px;
        }

        &__column {
          width: 242px;

          @media ${smscreen} {
            width: 100%;
            margin-bottom: 32px;
          }

          &__row {
            margin-bottom: 8px;

            &:last-child {
              margin-bottom: 0;
            }

            &__title {
              ${LabelMediumHeightStrong}
            }
      
            &__description {
              ${LabelMediumHeight}
            }
          }
        }
      }

      &__footer {
        margin-top: auto;
        display: flex;

        @media ${smscreen} {
          flex-wrap: wrap;
        }

        &__title {
          ${LabelMediumHeightStrong}
          margin-right: 48px;
          margin-top: 8px;
        }

        &__tags {
          display: flex;
          flex-wrap: wrap;
          width: 357px;

          @media ${smscreen} {
            width: 100%;
          }

          &__wrapper {
            margin: 8px 8px 0 0;
            color: ${({ theme }) => theme.text};
          }

          &__empty {
            margin-top: 13px;
          }
        }
      }
    }
  }
`;

export default Container;