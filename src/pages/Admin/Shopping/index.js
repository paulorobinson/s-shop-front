import Location from '../../../components/Location';
import { useApplication } from '../../../context/Application';
import { Container, ContainerTable } from './styles';

import { convertCurrency } from '../../../utils/convertCurrency';

const Shopping = () => {
  const { allShoppings } = useApplication();

  return (
    <Container>
      <Location location={['Admin', 'Compras']} />
      {allShoppings.length !== 0 && (
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
              {allShoppings.map((shopping) => (
                <tr key={shopping.id}>
                  <td>{shopping.name}</td>
                  <td>{shopping.quantity}</td>
                  <td>{convertCurrency(shopping.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ContainerTable>
      )}
    </Container>
  );
};

export default Shopping;
