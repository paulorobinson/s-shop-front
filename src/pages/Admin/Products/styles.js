import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  max-width: 80rem;
`;

export const ContainerForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr auto;

  grid-gap: 1rem;

  padding-bottom: 2rem;

  p {
    font-size: 1.2rem;
    color: ${COLORS.BLUE};
  }

  button {
    height: 2.4rem;
  }
`;

export const ContainerTable = styled.div`
  button {
    height: 2.4rem;
  }
`;
