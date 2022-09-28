import { render, screen } from '@testing-library/react';

import Location from './index';

describe('Location Component', () => {
  it('render correctly with prop location', () => {
    const textMock = 'Text Test';
    render(<Location location={[textMock]} />);

    expect(screen.getByText(textMock)).toBeInTheDocument();
  });
});
