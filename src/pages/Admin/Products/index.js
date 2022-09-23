import { Container, ContainerForm, ContainerTable, Location } from './styles';

const Products = () => {
  return (
    <Container>
      <Location>
        Admin &gt; <span> Produtos</span>
      </Location>
      <ContainerForm>
        <div>
          <p>Produto</p>
          <input type="text" placeholder="Nome" />
        </div>
        <div>
          <p>Descrição</p>
          <input type="text" placeholder="Descrição" />
        </div>
        <div>
          <p>Preço</p>
          <input type="text" placeholder="R$ 0,00" />
        </div>
        <div>
          <p>&nbsp;</p>
          <button type="submit" value="">
            +
          </button>
        </div>
      </ContainerForm>
      <ContainerTable>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Produto 001</td>
              <td>Maria</td>
              <td>1,99</td>
              <td>
                <button>X</button>
              </td>
            </tr>
            <tr>
              <td>Produto 002</td>
              <td>Maria</td>
              <td>1,99</td>
              <td>
                <button>X</button>
              </td>
            </tr>
          </tbody>
        </table>
      </ContainerTable>
    </Container>
  );
};

export default Products;
