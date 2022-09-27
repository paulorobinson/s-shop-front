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

const Cart = () => {
  const { currentCart, products } = useApplication();

  const [productsDetailsCurrentCart, setProductsDetailsCurrentCart] = useState(
    []
  );

  const totalPriceAllProducts = productsDetailsCurrentCart.reduce(
    (prev, curr) => prev + curr.totalPrice,
    0
  );

  console.log(totalPriceAllProducts);

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
          <p>Nome: Paulo Robinson Giaciani</p>
          <input type="text" placeholder="Nome" />
        </ContainerName>
        <ContainerTable>
          <table>
            <thead>
              <tr>
                <th>Qtd</th>
                <th>Produto</th>
                <th>Descrição</th>
                <th>Valor Total</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {productsDetailsCurrentCart.map((product) => (
                <tr key={product.productId}>
                  <td>{product.quantity}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.totalPrice || ''}</td>
                  <td>
                    <button>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ContainerTable>
        <ContainerTotal>Total: R$ {totalPriceAllProducts || ''}</ContainerTotal>
        <ContainerBuy>
          <button type="submit">Finalizar Compra</button>
        </ContainerBuy>
      </ContainerForm>
    </Container>
  );
};

export default Cart;
