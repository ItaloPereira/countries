import styled from 'styled-components'; 
import { LabelMedium } from '@assets/styles/typography';
import { basicTransition } from '@assets/styles/theme';

export const Container = styled.div`
  ${LabelMedium}
  display: flex;
  justify-content: center;
  padding: 3px 15px;
  border: 1px solid ${({ theme }) => theme.text};
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'default' };
  width: fit-content;
  box-sizing: border-box;
  transition: ${basicTransition};
`;

export default Container;
