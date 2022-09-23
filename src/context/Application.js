import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: uuidv4() }]);
  };

  const removeProduct = (productId) => {
    const filteredProducts = products.filter(({ id }) => id !== productId);
    setProducts(filteredProducts);
  };

  return (
    <ApplicationContext.Provider
      value={{ addProduct, removeProduct, products }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

const useApplication = () => {
  const context = useContext(ApplicationContext);

  return context;
};

export { ApplicationProvider, useApplication };
