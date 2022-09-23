import { Outlet, Link } from 'react-router-dom';

import { Container, Wrapper, Sidebar } from './styles';

import Header from '../../components/Header';

const Admin = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Sidebar>
          <Link to="/admin">Produtos</Link>
          <Link to="/admin/shopping">Compras</Link>
        </Sidebar>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Admin;
