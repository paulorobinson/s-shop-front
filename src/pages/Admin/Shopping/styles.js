import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
`;

export const Location = styled.p`
  font-size: 1.4rem;

  span {
    color: ${COLORS.BLUE};
  }
`;

export const ContainerTable = styled.div`
  padding: 2rem 0;

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
`;
