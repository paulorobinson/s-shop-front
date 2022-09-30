import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  height: calc(100vh - 5rem);
`;

export const Sidebar = styled.aside`
  min-width: 10rem;

  display: flex;
  flex-direction: column;

  background-color: ${COLORS.GRAY};

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;

    color: ${COLORS.BG};
    padding: 2rem 0;
    background-color: ${COLORS.GRAY};

    font-size: 1.4rem;
    transition: filter 0.2s;
  }

  a:hover {
    filter: brightness(0.8);
  }
`;

export const SidebarItem = styled.div``;
