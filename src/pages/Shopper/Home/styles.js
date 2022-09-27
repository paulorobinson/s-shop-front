import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;

  input {
    height: 2rem;

    padding-left: 0.25rem;
  }
`;

export const ContainerForm = styled.div``;

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: flex-end;

  input {
    margin-bottom: 2rem;
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
    padding: 0 0.5rem;
    width: 7rem;

    font-size: 1.2rem;
  }
  button:hover {
    cursor: pointer;
  }
`;
