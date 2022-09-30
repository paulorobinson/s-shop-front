import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  max-width: 80rem;
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
  button {
    height: 2rem;
    width: 7rem;
    padding: 0 0.5rem;

    font-size: 1.2rem;
  }
`;
