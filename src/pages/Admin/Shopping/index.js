import { Container, ContainerTable, Location } from './styles';

const Shopping = () => {
  return (
    <Container>
      <Location>
        Admin &gt; <span> Compras</span>
      </Location>
      <ContainerTable>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Qtd</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Produto 001</td>
              <td>3</td>
              <td>R$ 100,00</td>
            </tr>
            <tr>
              <td>Produto 001</td>
              <td>3</td>
              <td>R$ 100,00</td>
            </tr>
            <tr>
              <td>Produto 001</td>
              <td>3</td>
              <td>R$ 100,00</td>
            </tr>
          </tbody>
        </table>
      </ContainerTable>
    </Container>
  );
};

export default Shopping;
