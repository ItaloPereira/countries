import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: ${({ pageCount }) => `calc(42px + 42px + ${pageCount * 36}px)`};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  user-select: none;

  .pagination__chevron-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: .3s;
    outline: none;

    &:hover {
      background: ${({ theme }) => lighten(0.8, theme.elements)};
    }
    
    &:active {
      background: ${({ theme }) => lighten(0.7, theme.elements)};
    }

    &.chevron-left {
      color: ${({ theme, active }) =>
        active === 1 ? lighten(0.5, theme.elements) : theme.elements};

      pointer-events: ${({ active }) =>
        active === 1 ? 'none' : 'auto'};
    }

    &.chevron-right {
      color: ${({ theme, active, pageCount }) => 
        active === pageCount ? lighten(0.5, theme.elements) : theme.elements};

      pointer-events: ${({ active, pageCount }) =>
        active === pageCount ? 'none' : 'auto'};

      transform: rotate(180deg);
    }
  }

  .pagination__page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin: 0 2px;
    border-radius: 50%;
    cursor: pointer;
    transition: .3s;
    outline: none;

    &.active {
      border: 1px solid ${({ theme }) => theme.elements}
    }

    &:hover {
      background: ${({ theme }) => lighten(0.8, theme.elements)};
    }

    &:active {
      background: ${({ theme }) => lighten(0.7, theme.elements)};
    }
  }
`;

export default Container;