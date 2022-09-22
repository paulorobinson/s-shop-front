import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const Admin = () => {
  return (
    <>
      <Header />
      <div>admin</div>
      <Outlet />
    </>
  );
};

export default Admin;
