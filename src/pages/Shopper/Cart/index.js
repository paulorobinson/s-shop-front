import { useEffect } from 'react';
import { useState } from 'react';
import Location from '../../../components/Location';
import { useApplication } from '../../../context/Application';
import {
  Container,
  ContainerBuy,
  ContainerForm,
  ContainerName,
  ContainerTable,
  ContainerTotal,
} from './styles';

import { convertCurrency } from '../../../utils/convertCurrency';

const Cart = () => {
  const { currentCart, products, removeProductFromCurrentCart, addShopping } =
    useApplication();

  const [userField, setUserField] = useState('');

  const [productsDetailsCurrentCart, setProductsDetailsCurrentCart] = useState(
    []
  );

  const totalPriceAllProducts = productsDetailsCurrentCart.reduce(
    (prev, curr) => prev + Number(curr.totalPrice),
    0
  );

  const totalQuantityAllProducts = productsDetailsCurrentCart.reduce(
    (prev, curr) => prev + Number(curr.quantity),
    0
  );

  const handleSendShopping = () => {
    const name = userField;
    const quantity = totalQuantityAllProducts;
    const total = totalPriceAllProducts;

    if (!name || !total || !quantity) {
      alert('Erro: Inválido nome ou quantidade');
      return;
    }
    addShopping({ name, quantity, total });
  };

  useEffect(() => {
    const joinProductsAndCart = currentCart.map((productCart) => ({
      ...productCart,
      ...products.find((product) => product.id === productCart.productId),
    }));

    const changedProductDetails = joinProductsAndCart.map((product) => {
      return { ...product, totalPrice: product.quantity * product.price };
    });

    setProductsDetailsCurrentCart(changedProductDetails);
  }, [currentCart, products]);

  return (
    <Container>
      <Location location={['Cesta']} />

      <ContainerForm>
        <ContainerName>
          <p>Nome: {userField}</p>
          <input
            type="text"
            placeholder="Nome"
            value={userField}
            onChange={(e) => setUserField(e.target.value)}
          />
        </ContainerName>
        {currentCart.length !== 0 && (
          <>
            <ContainerTable>
              <table>
                <thead>
                  <tr>
                    <th>Qtd</th>
                    <th>Produto</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Total</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {productsDetailsCurrentCart.map((product) => (
                    <tr key={product.productId}>
                      <td>{product.quantity}</td>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{convertCurrency(product.price)}</td>
                      <td>{convertCurrency(product.totalPrice)}</td>
                      <td>
                        <button
                          onClick={() =>
                            removeProductFromCurrentCart(product.productId)
                          }
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ContainerTable>
            <ContainerTotal>
              Total: {convertCurrency(totalPriceAllProducts)}
            </ContainerTotal>
          </>
        )}
        {userField && currentCart.length !== 0 && (
          <ContainerBuy>
            <button onClick={() => handleSendShopping()}>
              Finalizar Compra
            </button>
          </ContainerBuy>
        )}
      </ContainerForm>
    </Container>
  );
};

export default Cart;
