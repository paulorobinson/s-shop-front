import Location from '../../../components/Location';
import { useApplication } from '../../../context/Application';

import {
  Container,
  ContainerForm,
  ContainerTable,
  ContainerSearch,
} from './styles';

const Home = () => {
  const { products } = useApplication();

  return (
    <Container>
      <Location location={['Home']} />

      <ContainerForm>
        <ContainerSearch>
          <input type="text" placeholder="Buscar por produto" />
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
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>
                    <input type="number" placeholder="Qtd" />
                  </td>
                  <td>
                    <button>Adicionar</button>
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
