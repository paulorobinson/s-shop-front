import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  max-width: 80rem;
`;

export const ContainerForm = styled.div`
  button {
    height: 2rem;
    padding: 0 0.5rem;

    font-size: 1.2rem;
  }
`;

export const ContainerName = styled.div`
  padding-bottom: 2rem;
`;

export const ContainerTable = styled.div``;

export const ContainerTotal = styled.div`
  padding: 2rem 0;

  display: flex;
  justify-content: flex-end;

  font-size: 1.4rem;
  font-weight: bold;
  color: ${COLORS.BLUE};
`;

export const ContainerBuy = styled.div`
  display: flex;
  justify-content: flex-end;
`;
