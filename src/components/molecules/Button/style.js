import styled from 'styled-components';
import { rgba } from 'polished';
import { LabelMedium } from '@assets/styles/typography';

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.elements};
  padding: 8px;
  border: 1px solid ${({ theme }) => rgba(theme.text, 0.1)};
  outline: none;
  cursor: pointer;
  transition: .3s;
  opacity: ${({ disabled }) => disabled ? '.7' : '1'};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};

  &:hover {
    background: ${({ theme }) => rgba(theme.text, 0.03)};
  }

  &:active {
    background: ${({ theme }) => rgba(theme.text, 0.01)};
    transition: none;
  }

  .loader {
    opacity: ${({ loading }) => loading ? '1' : '0'};
    visibility: ${({ loading }) => loading ? 'visible' : 'hidden'};
    margin-right: ${({ loading }) => loading ? '10px' : '-16px'};
    display: inline-block;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
  }

  span {
    ${LabelMedium};
    color: ${({ theme }) => theme.text};
  }
`;

export default Container;