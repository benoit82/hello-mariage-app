import { render, screen } from '@testing-library/react';
import Navbar from '.';

describe('Navbar', () => {
  it('renders a menu, a list of links', () => {
    render(<Navbar />);

    const heading = screen.getByRole('list');

    expect(heading).toBeInTheDocument();
  });
});
