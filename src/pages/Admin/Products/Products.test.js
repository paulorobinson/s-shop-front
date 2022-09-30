import { render, screen } from '@testing-library/react';
import React from 'react';
import { ApplicationContext } from '../../../context/Application';

import Products from './index';

const mockProducts = [
  {
    name: 'Product_Mocked',
    description: 'Description_Mocked',
    price: 12.34,
    id: 'id_mocked',
  },
];

describe('Products Component (Admin)', () => {
  it('render correctly without products', () => {
    render(
      <ApplicationContext.Provider value={{ products: [] }}>
        <Products />
      </ApplicationContext.Provider>
    );

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  it('render correctly table with products', () => {
    render(
      <ApplicationContext.Provider value={{ products: mockProducts }}>
        <Products />
      </ApplicationContext.Provider>
    );

    expect(screen.getByText(mockProducts[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockProducts[0].description)).toBeInTheDocument();
    expect(screen.getByText('R$ 12,34')).toBeInTheDocument();
  });
});
