import { render, screen } from '@testing-library/react';

import Header from './index';

describe('Header Component', () => {
  it('render correctly', () => {
    render(<Header />);

    expect(screen.getByText('S-Shop')).toBeInTheDocument();
  });
});
