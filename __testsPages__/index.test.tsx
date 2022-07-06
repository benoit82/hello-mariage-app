import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const homepageTitle = screen.getByRole('heading', {
      name: /mariage à thème et sur mesure/i,
    });
    const homepageDescription = screen.getByText(
      /construisons ensemble votre projet/i,
    );

    [homepageTitle, homepageDescription].forEach((element) =>
      expect(element).toBeInTheDocument(),
    );
  });
});
