import styled from 'styled-components';
import { smscreen } from '@assets/styles/medias';

export const PageWrapper = styled.div`
  max-width: 1012px;
  margin: 40px auto 0;

  @media ${smscreen} {
    padding: 0 16px;
  }

  .home__filters {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &__search-wrapper {
      max-width: 327px;
      flex-grow: 1;

      @media ${smscreen} {
        max-width: none;
        width: 100%;
        margin-bottom: 16px;
      }
    }

    &__region-wrapper {
      max-width: 242px;
      flex-grow: 1;

      @media ${smscreen} {
        max-width: none;
        width: 100%;
      }
    }
  }

  .home__list {
    margin-top: 40px;
  }
`;

export default PageWrapper;