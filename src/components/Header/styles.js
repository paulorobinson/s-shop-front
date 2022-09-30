import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5rem;

  background-color: ${COLORS.BLUE};
  color: ${COLORS.BG};
  font-size: 2rem;
  font-weight: bold;

  box-shadow: 0 8px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`;
