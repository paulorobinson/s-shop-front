import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const Shopper = () => {
  return (
    <>
      <Header />
      <div>Shopper</div>
      <Outlet />
    </>
  );
};

export default Shopper;
