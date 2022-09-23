import { Outlet, Link } from 'react-router-dom';

import { Container, Wrapper, Sidebar } from './styles';

import Header from '../../components/Header';

const Shopper = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Sidebar>
          <Link to="/">Produtos</Link>
          <Link to="/cart">Compras</Link>
        </Sidebar>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Shopper;
