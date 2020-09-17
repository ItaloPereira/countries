import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1012px;
  margin: 40px auto 0;

  .home__filters {
    display: flex;
    justify-content: space-between;

    &__search-wrapper {
      max-width: 327px;
      flex-grow: 1;
    }

    &__region-wrapper {
      max-width: 242px;
      flex-grow: 1;
    }
  }

`;

export default PageWrapper;