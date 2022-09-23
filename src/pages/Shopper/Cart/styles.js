import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
`;

export const ContainerForm = styled.form`
  button {
    height: 2rem;
    padding: 0 0.5rem;

    font-size: 1.2rem;
  }
  button:hover {
    cursor: pointer;
  }
`;

export const ContainerName = styled.div`
  padding-bottom: 2rem;

  input {
    height: 2rem;
    width: 100%;

    padding-left: 0.25rem;
  }
`;

export const ContainerTable = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    font-size: 1.2rem;
    color: ${COLORS.BG};
    background-color: ${COLORS.BLUE};

    padding: 1rem;
    text-align: left;
  }

  th:last-child {
    width: 2rem;
  }

  tr {
    background-color: ${COLORS.BlUE_20};
  }

  tr:nth-child(even) {
    background-color: ${COLORS.BlUE_40};
  }

  td {
    font-size: 1rem;
    padding: 1rem;
  }
`;

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
