import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const KEY_NAME_PRODUCTS = '@s-shop-products';

const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    const alreadyProduct = products.some(({ name }) => product.name === name);

    if (alreadyProduct) {
      alert(`Already product ${product.name}.`);
      return false;
    }

    const dataProducts = [...products, { ...product, id: uuidv4() }];
    setProducts(dataProducts);
    persistLocalStorage(KEY_NAME_PRODUCTS, dataProducts);
  };

  const removeProduct = (productId) => {
    const filteredProducts = products.filter(({ id }) => id !== productId);
    setProducts(filteredProducts);
    persistLocalStorage(KEY_NAME_PRODUCTS, filteredProducts);
  };

  const persistLocalStorage = (keyName, data) => {
    localStorage.setItem(keyName, JSON.stringify(data));
  };

  const getDataFromLocalStorage = (keyName) => {
    const dataLocalStorage = localStorage.getItem(keyName);
    return JSON.parse(dataLocalStorage);
  };

  useEffect(() => {
    const dataLocalStorage = getDataFromLocalStorage(KEY_NAME_PRODUCTS);
    if (dataLocalStorage !== null) {
      if (dataLocalStorage?.length !== 0) {
        setProducts(dataLocalStorage);
      }
    }
  }, []);

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
