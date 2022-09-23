import { Outlet, Link } from 'react-router-dom';

import { Container, Wrapper, Sidebar } from './styles';

import Header from '../../components/Header';

const Shopper = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Sidebar>
          <Link to="/">Home</Link>
          <Link to="/cart">Cesta</Link>
        </Sidebar>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Shopper;
