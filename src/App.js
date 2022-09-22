import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Admin from './pages/Admin';
import Products from './pages/Admin/Products';
import Shopping from './pages/Admin/Shopping';

import Shopper from './pages/Shopper';
import Home from './pages/Shopper/Home';
import Cart from './pages/Shopper/Cart';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Shopper />} path="/">
            <Route element={<Home />} path="/" />
            <Route element={<Cart />} path="/cart" />
          </Route>

          <Route element={<Admin />} path="/admin">
            <Route element={<Products />} path="/admin" />
            <Route element={<Shopping />} path="/admin/shopping" />
          </Route>

          <Route element={<h1>Not Found</h1>} path="*" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
