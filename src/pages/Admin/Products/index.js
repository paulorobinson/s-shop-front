import { useEffect, useRef } from 'react';
import Location from '../../../components/Location';
import { useApplication } from '../../../context/Application';
import { Container, ContainerForm, ContainerTable } from './styles';

import { convertCurrency } from '../../../utils/convertCurrency';

const Products = () => {
  const inputNameRef = useRef(null);

  const { addProduct, removeProduct, products } = useApplication();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    let dataProduct = {};

    for (let [name, value] of formData) {
      if (value === '') {
        alert(`Por favor, entre com um valor`);
        return false;
      }
      dataProduct = {
        ...dataProduct,
        [name]: value,
      };
    }
    addProduct(dataProduct);
    event.target.reset();
    inputNameRef.current.focus();
  };

  useEffect(() => {
    inputNameRef.current.focus();
  }, []);

  return (
    <Container>
      <Location location={['Admin', 'Produtos']} />
      <ContainerForm onSubmit={(e) => handleSubmit(e)}>
        <div>
          <p>Produto</p>
          <input
            type="text"
            name="name"
            ref={inputNameRef}
            placeholder="Nome"
          />
        </div>
        <div>
          <p>Descrição</p>
          <input type="text" name="description" placeholder="Descrição" />
        </div>
        <div>
          <p>Preço</p>
          <input type="number" step={0.01} name="price" placeholder="R$ 0,00" />
        </div>
        <div>
          <p>&nbsp;</p>
          <button type="submit">Adicionar</button>
        </div>
      </ContainerForm>
      {products.length !== 0 && (
        <ContainerTable>
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{convertCurrency(product.price)}</td>
                  <td>
                    <button onClick={() => removeProduct(product.id)}>
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ContainerTable>
      )}
      {products.length === 0 && <h2>Não possui itens.</h2>}
    </Container>
  );
};

export default Products;
