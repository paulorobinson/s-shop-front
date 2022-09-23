import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
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

  input {
    height: 2rem;
    width: 100%;

    padding-left: 0.25rem;
  }

  button {
    height: 2rem;
    width: 2rem;

    font-size: 1.2rem;
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
    width: 1rem;
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

  button {
    height: 2rem;
    width: 2rem;

    font-size: 1.2rem;
  }
  button:hover {
    cursor: pointer;
  }
`;
