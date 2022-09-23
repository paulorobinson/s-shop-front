import Location from '../../../components/Location';
import {
  Container,
  ContainerForm,
  ContainerTable,
  ContainerSearch,
} from './styles';

const Home = () => {
  return (
    <Container>
      <Location location={['Home']} />

      <ContainerForm>
        <ContainerSearch>
          <input type="text" placeholder="Buscar" />
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
              <tr>
                <td>Produto 001</td>
                <td>Maria</td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <button>Adicionar</button>
                </td>
              </tr>
              <tr>
                <td>Produto 001</td>
                <td>Maria</td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <button>Adicionar</button>
                </td>
              </tr>
              <tr>
                <td>Produto 001</td>
                <td>Maria</td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <button>Adicionar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </ContainerTable>
      </ContainerForm>
    </Container>
  );
};

export default Home;
