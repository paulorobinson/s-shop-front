import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { api } from '../services/api';

const KEY_NAME_CURRENT_CART = '@s-shop-current-cart';

const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentCart, setCurrentCart] = useState([]);
  const [allShoppings, setAllShoppings] = useState([]);

  const addProduct = async (product) => {
    const alreadyProduct = await api
      .get(`/products/?name=${product.name}`)
      .then(({ data }) => data)
      .catch((error) => console.log(error));

    if (alreadyProduct.length > 0) {
      alert(`Já existe o produto ${product.name}.`);
      return false;
    }

    const dataProduct = { ...product, id: uuidv4() };

    await api
      .post('/products', dataProduct)
      .then(({ data }) => setProducts([...products, data]))
      .catch((error) => console.log(error));
  };

  const removeProduct = async (productId) => {
    const alreadyProduct = await api
      .get(`/products/?id=${productId}`)
      .then(({ data }) => data)
      .catch((error) => console.log(error));

    if (alreadyProduct.length === 0) {
      alert('Produto não encontrado');
      return;
    }

    await api
      .delete(`/products/${productId}`)
      .then(({ status }) => {
        if (status === 200) {
          const filteredProducts = products.filter(
            (product) => productId !== product.id
          );
          setProducts(filteredProducts);
        }
      })
      .catch((error) => console.log(error));
  };

  const addProductFromCurrentCart = (productId, quantity) => {
    const qty = Number(quantity);
    if (isNaN(qty) || qty === 0) {
      alert('Por favor, digite uma quantidade do produto');
      return false;
    }
    const data = [...currentCart, { productId, quantity }];
    setCurrentCart(data);
    persistLocalStorage(KEY_NAME_CURRENT_CART, data);
  };

  const removeProductFromCurrentCart = (productId) => {
    const filteredCurrentCart = currentCart.filter(
      (product) => product.productId !== productId
    );
    setCurrentCart(filteredCurrentCart);
    persistLocalStorage(KEY_NAME_CURRENT_CART, filteredCurrentCart);
  };

  const addShopping = async (shoppingData) => {
    const data = { ...shoppingData, id: uuidv4() };
    await api
      .post('/shopping', data)
      .then(() => {
        alert('Sucesso');
        removeDataFromLocalStorage(KEY_NAME_CURRENT_CART);
        window.location.replace('./');
      })
      .catch((error) => console.log(error));
  };

  const getAllShoppings = async () => {
    await api
      .get('/shopping')
      .then(({ data }) => setAllShoppings(data))
      .catch((error) => console.log(error));
  };

  const persistLocalStorage = (keyName, data) => {
    localStorage.setItem(keyName, JSON.stringify(data));
  };

  const getDataFromLocalStorage = (keyName) => {
    const dataLocalStorage = localStorage.getItem(keyName);
    return JSON.parse(dataLocalStorage);
  };

  const removeDataFromLocalStorage = (keyName) => {
    localStorage.removeItem(keyName);
  };

  useEffect(() => {
    api
      .get('/products')
      .then(({ data }) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const dataLocalStorageCurrentCart = getDataFromLocalStorage(
      KEY_NAME_CURRENT_CART
    );

    if (dataLocalStorageCurrentCart !== null) {
      if (dataLocalStorageCurrentCart?.length !== 0) {
        setCurrentCart(dataLocalStorageCurrentCart);
      }
    }
  }, []);

  useEffect(() => {
    getAllShoppings();
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        currentCart,
        addProductFromCurrentCart,
        removeProductFromCurrentCart,
        addShopping,
        allShoppings,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

const useApplication = () => {
  const context = useContext(ApplicationContext);

  return context;
};

export { ApplicationProvider, useApplication, ApplicationContext };
