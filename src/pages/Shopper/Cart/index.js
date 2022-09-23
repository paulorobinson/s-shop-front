import Location from '../../../components/Location';
import {
  Container,
  ContainerBuy,
  ContainerForm,
  ContainerName,
  ContainerTable,
  ContainerTotal,
} from './styles';

const Cart = () => {
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
                <th>Valor</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td>Produto 001</td>
                <td>Pão teste</td>
                <td>R$ 13,00</td>
                <td>
                  <button>X</button>
                </td>
              </tr>
            </tbody>
          </table>
        </ContainerTable>
        <ContainerTotal>Total: R$ 99,00</ContainerTotal>
        <ContainerBuy>
          <button type="submit">Finalizar Compra</button>
        </ContainerBuy>
      </ContainerForm>
    </Container>
  );
};

export default Cart;
