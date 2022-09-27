import { useEffect } from 'react';
import { useState } from 'react';
import Location from '../../../components/Location';
import { useApplication } from '../../../context/Application';

import {
  Container,
  ContainerForm,
  ContainerTable,
  ContainerSearch,
} from './styles';

const Home = () => {
  const {
    products,
    currentCart,
    addProductFromCurrentCart,
    removeProductFromCurrentCart,
  } = useApplication();

  const [search, setSearch] = useState('');
  const [productsQuantity, setProductsQuantity] = useState([]);

  const initialProductsQuantity = () => {
    const tempArray = [];
    currentCart.map((currentCart) => {
      return (tempArray[currentCart.productId] = currentCart.quantity);
    });
    return tempArray;
  };

  useEffect(() => {
    setProductsQuantity(initialProductsQuantity());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCart]);

  const handleChangedQuantity = (event, productId) => {
    productsQuantity[productId] = event.target.value;
    setProductsQuantity(productsQuantity);
  };

  const handleAddProductToCart = (productId) => {
    addProductFromCurrentCart(productId, productsQuantity[productId]);
    alreadyExistsProductFromCurrentCart(productId);
  };

  const handleRemoveProductToCart = (productId) => {
    removeProductFromCurrentCart(productId);
  };

  const alreadyExistsProductFromCurrentCart = (productId) => {
    const existProduct = currentCart.some(
      (currentCard) =>
        productId === currentCard.productId && currentCard.quantity > 0
    );
    return existProduct;
  };

  const filteredProducts =
    search.length > 0
      ? products.filter((product) =>
          product.name.toUpperCase().includes(search.toUpperCase())
        )
      : products;

  return (
    <Container>
      <Location location={['Home']} />

      <ContainerForm>
        <ContainerSearch>
          <input
            type="text"
            placeholder="Buscar por produto"
            onChange={(e) => setSearch(e.target.value)}
          />
        </ContainerSearch>
        <ContainerTable>
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Descrição</th>
                <th>Qtd</th>
                <th>Adicionar</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>
                    <input
                      type="number"
                      step="1"
                      placeholder="Qtd"
                      disabled={alreadyExistsProductFromCurrentCart(product.id)}
                      onChange={(e) => handleChangedQuantity(e, product.id)}
                      defaultValue={productsQuantity[product.id]}
                    />
                  </td>
                  <td>
                    {!alreadyExistsProductFromCurrentCart(product.id) && (
                      <button
                        onClick={() => handleAddProductToCart(product.id)}
                      >
                        Adicionar
                      </button>
                    )}
                    {alreadyExistsProductFromCurrentCart(product.id) && (
                      <button
                        onClick={() => handleRemoveProductToCart(product.id)}
                      >
                        Remover
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ContainerTable>
      </ContainerForm>
    </Container>
  );
};

export default Home;
