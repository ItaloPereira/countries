import { smscreen } from '@assets/styles/medias';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 23.815% 23.815% 23.815% 23.815%;
  column-gap: 1.58%;

  @media ${smscreen} {
    grid-template-columns: 100%;
  }

  .list-countries__loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 5;

    @media ${smscreen} {
      grid-column-end: 1;
    }
  }

  .list-countries__button-container {
    grid-column-start: 1;
    grid-column-end: 5;
    margin-bottom: 64px;

    @media ${smscreen} {
      grid-column-end: 1;
      margin-bottom: 32px;
    }

    &__wrapper {
      width: 300px;
      margin: 0 auto;

      @media ${smscreen} {
        width: 100%;
      }
    }
  }
`;

export default Container;